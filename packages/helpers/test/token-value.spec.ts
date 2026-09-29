import { describe, expect, it } from "vitest";
import "../../themes/src/tamagui/config";
import { getSpaced } from "../src/get-sized";
import { normalizeTokenValue } from "../src/token-value";

describe("normalizeTokenValue", () => {
  it.each([
    ["4", "4"],
    ["px", "px"],
    ["-2", "-2"],
    ["$sm", "sm"],
    ["[12px]", 12],
    ["[1.5rem]", 24]
  ])("normalizes %s to %s", (value, expected) => {
    expect(normalizeTokenValue(value)).toBe(expected);
  });

  it("keeps a number as an explicit value", () => {
    expect(normalizeTokenValue(12)).toBe(12);
  });
});

describe("getSpaced", () => {
  it.each([
    ["$xxs", 0.5],
    ["sm", 1.5],
    ["$2xl", 10],
    ["$10xl", 46]
  ])("resolves %s from the active space tokens", (value, expected) => {
    expect(getSpaced(value)).toBe(expected);
  });

  it("uses the relative token resolver when shifting", () => {
    expect(getSpaced("$sm", { shift: 1 })).toBe(2);
  });
});

describe("default size", () => {
  it("normalizes the v3 boolean default to the `true` key", () => {
    expect(normalizeTokenValue(true)).toBe("true");
  });

  it("resolves an unknown size key to the smallest token like v2", () => {
    expect(getSpaced("true")).toBe(0);
  });
});
