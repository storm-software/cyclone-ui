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

import { ColorRole } from "@cyclone-ui/colors";

/**
 * Get the color role scheme for the current theme name
 *
 * @example
 * getThemeColorRole('dark') // undefined
 * getThemeColorRole('dark_Input') // undefined
 * getThemeColorRole('dark_base_Input') // "base"
 * getThemeColorRole('dark_brand_Input') // "brand"
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
 * - error
 * - success
 * - positive
 * - negative
 *
 * @param theme - The theme name
 * @returns The color role scheme for the theme name or undefined
 */
export const getThemeColorRole = (theme?: string): ColorRole | undefined => {
  if (theme) {
    if (theme.includes(ColorRole.BASE)) {
      return ColorRole.BASE;
    } else if (theme.includes(ColorRole.BRAND)) {
      return ColorRole.BRAND;
    } else if (theme.includes(ColorRole.ALTERNATE)) {
      return ColorRole.ALTERNATE;
    } else if (theme.includes(ColorRole.ACCENT)) {
      return ColorRole.ACCENT;
    } else if (theme.includes(ColorRole.LINK)) {
      return ColorRole.LINK;
    } else if (theme.includes(ColorRole.HELP)) {
      return ColorRole.HELP;
    } else if (theme.includes(ColorRole.INFO)) {
      return ColorRole.INFO;
    } else if (theme.includes(ColorRole.WARNING)) {
      return ColorRole.WARNING;
    } else if (theme.includes(ColorRole.ERROR)) {
      return ColorRole.ERROR;
    } else if (theme.includes(ColorRole.SUCCESS)) {
      return ColorRole.SUCCESS;
    } else if (theme.includes(ColorRole.POSITIVE)) {
      return ColorRole.POSITIVE;
    } else if (theme.includes(ColorRole.NEGATIVE)) {
      return ColorRole.NEGATIVE;
    }
  }

  return undefined;
};

/**
 * Check if a color role scheme is set for the current theme name
 *
 * @example
 * themeColorRoleExists('dark') // false
 * themeColorRoleExists('dark_Input') // false
 * themeColorRoleExists('dark_base_Input') // true
 * themeColorRoleExists('dark_brand_Input') // true
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
 * - error
 * - success
 * - positive
 * - negative
 *
 * @param theme - The theme name
 * @returns An indication if a theme color scheme is set
 */
export const themeColorRoleExists = (theme?: string): boolean => {
  return Boolean(getThemeColorRole(theme));
};
