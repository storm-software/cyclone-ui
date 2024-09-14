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

import type { AtomRecord } from "@cyclone-ui/state";
import type {
  DeepKey,
  ErrorMessageDetails,
  InfoMessageDetails,
  IsUndefined,
  MessageDetails,
  MessageType,
  Nullable,
  RequiredByKey,
  SuccessMessageDetails,
  WarningMessageDetails
} from "@storm-stack/types";
import type { Atom } from "jotai/vanilla/atom";
import type { AtomFamily } from "jotai/vanilla/utils/atomFamily";
import type { SetStateAction } from "react";
import { atomWithDebounce, createAtomStore } from "@cyclone-ui/state";
import { filterEmpty, isNullish } from "@storm-stack/types";
import {
  deepMerge,
  isEmpty,
  isFunction,
  isPrimitive,
  upperCaseFirst
} from "@storm-stack/utilities";
import { atom } from "jotai/vanilla/atom";
import {
  RESET,
  atomFamily,
  atomWithDefault,
  atomWithReset
} from "jotai/vanilla/utils";
import type {
  FieldBaseState,
  FieldOptions,
  FieldValidateFn,
  FieldValidateOrFn,
  InferFieldValue,
  ValidationCause,
  ValidationResult,
  ValidationResultMapKeys,
  Validator
} from "../types";

export type SetValueAction<
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
  options?: {
    /**
     * If `false`, the field's `value` will **not** be updated if `isDisabled` is set to `true`.
     *
     * @defaultValue true
     */
    ignoreDisabled?: boolean;

    /**
     * If `true`, the field will be marked as touched when the `value` changes.
     *
     * @defaultValue false
     */
    touch?: boolean;
  };
  value:
    | SetStateAction<
        IsUndefined<TFieldOptions["parse"]> extends true ? TFieldValue : unknown
      >
    | typeof RESET;
};

export type ValidateAction<
  TFormValues extends Record<string, unknown>,
  TFieldName extends DeepKey<TFormValues>,
  // eslint-disable-next-line no-unused-vars
  _TFieldValidator extends
    | Validator<InferFieldValue<TFormValues, TFieldName>, unknown>
    | undefined = undefined,
  // eslint-disable-next-line no-unused-vars
  _TFormValidator extends
    | Validator<TFormValues, unknown>
    | undefined = undefined,
  TFieldValue extends InferFieldValue<
    TFormValues,
    TFieldName
  > = InferFieldValue<TFormValues, TFieldName>
> = {
  options: {
    /**
     * The cause of the validation.
     */
    cause: ValidationCause;
  };

  value: TFieldValue;
};

const getDefaultFieldAtoms = <
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
>(
  options: TFieldOptions
): AtomRecord<
  FieldBaseState<
    TFormValues,
    TFieldName,
    TFieldValidator,
    TFormValidator,
    TFormName,
    TFieldValue,
    TFieldOptions
  >
> => {
  const optionsAtom = atomWithReset<RequiredByKey<TFieldOptions, "areEqual">>({
    areEqual: Object.is,
    ...options
  });
  const initialValueAtom = atom<TFieldValue>(get => {
    const opts = get(optionsAtom);
    const initialValue = opts.defaultState?.value ?? opts.defaultValue;

    return (
      isPrimitive(initialValue) ? initialValue ?? null : initialValue
    ) as TFieldValue;
  });
  const initialStateAtom = atom<
    FieldBaseState<
      TFormValues,
      TFieldName,
      TFieldValidator,
      TFormValidator,
      TFormName,
      TFieldValue,
      TFieldOptions
    >
  >(get => {
    const opts = get(optionsAtom);

    return deepMerge(
      {
        formId: "form",
        isDisabled: false,
        isFocused: false,
        isRequired: false,
        isTouched: false,
        isValidating: false,
        options: opts,
        validationResults: {
          meta: {
            onBlur: undefined,
            onChange: undefined,
            onMount: undefined,
            onServer: undefined,
            onSubmit: undefined
          },
          resultMap: {
            onBlur: [],
            onChange: [],
            onMount: [],
            onServer: [],
            onSubmit: []
          }
        },
        value: get(initialValueAtom)
      },
      opts.defaultState
    );
  });

  const validationResultsAtom = atomWithDefault(
    get => get(initialStateAtom).validationResults
  );

  const _isTouchedBaseAtom = atomWithDefault(
    get => get(initialStateAtom).isTouched
  );
  const isTouchedAtom = atom(
    get => get(_isTouchedBaseAtom),
    (_get, set, next: SetStateAction<boolean> | typeof RESET) => {
      set(_isTouchedBaseAtom, isNullish(next) || next);
    }
  );

  const _isFocusedBaseAtom = atomWithDefault(
    get => get(initialStateAtom).isFocused
  );
  const isFocusedAtom = atom(
    get => get(_isFocusedBaseAtom),
    (_get, set, next: SetStateAction<boolean> | typeof RESET) => {
      set(_isFocusedBaseAtom, isNullish(next) || next);
    }
  );

  const isValidatingAtom = atomWithDefault(
    get => get(initialStateAtom).isValidating
  );

  const isRequiredAtom = atomWithDefault(
    get => get(initialStateAtom).isRequired
  );

  const isDisabledAtom = atomWithDefault(
    get => get(initialStateAtom).isDisabled
  );

  const _valueBaseAtom = atomWithDefault(get => get(initialValueAtom));
  const previousValueAtom = atomWithReset<Nullable<TFieldValue>>(null);
  const valueAtom = atom(
    get => get(_valueBaseAtom),
    (
      get,
      set,
      action: SetValueAction<
        TFormValues,
        TFieldName,
        TFieldValidator,
        TFormValidator,
        TFormName,
        TFieldValue,
        TFieldOptions
      >
    ) => {
      const { ignoreDisabled, touch } = action.options ?? {};

      if (!get(isDisabledAtom) || ignoreDisabled !== false) {
        if (touch) {
          set(isTouchedAtom, true);
        }

        const { parse, areEqual } = get(optionsAtom);

        if (action.value === RESET) {
          set(previousValueAtom, RESET);
          set(_valueBaseAtom, RESET);
        } else {
          const previousValue = get(_valueBaseAtom);

          let nextValue = isFunction(action.value)
            ? action.value(previousValue)
            : action.value;
          if (parse && isFunction(parse)) {
            nextValue = parse(nextValue);
          }

          if (!areEqual?.(nextValue as TFieldValue, previousValue)) {
            set(previousValueAtom, previousValue);
            set(_valueBaseAtom, nextValue as TFieldValue);
          }
        }
      }
    }
  );

  return {
    initialState: initialStateAtom,
    initialValue: initialValueAtom,
    isDisabled: isDisabledAtom,
    isFocused: isFocusedAtom,
    isRequired: isRequiredAtom,
    isTouched: isTouchedAtom,
    isValidating: isValidatingAtom,
    options: optionsAtom,
    previousValue: previousValueAtom,
    validationResults: validationResultsAtom,
    value: valueAtom
  };
};

