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

import { createMoleculeApi, SetStateActionWithReset } from "@cyclone-ui/state";
import { isFunction } from "@storm-stack/types/type-checks/is-function";
import { isNumber } from "@storm-stack/types/type-checks/is-number";
import { isString } from "@storm-stack/types/type-checks/is-string";
import { ValidationDetails } from "@storm-stack/types/utility-types/validations";
import { deepMerge } from "@storm-stack/utilities/helper-fns/deep-merge";
import { flattenObject } from "@storm-stack/utilities/helper-fns/flatten-object";
import { isEqual } from "@storm-stack/utilities/helper-fns/is-equal";
import { setField } from "@storm-stack/utilities/helper-fns/set-field";
import { Atom, atom, SetStateAction, WritableAtom } from "jotai";
import { atomWithDefault, atomWithReset, RESET } from "jotai/utils";
import { Ref } from "react";
import {
  atomWithFieldsMessageList,
  atomWithFieldsMessageTypes,
  atomWithMessages,
  atomWithMessageTypes,
  atomWithTheme
} from "../atoms/atom-with-messages";
import {
  FormOptions,
  FormValuesState,
  InferFieldState,
  InferFormState,
  ValidationResults
} from "../types";

export type FormOptionsState<
  TFormValues extends Record<string, any> = Record<string, any>
> = FormOptions<TFormValues> &
  Required<
    Pick<
      FormOptions<TFormValues>,
      | "theme"
      | "debounceMs"
      | "isEqual"
      | "disabled"
      | "initialValues"
      | "defaultFieldOptions"
    >
  >;

export const DEFAULT_FORM_OPTIONS: FormOptionsState = {
  theme: "base",
  debounceMs: 100,
  isEqual,
  disabled: false,
  initialValues: {},
  defaultFieldOptions: {}
} as const;

export type FormAtoms<
  TFormValues extends Record<string, any> = Record<string, any>
