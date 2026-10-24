import { describe, expect, it } from "vitest";
import { clampBrushRange } from "./utilities";

describe("clampBrushRange", () => {
  it("clamps the range to the data", () => {
    expect(clampBrushRange({ startIndex: -3, endIndex: 40 }, 12, 2)).toEqual({
      startIndex: 0,
      endIndex: 11
    });
  });

  it("keeps the right edge when the left handle hits the minimum span", () => {
    expect(
      clampBrushRange({ startIndex: 9, endIndex: 10 }, 12, 2, "left")
    ).toEqual({ startIndex: 8, endIndex: 10 });
  });

  it("keeps the left edge when the right handle hits the minimum span", () => {
    expect(
      clampBrushRange({ startIndex: 4, endIndex: 3 }, 12, 2, "right")
    ).toEqual({ startIndex: 4, endIndex: 6 });
  });

  it("widens a pan that is narrower than the minimum span", () => {
    expect(clampBrushRange({ startIndex: 11, endIndex: 11 }, 12, 2)).toEqual({
      startIndex: 9,
      endIndex: 11
    });
  });
});
