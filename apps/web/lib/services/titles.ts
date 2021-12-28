import { parseISO } from "date-fns";
import { getEnvVars } from "utils";
import { prisma } from "@/lib/prisma";
import type { Prisma, Title } from "@prisma/client";
import { Resource } from "@/types";
import { getData, getFindMany, getSelect, getWhere } from "api";
import type { ServiceParams, Transformer } from "api";

const { DEFAULT_PAGE_SIZE } = getEnvVars({
  DEFAULT_PAGE_SIZE: process.env.DEFAULT_PAGE_SIZE,
});

export const modelName = "Title";
export const relations: Resource[] = [];
const transformers: Partial<Record<keyof Title, Transformer>> = {
  id: (x: any) => BigInt(x),
  created_at: (x: any) => parseISO(x),
};

function getTransformer(field: any) {
  return transformers[field] ?? ((x: any) => x);
}

export function create(data: any, _: ServiceParams<Title>) {
  return getData(
    prisma,
    prisma.title.create({
      data,
      select: { id: true },
    })
  );
}

export async function find(params: ServiceParams<Title>) {
  const {
    query: { $limit = Number(DEFAULT_PAGE_SIZE), $skip = 0 },
    session,
  } = params;
  const where = getWhere({ ...params, getTransformer });
  const [total, data] = await getData(
    prisma,
    [
      prisma.title.count({ where }),
      prisma.title.findMany(
        getFindMany<Title, Prisma.TitleWhereInput>(params, where)
      ),
    ],
    session
  );

  return {
    total: BigInt(total),
    skip: $skip,
    limit: $limit,
    data,
  };
}

export function get(id: bigint, params: ServiceParams<Title>) {
  return getData(
    prisma,
    prisma.title.findUnique({
      select: getSelect<Title>(params),
      where: { id },
    })
  );
}

export function patch(id: bigint, data: any, params: ServiceParams<Title>) {
  return getData(
    prisma,
    prisma.title.update({
      data,
      select: getSelect<Title>(params),
      where: { id },
    })
  );
}

export function remove(id: bigint, params: ServiceParams<Title>) {
  return getData(
    prisma,
    prisma.title.delete({
      select: getSelect<Title>(params),
      where: { id },
    })
  );
}
