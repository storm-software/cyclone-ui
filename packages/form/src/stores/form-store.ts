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
import { Atom, atom } from "jotai";
import {
  atomWithFieldsMessageList,
  atomWithFieldsMessageTypes,
  atomWithMessages,
  atomWithMessageTypes,
  atomWithTheme
} from "../atoms/atom-with-messages";
import {
  FormBaseState,
  FormOptions,
  InferFieldState,
  InferFormState,
  ValidationResults
} from "../types";

const formStoreSelectors = <
  TFormValues extends Record<string, any> = Record<string, any>
>(
  atoms: StoreAtomsWithoutSelectors<FormBaseState<TFormValues>>
) => {
  const isDirtyAtom = atom(get =>
    isEqual(get(atoms.values), get(atoms.initialValues))
  );
  const isPristineAtom = atom(get => !get(isDirtyAtom));

  const formErrorsAtom = atomWithMessageTypes(
    atoms.formValidationResults,
    "error"
  );
  const formWarningsAtom = atomWithMessageTypes(
    atoms.formValidationResults,
    "warning"
  );
  const formInfoAtom = atomWithMessageTypes(
    atoms.formValidationResults,
    "info"
  );
  const formHelpAtom = atomWithMessageTypes(
    atoms.formValidationResults,
    "help"
  );
  const formSuccessesAtom = atomWithMessageTypes(
    atoms.formValidationResults,
    "success"
  );

  const isFormInvalidAtom = atom(get => {
    const errorMessages = get(formErrorsAtom);
    return errorMessages.length > 0;
  });
  const isFormValidAtom = atom(get => !get(isFormInvalidAtom));

  const fieldsErrorsAtom = atomWithFieldsMessageTypes(
    atoms.fieldsValidationResults as Atom<
      InferFieldState<TFormValues, ValidationResults>
    >,
    "error"
  );
  const fieldsWarningsAtom = atomWithFieldsMessageTypes(
    atoms.fieldsValidationResults as Atom<
      InferFieldState<TFormValues, ValidationResults>
    >,
    "warning"
  );
  const fieldsInfoAtom = atomWithFieldsMessageTypes(
    atoms.fieldsValidationResults as Atom<
      InferFieldState<TFormValues, ValidationResults>
    >,
    "info"
  );
  const fieldsHelpAtom = atomWithFieldsMessageTypes(
    atoms.fieldsValidationResults as Atom<
      InferFieldState<TFormValues, ValidationResults>
    >,
    "help"
  );
  const fieldsSuccessesAtom = atomWithFieldsMessageTypes(
    atoms.fieldsValidationResults as Atom<
      InferFieldState<TFormValues, ValidationResults>
    >,
    "success"
  );

  const fieldsErrorMessagesAtom = atomWithFieldsMessageList(
    atoms.fieldsValidationResults as Atom<
      InferFieldState<TFormValues, ValidationResults>
    >,
    "error"
  );
  const fieldsWarningMessagesAtom = atomWithFieldsMessageList(
    atoms.fieldsValidationResults as Atom<
      InferFieldState<TFormValues, ValidationResults>
    >,
    "warning"
  );
  const fieldsInfoMessagesAtom = atomWithFieldsMessageList(
    atoms.fieldsValidationResults as Atom<
      InferFieldState<TFormValues, ValidationResults>
    >,
    "info"
  );
  const fieldsHelpMessagesAtom = atomWithFieldsMessageList(
    atoms.fieldsValidationResults as Atom<
      InferFieldState<TFormValues, ValidationResults>
    >,
    "help"
  );
  const fieldsSuccessMessagesAtom = atomWithFieldsMessageList(
    atoms.fieldsValidationResults as Atom<
      InferFieldState<TFormValues, ValidationResults>
    >,
    "success"
  );

  const isFieldsInvalidAtom = atom(get => {
    const errorMessages = get(fieldsErrorMessagesAtom);
    return errorMessages.length > 0;
  });
  const isFieldsValidAtom = atom(get => !get(isFormInvalidAtom));

  const isInvalidAtom = atom(
    get => get(isFormInvalidAtom) || get(isFieldsInvalidAtom)
  );
  const isValidAtom = atom(get => !get(isInvalidAtom));

  const canSubmitAtom = atom(
    get =>
      get(isValidAtom) &&
      !get(atoms.isSubmitting) &&
      !get(atoms.isSubmitted) &&
      !get(atoms.isFormDisabled)
  );

  return {
    isDirty: isDirtyAtom,
    isPristine: isPristineAtom,
    formErrorMessages: formErrorsAtom,
    formWarningMessages: formWarningsAtom,
    formInfoMessages: formInfoAtom,
    formHelpMessages: formHelpAtom,
    formSuccessMessages: formSuccessesAtom,
    fieldsErrors: fieldsErrorsAtom,
    fieldsWarnings: fieldsWarningsAtom,
    fieldsInfo: fieldsInfoAtom,
    fieldsHelp: fieldsHelpAtom,
    fieldsSuccesses: fieldsSuccessesAtom,
    fieldsErrorMessages: fieldsErrorMessagesAtom,
    fieldsWarningMessages: fieldsWarningMessagesAtom,
    fieldsInfoMessages: fieldsInfoMessagesAtom,
    fieldsHelpMessages: fieldsHelpMessagesAtom,
    fieldsSuccessMessages: fieldsSuccessMessagesAtom,
    isFormValid: isFormValidAtom,
    isFormInvalid: isFormInvalidAtom,
    isFieldsValid: isFieldsValidAtom,
    isFieldsInvalid: isFieldsInvalidAtom,
    isValid: isValidAtom,
    isInvalid: isInvalidAtom,
    theme: atomWithTheme(
      atoms.options,
      formErrorsAtom,
      formWarningsAtom,
      formInfoAtom,
      formHelpAtom,
      formSuccessesAtom
    ),
    messages: atomWithMessages(
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
    isFormDisabled: false,
    isFormValidating: false,
    formValidationResults: {
      initialize: [],
      change: [],
      blur: [],
      submit: [],
      server: []
    },
    isSubmitting: false,
    isSubmitted: false,
    submitAttempts: 0,
    initialValues: {} as Record<string, any>,
    previousValues: {} as Record<string, any>,
    values: {} as Record<string, any>,
    isFieldsFocused: {} as InferFormState<Record<string, any>, boolean>,
    isFieldsRequired: {} as InferFormState<Record<string, any>, boolean>,
    isFieldsDisabled: {} as InferFormState<Record<string, any>, boolean>,
    isFieldsTouched: {} as InferFormState<Record<string, any>, boolean>,
    isFieldsBlurred: {} as InferFormState<Record<string, any>, boolean>,
    isFieldsValidating: {} as InferFormState<Record<string, any>, boolean>,
    fieldsValidationResults: {} as InferFormState<
      Record<string, any>,
      ValidationResults
    >,
    options: {} as FormOptions
  },
  selectors: formStoreSelectors
});

export type FormStore = typeof formStore;
export type FormStoreApi = FormStore["api"];
export type FormStoreAtom = FormStoreApi["atom"];
