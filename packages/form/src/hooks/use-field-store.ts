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

import { UseAtomOptionsOrScope } from "@cyclone-ui/state";
import { isSet } from "@storm-stack/types/type-checks/is-set";
import { useContext } from "react";
import { FieldStoreContext } from "../providers/FieldStoreProvider";
import {
  FieldStore,
  FieldStoreApi,
  UseFieldStore
} from "../stores/field-store";

export const useField = <TFieldValue>(): FieldStore<TFieldValue> => {
  const fieldStoreRef = useContext(FieldStoreContext);

  if (!isSet(fieldStoreRef?.current)) {
    throw new Error("useField must be used within a FieldStoreProvider");
  }

  return fieldStoreRef.current;
};

export const useFieldStore = <TFieldValue>(
  options?: UseAtomOptionsOrScope
): ReturnType<UseFieldStore<TFieldValue>> => {
  return useField<TFieldValue>().useStore(options);
};

export const useFieldValue = <TFieldValue>(
  options?: UseAtomOptionsOrScope
): TFieldValue => {
  const store = useFieldStore<TFieldValue>(options);

  return store.get.value() as TFieldValue;
};

export const useFieldApi = <TFieldValue>(): FieldStoreApi<TFieldValue> => {
  return useField<TFieldValue>().api;
};
