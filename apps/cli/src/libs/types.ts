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

export type ColorPaletteType =
  | "base"
  | "brand"
  | "alternate"
  | "accent"
  | "link"
  | "help"
  | "success"
  | "info"
  | "warning"
  | "error"
  | "positive"
  | "negative";

export const ColorPaletteType = {
  BASE: "base" as ColorPaletteType,
  BRAND: "brand" as ColorPaletteType,
  ALTERNATE: "alternate" as ColorPaletteType,
  ACCENT: "accent" as ColorPaletteType,
  LINK: "link" as ColorPaletteType,
  HELP: "help" as ColorPaletteType,
  SUCCESS: "success" as ColorPaletteType,
  INFO: "info" as ColorPaletteType,
  WARNING: "warning" as ColorPaletteType,
  ERROR: "error" as ColorPaletteType,
  POSITIVE: "positive" as ColorPaletteType,
  NEGATIVE: "negative" as ColorPaletteType
};

export type ColorPaletteTypeIndexes =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

export type ColorPalette<
  TPaletteType extends ColorPaletteType = ColorPaletteType,
  TKey extends string = `${TPaletteType}${ColorPaletteTypeIndexes}`
> = {
  [key in TKey]?: string;
};

export type ColorThemeType = "dark" | "light";

export const ColorThemeType = {
  DARK: "dark" as ColorThemeType,
  LIGHT: "light" as ColorThemeType
};

export type ColorTheme = Record<ColorPaletteType, ColorPalette>;
