import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const packageJson = JSON.parse(
  readFileSync(new URL("../package.json", import.meta.url), "utf8")
);

describe("Sheet package dependencies", () => {
  it("declares constants for its source import", () => {
    expect(packageJson.dependencies["@tamagui/constants"]).toBe("catalog:");
  });
});
