import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { config } from "./config";

describe("generated Tamagui config", () => {
  it("does not emit variable font ranges as object keys", () => {
    const source = readFileSync(
      new URL("./config.ts", import.meta.url),
      "utf8"
    );

    expect(source).not.toMatch(/^\s+\d+\s+\d+:/mu);
  });

  it("keeps the tabs frame rounder than each inset tab", () => {
    expect(config.tokens.radius.tabs.val).toBeGreaterThan(
      config.tokens.radius.tab.val
    );
  });
});
