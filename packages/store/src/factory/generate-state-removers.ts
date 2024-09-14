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

import { DeepKey, isArray, isObject } from "@storm-stack/types";
import { Draft } from "immer";
import { ImmerStoreApi, RemoveRecord, State } from "../types";
import { removeBy } from "../utils";

export const generateStateRemovers = <TState extends State>(
  store: ImmerStoreApi<TState>,
  storeName: string
): RemoveRecord<TState> => {
  const removes = {} as any;

  const state = store.getState();
  for (const field of Object.keys(state as TState)) {
    const removeStateField: any = () => {
      store.setState(
        draft => {
          delete draft[field as keyof Draft<TState>];
        },
        `@@${storeName}/remove${field.replace(/^\S/, s => s.toUpperCase())}`
      );
    };

    if (isArray(state[field])) {
      removeStateField.$item = <TIndex extends number>(index: TIndex) => {
        store.setState(
          prev => {
            if (index > -1) {
              prev[field].splice(index, 1);
            }
          },
          `@@${storeName}/setItem${field.replace(/^\S/, s => s.toUpperCase())}`
        );
      };
    } else if (isObject(state[field])) {
      removeStateField.$path = <TKey extends DeepKey<TState[typeof field]>>(
        key: TKey
      ) => {
        store.setState(
          draft => {
            removeBy(draft[field], key);
          },
          `@@${storeName}/removePath${field.replace(/^\S/, s => s.toUpperCase())}`
        );
      };
    }

    removes[field as keyof TState] = removeStateField;
  }

  return removes;
};
