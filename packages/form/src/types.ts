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

import { ColorRole } from "@cyclone-ui/colors";
import {
  IsPlainObject,
  MaybePromise,
  SelectOption,
  ValidationDetails
} from "@storm-stack/types";
import { Getter, Setter } from "jotai";

/**
 * "server" is only intended for SSR/SSG validation and should not execute anything
 */
export type ValidationCause =
  | "initialize"
  | "change"
  | "blur"
  | "submit"
  | "server";
export const ValidationCause = {
  INITIALIZE: "initialize" as ValidationCause,
  CHANGE: "change" as ValidationCause,
  BLUR: "blur" as ValidationCause,
  SUBMIT: "submit" as ValidationCause,
  SERVER: "server" as ValidationCause
};

export type Validator<TValue = any> = (
  value: TValue,
  previousValue: TValue,
  cause: ValidationCause,
  get: Getter,
  set: Setter
) => MaybePromise<ValidationDetails[]>;

export type ValidationResults = Partial<
  Record<ValidationCause, ValidationDetails[]>
>;

/**
 * The field status.
 */
export type FieldStatus =
  | "base"
  | "help"
  | "success"
  | "info"
  | "warning"
  | "error";
export const FieldStatus = {
  BASE: ColorRole.BASE as FieldStatus,
  HELP: ColorRole.HELP as FieldStatus,
  SUCCESS: ColorRole.SUCCESS as FieldStatus,
  INFO: ColorRole.INFO as FieldStatus,
  WARNING: ColorRole.WARNING as FieldStatus,
  ERROR: ColorRole.ERROR as FieldStatus
};

export type FieldValueType =
  | "date"
  | "time"
  | "datetime"
  | "string"
  | "number"
  | "boolean"
  | "any";
export const FieldValueType = {
  DATE: "date" as FieldValueType,
  TIME: "time" as FieldValueType,
  DATETIME: "datetime" as FieldValueType,
  STRING: "string" as FieldValueType,
  NUMBER: "number" as FieldValueType,
  BOOLEAN: "boolean" as FieldValueType,
  ANY: "any" as FieldValueType
};

export type InferFieldState<TValues, TState> =
  IsPlainObject<TValues> extends true
    ? {
        [TKey in keyof TValues]: InferFieldState<TValues[TKey], TState>;
      }
    : TState;

export type InferFormState<TValues extends Record<string, any>, TState> = {
  [TKey in keyof TValues]: InferFieldState<TValues[TKey], TState>;
};

export type FormValuesState<TValues extends Record<string, any>> = {
  [TKey in keyof TValues]: IsPlainObject<TValues[TKey]> extends true
    ? FormValuesState<TValues[TKey]>
    : TValues[TKey] | null;
};

/**
 * The form options.
 */
export type FormOptions<
  TFormValues extends Record<string, any> = Record<string, any>,
  TValidator extends Validator<TFormValues> = Validator<TFormValues>
> = {
  name: string;
  theme?: string;
  disabled?: boolean;
  defaultValues?: FormValuesState<TFormValues>;
  validate?: Record<
    `on${Capitalize<ValidationCause>}`,
    TValidator[] | undefined
  >;
  debounceMs?: number;
  onInitialize?: () => MaybePromise<void>;
  onBlur?: () => MaybePromise<void>;
  onFocus?: () => MaybePromise<void>;
  onChange?: (values: TFormValues) => MaybePromise<void>;
  onSubmit?: (values: TFormValues) => MaybePromise<void>;

  /**
   * The default options provided to all fields when they are created.
   */
  defaultFieldOptions?: Partial<Omit<FieldOptions, "name" | "mode">>;
};

export type FormBaseState<
  TFormValues extends Record<string, any> = Record<string, any>
