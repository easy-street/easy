export function getEnvVars(
  envVars: Record<string, string | undefined>
): Record<string, string> {
  let result: Record<string, string> = {};

  for (const key in envVars) {
    const value = envVars[key];

    if (!value) {
      throw new Error(`Missing env var: ${key}`);
    }

    result[key] = value;
  }

  return result;
}

export const keys = Object.keys as <T>(o: T) => Extract<keyof T, string>[];
