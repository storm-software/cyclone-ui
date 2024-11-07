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

import { ColorThemeMode } from "@cyclone-ui/colors";

export type ThemeOptions = {
  /**
   * The theme mode options.
   *
   * @defaultValue [ColorThemeMode.LIGHT, ColorThemeMode.DARK]
   */
  items: ColorThemeMode[];

  /**
   * The theme mode to default to.
   *
   * @defaultValue ColorThemeMode.DARK
   */
  defaultMode: ColorThemeMode;
};

export type ThemeBaseState = {
  /**
   * The theme store options.
   */
  options: ThemeOptions;

  /**
   * The current theme mode.
   */
  mode: ColorThemeMode;
};
