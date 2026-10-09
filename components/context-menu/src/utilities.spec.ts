/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import { describe, expect, it, vi } from "vitest";

vi.mock("@cyclone-ui/helpers", async () => ({
  ...(await import("../../../packages/helpers/src/form-size")),
  // v3 size tokens are keyed bare (no `$`).
  getSized: (token: string) =>
    ({ "8xl": 32, "10xl": 42, "12xl": 52 })[token]
}));

import { getContextMenuSize } from "./utilities";

describe("getContextMenuSize", () => {
  it("scales menu text, spacing and indicators with the control", () => {
    const small = getContextMenuSize("sm");
    const medium = getContextMenuSize("md");
    const large = getContextMenuSize("lg");

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
    expect(getContextMenuSize("md").itemTextPaddingVertical).toBe("sm");
  });
});
