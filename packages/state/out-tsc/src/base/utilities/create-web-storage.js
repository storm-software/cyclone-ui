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
import { StormJSON as StormParser } from "@stryke/json/storm-json";
import { isPromise, isPromiseLike } from "@stryke/type-checks/is-promise";
export function createWebStorage(getStringStorage) {
    let lastStrValue;
    let lastValue;
    const storage = {
        getItem: (key, initialValue) => {
            const parse = (strValue = "") => {
                if (lastStrValue !== strValue) {
                    try {
                        const nextValue = parse(strValue);
                        if (isPromise(nextValue)) {
                            return nextValue.then(result => {
                                lastValue = result;
                                return result;
                            });
                        }
                        lastValue = nextValue;
                    }
                    catch {
                        return initialValue;
                    }
                    lastStrValue = strValue;
                }
                return lastValue;
            };
            const strValue = getStringStorage()?.getItem(key) ?? undefined;
            if (strValue && isPromiseLike(strValue)) {
                return strValue.then(value => parse(value));
            }
            return parse(strValue);
        },
        removeItem: key => getStringStorage()?.removeItem(key),
        setItem: (key, newValue) => getStringStorage()?.setItem(key, StormParser.stringify(newValue))
    };
    if (typeof window !== "undefined" &&
        typeof window.addEventListener === "function" &&
        window.Storage) {
        storage.subscribe = (key, callback, initialValue) => {
            if (!(getStringStorage() instanceof window.Storage)) {
                return () => { };
            }
            const storageEventCallback = (e) => {
                if (e.storageArea === getStringStorage() && e.key === key) {
                    let newValue;
                    try {
                        newValue = JSON.parse(e.newValue || "");
                    }
                    catch {
                        newValue = initialValue;
                    }
                    callback(newValue);
                }
            };
            window.addEventListener("storage", storageEventCallback);
            return () => {
                window.removeEventListener("storage", storageEventCallback);
            };
        };
    }
    return storage;
}
//# sourceMappingURL=create-web-storage.js.map