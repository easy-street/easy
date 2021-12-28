import { parseISO } from "date-fns";
import { getEnvVars } from "utils";
import { prisma } from "@/lib/prisma";
import type { Address, Prisma } from "@prisma/client";
import { Resource } from "@/types";
import { getData, getFindMany, getSelect, getWhere } from "api";
import type { ServiceParams, Transformer } from "api";

const { DEFAULT_PAGE_SIZE } = getEnvVars({
  DEFAULT_PAGE_SIZE: process.env.DEFAULT_PAGE_SIZE,
});

export const modelName = "Address";
export const relations: Resource[] = [];
const transformers: Partial<Record<keyof Address, Transformer>> = {
  id: (x: any) => BigInt(x),
  created_at: (x: any) => parseISO(x),
};

function getTransformer(field: any) {
  return transformers[field] ?? ((x: any) => x);
}

export function create(data: any, _: ServiceParams<Address>) {
  return getData(
    prisma,
    prisma.address.create({
      data,
      select: { id: true },
    })
  );
}

export async function find(params: ServiceParams<Address>) {
  const {
    query: { $limit = Number(DEFAULT_PAGE_SIZE), $skip = 0 },
    session,
  } = params;
  const where = getWhere({ ...params, getTransformer });
  const [total, data] = await getData(
    prisma,
    [
      prisma.address.count({ where }),
      prisma.address.findMany(
        getFindMany<Address, Prisma.AddressWhereInput>(params, where)
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

export function get(id: bigint, params: ServiceParams<Address>) {
  return getData(
    prisma,
    prisma.address.findUnique({
      select: getSelect<Address>(params),
      where: { id },
    })
  );
}

export function patch(id: bigint, data: any, params: ServiceParams<Address>) {
  return getData(
    prisma,
    prisma.address.update({
      data,
      select: getSelect<Address>(params),
      where: { id },
    })
  );
}

export function remove(id: bigint, params: ServiceParams<Address>) {
  return getData(
    prisma,
    prisma.address.delete({
      select: getSelect<Address>(params),
      where: { id },
    })
  );
}
