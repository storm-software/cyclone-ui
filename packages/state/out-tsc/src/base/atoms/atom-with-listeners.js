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
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { isAtom } from "../utilities/is-atom";
import { baseAtom } from "./base-atom";
/**
 * Creates an atom that broadcasts its value to other tabs/windows using the BroadcastChannel API.
 *
 * @param initialValue - The initial value of the atom
 * @returns An atom that broadcasts its value to other tabs/windows using the BroadcastChannel API.
 */
export function atomWithListeners(initialValue) {
    const rootAtom = isAtom(initialValue) ? initialValue : baseAtom(initialValue);
    const listenersAtom = baseAtom([]);
    const anAtom = baseAtom(get => get(rootAtom), (get, set, arg) => {
        const prevVal = get(rootAtom);
        void set(rootAtom, arg);
        const newVal = get(rootAtom);
        for (const callback of get(listenersAtom)) {
            callback(get, set, newVal, prevVal);
        }
    });
    const useListener = (callback) => {
        const setListeners = useSetAtom(listenersAtom);
        useEffect(() => {
            setListeners(prev => [...prev, callback]);
            return () => setListeners(prev => {
                const index = prev.indexOf(callback);
                return [...prev.slice(0, index), ...prev.slice(index + 1)];
            });
        }, [setListeners, callback]);
    };
    return [anAtom, useListener];
}
//# sourceMappingURL=atom-with-listeners.js.map