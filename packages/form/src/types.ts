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

import type { CreateAtomStoreOptions } from "@cyclone-ui/state";
import type { StormError } from "@storm-stack/errors";
import type {
  DeepKey,
  DeepValue,
  MessageDetails,
  NoInfer,
  Nullable,
  RequiredByKey,
  SerializablePrimitive
} from "@storm-stack/types";
import type { Getter, Setter } from "jotai";
import type { FunctionComponent } from "react";

import { type StoreApi } from "@cyclone-ui/store";

export type FieldPrimitive = Date | SerializablePrimitive;
export type IsFieldPrimitive<T> = [T] extends [FieldPrimitive] ? true : false;

export type InferFieldValue<
  TFormValues extends Record<string, unknown>,
  TFieldName extends DeepKey<TFormValues>
> =
  IsFieldPrimitive<DeepValue<TFormValues, TFieldName>> extends true
    ? Nullable<DeepValue<TFormValues, TFieldName>>
    : DeepValue<TFormValues, TFieldName>;

export type ValidationResult =
  | MessageDetails
  | MessageDetails[]
  | StormError
  | StormError[]
  | false
  | null
  | string
  | undefined;

// If/when TypeScript supports higher-kinded types, this should not be `unknown` anymore
export type Validator<TValue, Fn = unknown> = () => {
  validate(
    options: { get: Getter; previous?: TValue; set: Setter; value: TValue },
    fn: Fn
  ): ValidationResult[];
  validateAsync(
    options: { get: Getter; previous?: TValue; set: Setter; value: TValue },
    fn: Fn
  ): Promise<ValidationResult[]>;
};

// "server" is only intended for SSR/SSG validation and should not execute anything
export type ValidationCause = "blur" | "change" | "mount" | "server" | "submit";
// eslint-disable-next-line no-redeclare
export const ValidationCause = {
  BLUR: "blur" as ValidationCause,
  CHANGE: "change" as ValidationCause,
  MOUNT: "mount" as ValidationCause,
  SERVER: "server" as ValidationCause,
  SUBMIT: "submit" as ValidationCause
};

export type ValidationResultMapKeys = `on${Capitalize<ValidationCause>}`;

export type ValidationMeta = {
  lastAbortController: AbortController;
};

export type ValidationResults = {
  meta: Record<ValidationResultMapKeys, ValidationMeta | undefined>;
  resultMap: Partial<Record<ValidationResultMapKeys, MessageDetails[]>>;
};

export interface FieldApiOptions<
  TFormValues extends Record<string, unknown>,
  TName extends DeepKey<TFormValues>,
  TFieldValidator extends
    | Validator<DeepValue<TFormValues, TName>, unknown>
    | undefined = undefined,
  TFormValidator extends
    | Validator<TFormValues, unknown>
    | undefined = undefined,
  TData extends DeepValue<TFormValues, TName> = DeepValue<TFormValues, TName>
> extends FieldOptions<
    TFormValues,
    TName,
    TFieldValidator,
    TFormValidator,
    TData
  > {
  form: IFormApi<TFormValues, TFormValidator>;
}

/**
 * The field options.
 */
export type UseFieldOptions<
  TFormValues extends Record<string, unknown>,
  TName extends DeepKey<TFormValues>,
  TFieldValidator extends
    | Validator<DeepValue<TFormValues, TName>, unknown>
    | undefined = undefined,
  TFormValidator extends
    | Validator<TFormValues, unknown>
    | undefined = undefined,
  TData extends DeepValue<TFormValues, TName> = DeepValue<TFormValues, TName>
> = {
  mode?: "array" | "value";
} & FieldApiOptions<TFormValues, TName, TFieldValidator, TFormValidator, TData>;

export interface IFieldApi<
  TFormValues extends Record<string, unknown>,
  TName extends DeepKey<TFormValues>,
  _TFieldValidator extends
    | Validator<DeepValue<TFormValues, TName>, unknown>
    | undefined = undefined,
  TFormValidator extends
    | Validator<TFormValues, unknown>
    | undefined = undefined,
  _TData extends DeepValue<TFormValues, TName> = DeepValue<TFormValues, TName>
