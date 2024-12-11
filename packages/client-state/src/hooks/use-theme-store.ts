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
import { MoleculeScopeOptions } from "@cyclone-ui/state";
import { useThemeName } from "@tamagui/core";
import { ThemeApi } from "../molecules/theme-molecule";
import {
  getThemeColorThemeName,
  themeColorThemeNameExists
} from "../utilities/theme-helpers";

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
export const useColorThemeName = (): ColorThemeName | undefined => {
  const theme = useThemeName();

  return getThemeColorThemeName(theme);
};

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
export const useColorThemeNameExists = (): boolean => {
  const theme = useThemeName();

  return themeColorThemeNameExists(theme);
};

export const useThemeMode = (options?: MoleculeScopeOptions): string => {
  const theme = ThemeApi.use(options);

  return theme.mode.get();
};
