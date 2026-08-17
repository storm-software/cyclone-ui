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
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";
import { isAtom } from "../utilities/is-atom";
/**
 * Update atoms with new values on changes.
 */
export const useSyncMolecule = (atoms, values, store) => {
    for (const key of Object.keys(atoms)) {
        let value = values[key];
        if (isAtom(value)) {
            value = useAtomValue(value);
        }
        const setAtom = useSetAtom(atoms[key], { store });
        useEffect(() => {
            if (value !== undefined) {
                setAtom(value);
            }
        }, [setAtom, value]);
    }
};
//# sourceMappingURL=use-sync-molecule.js.map