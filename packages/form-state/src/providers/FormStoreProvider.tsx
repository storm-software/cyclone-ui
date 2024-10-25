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
        disabled: Boolean(options.disabled),
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