> {
  /**
   * A pre-bound and type-safe sub-field component using this field as a root.
   */
  Field: FieldComponent<TFormValues, TFormValidator>;
}

/**
 * A type representing a hook for using a field in a form with the given form data type.
 *
 * A function that takes an optional object with a `name` property and field options, and returns a `FieldApi` instance for the specified field.
 */
export type UseField<
  TFormValues extends Record<string, unknown>,
  TFormValidator extends Validator<TFormValues, unknown> | undefined = undefined
> = <
  TName extends DeepKey<TFormValues>,
  TFieldValidator extends
    | Validator<DeepValue<TFormValues, TName>, unknown>
    | undefined = undefined,
  TData extends DeepValue<TFormValues, TName> = DeepValue<TFormValues, TName>
>(
  opts: Omit<
    UseFieldOptions<TFormValues, TName, TFieldValidator, TFormValidator, TData>,
    "form"
  >
) => IFieldApi<TFormValues, TName, TFieldValidator, TFormValidator, TData>;

export type FormValidateFn<
  TFormValues extends Record<string, unknown>,
  TFormValidator extends Validator<TFormValues, unknown> | undefined = undefined
> = (props: {
  api: StoreApi<FormState<TFormValues, TFormValidator>>;
  value: TFormValues;
}) => ValidationResult[];

export type FormValidateOrFn<
  TFormValues extends Record<string, unknown>,
  TFormValidator extends Validator<TFormValues, unknown> | undefined = undefined
> =
  TFormValidator extends Validator<TFormValues, infer TFN>
    ? TFN
    : FormValidateFn<TFormValues, TFormValidator>;

export type FormValidateAsyncFn<
  TFormValues extends Record<string, unknown>,
  TFormValidator extends Validator<TFormValues, unknown> | undefined = undefined
> = (props: {
  formApi: IFormApi<TFormValues, TFormValidator>;
  signal: AbortSignal;
  value: TFormValues;
}) => Promise<ValidationResult[]> | ValidationResult[];

export type FormAsyncValidateOrFn<
  TFormValues extends Record<string, unknown>,
  TFormValidator extends Validator<TFormValues, unknown> | undefined = undefined
> =
  TFormValidator extends Validator<TFormValues, infer FFN>
    ? FFN | FormValidateAsyncFn<TFormValues, TFormValidator>
    : FormValidateAsyncFn<TFormValues, TFormValidator>;

export interface FormValidators<
  TFormValues extends Record<string, unknown>,
  TFormValidator extends Validator<TFormValues, unknown> | undefined = undefined
> {
  onBlur?: FormValidateOrFn<TFormValues, TFormValidator>;
  onBlurAsync?: FormAsyncValidateOrFn<TFormValues, TFormValidator>;
  onBlurAsyncDebounceMs?: number;
  onChange?: FormValidateOrFn<TFormValues, TFormValidator>;
  onChangeAsync?: FormAsyncValidateOrFn<TFormValues, TFormValidator>;
  onChangeAsyncDebounceMs?: number;
  onMount?: FormValidateOrFn<TFormValues, TFormValidator>;
  onSubmit?: FormValidateOrFn<TFormValues, TFormValidator>;
  onSubmitAsync?: FormAsyncValidateOrFn<TFormValues, TFormValidator>;
}

export interface FormTransform<
  TFormValues extends Record<string, unknown>,
  TFormValidator extends Validator<TFormValues, unknown> | undefined = undefined
> {
  deps: unknown[];
  fn: (
    formBase: IFormApi<TFormValues, TFormValidator>
  ) => IFormApi<TFormValues, TFormValidator>;
}

export interface FormOptions<
  TFormValues extends Record<string, unknown>,
  TFormValidator extends
    | Validator<TFormValues, unknown>
    | undefined = undefined,
  TName extends string = string
