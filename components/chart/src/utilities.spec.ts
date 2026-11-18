import { describe, expect, it } from "vitest";
import {
  axisValueToPercentFormatter,
  clampBrushRange,
  getColorsCount,
  getEasedGradientStops,
  getPayloadConfigFromPayload,
  getSeriesBackground
} from "./utilities";

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

describe("server chart utilities", () => {
  it("formats expanded series values without a client component reference", () => {
    expect(axisValueToPercentFormatter(0.254)).toBe("25%");
    expect(axisValueToPercentFormatter(-0.5)).toBe("-50%");
  });

  it("resolves a series configured through a nested Recharts payload", () => {
    const config = { revenue: { label: "Revenue", colors: ["red", "blue"] } };
    expect(
      getPayloadConfigFromPayload(
        config,
        { payload: { name: "revenue" } },
        "name"
      )
    ).toBe(config.revenue);
    expect(
      getPayloadConfigFromPayload(config, null, "revenue")
    ).toBeUndefined();
    expect(getColorsCount(config.revenue)).toBe(2);
    expect(getColorsCount(undefined)).toBe(1);
  });

  it("keeps the shimmer transparent at its edges and brightest in the middle", () => {
    expect(getEasedGradientStops(3, 0, 1)).toEqual([
      { offset: "0%", opacity: 0 },
      { offset: "50%", opacity: 1 },
      { offset: "100%", opacity: 0 }
    ]);
  });

  it("builds a legend background without importing the tooltip UI", () => {
    expect(getSeriesBackground("revenue", 1)).toEqual({
      background: "var(--color-revenue-0)"
    });
    expect(getSeriesBackground("revenue", 2)).toEqual({
      background:
        "linear-gradient(to right, var(--color-revenue-0) 0%, var(--color-revenue-1) 100%)"
    });
  });
});
