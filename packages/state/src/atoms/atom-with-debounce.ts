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

/* eslint-disable unicorn/no-null */

import { isFunction } from "@storm-stack/types";
import type { Atom, PrimitiveAtom, SetStateAction, WritableAtom } from "jotai";
import { RESET } from "jotai/utils";
import { atomWithWrapper } from "../atoms/atom-with-wrapper";
import { baseAtom } from "../base/base-atom";
import { isAtom } from "../utilities/is-atom";

export function atomWithDebounce<TValue = unknown>(
  initialValueOrAtom:
    | Atom<TValue>
    | PrimitiveAtom<TValue>
    | TValue
    | WritableAtom<TValue, [SetStateAction<TValue> | typeof RESET], void>,
  debounceMs = 500,
  shouldDebounceOnReset = false
) {
  const prevTimeoutAtom = baseAtom<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  const initialValueAtom = isAtom(initialValueOrAtom)
    ? initialValueOrAtom
    : atomWithWrapper<TValue>(initialValueOrAtom);

  // DO NOT EXPORT currentValueAtom as using this atom to set state can cause
  // inconsistent state between currentValueAtom and debouncedValueAtom
  const innerValueAtom = baseAtom<TValue>(null as TValue);
  const _currentValueAtom = baseAtom(
    get => {
      const innerValue = get(innerValueAtom);
      if (innerValue === null) {
        return get(initialValueAtom);
      }

      return innerValue;
    },
    (get, set, update: SetStateAction<TValue>) => set(innerValueAtom, update)
  );

  const isDebouncingAtom = baseAtom(false);
  const debouncedValueAtom = baseAtom(
    get => get(innerValueAtom),
    (get, set, update: SetStateAction<TValue> | typeof RESET) => {
      clearTimeout(get(prevTimeoutAtom));

      const prevValue = get(_currentValueAtom);
      const nextValue =
        update === RESET
          ? get(innerValueAtom)
          : isFunction(update)
            ? (update as (prev: TValue) => TValue)(prevValue)
            : update;

      const onDebounceStart = () => {
        set(_currentValueAtom, nextValue);
        set(isDebouncingAtom, true);
      };

      const onDebounceEnd = () => {
        set(debouncedValueAtom, nextValue);
        set(isDebouncingAtom, false);
      };

      onDebounceStart();

      if (!shouldDebounceOnReset && nextValue === get(initialValueAtom)) {
        onDebounceEnd();
        return;
      }

      const nextTimeoutId = setTimeout(() => {
        onDebounceEnd();
      }, debounceMs);

      // set previous timeout atom in case it needs to get cleared
      set(prevTimeoutAtom, nextTimeoutId);
    }
  );

  // exported atom setter to clear timeout if needed
  const clearTimeoutAtom = baseAtom(null, (get, set) => {
    clearTimeout(get(prevTimeoutAtom));
    set(isDebouncingAtom, false);
  });

  return {
    clearTimeoutAtom,
    currentValueAtom: baseAtom(get => get(_currentValueAtom)),
    debouncedValueAtom,
    isDebouncingAtom
  };
}
