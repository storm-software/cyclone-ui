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
  createAtomStore,
  CreateAtomStoreOptions,
  StoreAtomsWithoutSelectors
} from "@cyclone-ui/state";
import { flattenObject } from "@storm-stack/utilities/helper-fns/flatten-object";
import { TamaguiElement } from "@tamagui/core";
import { Atom, atom } from "jotai";
import { withHistory } from "jotai-history";
import { LegacyRef } from "react";
import {
  atomWithFieldsMessageList,
  atomWithFieldsMessageTypes,
  atomWithMessages,
  atomWithMessageTypes,
  atomWithTheme
} from "../atoms/atom-with-messages";
import {
  FormBaseState,
  InferFieldState,
  InferFormState,
  ValidationResults
} from "../types";

const formStoreSelectors = <
  TFormValues extends Record<string, any> = Record<string, any>
>(
  atoms: StoreAtomsWithoutSelectors<FormBaseState<TFormValues>>
) => {
  const dirtyAtom = atom(get => {
    const options = get(atoms.options);
    return options.isEqual(get(atoms.values), get(atoms.initialValues));
  });

  const pristineAtom = atom(get => !get(dirtyAtom));

  const blurredAtom = atom(get => {
    const blurredFields = flattenObject(get(atoms.blurredFields));
    return Object.keys(blurredFields).some(key => blurredFields[key]);
  });
  const touchedAtom = atom(get => {
    const touchedFields = flattenObject(get(atoms.touchedFields));
    return Object.keys(touchedFields).some(key => touchedFields[key]);
  });
  const validatingAtom = atom(get => {
    if (get(atoms.formValidating)) {
      return true;
    }

    const validatingFields = flattenObject(get(atoms.validatingFields));
    return Object.keys(validatingFields).some(key => validatingFields[key]);
  });

  const formErrorsAtom = atomWithMessageTypes(atoms.validationResults, "error");
  const formWarningsAtom = atomWithMessageTypes(
    atoms.validationResults,
    "warning"
  );
  const formInfoAtom = atomWithMessageTypes(atoms.validationResults, "info");
  const formHelpAtom = atomWithMessageTypes(atoms.validationResults, "help");
  const formSuccessesAtom = atomWithMessageTypes(
    atoms.validationResults,
    "success"
  );

  const isFormInvalidAtom = atom(get => {
    const errorMessages = get(formErrorsAtom);
    return errorMessages.length > 0;
  });

  const errorFieldsAtom = atomWithFieldsMessageTypes(
    atoms.validationResultsFields as Atom<
      InferFieldState<TFormValues, ValidationResults>
    >,
    "error"
  );
  const warningFieldsAtom = atomWithFieldsMessageTypes(
    atoms.validationResultsFields as Atom<
      InferFieldState<TFormValues, ValidationResults>
    >,
    "warning"
  );
  const infoFieldsAtom = atomWithFieldsMessageTypes(
    atoms.validationResultsFields as Atom<
      InferFieldState<TFormValues, ValidationResults>
    >,
    "info"
  );
  const helpFieldsAtom = atomWithFieldsMessageTypes(
    atoms.validationResultsFields as Atom<
      InferFieldState<TFormValues, ValidationResults>
    >,
    "help"
  );
  const successFieldsAtom = atomWithFieldsMessageTypes(
    atoms.validationResultsFields as Atom<
      InferFieldState<TFormValues, ValidationResults>
    >,
    "success"
  );

  const fieldErrorMessagesAtom = atomWithFieldsMessageList(
    atoms.validationResultsFields as Atom<
      InferFieldState<TFormValues, ValidationResults>
    >,
    "error"
  );
  const fieldWarningMessagesAtom = atomWithFieldsMessageList(
    atoms.validationResultsFields as Atom<
      InferFieldState<TFormValues, ValidationResults>
    >,
    "warning"
  );
  const fieldInfoMessagesAtom = atomWithFieldsMessageList(
    atoms.validationResultsFields as Atom<
      InferFieldState<TFormValues, ValidationResults>
    >,
    "info"
  );
  const fieldHelpMessagesAtom = atomWithFieldsMessageList(
    atoms.validationResultsFields as Atom<
      InferFieldState<TFormValues, ValidationResults>
    >,
    "help"
  );
  const fieldsSuccessMessagesAtom = atomWithFieldsMessageList(
    atoms.validationResultsFields as Atom<
      InferFieldState<TFormValues, ValidationResults>
    >,
    "success"
  );

  const invalidAtom = atom(get => {
    const fieldErrorMessages = get(fieldErrorMessagesAtom);
    return fieldErrorMessages.length > 0 || get(isFormInvalidAtom);
  });
  const validAtom = atom(get => !get(invalidAtom));

  const canSubmitAtom = atom(
    get =>
      get(validAtom) &&
      !get(validatingAtom) &&
      !get(atoms.submitting) &&
      !get(atoms.submitted) &&
      !get(atoms.disabled)
  );

  const historyAtom = withHistory(atoms.values, 2);
  const previousValuesAtom = atom(get => get(historyAtom)[1] ?? {});

  return {
    dirty: dirtyAtom,
    pristine: pristineAtom,

    blurred: blurredAtom,
    touched: touchedAtom,
    validating: validatingAtom,

    previousValues: previousValuesAtom,

    errorMessages: formErrorsAtom,
    warningMessages: formWarningsAtom,
    infoMessages: formInfoAtom,
    helpMessages: formHelpAtom,
    successMessages: formSuccessesAtom,
    messages: atomWithMessages(
      formErrorsAtom,
      formWarningsAtom,
      formInfoAtom,
      formHelpAtom,
      formSuccessesAtom
    ),

    errorFields: errorFieldsAtom,
    warningFields: warningFieldsAtom,
    infoFields: infoFieldsAtom,
    helpFields: helpFieldsAtom,
    successFields: successFieldsAtom,

    fieldErrorMessages: fieldErrorMessagesAtom,
    fieldWarningMessages: fieldWarningMessagesAtom,
    fieldInfoMessages: fieldInfoMessagesAtom,
    fieldHelpMessages: fieldHelpMessagesAtom,
    fieldsSuccessMessages: fieldsSuccessMessagesAtom,

    valid: validAtom,
    invalid: invalidAtom,
    theme: atomWithTheme(
      atoms.options,
      formErrorsAtom,
      formWarningsAtom,
      formInfoAtom,
      formHelpAtom,
      formSuccessesAtom
    ),

    canSubmit: canSubmitAtom
  };
};

