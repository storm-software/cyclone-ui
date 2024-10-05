import React, { PropsWithChildren } from "react";
import { formStore } from "../stores/form-store";

export type FormProviderOptions<TFormValues extends Record<string, any>> =
  PropsWithChildren<any>;

export const FormProvider = <TFormValues extends Record<string, any>>({
  children,
  ...options
}: FormProviderOptions<TFormValues>) => {
  return (
    <formStore.Provider
      scope={String(options.name)}
      initialValues={{ name: String(options.name), options }}>
      {children}
    </formStore.Provider>
  );
};
