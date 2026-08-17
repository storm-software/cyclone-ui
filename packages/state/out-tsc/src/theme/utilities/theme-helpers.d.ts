import type { ColorThemeName } from "../types";
/**
 * Get the color role scheme for the current theme name
 *
 * @example
 * getThemeColorThemeName('dark') // undefined
 * getThemeColorThemeName('dark_Input') // undefined
 * getThemeColorThemeName('dark_base_Input') // "base"
 * getThemeColorThemeName('dark_brand_Input') // "brand"
 *
 * @remarks
 * The following color roles are checked:
 * - base
 * - brand
 * - alternate
 * - accent
 * - link
 * - help
 * - info
 * - warning
 * - danger
 * - success
 * - positive
 * - negative
 *
 * @param theme - The theme name
 * @returns The color role scheme for the theme name or undefined
 */
export declare const getThemeColorThemeName: (theme?: string) => ColorThemeName | undefined;
/**
 * Check if a color role scheme is set for the current theme name
 *
 * @example
 * themeColorThemeNameExists('dark') // false
 * themeColorThemeNameExists('dark_Input') // false
 * themeColorThemeNameExists('dark_base_Input') // true
 * themeColorThemeNameExists('dark_brand_Input') // true
 *
 * @remarks
 * The following color roles are checked:
 * - base
 * - brand
 * - alternate
 * - accent
 * - link
 * - help
 * - info
 * - warning
 * - danger
 * - success
 * - positive
 * - negative
 *
 * @param theme - The theme name
 * @returns An indication if a theme color scheme is set
 */
export declare const themeColorThemeNameExists: (theme?: string) => boolean;
//# sourceMappingURL=theme-helpers.d.ts.map