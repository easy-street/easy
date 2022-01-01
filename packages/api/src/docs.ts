import { getEnvVars } from "./utils";
import { fetcher } from "./fetcher";
import type { Context, Services } from "./types";

export type Env = {
  NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
  NEXT_PUBLIC_SUPABASE_URL: string;
};

const { API_URL } = getEnvVars({ API_URL: process.env.API_URL });
const anyOf = [
  { type: "string" },
  { type: "string", format: "date-time" },
  { type: "integer", default: 1 },
  { type: "boolean" },
];

function getFilterParameter(modelName: string, withRelations: boolean = false) {
  return {
    name: "*",
    in: "query",
    description: `Filter any ${modelName}${
      withRelations ? " (or relation)" : ""
    } field`,
    required: false,
    schema: {
      type: "object",
      properties: {
        "*": { anyOf },
        $in: { type: "array", items: { oneOf: anyOf } },
        $gt: { anyOf },
        $gte: { anyOf },
        $lt: { anyOf },
        $lte: { anyOf },
        $ne: { anyOf },
        $nin: { type: "array", items: { oneOf: anyOf } },
      },
    },
  };
}

function getService<T>(ctx: Context<T>) {
  const { resource, services } = ctx;
  return services[resource];
}

function getModelName<T>(ctx: Context<T>) {
  return getService<T>(ctx).modelName;
}

function getIdSchema(resource: string) {
  return resource === "users"
    ? {
        type: "string",
        format: "uuid",
      }
    : {
        type: "integer",
        format: "bigint",
      };
}

function getIdParameter<T>(ctx: Context<T>) {
  return {
    name: "id",
    in: "path",
    description: `${getModelName<T>(ctx)} id`,
    required: true,
    schema: getIdSchema(ctx.resource),
  };
}

function getRelations<T>(ctx: Context<T>) {
  const { resource, services } = ctx;
  const service = services[resource];

  if ("relations" in service) {
    return service.relations;
  }

  return [];
}

function getSelectEnum<T>(ctx: Context<T>) {
  const { resource, definitions } = ctx;

  return Object.keys(definitions[resource].properties).concat(
    getRelations<T>(ctx).flatMap((relation) => [
      relation,
      ...Object.keys(definitions[relation].properties).map(
        (field) => `${relation}.${field}`
      ),
    ])
  );
}

function getSelectParameter<T>(ctx: Context<T>) {
  return {
    name: "$select",
    in: "query",
    description: `fields to include`,
    required: false,
    schema: {
      type: "array",
      items: {
        type: "string",
        enum: getSelectEnum<T>(ctx),
      },
    },
  };
}

function getCommonParameters<T>(ctx: Context<T>) {
  return [
    {
      name: "$or",
      in: "query",
      description: `Find all records that match any of the given criteria`,
      required: false,
      schema: {
        type: "array",
        items: {
          type: "object",
          properties: Object.fromEntries(
            getSelectEnum<T>(ctx).map((field) => [
              field,
              {
                type: {},
              },
            ])
          ),
        },
      },
    },
    getSelectParameter<T>(ctx),
  ];
}

function getSuccessResponse(
  modelName: string,
  withPagination: boolean = false
) {
  return {
    200: {
      description: "successful operation",
      schema: {
        items: {
          $ref: `#/components/schemas/${modelName}${
            withPagination ? "Pagination" : ""
          }`,
        },
        type: "object",
      },
    },
  };
}

function getRequestBody(modelName: string) {
  return {
    required: true,
    description: `${modelName} object`,
    content: {
      "application/json": {
        schema: {
          $ref: `#/components/schemas/${modelName}`,
        },
      },
    },
  };
}

function getFindManyParameters<T>(ctx: Context<T>) {
  return [
    {
      name: "$limit",
      in: "query",
      description: `items per page`,
      required: false,
      schema: {
        type: "integer",
        default: 64,
        format: "bigint",
      },
    },
    {
      name: "$skip",
      in: "query",
      description: `items to skip`,
      required: false,
      schema: {
        type: "integer",
        default: 0,
        format: "bigint",
      },
    },
    {
      name: "$sort",
      in: "query",
      description: `sort fields`,
      required: false,
      schema: {
        type: "object",
        properties: Object.fromEntries(
          getSelectEnum<T>(ctx).map((field) => [
            field,
            {
              type: "integer",
              format: "int32",
              default: 1,
              enum: [1, -1],
            },
          ])
        ),
      },
    },
  ];
}

export default async function getDocsJSON<T>(services: Services<T>, env?: Env) {
  const url =
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? env?.NEXT_PUBLIC_SUPABASE_URL;
  const apikey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
    env?.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url) {
    throw new Error("Missing supabase URL");
  }

  if (!apikey) {
    throw new Error("Missing supabase anon key");
  }

  const { definitions } = await fetcher(`${url}/rest/v1/`, {
    headers: { apikey },
  });
  const resources = Object.keys(services);

  return {
    openapi: "3.0.1",
    info: {
      title: "Unified API",
      version: "1.0",
    },
    servers: [{ url: API_URL }],
    tags: resources.map((resource) => ({ name: resource })),
    paths: Object.fromEntries(
      resources.flatMap((resource) => {
        const ctx = { resource, definitions, services };
        const modelName = getModelName<T>(ctx);

        return [
          [
            `/${resource}`,
            {
              get: {
                tags: [resource],
                description: `Returns a ${modelName}Pagination object`,
                parameters: [
                  ...getCommonParameters(ctx),
                  ...getFindManyParameters(ctx),
                  getFilterParameter(modelName, true),
                ],
                responses: { ...getSuccessResponse(modelName, true) },
              },
              post: {
                tags: [resource],
                description: `Creates a ${modelName}`,
                parameters: [getSelectParameter(ctx)],
                requestBody: getRequestBody(modelName),
                responses: { ...getSuccessResponse(modelName) },
              },
            },
          ],
          [
            `/${resource}/{id}`,
            {
              delete: {
                tags: [resource],
                description: `Deletes a single ${modelName}`,
                parameters: [
                  getIdParameter<T>(ctx),
                  ...getCommonParameters(ctx),
                  getFilterParameter(modelName),
                ],
                responses: { ...getSuccessResponse(modelName) },
              },
              get: {
                tags: [resource],
                description: `Returns a single ${modelName}`,
                parameters: [
                  getIdParameter<T>(ctx),
                  ...getCommonParameters(ctx),
                  getFilterParameter(modelName),
                ],
                responses: { ...getSuccessResponse(modelName) },
              },
              patch: {
                tags: [resource],
                description: `Partially updates a single ${modelName}`,
                parameters: [
                  getIdParameter<T>(ctx),
                  ...getCommonParameters(ctx),
                  getFilterParameter(modelName),
                ],
                requestBody: getRequestBody(modelName),
                responses: { ...getSuccessResponse(modelName) },
              },
            },
          ],
        ];
      })
    ),
    components: {
      schemas: {
        ...Object.fromEntries(
          resources.flatMap((resource) => {
            const modelName = getModelName<T>({
              resource,
              definitions,
              services,
            });

            return [
              [modelName, definitions[resource]],
              [
                `${modelName}Pagination`,
                {
                  type: "object",
                  properties: {
                    total: { type: "integer", format: "int32" },
                    limit: { type: "integer", format: "int32" },
                    skip: { type: "integer", format: "int32" },
                    data: {
                      type: "array",
                      items: { $ref: `#/components/schemas/${modelName}` },
                    },
                  },
                },
              ],
            ];
          })
        ),
      },
    },
  };
}
