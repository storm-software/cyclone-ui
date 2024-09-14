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

import {
  ArrayValues,
  DeepKey,
  DeepValue,
  isArray,
  isObject
} from "@storm-stack/types";
import { GetRecord, ImmerStoreApi, State } from "../types";
import { getBy } from "../utils";

export const generateStateGetSelectors = <TState extends State>(
  store: ImmerStoreApi<TState>
): GetRecord<TState> => {
  const selectors = {} as any;

  const state = store.getState();
  for (const field of Object.keys(state as TState)) {
    let getStateField;
    if (isArray(state[field])) {
      getStateField = () => store.getState()[field] as TState[keyof TState];
      getStateField.$item = (index: number) =>
        store.getState()[field][index] as ArrayValues<TState[keyof TState]>;
    } else if (isObject(state[field])) {
      getStateField = () => store.getState()[field] as TState[keyof TState];
      getStateField.$path = <TKey extends DeepKey<TState[typeof field]>>(
        key: TKey
      ): DeepValue<TState[typeof field], TKey> =>
          getBy(store.getState()[field], key);
    } else {
      getStateField = () => store.getState()[field] as TState[keyof TState];
    }

    selectors[field as keyof TState] = getStateField;
  }

  return selectors;
};
