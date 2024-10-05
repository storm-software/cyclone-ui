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

import { ColorRole } from "@cyclone-ui/colors";
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

const formStoreSelectors = <TFormValues = any>(
  atoms: StoreAtomsWithoutSelectors<any>
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
      atoms.theme,
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

export const formStore = createAtomStore<
  any,
  CreateAtomStoreOptions<any, typeof formStoreSelectors>
>({
  name: "form",
  initialState: {
    name: "form",
    theme: ColorRole.BASE,
    initialValues: {},
    previousValues: {},
    values: {},
    focused: false,
    required: false,
    disabled: false,
    touched: false,
    blurred: false,
    errors: [],
    validating: false,
    validationResults: {
      mount: [],
      change: [],
      blur: [],
      submit: [],
      server: []
    },
    items: [],
    options: {}
  },
  selectors: formStoreSelectors
});

export type FormStore = typeof formStore;
