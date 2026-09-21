import { describe, expect, it, vi } from "vitest";

vi.mock("@cyclone-ui/helpers", async () => ({
  ...(await import("../../../packages/helpers/src/form-size")),
  getSized: (token: string) => ({ $8xl: 32, $10xl: 42, $12xl: 52 })[token]
}));

import { getSelectContentSize, shouldCenterSelectItemText } from "./utilities";

describe("getSelectContentSize", () => {
  it("scales menu text, spacing and indicators with the control", () => {
    const small = getSelectContentSize("sm");
    const medium = getSelectContentSize("md");
    const large = getSelectContentSize("lg");
    expect(medium.fontSize).toBe(16);
    for (const metric of [
      "fontSize",
      "lineHeight",
      "indicatorIconSize",
      "itemFramePaddingHorizontal"
    ] as const) {
      expect(small[metric]).toBeLessThan(medium[metric]);
      expect(large[metric]).toBeGreaterThan(medium[metric]);
    }
  });
  it("uses the small space token for option text vertical padding", () => {
    expect(getSelectContentSize("md").itemTextPaddingVertical).toBe("$sm");
  });
});

describe("shouldCenterSelectItemText", () => {
  it("keeps every narrow option row aligned when any row displays an indicator", () => {
    expect(shouldCenterSelectItemText(41, 42, true)).toBe(false);
  });

  it("centers unadorned narrow menus and leaves wide menus unchanged", () => {
    expect(shouldCenterSelectItemText(41, 42, false)).toBe(true);
    expect(shouldCenterSelectItemText(42, 42, false)).toBe(false);
  });
});
