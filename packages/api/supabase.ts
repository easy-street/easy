import { getEnvVars, keys } from "utils";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { SupabaseQueryBuilder } from "@supabase/supabase-js/dist/main/lib/SupabaseQueryBuilder";
import type {
  PostgrestFilterBuilder,
  PostgrestQueryBuilder,
} from "@supabase/postgrest-js";
import type {
  Entries,
  Filter,
  Filters,
  FilterValue,
  ServiceParams,
  TRecursiveField,
} from "./types";

export type Aliases = Record<
  string,
  Record<string, { foreignKey?: string; resource: string }>
>;
type Method = "insert" | "select" | "update" | "delete";
type ExtendedServiceParams<T> = ServiceParams<T> & {
  aliases: Aliases;
  db: SupabaseClient;
};

const { DEFAULT_PAGE_SIZE } = getEnvVars({
  DEFAULT_PAGE_SIZE: process.env.DEFAULT_PAGE_SIZE,
});

function fromDBMethod<T extends { id: unknown }>({
  id,
  data,
  isCount,
  method,
  queryBuilder,
  select,
}: {
  id?: T[keyof T];
  data?: any;
  isCount: boolean;
  method: Method;
  queryBuilder: PostgrestQueryBuilder<T> | SupabaseQueryBuilder<T>;
  select: string;
}) {
  const qb = queryBuilder as PostgrestQueryBuilder<T>;

  switch (method) {
    case "insert":
      return qb.insert(data).select(select);
    case "select":
      return id
        ? qb.select(select).eq("id", id)
        : qb.select(select, { count: "exact", head: isCount });
    case "update":
      return id
        ? qb.update(data).eq("id", id).select(select)
        : qb.update(data).select(select);
    case "delete":
      return id
        ? qb.delete().eq("id", id).select(select)
        : qb.delete().select(select);
  }
}

function maybeWithAllFields({
  aliases,
  resource,
  resourceSelect,
  select,
}: {
  aliases: Aliases;
  resource: string;
  resourceSelect: string;
  select: TRecursiveField;
}) {
  const aliasFields = Object.keys(aliases[resource]);

  return [
    Object.keys(select)
      .map((alias) => alias.split("!")[0])
      .filter((field) => !aliasFields.includes(field)).length === 0
      ? "*, id::text"
      : undefined,
    resourceSelect,
  ]
    .filter(Boolean)
    .join(", ");
}

function getResourceSelect<T>({
  params,
  select,
}: {
  params: ExtendedServiceParams<T>;
  select: TRecursiveField;
}): string {
  const { aliases, resource } = params;

  return Object.entries(select)
    .map((entry) => {
      const [originalAlias, field] = entry;
      const [alias, joinType = "!inner"] = originalAlias.split(/(?=!)/g);
      const relation = aliases[resource][alias];

      if (!relation) {
        return alias === "id" ? `${alias}::text` : alias;
      }

      const { foreignKey, resource: relationResource } = relation;
      const embeddedResource = `${alias}${
        alias === relationResource ? "" : `:${relationResource}`
      }${foreignKey ? `!${foreignKey}` : ""}${joinType}`;

      if (field === false) {
        return null;
      }

      if (field === true) {
        return `${embeddedResource} ( *, id::text )`;
      }

      return `${embeddedResource} ( ${maybeWithAllFields({
        aliases,
        resource: relationResource,
        resourceSelect: getResourceSelect<T>({
          params: {
            ...params,
            resource: relationResource,
          },
          select: field,
        }),
        select: field,
      })} )`;
    })
    .filter((x) => x !== null)
    .join(", ");
}

function getSelect<T>(params: ExtendedServiceParams<T>): string {
  const { aliases, query, resource } = params;
  const { $select = {} } = query;
  const fields = Object.keys($select);

  if (fields.length === 0) {
    return "*, id::text";
  }

  return maybeWithAllFields({
    aliases,
    resource,
    resourceSelect: getResourceSelect({
      params,
      select: $select,
    }),
    select: $select,
  });
}

function getOr<T>(
  or: Partial<Record<keyof T, FilterValue<T> | Filter<T>>>[]
): string {
  return or
    .map((filter) => {
      const entries = Object.entries(filter) as Entries<Partial<Filters<T>>>;
      const values = entries.map((entry) => {
        const [key, value] = entry;

        if (
          value === true ||
          value === false ||
          value === null ||
          value === ""
        ) {
          return `${key}.is.${value}`;
        }

        if (
          ["$in", "$gt", "$gte", "$lt", "$lte", "$ne", "$nin"].some((key) =>
            (value as Filter<T>).hasOwnProperty(key)
          )
        ) {
          const { $in, $gt, $gte, $lt, $lte, $ne, $nin } = value as Filter<T>;

          return [
            $in === undefined ? null : `${key}.in.(${$in.join(",")})`,
            $gt === undefined ? null : `${key}.gt.${$gt}`,
            $gte === undefined ? null : `${key}.gte.${$gte}`,
            $lt === undefined ? null : `${key}.lt.${$lt}`,
            $lte === undefined ? null : `${key}.lte.${$lte}`,
            $ne === undefined ? null : `or(${key}.is.null,${key}.neq.${$ne})`,
            $nin === undefined ? null : `${key}.not.in.(${$nin.join(",")})`,
          ]
            .filter(Boolean)
            .join(",");
        } else {
          return `${key}.eq.${value}`;
        }
      });

      return entries.length > 1 ? `and(${values})` : values;
    })
    .join(",");
}

