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

import type { Color } from "chroma-js";

export type ColorScientificPalette =
  | "surrounding"
  | "analogous"
  | "triadic"
  | "tetradic"
  | "complementary"
  | "splitComplementary";
export const ColorScientificPalette = {
  SURROUNDING: "surrounding" as ColorScientificPalette,
  ANALOGOUS: "analogous" as ColorScientificPalette,
  TRIADIC: "triadic" as ColorScientificPalette,
  TETRADIC: "tetradic" as ColorScientificPalette,
  COMPLEMENTARY: "complementary" as ColorScientificPalette,
  SPLIT_COMPLEMENTARY: "splitComplementary" as ColorScientificPalette
};

export interface LCHColor {
  l: number;
  c: number;
  h: number;
  mode: "lch";
}

export type ColorScientificPaletteRecord = Record<
  ColorScientificPalette,
  Color[]
>;

export type ColorStylePaletteRecord = Record<ColorScientificPalette, string[]>;
