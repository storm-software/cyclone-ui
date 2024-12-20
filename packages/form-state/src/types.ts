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
import {
  AtomRecord,
  SetStateActionWithReset,
  SplitAtomAction
} from "@cyclone-ui/state";
import { MoleculeState } from "@cyclone-ui/state/utilities/create-molecule";
import type { MaskitoOptions } from "@maskito/core";
import {
  IsPlainObject,
  MaybePromise,
  SelectOption,
  SelectOptionValue,
  ValidationDetails
} from "@storm-stack/types";
import type {
  Atom,
  Getter,
  PrimitiveAtom,
  SetStateAction,
  Setter,
  WritableAtom
} from "jotai";
import { RESET } from "jotai/utils";
import { Ref } from "react";

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

export type FormValuesState<TValues extends Record<string, any>> = TValues & {
  [TKey in keyof TValues]: IsPlainObject<TValues[TKey]> extends true
    ? FormValuesState<TValues[TKey]>
    : TValues[TKey] | null;
};

export type FieldChangeEventHandler<TFieldValue = any> = (
  event: CustomEvent<TFieldValue>
) => any;

export type CallbackContext<TState extends AtomRecord<any> = AtomRecord<any>> =
  {
    get: Getter;
    set: Setter;
    atoms: MoleculeState<TState>;
  };

/**
 * The form options.
 */
export type FormOptions<
  TFormValues extends Record<string, any> = Record<string, any>
> = {
  /**
   * The theme of the form.
   */
  theme?: string;

  /**
   * The disabled state value.
   *
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * The initial values of the form.
   */
  initialValues?: FormValuesState<TFormValues>;

  /**
   * The validations to run on the form when certain events occur.
   */
  validate?: Record<
    `on${Capitalize<ValidationCause>}`,
    Validator<FormValuesState<TFormValues>>[] | undefined
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
  isEqual?: (
    value1: FormValuesState<TFormValues>,
    value2: FormValuesState<TFormValues>
  ) => boolean;

  /**
   * The default options provided to all fields when they are created.
   */
  defaultFieldOptions?: Partial<
    Omit<FieldOptions<TFormValues>, "name" | "mode">
  >;

  /**
   * A callback that is called when the form is initialized.
   */
  onInitialize?: (
    context: CallbackContext<FormAtoms<TFormValues>>
  ) => MaybePromise<void>;

  /**
   * A callback that is called when the form is changed.
   */
  onChange?: (
    context: CallbackContext<FormAtoms<TFormValues>>
  ) => MaybePromise<void>;

  /**
   * A callback that is called when the form is submitted.
   */
  onSubmit?: (
    context: CallbackContext<FormAtoms<TFormValues>>
  ) => MaybePromise<void>;
};

export type FormOptionsState<
  TFormValues extends Record<string, any> = Record<string, any>
> = FormOptions<TFormValues> &
  Required<
    Pick<
      FormOptions<TFormValues>,
      | "theme"
      | "debounceMs"
      | "isEqual"
      | "disabled"
      | "initialValues"
      | "defaultFieldOptions"
    >
  >;

export type FormAtoms<
  TFormValues extends Record<string, any> = Record<string, any>
