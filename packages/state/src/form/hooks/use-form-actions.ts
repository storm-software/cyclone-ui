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

import { isPromise } from "@stryke/type-checks/is-promise";
import type { MessageDetails } from "@stryke/types/messages";
import type { Getter, Setter } from "jotai";
import { RESET, useAtomCallback } from "jotai/utils";
import { use, useCallback } from "react";
import { FormApi } from "../molecules/form-molecule";
import { ValidationCause } from "../types";
import { FormFieldValidationsContext } from "./form-field-validations";

const validationKey = {
  initialize: "onInitialize",
  change: "onChange",
  blur: "onBlur",
  submit: "onSubmit",
  server: "onServer"
} as const satisfies Record<
  ValidationCause,
  `on${Capitalize<ValidationCause>}`
>;

export const useFormActions = <
  TFormValues extends Record<string, any> = Record<string, any>
>() => {
  const form = FormApi.useMolecule();
  const fieldValidations = use(FormFieldValidationsContext);

  const initializeField = useAtomCallback(
    useCallback(async (_get: Getter, _set: Setter, _name: string) => {
      // set(form.fields, prev => {
      //   return {
      //     ...prev,
      //     [fieldStoreAtoms.get.atom(fieldStore.api.atom.formName)]:
      //       fieldStoreAtoms
      //   };
      // });
    }, [])
  );

  const uninitializeField = useAtomCallback(
    useCallback(async (_get: Getter, _set: Setter, _name: string) => {
      // set(fieldApi.atom., prev =>
      //   Object.keys(prev).reduce((ret, key) => {
      //     if (key !== name) {
      //       ret[key] = prev[key];
      //     }
      //     return ret;
      //   }, {})
      // );
    }, [])
  );

  const validate = useAtomCallback(
    useCallback(
      async (
        get: Getter,
        set: Setter,
        nextValues: TFormValues,
        cause: ValidationCause
      ) => {
        const options = get(form.options);
        const validators = options.validate?.[validationKey[cause]];
        const initializeValidators =
          options.validate?.[validationKey.initialize];
        if (
          (validators && validators.length > 0) ||
          (initializeValidators && initializeValidators.length > 0)
        ) {
          const previousValues = get(form.previousValues);

          const results = [] as any[];
          if (validators && validators.length > 0) {
            for (const validator of validators) {
              results.push(
                validator(nextValues, previousValues, cause, get, set)
              );
            }
          }
          if (
            cause !== ValidationCause.INITIALIZE &&
            initializeValidators &&
            initializeValidators.length > 0
          ) {
            for (const validator of initializeValidators) {
              results.push(
                validator(nextValues, previousValues, cause, get, set)
              );
            }
          }

          const messages = [] as MessageDetails[];
          const promises = [] as Promise<MessageDetails[]>[];
          for (const result of results) {
            if (result) {
              if (isPromise(result)) {
                promises.push(result as Promise<MessageDetails[]>);
              } else {
                messages.push(...result);
              }
            }
          }

          if (promises.length > 0) {
            set(form.formValidating, true);
            for (const result of await Promise.all(promises)) {
              if (result && result.length > 0) {
                messages.push(...result);
              }
            }
            set(form.formValidating, false);
          }

          set(form.validationResults, prev => ({
            ...prev,
            [cause]: messages
          }));
        }
      },
      []
    )
  );

  const change = useAtomCallback(
    useCallback(async (get: Getter, set: Setter, nextValues: TFormValues) => {
      const options = get(form.options);
      const values = get(form.values);

      if (!options.isEqual(nextValues, values)) {
        set(form.values, nextValues);
      }
    }, [])
  );

  // Every mounted field's validators, whatever their trigger, so a field the
  // user never blurred is checked too. Synchronous results are stored before
  // this returns, so `canSubmit` can be read right after calling it.
  const validateFields = useCallback(async () => {
    await Promise.all(
      Array.from(fieldValidations ?? [], async validation => validation())
    );
  }, [fieldValidations]);

  // Read synchronously, such as from a `<form>`'s submit event.
  const isSubmittable = useAtomCallback(
    useCallback((get: Getter) => get(form.canSubmit), [])
  );

  const submit = useAtomCallback(
    useCallback(
      async (get: Getter, set: Setter) => {
        if (get(form.submitting) || get(form.disabled)) {
          return;
        }

        // Counted before validating: fields show their errors from the first
        // attempt on, even if they were never blurred.
        set(form.submitAttempts, prev => prev + 1);
        await Promise.all([
          validateFields(),
          validate(get(form.values), ValidationCause.SUBMIT)
        ]);
        if (!get(form.canSubmit)) {
          return;
        }

        set(form.submitting, true);
        try {
          await get(form.options).onSubmit?.({ get, set, atoms: form });
          set(form.submitted, true);
        } finally {
          set(form.submitting, false);
        }
      },
      [validateFields, validate]
    )
  );

  // Back to `initialValues`, as if nothing had been touched or submitted.
  // Field registrations (required, disabled, refs, tab order) and focus stay.
  const reset = useAtomCallback(
    useCallback(
      (_get: Getter, set: Setter) => {
        set(form.values, RESET);
        set(form.validationResults, RESET);
        set(form.validationResultsFields, RESET);
        set(form.touchedFields, RESET);
        set(form.blurredFields, RESET);
        set(form.submitted, RESET);
        set(form.submitAttempts, RESET);
      },
      [form]
    )
  );

  return {
    initializeField,
    uninitializeField,
    validate,
    validateFields,
    isSubmittable,
    change,
    submit,
    reset
  };
};
