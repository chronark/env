import { requireEnv, getEnv } from "./pkg/env.ts";
export * from "./pkg/error.ts";

export const env = {
  get: getEnv,
  require: requireEnv,
};
