/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { Color } from "chroma-js";

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

export type LCHColor = { l: number; c: number; h: number; mode: "lch" };

export type ColorScientificPaletteRecord = Record<
  ColorScientificPalette,
  Color[]
>;

export type ColorStylePaletteRecord = Record<ColorScientificPalette, string[]>;