export const formStore = createAtomStore<
  FormBaseState,
  CreateAtomStoreOptions<FormBaseState, typeof formStoreSelectors>
>({
  name: "form",
  initialState: {
    name: "form",
    disabled: false,
    formValidating: false,
    validationResults: {
      initialize: [],
      change: [],
      blur: [],
      submit: [],
      server: []
    },
    submitting: false,
    submitted: false,
    submitAttempts: 0,
    initialValues: {} as Record<string, any>,
    values: {} as Record<string, any>,
    focusedFields: {} as InferFormState<Record<string, any>, boolean>,
    requiredFields: {} as InferFormState<Record<string, any>, boolean>,
    disabledFields: {} as InferFormState<Record<string, any>, boolean>,
    touchedFields: {} as InferFormState<Record<string, any>, boolean>,
    blurredFields: {} as InferFormState<Record<string, any>, boolean>,
    validatingFields: {} as InferFormState<Record<string, any>, boolean>,
    validationResultsFields: {} as InferFormState<
      Record<string, any>,
      ValidationResults
    >,
    tabIndexes: {} as InferFormState<Record<string, any>, number>,
    refs: {} as InferFormState<Record<string, any>, LegacyRef<TamaguiElement>>,
    options: {} as FormBaseState["options"]
  },
  selectors: formStoreSelectors
});

export type FormStore = typeof formStore;
export type FormStoreApi = FormStore["api"];
export type FormStoreAtom = FormStoreApi["atom"];
