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

import { useSetAtom } from "jotai";
import type {
  Getter,
  SetStateAction,
  Setter,
  WritableAtom
} from "jotai/vanilla";
import { useEffect } from "react";
import { baseAtom } from "../base/base-atom";
import { isAtom } from "../utilities/is-atom";

export type Callback<Value> = (
  get: Getter,
  set: Setter,
  newVal: Value,
  prevVal: Value
) => void;

/**
 * Creates an atom that broadcasts its value to other tabs/windows using the BroadcastChannel API.
 *
 * @param key - The key to use for the BroadcastChannel
 * @param initialValue - The initial value of the atom
 * @returns An atom that broadcasts its value to other tabs/windows using the BroadcastChannel API.
 */
export function atomWithListeners<TValue>(
  initial: TValue | WritableAtom<TValue, any, Promise<void> | void>
) {
  const rootAtom = isAtom(initial) ? initial : baseAtom(initial);
  const listenersAtom = baseAtom(<Callback<TValue>[]>[]);

  const anAtom = baseAtom(
    get => get(rootAtom),
    (get, set, arg: SetStateAction<TValue>) => {
      const prevVal = get(rootAtom);
      set(rootAtom, arg);

      const newVal = get(rootAtom);
      for (const callback of get(listenersAtom)) {
        callback(get, set, newVal, prevVal);
      }
    }
  );

  const useListener = (callback: Callback<TValue>) => {
    const setListeners = useSetAtom(listenersAtom);
    useEffect(() => {
      setListeners(prev => [...prev, callback]);
      return () =>
        setListeners(prev => {
          const index = prev.indexOf(callback);
          return [...prev.slice(0, index), ...prev.slice(index + 1)];
        });
    }, [setListeners, callback]);
  };
  return [anAtom, useListener] as const;
}
