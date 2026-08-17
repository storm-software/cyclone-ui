/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import { deepMerge } from "@stryke/helpers/deep-merge";
import { flattenObject } from "@stryke/helpers/flatten-object";
import { isEqual } from "@stryke/helpers/is-equal";
import { setField } from "@stryke/helpers/set-field";
import { isFunction } from "@stryke/type-checks/is-function";
import { isNumber } from "@stryke/type-checks/is-number";
import { isString } from "@stryke/type-checks/is-string";
import { atom } from "jotai";
import { atomWithDefault, atomWithReset, RESET } from "jotai/utils";
import type { Ref } from "react";
import { createMoleculeApi } from "../../base/utilities/create-molecule";
import type { SetStateActionWithReset } from "../../types";
import {
  atomWithFieldsMessageList,
  atomWithFieldsMessageTypes,
  atomWithMessages,
  atomWithMessageTypes,
  atomWithTheme
} from "../atoms/atom-with-messages";
import type {
  FormAtoms,
  FormOptions,
  FormOptionsState,
  FormValuesState,
  InferFormState,
  ValidationResults
} from "../types";

export const DEFAULT_FORM_OPTIONS: FormOptionsState = {
  theme: "base",
  debounceMs: 100,
  isEqual,
  disabled: false,
  initialValues: {},
  defaultFieldOptions: {}
} as const;

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
      (_get, _set, _update) => {}
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
