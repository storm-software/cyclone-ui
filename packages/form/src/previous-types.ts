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

import { State, type StoreApi } from "@cyclone-ui/store";
import type {
 DeepKeys, DeepValue, NoInfer, Paths 
} from "@storm-stack/types";
import type { FunctionComponent } from "react";

export type ValidationMessage = undefined | false | null | string;

// If/when TypeScript supports higher-kinded types, this should not be `unknown` anymore
export type Validator<Type, Fn = unknown> = () => {
  validate(options: { value: Type }, fn: Fn): ValidationMessage;
  validateAsync(options: { value: Type }, fn: Fn): Promise<ValidationMessage>;
};

// "server" is only intended for SSR/SSG validation and should not execute anything
export type ValidationCause = "change" | "blur" | "submit" | "mount" | "server";

export type ValidationMessageMapKeys = `on${Capitalize<ValidationCause>}`;

export type ValidationMessageMap = {
  [K in ValidationMessageMapKeys]?: ValidationMessage;
};

export interface FieldApiOptions<
  TParentData extends object,
  TName extends DeepKeys<TParentData>,
  TFieldValidator extends
    | Validator<DeepValue<TParentData, TName>, unknown>
    | undefined = undefined,
  TFormValidator extends
    | Validator<TParentData, unknown>
    | undefined = undefined,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>
> extends FieldOptions<
    TParentData,
    TName,
    TFieldValidator,
    TFormValidator,
    TData
  > {
  form: IFormApi<TParentData, TFormValidator>;
}

/**
 * The field options.
 */
export type UseFieldOptions<
  TParentData extends object,
  TName extends DeepKeys<TParentData>,
  TFieldValidator extends
    | Validator<DeepValue<TParentData, TName>, unknown>
    | undefined = undefined,
  TFormValidator extends
    | Validator<TParentData, unknown>
    | undefined = undefined,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>
> = FieldApiOptions<
  TParentData,
  TName,
  TFieldValidator,
  TFormValidator,
  TData
> & {
  mode?: "value" | "array";
};

export interface IFieldApi<
  TParentData extends object,
  TName extends DeepKeys<TParentData>,
  TFieldValidator extends
    | Validator<DeepValue<TParentData, TName>, unknown>
    | undefined = undefined,
  TFormValidator extends
    | Validator<TParentData, unknown>
    | undefined = undefined,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>
> {
  /**
   * A pre-bound and type-safe sub-field component using this field as a root.
   */
  Field: FieldComponent<TParentData, TFormValidator>;
}

/**
 * A type representing a hook for using a field in a form with the given form data type.
 *
 * A function that takes an optional object with a `name` property and field options, and returns a `FieldApi` instance for the specified field.
 */
export type UseField<
  TParentData extends object,
  TFormValidator extends Validator<TParentData, unknown> | undefined = undefined
> = <
  TName extends DeepKeys<TParentData>,
  TFieldValidator extends
    | Validator<DeepValue<TParentData, TName>, unknown>
    | undefined = undefined,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>
>(
  opts: Omit<
    UseFieldOptions<TParentData, TName, TFieldValidator, TFormValidator, TData>,
    "form"
  >
) => IFieldApi<TParentData, TName, TFieldValidator, TFormValidator, TData>;

export type FormValidateFn<
  TFormData extends object,
  TFormValidator extends Validator<TFormData, unknown> | undefined = undefined
> = (props: {
  value: TFormData;
  api: StoreApi<FormState<TFormData, TFormValidator>>;
}) => ValidationMessage;

export type FormValidateOrFn<
  TFormData extends object,
  TFormValidator extends Validator<TFormData, unknown> | undefined = undefined
> =
  TFormValidator extends Validator<TFormData, infer TFN>
    ? TFN
    : FormValidateFn<TFormData, TFormValidator>;

export type FormValidateAsyncFn<
  TFormData extends object,
  TFormValidator extends Validator<TFormData, unknown> | undefined = undefined
> = (props: {
  value: TFormData;
  formApi: IFormApi<TFormData, TFormValidator>;
  signal: AbortSignal;
}) => ValidationMessage | Promise<ValidationMessage>;

export type FormAsyncValidateOrFn<
  TFormData extends object,
  TFormValidator extends Validator<TFormData, unknown> | undefined = undefined
> =
  TFormValidator extends Validator<TFormData, infer FFN>
    ? FFN | FormValidateAsyncFn<TFormData, TFormValidator>
    : FormValidateAsyncFn<TFormData, TFormValidator>;

