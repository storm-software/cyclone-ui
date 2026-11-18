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

import { createFont, createTamagui } from "@tamagui/core";
import { beforeAll, describe, expect, it } from "vitest";
import { getFontPreviewStyles, getFontStyleLabel } from "./FontPreview";

const size = { md: 16 };

beforeAll(() => {
  createTamagui({
    fonts: {
      serif: createFont({
        family: "Serif",
        size,
        face: {
          700: { normal: "Bold" },
          400: { normal: "Regular", italic: "Italic" }
        }
      }),
      mono: createFont({
        family: "Mono",
        size,
        weight: { normal: "400", bold: "700", heavy: 700 }
      })
    },
    tokens: { size: {}, space: {}, radius: {}, zIndex: {}, color: {} },
    themes: {}
  } as never);
});

describe("getFontPreviewStyles", () => {
  it("lists each face, upright then italic, by ascending weight", () => {
    expect(getFontPreviewStyles("serif")).toEqual([
      { weight: 400 },
      { weight: 400, italic: true },
      { weight: 700 }
    ]);
    expect(getFontPreviewStyles("$serif")).toHaveLength(3);
  });

  it("lists each distinct weight of a font without faces", () => {
    expect(getFontPreviewStyles("mono")).toEqual([
      { weight: 400 },
      { weight: 700 }
    ]);
  });

  it("falls back to regular and bold for an unknown font", () => {
    expect(getFontPreviewStyles("unknown")).toEqual([
      { weight: 400 },
      { weight: 400, italic: true },
      { weight: 700 },
      { weight: 700, italic: true }
    ]);
  });
});

describe("getFontStyleLabel", () => {
  it("names the weight and style", () => {
    expect(getFontStyleLabel({ weight: 400 })).toBe("Regular 400");
    expect(getFontStyleLabel({ weight: 900, italic: true })).toBe(
      "Black 900 Italic"
    );
    expect(getFontStyleLabel({ weight: 450 })).toBe("450");
  });

  it("prefers the style's own label", () => {
    expect(getFontStyleLabel({ weight: 400, label: "Book" })).toBe("Book");
  });
});