> = {
  options: WritableAtom<
    FormOptionsState<TFormValues>,
    [SetStateActionWithReset<FormOptions<TFormValues>>],
    void
  >;

  name: Atom<string>;

  initialValues: WritableAtom<
    FormValuesState<TFormValues>,
    [typeof RESET | SetStateAction<FormValuesState<TFormValues>>],
    void
  >;
  previousValues: Atom<FormValuesState<TFormValues>>;
  values: WritableAtom<
    FormValuesState<TFormValues>,
    [typeof RESET | SetStateAction<FormValuesState<TFormValues>>],
    void
  >;

  disabled: WritableAtom<
    boolean,
    [typeof RESET | SetStateAction<boolean>],
    void
  >;
  formValidating: WritableAtom<
    boolean,
    [SetStateActionWithReset<boolean>],
    void
  >;
  validationResults: WritableAtom<
    ValidationResults,
    [SetStateActionWithReset<ValidationResults>],
    void
  >;
  submitting: WritableAtom<boolean, [SetStateActionWithReset<boolean>], void>;
  submitted: WritableAtom<boolean, [SetStateActionWithReset<boolean>], void>;
  submitAttempts: WritableAtom<number, [SetStateActionWithReset<number>], void>;

  focusedFields: WritableAtom<
    InferFormState<TFormValues, boolean>,
    [SetStateActionWithReset<InferFormState<TFormValues, boolean>>],
    void
  >;
  requiredFields: WritableAtom<
    InferFormState<TFormValues, boolean>,
    [SetStateActionWithReset<InferFormState<TFormValues, boolean>>],
    void
  >;
  disabledFields: WritableAtom<
    InferFormState<TFormValues, boolean>,
    [SetStateActionWithReset<InferFormState<TFormValues, boolean>>],
    void
  >;
  touchedFields: WritableAtom<
    InferFormState<TFormValues, boolean>,
    [SetStateActionWithReset<InferFormState<TFormValues, boolean>>],
    void
  >;
  blurredFields: WritableAtom<
    InferFormState<TFormValues, boolean>,
    [SetStateActionWithReset<InferFormState<TFormValues, boolean>>],
    void
  >;
  validatingFields: WritableAtom<
    InferFormState<TFormValues, boolean>,
    [SetStateActionWithReset<InferFormState<TFormValues, boolean>>],
    void
  >;
  validationResultsFields: WritableAtom<
    InferFormState<TFormValues, ValidationResults>,
    [SetStateActionWithReset<InferFormState<TFormValues, ValidationResults>>],
    void
  >;
  tabIndexes: WritableAtom<
    InferFormState<TFormValues, number>,
    [
      | { field: string; tabIndex?: number }
      | SetStateActionWithReset<InferFormState<TFormValues, number>>
    ],
    void
  >;
  refs: WritableAtom<
    InferFormState<TFormValues, Ref<HTMLInputElement>>,
    [
      SetStateActionWithReset<
        InferFormState<TFormValues, Ref<HTMLInputElement>>
      >
    ],
    void
  >;

  dirty: Atom<boolean>;
  pristine: Atom<boolean>;

  blurred: Atom<boolean>;
  touched: Atom<boolean>;
  validating: Atom<boolean>;

  errorMessages: Atom<ValidationDetails<"error">[]>;
  warningMessages: Atom<ValidationDetails<"warning">[]>;
  infoMessages: Atom<ValidationDetails<"info">[]>;
  helpMessages: Atom<ValidationDetails<"help">[]>;
  successMessages: Atom<ValidationDetails<"success">[]>;
  messages: Atom<ValidationDetails[]>;

  errorFields: Atom<InferFieldState<TFormValues, ValidationDetails<"error">[]>>;
  warningFields: Atom<
    InferFieldState<TFormValues, ValidationDetails<"warning">[]>
  >;
  infoFields: Atom<InferFieldState<TFormValues, ValidationDetails<"info">[]>>;
  helpFields: Atom<InferFieldState<TFormValues, ValidationDetails<"help">[]>>;
  successFields: Atom<
    InferFieldState<TFormValues, ValidationDetails<"success">[]>
  >;

  fieldErrorMessages: Atom<ValidationDetails<"error">[]>;
  fieldWarningMessages: Atom<ValidationDetails<"warning">[]>;
  fieldInfoMessages: Atom<ValidationDetails<"info">[]>;
  fieldHelpMessages: Atom<ValidationDetails<"help">[]>;
  fieldsSuccessMessages: Atom<ValidationDetails<"success">[]>;

  valid: Atom<boolean>;
  invalid: Atom<boolean>;
  canSubmit: Atom<boolean>;
  theme: Atom<string>;
};

