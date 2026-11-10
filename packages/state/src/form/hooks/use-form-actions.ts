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
import { useCallback } from "react";
import { FormApi } from "../molecules/form-molecule";
import { ValidationCause } from "../types";

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

  const submit = useAtomCallback(
    useCallback(async (get: Getter, set: Setter) => {
      if (get(form.canSubmit)) {
        if (!get(form.submitting)) {
          set(form.submitting, true);
        }

        set(form.submitAttempts, prev => prev + 1);

        const options = get(form.options);

        // promises.push(validate(value, ValidationCause.SUBMIT));
        // await Promise.all(promises);

        try {
          if (get(form.valid)) {
            await options.onSubmit?.({ get, set, atoms: form });
            set(form.submitted, true);
          }
        } finally {
          set(form.submitting, false);
        }
      } else if (get(form.invalid)) {
        if (get(form.invalid)) {
          // set(fieldStore.api.atom.touched, true);
        }

        // else if (get(form.invalid)) {
        // const invalidFields = get(form.invalidFields);
        // const name = Object.keys(invalidFields)[0];
        // const fieldStoreAtom = get(form.fields);
        // }
      }
    }, [])
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
    change,
    submit,
    reset
  };
};
