import type { ModelConfigs, ServiceParams } from "@/lib/api";
import { PostgrestClient } from "@supabase/postgrest-js";

export const supabase = new PostgrestClient("http://rest:3000");

const modelConfigs: ModelConfigs = {
  messages: {
    aliases: {
      user: {
        resource: "users",
      },
    },
    defaultSelect: "id::text, message, username, channel_id::text",
  },
  users: {
    aliases: {
      messages: {
        resource: "messages",
      },
    },
    keyField: "username",
  },
};

export function withSupabase<T>(params: ServiceParams<T>) {
  return { ...params, db: supabase, modelConfigs };
}
