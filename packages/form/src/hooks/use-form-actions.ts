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
import { Getter, Setter } from "jotai";
import { useAtomCallback } from "jotai/utils";
import { useCallback } from "react";
import { UseFieldStore } from "../stores/field-store";
import { formStore } from "../stores/form-store";
import { Validator } from "../types";

export const useFormActions = <
  TFormValues extends Record<string, any> = Record<string, any>,
  TValidator extends Validator<TFormValues> = Validator<TFormValues>
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

  const submit = useAtomCallback(
    useCallback(async (get: Getter, set: Setter) => {
      if (get(formStore.api.atom.canSubmit)) {
        if (!get(formStore.api.atom.isSubmitting)) {
          set(formStore.api.atom.isSubmitting, true);
        }

        set(formStore.api.atom.submitAttempts, prev => prev + 1);

        const options = get(formStore.api.atom.options);

        const promises = [] as Promise<void>[];
        const values = get(formStore.api.atom.values);

        // promises.push(validate(value, ValidationCause.SUBMIT));
        // await Promise.all(promises);

        if (get(formStore.api.atom.isValid)) {
          await options.onSubmit?.(
            get(formStore.api.atom.values) as TFormValues
          );
        }

        set(formStore.api.atom.isSubmitting, false);
      } else if (get(formStore.api.atom.isInvalid)) {
        if (get(formStore.api.atom.isFormInvalid)) {
          // set(fieldStore.api.atom.isTouched, true);
        } else if (get(formStore.api.atom.isFieldsInvalid)) {
          // const invalidFields = get(formStore.api.atom.invalidFields);
          // const name = Object.keys(invalidFields)[0];
          // const fieldStoreAtom = get(formStore.api.atom.fields);
        }
      }
    }, [])
  );

  return {
    initializeField,
    uninitializeField,
    submit
  };
};
