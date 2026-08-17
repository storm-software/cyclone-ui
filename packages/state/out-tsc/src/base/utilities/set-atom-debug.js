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
import { isDevelopment } from "@stryke/env/environment-checks";
/**
 * Add a debug label to the Jotai Atom
 *
 * @param atom - The atom to apply the debug label to
 * @param label - The label to apply to the atom
 */
export const setAtomDebugLabel = (atom, label) => {
    if (isDevelopment) {
        atom.debugLabel = label;
    }
};
/**
 * Mark the atom as a *private* or internal
 *
 * @param atom - The atom to mark as private
 */
export const setAtomDebugPrivate = (atom) => {
    if (isDevelopment) {
        atom.debugPrivate = true;
    }
};
//# sourceMappingURL=set-atom-debug.js.map