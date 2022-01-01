import { getEnvVars, keys } from "./utils";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { SupabaseQueryBuilder } from "@supabase/supabase-js/dist/main/lib/SupabaseQueryBuilder";
import type {
  PostgrestFilterBuilder,
  PostgrestMaybeSingleResponse,
  PostgrestQueryBuilder,
  PostgrestSingleResponse,
} from "@supabase/postgrest-js";
import type {
  Entries,
  Filter,
  Filters,
  FilterValue,
  ServiceParams,
  TRecursiveField,
} from "./types";

type Aliases = Record<string, { foreignKey?: string; resource: string }>;
type Method = "insert" | "select" | "update" | "delete";

export type ModelConfigs = Record<
  string,
  {
    aliases?: Aliases;
    defaultSelect?: string;
    keyField?: string;
  }
>;
type ExtendedServiceParams<T> = ServiceParams<T> & {
  db: SupabaseClient;
  modelConfigs: ModelConfigs;
};

const { DEFAULT_PAGE_SIZE } = getEnvVars({
  DEFAULT_PAGE_SIZE: process.env.DEFAULT_PAGE_SIZE,
});

function getKeyField<T>(resource: string, params: ExtendedServiceParams<T>) {
  return params.modelConfigs[resource]?.keyField ?? "id";
}

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
  const isIdUndefined = id === undefined;

  switch (method) {
    case "insert":
      return qb.insert(data).select(select);
    case "select":
      return isIdUndefined
        ? qb.select(select, { count: "exact", head: isCount })
        : qb.select(select).eq("id", id);
    case "update":
      return isIdUndefined
        ? qb.update(data).select(select)
        : qb.update(data).eq("id", id).select(select);
    case "delete":
      return isIdUndefined
        ? qb.delete().select(select)
        : qb.delete().eq("id", id).select(select);
  }
}

