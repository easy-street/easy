import { withSupabase } from "@/lib/supabase";
import type { Message } from "@prisma/client";
import type { Resource } from "@/types";
import { baseService } from "@/lib/api";
import type { ServiceParams } from "@/lib/api";

export const modelName = "messages";
export const relations: Resource[] = ["users"];

export function create(data: any, params: ServiceParams<Message>) {
  return baseService.create<Message>(data, withSupabase<Message>(params));
}

export function find(params: ServiceParams<Message>) {
  return baseService.find<Message>(withSupabase<Message>(params));
}

export function get(id: string, params: ServiceParams<Message>) {
  return baseService.get<Message>(id, withSupabase<Message>(params));
}

export function patch(id: string, data: any, params: ServiceParams<Message>) {
  return baseService.patch<Message>(id, data, withSupabase<Message>(params));
}

export function remove(id: string, params: ServiceParams<Message>) {
  return baseService.remove<Message>(id, withSupabase<Message>(params));
}
