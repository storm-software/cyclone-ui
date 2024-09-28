/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { StormParser } from "@storm-stack/serialization/storm-parser";
import {
  isPromise,
  isPromiseLike
} from "@storm-stack/types/type-checks/is-promise";
import type {
  AsyncStorage,
  AsyncStringStorage,
  SyncStorage,
  SyncStringStorage
} from "jotai/vanilla/utils/atomWithStorage";

export function createWebStorage<TValue>(
  getStringStorage: () => AsyncStringStorage | SyncStringStorage | undefined
): AsyncStorage<TValue> | SyncStorage<TValue> {
  let lastStrValue: string | undefined;
  let lastValue: TValue;

  const storage: AsyncStorage<TValue> | SyncStorage<TValue> = {
    getItem: (key, initialValue) => {
      const parse = (strValue = "") => {
        if (lastStrValue !== strValue) {
          try {
            const nextValue = parse(strValue);
            if (isPromise(nextValue)) {
              return (nextValue as PromiseLike<TValue>).then(result => {
                lastValue = result;

                return result;
              });
            }

            lastValue = nextValue;
          } catch {
            return initialValue;
          }
          lastStrValue = strValue;
        }

        return lastValue;
      };
      const strValue = getStringStorage()?.getItem(key) ?? undefined;
      if (strValue && isPromiseLike(strValue)) {
        return strValue.then(value => parse(value as string));
      }

      return parse(strValue!);
    },
    removeItem: key => getStringStorage()?.removeItem(key),
    setItem: (key, newValue) =>
      getStringStorage()?.setItem(key, StormParser.stringify(newValue))
  };

  if (
    typeof window !== "undefined" &&
    typeof window.addEventListener === "function" &&
    window.Storage
  ) {
    storage.subscribe = (key, callback, initialValue) => {
      if (!(getStringStorage() instanceof window.Storage)) {
        return () => {};
      }

      const storageEventCallback = (e: StorageEvent) => {
        if (e.storageArea === getStringStorage() && e.key === key) {
          let newValue: TValue;
          try {
            newValue = JSON.parse(e.newValue || "");
          } catch {
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
