import * as handlers from "./handlers";
import { getEnvVars } from "./utils";
import getDocsJSON from "./docs";
import type { Env } from "./docs";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import type { Pagination, Services } from "./types";
import type { OpenAPIV2, OpenAPIV3 } from "openapi-types";
import type { AuthSession } from "@supabase/supabase-js";

export * from "./prisma";
export * as baseService from "./supabase";
export type { Transformer } from "./prisma";
export type { ModelConfigs } from "./supabase";
export type { Env };
export type {
  Filter,
  Filters,
  FilterValue,
  Pagination,
  Service,
  ServiceParams,
  TRecursiveField,
} from "./types";

if ("toJSON" in BigInt.prototype === false) {
  Object.defineProperty(BigInt.prototype, "toJSON", {
    get() {
      "use strict";
      return () => String(this);
    },
  });
}

const { OBJECT_HEADER } = getEnvVars({
  OBJECT_HEADER: process.env.OBJECT_HEADER,
});

function getPayload<T>({
  definitions,
  env,
  getSession,
  req,
  services,
}: {
  definitions?: OpenAPIV2.DefinitionsObject;
  env?: Env;
  getSession?: (req: NextApiRequest) => AuthSession | undefined;
  req: NextApiRequest;
  services: Services<T>;
}) {
  const {
    headers,
    method,
    query: { api = [] },
  } = req;
  const [resource, id] = api as string[];

  if (!resource) {
    return getDocsJSON<T>(services, { definitions, env });
  }

  const service = services[resource];
  const args = [
    req,
    service,
    { ...(getSession && { session: getSession(req) }) },
  ] as const;
  const isObjectRequest = id || headers.accept?.includes(OBJECT_HEADER);

  switch (method) {
    case "DELETE":
      return isObjectRequest
        ? handlers.remove<T>(...args)
        : Promise.resolve(null);
    case "GET":
      return isObjectRequest
        ? handlers.get<T>(...args)
        : handlers.find<T>(...args);
    case "PATCH":
      return isObjectRequest
        ? handlers.patch<T>(...args)
        : Promise.resolve(null);
    case "POST":
      return handlers.create<T>(...args);
    default:
      throw new Error(`Unhandled method: ${method}`);
  }
}

type APIResponse<Model> =
  | Partial<Model>
  | Partial<Model>[]
  | Pagination<Model>
  | OpenAPIV3.Document
  | { message?: string }
  | null;

export default function Api<Model>({
  definitions,
  env,
  getSession,
  services,
}: {
  definitions?: OpenAPIV2.DefinitionsObject;
  env?: Env;
  getSession: (req: NextApiRequest) => AuthSession | undefined;
  services: Services<Model>;
}): NextApiHandler<APIResponse<Model>> {
  return async function handler(
    req: NextApiRequest,
    res: NextApiResponse<APIResponse<Model>>
  ): Promise<void> {
    try {
      const payload = await getPayload<Model>({
        definitions,
        env,
        getSession,
        req,
        services,
      });
      res.status(payload === null ? 404 : 200).json(payload);
    } catch (err: any) {
      console.error(err);
      res.status(err.code ?? 500).json({ message: err.message });
    }
  };
}
