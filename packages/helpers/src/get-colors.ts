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

import chroma from "chroma-js";
import type {
  ColorScientificPaletteRecord,
  ColorStylePaletteRecord
} from "./types";
import { ColorScientificPalette } from "./types";

const COLOR_HUE_STEPS = {
  [ColorScientificPalette.SURROUNDING]: [330, 0, 30],
  [ColorScientificPalette.ANALOGOUS]: [60, 0, 30],
  [ColorScientificPalette.TRIADIC]: [240, 0, 120],
  [ColorScientificPalette.TETRADIC]: [0, 90, 180, 270],
  [ColorScientificPalette.COMPLEMENTARY]: [0, 180],
  [ColorScientificPalette.SPLIT_COMPLEMENTARY]: [210, 0, 150]
} as const;

const cacheScientificPalettes = new Map<string, ColorScientificPaletteRecord>();

export const createScientificPalettes = (
  color: string
): ColorScientificPaletteRecord => {
  if (cacheScientificPalettes.has(color)) {
    return cacheScientificPalettes.get(color)!;
  }

  const baseHue = chroma(color).get("oklch.h");
  const result = Object.keys(COLOR_HUE_STEPS).reduce(
    (ret: ColorScientificPaletteRecord, type: string) => {
      ret[type as ColorScientificPalette] = COLOR_HUE_STEPS[type]!.map(step => {
        let hue = baseHue + step;
        if (hue < 0) {
          hue += Math.ceil(-hue / 360) * 360;
        }

        return chroma(color).set("oklch.h", hue % 360);
      });

      return ret;
    },
    {} as ColorScientificPaletteRecord
  );

  cacheScientificPalettes.set(color, result);
  return result;
};

const cacheStylePalettes = new Map<string, ColorStylePaletteRecord>();

export const createStylePalettes = (
  color: string,
  scale?: number
): ColorStylePaletteRecord => {
  if (cacheStylePalettes.has(color)) {
    return cacheStylePalettes.get(color)!;
  }

  const result = Object.entries(createScientificPalettes(color)).reduce(
    (ret, [type, palette]) => {
      ret[type as ColorScientificPalette] = chroma
        .scale(palette)
        .mode("hsl")
        .colors(
          scale ??
            (type === ColorScientificPalette.COMPLEMENTARY
              ? 2
              : type === ColorScientificPalette.TETRADIC
                ? 4
                : 3)
        )
        .map(colorScale => chroma(colorScale).css("hsl"));

      return ret;
    },
    {} as ColorStylePaletteRecord
  );

  cacheStylePalettes.set(color, result);
  return result;
};
