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

import { parseColor } from "@react-stately/color";
import { formatColor, getColorSliderBackground, toColor } from "./utilities";

describe("toColor", () => {
  it("parses hex with or without the #, and CSS color functions", () => {
    expect(formatColor(toColor("#0485f7"))).toBe("#0485F7");
    expect(formatColor(toColor(" f43 "))).toBe("#FF4433");
    expect(formatColor(toColor("rgb(255, 0, 0)"))).toBe("#FF0000");
  });

  it("returns null for empty or partial values", () => {
    expect(toColor("")).toBeNull();
    expect(toColor(null)).toBeNull();
    expect(toColor("#12")).toBeNull();
    expect(toColor("#12345")).toBeNull();
    expect(toColor("red")).toBeNull();
  });
});

describe("formatColor", () => {
  it("adds the alpha only for translucent colors", () => {
    expect(formatColor(parseColor("hsla(0, 100%, 50%, 1)"))).toBe("#FF0000");
    expect(formatColor(parseColor("hsla(0, 100%, 50%, 0.5)"))).toBe(
      "#FF000080"
    );
    expect(formatColor(null)).toBe("");
  });
});

describe("getColorSliderBackground", () => {
  it("paints the hue rainbow, inset by half the thumb", () => {
    const background = getColorSliderBackground(
      parseColor("hsl(200, 100%, 50%)"),
      "hue",
      10
    );
    expect(background).toMatch(
      /^linear-gradient\(to right, hsla\(0, 100%, 50%, 1\) 10px, /
    );
    expect(background).toMatch(/hsla\(360, 100%, 50%, 1\) calc\(100% - 10px\)\)$/);
    expect(background.split("hsla(")).toHaveLength(8);
  });

  it("adds a middle stop to lightness so the hue shows", () => {
    expect(
      getColorSliderBackground(parseColor("hsl(0, 100%, 50%)"), "lightness", 0)
    ).toBe(
      "linear-gradient(to right, hsla(0, 100%, 0%, 1) 0px, hsla(0, 100%, 50%, 1), hsla(0, 100%, 100%, 1) calc(100% - 0px))"
    );
  });

  it("fades alpha from transparent to opaque", () => {
    expect(
      getColorSliderBackground(parseColor("#FF0000"), "alpha", 10)
    ).toBe(
      "linear-gradient(to right, rgba(255, 0, 0, 0) 10px, rgba(255, 0, 0, 1) calc(100% - 10px))"
    );
  });
});