export interface FormValidators<
  TFormData extends object,
  TFormValidator extends Validator<TFormData, unknown> | undefined = undefined
> {
  onMount?: FormValidateOrFn<TFormData, TFormValidator>;
  onChange?: FormValidateOrFn<TFormData, TFormValidator>;
  onChangeAsync?: FormAsyncValidateOrFn<TFormData, TFormValidator>;
  onChangeAsyncDebounceMs?: number;
  onBlur?: FormValidateOrFn<TFormData, TFormValidator>;
  onBlurAsync?: FormAsyncValidateOrFn<TFormData, TFormValidator>;
  onBlurAsyncDebounceMs?: number;
  onSubmit?: FormValidateOrFn<TFormData, TFormValidator>;
  onSubmitAsync?: FormAsyncValidateOrFn<TFormData, TFormValidator>;
}

export interface FormTransform<
  TFormData extends object,
  TFormValidator extends Validator<TFormData, unknown> | undefined = undefined
> {
  fn: (
    formBase: IFormApi<TFormData, TFormValidator>
  ) => IFormApi<TFormData, TFormValidator>;
  deps: unknown[];
}

export interface FormOptions<
  TFormData extends object,
  TFormValidator extends Validator<TFormData, unknown> | undefined = undefined
> {
  defaultValues?: TFormData;
  defaultState?: Partial<FormState<TFormData, TFormValidator>>;
  asyncAlways?: boolean;
  asyncDebounceMs?: number;
  validatorAdapter?: TFormValidator;
  validators?: FormValidators<TFormData, TFormValidator>;
  onSubmit?: (props: {
    value: TFormData;
    formApi: IFormApi<TFormData, TFormValidator>;
  }) => any | Promise<any>;
  onSubmitInvalid?: (props: {
    value: TFormData;
    formApi: IFormApi<TFormData, TFormValidator>;
  }) => void;
  transform?: FormTransform<TFormData, TFormValidator>;
}

export type ValidationMeta = {
  lastAbortController: AbortController;
};

export type FieldInfo<
  TFormData extends object,
  TFormValidator extends Validator<TFormData, unknown> | undefined = undefined
> = {
  instance: IFieldApi<
    TFormData,
    any,
    Validator<unknown, unknown> | undefined,
    TFormValidator
  > | null;
  validationMetaMap: Record<
    ValidationMessageMapKeys,
    ValidationMeta | undefined
  >;
};

export type FieldMeta = {
  isTouched: boolean;
  isPristine: boolean;
  isDirty: boolean;
  isDisabled: boolean;
  isRequired: boolean;
  isValidating: boolean;
  touchedErrors: ValidationMessage[];
  errors: ValidationMessage[];
  warnings: ValidationMessage[];
  information: ValidationMessage[];
  successes: ValidationMessage[];
  errorMap: ValidationMessageMap;
};

export type FieldState<TData> = {
  value: TData;
  meta: FieldMeta;
};

export type ResolveName<TParentData> = unknown extends TParentData
  ? string
  : DeepKeys<TParentData>;

export interface FieldOptions<
  TParentData extends object,
  TFieldName extends DeepKeys<TParentData>,
  TFieldValidator extends
    | Validator<DeepValue<TParentData, TFieldName>, unknown>
    | undefined = undefined,
  TFormValidator extends
    | Validator<TParentData, unknown>
    | undefined = undefined,
  TData extends DeepValue<TParentData, TFieldName> = DeepValue<
    TParentData,
    TFieldName
  >
> {
  name: TFieldName;
  defaultValue?: NoInfer<TData>;
  asyncDebounceMs?: number;
  asyncAlways?: boolean;
  preserveValue?: boolean;
  validatorAdapter?: TFieldValidator;
  validators?: FieldValidators<
    TParentData,
    TFieldName,
    TFieldValidator,
    TFormValidator,
    TData
  >;
  defaultMeta?: Partial<FieldMeta>;
}

export type FormState<
  TFormData extends object = object,
  TFormValidator extends Validator<TFormData, unknown> | undefined = undefined
