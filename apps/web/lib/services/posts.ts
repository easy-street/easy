import { withSupabase } from "@/lib/supabase";
import type { Post } from "@prisma/client";
import type { Resource } from "@/types";
import { baseService } from "api";
import type { ServiceParams } from "api";

export const modelName = "Post";
export const relations: Resource[] = ["users"];

export function create(data: any, params: ServiceParams<Post>) {
  return baseService.create<Post>(data, withSupabase<Post>(params));
}

export function find(params: ServiceParams<Post>) {
  return baseService.find<Post>(withSupabase<Post>(params));
}

export function get(id: bigint, params: ServiceParams<Post>) {
  return baseService.get<Post>(id, withSupabase<Post>(params));
}

export function patch(id: bigint, data: any, params: ServiceParams<Post>) {
  return baseService.patch<Post>(id, data, withSupabase<Post>(params));
}

export function remove(id: bigint, params: ServiceParams<Post>) {
  return baseService.remove<Post>(id, withSupabase<Post>(params));
}
