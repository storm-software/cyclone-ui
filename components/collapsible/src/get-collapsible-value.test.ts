import { describe, expect, it } from "vitest";
import { getCollapsibleValue } from "./get-collapsible-value";

describe("getCollapsibleValue", () => {
  it.each([
    { expected: "collapsible", value: true },
    { expected: "", value: false },
    { expected: undefined, value: undefined }
  ])("maps $value to $expected", ({ expected, value }) => {
    expect(getCollapsibleValue(value)).toBe(expected);
  });
});