> extends CreateAtomStoreOptions<
    FormBaseState<TFormValues, TFormValidator>,
    FormExtendedState<TFormValues, TFormValidator>,
    TName
  > {
  asyncAlways?: boolean;
  asyncDebounceMs?: number;
  defaultState?: Partial<FormBaseState<TFormValues, TFormValidator>>;
  defaultValues?: TFormValues;
  onSubmit?: (props: {
    formApi: IFormApi<TFormValues, TFormValidator>;
    value: TFormValues;
  }) => Promise<any> | any;
  onSubmitInvalid?: (props: {
    formApi: IFormApi<TFormValues, TFormValidator>;
    value: TFormValues;
  }) => void;
  transform?: FormTransform<TFormValues, TFormValidator>;
  validatorAdapter?: TFormValidator;
  validators?: FormValidators<TFormValues, TFormValidator>;
}

export type FieldInfo<
  TFormValues extends Record<string, unknown>,
  TFormValidator extends Validator<TFormValues, unknown> | undefined = undefined
> = {
  instance: IFieldApi<
    TFormValues,
    any,
    Validator<unknown, unknown> | undefined,
    TFormValidator
  > | null;
};

export type FieldBaseState<
  TFormValues extends Record<string, unknown>,
  TFieldName extends DeepKey<TFormValues>,
  TFieldValidator extends
    | Validator<InferFieldValue<TFormValues, TFieldName>, unknown>
    | undefined = undefined,
  TFormValidator extends
    | Validator<TFormValues, unknown>
    | undefined = undefined,
  TFormName extends string = string,
  TFieldValue extends InferFieldValue<
    TFormValues,
    TFieldName
  > = InferFieldValue<TFormValues, TFieldName>,
  TFieldOptions extends FieldOptions<
    TFormValues,
    TFieldName,
    TFieldValidator,
    TFormValidator,
    TFormName,
    TFieldValue
  > = FieldOptions<
    TFormValues,
    TFieldName,
    TFieldValidator,
    TFormValidator,
    TFormName,
    TFieldValue
  >
> = {
  initialState: FieldBaseState<
    TFormValues,
    TFieldName,
    TFieldValidator,
    TFormValidator,
    TFormName,
    TFieldValue,
    TFieldOptions
  >;
  initialValue: Nullable<TFieldValue>;
  isDisabled: boolean;
  isFocused: boolean;
  isRequired: boolean;
  isTouched: boolean;
  isValidating: boolean;
  options: RequiredByKey<TFieldOptions, "areEqual">;
  validationResults: ValidationResults;
  value: TFieldValue;
  previousValue: Nullable<TFieldValue>;
};

export type FieldState<
  TFormValues extends Record<string, unknown>,
  TFieldName extends DeepKey<TFormValues>,
  TFieldValidator extends
    | Validator<InferFieldValue<TFormValues, TFieldName>, unknown>
    | undefined = undefined,
  TFormValidator extends
    | Validator<TFormValues, unknown>
    | undefined = undefined,
  TFormName extends string = string,
  TFieldValue extends InferFieldValue<
    TFormValues,
    TFieldName
  > = InferFieldValue<TFormValues, TFieldName>,
  TFieldOptions extends FieldOptions<
    TFormValues,
    TFieldName,
    TFieldValidator,
    TFormValidator,
    TFormName,
    TFieldValue
  > = FieldOptions<
    TFormValues,
    TFieldName,
    TFieldValidator,
    TFormValidator,
    TFormName,
    TFieldValue
  >
> = {
  debouncedValue: Nullable<TFieldValue>;
  errors: ValidationResult[];
  info: ValidationResult[];
  isDirty: boolean;
  isPristine: boolean;
  isValid: boolean;
  maskedValue: string;
  successes: ValidationResult[];
  warnings: ValidationResult[];
} & FieldBaseState<
  TFormValues,
  TFieldName,
  TFieldValidator,
  TFormValidator,
  TFormName,
  TFieldValue,
  TFieldOptions
>;

export type FieldOptions<
  TFormValues extends Record<string, unknown>,
  TFieldName extends DeepKey<TFormValues>,
  TFieldValidator extends
    | Validator<InferFieldValue<TFormValues, TFieldName>, unknown>
    | undefined = undefined,
  TFormValidator extends
    | Validator<TFormValues, unknown>
    | undefined = undefined,
  TFormName extends string = string,
  TFieldValue extends InferFieldValue<
    TFormValues,
    TFieldName
  > = InferFieldValue<TFormValues, TFieldName>
