import { describe, expect, it } from "vitest";
import { normalizeTokenValue } from "../src/token-value";

describe("normalizeTokenValue", () => {
  it.each([
    ["4", "$4"],
    ["px", "$px"],
    ["-2", "$-2"],
    ["$sm", "$sm"],
    ["[12px]", 12],
    ["[1.5rem]", 24]
  ])("normalizes %s to %s", (value, expected) => {
    expect(normalizeTokenValue(value)).toBe(expected);
  });

  it("keeps a number as an explicit value", () => {
    expect(normalizeTokenValue(12)).toBe(12);
  });
});
