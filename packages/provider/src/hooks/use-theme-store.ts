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

import { ColorRole, ColorThemeMode } from "@cyclone-ui/colors";
import { UseAtomOptionsOrScope } from "@cyclone-ui/state";
import { useThemeName } from "@tamagui/core";
import { themeStore, ThemeStore } from "../stores/theme-store";
import {
  getThemeColorRole,
  themeColorRoleExists
} from "../utilities/theme-helpers";

export const useThemeStore = (
  options?: UseAtomOptionsOrScope
): ReturnType<ThemeStore["useStore"]> => {
  return themeStore.useStore(options);
};

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
 * - error
 * - success
 * - positive
 * - negative
 *
 * @returns The color role scheme for the theme name or undefined
 */
export const useThemeColorRole = (): ColorRole | undefined => {
  const theme = useThemeName();

  return getThemeColorRole(theme);
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
 * - error
 * - success
 * - positive
 * - negative
 *
 * @returns An indication if a theme color scheme is set
 */
export const useThemeColorRoleExists = (): boolean => {
  const theme = useThemeName();

  return themeColorRoleExists(theme);
};

export const useThemeMode = (
  options?: UseAtomOptionsOrScope
): ColorThemeMode => {
  const store = useThemeStore(options);

  return store.get.mode();
};
