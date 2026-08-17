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
import { baseAtom } from "./base-atom";
const wrapFn = (fnOrValue) => (isFunction(fnOrValue) ? { __fn: fnOrValue } : fnOrValue);
const unwrapFn = (wrappedFnOrValue) => (wrappedFnOrValue &&
    typeof wrappedFnOrValue === "object" &&
    "__fn" in wrappedFnOrValue
    ? wrappedFnOrValue.__fn
    : wrappedFnOrValue);
/**
 * Create an atom with a wrapper that allows functions as values.
 *
 * @remarks
 * Jotai atoms don't allow functions as values by default. This function is a
 * drop-in replacement for `atom` that wraps functions in an object while
 * leaving non-functions unchanged. The wrapper object should be completely
 * invisible to consumers of the atom.
 *
 * @param initialValue - The initial value of the atom
 * @returns An atom with a wrapper that allows functions as values.
 */
export const atomWithWrapper = (initialValue) => {
    const rootAtom = baseAtom(wrapFn(initialValue));
    return baseAtom(get => unwrapFn(get(rootAtom)), (_get, set, value) => set(rootAtom, wrapFn(value)));
};
//# sourceMappingURL=atom-with-wrapper.js.map