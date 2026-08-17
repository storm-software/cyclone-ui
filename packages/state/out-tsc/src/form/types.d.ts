import type { MaskitoOptions } from "@maskito/core";
import type { MaybePromise } from "@stryke/types/base";
import type { SelectOption, SelectOptionValue } from "@stryke/types/form";
import type { IsPlainObject } from "@stryke/types/object";
import type { ValidationDetail as ValidationDetails } from "@stryke/types/validations";
import type { Atom, Getter, PrimitiveAtom, SetStateAction, Setter, WritableAtom } from "jotai";
import type { RESET } from "jotai/utils";
import type { Ref } from "react";
import type { MoleculeState } from "../base/utilities/create-molecule";
import type { AtomRecordConstraint, SetStateActionWithReset, SplitAtomAction } from "../types";
/**
 * "server" is only intended for SSR/SSG validation and should not execute anything
 */
export type ValidationCause = "initialize" | "change" | "blur" | "submit" | "server";
export declare const ValidationCause: {
    INITIALIZE: ValidationCause;
    CHANGE: ValidationCause;
    BLUR: ValidationCause;
    SUBMIT: ValidationCause;
    SERVER: ValidationCause;
};
export type Validator<TValue = any> = (value: TValue, previousValue: TValue, cause: ValidationCause, get: Getter, set: Setter) => MaybePromise<ValidationDetails[]>;
export type ValidationResults = Partial<Record<ValidationCause, ValidationDetails[]>>;
/**
 * The field status.
 */
export type FieldStatus = "base" | "help" | "success" | "info" | "warning" | "error";
export declare const FieldStatus: {
    BASE: FieldStatus;
    HELP: FieldStatus;
    SUCCESS: FieldStatus;
    INFO: FieldStatus;
    WARNING: FieldStatus;
    ERROR: FieldStatus;
};
export type InferFieldState<TValues, TState> = IsPlainObject<TValues> extends true ? {
    [TKey in keyof TValues]: InferFieldState<TValues[TKey], TState>;
} : TState;
export type InferFormState<TValues extends Record<string, any>, TState> = {
    [TKey in keyof TValues]: InferFieldState<TValues[TKey], TState>;
};
export type FormValuesState<TValues extends Record<string, any>> = TValues & {
    [TKey in keyof TValues]: IsPlainObject<TValues[TKey]> extends true ? FormValuesState<TValues[TKey]> : TValues[TKey] | null;
};
export type FieldChangeEventHandler<TFieldValue = any> = (event: CustomEvent<TFieldValue>) => any;
export interface CallbackContext<TState extends AtomRecordConstraint<TState> = Record<string, Atom<unknown>>> {
    get: Getter;
    set: Setter;
    atoms: MoleculeState<TState>;
}
/**
 * The form options.
 */
