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

export type ColorfulColorRole =
  | "brand"
  | "accent"
  | "success"
  | "info"
  | "warning"
  | "error";
export const ColorfulColorRole = {
  BRAND: "brand" as ColorfulColorRole,
  ACCENT: "accent" as ColorfulColorRole,
  SUCCESS: "success" as ColorfulColorRole,
  INFO: "info" as ColorfulColorRole,
  WARNING: "warning" as ColorfulColorRole,
  ERROR: "error" as ColorfulColorRole
};
export type BaseColorRole = "base";
export const BaseColorRole = "base" as BaseColorRole;
export type ColorRole = BaseColorRole | ColorfulColorRole;
export const ColorRole = {
  ...ColorfulColorRole,
  BASE: BaseColorRole
};

export type ColorfulColorPaletteShade =
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
export type BaseColorPaletteShade = ColorfulColorPaletteShade | "13" | "14";
export type ColorPaletteShade =
  | ColorfulColorPaletteShade
  | BaseColorPaletteShade;

export type ColorfulColorPalette<
  TRole extends ColorfulColorRole = ColorfulColorRole,
  TKey extends string = `${TRole}${ColorfulColorPaletteShade}`
> = {
  [key in TKey]?: string;
};
export type BaseColorPalette<
  TRole extends BaseColorRole = BaseColorRole,
  TKey extends string = `${TRole}${BaseColorPaletteShade}`
> = {
  [key in TKey]?: string;
};
export type ExtendedColorPalette<
  TRole extends ExtendedColorRole = ExtendedColorRole,
  TKey extends string = `${TRole}${ColorPaletteShade}`
> = {
  [key in TKey]?: string;
};
export type ColorPalette = ColorfulColorPalette & BaseColorPalette;

export type ColorfulColorTheme<
  TRole extends ColorfulColorRole = ColorfulColorRole
> = Record<TRole, ColorfulColorPalette<TRole>>;
export type BaseColorTheme<TRole extends BaseColorRole = BaseColorRole> =
  Record<TRole, BaseColorPalette<TRole>>;
export type ExtendedColorTheme<
  TRole extends ExtendedColorRole = ExtendedColorRole
> = Record<TRole, ExtendedColorPalette<TRole>>;
export type ColorTheme = ColorfulColorTheme & BaseColorTheme;

export type ColorfulColorThemeTokens<
  TRole extends ColorfulColorRole = ColorfulColorRole
> = Record<`${TRole}` | `${TRole}Dark`, ColorfulColorPalette<TRole>>;
export type BaseColorThemeTokens<TRole extends BaseColorRole = BaseColorRole> =
  Record<`${TRole}` | `${TRole}Dark`, BaseColorPalette<TRole>>;
export type ExtendedColorThemeTokens<
  TRole extends ExtendedColorRole = ExtendedColorRole
> = Record<`${TRole}` | `${TRole}Dark`, ExtendedColorPalette<TRole>>;
export type ColorThemeTokens = ColorfulColorThemeTokens & BaseColorThemeTokens;

export type ColorThemeMode = "dark" | "light";
export const ColorThemeMode = {
  DARK: "dark" as ColorThemeMode,
  LIGHT: "light" as ColorThemeMode
};