export const FormApi = createMoleculeApi(
  <TFormValues extends Record<string, any> = Record<string, any>>(
    scope: string
  ): FormAtoms<TFormValues> => {
    const optionsBaseAtom = atomWithReset(
      DEFAULT_FORM_OPTIONS as FormOptionsState<TFormValues>
    );
    const optionsAtom = atom<
      FormOptionsState<TFormValues>,
      [SetStateActionWithReset<FormOptions<TFormValues>>],
      void
    >(
      get => get(optionsBaseAtom),
      (get, set, update) => {
        let nextValue = {};
        if (isFunction(update)) {
          nextValue = update(get(optionsBaseAtom));
        } else if (update === RESET) {
          nextValue = {};
        } else {
          nextValue = update;
        }

        set(optionsBaseAtom, deepMerge(DEFAULT_FORM_OPTIONS, nextValue));
      }
    );

    const nameAtom = atom(scope);

    const disabledAtom = atomWithDefault(get =>
      Boolean(get(optionsAtom).disabled)
    );
    const formValidatingAtom = atomWithReset(false);

    const previousValuesBaseAtom = atomWithReset(
      {} as FormValuesState<TFormValues>
    );
    const previousValuesAtom = atom(
      get => get(previousValuesBaseAtom),
      (get, set, update) => {}
    );

    const initialValuesAtom = atomWithDefault(
      get => get(optionsAtom).initialValues
    );

    const valuesBaseAtom = atomWithDefault(
      get => get(optionsAtom).initialValues
    );
    const valuesAtom = atom(
      get => get(valuesBaseAtom),
      (
        get,
        set,
        update: SetStateActionWithReset<FormValuesState<TFormValues>>
      ) => {
        let nextValue = {};
        if (update) {
          if (isFunction(update)) {
            nextValue = update(get(valuesBaseAtom));
          } else {
            nextValue = update;
          }
        }

        set(previousValuesBaseAtom, get(valuesBaseAtom));
        set(valuesBaseAtom, nextValue as FormValuesState<TFormValues>);
      }
    );

    const validationResultsAtom = atomWithReset({
      initialize: [],
      change: [],
      blur: [],
      submit: [],
      server: []
    } as ValidationResults);
    const submittingAtom = atomWithReset(false);
    const submittedAtom = atomWithReset(false);
    const submitAttemptsAtom = atomWithReset(0);

    const focusedFieldsAtom = atomWithReset(
      {} as InferFormState<TFormValues, boolean>
    );
    const requiredFieldsAtom = atomWithReset(
      {} as InferFormState<TFormValues, boolean>
    );
    const disabledFieldsAtom = atomWithReset(
      {} as InferFormState<TFormValues, boolean>
    );
    const touchedFieldsAtom = atomWithReset(
      {} as InferFormState<TFormValues, boolean>
    );
    const blurredFieldsAtom = atomWithReset(
      {} as InferFormState<TFormValues, boolean>
    );
    const validatingFieldsAtom = atomWithReset(
      {} as InferFormState<TFormValues, boolean>
    );
    const validationResultsFieldsAtom = atomWithReset(
      {} as InferFormState<TFormValues, ValidationResults>
    );
    const refsAtom = atomWithReset(
      {} as InferFormState<TFormValues, Ref<HTMLInputElement>>
    );

    const tabIndexesBaseAtom = atomWithReset(
      {} as InferFormState<TFormValues, number>
    );
    const tabIndexesAtom = atom<
      InferFormState<TFormValues, number>,
      [
        | { field: string; tabIndex?: number }
        | SetStateActionWithReset<InferFormState<TFormValues, number>>
      ],
      void
    >(
      get => get(tabIndexesBaseAtom),
      (get, set, update) => {
        let nextValue = {};
        if (isFunction(update)) {
          nextValue = update(get(tabIndexesBaseAtom));
        } else if (update === RESET) {
          nextValue = {};
        } else {
          const tabIndexes = get(tabIndexesBaseAtom);
          if ("field" in update && update.field && isString(update.field)) {
            let tabIndex = update.tabIndex;
            if (!isNumber(tabIndex) || tabIndex > -1) {
              const flat = flattenObject(tabIndexes);

              let lastIndex = -1;
              for (const key in flat) {
                if (isNumber(flat[key]) && flat[key] > lastIndex) {
                  lastIndex = flat[key];
                }
              }
              tabIndex = lastIndex + 1;
            }

            nextValue = setField(tabIndexes, update.field as any, tabIndex);
          } else {
            nextValue = update;
          }
        }

        set(
          tabIndexesBaseAtom,
          nextValue as InferFormState<TFormValues, number>
        );
      }
    );

    const dirtyAtom = atom(get => {
      const options = get(optionsAtom);
      return options.isEqual(get(valuesAtom), get(initialValuesAtom));
    });
    const pristineAtom = atom(get => !get(dirtyAtom));

    const blurredAtom = atom(get => {
      const blurredFields = flattenObject(get(blurredFieldsAtom));
      return Object.keys(blurredFields).some(key => blurredFields[key]);
    });
    const touchedAtom = atom(get => {
      const touchedFields = flattenObject(get(touchedFieldsAtom));
      return Object.keys(touchedFields).some(key => touchedFields[key]);
    });

    const validatingAtom = atom(get => {
      if (get(formValidatingAtom)) {
        return true;
      }

      const validatingFields = flattenObject(get(validatingFieldsAtom));
      return Object.keys(validatingFields).some(key => validatingFields[key]);
    });

    const formErrorsAtom = atomWithMessageTypes(validationResultsAtom, "error");
    const formWarningsAtom = atomWithMessageTypes(
      validationResultsAtom,
      "warning"
    );
    const formInfoAtom = atomWithMessageTypes(validationResultsAtom, "info");
    const formHelpAtom = atomWithMessageTypes(validationResultsAtom, "help");
    const formSuccessesAtom = atomWithMessageTypes(
      validationResultsAtom,
      "success"
    );

    const isFormInvalidAtom = atom(get => {
      const errorMessages = get(formErrorsAtom);
      return errorMessages.length > 0;
    });

    const errorFieldsAtom = atomWithFieldsMessageTypes<TFormValues, "error">(
      validationResultsFieldsAtom,
      "error"
    );
    const warningFieldsAtom = atomWithFieldsMessageTypes<
      TFormValues,
      "warning"
    >(validationResultsFieldsAtom, "warning");
    const infoFieldsAtom = atomWithFieldsMessageTypes<TFormValues, "info">(
      validationResultsFieldsAtom,
      "info"
    );
    const helpFieldsAtom = atomWithFieldsMessageTypes<TFormValues, "help">(
      validationResultsFieldsAtom,
      "help"
    );
    const successFieldsAtom = atomWithFieldsMessageTypes<
      TFormValues,
      "success"
    >(validationResultsFieldsAtom, "success");

    const fieldErrorMessagesAtom = atomWithFieldsMessageList<
      TFormValues,
      "error"
    >(validationResultsFieldsAtom, "error");
    const fieldWarningMessagesAtom = atomWithFieldsMessageList<
      TFormValues,
      "warning"
    >(validationResultsFieldsAtom, "warning");
    const fieldInfoMessagesAtom = atomWithFieldsMessageList<
      TFormValues,
      "info"
    >(validationResultsFieldsAtom, "info");
    const fieldHelpMessagesAtom = atomWithFieldsMessageList<
      TFormValues,
      "help"
    >(validationResultsFieldsAtom, "help");
    const fieldsSuccessMessagesAtom = atomWithFieldsMessageList<
      TFormValues,
      "success"
    >(validationResultsFieldsAtom, "success");

    const invalidAtom = atom(get => {
      const fieldErrorMessages = get(fieldErrorMessagesAtom);
      return fieldErrorMessages.length > 0 || get(isFormInvalidAtom);
    });
    const validAtom = atom(get => !get(invalidAtom));

    const canSubmitAtom = atom(
      get =>
        get(validAtom) &&
        !get(validatingAtom) &&
        !get(submittingAtom) &&
        !get(disabledAtom)
    );

    return {
      options: optionsAtom,
      name: nameAtom,

      disabled: disabledAtom,
      formValidating: formValidatingAtom,
      validationResults: validationResultsAtom,
      submitting: submittingAtom,
      submitted: submittedAtom,
      submitAttempts: submitAttemptsAtom,
      focusedFields: focusedFieldsAtom,
      requiredFields: requiredFieldsAtom,
      disabledFields: disabledFieldsAtom,
      touchedFields: touchedFieldsAtom,
      blurredFields: blurredFieldsAtom,
      validatingFields: validatingFieldsAtom,
      validationResultsFields: validationResultsFieldsAtom,
      tabIndexes: tabIndexesAtom,
      refs: refsAtom,

      dirty: dirtyAtom,
      pristine: pristineAtom,

      blurred: blurredAtom,
      touched: touchedAtom,
      validating: validatingAtom,

      previousValues: previousValuesAtom,
      initialValues: initialValuesAtom,
      values: valuesAtom,

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
        optionsAtom,
        formErrorsAtom,
        formWarningsAtom,
        formInfoAtom,
        formHelpAtom,
        formSuccessesAtom
      ),

      canSubmit: canSubmitAtom
    };
  },
  {
    type: "form"
  }
);
