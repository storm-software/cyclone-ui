import type { FieldValidators, FormValidators, ValidationCause } from "./types";

export function isNonEmptyArray(obj: any) {
  return !(Array.isArray(obj) && obj.length === 0);
}

interface AsyncValidatorArrayPartialOptions<T> {
  validators?: T;
  asyncDebounceMs?: number;
}

export interface AsyncValidator<T> {
  cause: ValidationCause;
  validate: T;
  debounceMs: number;
}

export function getAsyncValidatorArray<T>(
  cause: ValidationCause,
  options: AsyncValidatorArrayPartialOptions<T>
): T extends FieldValidators<any, any>
  ? Array<
      AsyncValidator<T["onChangeAsync"] | T["onBlurAsync"] | T["onSubmitAsync"]>
    >
  : T extends FormValidators<any, any>
    ? Array<
        AsyncValidator<
          T["onChangeAsync"] | T["onBlurAsync"] | T["onSubmitAsync"]
        >
      >
    : never {
  const { asyncDebounceMs } = options;
  const {
    onChangeAsync,
    onBlurAsync,
    onSubmitAsync,
    onBlurAsyncDebounceMs,
    onChangeAsyncDebounceMs
  } = (options.validators || {}) as
    | FieldValidators<any, any>
    | FormValidators<any, any>;

  const defaultDebounceMs = asyncDebounceMs ?? 0;

  const changeValidator = {
    cause: "change",
    validate: onChangeAsync,
    debounceMs: onChangeAsyncDebounceMs ?? defaultDebounceMs
  } as const;

  const blurValidator = {
    cause: "blur",
    validate: onBlurAsync,
    debounceMs: onBlurAsyncDebounceMs ?? defaultDebounceMs
  } as const;

  const submitValidator = {
    cause: "submit",
    validate: onSubmitAsync,
    debounceMs: 0
  } as const;

  const noopValidator = (
    validator:
      | typeof changeValidator
      | typeof blurValidator
      | typeof submitValidator
  ) => ({ ...validator, debounceMs: 0 }) as const;

  switch (cause) {
    case "submit":
      return [
        noopValidator(changeValidator),
        noopValidator(blurValidator),
        submitValidator
      ] as never;
    case "blur":
      return [blurValidator] as never;
    case "change":
      return [changeValidator] as never;
    case "server":
    default:
      return [] as never;
  }
}

interface SyncValidatorArrayPartialOptions<T> {
  validators?: T;
}

export interface SyncValidator<T> {
  cause: ValidationCause;
  validate: T;
}

export function getSyncValidatorArray<T>(
  cause: ValidationCause,
  options: SyncValidatorArrayPartialOptions<T>
): T extends FieldValidators<any, any>
  ? Array<SyncValidator<T["onChange"] | T["onBlur"] | T["onSubmit"]>>
  : T extends FormValidators<any, any>
    ? Array<SyncValidator<T["onChange"] | T["onBlur"] | T["onSubmit"]>>
    : never {
  const { onChange, onBlur, onSubmit } = (options.validators || {}) as
    | FieldValidators<any, any>
    | FormValidators<any, any>;

  const changeValidator = { cause: "change", validate: onChange } as const;
  const blurValidator = { cause: "blur", validate: onBlur } as const;
  const submitValidator = { cause: "submit", validate: onSubmit } as const;

  // Allows us to clear onServer errors
  const serverValidator = {
    cause: "server",
    validate: () => undefined
  } as const;

  switch (cause) {
    case "submit":
      return [
        changeValidator,
        blurValidator,
        submitValidator,
        serverValidator
      ] as never;
    case "server":
      return [serverValidator] as never;
    case "blur":
      return [blurValidator, serverValidator] as never;
    case "change":
    default:
      return [changeValidator, serverValidator] as never;
  }
}
