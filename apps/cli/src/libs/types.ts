export type ColorPaletteType =
  | 'base'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'accent'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'
export const ColorPaletteType = {
  BASE: 'base' as ColorPaletteType,
  PRIMARY: 'primary' as ColorPaletteType,
  SECONDARY: 'secondary' as ColorPaletteType,
  TERTIARY: 'tertiary' as ColorPaletteType,
  ACCENT: 'accent' as ColorPaletteType,
  SUCCESS: 'success' as ColorPaletteType,
  INFO: 'info' as ColorPaletteType,
  WARNING: 'warning' as ColorPaletteType,
  ERROR: 'error' as ColorPaletteType,
}

export type ColorPalette = {
  '0': string
  '1': string
  '2': string
  '3': string
  '4': string
  '5': string
  '6': string
  '7': string
  '8': string
  '9': string
  '10': string
  '11': string
}

export type ColorThemeType = 'dark' | 'light'
export const ColorThemeType = {
  DARK: 'dark' as ColorThemeType,
  LIGHT: 'light' as ColorThemeType,
}

export type ColorTheme = Record<ColorPaletteType, ColorPalette>