> = State & {
  // Form Meta
  options: FormOptions<TFormData, TFormValidator>;

  // Form Data
  values: TFormData;
  // Form Validation
  isFormValidating: boolean;
  isFormValid: boolean;
  errors: ValidationMessage[];
  errorMap: ValidationMessageMap;
  validationMetaMap: Record<
    ValidationMessageMapKeys,
    ValidationMeta | undefined
  >;
  // Fields
  fieldMeta: Record<Paths<TFormData>, FieldMeta>;
  _fieldInfo: Record<Paths<TFormData>, FieldInfo<TFormData, TFormValidator>>;
  isFieldsValidating: boolean;
  isFieldsValid: boolean;
  isSubmitting: boolean;
  // General
  isTouched: boolean;
  isDirty: boolean;
  isPristine: boolean;
  isSubmitted: boolean;
  isValidating: boolean;
  isValid: boolean;
  isDisabled: boolean;
  canSubmit: boolean;
  submissionAttempts: number;
};

/**
 * When using `@tanstack/react-form`, the core form API is extended at type level with additional methods for React-specific functionality:
 */
export interface IFormApi<
  TFormData extends object,
  TFormValidator extends Validator<TFormData, unknown> | undefined
> {
  /**
   * A React component to render form fields. With this, you can render and manage individual form fields.
   */
  Field: FieldComponent<TFormData, TFormValidator>;

  /**
   * A custom React hook that provides functionalities related to individual form fields. It gives you access to field values, errors, and allows you to set or update field values.
   */
  useField: UseField<TFormData, TFormValidator>;

  /**
   * A `useStore` hook that connects to the internal store of the form. It can be used to access the form's current state or any other related state information. You can optionally pass in a selector function to cherry-pick specific parts of the state
   */
  useStore: <TSelected = NoInfer<FormState<TFormData>>>(
    selector?: (state: NoInfer<FormState<TFormData>>) => TSelected
  ) => TSelected;

  /**
   * A `Subscribe` function that allows you to listen and react to changes in the form's state. It's especially useful when you need to execute side effects or render specific components in response to state updates.
   */
  Subscribe: <TSelected = NoInfer<FormState<TFormData>>>(props: {
    /**
      TypeScript versions <=5.0.4 have a bug that prevents
      the type of the `TSelected` generic from being inferred
      from the return type of this method.

      In these versions, `TSelected` will fall back to the default
      type (or `unknown` if that's not defined).

      @see {@link https://github.com/TanStack/form/pull/606/files#r1506715714 | This discussion on GitHub for the details}
      @see {@link https://github.com/microsoft/TypeScript/issues/52786 | The bug report in `microsoft/TypeScript`}
      */
    selector?: (state: NoInfer<FormState<TFormData>>) => TSelected;

    children: ((state: NoInfer<TSelected>) => NodeType) | NodeType;
  }) => NodeType;

  options: FormOptions<TFormData, TFormValidator>;

  store: StoreApi<FormState<TFormData>>;

  // Do not use __state directly, as it is not reactive.
  // Please use form.useStore() utility to subscribe to state
  state: FormState<TFormData>;

  // // This carries the context for nested fields
  fieldInfo: Record<DeepKeys<TFormData>, FieldInfo<TFormData, TFormValidator>>;
}

/**
 * @param children A render function that takes a field API instance and returns a React element.
 */
type FieldComponentProps<
  TParentData extends object,
  TName extends DeepKeys<TParentData>,
  TFieldValidator extends
    | Validator<DeepValue<TParentData, TName>, unknown>
    | undefined = undefined,
  TFormValidator extends
    | Validator<TParentData, unknown>
    | undefined = undefined,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>
> = {
  children: (
    fieldApi: IFieldApi<
      TParentData,
      TName,
      TFieldValidator,
      TFormValidator,
      TData
    >
  ) => NodeType;
} & UseFieldOptions<TParentData, TName, TFieldValidator, TFormValidator, TData>;

/**
 * A type alias representing a field component for a specific form data type.
 */
export type FieldComponent<
  TParentData extends object,
  TFormValidator extends Validator<TParentData, unknown> | undefined = undefined
> = <
  TName extends DeepKeys<TParentData>,
  TFieldValidator extends
    | Validator<DeepValue<TParentData, TName>, unknown>
    | undefined = undefined,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>
>({
  children,
  ...fieldOptions
}: Omit<
  FieldComponentProps<
    TParentData,
    TName,
    TFieldValidator,
    TFormValidator,
    TData
  >,
  "form"
>) => NodeType;

export type FieldValidateFn<
  TParentData extends object,
  TName extends DeepKeys<TParentData>,
  TFieldValidator extends
    | Validator<DeepValue<TParentData, TName>, unknown>
    | undefined = undefined,
  TFormValidator extends
    | Validator<TParentData, unknown>
    | undefined = undefined,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>
