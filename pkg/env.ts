import { EnvironmentVariableNotFoundError } from "./error.ts";
/**
 * Load an environment variable.
 * Returns the fallback if not found.
 */
export function getEnv(key: string, fallback?: string): string | undefined {
  return Deno.env.get(key) ?? fallback;
}

/**
 * Load an environment variable or throw an error if not found.
 * @throws EnvironmentVariableNotFoundError
 */
export function requireEnv(key: string): string {
  const value = Deno.env.get(key);
  if (!value) {
    throw new EnvironmentVariableNotFoundError(key);
  }
  return value;
}
