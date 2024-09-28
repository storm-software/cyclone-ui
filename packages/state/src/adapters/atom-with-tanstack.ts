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

import { isFunction } from "@storm-stack/types/type-checks/is-function";
import { AnyUpdater, Store } from "@tanstack/store";
import { SetStateAction, WritableAtom } from "jotai";
import { baseAtom } from "../base/base-atom";

/**
 * Creates an atom that wraps a Tanstack store.
 *
 * @remarks
 * Please see the {@link https://tanstack.com/store | Tanstack Store documentation} for more information.
 *
 * @param store - The Tanstack store to wrap.
 * @returns An atom that wraps a Tanstack store.
 */
export const atomWithTanstack = <TState>(
  store: Store<TState>
): WritableAtom<TState, [SetStateAction<TState>], void> => {
  const innerAtom = baseAtom<TState>(store.state);
  innerAtom.onMount = setValue => {
    store.subscribe(() => {
      setValue(store.state);
    });
  };

  const resultAtom = baseAtom<TState, [SetStateAction<TState>], void>(
    get => {
      return get(innerAtom);
    },
    (get, set, action: SetStateAction<TState>) => {
      if (isFunction(action)) {
        store.setState(action as AnyUpdater);
      } else {
        store.setState(() => action as TState);
      }
    }
  );

  return resultAtom;
};
