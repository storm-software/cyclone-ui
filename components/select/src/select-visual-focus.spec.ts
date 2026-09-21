import * as selectUtilities from "./utilities";

const getSelectVisualFocus = () =>
  (selectUtilities as Record<string, unknown>)["getSelectVisualFocus"] as
    ((focused: boolean, open: boolean) => boolean) | undefined;

describe("getSelectVisualFocus", () => {
  it("keeps the trigger visually active while its options are open", () => {
    const getVisualFocus = getSelectVisualFocus();

    expect(getVisualFocus).toEqual(expect.any(Function));
    expect(getVisualFocus?.(false, true)).toBe(true);
  });

  it("uses the current form focus state after the options close", () => {
    const getVisualFocus = getSelectVisualFocus();

    expect(getVisualFocus?.(true, false)).toBe(true);
    expect(getVisualFocus?.(false, false)).toBe(false);
  });
});
