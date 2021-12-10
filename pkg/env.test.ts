import { getEnv, requireEnv } from "./env.ts";
import { EnvironmentVariableNotFoundError } from "./error.ts";
import { asserts } from "../deps.ts";

Deno.test("getEnv()", async (t) => {
  await t.step("when the variable exists -> it returns the variable", () => {
    const key = `TEST_KEY_${Math.random().toFixed(8)}`;
    const value = "value";
    Deno.env.set(key, value);
    asserts.assertEquals(getEnv(key), value);
  });
  await t.step(
    "when the variable does not exists -> it returns the fallback",
    () => {
      const key = `TEST_KEY_${Math.random().toFixed(8)}`;
      const fallback = "fallback";
      asserts.assertEquals(getEnv(key, fallback), fallback);
    }
  );

  await t.step(
    "when the variable does not exists and no fallback is provided -> it returns `undefined`",
    () => {
      const key = `TEST_KEY_${Math.random().toFixed(8)}`;
      asserts.assertEquals(getEnv(key), undefined);
    }
  );
});

Deno.test("requireEnv()", async (t) => {
  await t.step("when the variable exists -> it returns the variable", () => {
    const key = `TEST_KEY_${Math.random().toFixed(8)}`;
    const value = "value";
    Deno.env.set(key, value);
    asserts.assertEquals(requireEnv(key), value);
  });
  await t.step(
    "when the variable does not exists -> it returns the fallback",
    () => {
      const key = `TEST_KEY_${Math.random().toFixed(8)}`;
      asserts.assertThrows(
        () => requireEnv(key),
        EnvironmentVariableNotFoundError
      );
    }
  );
});
