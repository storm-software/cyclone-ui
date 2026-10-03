import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("generated Tamagui config", () => {
  it("does not emit variable font ranges as object keys", () => {
    const source = readFileSync(
      new URL("./config.ts", import.meta.url),
      "utf8"
    );

    expect(source).not.toMatch(/^\s+\d+\s+\d+:/mu);
  });
});
