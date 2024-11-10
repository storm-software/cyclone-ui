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

export type ExtendedColorThemeName =
  | "blue"
  | "gray"
  | "green"
  | "orange"
  | "pink"
  | "purple"
  | "red"
  | "yellow";
export const ExtendedColorThemeName = {
  BLUE: "blue" as ExtendedColorThemeName,
  GRAY: "gray" as ExtendedColorThemeName,
  GREEN: "green" as ExtendedColorThemeName,
  ORANGE: "orange" as ExtendedColorThemeName,
  PINK: "pink" as ExtendedColorThemeName,
  PURPLE: "purple" as ExtendedColorThemeName,
  RED: "red" as ExtendedColorThemeName,
  YELLOW: "yellow" as ExtendedColorThemeName
};

export type ColorThemeName =
  | "base"
  | "brand"
  | "alternate"
  | "accent"
  | "link"
  | "help"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "positive"
  | "negative";
export const ColorThemeName = {
  BASE: "base" as ColorThemeName,
  BRAND: "brand" as ColorThemeName,
  ALTERNATE: "alternate" as ColorThemeName,
  ACCENT: "accent" as ColorThemeName,
  LINK: "link" as ColorThemeName,
  HELP: "help" as ColorThemeName,
  SUCCESS: "success" as ColorThemeName,
  INFO: "info" as ColorThemeName,
  WARNING: "warning" as ColorThemeName,
  DANGER: "danger" as ColorThemeName,
  POSITIVE: "positive" as ColorThemeName,
  NEGATIVE: "negative" as ColorThemeName
};

export type ColorPaletteShade =
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
  TRole extends ColorThemeName = ColorThemeName,
  TKey extends string = `${TRole}${ColorPaletteShade}`
> = {
  [key in TKey]?: string;
};
export type ExtendedColorPalette<
  TRole extends ExtendedColorThemeName = ExtendedColorThemeName,
  TKey extends string = `${TRole}${ColorPaletteShade}`
> = {
  [key in TKey]?: string;
};

export type ColorTheme<TRole extends ColorThemeName = ColorThemeName> = Record<
  TRole,
  ColorPalette<TRole>
>;
export type ExtendedColorTheme<
  TRole extends ExtendedColorThemeName = ExtendedColorThemeName
> = Record<TRole, ExtendedColorPalette<TRole>>;

export type ColorThemeRole<TRole extends ColorThemeName = ColorThemeName> =
  | `${TRole}`
  | `${TRole}Dark`;
export type ColorThemeTokens<TRole extends ColorThemeName = ColorThemeName> =
  Record<ColorThemeRole<TRole>, ColorPalette<TRole>>;
export type ExtendedColorThemeTokens<
  TRole extends ExtendedColorThemeName = ExtendedColorThemeName
> = Record<`${TRole}` | `${TRole}Dark`, ExtendedColorPalette<TRole>>;

export type ColorThemeMode = "dark" | "light";
export const ColorThemeMode = {
  DARK: "dark" as ColorThemeMode,
  LIGHT: "light" as ColorThemeMode
};

export type ColorScientificPalette =
  | "analogous"
  | "triadic"
  | "tetradic"
  | "complementary"
  | "splitComplementary";
export const ColorScientificPalette = {
  ANALOGOUS: "analogous" as ColorScientificPalette,
  TRIADIC: "triadic" as ColorScientificPalette,
  TETRADIC: "tetradic" as ColorScientificPalette,
  COMPLEMENTARY: "complementary" as ColorScientificPalette,
  SPLIT_COMPLEMENTARY: "splitComplementary" as ColorScientificPalette
};

export type ColorScientificPaletteRecord = Record<
  ColorScientificPalette,
  Array<{ l: number; c: number; h: number; mode: "lch" }>
>;

export type ColorStylePaletteRecord = Record<ColorScientificPalette, string[]>;