> = {
  /**
   * A function that determines whether two field values are equal. This is used to determine whether a field has changed and should be validated.
   *
   * @defaultValue `Object.is`
   *
   * @param a - The first field value
   * @param b - The second field value
   * @returns `true` if the two values are equal, `false` otherwise
   */
  areEqual?: (a: TFieldValue, b: TFieldValue) => boolean;
  asyncAlways?: boolean;
  debounceMs?: number;
  defaultState?: Partial<
    FieldBaseState<
      TFormValues,
      TFieldName,
      TFieldValidator,
      TFormValidator,
      TFormName,
      TFieldValue
    >
  >;
  defaultValue?: TFieldValue;
  formName: TFormName;
  isDisabled?: boolean;
  isRequired?: boolean;
  mask?: (value: TFieldValue) => string;
  name: TFieldName;
  parse?: (value: unknown) => TFieldValue;
  shouldDebounceOnReset?: boolean;
  shouldUnregister?: boolean;
  validatorAdapter?: TFieldValidator;
  validators?: FieldValidators<
    TFormValues,
    TFieldName,
    TFieldValidator,
    TFormValidator,
    TFieldValue
  >;
} & Omit<
  CreateAtomStoreOptions<
    FieldBaseState<
      TFormValues,
      TFieldName,
      TFieldValidator,
      TFormValidator,
      TFormName,
      TFieldValue,
      never
    >
  >,
  "initialState" | "name"
>;

// export type FieldState<
//   TFormValues extends Record<string, unknown>,
//   TFieldName extends DeepKey<TFormValues>,
//   TFieldValidator extends
//     | Validator<FieldValue<TFormValues, TFieldName>, unknown>
//     | undefined = undefined,
//   TFormValidator extends
//     | Validator<TFormValues, unknown>
//     | undefined = undefined,
//   TData extends DeepValue<TFormValues, TFieldName> = DeepValue<
//     TFormValues,
//     TFieldName
//   >
// > = FieldMeta & {
//   options: FieldOptions<
//     TFormValues,
//     TFieldName,
//     TFieldValidator,
//     TFormValidator,
//     TData
//   >;

// };

// export type FieldMeta<
// TFormValues extends Record<string, unknown>,
// TFieldName extends DeepKey<TFormValues>,
// TFieldValidator extends
//   | Validator<FieldValue<TFormValues, TFieldName>, unknown>
//   | undefined = undefined,
// TFormValidator extends
//   | Validator<TFormValues, unknown>
//   | undefined = undefined,
// TData extends DeepValue<TFormValues, TFieldName> = DeepValue<
//   TFormValues,
//   TFieldName
// >
// > = FieldMetaBase<
// TFormValues,
// TFieldName,
// TFieldValidator,
// TFormValidator,
// TData
// > & {
//   isTouched: boolean;
//   isPristine: boolean;
//   isDirty: boolean;
//   isDisabled: boolean;
//   isRequired: boolean;
//   isValidating: boolean;
//   validationMap: ValidationResultMap;
//   validationMetaMap: Record<
//     ValidationResultMapKeys,
//     ValidationMeta | undefined
//   >;
// };

// export type ResolveName<TFormValues> = unknown extends TFormValues
//   ? string
//   : DeepKey<TFormValues>;

export type FormBaseState<
  TFormValues extends Record<string, unknown>,
  _TFormValidator extends
    | Validator<TFormValues, unknown>
    | undefined = undefined
> = {
  fieldOptions: {
    [TKey in DeepKey<TFormValues>]: FieldOptions<TFormValues, TKey>;
  };
  fieldStates: {
    [TKey in DeepKey<TFormValues>]: FieldState;
  };
  fieldValidationResults: {
    [TKey in DeepKey<TFormValues>]: ValidationResults;
  };
  isDisabled: boolean;
  isSubmitted: boolean;
  isSubmitting: boolean;
  isValidating: boolean;
  submissionAttempts: number;
  validationResults: ValidationResults;
  values: TFormValues;
};

