import type { MoleculeScopeOptions } from "../../base/utilities/create-molecule";
import type { ColorThemeName } from "../types";
/**
 * Get the color role scheme for the current theme name
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
 * @returns The color role scheme for the theme name or undefined
 */
export declare const useColorThemeName: () => ColorThemeName | undefined;
/**
 * Check if a color role scheme is set for the current theme name
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
 * @returns An indication if a theme color scheme is set
 */
export declare const useColorThemeNameExists: () => boolean;
export declare const useThemeMode: (options?: MoleculeScopeOptions) => string;
//# sourceMappingURL=use-theme-store.d.ts.map