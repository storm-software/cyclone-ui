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
    () =>
      (options.defaultValue !== undefined
        ? options.defaultValue
        : getField(formOptions.defaultValues, options.name)) ?? null,
    [formOptions.defaultValues, options.defaultValue, options.name]
  );
  const fieldOptions = useMemo(
    () => deepMerge(formOptions.defaultFieldOptions, options),
    [formOptions.defaultFieldOptions, options]
  );
  // const items = useMemo(
  //   () =>
  //     (fieldOptions.items ?? []).reduce((ret, item, index) => {
  //       if (!ret.some(existing => existing.value === item.value)) {
  //         ret.push({
  //           index,
  //           disabled: Boolean(fieldOptions.disabled),
  //           selected: item.value === defaultValue,
  //           ...item
  //         });
  //       }

  //       return ret;
  //     }, [] as SelectOption[]),
  //   [fieldOptions.items, fieldOptions.disabled, defaultValue]
  // );
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
            },
            defaultValue
          } as FieldOptions<TFieldValue, TValidator>
        }}>
        {children}
      </fieldStore.Provider>
    </FieldStoreContext.Provider>
  );
};
