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

export type ColorThemeMode = "light" | "dark";

export type ColorThemeName =
  | "primary"
  | "secondary"
  | "discovery"
  | "info"
  | "warning"
  | "danger"
  | "success"
  | "positive"
  | "negative";

export const ColorThemeName = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DISCOVERY: "discovery",
  INFO: "info",
  WARNING: "warning",
  DANGER: "danger",
  SUCCESS: "success",
  POSITIVE: "positive",
  NEGATIVE: "negative"
} as const satisfies Record<string, ColorThemeName>;

export interface ThemeOptions {
  /**
   * The theme mode options.
   *
   * @defaultValue ["light", "dark"]
   */
  items: ColorThemeMode[];

  /**
   * The theme mode to default to.
   *
   * @defaultValue "dark"
   */
  defaultMode: ColorThemeMode;
}

export interface ThemeBaseState {
  /**
   * The theme store options.
   */
  options: ThemeOptions;

  /**
   * The current theme mode.
   */
  mode: ColorThemeMode;
}
