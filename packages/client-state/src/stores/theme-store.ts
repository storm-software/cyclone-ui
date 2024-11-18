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
import { createAtomStore } from "@cyclone-ui/state";
import { ThemeBaseState } from "../types";

export const themeStore = createAtomStore<ThemeBaseState>({
  name: "theme",
  initialState: {
    options: {
      items: [ColorThemeMode.LIGHT, ColorThemeMode.DARK],
      defaultMode: ColorThemeMode.DARK
    },
    mode: ColorThemeMode.DARK
  }
});

export type ThemeStore = typeof themeStore;
export type ThemeStoreApi = ThemeStore["api"];
export type ThemeStoreAtom = ThemeStoreApi["atom"];
