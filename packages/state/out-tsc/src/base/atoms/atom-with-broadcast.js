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
import { isAtom } from "../utilities/is-atom";
import { baseAtom } from "./base-atom";
/**
 * Creates an atom that broadcasts its value to other tabs/windows using the BroadcastChannel API.
 *
 * @param key - The key to use for the BroadcastChannel
 * @param initialValueOrAtom - The initial value of the atom
 * @returns An atom that broadcasts its value to other tabs/windows using the BroadcastChannel API.
 */
export function atomWithBroadcast(key, initialValueOrAtom) {
    const valueAtom = isAtom(initialValueOrAtom)
        ? initialValueOrAtom
        : baseAtom(initialValueOrAtom);
    const listeners = new Set();
    const channel = typeof BroadcastChannel === "undefined"
        ? undefined
        : new BroadcastChannel(key);
    if (channel) {
        channel.onmessage = (message) => {
            for (const listener of listeners) {
                listener(message);
            }
        };
    }
    const broadcastAtom = baseAtom(get => get(valueAtom), (get, set, update) => {
        set(valueAtom, isFunction(update.value) ? update.value(get(valueAtom)) : update.value);
        if (!update.isEvent && channel) {
            channel.postMessage(JSON.stringify(get(valueAtom)));
        }
    });
    broadcastAtom.onMount = setAtom => {
        const listener = (event) => {
            setAtom({ isEvent: true, value: JSON.parse(event.data) });
        };
        listeners.add(listener);
        return () => {
            listeners.delete(listener);
        };
    };
    return baseAtom(get => get(broadcastAtom), (_, set, update) => {
        set(broadcastAtom, {
            isEvent: false,
            value: update
        });
    });
}
//# sourceMappingURL=atom-with-broadcast.js.map