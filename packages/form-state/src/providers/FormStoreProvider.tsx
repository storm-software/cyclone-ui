import { useIsomorphicLayoutEffect } from "@storm-stack/hooks";
import { useThemeName } from "@tamagui/core";
import { PropsWithChildren } from "react";
import { formStore } from "../stores/form-store";
import { FormOptions, Validator } from "../types";

export type FormProviderOptions<
  TFormValues extends Record<string, any> = Record<string, any>,
  TValidator extends Validator<TFormValues> = Validator<TFormValues>
> = PropsWithChildren<FormOptions<TFormValues, TValidator>>;

export const FormProvider = <
  TFormValues extends Record<string, any> = Record<string, any>,
  TValidator extends Validator<TFormValues> = Validator<TFormValues>
>({
  children,
  ...options
}: FormProviderOptions<TFormValues, TValidator>) => {
  const theme = useThemeName();

  useIsomorphicLayoutEffect(() => {
    options.onInitialize?.();
  }, [options.onInitialize]);

  return (
    <formStore.Provider
      scope={String(options.name)}
      initialValues={{
        name: String(options.name),
        disabled: !!options.disabled,
        options: {
          debounceMs: 500,
          theme,
          ...options
        } as FormOptions
      }}>
      {children}
    </formStore.Provider>
  );
};