export type FormExtendedState<
  TFormValues extends Record<string, unknown>,
  _TFormValidator extends
    | Validator<TFormValues, unknown>
    | undefined = undefined
> = {
  canSubmit: boolean;
  errors: ValidationResult[];
  info: ValidationResult[];
  isDirty: boolean;
  isDisabled: boolean;
  isFieldsValid: boolean;
  isFieldsValidating: boolean;
  isFormValid: boolean;
  isFormValidating: boolean;
  isPristine: boolean;
  isTouched: boolean;
  isValid: boolean;
  successes: ValidationResult[];
  warnings: ValidationResult[];
};

export type FormMeta<
  TFormValues extends Record<string, unknown>,
  _TFormValidator extends
    | Validator<TFormValues, unknown>
    | undefined = undefined
> = {
  canSubmit: boolean;
  isDirty: boolean;
  isDisabled: boolean;
  isFieldsValid: boolean;
  isFieldsValidating: boolean;
  isFormValid: boolean;
  isFormValidating: boolean;
  isPristine: boolean;
  isSubmitted: boolean;
  isSubmitting: boolean;
  isTouched: boolean;

  isValid: boolean;
  isValidating: boolean;
  submissionAttempts: number;
};

// export type FormState<
//   TFormValues extends Record<string, unknown> = object,
//   TFormValidator extends Validator<TFormValues, unknown> | undefined = undefined
// > = State & {
//   // Form Meta
//   options: FormOptions<TFormValues, TFormValidator>;

//   // Form Data
//   values: TFormValues;
//   // Form Validation
//   isFormValidating: boolean;
//   isFormValid: boolean;
//   errors: ValidationResult[];

//   // Fields
//   fieldMeta: Record<Paths<TFormValues>, FieldMeta>;
//   _fieldInfo: Record<
//     Paths<TFormValues>,
//     FieldInfo<TFormValues, TFormValidator>
//   >;
//   isFieldsValidating: boolean;
//   isFieldsValid: boolean;
//   isSubmitting: boolean;
//   // General
//   isTouched: boolean;
//   isDirty: boolean;
//   isPristine: boolean;
//   isSubmitted: boolean;
//   isValidating: boolean;
//   isValid: boolean;
//   isDisabled: boolean;
//   canSubmit: boolean;
//   submissionAttempts: number;
// };

/**
 * When using `@tanstack/react-form`, the core form API is extended at type level with additional methods for React-specific functionality:
 */
export interface IFormApi<
  TFormValues extends Record<string, unknown>,
  TFormValidator extends Validator<TFormValues, unknown> | undefined
> {
  /**
   * A React component to render form fields. With this, you can render and manage individual form fields.
   */
  Field: FieldComponent<TFormValues, TFormValidator>;

  /**
   * A `Subscribe` function that allows you to listen and react to changes in the form's state. It's especially useful when you need to execute side effects or render specific components in response to state updates.
   */
  Subscribe: <TSelected = NoInfer<FormState<TFormValues>>>(props: {
    children: ((state: NoInfer<TSelected>) => NodeType) | NodeType;

    /**
      TypeScript versions <=5.0.4 have a bug that prevents
      the type of the `TSelected` generic from being inferred
      from the return type of this method.

      In these versions, `TSelected` will fall back to the default
      type (or `unknown` if that's not defined).

      @see {@link https://github.com/TanStack/form/pull/606/files#r1506715714 | This discussion on GitHub for the details}
      @see {@link https://github.com/microsoft/TypeScript/issues/52786 | The bug report in `microsoft/TypeScript`}
      */
    selector?: (state: NoInfer<FormState<TFormValues>>) => TSelected;
  }) => NodeType;

  // // This carries the context for nested fields
  fieldInfo: Record<
    DeepKey<TFormValues>,
    FieldInfo<TFormValues, TFormValidator>
  >;

  options: FormOptions<TFormValues, TFormValidator>;

  // Please use form.useStore() utility to subscribe to state
  state: FormState<TFormValues>;

  store: StoreApi<FormState<TFormValues>>;

  // Do not use __state directly, as it is not reactive.
  /**
   * A custom React hook that provides functionalities related to individual form fields. It gives you access to field values, errors, and allows you to set or update field values.
   */
  useField: UseField<TFormValues, TFormValidator>;

  /**
   * A `useStore` hook that connects to the internal store of the form. It can be used to access the form's current state or any other related state information. You can optionally pass in a selector function to cherry-pick specific parts of the state
   */
  useStore: <TSelected = NoInfer<FormState<TFormValues>>>(
    selector?: (state: NoInfer<FormState<TFormValues>>) => TSelected
  ) => TSelected;
}

