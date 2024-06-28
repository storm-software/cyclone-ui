export type ColorPaletteType =
  | "base"
  | "brand"
  | "accent"
  | "help"
  | "success"
  | "info"
  | "warning"
  | "error";
export const ColorPaletteType = {
  BASE: "base" as ColorPaletteType,
  BRAND: "brand" as ColorPaletteType,
  ACCENT: "accent" as ColorPaletteType,
  HELP: "help" as ColorPaletteType,
  SUCCESS: "success" as ColorPaletteType,
  INFO: "info" as ColorPaletteType,
  WARNING: "warning" as ColorPaletteType,
  ERROR: "error" as ColorPaletteType
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