const getMessageTypeAtoms = <
  TMessageType extends MessageType,
  TMessageDetails extends TMessageType extends "error"
    ? ErrorMessageDetails
    : TMessageType extends "warning"
      ? WarningMessageDetails
      : TMessageType extends "info"
        ? InfoMessageDetails
        : TMessageType extends "success"
          ? SuccessMessageDetails
          : MessageDetails = TMessageType extends "error"
    ? ErrorMessageDetails
    : TMessageType extends "warning"
      ? WarningMessageDetails
      : TMessageType extends "info"
        ? InfoMessageDetails
        : TMessageType extends "success"
          ? SuccessMessageDetails
          : MessageDetails
>(
  resultMapAtom: AtomFamily<
    MessageType,
    Atom<Partial<Record<ValidationResultMapKeys, MessageDetails[]>>>
  >,
  type: TMessageType
): [
  Atom<Partial<Record<ValidationResultMapKeys, TMessageDetails[]>>>,
  Atom<TMessageDetails[]>
] => {
  const messageMapAtom = atom<
    Partial<Record<ValidationResultMapKeys, TMessageDetails[]>>
  >(get => {
    const resultMap = get(resultMapAtom(type));

    return Object.keys(resultMap).reduce((ret, key) => {
      return {
        ...ret,
        [key]: resultMap[key]
      };
    }, {});
  });

  return [
    messageMapAtom,
    atom<TMessageDetails[]>(get => {
      const messageMap = get(messageMapAtom);

      const errors = [] as TMessageDetails[];
      if (messageMap.onMount) {
        errors.push(
          ...messageMap.onMount.filter(error =>
            errors.some(
              existing =>
                existing.message === error.message ||
                existing.code === error.code
            )
          )
        );
      }
      if (messageMap.onChange) {
        errors.push(
          ...messageMap.onChange.filter(error =>
            errors.some(
              existing =>
                existing.message === error.message ||
                existing.code === error.code
            )
          )
        );
      }
      if (messageMap.onBlur) {
        errors.push(
          ...messageMap.onBlur.filter(error =>
            errors.some(
              existing =>
                existing.message === error.message ||
                existing.code === error.code
            )
          )
        );
      }
      if (messageMap.onServer) {
        errors.push(
          ...messageMap.onServer.filter(error =>
            errors.some(
              existing =>
                existing.message === error.message ||
                existing.code === error.code
            )
          )
        );
      }
      if (messageMap.onSubmit) {
        errors.push(
          ...messageMap.onSubmit.filter(error =>
            errors.some(
              existing =>
                existing.message === error.message ||
                existing.code === error.code
            )
          )
        );
      }

      return errors;
    })
  ];
};

