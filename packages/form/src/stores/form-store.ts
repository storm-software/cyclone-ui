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
  const dirtyAtom = atom(get =>
    isEqual(get(atoms.values), get(atoms.initialValues))
  );
  const pristineAtom = atom(get => !get(dirtyAtom));

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
      !get(atoms.submitting) &&
      !get(atoms.submitted) &&
      !get(atoms.disabled)
  );

  return {
    dirty: dirtyAtom,
    pristine: pristineAtom,

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
    validating: false,
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
    previousValues: {} as Record<string, any>,
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
    options: {} as FormOptions
  },
  selectors: formStoreSelectors
});

export type FormStore = typeof formStore;
export type FormStoreApi = FormStore["api"];
export type FormStoreAtom = FormStoreApi["atom"];
