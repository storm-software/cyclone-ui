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
import { isEqual } from "@storm-stack/utilities/helper-fns/is-deep-equal";
import { toPath } from "@storm-stack/utilities/helper-fns/to-path";
import { atom } from "jotai";
import { focusAtom } from "jotai-optics";
import {
  atomWithFieldsMessageList,
  atomWithFieldsMessageTypes,
  atomWithMessages,
  atomWithTheme
} from "../atoms/atom-with-messages";
import { FieldBaseState, FieldOptions } from "../types";
import { formStore } from "./form-store";

export const createFieldStore = <TFieldValue>(name: string) => {
  const fieldStoreSelectors = (
    atoms: StoreAtomsWithoutSelectors<FieldBaseState<TFieldValue>>
  ) => {
    const isDirtyAtom = atom(get =>
      isEqual(get(atoms.value), get(atoms.initialValue))
    );

    const errorsAtom = atomWithFieldsMessageTypes(
      atoms.validationResults,
      "error"
    );
    const warningsAtom = atomWithFieldsMessageTypes(
      atoms.validationResults,
      "warning"
    );
    const infoAtom = atomWithFieldsMessageTypes(
      atoms.validationResults,
      "info"
    );
    const helpAtom = atomWithFieldsMessageTypes(
      atoms.validationResults,
      "help"
    );
    const successesAtom = atomWithFieldsMessageTypes(
      atoms.validationResults,
      "success"
    );

    const errorMessagesAtom = atomWithFieldsMessageList(
      atoms.validationResults,
      "error"
    );
    const warningMessagesAtom = atomWithFieldsMessageList(
      atoms.validationResults,
      "warning"
    );
    const infoMessagesAtom = atomWithFieldsMessageList(
      atoms.validationResults,
      "info"
    );
    const helpMessagesAtom = atomWithFieldsMessageList(
      atoms.validationResults,
      "help"
    );
    const successMessagesAtom = atomWithFieldsMessageList(
      atoms.validationResults,
      "success"
    );

    const isInvalidAtom = atom(get => {
      const errorMessages = get(errorMessagesAtom);
      return errorMessages.length > 0;
    });
    const isValidAtom = atom(get => !get(isInvalidAtom));

    return {
      isPristine: atom(get => !get(isDirtyAtom)),
      isDirty: isDirtyAtom,
      errors: errorsAtom,
      warnings: warningsAtom,
      info: infoAtom,
      help: helpAtom,
      successes: successesAtom,
      errorMessages: errorMessagesAtom,
      warningMessages: warningMessagesAtom,
      infoMessages: infoMessagesAtom,
      helpMessages: helpMessagesAtom,
      successMessages: successMessagesAtom,
      theme: atomWithTheme(
        atoms.options,
        errorMessagesAtom,
        warningMessagesAtom,
        infoMessagesAtom,
        helpMessagesAtom,
        successMessagesAtom
      ),
      messages: atomWithMessages(
        errorMessagesAtom,
        warningMessagesAtom,
        infoMessagesAtom,
        helpMessagesAtom,
        successMessagesAtom
      ),
      isInvalid: isInvalidAtom,
      isValid: isValidAtom
    };
  };

  // const fullName = scope ? `${scope}.${name}` : name;
  const path = toPath(name);

  return createAtomStore<
    FieldBaseState<TFieldValue>,
    CreateAtomStoreOptions<
      FieldBaseState<TFieldValue>,
      typeof fieldStoreSelectors
    >
  >({
    name: "fieldGroup",
    initialState: {
      name,
      path,
      isFocused: focusAtom(formStore.api.atom.isFieldsFocused, optic =>
        optic.path(...path)
      ),
      isRequired: focusAtom(formStore.api.atom.isFieldsRequired, optic =>
        optic.path(...path)
      ),
      isDisabled: focusAtom(formStore.api.atom.isFieldsDisabled, optic =>
        optic.path(...path)
      ),
      isTouched: focusAtom(formStore.api.atom.isFieldsTouched, optic =>
        optic.path(...path)
      ),
      isBlurred: focusAtom(formStore.api.atom.isFieldsBlurred, optic =>
        optic.path(...path)
      ),
      isValidating: focusAtom(formStore.api.atom.isFieldsValidating, optic =>
        optic.path(...path)
      ),
      validationResults: focusAtom(
        formStore.api.atom.fieldsValidationResults,
        optic => optic.path(...path)
      ),
      initialValue: focusAtom(formStore.api.atom.initialValues, optic =>
        optic.path(...path)
      ),
      previousValue: focusAtom(formStore.api.atom.previousValues, optic =>
        optic.path(...path)
      ),
      value: focusAtom(formStore.api.atom.values, optic => optic.path(...path)),
      items: [],
      options: {} as FieldOptions
    },
    selectors: fieldStoreSelectors
  });
};

export type FieldStore = ReturnType<typeof createFieldStore>;
export type FieldStoreApi = FieldStore["api"];
export type FieldStoreAtom = FieldStoreApi["atom"];
export type UseFieldStore = FieldStore["useStore"];
