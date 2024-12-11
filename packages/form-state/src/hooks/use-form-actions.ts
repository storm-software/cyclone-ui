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

import { upperCaseFirst } from "@storm-stack/string-fns/upper-case-first";
import { isPromise } from "@storm-stack/types/type-checks/is-promise";
import type { MessageDetails } from "@storm-stack/types/utility-types/messages";
import type { Getter, Setter } from "jotai";
import { useAtomCallback } from "jotai/utils";
import { useCallback } from "react";
import { FormApi } from "../molecules/form-molecule";
import { ValidationCause } from "../types";

export const useFormActions = <
  TFormValues extends Record<string, any> = Record<string, any>
>() => {
  const form = FormApi.useMolecule();

  const initializeField = useAtomCallback(
    useCallback(async (get: Getter, set: Setter, name: string) => {
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
    useCallback(async (get: Getter, set: Setter, name: string) => {
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
        if (
          (options.validate?.[`on${upperCaseFirst(cause)}`] &&
            options.validate[`on${upperCaseFirst(cause)}`].length > 0) ||
          (options.validate?.[
            `on${upperCaseFirst(ValidationCause.INITIALIZE)}`
          ] &&
            options.validate[`on${upperCaseFirst(ValidationCause.INITIALIZE)}`]
              .length > 0)
        ) {
          const previousValues = get(form.previousValues);

          const results = [] as any[];
          if (
            options.validate?.[`on${upperCaseFirst(cause)}`] &&
            options.validate[`on${upperCaseFirst(cause)}`].length > 0
          ) {
            results.push(
              ...options.validate[`on${upperCaseFirst(cause)}`].map(validator =>
                validator(nextValues, previousValues, cause, get, set)
              )
            );
          }
          if (
            cause !== ValidationCause.INITIALIZE &&
            options.validate?.[
              `on${upperCaseFirst(ValidationCause.INITIALIZE)}`
            ] &&
            options.validate[`on${upperCaseFirst(ValidationCause.INITIALIZE)}`]
              .length > 0
          ) {
            results.push(
              ...options.validate[
                `on${upperCaseFirst(ValidationCause.INITIALIZE)}`
              ].map(validator =>
                validator(nextValues, previousValues, cause, get, set)
              )
            );
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

        const promises = [] as Promise<void>[];
        const values = get(form.values);

        // promises.push(validate(value, ValidationCause.SUBMIT));
        // await Promise.all(promises);

        if (get(form.valid)) {
          // await options.onSubmit?.(
          //   get(form.values) as TFormValues
          // );
        }

        set(form.submitting, false);
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

  const reset = useCallback(() => {}, []);

  return {
    initializeField,
    uninitializeField,
    validate,
    change,
    submit,
    reset
  };
};
