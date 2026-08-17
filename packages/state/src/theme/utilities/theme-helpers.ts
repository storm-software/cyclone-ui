/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

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
export const getThemeColorThemeName = (
  theme?: string
): ColorThemeName | undefined => {
  if (theme) {
    if (theme.includes("base")) {
      return "base";
    } else if (theme.includes("brand")) {
      return "brand";
    } else if (theme.includes("alternate")) {
      return "alternate";
    } else if (theme.includes("accent")) {
      return "accent";
    } else if (theme.includes("link")) {
      return "link";
    } else if (theme.includes("discovery")) {
      return "discovery";
    } else if (theme.includes("info")) {
      return "info";
    } else if (theme.includes("warning")) {
      return "warning";
    } else if (theme.includes("danger")) {
      return "danger";
    } else if (theme.includes("success")) {
      return "success";
    } else if (theme.includes("positive")) {
      return "positive";
    } else if (theme.includes("negative")) {
      return "negative";
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
