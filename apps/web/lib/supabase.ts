import type { ModelConfigs, ServiceParams } from "api";
import { getEnvVars } from "utils";
import { createClient } from "@supabase/supabase-js";

const { NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL } = getEnvVars({
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
});

export const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const modelConfigs: ModelConfigs = {
  posts: {
    aliases: {
      user: {
        resource: "users",
      },
    },
  },
  users: {
    aliases: {
      title: {
        resource: "titles",
      },
    },
  },
};

export function withSupabase<T>(params: ServiceParams<T>) {
  return { ...params, db: supabase, modelConfigs };
}
