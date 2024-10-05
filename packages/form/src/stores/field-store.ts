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

import {
  createAtomStore,
  CreateAtomStoreOptions,
  StoreAtomsWithoutSelectors
} from "@cyclone-ui/state";
import { atom } from "jotai";
import {
  atomWithMessages,
  atomWithMessageTypes,
  atomWithTheme
} from "../atoms/atom-with-messages";
import { FieldBaseState, FieldOptions, InferFieldValue } from "../types";

const fieldStoreSelectors = <
  TFieldOptions extends FieldOptions = FieldOptions,
  TFieldValue extends
    InferFieldValue<TFieldOptions> = InferFieldValue<TFieldOptions>
>(
  atoms: StoreAtomsWithoutSelectors<FieldBaseState<TFieldOptions, TFieldValue>>
) => {
  const dirtyAtom = atom(get => get(atoms.value) !== get(atoms.initialValue));

  const errorMessagesAtom = atomWithMessageTypes(
    atoms.validationResults,
    "error"
  );
  const warningMessagesAtom = atomWithMessageTypes(
    atoms.validationResults,
    "warning"
  );
  const infoMessagesAtom = atomWithMessageTypes(
    atoms.validationResults,
    "info"
  );
  const successMessagesAtom = atomWithMessageTypes(
    atoms.validationResults,
    "success"
  );

  return {
    pristine: atom(get => !get(dirtyAtom)),
    dirty: dirtyAtom,
    errorMessages: errorMessagesAtom,
    warningMessages: warningMessagesAtom,
    infoMessages: infoMessagesAtom,
    successMessages: successMessagesAtom,
    theme: atomWithTheme(
      atoms.options,
      errorMessagesAtom,
      warningMessagesAtom,
      infoMessagesAtom,
      successMessagesAtom
    ),
    messages: atomWithMessages(
      errorMessagesAtom,
      warningMessagesAtom,
      infoMessagesAtom,
      successMessagesAtom
    )
  };
};

export const fieldStore = createAtomStore<
  FieldBaseState<FieldOptions>,
  CreateAtomStoreOptions<
    FieldBaseState<FieldOptions>,
    typeof fieldStoreSelectors
  >
>({
  name: "field",
  initialState: {
    name: "field",
    formName: "form",
    initialValue: null,
    previousValue: null,
    value: null,
    focused: false,
    required: false,
    disabled: false,
    touched: false,
    blurred: false,
    validating: false,
    validationResults: {
      mount: [],
      change: [],
      blur: [],
      submit: [],
      server: []
    },
    items: [],
    options: {} as FieldOptions
  },
  selectors: fieldStoreSelectors
});

export type FieldStore = typeof fieldStore;
