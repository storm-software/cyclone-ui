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
import { MoleculeScopeOptions } from "@cyclone-ui/state";
import { Getter, Setter } from "jotai";
import { RESET, useAtomCallback } from "jotai/utils";
import { useCallback } from "react";
import { ThemeApi } from "../molecules/theme-molecule";

export const useThemeActions = (opts?: MoleculeScopeOptions) => {
  const themeMolecule = ThemeApi.useMolecule(opts);

  const changeMode = useAtomCallback(
    useCallback((get: Getter, set: Setter, mode: ColorThemeMode) => {
      if (get(themeMolecule.mode) !== mode) {
        set(themeMolecule.mode, mode);
      }
    }, [])
  );

  const toggleMode = useAtomCallback(
    useCallback(
      (get: Getter) =>
        changeMode(
          get(themeMolecule.mode) === ColorThemeMode.LIGHT
            ? ColorThemeMode.DARK
            : ColorThemeMode.LIGHT
        ),
      [changeMode]
    )
  );

  const reset = useAtomCallback(
    useCallback((get: Getter, set: Setter) => {
      set(themeMolecule.mode, RESET);
    }, [])
  );

  return {
    changeMode,
    toggleMode,
    reset
  };
};
