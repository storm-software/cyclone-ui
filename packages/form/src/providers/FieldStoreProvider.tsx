import { useIsomorphicLayoutEffect } from "@cyclone-ui/state";
import { useThemeName } from "@tamagui/core";
import React, { PropsWithChildren } from "react";
import { useFormStore } from "../hooks/use-form-store";
import { fieldStore } from "../stores/field-store";
import { FieldOptions, Validator } from "../types";
import { requiredValidator } from "../utilities/validators";

export type FieldProviderOptions<
  TFieldValue = any,
  TValidator extends Validator<TFieldValue> = Validator<TFieldValue>
> = PropsWithChildren<FieldOptions<TFieldValue, TValidator>>;

export const FieldProvider = <
  TFieldValue = any,
  TValidator extends Validator<TFieldValue> = Validator<TFieldValue>
>({
  children,
  ...options
}: FieldProviderOptions<TFieldValue, TValidator>) => {
  const theme = useThemeName();

  useIsomorphicLayoutEffect(() => {
    options.onMount?.();
  }, [options.onMount]);

  return (

    <fieldStore.Provider
      scope={String(options.name)}
      initialValues={{
        name: String(options.name),
        formName: useFormStore().get.$name(),
        required: !!options.required,
        disabled: !!options.disabled,
        items: options.items ?? [],
        value: options.initialValue,
        initialValue: options.initialValue,
        options: {
          debounceMs: 500,
          theme,
          ...options,
          validate: {
            ...options.validate,
            onBlur: [
              ...(options.validate?.onBlur ?? ([] as TValidator[])),
              ...(options.required ? [requiredValidator] : [])
            ]
          }
        } as FieldOptions<TFieldValue, TValidator>
      }}>
      {children}
    </fieldStore.Provider>
  );
};
