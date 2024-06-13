## API Report File for "@cyclone-ui/types"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @public (undocumented)
type ColorPalette<TRole extends ColorRole = ColorRole, TKey extends string = `${TRole}${ColorPaletteShade}`> = {
    [key in TKey]?: string;
};
export { ColorPalette }
export { ColorPalette as ColorPalette_alias_1 }

// @public (undocumented)
type ColorPaletteShade = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
export { ColorPaletteShade }
export { ColorPaletteShade as ColorPaletteShade_alias_1 }

// @public (undocumented)
type ColorRole = "base" | "brand" | "accent" | "help" | "success" | "info" | "warning" | "error";

// @public (undocumented)
const ColorRole: {
    BASE: ColorRole;
    BRAND: ColorRole;
    ACCENT: ColorRole;
    HELP: ColorRole;
    SUCCESS: ColorRole;
    INFO: ColorRole;
    WARNING: ColorRole;
    ERROR: ColorRole;
};
export { ColorRole }
export { ColorRole as ColorRole_alias_1 }

// @public (undocumented)
type ColorTheme<TRole extends ColorRole = ColorRole> = Record<TRole, ColorPalette<TRole>>;
export { ColorTheme }
export { ColorTheme as ColorTheme_alias_1 }

// @public (undocumented)
type ColorThemeMode = "dark" | "light";

// @public (undocumented)
const ColorThemeMode: {
    DARK: ColorThemeMode;
    LIGHT: ColorThemeMode;
};
export { ColorThemeMode }
export { ColorThemeMode as ColorThemeMode_alias_1 }

// @public (undocumented)
type ColorThemeTokens<TRole extends ColorRole = ColorRole> = Record<`${TRole}` | `${TRole}Dark`, ColorPalette<TRole>>;
export { ColorThemeTokens }
export { ColorThemeTokens as ColorThemeTokens_alias_1 }

// @public (undocumented)
type ExtendedColorPalette<TRole extends ExtendedColorRole = ExtendedColorRole, TKey extends string = `${TRole}${ColorPaletteShade}`> = {
    [key in TKey]?: string;
};
export { ExtendedColorPalette }
export { ExtendedColorPalette as ExtendedColorPalette_alias_1 }

// @public (undocumented)
type ExtendedColorRole = "blue" | "gray" | "green" | "orange" | "pink" | "purple" | "red" | "yellow";

// @public (undocumented)
const ExtendedColorRole: {
    BLUE: ExtendedColorRole;
    GRAY: ExtendedColorRole;
    GREEN: ExtendedColorRole;
    ORANGE: ExtendedColorRole;
    PINK: ExtendedColorRole;
    PURPLE: ExtendedColorRole;
    RED: ExtendedColorRole;
    YELLOW: ExtendedColorRole;
};
export { ExtendedColorRole }
export { ExtendedColorRole as ExtendedColorRole_alias_1 }

// @public (undocumented)
type ExtendedColorTheme<TRole extends ExtendedColorRole = ExtendedColorRole> = Record<TRole, ExtendedColorPalette<TRole>>;
export { ExtendedColorTheme }
export { ExtendedColorTheme as ExtendedColorTheme_alias_1 }

// @public (undocumented)
type ExtendedColorThemeTokens<TRole extends ExtendedColorRole = ExtendedColorRole> = Record<`${TRole}` | `${TRole}Dark`, ExtendedColorPalette<TRole>>;
export { ExtendedColorThemeTokens }
export { ExtendedColorThemeTokens as ExtendedColorThemeTokens_alias_1 }

// (No @packageDocumentation comment for this package)

```