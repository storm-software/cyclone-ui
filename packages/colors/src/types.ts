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

export type ExtendedColorRole =
  | "blue"
  | "gray"
  | "green"
  | "orange"
  | "pink"
  | "purple"
  | "red"
  | "yellow";
export const ExtendedColorRole = {
  BLUE: "blue" as ExtendedColorRole,
  GRAY: "gray" as ExtendedColorRole,
  GREEN: "green" as ExtendedColorRole,
  ORANGE: "orange" as ExtendedColorRole,
  PINK: "pink" as ExtendedColorRole,
  PURPLE: "purple" as ExtendedColorRole,
  RED: "red" as ExtendedColorRole,
  YELLOW: "yellow" as ExtendedColorRole
};

export type ColorRole =
  | "base"
  | "brand"
  | "brand2"
  | "brand3"
  | "accent"
  | "help"
  | "success"
  | "info"
  | "warning"
  | "error";
export const ColorRole = {
  BASE: "base" as ColorRole,
  BRAND: "brand" as ColorRole,
  BRAND2: "brand2" as ColorRole,
  BRAND3: "brand3" as ColorRole,
  ACCENT: "accent" as ColorRole,
  HELP: "help" as ColorRole,
  SUCCESS: "success" as ColorRole,
  INFO: "info" as ColorRole,
  WARNING: "warning" as ColorRole,
  ERROR: "error" as ColorRole
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
  TRole extends ColorRole = ColorRole,
  TKey extends string = `${TRole}${ColorPaletteShade}`
> = {
  [key in TKey]?: string;
};
export type ExtendedColorPalette<
  TRole extends ExtendedColorRole = ExtendedColorRole,
  TKey extends string = `${TRole}${ColorPaletteShade}`
> = {
  [key in TKey]?: string;
};

export type ColorTheme<TRole extends ColorRole = ColorRole> = Record<
  TRole,
  ColorPalette<TRole>
>;
export type ExtendedColorTheme<
  TRole extends ExtendedColorRole = ExtendedColorRole
> = Record<TRole, ExtendedColorPalette<TRole>>;

export type ColorThemeRole<TRole extends ColorRole = ColorRole> =
  | `${TRole}`
  | `${TRole}Dark`;
export type ColorThemeTokens<TRole extends ColorRole = ColorRole> = Record<
  ColorThemeRole<TRole>,
  ColorPalette<TRole>
>;
export type ExtendedColorThemeTokens<
  TRole extends ExtendedColorRole = ExtendedColorRole
> = Record<`${TRole}` | `${TRole}Dark`, ExtendedColorPalette<TRole>>;

export type ColorThemeMode = "dark" | "light";
export const ColorThemeMode = {
  DARK: "dark" as ColorThemeMode,
  LIGHT: "light" as ColorThemeMode
};
