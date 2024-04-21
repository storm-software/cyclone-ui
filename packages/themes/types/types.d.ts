export type ColorPaletteType = "base" | "primary" | "secondary" | "tertiary" | "accent" | "success" | "info" | "warning" | "error";
export declare const ColorPaletteType: {
    BASE: ColorPaletteType;
    PRIMARY: ColorPaletteType;
    SECONDARY: ColorPaletteType;
    TERTIARY: ColorPaletteType;
    ACCENT: ColorPaletteType;
    SUCCESS: ColorPaletteType;
    INFO: ColorPaletteType;
    WARNING: ColorPaletteType;
    ERROR: ColorPaletteType;
};
export type ColorPalette = {
    "0": string;
    "1": string;
    "2": string;
    "3": string;
    "4": string;
    "5": string;
    "6": string;
    "7": string;
    "8": string;
    "9": string;
    "10": string;
    "11": string;
};
export type ColorThemeType = "dark" | "light";
export declare const ColorThemeType: {
    DARK: ColorThemeType;
    LIGHT: ColorThemeType;
};
export type ColorTheme = Record<ColorPaletteType, ColorPalette>;
export type ColorPaletteTokens<ColorKey extends ColorPaletteType = ColorPaletteType> = Record<`${ColorKey}${number}`, string>;
//# sourceMappingURL=types.d.ts.map