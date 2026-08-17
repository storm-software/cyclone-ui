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
import { atom as jotaiAtom } from "jotai/vanilla";
import { setAtomDebugLabel } from "../utilities/set-atom-debug";
/**
 * Create a "base" atom that can be used to create derived atoms.
 * The base atom is a writable atom that can be used to create derived atoms.
 *
 * @remarks
 * This function serves as a wrapper around the `atom` function from the Jotai library that adds debugging helpers.
 *
 * @param readOrInitialValue - The initial value of the atom or a read function
 * @param write - The write function for the atom
 * @returns The base atom
 */
export function baseAtom(readOrInitialValue, write) {
    const result = jotaiAtom(
    // eslint-disable-next-line ts/no-explicit-any
    readOrInitialValue, write);
    // eslint-disable-next-line ts/no-explicit-any
    result.setDebugLabel = (label) => {
        setAtomDebugLabel(result, label);
    };
    return result;
}
//# sourceMappingURL=base-atom.js.map