function maybeWithAllFields({
  modelConfigs = {},
  resource,
  resourceSelect,
  select,
}: {
  modelConfigs: ModelConfigs;
  resource: string;
  resourceSelect: string;
  select: TRecursiveField;
}) {
  const { aliases = {}, defaultSelect } = modelConfigs[resource] ?? {};
  const aliasFields = Object.keys(aliases);

  return [
    Object.keys(select)
      .map((alias) => alias.split("!")[0])
      .filter((field) => !aliasFields.includes(field)).length === 0
      ? defaultSelect ?? "*"
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
  const { modelConfigs, resource } = params;
  const aliases = modelConfigs[resource]?.aliases ?? {};
  const keyField = getKeyField<T>(resource, params);

  return Object.entries(select)
    .map((entry) => {
      const [originalAlias, field] = entry;
      const [alias, joinType = "!inner"] = originalAlias.split(/(?=!)/g);
      const relation = aliases[alias];

      if (!relation) {
        return alias === keyField ? keyField : alias;
      }

      const { foreignKey, resource: relationResource } = relation;
      const embeddedResource = `${alias}${
        alias === relationResource ? "" : `:${relationResource}`
      }${foreignKey ? `!${foreignKey}` : ""}${joinType}`;

      if (field === false) {
        return null;
      }

      if (field === true) {
        return `${embeddedResource} ( *, ${keyField} )`;
      }

      return `${embeddedResource} ( ${maybeWithAllFields({
        modelConfigs,
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
  const { modelConfigs, query, resource } = params;
  const { defaultSelect } = modelConfigs[resource] ?? {};
  const { $select = {} } = query;
  const fields = Object.keys($select);

  if (fields.length === 0) {
    return defaultSelect ?? "*";
  }

  return maybeWithAllFields({
    modelConfigs,
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
        const left = key as string;
        const column = left.includes(".")
          ? left.slice(left.lastIndexOf(".") + 1)
          : left;

        if (
          value === true ||
          value === false ||
          value === null ||
          value === ""
        ) {
          return `${column}.is.${value}`;
        }

        if (
          ["$in", "$gt", "$gte", "$lt", "$lte", "$ne", "$nin"].some((key) =>
            (value as Filter<T>).hasOwnProperty(key)
          )
        ) {
          const { $in, $gt, $gte, $lt, $lte, $ne, $nin } = value as Filter<T>;

          return [
            $in === undefined ? null : `${column}.in.(${$in.join(",")})`,
            $gt === undefined ? null : `${column}.gt.${$gt}`,
            $gte === undefined ? null : `${column}.gte.${$gte}`,
            $lt === undefined ? null : `${column}.lt.${$lt}`,
            $lte === undefined ? null : `${column}.lte.${$lte}`,
            $ne === undefined
              ? null
              : `or(${column}.is.null,${column}.neq.${$ne})`,
            $nin === undefined ? null : `${column}.not.in.(${$nin.join(",")})`,
          ]
            .filter(Boolean)
            .join(",");
        } else {
          return `${column}.eq.${value}`;
        }
      });

      return entries.length > 1 ? `and(${values})` : values;
    })
    .join(",");
}

function getOrFiltersByTable<T>(
  $or: Partial<Record<keyof T, FilterValue<T> | Filter<T>>>[],
  resource: string
) {
  let orFilters: Record<
    string,
    Partial<Record<keyof T, FilterValue<T> | Filter<T>>>[]
  > = {};

  $or.map((orFilter) => {
    const entries = Object.entries(orFilter);
    const key = entries[0][0];
    const table = key.includes(".") ? key.split(".")[0] : resource;

    if (!orFilters[table]) {
      orFilters[table] = [];
    }

    orFilters[table].push(
      Object.fromEntries(entries) as Partial<
        Record<keyof T, FilterValue<T> | Filter<T>>
      >
    );
  });

  return orFilters;
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
  const { query, resource } = params;
  const {
    $limit = Number(DEFAULT_PAGE_SIZE),
    $or,
    $select,
    $skip = 0,
    $sort = {},
    ...rest
  } = query;
  const entries = Object.entries(rest) as Entries<Filters<T>>;

  let dbQuery = filterBuilder;

  if ($or && $or.length > 0) {
    Object.entries(getOrFiltersByTable<T>($or, resource)).forEach(
      ([table, orFilters]) => {
        dbQuery = dbQuery.or(getOr<T>(orFilters), {
          ...(table !== resource && { foreignTable: table }),
        });
      }
    );
  }

  entries.forEach((entry) => {
    const [key, value] = entry;

    if (value === true || value === false) {
      dbQuery = dbQuery.is(key, value === true);
      return;
    }

    if (value === "" || value === null || value === "null") {
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
    } else if (value !== undefined) {
      dbQuery = dbQuery.eq(key, value as T[keyof T]);
    }
  });

  dbQuery = dbQuery.range($skip, $skip + $limit - 1);

  if (isCount) {
    return dbQuery;
  }

  for (const key of keys($sort)) {
    const left = key as string;
    const [table, column] = left.includes(".")
      ? left.split(".")
      : [resource, left];

    dbQuery = dbQuery.order(column as keyof T, {
      ascending: $sort[key],
      ...(table !== resource && { foreignTable: table }),
    });
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

async function throwOnError<T>(
  p: PromiseLike<PostgrestSingleResponse<T> | PostgrestMaybeSingleResponse<T>>
) {
  const { data, error } = await p;

  if (error) {
    throw error;
  }

  return data;
}

export function create<T extends { id: unknown }>(
  data: Partial<T>,
  params: ExtendedServiceParams<T>
) {
  return throwOnError<T>(
    fromDB<T>({
      data,
      method: "insert",
      params,
    }).single()
  );
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
  }).throwOnError();

  return {
    total: count ? BigInt(count) : null,
    limit: $limit,
    skip: $skip,
    data,
  };
}

export function get<T extends { id: unknown }>(
  id: unknown,
  params: ExtendedServiceParams<T>
) {
  return throwOnError(
    fromDB<T>({
      id,
      method: "select",
      params,
    }).maybeSingle()
  );
}

export function patch<T extends { id: unknown }>(
  id: unknown,
  data: Partial<T>,
  params: ExtendedServiceParams<T>
) {
  return throwOnError(
    fromDB<T>({
      id,
      data,
      method: "update",
      params,
    }).maybeSingle()
  );
}

export function remove<T extends { id: unknown }>(
  id: unknown,
  params: ExtendedServiceParams<T>
) {
  return throwOnError(
    fromDB<T>({
      id,
      method: "delete",
      params,
    }).maybeSingle()
  );
}