/**
 * @param children A render function that takes a field API instance and returns a React element.
 */
type FieldComponentProps<
  TFormValues extends Record<string, unknown>,
  TName extends DeepKey<TFormValues>,
  TFieldValidator extends
    | Validator<DeepValue<TFormValues, TName>, unknown>
    | undefined = undefined,
  TFormValidator extends
    | Validator<TFormValues, unknown>
    | undefined = undefined,
  TData extends DeepValue<TFormValues, TName> = DeepValue<TFormValues, TName>
> = {
  children: (
    fieldApi: IFieldApi<
      TFormValues,
      TName,
      TFieldValidator,
      TFormValidator,
      TData
    >
  ) => NodeType;
} & UseFieldOptions<TFormValues, TName, TFieldValidator, TFormValidator, TData>;

/**
 * A type alias representing a field component for a specific form data type.
 */
export type FieldComponent<
  TFormValues extends Record<string, unknown>,
  TFormValidator extends Validator<TFormValues, unknown> | undefined = undefined
> = <
  TName extends DeepKey<TFormValues>,
  TFieldValidator extends
    | Validator<DeepValue<TFormValues, TName>, unknown>
    | undefined = undefined,
  TData extends DeepValue<TFormValues, TName> = DeepValue<TFormValues, TName>
>({
  children,
  ...fieldOptions
}: Omit<
  FieldComponentProps<
    TFormValues,
    TName,
    TFieldValidator,
    TFormValidator,
    TData
  >,
  "form"
>) => NodeType;

export type FieldValidateFn<
  TFormValues extends Record<string, unknown>,
  TFieldName extends DeepKey<TFormValues>,
  _TFieldValidator extends
    | Validator<InferFieldValue<TFormValues, TFieldName>, unknown>
    | undefined = undefined,
  _TFormValidator extends
    | Validator<TFormValues, unknown>
    | undefined = undefined,
  TFieldValue extends InferFieldValue<
    TFormValues,
    TFieldName
  > = InferFieldValue<TFormValues, TFieldName>
> = (params: {
  get: Getter;
  previousValue: Nullable<TFieldValue>;
  set: Setter;
  value: TFieldValue;
}) => ValidationResult[];

export type FieldValidateOrFn<
  TFormValues extends Record<string, unknown>,
  TFieldName extends DeepKey<TFormValues>,
  TFieldValidator extends
    | Validator<InferFieldValue<TFormValues, TFieldName>, unknown>
    | undefined = undefined,
  TFormValidator extends
    | Validator<TFormValues, unknown>
    | undefined = undefined,
  TFieldValue extends InferFieldValue<
    TFormValues,
    TFieldName
  > = InferFieldValue<TFormValues, TFieldName>
> =
  TFieldValidator extends Validator<TFieldValue, infer TFN>
    ?
        | FieldValidateFn<
            TFormValues,
            TFieldName,
            TFieldValidator,
            TFormValidator,
            TFieldValue
          >
        | TFN
    : TFormValidator extends Validator<TFormValues, infer FFN>
      ?
          | FFN
          | FieldValidateFn<
              TFormValues,
              TFieldName,
              TFieldValidator,
              TFormValidator,
              TFieldValue
            >
      : FieldValidateFn<
          TFormValues,
          TFieldName,
          TFieldValidator,
          TFormValidator,
          TFieldValue
        >;

