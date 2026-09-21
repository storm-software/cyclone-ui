import { describe, expect, it, vi } from "vitest";

vi.mock("@cyclone-ui/helpers", () => ({
  getSized: () => 42
}));

import { getSelectContentSize, shouldCenterSelectItemText } from "./utilities";

describe("getSelectContentSize", () => {
  it("uses the small space token for option text vertical padding", () => {
    expect(getSelectContentSize("$10xl").itemTextPaddingVertical).toBe("$sm");
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
