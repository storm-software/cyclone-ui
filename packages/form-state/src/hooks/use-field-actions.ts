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

import { upperCaseFirst } from "@storm-stack/string-fns";
import { MessageDetails, isPromise } from "@storm-stack/types";
import { Getter, Setter } from "jotai";
import { RESET, useAtomCallback } from "jotai/utils";
import { Ref, useCallback } from "react";
import { FieldApi } from "../molecules/field-molecule";
import { ValidationCause } from "../types";

export const useFieldActions = <TFieldValue = any>() => {
  const field = FieldApi.useMolecule();

  const validate = useAtomCallback(
    useCallback(
      async (
        get: Getter,
        set: Setter,
        nextValue: TFieldValue,
        cause: ValidationCause
      ) => {
        const options = get(field.options);
        if (
          (options.validate?.[`on${upperCaseFirst(cause)}`] &&
            options.validate[`on${upperCaseFirst(cause)}`].length > 0) ||
          (options.validate?.[
            `on${upperCaseFirst(ValidationCause.INITIALIZE)}`
          ] &&
            options.validate[`on${upperCaseFirst(ValidationCause.INITIALIZE)}`]
              .length > 0)
        ) {
          const previousValue = get(field.previousValue);

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
            set(field.validating, true);
            for (const result of await Promise.all(promises)) {
              if (result && result.length > 0) {
                messages.push(...result);
              }
            }
            set(field.validating, false);
          }

          set(field.validationResults, prev => ({
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
      // set(field.disabled, RESET);
      // set(field.touched, RESET);
      // set(field.blurred, RESET);
      set(field.value, get(field.initialValue));
      set(field.options, RESET);
      // set(field.validating, RESET);
      // set(field.validationResults, RESET);
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
        if (skipIfDirty && get(field.dirty)) {
          return;
        }

        if (initialValue !== get(field.initialValue)) {
          set(field.initialValue, initialValue);
        }
      },
      []
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
        if (!get(field.disabled)) {
          if (!get(field.touched) && touch) {
            set(field.touched, touch);
          }

          const options = get(field.options);
          const value = get(field.value);

          let nextParsed = nextValue as TFieldValue;
          if (options.parse) {
            nextParsed = options.parse(nextValue) as TFieldValue;
          }

          if (!options.isEqual(nextParsed, value)) {
            set(field.value, nextParsed);
          }
        }
      },
      []
    )
  );

  const focus = useAtomCallback(
    useCallback(async (get: Getter, set: Setter) => {
      if (!get(field.disabled)) {
        if (!get(field.touched)) {
          set(field.touched, true);
        }

        set(field.focused, true);
      }
    }, [])
  );

  const blur = useAtomCallback(
    useCallback(async (get: Getter, set: Setter) => {
      if (!get(field.disabled)) {
        if (!get(field.touched)) {
          set(field.touched, true);
        }

        set(field.focused, false);
        set(field.blurred, true);
      }
    }, [])
  );

  const setFocused = useCallback(
    (focused: boolean) => {
      if (focused) {
        return focus();
      }
      return blur();
    },
    [focus, blur]
  );

  const toggleFocused = useAtomCallback(
    useCallback((get: Getter) => setFocused(!get(field.focused)), [setFocused])
  );

  const mount = useAtomCallback(
    useCallback(
      async (
        get: Getter,
        set: Setter,
        ref: Ref<HTMLInputElement>,
        tabIndex?: number
      ) => {
        set(field.ref, ref);
        set(field.tabIndex, tabIndex ?? 0);

        if (!get(field.initialValue)) {
          const options = get(field.options);

          set(field.initialValue, options.defaultValue ?? null);
        }
      },
      []
    )
  );

  return {
    mount,
    initialize,
    change,
    focus,
    blur,
    setFocused,
    toggleFocused,
    validate,
    reset
  };
};