export type FieldValidateAsyncFn<
  TFormValues extends Record<string, unknown>,
  TFieldName extends DeepKey<TFormValues>,
  _TFieldValidator extends
    | Validator<InferFieldValue<TFormValues, TFieldName>, unknown>
    | undefined = undefined,
  _TFormValidator extends
    | Validator<TFormValues, unknown>
    | undefined = undefined,
  TFieldValue extends InferFieldValue<
    TFormValues,
    TFieldName
  > = InferFieldValue<TFormValues, TFieldName>
> = (options: {
  get: Getter;
  previous?: TFieldValue;
  set: Setter;
  signal: AbortSignal;
  value: TFieldValue;
}) => Promise<ValidationResult[]> | ValidationResult[];

export type FieldAsyncValidateOrFn<
  TFormValues extends Record<string, unknown>,
  TFieldName extends DeepKey<TFormValues>,
  TFieldValidator extends
    | Validator<InferFieldValue<TFormValues, TFieldName>, unknown>
    | undefined = undefined,
  TFormValidator extends
    | Validator<TFormValues, unknown>
    | undefined = undefined,
  TFieldValue extends InferFieldValue<
    TFormValues,
    TFieldName
  > = InferFieldValue<TFormValues, TFieldName>
> =
  TFieldValidator extends Validator<TFieldValue, infer TFN>
    ?
        | FieldValidateAsyncFn<
            TFormValues,
            TFieldName,
            TFieldValidator,
            TFormValidator,
            TFieldValue
          >
        | TFN
    : TFormValidator extends Validator<TFormValues, infer FFN>
      ?
          | FFN
          | FieldValidateAsyncFn<
              TFormValues,
              TFieldName,
              TFieldValidator,
              TFormValidator,
              TFieldValue
            >
      : FieldValidateAsyncFn<
          TFormValues,
          TFieldName,
          TFieldValidator,
          TFormValidator,
          TFieldValue
        >;

export interface FieldValidators<
  TFormValues extends Record<string, unknown>,
  TFieldName extends DeepKey<TFormValues>,
  TFieldValidator extends
    | Validator<InferFieldValue<TFormValues, TFieldName>, unknown>
    | undefined = undefined,
  TFormValidator extends
    | Validator<TFormValues, unknown>
    | undefined = undefined,
  TFieldValue extends InferFieldValue<
    TFormValues,
    TFieldName
  > = InferFieldValue<TFormValues, TFieldName>
> {
  onBlur?: FieldValidateOrFn<
    TFormValues,
    TFieldName,
    TFieldValidator,
    TFormValidator,
    TFieldValue
  >;
  onBlurAsync?: FieldAsyncValidateOrFn<
    TFormValues,
    TFieldName,
    TFieldValidator,
    TFormValidator,
    TFieldValue
  >;
  onBlurAsyncDebounceMs?: number;
  onBlurListenTo?: DeepKey<TFormValues>[];
  onChange?: FieldValidateOrFn<
    TFormValues,
    TFieldName,
    TFieldValidator,
    TFormValidator,
    TFieldValue
  >;
  onChangeAsync?: FieldAsyncValidateOrFn<
    TFormValues,
    TFieldName,
    TFieldValidator,
    TFormValidator,
    TFieldValue
  >;
  onChangeAsyncDebounceMs?: number;
  onChangeListenTo?: DeepKey<TFormValues>[];
  onMount?: FieldValidateOrFn<
    TFormValues,
    TFieldName,
    TFieldValidator,
    TFormValidator,
    TFieldValue
  >;
  onSubmit?: FieldValidateOrFn<
    TFormValues,
    TFieldName,
    TFieldValidator,
    TFormValidator,
    TFieldValue
  >;
  onSubmitAsync?: FieldAsyncValidateOrFn<
    TFormValues,
    TFieldName,
    TFieldValidator,
    TFormValidator,
    TFieldValue
  >;
}

/**
 * The return type of React.ReactNode appears to change between React 4.9 and 5.0
 *
 * This means that if we replace this type with React.ReactNode, there will be
 * random typings the fail between React 4.9 and 5.0. This is a hack that resolves this issue.
 */
export type NodeType = ReturnType<FunctionComponent>;
