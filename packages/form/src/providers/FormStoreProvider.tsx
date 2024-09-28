import {
  AtomStoreApi,
  atomWithTanstack,
  createAtomStore,
  UseAtomOptionsOrScope
} from "@cyclone-ui/state";
import { isSetObject } from "@storm-stack/types/index";
import { FormApi, FormOptions, FormState, useForm } from "@tanstack/react-form";
import { Store } from "@tanstack/store";
import { ValibotValidator } from "@tanstack/valibot-form-adapter";
import React, {
  createContext,
  PropsWithChildren,
  RefObject,
  useContext,
  useMemo,
  useRef
} from "react";

const ApiContext = createContext<RefObject<
  FormApi<any, ValibotValidator>
> | null>(null);

export type FormProviderOptions<TFormValues extends Record<string, any>> =
  PropsWithChildren<
    FormOptions<TFormValues, ValibotValidator> & { name: string }
  >;

export const formStore = createAtomStore<{
  name: string;
  form: FormState<any>;
  options: FormOptions<any, ValibotValidator>;
}>({
  name: "form",
  initialState: {
    name: "form",
    form: atomWithTanstack(
      new Store({
        values: {},
        isFormValidating: false,
        isFormValid: false,
        errors: [],
        errorMap: {},
        validationMetaMap: {
          onChange: undefined,
          onBlur: undefined,
          onSubmit: undefined,
          onMount: undefined,
          onServer: undefined
        },
        fieldMeta: {},
        isFieldsValidating: false,
        isFieldsValid: false,
        isSubmitting: false,
        isTouched: false,
        isBlurred: false,
        isDirty: false,
        isPristine: false,
        isSubmitted: false,
        isValidating: false,
        isValid: false,
        canSubmit: false,
        submissionAttempts: 0
      } as FormState<any>)
    ),
    options: {} as FormOptions<any, ValibotValidator>
  }
});

export const FormProvider = <TFormValues extends Record<string, any>>({
  children,
  ...options
}: FormProviderOptions<TFormValues>) => {
  const api = useForm<TFormValues, ValibotValidator>(options);
  const apiRef = useRef(api);

  const formAtom = useMemo(() => {
    return atomWithTanstack(api.store);
  }, [options]);

  return (
    <ApiContext.Provider value={apiRef}>
      <formStore.Provider
        scope={String(options.name)}
        initialValues={{ name: String(options.name), form: formAtom, options }}>
        {children}
      </formStore.Provider>
    </ApiContext.Provider>
  );
};

export const useFormStore = <TFormValues extends Record<string, any>>(
  options?: UseAtomOptionsOrScope
): ReturnType<
  AtomStoreApi<{
    name: string;
    form: FormState<TFormValues>;
    options: FormOptions<TFormValues, ValibotValidator>;
  }>["useStore"]
> => {
  return formStore.useStore(options);
};

export const useFormApi = <TFieldValue extends any>(): FormApi<
  TFieldValue,
  ValibotValidator
> => {
  const context = useContext(ApiContext);

  if (!isSetObject(context?.current)) {
    throw new Error("useFormApi must be used within a FormProvider");
  }

  return context.current;
};