> = {
  options: WritableAtom<
    FormOptionsState<TFormValues>,
    [SetStateActionWithReset<FormOptions<TFormValues>>],
    void
  >;

  name: Atom<string>;

  initialValues: WritableAtom<
    FormValuesState<TFormValues>,
    [typeof RESET | SetStateAction<FormValuesState<TFormValues>>],
    void
  >;
  previousValues: Atom<FormValuesState<TFormValues>>;
  values: WritableAtom<
    FormValuesState<TFormValues>,
    [typeof RESET | SetStateAction<FormValuesState<TFormValues>>],
    void
  >;

  disabled: WritableAtom<
    boolean,
    [typeof RESET | SetStateAction<boolean>],
    void
  >;
  formValidating: WritableAtom<
    boolean,
    [SetStateActionWithReset<boolean>],
    void
  >;
  validationResults: WritableAtom<
    ValidationResults,
    [SetStateActionWithReset<ValidationResults>],
    void
  >;
  submitting: WritableAtom<boolean, [SetStateActionWithReset<boolean>], void>;
  submitted: WritableAtom<boolean, [SetStateActionWithReset<boolean>], void>;
  submitAttempts: WritableAtom<number, [SetStateActionWithReset<number>], void>;

  focusedFields: WritableAtom<
    InferFormState<TFormValues, boolean>,
    [SetStateActionWithReset<InferFormState<TFormValues, boolean>>],
    void
  >;
  requiredFields: WritableAtom<
    InferFormState<TFormValues, boolean>,
    [SetStateActionWithReset<InferFormState<TFormValues, boolean>>],
    void
  >;
  disabledFields: WritableAtom<
    InferFormState<TFormValues, boolean>,
    [SetStateActionWithReset<InferFormState<TFormValues, boolean>>],
    void
  >;
  touchedFields: WritableAtom<
    InferFormState<TFormValues, boolean>,
    [SetStateActionWithReset<InferFormState<TFormValues, boolean>>],
    void
  >;
  blurredFields: WritableAtom<
    InferFormState<TFormValues, boolean>,
    [SetStateActionWithReset<InferFormState<TFormValues, boolean>>],
    void
  >;
  validatingFields: WritableAtom<
    InferFormState<TFormValues, boolean>,
    [SetStateActionWithReset<InferFormState<TFormValues, boolean>>],
    void
  >;
  validationResultsFields: WritableAtom<
    InferFormState<TFormValues, ValidationResults>,
    [SetStateActionWithReset<InferFormState<TFormValues, ValidationResults>>],
    void
  >;
  tabIndexes: WritableAtom<
    InferFormState<TFormValues, number>,
    [
      | { field: string; tabIndex?: number }
      | SetStateActionWithReset<InferFormState<TFormValues, number>>
    ],
    void
  >;
  refs: WritableAtom<
    InferFormState<TFormValues, Ref<HTMLInputElement>>,
    [
      SetStateActionWithReset<
        InferFormState<TFormValues, Ref<HTMLInputElement>>
      >
    ],
    void
  >;

  dirty: Atom<boolean>;
  pristine: Atom<boolean>;

  blurred: Atom<boolean>;
  touched: Atom<boolean>;
  validating: Atom<boolean>;

  errorMessages: Atom<ValidationDetails<"error">[]>;
  warningMessages: Atom<ValidationDetails<"warning">[]>;
  infoMessages: Atom<ValidationDetails<"info">[]>;
  helpMessages: Atom<ValidationDetails<"help">[]>;
  successMessages: Atom<ValidationDetails<"success">[]>;
  messages: Atom<ValidationDetails[]>;

  errorFields: Atom<InferFieldState<TFormValues, ValidationDetails<"error">[]>>;
  warningFields: Atom<
    InferFieldState<TFormValues, ValidationDetails<"warning">[]>
  >;
  infoFields: Atom<InferFieldState<TFormValues, ValidationDetails<"info">[]>>;
  helpFields: Atom<InferFieldState<TFormValues, ValidationDetails<"help">[]>>;
  successFields: Atom<
    InferFieldState<TFormValues, ValidationDetails<"success">[]>
  >;

  fieldErrorMessages: Atom<ValidationDetails<"error">[]>;
  fieldWarningMessages: Atom<ValidationDetails<"warning">[]>;
  fieldInfoMessages: Atom<ValidationDetails<"info">[]>;
  fieldHelpMessages: Atom<ValidationDetails<"help">[]>;
  fieldsSuccessMessages: Atom<ValidationDetails<"success">[]>;

  valid: Atom<boolean>;
  invalid: Atom<boolean>;
  canSubmit: Atom<boolean>;
  theme: Atom<string>;
};

// export type FormBaseState<
//   TFormValues extends Record<string, any> = Record<string, any>
// > = {
//   /**
//    * The disabled state value.
//    */
//   disabled: boolean;

//   /**
//    * A flag indicating whether the form is currently being validated.
//    */
//   formValidating: boolean;

//   /**
//    * The results of the form validation.
//    */
//   validationResults: ValidationResults;

//   /**
//    * A flag indicating whether the form is currently being submitted.
//    */
//   submitting: boolean;

//   /**
//    * A flag indicating whether the form has been submitted.
//    */
//   submitted: boolean;

//   /**
//    * The number of times the form has been submitted.
//    */
//   submitAttempts: number;

//   /**
//    * The disabled state value.
//    */
//   disabledFields: InferFormState<TFormValues, boolean>;

//   /**
//    * The required state value.
//    */
//   requiredFields: InferFormState<TFormValues, boolean>;

//   /**
//    * The focused state value.
//    */
//   focusedFields: InferFormState<TFormValues, boolean>;

//   /**
//    * A flag indicating whether the field has been touched.
//    */
//   touchedFields: InferFormState<TFormValues, boolean>;

