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
import { UseAtomOptionsOrScope } from "@cyclone-ui/state";
import { Getter, Setter } from "jotai";
import { useAtomCallback } from "jotai/utils";
import { useCallback } from "react";
import { themeStore } from "../stores/theme-store";

export const useThemeActions = (opts?: UseAtomOptionsOrScope) => {
  const changeMode = useAtomCallback(
    useCallback((get: Getter, set: Setter, mode: ColorThemeMode) => {
      if (get(themeStore.api.atom.mode) !== mode) {
        set(themeStore.api.atom.mode, mode);
      }
    }, [])
  );

  const toggleMode = useAtomCallback(
    useCallback(
      (get: Getter) =>
        changeMode(
          get(themeStore.api.atom.mode) === ColorThemeMode.LIGHT
            ? ColorThemeMode.DARK
            : ColorThemeMode.LIGHT
        ),
      [changeMode]
    )
  );

  const reset = useCallback(() => {}, []);

  return {
    changeMode,
    toggleMode,
    reset
  };
};
