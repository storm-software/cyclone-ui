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

import { UseAtomOptionsOrScope } from "@cyclone-ui/state";
import { upperCaseFirst } from "@storm-stack/string-fns/upper-case-first";
import { isPromise } from "@storm-stack/types/type-checks/is-promise";
import { MessageDetails } from "@storm-stack/types/utility-types/messages";
import { Getter, Setter } from "jotai";
import { useAtomCallback } from "jotai/utils";
import { useCallback } from "react";
import { UseFieldStore } from "../stores/field-store";
import { formStore } from "../stores/form-store";
import { ValidationCause } from "../types";

export const useFormActions = <
  TFormValues extends Record<string, any> = Record<string, any>
>(
  opts?: UseAtomOptionsOrScope
) => {
  const initializeField = useAtomCallback(
    useCallback(
      async (
        get: Getter,
        set: Setter,
        name: string,
        fieldStoreAtoms: ReturnType<UseFieldStore>
      ) => {
        // set(formStore.api.atom.fields, prev => {
        //   return {
        //     ...prev,
        //     [fieldStoreAtoms.get.atom(fieldStore.api.atom.formName)]:
        //       fieldStoreAtoms
        //   };
        // });
      },
      []
    )
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
        const options = get(formStore.api.atom.options);
        if (
          (options.validate?.[`on${upperCaseFirst(cause)}`] &&
            options.validate[`on${upperCaseFirst(cause)}`].length > 0) ||
          (options.validate?.[
            `on${upperCaseFirst(ValidationCause.INITIALIZE)}`
          ] &&
            options.validate[`on${upperCaseFirst(ValidationCause.INITIALIZE)}`]
              .length > 0)
        ) {
          const previousValues = get(formStore.api.atom.previousValues);

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
            set(formStore.api.atom.validating, true);
            for (const result of await Promise.all(promises)) {
              if (result && result.length > 0) {
                messages.push(...result);
              }
            }
            set(formStore.api.atom.validating, false);
          }

          set(formStore.api.atom.validationResults, prev => ({
            ...prev,
            [cause]: messages
          }));
        }
      },
      []
    )
  );

  const submit = useAtomCallback(
    useCallback(async (get: Getter, set: Setter) => {
      if (get(formStore.api.atom.canSubmit)) {
        if (!get(formStore.api.atom.submitting)) {
          set(formStore.api.atom.submitting, true);
        }

        set(formStore.api.atom.submitAttempts, prev => prev + 1);

        const options = get(formStore.api.atom.options);

        const promises = [] as Promise<void>[];
        const values = get(formStore.api.atom.values);

        // promises.push(validate(value, ValidationCause.SUBMIT));
        // await Promise.all(promises);

        if (get(formStore.api.atom.valid)) {
          await options.onSubmit?.(
            get(formStore.api.atom.values) as TFormValues
          );
        }

        set(formStore.api.atom.submitting, false);
      } else if (get(formStore.api.atom.invalid)) {
        if (get(formStore.api.atom.invalid)) {
          // set(fieldStore.api.atom.touched, true);
        } else if (get(formStore.api.atom.invalid)) {
          // const invalidFields = get(formStore.api.atom.invalidFields);
          // const name = Object.keys(invalidFields)[0];
          // const fieldStoreAtom = get(formStore.api.atom.fields);
        }
      }
    }, [])
  );

  const reset = useCallback(() => {}, []);

  return {
    initializeField,
    uninitializeField,
    validate,
    submit,
    reset
  };
};
