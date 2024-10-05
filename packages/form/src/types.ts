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
import { MaybePromise, MessageDetails, SelectOption } from "@storm-stack/types";

/**
 * "server" is only intended for SSR/SSG validation and should not execute anything
 */
export type ValidationCause = "change" | "blur" | "submit" | "mount" | "server";
export const ValidationCause = {
  CHANGE: "change" as ValidationCause,
  BLUR: "blur" as ValidationCause,
  SUBMIT: "submit" as ValidationCause,
  MOUNT: "mount" as ValidationCause,
  SERVER: "server" as ValidationCause
};

export type Validator<TValue = any> = (
  value: TValue,
  previousValue?: TValue
) => MaybePromise<MessageDetails[]>;

export type FieldValidationResults = Record<ValidationCause, MessageDetails[]>;

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
  initialValue?: TFieldValue;
  valueType?: FieldValueType;
  validate?: Record<
    `on${Capitalize<ValidationCause>}`,
    TValidator[] | undefined
  >;
  debounceMs?: number;
  onMount?: () => MaybePromise<void>;
  onBlur?: () => MaybePromise<void>;
  onFocus?: () => MaybePromise<void>;
  onChange?: (value: TFieldValue) => MaybePromise<void>;
};

export type InferFieldValue<TFieldOptions extends FieldOptions> =
  TFieldOptions["valueType"] extends "string"
    ? string
    : TFieldOptions["valueType"] extends "boolean"
      ? boolean
      : NonNullable<TFieldOptions["initialValue"]> | null;

export type FieldBaseState<
  TFieldOptions extends FieldOptions,
  TFieldValue extends
    InferFieldValue<TFieldOptions> = InferFieldValue<TFieldOptions>
> = {
  /**
   * The name of the field.
   */
  name: string;

  /**
   * The name of the form.
   */
  formName: string;

  /**
   * The disabled state value.
   */
  disabled: boolean;

  /**
   * The required state value.
   */
  required: boolean;

  /**
   * The focused state value.
   */
  focused: boolean;

  /**
   * A flag indicating whether the field has been touched.
   */
  touched: boolean;

  /**
   * A flag indicating whether the field has been blurred.
   */
  blurred: boolean;

  /**
   * A flag indicating whether the field is currently being validated.
   */
  validating: boolean;

  /**
   * The results of the field validation.
   */
  validationResults: FieldValidationResults;

  /**
   * A list of options for the field.
   */
  items: SelectOption[];

  /**
   * The field's initial value.
   */
  initialValue: TFieldValue | null;

  /**
   * The field's previous value.
   */
  previousValue: TFieldValue | null;

  /**
   * The field's current value.
   */
  value: TFieldValue;

  /**
   * The options provided when creating the field.
   */
  options: TFieldOptions;
};

export type FieldState<
  TFieldOptions extends FieldOptions,
  TFieldValue extends
    InferFieldValue<TFieldOptions> = InferFieldValue<TFieldOptions>
> = FieldBaseState<TFieldOptions, TFieldValue> & {
  /**
   * The theme state value.
   */
  theme: string;

  /**
   * A flag that is `true` if the field's value has not been modified by the user. Opposite of `isDirty`.
   */
  pristine: boolean;

  /**
   * A flag that is `true` if the field's value has been modified by the user. Opposite of `isPristine`.
   */
  dirty: boolean;
};