> = (props: {
  value: TData;
  fieldApi: IFieldApi<
    TParentData,
    TName,
    TFieldValidator,
    TFormValidator,
    TData
  >;
}) => ValidationMessage;

export type FieldValidateOrFn<
  TParentData extends object,
  TName extends DeepKeys<TParentData>,
  TFieldValidator extends
    | Validator<DeepValue<TParentData, TName>, unknown>
    | undefined = undefined,
  TFormValidator extends
    | Validator<TParentData, unknown>
    | undefined = undefined,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>
> =
  TFieldValidator extends Validator<TData, infer TFN>
    ?
        | TFN
        | FieldValidateFn<
            TParentData,
            TName,
            TFieldValidator,
            TFormValidator,
            TData
          >
    : TFormValidator extends Validator<TParentData, infer FFN>
      ?
          | FFN
          | FieldValidateFn<
              TParentData,
              TName,
              TFieldValidator,
              TFormValidator,
              TData
            >
      : FieldValidateFn<
          TParentData,
          TName,
          TFieldValidator,
          TFormValidator,
          TData
        >;

export type FieldValidateAsyncFn<
  TParentData extends object,
  TName extends DeepKeys<TParentData>,
  TFieldValidator extends
    | Validator<DeepValue<TParentData, TName>, unknown>
    | undefined = undefined,
  TFormValidator extends
    | Validator<TParentData, unknown>
    | undefined = undefined,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>
> = (options: {
  value: TData;
  fieldApi: IFieldApi<
    TParentData,
    TName,
    TFieldValidator,
    TFormValidator,
    TData
  >;
  signal: AbortSignal;
}) => ValidationMessage | Promise<ValidationMessage>;

export type FieldAsyncValidateOrFn<
  TParentData extends object,
  TName extends DeepKeys<TParentData>,
  TFieldValidator extends
    | Validator<DeepValue<TParentData, TName>, unknown>
    | undefined = undefined,
  TFormValidator extends
    | Validator<TParentData, unknown>
    | undefined = undefined,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>
> =
  TFieldValidator extends Validator<TData, infer TFN>
    ?
        | TFN
        | FieldValidateAsyncFn<
            TParentData,
            TName,
            TFieldValidator,
            TFormValidator,
            TData
          >
    : TFormValidator extends Validator<TParentData, infer FFN>
      ?
          | FFN
          | FieldValidateAsyncFn<
              TParentData,
              TName,
              TFieldValidator,
              TFormValidator,
              TData
            >
      : FieldValidateAsyncFn<
          TParentData,
          TName,
          TFieldValidator,
          TFormValidator,
          TData
        >;

export interface FieldValidators<
  TParentData extends object,
  TName extends DeepKeys<TParentData>,
  TFieldValidator extends
    | Validator<DeepValue<TParentData, TName>, unknown>
    | undefined = undefined,
  TFormValidator extends
    | Validator<TParentData, unknown>
    | undefined = undefined,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>
> {
  onMount?: FieldValidateOrFn<
    TParentData,
    TName,
    TFieldValidator,
    TFormValidator,
    TData
  >;
  onChange?: FieldValidateOrFn<
    TParentData,
    TName,
    TFieldValidator,
    TFormValidator,
    TData
  >;
  onChangeAsync?: FieldAsyncValidateOrFn<
    TParentData,
    TName,
    TFieldValidator,
    TFormValidator,
    TData
  >;
  onChangeAsyncDebounceMs?: number;
  onChangeListenTo?: DeepKeys<TParentData>[];
  onBlur?: FieldValidateOrFn<
    TParentData,
    TName,
    TFieldValidator,
    TFormValidator,
    TData
  >;
  onBlurAsync?: FieldAsyncValidateOrFn<
    TParentData,
    TName,
    TFieldValidator,
    TFormValidator,
    TData
  >;
  onBlurAsyncDebounceMs?: number;
  onBlurListenTo?: DeepKeys<TParentData>[];
  onSubmit?: FieldValidateOrFn<
    TParentData,
    TName,
    TFieldValidator,
    TFormValidator,
    TData
  >;
  onSubmitAsync?: FieldAsyncValidateOrFn<
    TParentData,
    TName,
    TFieldValidator,
    TFormValidator,
    TData
  >;
}

/**
 * The return type of React.ReactNode appears to change between React 4.9 and 5.0
 *
 * This means that if we replace this type with React.ReactNode, there will be
 * random typings the fail between React 4.9 and 5.0. This is a hack that resolves this issue.
 */
export type NodeType = ReturnType<FunctionComponent>;
