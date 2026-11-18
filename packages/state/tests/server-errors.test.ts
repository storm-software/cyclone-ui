import { describe, expect, it } from "vitest";
import {
  applyServerErrors,
  clearServerErrors,
  hasServerErrors,
  stripServerErrors
} from "../src/form/utilities/server-errors";

const capsLock = {
  type: "warning" as const,
  code: "caps-lock",
  message: "Caps lock is on"
};

describe("server errors", () => {
  it("seeds messages under each field's server results", () => {
    const results = applyServerErrors(
      {},
      {
        email: "Email is taken",
        password: ["Too short", "Too common"],
        name: undefined
      }
    );

    expect(results.email.server.map(m => m.message)).toEqual([
      "Email is taken"
    ]);
    expect(results.password.server.map(m => m.message)).toEqual([
      "Too short",
      "Too common"
    ]);
    // Equal codes would show only one of the two.
    expect(new Set(results.password.server.map(m => m.code)).size).toBe(2);
    expect(results).not.toHaveProperty("name");
  });

  it("replaces earlier seeded messages and keeps a control's own", () => {
    const first = applyServerErrors(
      { email: { server: [capsLock], change: [] } },
      { email: "Email is taken" }
    );
    const second = applyServerErrors(first, { password: "Too short" });

    expect(second.email.server).toEqual([capsLock]);
    expect(second.email.change).toEqual([]);
    expect(second.password.server.map(m => m.message)).toEqual(["Too short"]);
    // The input is not modified.
    expect(first.email.server).toHaveLength(2);
  });

  it("clears seeded messages from one field, or all of them", () => {
    const seeded = applyServerErrors(
      { email: { server: [capsLock] } },
      { email: "Email is taken" }
    );

    expect(clearServerErrors(seeded.email).server).toEqual([capsLock]);
    expect(stripServerErrors(seeded).email.server).toEqual([capsLock]);
    expect(clearServerErrors(undefined)).toBeUndefined();
  });

  it("detects whether there is anything to show", () => {
    expect(hasServerErrors(undefined)).toBe(false);
    expect(hasServerErrors({ email: undefined, name: [] })).toBe(false);
    expect(hasServerErrors({ email: [""], name: "Required" })).toBe(true);
  });
});