> = {
  /**
   * The name of the form.
   */
  name: string;

  /**
   * The disabled state value.
   */
  disabled: boolean;

  /**
   * A flag indicating whether the field is currently being validated.
   */
  validating: boolean;

  /**
   * The results of the form validation.
   */
  validationResults: ValidationResults;

  /**
   * A flag indicating whether the form is currently being submitted.
   */
  submitting: boolean;

  /**
   * A flag indicating whether the form has been submitted.
   */
  submitted: boolean;

  /**
   * The number of times the form has been submitted.
   */
  submitAttempts: number;

  /**
   * The disabled state value.
   */
  disabledFields: InferFormState<TFormValues, boolean>;

  /**
   * The required state value.
   */
  requiredFields: InferFormState<TFormValues, boolean>;

  /**
   * The focused state value.
   */
  focusedFields: InferFormState<TFormValues, boolean>;

  /**
   * A flag indicating whether the field has been touched.
   */
  touchedFields: InferFormState<TFormValues, boolean>;

  /**
   * A flag indicating whether the field has been blurred.
   */
  blurredFields: InferFormState<TFormValues, boolean>;

  /**
   * A flag indicating whether the field is currently being validated.
   */
  validatingFields: InferFormState<TFormValues, boolean>;

  /**
   * The results of the field validation.
   */
  validationResultsFields: InferFormState<TFormValues, ValidationResults>;

  /**
   * The field group's initial values.
   */
  initialValues: FormValuesState<TFormValues>;

  /**
   * The field group's previous values.
   */
  previousValues: FormValuesState<TFormValues>;

  /**
   * The field group's current values.
   */
  values: FormValuesState<TFormValues>;

  /**
   * The options provided when creating the form.
   */
  options: FormOptions<TFormValues>;
};

/**
 * The field options.
 */
export type FieldOptions<
  TFieldValue = any,
  TValidator extends Validator<TFieldValue> = Validator<TFieldValue>
> = {
  name: string;
  mode?: "value" | "array";
  theme?: string;
  required?: boolean;
  disabled?: boolean;
  items?: SelectOption[];
  valueType?: FieldValueType;
  validate?: Record<
    `on${Capitalize<ValidationCause>}`,
    TValidator[] | undefined
  >;
  debounceMs?: number;
  onInitialize?: () => MaybePromise<void>;
  onBlur?: () => MaybePromise<void>;
  onFocus?: () => MaybePromise<void>;
  onChange?: (value: TFieldValue) => MaybePromise<void>;
};

// export type InferFieldValue<TFieldOptions extends FieldOptions> =
//   TFieldOptions["valueType"] extends "string"
//     ? string
//     : TFieldOptions["valueType"] extends "boolean"
//       ? boolean
//       : NonNullable<TFieldOptions["defaultValue"]> | null;

export type FieldBaseState<TFieldValue = any> = {
  /**
   * Internal value used by the Framework to identify the field.
   */
  // scope: string | null;

  /**
   * The name of the field.
   *
   * @remarks
   * This is the name of the field nested inside internal objects/arrays (if they exist).
   */
  name: string;

  /**
   * The path segments of the name of the field.
   */
  path: string[];

  /**
   * The disabled state value.
   */
  disabled: InferFieldState<TFieldValue, boolean>;

  /**
   * The required state value.
   */
  required: InferFieldState<TFieldValue, boolean>;

  /**
   * The focused state value.
   */
  focused: InferFieldState<TFieldValue, boolean>;

  /**
   * A flag indicating whether the field has been touched.
   */
  touched: InferFieldState<TFieldValue, boolean>;

  /**
   * A flag indicating whether the field has been blurred.
   */
  blurred: InferFieldState<TFieldValue, boolean>;

  /**
   * A flag indicating whether the field is currently being validated.
   */
  validating: InferFieldState<TFieldValue, boolean>;

  /**
   * The results of the field validation.
   */
  validationResults: InferFieldState<TFieldValue, ValidationResults>;

  /**
   * The field group's initial values.
   */
  initialValue: TFieldValue | null;

  /**
   * The field group's previous values.
   */
  previousValue: TFieldValue | null;

  /**
   * The field group's current values.
   */
  value: TFieldValue | null;

  /**
   * A list of options for the field.
   */
  items: SelectOption[];

  /**
   * The options provided when creating the field.
   */
  options: FieldOptions<TFieldValue>;
};

export type FieldState<TFieldValue = any> = FieldBaseState<TFieldValue> & {
  /**
   * The theme state value.
   */
  theme: string;

  /**
   * A flag that is `true` if the field's value has not been modified by the user. Opposite of `dirty`.
   */
  pristine: boolean;

  /**
   * A flag that is `true` if the field's value has been modified by the user. Opposite of `pristine`.
   */
  dirty: boolean;
};
