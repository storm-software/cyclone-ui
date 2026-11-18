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

import { describe, expect, it } from "vitest";
import { getColorFormats } from "./utilities";

describe("getColorFormats", () => {
  it("keeps an oklch() value as written and converts it to hex", () => {
    expect(getColorFormats(" oklch(0.714965 0.122063 4.087) ")).toEqual({
      hex: "#e2819a",
      oklch: "oklch(0.714965 0.122063 4.087)",
      light: true
    });
  });

  it("reads percentage, degree, none and alpha oklch() components", () => {
    expect(getColorFormats("oklch(50% 25% 120deg / 50%)")?.hex).toBe(
      "#5c6b2180"
    );
    expect(getColorFormats("oklch(0.5 0 none)")?.hex).toBe("#636363");
  });

  it("converts hex, rgb() and named colors to oklch()", () => {
    expect(getColorFormats("#2e7aff")).toEqual({
      hex: "#2e7aff",
      oklch: "oklch(0.609361 0.21185 260.783)",
      light: true
    });
    expect(getColorFormats("rgb(46, 122, 255)")?.oklch).toBe(
      "oklch(0.609361 0.21185 260.783)"
    );
    expect(getColorFormats("#808080")?.oklch).toBe("oklch(0.599871 0 0)");
    expect(getColorFormats("rgba(0, 0, 0, 0.5)")).toMatchObject({
      hex: "#00000080",
      oklch: "oklch(0 0 0 / 0.5)"
    });
  });

  it("picks the label color with the higher contrast", () => {
    expect(getColorFormats("#808080")?.light).toBe(true);
    expect(getColorFormats("oklch(0.298555 0.088507 9.007)")?.light).toBe(
      false
    );
  });

  it("returns null for a value that is not a color", () => {
    expect(getColorFormats("not-a-color")).toBeNull();
  });
});
