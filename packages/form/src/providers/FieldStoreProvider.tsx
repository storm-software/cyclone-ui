import { useIsomorphicLayoutEffect } from "@storm-stack/hooks";
import { deepMerge } from "@storm-stack/utilities/helper-fns/deep-merge";
import { getField } from "@storm-stack/utilities/helper-fns/get-field";
import { useThemeName } from "@tamagui/core";
import {
  createContext,
  PropsWithChildren,
  RefObject,
  useMemo,
  useRef
} from "react";
import { useFormStore } from "../hooks/use-form-store";
import { createFieldStore, FieldStore } from "../stores/field-store";
import { FieldOptions, InferFieldState, Validator } from "../types";
import { requiredValidator } from "../utilities/validators";

export type FieldProviderOptions<
  TFieldValue = any,
  TValidator extends Validator<TFieldValue> = Validator<TFieldValue>
> = PropsWithChildren<FieldOptions<TFieldValue, TValidator>>;

export const FieldStoreContext = createContext<RefObject<FieldStore> | null>(
  null
);

export const FieldProvider = <
  TFieldValue = any,
  TValidator extends Validator<TFieldValue> = Validator<TFieldValue>
>({
  children,
  ...options
}: FieldProviderOptions<TFieldValue, TValidator>) => {
  const theme = useThemeName();

  useIsomorphicLayoutEffect(() => {
    options.onInitialize?.();
  }, [options.onInitialize]);

  const formStore = useFormStore();
  const formOptions = formStore.get.options();
  const formName = formStore.get.name();

  const defaultValue = useMemo(
    () => getField(formOptions.defaultValues, options.name),
    [formOptions.defaultFieldOptions, options.name]
  );
  const fieldOptions = useMemo(
    () => deepMerge(formOptions.defaultFieldOptions, options),
    [formOptions.defaultFieldOptions, options]
  );
  const fieldStore = useMemo(
    () => createFieldStore<TFieldValue>(fieldOptions.name),
    [fieldOptions.name]
  );

  return (
    <FieldStoreContext.Provider value={useRef(fieldStore as FieldStore)}>
      <fieldStore.Provider
        scope={`${formName}:${String(fieldOptions.name)}`}
        initialValues={{
          required: fieldOptions.required as InferFieldState<
            TFieldValue,
            boolean
          >,
          disabled: fieldOptions.disabled as InferFieldState<
            TFieldValue,
            boolean
          >,
          items: fieldOptions.items ?? [],
          value: defaultValue,
          initialValue: defaultValue,
          options: {
            theme,
            ...fieldOptions,
            validate: {
              ...fieldOptions.validate,
              onBlur: [
                ...(fieldOptions.validate?.onBlur ?? ([] as TValidator[])),
                ...(fieldOptions.required ? [requiredValidator] : [])
              ]
            }
          } as FieldOptions<TFieldValue, TValidator>
        }}>
        {children}
      </fieldStore.Provider>
    </FieldStoreContext.Provider>
  );
};
