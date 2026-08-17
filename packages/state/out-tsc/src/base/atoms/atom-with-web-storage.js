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
import { atomWithStorage } from "jotai/utils";
import { createWebStorage } from "../utilities/create-web-storage";
import { isAtom } from "../utilities/is-atom";
import { atomWithBroadcast } from "./atom-with-broadcast";
import { atomWithDebounce } from "./atom-with-debounce";
import { atomWithEffect } from "./atom-with-effect";
import { baseAtom } from "./base-atom";
export const getWebStorage = () => createWebStorage(() => localStorage);
/**
 * Creates an atom that persists its state in external storage and sends a broadcast message to other tabs/windows when the state changes.
 *
 * @param key - The key to use for the storage
 * @param initialValue - The initial value of the atom
 * @param webStorage - The storage to use
 * @returns An atom that persists its state in external storage and sends a broadcast message to other tabs/windows when the state changes.
 */
export function atomWithWebStorage(key, initialValueOrAtom, webStorage = getWebStorage(), options) {
    const debounceMs = options?.debounceMs ?? 500;
    const getOnInit = options?.getOnInit ?? true;
    const valueAtom = isAtom(initialValueOrAtom)
        ? initialValueOrAtom
        : baseAtom(initialValueOrAtom);
    const debouncedStorageAtom = atomWithDebounce(atomWithStorage(key, (isAtom(initialValueOrAtom) ? undefined : initialValueOrAtom), webStorage, { getOnInit }), debounceMs);
    const debouncedBroadcastAtom = atomWithDebounce(atomWithBroadcast(key, (isAtom(initialValueOrAtom) ? undefined : initialValueOrAtom)), debounceMs);
    const wrapperAtom = baseAtom((get) => {
        return get(valueAtom);
    }, (get, set, update) => {
        const nextValue = isFunction(update) ? update(get(valueAtom)) : update;
        set(valueAtom, nextValue);
        set(debouncedStorageAtom.debouncedValueAtom, nextValue);
        set(debouncedBroadcastAtom.debouncedValueAtom, nextValue);
    });
    const effectAtom = atomWithEffect((get, set) => {
        const next = get(debouncedBroadcastAtom.debouncedValueAtom);
        const previous = get(wrapperAtom);
        if (next !== previous) {
            set(wrapperAtom, next);
        }
    });
    return baseAtom(get => {
        get(effectAtom);
        return get(wrapperAtom);
    }, (get, set, update) => {
        set(wrapperAtom, update);
    });
}
//# sourceMappingURL=atom-with-web-storage.js.map