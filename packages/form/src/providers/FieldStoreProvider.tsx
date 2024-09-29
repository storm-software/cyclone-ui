import { ColorRole } from "@cyclone-ui/colors";
import {
  atomWithTanstack,
  createAtomStore,
  CreateAtomStoreOptions,
  StoreAtomsWithoutSelectors,
  UseAtomOptionsOrScope
} from "@cyclone-ui/state";
import { isSetObject } from "@storm-stack/types";
import {
  DeepKeys,
  DeepValue,
  FieldApi,
  FieldState,
  useField,
  Validator
} from "@tanstack/react-form";
import { Store } from "@tanstack/store";
import { ValibotValidator } from "@tanstack/valibot-form-adapter";
import { atom } from "jotai";
import React, {
  createContext,
  PropsWithChildren,
  RefObject,
  useContext,
  useMemo,
  useRef
} from "react";
import { atomWithField, atomWithFieldStatus } from "../atoms/atom-with-field";
import { UseFieldOptions } from "../types";
import { useFormApi, useFormStore } from "./FormStoreProvider";
import { useThemeName } from "@tamagui/core";

const ApiContext = createContext<RefObject<
  FieldApi<any, any, any, any>
> | null>(null);

export type FieldProviderOptions<
  TFormValues,
  TFieldName extends DeepKeys<TFormValues>,
  TFieldValidator extends
    | Validator<DeepValue<TFormValues, TFieldName>, unknown>
    | undefined = undefined,
  TFieldValue extends DeepValue<TFormValues, TFieldName> = DeepValue<
    TFormValues,
    TFieldName
  >
> = PropsWithChildren<
  UseFieldOptions<TFormValues, TFieldName, TFieldValidator, TFieldValue>
>;

export type FieldStoreState = {
  name: string;
  formName: string;
  field: FieldState<any>;
  theme: string;
  focused: boolean;
  required: boolean;
  disabled: boolean;
};

const fieldStoreSelectors = (
  atoms: StoreAtomsWithoutSelectors<FieldStoreState>
) => {
  return {
    status: atomWithFieldStatus(atoms.theme)
  };
};

export const fieldStore = createAtomStore<
  FieldStoreState,
  CreateAtomStoreOptions<FieldStoreState, typeof fieldStoreSelectors>
>({
  name: "field",
  initialState: {
    name: "field",
    formName: "form",
    theme: ColorRole.BASE,
    field: atomWithTanstack(
      new Store({
        value: null,
        meta: {
          isTouched: false,
          isBlurred: false,
          isPristine: true,
          isDirty: false,
          isValid: true,
          isInvalid: false,
          errors: [],
          errorMap: {},
          isValidating: false
        }
      } as FieldState<any>)
    ),
    focused: false,
    required: false,
    disabled: false
  },
  selectors: fieldStoreSelectors
});

export type FieldStoreApi = typeof fieldStore;

export const FieldProvider = <
  TFormValues,
  TFieldName extends DeepKeys<TFormValues>,
  TFieldValidator extends
    | Validator<DeepValue<TFormValues, TFieldName>, unknown>
    | undefined = undefined,
  TFieldValue extends DeepValue<TFormValues, TFieldName> = DeepValue<
    TFormValues,
    TFieldName
  >
>({
  children,
  ...options
}: FieldProviderOptions<
  TFormValues,
  TFieldName,
  TFieldValidator,
  TFieldValue
>) => {
  const form = useFormApi<TFormValues>();
  const api = useField<
    TFormValues,
    TFieldName,
    TFieldValidator,
    ValibotValidator,
    TFieldValue
  >({
    ...options,
    form
  });
  const apiRef = useRef(api);

  const fieldAtom = useMemo(() => {
    return atomWithField<TFormValues, TFieldName, TFieldValidator, TFieldValue>(
      api
    );
  }, [options]);

  const theme = useThemeName();

   return (
    <ApiContext.Provider value={apiRef}>
      <fieldStore.Provider
        scope={String(options.name)}
        initialValues={{
          name: String(options.name),
          formName: useFormStore().get.$name(),
          field: fieldAtom,
          theme: theme || ColorRole.BASE,
          focused: !!options.focused,
          required: !!options.required,
          disabled: !!options.disabled
        }}>
        {children}
      </fieldStore.Provider>
    </ApiContext.Provider>
  );
};

export const useFieldStore = (
  options?: UseAtomOptionsOrScope
): ReturnType<FieldStoreApi["useStore"]> => {
  return fieldStore.useStore(options);
};

export const useFieldApi = <
  TFormValues,
  TFieldName extends DeepKeys<TFormValues>,
  TFieldValidator extends
    | Validator<DeepValue<TFormValues, TFieldName>, unknown>
    | undefined = undefined,
  TFieldValue extends DeepValue<TFormValues, TFieldName> = DeepValue<
    TFormValues,
    TFieldName
  >
>(): FieldApi<
  TFormValues,
  TFieldName,
  TFieldValidator,
  ValibotValidator,
  TFieldValue
> => {
  const context = useContext(ApiContext);

  if (!isSetObject(context?.current)) {
    throw new Error("useFieldApi must be used within a FieldProvider");
  }

  return context.current;
};