//   /**
//    * A flag indicating whether the field has been blurred.
//    */
//   blurredFields: InferFormState<TFormValues, boolean>;

//   /**
//    * A flag indicating whether the field is currently being validated.
//    */
//   validatingFields: InferFormState<TFormValues, boolean>;

//   /**
//    * The results of the field validation.
//    */
//   validationResultsFields: InferFormState<TFormValues, ValidationResults>;

//   /**
//    * The tab indexes for the fields.
//    */
//   tabIndexes: InferFormState<TFormValues, number>;

//   /**
//    * The references of the form's fields.
//    */
//   refs: InferFormState<TFormValues, LegacyRef<TamaguiTextElement>>;

//   /**
//    * The field group's initial values.
//    */
//   initialValues: FormValuesState<TFormValues>;

//   /**
//    * The field group's current values.
//    */
//   values: FormValuesState<TFormValues>;

//   /**
//    * The options provided when creating the form.
//    */
//   options: FormOptions<TFormValues> &
//     Required<
//       Pick<FormOptions<TFormValues>, "isEqual" | "debounceMs" | "validate">
//     >;
// };

/**
 * The field options.
 */
export type FieldOptions<TFieldValue> = {
  /**
   * The default theme of the field.
   */
  theme?: string;

  /**
   * The default size of the field.
   *
   * @defaultValue "$true"
   */
  size?:
    | `$${string}`
    | `$${string}.${string}`
    | `$${string}.${number}`
    | `$${number}`;

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
    Validator<TFieldValue>[] | undefined
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
  onInitialize?: (
    context: CallbackContext<FieldAtoms<TFieldValue>>
  ) => MaybePromise<void>;

  /**
   * A callback that is called when the field is blurred.
   */
  onBlur?: (
    context: CallbackContext<FieldAtoms<TFieldValue>>
  ) => MaybePromise<void>;

  /**
   * A callback that is called when the field is focused.
   */
  onFocus?: (
    context: CallbackContext<FieldAtoms<TFieldValue>>
  ) => MaybePromise<void>;

  /**
   * A callback that is called when the field is changed.
   */
  onChange?: (
    context: CallbackContext<FieldAtoms<TFieldValue>>
  ) => MaybePromise<void>;

  /**
   * A callback that is called when the field is submitted.
   */
  onSubmit?: (
    context: CallbackContext<FieldAtoms<TFieldValue>>
  ) => MaybePromise<void>;

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

export type FieldOptionsState<TFieldValue = any> = FieldOptions<TFieldValue> &
  Required<
    Pick<
      FieldOptions<TFieldValue>,
      | "theme"
      | "size"
      | "debounceMs"
      | "isEqual"
      | "disabled"
      | "required"
      | "initialValue"
    >
  >;

export type FieldAtoms<TFieldValue> = {
  options: WritableAtom<
    FieldOptionsState<TFieldValue>,
    [SetStateActionWithReset<FieldOptions<TFieldValue>>],
    void
  >;

  form: Atom<string>;
  name: Atom<string>;
  path: Atom<string[]>;

  focused: WritableAtom<
    InferFieldState<TFieldValue, boolean>,
    [SetStateAction<InferFieldState<TFieldValue, boolean>>],
    void
  >;
  required: WritableAtom<
    InferFieldState<TFieldValue, boolean>,
    [SetStateAction<InferFieldState<TFieldValue, boolean>>],
    void
  >;
  disabled: WritableAtom<
    InferFieldState<TFieldValue, boolean>,
    [SetStateAction<InferFieldState<TFieldValue, boolean>>],
    void
  >;
  touched: WritableAtom<
    InferFieldState<TFieldValue, boolean>,
    [SetStateAction<InferFieldState<TFieldValue, boolean>>],
    void
  >;
  blurred: WritableAtom<
    InferFieldState<TFieldValue, boolean>,
    [SetStateAction<InferFieldState<TFieldValue, boolean>>],
    void
  >;
  validating: WritableAtom<
    InferFieldState<TFieldValue, boolean>,
    [SetStateAction<InferFieldState<TFieldValue, boolean>>],
    void
  >;
  validationResults: WritableAtom<
    InferFieldState<TFieldValue, ValidationResults>,
    [SetStateAction<InferFieldState<TFieldValue, ValidationResults>>],
    void
  >;
  tabIndex: WritableAtom<
    InferFieldState<TFieldValue, number>,
    [SetStateAction<InferFieldState<TFieldValue, number>>],
    void
  >;
  ref: WritableAtom<
    InferFieldState<TFieldValue, Ref<HTMLInputElement>>,
    [SetStateAction<InferFieldState<TFieldValue, Ref<HTMLInputElement>>>],
    void
  >;

  pristine: Atom<boolean>;
  dirty: Atom<boolean>;

  previousValue: Atom<TFieldValue | null>;
  initialValue: WritableAtom<TFieldValue, [SetStateAction<TFieldValue>], void>;
  value: WritableAtom<TFieldValue, [SetStateAction<TFieldValue>], void>;
  formattedValue: Atom<string>;

  items: WritableAtom<
    SelectOption<SelectOptionValue, string>[],
    [SetStateAction<SelectOption<SelectOptionValue, string>[]>],
    void
  >;
  itemsAtoms: WritableAtom<
    PrimitiveAtom<SelectOption<SelectOptionValue, string>>[],
    [SplitAtomAction<SelectOption<SelectOptionValue, string>>],
    void
  >;

  size: WritableAtom<
    | `$${string}`
    | `$${string}.${string}`
    | `$${string}.${number}`
    | `$${number}`,
    [
      SetStateAction<
        | `$${string}`
        | `$${string}.${string}`
        | `$${string}.${number}`
        | `$${number}`
      >
    ],
    void
  >;

  errors: Atom<ValidationDetails<"error">[]>;
  warnings: Atom<ValidationDetails<"warning">[]>;
  info: Atom<ValidationDetails<"info">[]>;
  help: Atom<ValidationDetails<"help">[]>;
  success: Atom<ValidationDetails<"success">[]>;

  errorMessages: Atom<ValidationDetails<"error">[]>;
  warningMessages: Atom<ValidationDetails<"warning">[]>;
  infoMessages: Atom<ValidationDetails<"info">[]>;
  helpMessages: Atom<ValidationDetails<"help">[]>;
  successMessages: Atom<ValidationDetails<"success">[]>;

  theme: Atom<string>;
  messages: Atom<ValidationDetails[]>;

  invalid: Atom<boolean>;
  valid: Atom<boolean>;
};

// export type FieldBaseState<TFieldValue = any> = {
//   /**
//    * Internal value used by the Framework to identify the field.
//    */
//   // scope: string | null;

//   /**
//    * The name of the field.
//    *
//    * @remarks
//    * This is the name of the field nested inside internal objects/arrays (if they exist).
//    */
//   name: string;

//   /**
//    * The path segments of the name of the field.
//    */
//   path: string[];

//   /**
//    * The disabled state value.
//    */
//   disabled: InferFieldState<TFieldValue, boolean>;

//   /**
//    * The required state value.
//    */
//   required: InferFieldState<TFieldValue, boolean>;

//   /**
//    * The focused state value.
//    */
//   focused: InferFieldState<TFieldValue, boolean>;

//   /**
//    * A flag indicating whether the field has been touched.
//    */
//   touched: InferFieldState<TFieldValue, boolean>;

//   /**
//    * A flag indicating whether the field has been blurred.
//    */
//   blurred: InferFieldState<TFieldValue, boolean>;

//   /**
//    * A flag indicating whether the field is currently being validated.
//    */
//   validating: InferFieldState<TFieldValue, boolean>;

//   /**
//    * The results of the field validation.
//    */
//   validationResults: InferFieldState<TFieldValue, ValidationResults>;

//   /**
//    * The tab index of the field.
//    */
//   tabIndex: InferFieldState<TFieldValue, number>;

//   /**
//    * The reference of the field.
//    */
//   ref: InferFieldState<TFieldValue, LegacyRef<TamaguiTextElement>>;

//   /**
//    * The field group's initial values.
//    */
//   initialValue: TFieldValue | null;

//   /**
//    * The field group's current values.
//    */
//   value: TFieldValue | null;

//   /**
//    * The options provided when creating the field.
//    */
//   options: FieldOptions<TFieldValue> &
//     Required<
//       Pick<
//         FieldOptions<TFieldValue>,
//         "size" | "disabled" | "required" | "isEqual" | "debounceMs" | "validate"
//       >
//     >;
// };

// export type FieldState<TFieldValue = any> = FieldBaseState<TFieldValue> & {
//   /**
//    * The theme state value.
//    */
//   theme: string;

//   /**
//    * The size state value.
//    */
//   size: SizeTokens;

//   /**
//    * A flag that is `true` if the field's value has not been modified by the user. Opposite of `dirty`.
//    */
//   pristine: boolean;

//   /**
//    * A flag that is `true` if the field's value has been modified by the user. Opposite of `pristine`.
//    */
//   dirty: boolean;
// };
