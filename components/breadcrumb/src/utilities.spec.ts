import { describe, expect, it } from "vitest";
import { getBreadcrumbCollapse } from "./utilities";

const defaults = { maxItems: 8, itemsBeforeCollapse: 1, itemsAfterCollapse: 1 };

describe("getBreadcrumbCollapse", () => {
  it("displays every breadcrumb while the trail fits in maxItems", () => {
    // Seven links plus the current page.
    expect(getBreadcrumbCollapse(7, defaults)).toBeUndefined();
    expect(getBreadcrumbCollapse(0, defaults)).toBeUndefined();
  });

  it("keeps the first link and the current page by default", () => {
    // Home / … / Current: links 1 through 7 move into the menu.
    expect(getBreadcrumbCollapse(8, defaults)).toEqual({ start: 1, end: 8 });
  });

  it("counts the current page as one of the items after the menu", () => {
    expect(
      getBreadcrumbCollapse(6, {
        maxItems: 4,
        itemsBeforeCollapse: 2,
        itemsAfterCollapse: 2
      })
    ).toEqual({ start: 2, end: 5 });
  });

  it("does not collapse when no link would be hidden", () => {
    expect(
      getBreadcrumbCollapse(3, {
        maxItems: 2,
        itemsBeforeCollapse: 2,
        itemsAfterCollapse: 2
      })
    ).toBeUndefined();
  });

  it("always keeps the current page after the menu", () => {
    expect(
      getBreadcrumbCollapse(4, {
        maxItems: 2,
        itemsBeforeCollapse: 0,
        itemsAfterCollapse: 0
      })
    ).toEqual({ start: 0, end: 4 });
  });
});
