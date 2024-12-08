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

import { ColorThemeName } from "@cyclone-ui/colors";
import { AtomStoreApi } from "@cyclone-ui/state/utilities/create-atom-store";
import type { MaskitoOptions } from "@maskito/core";
import {
  IsPlainObject,
  MaybePromise,
  SelectOption,
  ValidationDetails
} from "@storm-stack/types";
import { SizeTokens, TamaguiTextElement } from "@tamagui/core";
import { Getter, Setter } from "jotai";
import { LegacyRef } from "react";

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
  BASE: ColorThemeName.BASE as FieldStatus,
  HELP: ColorThemeName.HELP as FieldStatus,
  SUCCESS: ColorThemeName.SUCCESS as FieldStatus,
  INFO: ColorThemeName.INFO as FieldStatus,
  WARNING: ColorThemeName.WARNING as FieldStatus,
  ERROR: ColorThemeName.DANGER as FieldStatus
};

// export type FieldValueType =
//   | "date"
//   | "time"
//   | "datetime"
//   | "string"
//   | "number"
//   | "boolean"
//   | "any";
// export const FieldValueType = {
//   DATE: "date" as FieldValueType,
//   TIME: "time" as FieldValueType,
//   DATETIME: "datetime" as FieldValueType,
//   STRING: "string" as FieldValueType,
//   NUMBER: "number" as FieldValueType,
//   BOOLEAN: "boolean" as FieldValueType,
//   ANY: "any" as FieldValueType
// };

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

export type FieldChangeEventHandler<TFieldValue = any> = (
  event: CustomEvent<TFieldValue>
) => any;

export type CallbackContext<
  TStore extends AtomStoreApi<any, any> = AtomStoreApi<any, any>
> = {
  get: Getter;
  set: Setter;
  store: TStore;
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

  /**
   * The validations to run on the form when certain events occur.
   */
  validate?: Record<
    `on${Capitalize<ValidationCause>}`,
    TValidator[] | undefined
  >;

  /**
   * How long to debounce the `onChange` event and validation calls in milliseconds.
   *
   * @defaultValue 250
   */
  debounceMs?: number;

  /**
   * A function that compares two sets of form values to determine if they are equal.
   *
   * @remarks
   * The default `isEqual` function is provided by the `@storm-stack/utilities` package.
   *
   * @defaultValue `isEqual`
   */
  isEqual?: (value1: TFormValues, value2: TFormValues) => boolean;

  /**
   * The default options provided to all fields when they are created.
   */
  defaultFieldOptions?: Partial<Omit<FieldOptions, "name" | "mode">>;

  /**
   * A callback that is called when the form is initialized.
   */
  onInitialize?: (context: CallbackContext) => MaybePromise<void>;

  /**
   * A callback that is called when the form is changed.
   */
  onChange?: (context: CallbackContext) => MaybePromise<void>;

  /**
   * A callback that is called when the form is submitted.
   */
  onSubmit?: (context: CallbackContext) => MaybePromise<void>;
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
   * A flag indicating whether the form is currently being validated.
   */
  formValidating: boolean;

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
   * The tab indexes for the fields.
   */
  tabIndexes: InferFormState<TFormValues, number>;

  /**
   * The references of the form's fields.
   */
  refs: InferFormState<TFormValues, LegacyRef<TamaguiTextElement>>;

  /**
   * The field group's initial values.
   */
  initialValues: FormValuesState<TFormValues>;

  /**
   * The field group's current values.
   */
  values: FormValuesState<TFormValues>;

  /**
   * The options provided when creating the form.
   */
  options: FormOptions<TFormValues> &
    Required<
      Pick<FormOptions<TFormValues>, "isEqual" | "debounceMs" | "validate">
    >;
};

/**
 * The field options.
 */
export type FieldOptions<
  TFieldValue = any,
  TValidator extends Validator<TFieldValue> = Validator<TFieldValue>
> = {
  /**
   * The name of the field.
   */
  name: string;

  /**
   * The default theme of the field.
   */
  theme?: string;

  /**
   * The default size of the field.
   *
   * @defaultValue "$true"
   */
  size?: SizeTokens;

  /**
   * The default required status of the field.
   *
   * @defaultValue false
   */
  required?: boolean;

  /**
   * The default disabled status of the field.
   *
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * The options to be used as potential values for the field.
   *
   * @remarks
   * This is only used for certain fields (e.g. `Select`, `RadioGroup`, etc.).
   */
  items?: Array<Partial<SelectOption> & Pick<SelectOption, "name" | "value">>;

  /**
   * The validations to run on the field when certain events occur.
   */
  validate?: Record<
    `on${Capitalize<ValidationCause>}`,
    TValidator[] | undefined
  >;

  /**
   * How long to debounce the `onChange` event and validation calls in milliseconds.
   *
   * @defaultValue 250
   */
  debounceMs?: number;

  /**
   * A function that compares two field values to determine if they are equal.
   *
   * @remarks
   * The default `isEqual` function is provided by the `@storm-stack/utilities` package.
   *
   * @defaultValue `isEqual`
   */
  isEqual?: (value1: TFieldValue, value2: TFieldValue) => boolean;

  /**
   * The options provided to the Maskito library when masking user input
   *
   * @remarks
   * More information can be found in the [Maskito documentation](https://maskito.dev/core-concepts/overview).
   *
   * API reference: https://github.com/taiga-family/maskito/blob/main/projects/core/src/lib/types/mask-options.ts
   */
  mask?: MaskitoOptions;

  /**
   * A callback that is called when the field is initialized.
   */
  onInitialize?: (context: CallbackContext) => MaybePromise<void>;

  /**
   * A callback that is called when the field is blurred.
   */
  onBlur?: (context: CallbackContext) => MaybePromise<void>;

  /**
   * A callback that is called when the field is focused.
   */
  onFocus?: (context: CallbackContext) => MaybePromise<void>;

  /**
   * A callback that is called when the field is changed.
   */
  onChange?: (context: CallbackContext) => MaybePromise<void>;

  /**
   * A callback that is called when the field is submitted.
   */
  onSubmit?: (context: CallbackContext) => MaybePromise<void>;

  /**
   * A function that formats the field value for display.
   */
  format?: (value: TFieldValue) => string;

  /**
   * A function that parses the field value for storage.
   */
  parse?: (value: any) => TFieldValue;

  [key: string]: any;
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
   * The tab index of the field.
   */
  tabIndex: InferFieldState<TFieldValue, number>;

  /**
   * The reference of the field.
   */
  ref: InferFieldState<TFieldValue, LegacyRef<TamaguiTextElement>>;

  /**
   * The field group's initial values.
   */
  initialValue: TFieldValue | null;

  /**
   * The field group's current values.
   */
  value: TFieldValue | null;

  /**
   * The options provided when creating the field.
   */
  options: FieldOptions<TFieldValue> &
    Required<
      Pick<
        FieldOptions<TFieldValue>,
        "size" | "disabled" | "required" | "isEqual" | "debounceMs" | "validate"
      >
    >;
};

export type FieldState<TFieldValue = any> = FieldBaseState<TFieldValue> & {
  /**
   * The theme state value.
   */
  theme: string;

  /**
   * The size state value.
   */
  size: SizeTokens;

  /**
   * A flag that is `true` if the field's value has not been modified by the user. Opposite of `dirty`.
   */
  pristine: boolean;

  /**
   * A flag that is `true` if the field's value has been modified by the user. Opposite of `pristine`.
   */
  dirty: boolean;
};
