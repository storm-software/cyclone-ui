import { describe, expect, it } from "vitest";
import { isScrolledToEnd } from "./utilities";

describe("isScrolledToEnd", () => {
  it("is true at the bottom of the content", () => {
    expect(
      isScrolledToEnd({ scrollTop: 600, scrollHeight: 1400, clientHeight: 800 })
    ).toBe(true);
  });

  it("allows sub-pixel rounding", () => {
    expect(
      isScrolledToEnd({ scrollTop: 599, scrollHeight: 1400, clientHeight: 800 })
    ).toBe(true);
  });

  it("is false above the bottom", () => {
    expect(
      isScrolledToEnd({ scrollTop: 300, scrollHeight: 1400, clientHeight: 800 })
    ).toBe(false);
  });

  it("is false when the content doesn't scroll", () => {
    expect(
      isScrolledToEnd({ scrollTop: 0, scrollHeight: 800, clientHeight: 800 })
    ).toBe(false);
  });
});
