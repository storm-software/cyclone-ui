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

import { ColorThemeName } from "@cyclone-ui/colors";

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
export const getThemeColorThemeName = (
  theme?: string
): ColorThemeName | undefined => {
  if (theme) {
    if (theme.includes(ColorThemeName.BASE)) {
      return ColorThemeName.BASE;
    } else if (theme.includes(ColorThemeName.BRAND)) {
      return ColorThemeName.BRAND;
    } else if (theme.includes(ColorThemeName.ALTERNATE)) {
      return ColorThemeName.ALTERNATE;
    } else if (theme.includes(ColorThemeName.ACCENT)) {
      return ColorThemeName.ACCENT;
    } else if (theme.includes(ColorThemeName.LINK)) {
      return ColorThemeName.LINK;
    } else if (theme.includes(ColorThemeName.HELP)) {
      return ColorThemeName.HELP;
    } else if (theme.includes(ColorThemeName.INFO)) {
      return ColorThemeName.INFO;
    } else if (theme.includes(ColorThemeName.WARNING)) {
      return ColorThemeName.WARNING;
    } else if (theme.includes(ColorThemeName.DANGER)) {
      return ColorThemeName.DANGER;
    } else if (theme.includes(ColorThemeName.SUCCESS)) {
      return ColorThemeName.SUCCESS;
    } else if (theme.includes(ColorThemeName.POSITIVE)) {
      return ColorThemeName.POSITIVE;
    } else if (theme.includes(ColorThemeName.NEGATIVE)) {
      return ColorThemeName.NEGATIVE;
    }
  }

  return undefined;
};

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
export const themeColorThemeNameExists = (theme?: string): boolean => {
  return Boolean(getThemeColorThemeName(theme));
};