export const createFieldStore = <
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
>(
  options: TFieldOptions
) => {
  const result = createAtomStore<
    FieldBaseState<
      TFormValues,
      TFieldName,
      TFieldValidator,
      TFormValidator,
      TFormName,
      TFieldValue,
      TFieldOptions
    >
  >({
    ...options,
    name: `${options.formName}${upperCaseFirst(options.name) as Capitalize<TFieldName>}` as const,
    initialState: getDefaultFieldAtoms<
      TFormValues,
      TFieldName,
      TFieldValidator,
      TFormValidator,
      TFormName,
      TFieldValue,
      TFieldOptions
    >(options),
    selectors: atoms => {
      const debouncedValueAtom = atomWithDebounce<TFieldValue>(
        atoms.value,
        options.debounceMs,
        options.shouldDebounceOnReset
      );

      const maskedValueAtom = atom<string>(get => {
        const opts = get(atoms.options);

        return opts.mask
          ? opts.mask(get(atoms.value))
          : String(get(atoms.value));
      });

      const isDirtyAtom = atom(get => {
        const opts = get(atoms.options);
        const { areEqual } = opts;

        return Boolean(areEqual?.(get(atoms.value), get(atoms.initialValue)));
      });
      const isPristineAtom = atom(get => !get(isDirtyAtom));

      const resultMapAtom = atomFamily((type: MessageType) =>
        atom<Partial<Record<ValidationResultMapKeys, MessageDetails[]>>>(
          get => {
            const validationResults = get(atoms.validationResults);

            return Object.keys(validationResults.resultMap).reduce(
              (ret, key) => {
                return {
                  ...ret,
                  [key]: filterEmpty(
                    validationResults.resultMap[key as ValidationResultMapKeys]
                  ).filter(res => res.type === type)
                };
              },
              {}
            );
          }
        )
      );

      const [errorMapAtom, errorMessagesAtom] = getMessageTypeAtoms(
        resultMapAtom,
        "error"
      );
      const [warningMapAtom, warningMessagesAtom] = getMessageTypeAtoms(
        resultMapAtom,
        "warning"
      );
      const [infoMapAtom, infoMessagesAtom] = getMessageTypeAtoms(
        resultMapAtom,
        "info"
      );
      const [successMapAtom, successMessagesAtom] = getMessageTypeAtoms(
        resultMapAtom,
        "success"
      );

      const isValidAtom = atom(get => {
        return get(errorMessagesAtom).length === 0;
      });

      const validateAtom = atom<
        null,
        [
          ValidateAction<
            TFormValues,
            TFieldName,
            TFieldValidator,
            TFormValidator,
            TFieldValue
          >
        ],
        Promise<void>
      >(
        null,
        async (
          get,
          set,
          action: ValidateAction<
            TFormValues,
            TFieldName,
            TFieldValidator,
            TFormValidator,
            TFieldValue
          >
        ) => {
          const { validatorAdapter, validators } = get(atoms.options);
          if (!validators || isEmpty(validators)) {
            return;
          }

          let results = [] as ValidationResult[];

          const validate = validators[
            `on${upperCaseFirst(action.options.cause)}`
          ] as FieldValidateOrFn<
            TFormValues,
            TFieldName,
            TFieldValidator,
            TFormValidator,
            TFieldValue
          >;
          results =
            validatorAdapter && !isFunction(validate)
            validatorAdapter().validate(
              {
                    get,
                    previousValue: get(atoms.previousValue),
                set,
                    value: action.value
              },
                  validate
            ) :
            (
                  validate as FieldValidateFn<
                    TFormValues,
                    TFieldName,
                    TFieldValidator,
                    TFormValidator,
                    TFieldValue
                  >
            )({
                  get,
                  previousValue: get(atoms.previousValue),
              set,
                  value: action.value
                });

          const validateAsync = validators[
            `on${upperCaseFirst(action.options.cause)}Async`
          ] as FieldValidateOrFn<
            TFormValues,
            TFieldName,
            TFieldValidator,
            TFormValidator,
            TFieldValue
          >;
          if (validatorAdapter && !isFunction(validateAsync)) {
            results.push(
              ...(await validatorAdapter().validateAsync(
                {
                  get,
                  previousValue: get(atoms.previousValue),
                  set,
                  value: action.value
                },
                validateAsync
              ))
            );
          } else {
            results.push(
              ...(
                validateAsync as FieldValidateFn<
                  TFormValues,
                  TFieldName,
                  TFieldValidator,
                  TFormValidator,
                  TFieldValue
                >
              )({
                get,
                previousValue: get(atoms.previousValue),
                set,
                value: action.value
              })
            );
          }

          set(atoms.validationResults, prev => ({
            ...prev,
            resultMap: {
              ...prev.resultMap,
              [`on${upperCaseFirst(action.options.cause)}`]: results
            }
          }));
        }
      );

      return {
        debouncedValue: debouncedValueAtom,
        errorMap: errorMapAtom,
        errorMessages: errorMessagesAtom,
        infoMap: infoMapAtom,
        infoMessages: infoMessagesAtom,
        isDirty: isDirtyAtom,
        isPristine: isPristineAtom,
        isValid: isValidAtom,
        maskedValue: maskedValueAtom,
        successMap: successMapAtom,
        successMessages: successMessagesAtom,
        warningMap: warningMapAtom,
        warningMessages: warningMessagesAtom,
        validate: validateAtom
      };
    }
  });

  return result;
};
