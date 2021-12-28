import type { NextApiRequest } from "next";
import type { Filters, Service, TRecursiveField } from "./types";
import set from "lodash.set";
import qs from "qs";
import { getEnvVars } from "utils";
import { AuthSession } from "@supabase/supabase-js";

export interface HandlerContext {
  session?: AuthSession;
}

const { DEFAULT_PAGE_SIZE } = getEnvVars({
  DEFAULT_PAGE_SIZE: process.env.DEFAULT_PAGE_SIZE,
});

function parseRecursive(select: string[] = []): TRecursiveField {
  const selectFields: TRecursiveField = {};

  select.forEach((field) => {
    set(selectFields, field, true);
  });

  return selectFields;
}

export function parseQuery<T>(req: NextApiRequest) {
  const {
    query: { api },
    url,
  } = req;

  if (!url || !Array.isArray(api)) {
    throw new Error("Nope");
  }

  const [_, id] = api;
  const query = qs.parse(new URL(`https://example.com${url}`).search.slice(1));
  const {
    $limit = Number(DEFAULT_PAGE_SIZE),
    $skip = 0,
    $select = [],
    $or,
    $sort = {},
    ...rest
  } = query;

  if ($select && !Array.isArray($select)) {
    throw new Error("$select is not an array");
  }

  return {
    ...(query as Partial<Filters<T>>),
    $select: parseRecursive(
      [...(($or ?? []) as Partial<Filters<T>>[]), rest]
        .flatMap((x) => Object.keys(x))
        .map((key) => key.slice(0, key.lastIndexOf(".")))
        .concat($select as string[])
    ),
    ...(id === undefined && {
      $limit: Number($limit),
      $skip: Number($skip),
      $sort: Object.fromEntries(
        Object.entries($sort).map(([key, value]) => [key, Number(value) === 1])
      ) as Record<keyof T, boolean>,
    }),
  };
}

function getParams<T>(req: NextApiRequest, ctx: HandlerContext) {
  const { api } = req.query;

  if (!Array.isArray(api)) {
    throw new Error("Invalid request");
  }

  const [resource, id] = api;

  return {
    ...(id && { id: resource === "users" ? id : BigInt(id) }),
    query: parseQuery<T>(req),
    resource,
    session: ctx?.session,
  };
}

export function create<T>(
  req: NextApiRequest,
  service: Service<T>,
  ctx: HandlerContext
) {
  if ("create" in service) {
    return service.create(req.body, getParams<T>(req, ctx));
  }

  throw new Error("Service missing create method");
}

export function find<T>(
  req: NextApiRequest,
  service: Service<T>,
  ctx: HandlerContext
) {
  if ("find" in service) {
    return service.find(getParams<T>(req, ctx));
  }

  throw new Error("Service missing find method");
}

export function get<T>(
  req: NextApiRequest,
  service: Service<T>,
  ctx: HandlerContext
) {
  const params = getParams<T>(req, ctx);

  if ("get" in service) {
    return service.get(params.id, params);
  }

  throw new Error("Service missing get method");
}

export function patch<T>(
  req: NextApiRequest,
  service: Service<T>,
  ctx: HandlerContext
) {
  const params = getParams<T>(req, ctx);

  if ("patch" in service) {
    return service.patch(params.id, req.body, params);
  }

  throw new Error("Service missing patch method");
}

export function remove<T>(
  req: NextApiRequest,
  service: Service<T>,
  ctx: HandlerContext
) {
  const params = getParams<T>(req, ctx);

  if ("remove" in service) {
    return service.remove(params.id, params);
  }

  throw new Error("Service missing remove method");
}