export function getFilterBuilder<T>({
  filterBuilder,
  isCount = false,
  params,
}: {
  filterBuilder: PostgrestFilterBuilder<T>;
  isCount?: boolean;
  params: ServiceParams<T>;
}): PostgrestFilterBuilder<T> {
  const {
    $limit = Number(DEFAULT_PAGE_SIZE),
    $or,
    $select,
    $skip = 0,
    $sort = {},
    ...rest
  } = params.query;
  const entries = Object.entries(rest) as Entries<Filters<T>>;

  let dbQuery = filterBuilder;

  if ($or && $or.length > 0) {
    dbQuery = dbQuery.or(getOr<T>($or));
  }

  entries.forEach((entry) => {
    const [key, value] = entry;

    if (value === true || value === false) {
      dbQuery = dbQuery.is(key, value === true);
      return;
    }

    if (value === "" || value === null) {
      dbQuery = dbQuery.is(key, null);
      return;
    }

    if (
      ["$in", "$gt", "$gte", "$lt", "$lte", "$ne", "$nin"].some((key) =>
        (value as Filter<T>).hasOwnProperty(key)
      )
    ) {
      const { $in, $gt, $gte, $lt, $lte, $ne, $nin } = value as Filter<T>;

      if ($in !== undefined) {
        dbQuery = dbQuery.in(key, $in as T[keyof T][]);
      }

      if ($gt !== undefined) {
        dbQuery = dbQuery.gt(key, $gt as T[keyof T]);
      }

      if ($gte !== undefined) {
        dbQuery = dbQuery.gte(key, $gte as T[keyof T]);
      }

      if ($lt !== undefined) {
        dbQuery = dbQuery.lt(key, $lt as T[keyof T]);
      }

      if ($lte !== undefined) {
        dbQuery = dbQuery.lte(key, $lte as T[keyof T]);
      }

      if ($ne !== undefined) {
        if ($ne === "" || $ne === null || $ne === true || $ne === false) {
          dbQuery = dbQuery.not(key, "is", $ne);
        } else {
          dbQuery = dbQuery.or(`${key}.is.null,${key}.neq.${$ne}`);
        }
      }

      if ($nin !== undefined) {
        dbQuery = dbQuery.not(key, "in", `(${$nin.join(",")})`);
      }
    } else {
      dbQuery = dbQuery.eq(key, value as T[keyof T]);
    }
  });

  dbQuery = dbQuery.range($skip, $skip + $limit - 1);

  if (isCount) {
    return dbQuery;
  }

  for (const key of keys($sort)) {
    dbQuery = dbQuery.order(key, { ascending: $sort[key] });
  }

  return dbQuery;
}

function fromDB<T extends { id: unknown }>({
  id,
  data,
  method,
  params,
}: {
  id?: unknown;
  data?: any;
  method: Method;
  params: ExtendedServiceParams<T>;
}) {
  const {
    db,
    query: { $limit = Number(DEFAULT_PAGE_SIZE) },
    resource,
  } = params;
  const isCount = Number($limit) === 0;

  return getFilterBuilder({
    filterBuilder: fromDBMethod({
      id: id as T[keyof T],
      data,
      isCount,
      method,
      queryBuilder: db.from<T>(resource),
      select: getSelect(params),
    }),
    isCount,
    params,
  });
}

export async function create<T extends { id: unknown }>(
  data: Partial<T>,
  params: ExtendedServiceParams<T>
) {
  const { data: created } = await fromDB<T>({
    data,
    method: "insert",
    params,
  }).single();

  if (!created) {
    throw new Error("Something went wrong");
  }

  return created;
}

export async function find<T extends { id: unknown }>(
  params: ExtendedServiceParams<T>
) {
  const {
    query: { $limit = Number(DEFAULT_PAGE_SIZE), $skip = 0 },
  } = params;

  const { count, data = [] } = await fromDB<T>({
    method: "select",
    params,
  });

  return {
    total: count ? BigInt(count) : null,
    limit: $limit,
    skip: $skip,
    data,
  };
}

export async function get<T extends { id: unknown }>(
  id: unknown,
  params: ExtendedServiceParams<T>
) {
  return (
    await fromDB<T>({
      id,
      method: "select",
      params,
    }).maybeSingle()
  ).data;
}

export async function patch<T extends { id: unknown }>(
  id: unknown,
  data: Partial<T>,
  params: ExtendedServiceParams<T>
) {
  return (
    await fromDB<T>({
      id,
      data,
      method: "update",
      params,
    }).maybeSingle()
  ).data;
}

export async function remove<T extends { id: unknown }>(
  id: unknown,
  params: ExtendedServiceParams<T>
) {
  return (
    await fromDB<T>({
      id,
      method: "delete",
      params,
    }).maybeSingle()
  ).data;
}
