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
import { RESET, useAtomCallback } from "jotai/utils";
import { useCallback } from "react";
import { formStore } from "../stores/form-store";
import { ValidationCause, Validator } from "../types";
import { useFieldApi } from "./use-field-store";

export const useFieldActions = <
  TFieldValue = any,
  TValidator extends Validator<TFieldValue> = Validator<TFieldValue>
>(
  opts?: UseAtomOptionsOrScope
) => {
  const fieldApi = useFieldApi();

  const validate = useAtomCallback(
    useCallback(
      async (
        get: Getter,
        set: Setter,
        nextValue: TFieldValue,
        cause: ValidationCause
      ) => {
        const options = get(fieldApi.atom.options);
        if (
          (options.validate?.[`on${upperCaseFirst(cause)}`] &&
            options.validate[`on${upperCaseFirst(cause)}`].length > 0) ||
          (options.validate?.[
            `on${upperCaseFirst(ValidationCause.INITIALIZE)}`
          ] &&
            options.validate[`on${upperCaseFirst(ValidationCause.INITIALIZE)}`]
              .length > 0)
        ) {
          const previousValue = get(fieldApi.atom.previousValue);

          const results = [] as any[];
          if (
            options.validate?.[`on${upperCaseFirst(cause)}`] &&
            options.validate[`on${upperCaseFirst(cause)}`].length > 0
          ) {
            results.push(
              ...options.validate[`on${upperCaseFirst(cause)}`].map(validator =>
                validator(nextValue, previousValue, cause, get, set)
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
                validator(nextValue, previousValue, cause, get, set)
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
            set(fieldApi.atom.validating, true);
            for (const result of await Promise.all(promises)) {
              if (result && result.length > 0) {
                messages.push(...result);
              }
            }
            set(fieldApi.atom.validating, false);
          }

          set(fieldApi.atom.validationResults, prev => ({
            ...prev,
            [cause]: messages
          }));
        }
      },
      []
    )
  );

  const reset = useAtomCallback(
    useCallback(async (get: Getter, set: Setter) => {
      set(fieldApi.atom.disabled, RESET);
      set(fieldApi.atom.touched, RESET);
      set(fieldApi.atom.blurred, RESET);
      set(fieldApi.atom.previousValue, RESET);
      set(fieldApi.atom.value, get(fieldApi.atom.initialValue));
      set(fieldApi.atom.options, RESET);
      set(fieldApi.atom.validating, RESET);
      set(fieldApi.atom.validationResults, RESET);
    }, [])
  );

  const initialize = useAtomCallback(
    useCallback(
      async (
        get: Getter,
        set: Setter,
        initialValue: TFieldValue,
        skipIfDirty = true
      ) => {
        if (skipIfDirty && get(fieldApi.atom.dirty)) {
          return;
        }

        set(fieldApi.atom.previousValue, RESET);
        set(fieldApi.atom.options, prev => ({
          ...prev,
          defaultValue: initialValue
        }));

        if (initialValue !== get(fieldApi.atom.initialValue)) {
          set(fieldApi.atom.initialValue, initialValue);
          set(fieldApi.atom.value, initialValue);

          set(fieldApi.atom.validating, RESET);
          set(fieldApi.atom.validationResults, RESET);

          const options = get(fieldApi.atom.options);

          const promises = [] as Promise<void>[];
          if (options.onInitialize) {
            promises.push(Promise.resolve(options.onInitialize()));
          }

          promises.push(validate(initialValue, ValidationCause.INITIALIZE));
          await Promise.all(promises);
        }
      },
      [validate]
    )
  );

  const change = useAtomCallback(
    useCallback(
      async (
        get: Getter,
        set: Setter,
        nextValue: TFieldValue,
        touch = false
      ) => {
        if (!get(fieldApi.atom.disabled)) {
          if (!get(fieldApi.atom.touched) && touch) {
            set(fieldApi.atom.touched, touch);
          }

          const value = get(fieldApi.atom.value);
          if (nextValue !== value) {
            const options = get(fieldApi.atom.options);

            set(fieldApi.atom.value, nextValue);
            set(fieldApi.atom.previousValue, value);

            const promises = [] as Promise<void>[];
            if (options.onChange) {
              promises.push(Promise.resolve(options.onChange(nextValue)));
            }

            promises.push(validate(nextValue, ValidationCause.CHANGE));

            const blurred = get(fieldApi.atom.blurred);
            if (blurred) {
              promises.push(validate(nextValue, ValidationCause.BLUR));
            }

            const submitAttempts = get(formStore.api.atom.submitAttempts);
            if (submitAttempts > 0) {
              promises.push(validate(nextValue, ValidationCause.SUBMIT));
            }

            await Promise.all(promises);
          }
        }
      },
      [validate]
    )
  );

  const focus = useAtomCallback(
    useCallback(async (get: Getter, set: Setter) => {
      if (!get(fieldApi.atom.disabled)) {
        if (!get(fieldApi.atom.touched)) {
          set(fieldApi.atom.touched, true);
        }

        set(fieldApi.atom.focused, true);

        const options = get(fieldApi.atom.options);
        if (options.onFocus) {
          await Promise.resolve(options.onFocus());
        }
      }
    }, [])
  );

  const blur = useAtomCallback(
    useCallback(
      async (get: Getter, set: Setter) => {
        if (!get(fieldApi.atom.disabled)) {
          if (!get(fieldApi.atom.touched)) {
            set(fieldApi.atom.touched, true);
          }

          set(fieldApi.atom.focused, false);
          set(fieldApi.atom.blurred, true);

          const options = get(fieldApi.atom.options);

          const promises = [] as Promise<void>[];
          if (options.onBlur) {
            promises.push(Promise.resolve(options.onBlur()));
          }

          const value = get(fieldApi.atom.value);

          promises.push(validate(value as TFieldValue, ValidationCause.BLUR));

          const submitAttempts = get(formStore.api.atom.submitAttempts);
          if (submitAttempts > 0) {
            promises.push(
              validate(value as TFieldValue, ValidationCause.SUBMIT)
            );
          }

          await Promise.all(promises);
        }
      },
      [validate]
    )
  );

  return {
    initialize,
    change,
    focus,
    blur,
    validate,
    reset
  };
};
