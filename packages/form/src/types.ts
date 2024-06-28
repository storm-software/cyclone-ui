import type { FunctionComponent } from "react";
import { State, type StoreApi } from "@cyclone-ui/store";
import { DeepKeys, DeepValue, NoInfer } from "@cyclone-ui/types";

export type ValidationError = undefined | false | null | string;

// If/when TypeScript supports higher-kinded types, this should not be `unknown` anymore
export type Validator<Type, Fn = unknown> = () => {
  validate(options: { value: Type }, fn: Fn): ValidationError;
  validateAsync(options: { value: Type }, fn: Fn): Promise<ValidationError>;
};

// "server" is only intended for SSR/SSG validation and should not execute anything
export type ValidationCause = "change" | "blur" | "submit" | "mount" | "server";

export type ValidationErrorMapKeys = `on${Capitalize<ValidationCause>}`;

export type ValidationErrorMap = {
  [K in ValidationErrorMapKeys]?: ValidationError;
};

export interface FieldApiOptions<
  TParentData,
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
  TParentData,
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
  TParentData,
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
  TParentData,
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
  TFormData,
  TFormValidator extends Validator<TFormData, unknown> | undefined = undefined
> = (props: {
  value: TFormData;
  api: StoreApi<FormState<TFormData, TFormValidator>>;
}) => ValidationError;

export type FormValidateOrFn<
  TFormData,
  TFormValidator extends Validator<TFormData, unknown> | undefined = undefined
> =
  TFormValidator extends Validator<TFormData, infer TFN>
    ? TFN
    : FormValidateFn<TFormData, TFormValidator>;

export type FormValidateAsyncFn<
  TFormData,
  TFormValidator extends Validator<TFormData, unknown> | undefined = undefined
> = (props: {
  value: TFormData;
  formApi: IFormApi<TFormData, TFormValidator>;
  signal: AbortSignal;
}) => ValidationError | Promise<ValidationError>;

export type FormAsyncValidateOrFn<
  TFormData,
  TFormValidator extends Validator<TFormData, unknown> | undefined = undefined
> =
  TFormValidator extends Validator<TFormData, infer FFN>
    ? FFN | FormValidateAsyncFn<TFormData, TFormValidator>
    : FormValidateAsyncFn<TFormData, TFormValidator>;

export interface FormValidators<
  TFormData,
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
  TFormData,
  TFormValidator extends Validator<TFormData, unknown> | undefined = undefined
> {
  fn: (
    formBase: IFormApi<TFormData, TFormValidator>
  ) => IFormApi<TFormData, TFormValidator>;
  deps: unknown[];
}

export interface FormOptions<
  TFormData,
  TFormValidator extends Validator<TFormData, unknown> | undefined = undefined
> {
  defaultValues?: TFormData;
  defaultState?: Partial<FormState<TFormData>>;
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
  TFormData,
  TFormValidator extends Validator<TFormData, unknown> | undefined = undefined
> = {
  instance: IFieldApi<
    TFormData,
    any,
    Validator<unknown, unknown> | undefined,
    TFormValidator
  > | null;
  validationMetaMap: Record<ValidationErrorMapKeys, ValidationMeta | undefined>;
};

export type FieldMeta = {
  isTouched: boolean;
  isPristine: boolean;
  isDirty: boolean;
  touchedErrors: ValidationError[];
  errors: ValidationError[];
  errorMap: ValidationErrorMap;
  isValidating: boolean;
};

export type FieldState<TData> = {
  value: TData;
  meta: FieldMeta;
};

export type ResolveName<TParentData> = unknown extends TParentData
  ? string
  : DeepKeys<TParentData>;

export interface FieldOptions<
  TParentData,
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
  TFormData,
  TFormValidator extends Validator<TFormData, unknown> | undefined = undefined
> = State & {
  // Form Meta
  options: FormOptions<TFormData, TFormValidator>;

  // Form Data
  values: TFormData;
  // Form Validation
  isFormValidating: boolean;
  isFormValid: boolean;
  errors: ValidationError[];
  errorMap: ValidationErrorMap;
  validationMetaMap: Record<ValidationErrorMapKeys, ValidationMeta | undefined>;
  // Fields
  fieldMeta: Record<DeepKeys<TFormData>, FieldMeta>;
  _fieldInfo: Record<DeepKeys<TFormData>, any>;
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
  canSubmit: boolean;
  submissionAttempts: number;
};

/**
 * When using `@tanstack/react-form`, the core form API is extended at type level with additional methods for React-specific functionality:
 */
export interface IFormApi<
  TFormData,
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
  TParentData,
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
  TParentData,
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
  TParentData,
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
}) => ValidationError;

export type FieldValidateOrFn<
  TParentData,
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
  TParentData,
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
}) => ValidationError | Promise<ValidationError>;

export type FieldAsyncValidateOrFn<
  TParentData,
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
  TParentData,
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
