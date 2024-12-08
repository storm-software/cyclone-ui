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

import type { UseAtomOptionsOrScope } from "@cyclone-ui/state";
import { upperCaseFirst } from "@storm-stack/string-fns";
import { MessageDetails, isPromise } from "@storm-stack/types";
import { TamaguiTextElement } from "@tamagui/core";
import { Getter, Setter } from "jotai";
import { RESET, useAtomCallback } from "jotai/utils";
import { LegacyRef, useCallback } from "react";
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

        if (initialValue !== get(fieldApi.atom.initialValue)) {
          set(fieldApi.atom.initialValue, initialValue);
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
        if (!get(fieldApi.atom.disabled)) {
          if (!get(fieldApi.atom.touched) && touch) {
            set(fieldApi.atom.touched, touch);
          }

          const options = get(fieldApi.atom.options);
          const value = get(fieldApi.atom.value);

          let nextParsed = nextValue as TFieldValue;
          if (options.parse) {
            nextParsed = options.parse(nextValue) as TFieldValue;
          }

          if (!options.isEqual(nextParsed, value)) {
            set(fieldApi.atom.value, nextParsed);
          }
        }
      },
      []
    )
  );

  const focus = useAtomCallback(
    useCallback(async (get: Getter, set: Setter) => {
      if (!get(fieldApi.atom.disabled)) {
        if (!get(fieldApi.atom.touched)) {
          set(fieldApi.atom.touched, true);
        }

        set(fieldApi.atom.focused, true);
      }
    }, [])
  );

  const blur = useAtomCallback(
    useCallback(async (get: Getter, set: Setter) => {
      if (!get(fieldApi.atom.disabled)) {
        if (!get(fieldApi.atom.touched)) {
          set(fieldApi.atom.touched, true);
        }

        set(fieldApi.atom.focused, false);
        set(fieldApi.atom.blurred, true);
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
    useCallback(
      (get: Getter) => setFocused(!get(fieldApi.atom.focused)),
      [setFocused]
    )
  );

  const mount = useAtomCallback(
    useCallback(
      async (
        get: Getter,
        set: Setter,
        ref: LegacyRef<TamaguiTextElement>,
        tabIndex?: number
      ) => {
        set(fieldApi.atom.ref, ref);
        set(fieldApi.atom.tabIndex, tabIndex ?? 0);

        if (!get(fieldApi.atom.initialValue)) {
          const options = get(fieldApi.atom.options);

          set(fieldApi.atom.initialValue, options.defaultValue ?? null);
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
