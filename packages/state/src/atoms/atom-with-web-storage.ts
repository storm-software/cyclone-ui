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

import { isFunction } from "@storm-stack/types";
import type { Getter, PrimitiveAtom, Setter, WritableAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import type {
  AsyncStorage,
  SyncStorage
} from "jotai/vanilla/utils/atomWithStorage";
import type { SetStateAction } from "react";
import { baseAtom } from "../base/base-atom";
import { createWebStorage } from "../utilities/create-web-storage";
import { isAtom } from "../utilities/is-atom";
import { atomWithBroadcast } from "./atom-with-broadcast";
import { atomWithDebounce } from "./atom-with-debounce";
import { atomWithEffect } from "./atom-with-effect";

export const getWebStorage = <TValue>():
  | AsyncStorage<TValue>
  | SyncStorage<TValue> => createWebStorage<TValue>(() => localStorage);

/**
 * Creates an atom that persists its state in external storage and sends a broadcast message to other tabs/windows when the state changes.
 *
 * @param key - The key to use for the storage
 * @param initialValue - The initial value of the atom
 * @param webStorage - The storage to use
 * @returns An atom that persists its state in external storage and sends a broadcast message to other tabs/windows when the state changes.
 */
export function atomWithWebStorage<TValue>(
  key: string,
  initialValueOrAtom:
    | PrimitiveAtom<TValue>
    | TValue
    | WritableAtom<TValue, [SetStateAction<TValue>], void>,
  webStorage:
    | AsyncStorage<TValue>
    | SyncStorage<TValue> = getWebStorage<TValue>(),
  options?: { debounceMs?: number } & Parameters<typeof atomWithStorage>[3]
): WritableAtom<TValue, [SetStateAction<TValue>], void> {
  const debounceMs = options?.debounceMs ?? 500;
  const getOnInit = options?.getOnInit ?? true;

  const valueAtom = isAtom(initialValueOrAtom)
    ? initialValueOrAtom
    : baseAtom(initialValueOrAtom);

  const debouncedStorageAtom = atomWithDebounce(
    atomWithStorage(
      key,
      (isAtom(initialValueOrAtom) ? undefined : initialValueOrAtom) as TValue,
      webStorage as SyncStorage<TValue>,
      { getOnInit }
    ),
    debounceMs
  );
  const debouncedBroadcastAtom = atomWithDebounce(
    atomWithBroadcast<TValue>(
      key,
      (isAtom(initialValueOrAtom) ? undefined : initialValueOrAtom) as TValue
    ),
    debounceMs
  );

  const wrapperAtom = baseAtom<TValue, [SetStateAction<TValue>], void>(
    (get: Getter) => {
      return get(valueAtom);
    },
    (get: Getter, set: Setter, update: SetStateAction<TValue>) => {
      const nextValue = isFunction(update)
        ? (update(get(valueAtom)) as TValue)
        : (update as TValue);

      set(valueAtom, nextValue);
      set(debouncedStorageAtom.debouncedValueAtom, nextValue);
      set(debouncedBroadcastAtom.debouncedValueAtom, nextValue);
    }
  );

  const effectAtom = atomWithEffect((get, set) => {
    const next = get(debouncedBroadcastAtom.debouncedValueAtom);
    const previous = get(wrapperAtom);

    if (next !== previous) {
      set(wrapperAtom, next);
    }
  });

  return baseAtom(
    get => {
      get(effectAtom);

      return get(wrapperAtom);
    },
    (get, set, update) => {
      set(wrapperAtom, update);
    }
  );
}
