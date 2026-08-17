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
import { isFunction } from "@stryke/type-checks/is-function";
import { isPlainObject } from "@stryke/type-checks/is-plain-object";
/**
 * Check if the value is a [Jotai](https://jotai.org) `Atom` object
 *
 * @param value - The value to check
 * @returns A boolean indicating whether the value is an `Atom` object
 */
export const isAtom = (value) => {
    try {
        return isPlainObject(value) && "read" in value && isFunction(value.read);
    }
    catch {
        return false;
    }
};
/**
 * Check if the value is a [Jotai](https://jotai.org) `WritableAtom` object
 *
 * @param value - The value to check
 * @returns A boolean indicating whether the value is a `WritableAtom` object
 */
export const isWritableAtom = (value) => {
    try {
        return isAtom(value) && "write" in value && isFunction(value.write);
    }
    catch {
        return false;
    }
};
/**
 * Check if the value is a [Jotai](https://jotai.org) `Atom` object with the ability to reset to it's initial value
 *
 * @param value - The value to check
 * @returns A boolean indicating whether the value is a `Atom` object with the ability to reset to it's initial value
 */
export const isResetAtom = (value) => {
    try {
        return isWritableAtom(value) && "init" in value;
    }
    catch {
        return false;
    }
};
//# sourceMappingURL=is-atom.js.map