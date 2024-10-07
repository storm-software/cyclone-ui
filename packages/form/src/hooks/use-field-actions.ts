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
import { upperCaseFirst } from "@storm-stack/string-fns";
import { MessageDetails, isPromise } from "@storm-stack/types";
import { Getter, Setter } from "jotai";
import { useAtomCallback } from "jotai/utils";
import { useCallback } from "react";
import { fieldStore } from "../stores/field-store";
import { ValidationCause, Validator } from "../types";

export const useFieldActions = <
  TFieldValue = any,
  TValidator extends Validator<TFieldValue> = Validator<TFieldValue>
>(
  opts?: UseAtomOptionsOrScope
) => {
  const validate = useAtomCallback(
    useCallback(
      async (
        get: Getter,
        set: Setter,
        nextValue: TFieldValue,
        cause: ValidationCause
      ) => {
        const options = get(fieldStore.api.atom.options);
        if (
          options.validate?.[`on${upperCaseFirst(cause)}`] &&
          options.validate[`on${upperCaseFirst(cause)}`].length > 0
        ) {
          set(fieldStore.api.atom.validating, true);
          const previousValue = get(fieldStore.api.atom.previousValue);

          const results = options.validate[`on${upperCaseFirst(cause)}`].map(
            validator => validator(nextValue, previousValue)
          );

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

          for (const result of await Promise.all(promises)) {
            if (result && result.length > 0) {
              messages.push(...result);
            }
          }

          set(fieldStore.api.atom.validationResults, prev => ({
            ...prev,
            [cause]: messages
          }));
          set(fieldStore.api.atom.validating, false);
        }
      },
      []
    )
  );

  const handleChange = useAtomCallback(
    useCallback(
      async (get: Getter, set: Setter, nextValue: TFieldValue) => {
        const options = get(fieldStore.api.atom.options);
        const disabled = get(fieldStore.api.atom.disabled);
        const value = get(fieldStore.api.atom.value);

        if (!disabled && nextValue !== value) {
          set(fieldStore.api.atom.value, nextValue);
          set(fieldStore.api.atom.previousValue, value);

          const promises = [] as Promise<void>[];
          if (options.onChange) {
            promises.push(Promise.resolve(options.onChange(nextValue)));
          }

          promises.push(validate(nextValue, ValidationCause.CHANGE));

          const blurred = get(fieldStore.api.atom.blurred);
          if (blurred) {
            promises.push(validate(nextValue, ValidationCause.BLUR));
          }

          await Promise.all(promises);
        }
      },
      [validate]
    )
  );

  const handleFocus = useAtomCallback(
    useCallback(async (get: Getter, set: Setter) => {
      const disabled = get(fieldStore.api.atom.disabled);
      const focused = get(fieldStore.api.atom.focused);

      if (!disabled && !focused) {
        set(fieldStore.api.atom.focused, true);

        const options = get(fieldStore.api.atom.options);
        if (options.onFocus) {
          await Promise.resolve(options.onFocus());
        }
      }
    }, [])
  );

  const handleBlur = useAtomCallback(
    useCallback(
      async (get: Getter, set: Setter) => {
        const focused = get(fieldStore.api.atom.focused);
        const disabled = get(fieldStore.api.atom.disabled);

        if (!disabled && focused) {
          set(fieldStore.api.atom.focused, false);
          set(fieldStore.api.atom.blurred, true);

          const options = get(fieldStore.api.atom.options);

          const promises = [] as Promise<void>[];
          if (options.onBlur) {
            promises.push(Promise.resolve(options.onBlur()));
          }

          const value = get(fieldStore.api.atom.value);

          promises.push(validate(value as TFieldValue, ValidationCause.BLUR));
          await Promise.all(promises);
        }
      },
      [validate]
    )
  );

  return {
    handleChange,
    handleFocus,
    handleBlur,
    validate
  };
};
