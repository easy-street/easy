import { withSupabase } from "@/lib/supabase";
import type { User } from "@prisma/client";
import type { Resource } from "@/types";
import { baseService } from "api";
import type { ServiceParams } from "api";

export const modelName = "User";
export const relations: Resource[] = ["titles"];

export function create(data: any, params: ServiceParams<User>) {
  return baseService.create<User>(data, withSupabase<User>(params));
}

export function find(params: ServiceParams<User>) {
  return baseService.find<User>(withSupabase<User>(params));
}

export function get(id: string, params: ServiceParams<User>) {
  return baseService.get<User>(id, withSupabase<User>(params));
}

export function patch(id: string, data: any, params: ServiceParams<User>) {
  return baseService.patch<User>(id, data, withSupabase<User>(params));
}

export function remove(id: string, params: ServiceParams<User>) {
  return baseService.remove<User>(id, withSupabase<User>(params));
}
