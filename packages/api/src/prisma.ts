import { AuthSession } from "@supabase/supabase-js";
import { getEnvVars } from "./utils";
import type {
  Entries,
  Filter,
  Filters,
  ServiceParams,
  TRecursiveField,
} from "./types";

const { DEFAULT_PAGE_SIZE, NODE_ENV } = getEnvVars({
  DEFAULT_PAGE_SIZE: process.env.DEFAULT_PAGE_SIZE,
  NODE_ENV: process.env.NODE_ENV,
});

export type TPrismaRecursiveField = "select" | "include";

export type TPrismaRecursive<T extends TPrismaRecursiveField> = Record<
  string,
  boolean | { [key in T]: TPrismaRecursive<T> }
>;

export type Transformer = (x: any) => string | number | bigint | Date;

type ExtendedServiceParams<T> = ServiceParams<T> & {
  getTransformer: (field: any) => Transformer;
};

export const parsePrismaRecursiveField = <T extends TPrismaRecursiveField>(
  select: TRecursiveField,
  fieldName: T
): TPrismaRecursive<T> => {
  const parsed: TPrismaRecursive<T> = {};

  Object.keys(select).forEach((field) => {
    if (select[field] !== true) {
      parsed[field] = {
        [fieldName]: parsePrismaRecursiveField(
          select[field] as TRecursiveField,
          fieldName
        ),
      } as Record<T, TPrismaRecursive<T>>;
    } else {
      parsed[field] = true;
    }
  });

  return parsed;
};

function getWhereValue<T>(value: any, transformer: Transformer) {
  if (
    ["$in", "$gt", "$gte", "$lt", "$lte", "$ne", "$nin"].some((key) =>
      (value as Filter<T>).hasOwnProperty(key)
    )
  ) {
    const { $in, $gt, $gte, $lt, $lte, $ne, $nin } = value as Filter<T>;

    return {
      ...($in !== undefined && { in: $in.map(transformer) }),
      ...($gt !== undefined && { gt: transformer($gt) }),
      ...($gte !== undefined && { gte: transformer($gte) }),
      ...($lt !== undefined && { lt: transformer($lt) }),
      ...($lte !== undefined && { lte: transformer($lte) }),
      ...($ne !== undefined && { not: transformer($ne) }),
      ...($nin !== undefined && { notIn: $nin.map(transformer) }),
    };
  } else {
    return transformer(value);
  }
}

function getWhereFilters<T>(
  filters: Filters<T>,
  getTransformer: (field: keyof T) => Transformer
) {
  const entries = Object.entries(filters) as Entries<Filters<T>>;

  return Object.fromEntries(
    entries.map((entry) => {
      const key = entry?.[0];
      const value = entry?.[1];

      if (key === undefined || value === undefined) {
        throw new Error("Something went wrong");
      }

      return [key, getWhereValue<T>(value, getTransformer(key))];
    })
  );
}

export function getWhere<T>(params: ExtendedServiceParams<T>) {
  const {
    id,
    getTransformer,
    query: { $limit, $or, $select, $skip, $sort, ...rest },
  } = params;

  return {
    ...($or !== undefined && {
      OR: $or.map((or) => getWhereFilters<T>(or, getTransformer)),
    }),
    ...getWhereFilters<T>(
      { ...(id !== undefined && { id }), ...rest } as unknown as Filters<T>,
      getTransformer
    ),
  };
}

export function getSelect<T>(params: ServiceParams<T>) {
  const { $select = {} } = params.query;

  if (Object.keys($select).length === 0) {
    return undefined;
  }

  return parsePrismaRecursiveField($select, "select");
}

export function getFindMany<T, U>(params: ServiceParams<T>, where: U) {
  const {
    query: { $limit = Number(DEFAULT_PAGE_SIZE), $skip = 0, $sort },
  } = params;

  return {
    select: getSelect(params),
    skip: $skip,
    take: $limit,
    where,
    ...($sort && {
      orderBy: Object.fromEntries(
        Object.entries($sort).map(([key, value]) => [
          key,
          value === true ? "asc" : "desc",
        ])
      ),
    }),
  };
}

export function setClaims(prisma: any, session?: AuthSession) {
  const { access_token, user } = session ?? {};

  return prisma.$executeRawUnsafe(
    `SET LOCAL request.jwt.claims = '${JSON.stringify({
      email: user?.email,
      role: access_token ? "authenticated" : "anon",
      sub: user?.id,
    })}'`
  );
}

export async function getData(prisma: any, q: any, session?: AuthSession) {
  const isSingleQuery = !Array.isArray(q);
  const isProduction = NODE_ENV === "production";
  let data;

  try {
    data = await prisma
      .$transaction(
        [
          isProduction
            ? undefined
            : prisma.$executeRawUnsafe(`SET LOCAL ROLE anon`),
          setClaims(prisma, session),
          ...(isSingleQuery ? [q] : q),
        ].filter(Boolean)
      )
      .then((results) => {
        const queryData = results.slice(isProduction ? 1 : 2);
        return isSingleQuery ? queryData[0] : queryData;
      });
  } catch (err: any) {
    console.error(err);
    await prisma.$disconnect();
    throw err;
  } finally {
    await prisma.$disconnect();
    return data;
  }
}
