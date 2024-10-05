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
import { useCallback } from "react";
import { ValidationCause, Validator } from "../types";
import { useFieldStore } from "./use-field-store";

export const useFieldActions = <
  TFieldValue = any,
  TValidator extends Validator<TFieldValue> = Validator<TFieldValue>
>(
  opts?: UseAtomOptionsOrScope
) => {
  const store = useFieldStore(opts);
  const options = store.get.options();
  const disabled = store.get.disabled();

  const setValidating = store.set.validating();
  const setValidationResults = store.set.validationResults();
  const [value, setValue] = store.use.value();
  const [previousValue, setPreviousValue] = store.use.previousValue();
  const [blurred, setBlurred] = store.use.blurred();

  const validate = useCallback(
    async (nextValue: TFieldValue, cause: ValidationCause) => {
      if (
        options.validate?.[`on${upperCaseFirst(cause)}`] &&
        options.validate[`on${upperCaseFirst(cause)}`].length > 0
      ) {
        setValidating(true);
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

        setValidationResults(prev => ({
          ...prev,
          [cause]: messages
        }));
        setValidating(false);
      }
    },
    [previousValue, options.validate, setValidating, setValidationResults]
  );

  const handleChange = useCallback(
    async (nextValue: TFieldValue) => {
      if (!disabled && nextValue !== value) {
        setValue(nextValue);
        setPreviousValue(value);

        const promises = [] as Promise<void>[];
        if (options.onChange) {
          promises.push(Promise.resolve(options.onChange(nextValue)));
        }

        promises.push(validate(nextValue, ValidationCause.CHANGE));
        if (blurred) {
          promises.push(validate(nextValue, ValidationCause.BLUR));
        }

        await Promise.all(promises);
      }
    },
    [setValue, setPreviousValue, validate, options.onChange, disabled, value]
  );

  const [focused, setFocused] = store.use.focused();
  const handleFocus = useCallback(async () => {
    if (!disabled && !focused) {
      setFocused(true);

      if (options.onFocus) {
        await Promise.resolve(options.onFocus());
      }
    }
  }, [focused, setFocused, options.onFocus, disabled]);

  const handleBlur = useCallback(async () => {
    if (!disabled && focused) {
      setFocused(false);
      setBlurred(true);

      const promises = [] as Promise<void>[];
      if (options.onBlur) {
        promises.push(Promise.resolve(options.onBlur()));
      }

      promises.push(validate(value as TFieldValue, ValidationCause.BLUR));
      await Promise.all(promises);
    }
  }, [
    setBlurred,
    value,
    focused,
    setFocused,
    validate,
    options.onBlur,
    disabled
  ]);

  return {
    handleChange,
    handleFocus,
    handleBlur,
    validate
  };
};
