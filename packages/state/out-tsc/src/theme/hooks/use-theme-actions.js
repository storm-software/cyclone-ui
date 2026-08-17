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
import { RESET, useAtomCallback } from "jotai/utils";
import { useCallback } from "react";
import { ThemeApi } from "../molecules/theme-molecule";
export const useThemeActions = (opts) => {
    const themeMolecule = ThemeApi.useMolecule(opts);
    const changeMode = useAtomCallback(useCallback((get, set, mode) => {
        if (get(themeMolecule.mode) !== mode) {
            set(themeMolecule.mode, mode);
        }
    }, []));
    const toggleMode = useAtomCallback(useCallback((get) => changeMode(get(themeMolecule.mode) === "light" ? "dark" : "light"), [changeMode]));
    const reset = useAtomCallback(useCallback((get, set) => {
        set(themeMolecule.mode, RESET);
    }, []));
    return {
        changeMode,
        toggleMode,
        reset
    };
};
//# sourceMappingURL=use-theme-actions.js.map