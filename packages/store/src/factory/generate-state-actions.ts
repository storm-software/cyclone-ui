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
  DeepKey,
  DeepValue,
  isArray,
  isObject,
  Paths
} from "@storm-stack/types";
import { Draft } from "immer";
import { ImmerStoreApi, SetRecord, SetRecordParam, State } from "../types";
import { getBy, isFunction, setBy } from "../utils";

export const generateStateActions = <TState extends State>(
  store: ImmerStoreApi<TState>,
  storeName: string
): SetRecord<TState> => {
  const actions = {} as any;

  const state = store.getState();
  for (const field of Object.keys(state as TState)) {
    const setStateField: any = (
      param: SetRecordParam<TState[typeof field]>
    ) => {
      if (!isFunction(param) && store.getState()[field] === param) {
        return;
      }

      store.setState(
        prev => {
          if (isFunction(param)) {
            const updateFn = param as (
              state: TState[typeof field]
            ) => TState[typeof field];

            return updateFn(prev[field as any]);
          }

          setBy(
            prev,
            field as Paths<Draft<TState>>,
            param as TState[keyof TState]
          );
        },
        `@@${storeName}/set${field.replace(/^\S/, s => s.toUpperCase())}`
      );
    };

    if (isArray(state[field])) {
      setStateField.$item = <TIndex extends number>(
        index: TIndex,
        param: SetRecordParam<TState[typeof field][TIndex]>
      ) => {
        if (!isFunction(param) && store.getState()[field][index] === param) {
          return;
        }

        store.setState(
          prev => {
            if (isFunction(param)) {
              const updateFn = param as (
                state: TState[typeof field][TIndex]
              ) => TState[typeof field][TIndex];

              return updateFn(prev[field][index]);
            }

            prev[field][index] = param;
          },
          `@@${storeName}/setItem${field.replace(/^\S/, s => s.toUpperCase())}`
        );
      };
    } else if (isObject(state[field])) {
      setStateField.$path = <TKey extends DeepKey<TState[typeof field]>>(
        key: TKey,
        param: SetRecordParam<DeepValue<TState[typeof field], TKey>>
      ) => {
        if (
          !isFunction(param) &&
          getBy(store.getState()[field], key) === param
        ) {
          return;
        }

        store.setState(
          prev => {
            if (isFunction(param)) {
              const updateFn = param as (
                state: TState[typeof field][TKey]
              ) => TState[typeof field][TKey];

              return updateFn(getBy(prev[field], key));
            }

            setBy(prev[field], key, param);
          },
          `@@${storeName}/setPath${field.replace(/^\S/, s => s.toUpperCase())}`
        );
      };
    }

    actions[field as keyof TState] = setStateField;
  }

  return actions;
};