export interface FormOptions<TFormValues extends Record<string, any> = Record<string, any>> {
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
    validate?: Record<`on${Capitalize<ValidationCause>}`, Validator<FormValuesState<TFormValues>>[] | undefined>;
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
     * The default `isEqual` function is provided by the `@stryke/helpers` package.
     *
     * @defaultValue `isEqual`
     */
    isEqual?: (value1: FormValuesState<TFormValues>, value2: FormValuesState<TFormValues>) => boolean;
    /**
     * The default options provided to all fields when they are created.
     */
    defaultFieldOptions?: Partial<Omit<FieldOptions<TFormValues>, "name" | "mode">>;
    /**
     * A callback that is called when the form is initialized.
     */
    onInitialize?: (context: CallbackContext<FormAtoms<TFormValues>>) => MaybePromise<void>;
    /**
     * A callback that is called when the form is changed.
     */
    onChange?: (context: CallbackContext<FormAtoms<TFormValues>>) => MaybePromise<void>;
    /**
     * A callback that is called when the form is submitted.
     */
    onSubmit?: (context: CallbackContext<FormAtoms<TFormValues>>) => MaybePromise<void>;
}
export type FormOptionsState<TFormValues extends Record<string, any> = Record<string, any>> = FormOptions<TFormValues> & Required<Pick<FormOptions<TFormValues>, "theme" | "debounceMs" | "isEqual" | "disabled" | "initialValues" | "defaultFieldOptions">>;
export interface FormAtoms<TFormValues extends Record<string, any> = Record<string, any>> {
    options: WritableAtom<FormOptionsState<TFormValues>, [
        SetStateActionWithReset<FormOptions<TFormValues>>
    ], void>;
    name: Atom<string>;
    initialValues: WritableAtom<FormValuesState<TFormValues>, [
        typeof RESET | SetStateAction<FormValuesState<TFormValues>>
    ], void>;
    previousValues: Atom<FormValuesState<TFormValues>>;
    values: WritableAtom<FormValuesState<TFormValues>, [
        typeof RESET | SetStateAction<FormValuesState<TFormValues>>
    ], void>;
    disabled: WritableAtom<boolean, [
        typeof RESET | SetStateAction<boolean>
    ], void>;
    formValidating: WritableAtom<boolean, [
        SetStateActionWithReset<boolean>
    ], void>;
    validationResults: WritableAtom<ValidationResults, [
        SetStateActionWithReset<ValidationResults>
    ], void>;
    submitting: WritableAtom<boolean, [SetStateActionWithReset<boolean>], void>;
    submitted: WritableAtom<boolean, [SetStateActionWithReset<boolean>], void>;
    submitAttempts: WritableAtom<number, [SetStateActionWithReset<number>], void>;
    focusedFields: WritableAtom<InferFormState<TFormValues, boolean>, [
        SetStateActionWithReset<InferFormState<TFormValues, boolean>>
    ], void>;
    requiredFields: WritableAtom<InferFormState<TFormValues, boolean>, [
        SetStateActionWithReset<InferFormState<TFormValues, boolean>>
    ], void>;
    disabledFields: WritableAtom<InferFormState<TFormValues, boolean>, [
        SetStateActionWithReset<InferFormState<TFormValues, boolean>>
    ], void>;
    touchedFields: WritableAtom<InferFormState<TFormValues, boolean>, [
        SetStateActionWithReset<InferFormState<TFormValues, boolean>>
    ], void>;
    blurredFields: WritableAtom<InferFormState<TFormValues, boolean>, [
        SetStateActionWithReset<InferFormState<TFormValues, boolean>>
    ], void>;
    validatingFields: WritableAtom<InferFormState<TFormValues, boolean>, [
        SetStateActionWithReset<InferFormState<TFormValues, boolean>>
    ], void>;
    validationResultsFields: WritableAtom<InferFormState<TFormValues, ValidationResults>, [
        SetStateActionWithReset<InferFormState<TFormValues, ValidationResults>>
    ], void>;
    tabIndexes: WritableAtom<InferFormState<TFormValues, number>, [
        {
            field: string;
            tabIndex?: number;
        } | SetStateActionWithReset<InferFormState<TFormValues, number>>
    ], void>;
    refs: WritableAtom<InferFormState<TFormValues, Ref<HTMLInputElement>>, [
        SetStateActionWithReset<InferFormState<TFormValues, Ref<HTMLInputElement>>>
    ], void>;
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
    warningFields: Atom<InferFieldState<TFormValues, ValidationDetails<"warning">[]>>;
    infoFields: Atom<InferFieldState<TFormValues, ValidationDetails<"info">[]>>;
    helpFields: Atom<InferFieldState<TFormValues, ValidationDetails<"help">[]>>;
    successFields: Atom<InferFieldState<TFormValues, ValidationDetails<"success">[]>>;
    fieldErrorMessages: Atom<ValidationDetails<"error">[]>;
    fieldWarningMessages: Atom<ValidationDetails<"warning">[]>;
    fieldInfoMessages: Atom<ValidationDetails<"info">[]>;
    fieldHelpMessages: Atom<ValidationDetails<"help">[]>;
    fieldsSuccessMessages: Atom<ValidationDetails<"success">[]>;
    valid: Atom<boolean>;
    invalid: Atom<boolean>;
    canSubmit: Atom<boolean>;
    theme: Atom<string>;
}
/**
 * The field options.
 */
export interface FieldOptions<TFieldValue> {
    /**
     * The default theme of the field.
     */
    theme?: string;
    /**
     * The default size of the field.
     *
     * @defaultValue "$true"
     */
    size?: `$${string}` | `$${string}.${string}` | `$${string}.${number}` | `$${number}`;
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
    validate?: Record<`on${Capitalize<ValidationCause>}`, Validator<TFieldValue>[] | undefined>;
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
     * The default `isEqual` function is provided by the `@stryke/helpers` package.
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
    onInitialize?: (context: CallbackContext<FieldAtoms<TFieldValue>>) => MaybePromise<void>;
    /**
     * A callback that is called when the field is blurred.
     */
    onBlur?: (context: CallbackContext<FieldAtoms<TFieldValue>>) => MaybePromise<void>;
    /**
     * A callback that is called when the field is focused.
     */
    onFocus?: (context: CallbackContext<FieldAtoms<TFieldValue>>) => MaybePromise<void>;
    /**
     * A callback that is called when the field is changed.
     */
    onChange?: (context: CallbackContext<FieldAtoms<TFieldValue>>) => MaybePromise<void>;
    /**
     * A callback that is called when the field is submitted.
     */
    onSubmit?: (context: CallbackContext<FieldAtoms<TFieldValue>>) => MaybePromise<void>;
    /**
     * A function that formats the field value for display.
     */
    format?: (value: TFieldValue) => string;
    /**
     * A function that parses the field value for storage.
     */
    parse?: (value: any) => TFieldValue;
    [key: string]: any;
}
export type FieldOptionsState<TFieldValue = any> = FieldOptions<TFieldValue> & Required<Pick<FieldOptions<TFieldValue>, "theme" | "size" | "debounceMs" | "isEqual" | "disabled" | "required" | "initialValue">>;
export interface FieldAtoms<TFieldValue> {
    options: WritableAtom<FieldOptionsState<TFieldValue>, [
        SetStateActionWithReset<FieldOptions<TFieldValue>>
    ], void>;
    form: Atom<string>;
    name: Atom<string>;
    path: Atom<string[]>;
    focused: WritableAtom<InferFieldState<TFieldValue, boolean>, [
        SetStateAction<InferFieldState<TFieldValue, boolean>>
    ], void>;
    required: WritableAtom<InferFieldState<TFieldValue, boolean>, [
        SetStateAction<InferFieldState<TFieldValue, boolean>>
    ], void>;
    disabled: WritableAtom<InferFieldState<TFieldValue, boolean>, [
        SetStateAction<InferFieldState<TFieldValue, boolean>>
    ], void>;
    touched: WritableAtom<InferFieldState<TFieldValue, boolean>, [
        SetStateAction<InferFieldState<TFieldValue, boolean>>
    ], void>;
    blurred: WritableAtom<InferFieldState<TFieldValue, boolean>, [
        SetStateAction<InferFieldState<TFieldValue, boolean>>
    ], void>;
    validating: WritableAtom<InferFieldState<TFieldValue, boolean>, [
        SetStateAction<InferFieldState<TFieldValue, boolean>>
    ], void>;
    validationResults: WritableAtom<InferFieldState<TFieldValue, ValidationResults>, [
        SetStateAction<InferFieldState<TFieldValue, ValidationResults>>
    ], void>;
    tabIndex: WritableAtom<InferFieldState<TFieldValue, number>, [
        SetStateAction<InferFieldState<TFieldValue, number>>
    ], void>;
    ref: WritableAtom<InferFieldState<TFieldValue, Ref<HTMLInputElement>>, [
        SetStateAction<InferFieldState<TFieldValue, Ref<HTMLInputElement>>>
    ], void>;
    pristine: Atom<boolean>;
    dirty: Atom<boolean>;
    previousValue: Atom<TFieldValue | null>;
    initialValue: WritableAtom<TFieldValue, [SetStateAction<TFieldValue>], void>;
    value: WritableAtom<TFieldValue, [SetStateAction<TFieldValue>], void>;
    formattedValue: Atom<string>;
    items: WritableAtom<SelectOption<SelectOptionValue, string>[], [
        SetStateAction<SelectOption<SelectOptionValue, string>[]>
    ], void>;
    itemsAtoms: WritableAtom<PrimitiveAtom<SelectOption<SelectOptionValue, string>>[], [
        SplitAtomAction<SelectOption<SelectOptionValue, string>>
    ], void>;
    size: WritableAtom<`$${string}` | `$${string}.${string}` | `$${string}.${number}` | `$${number}`, [
        SetStateAction<`$${string}` | `$${string}.${string}` | `$${string}.${number}` | `$${number}`>
    ], void>;
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
}
//# sourceMappingURL=types.d.ts.map