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

import type { DeepKeys, DeepValue } from "@storm-stack/types";

import { Store } from "@tanstack/store";

import type {
  FieldApiOptions,
  FieldAsyncValidateOrFn,
  FieldComponent,
  FieldState,
  FieldValidateFn,
  FieldValidateOrFn,
  IFieldApi,
  ValidationCause,
  ValidationMessage,
  Validator
} from "./types";
import type { AsyncValidator, SyncValidator, Updater } from "./utils";

import { getAsyncValidatorArray, getBy, getSyncValidatorArray } from "./utils";

export class FieldApi<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TFieldValidator extends
    | Validator<DeepValue<TParentData, TName>, unknown>
    | undefined = undefined,
  TFormValidator extends
    | Validator<TParentData, unknown>
    | undefined = undefined,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>
> implements
    IFieldApi<TParentData, TName, TFieldValidator, TFormValidator, TData>
{
  _getMeta = () => this.form.getFieldMeta(this.name);

  Field!: FieldComponent<TParentData, TFormValidator>;

  form: FieldApiOptions<
    TParentData,
    TName,
    TFieldValidator,
    TFormValidator,
    TData
  >["form"];

  getInfo = () => this.form.getFieldInfo(this.name);

  getLinkedFields = (cause: ValidationCause) => {
    const fields = Object.values(this.form.fieldInfo);

    const linkedFields: FieldApi<any, any, any, any>[] = [];
    for (const field of fields) {
      if (!field.instance) continue;
      const { onBlurListenTo, onChangeListenTo } =
        field.instance.options.validators || {};
      if (
        cause === "change" &&
        onChangeListenTo?.includes(this.name as string)
      ) {
        linkedFields.push(field.instance);
      }
      if (cause === "blur" && onBlurListenTo?.includes(this.name as string)) {
        linkedFields.push(field.instance);
      }
    }

    return linkedFields;
  };

  getMeta = () =>
    this._getMeta() ??
    ({
      errorMap: {},
      errors: [],
      isDirty: false,
      isPristine: true,
      isTouched: false,
      isValidating: false,
      touchedErrors: [],
      ...this.options.defaultMeta
    } as FieldMeta);

  getValue = (): TData => {
    return this.form.getFieldValue(this.name) as TData;
  };

  handleBlur = () => {
    const prevTouched = this.state.meta.isTouched;
    if (!prevTouched) {
      this.setMeta(prev => ({ ...prev, isTouched: true }));
      this.validate("change");
    }
    this.validate("blur");
  };

  handleChange = (updater: Updater<TData>) => {
    this.setValue(updater, { touch: true });
  };

  insertValue = (
    index: number,
    value: TData extends any[] ? TData[number] : never,
    opts?: { touch?: boolean }
  ) => this.form.insertFieldValue(this.name, index, value as any, opts);

  mount = () => {
    const info = this.getInfo();
    info.instance = this as never;
    const unsubscribe = this.form.store.subscribe(() => {
      this.store.batch(() => {
        const nextValue = this.getValue();
        const nextMeta = this.getMeta();

        if (nextValue !== this.state.value) {
          this.store.setState(prev => ({ ...prev, value: nextValue }));
        }

        if (nextMeta !== this.state.meta) {
          this.store.setState(prev => ({ ...prev, meta: nextMeta }));
        }
      });
    });

    this.update(this.options as never);
    const { onMount } = this.options.validators || {};

    if (onMount) {
      const error = this.runValidator({
        type: "validate",
        validate: onMount,
        value: {
          fieldApi: this,
          value: this.state.value
        }
      });
      if (error) {
        this.setMeta(prev => ({
          ...prev,
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          errorMap: { ...prev?.errorMap, onMount: error }
        }));
      }
    }

    return () => {
      const { preserveValue } = this.options;
      unsubscribe();
      if (!preserveValue) {
        this.form.deleteField(this.name);
      }
    };
  };

  moveValue = (aIndex: number, bIndex: number, opts?: { touch?: boolean }) =>
    this.form.moveFieldValues(this.name, aIndex, bIndex, opts);

  name!: DeepKeys<TParentData>;

  options: FieldApiOptions<
    TParentData,
    TName,
    TFieldValidator,
    TFormValidator,
    TData
  > = {} as any;

  prevState!: FieldState<TData>;

  pushValue = (
    value: TData extends any[] ? TData[number] : never,
    opts?: { touch?: boolean }
  ) => this.form.pushFieldValue(this.name, value as any, opts);

  removeValue = (index: number, opts?: { touch: boolean }) =>
    this.form.removeFieldValue(this.name, index, opts);

  replaceValue = (
    index: number,
    value: TData extends any[] ? TData[number] : never,
    opts?: { touch?: boolean }
  ) => this.form.replaceFieldValue(this.name, index, value as any, opts);

  setMeta = (updater: Updater<FieldMeta>) =>
    this.form.setFieldMeta(this.name, updater);

  setValue = (
    updater: Updater<TData>,
    options?: { notify?: boolean; touch?: boolean }
  ) => {
    this.form.setFieldValue(this.name, updater as never, options);
    this.validate("change");
  };

  state!: FieldState<TData>;

  store!: Store<FieldState<TData>>;

  swapValues = (aIndex: number, bIndex: number, opts?: { touch?: boolean }) =>
    this.form.swapFieldValues(this.name, aIndex, bIndex, opts);

  update = (
    opts: FieldApiOptions<
      TParentData,
      TName,
      TFieldValidator,
      TFormValidator,
      TData
    >
  ) => {
    // Default Value

    if (this.state.value === undefined) {
      const formDefault = getBy(opts.form.options.defaultValues, opts.name);

      if (opts.defaultValue !== undefined) {
        this.setValue(opts.defaultValue as never);
      } else if (formDefault !== undefined) {
        this.setValue(formDefault as never);
      }
    }

    // Default Meta
    if (this._getMeta() === undefined) {
      this.setMeta(this.state.meta);
    }

    this.options = opts as never;
  };

  validate = (
    cause: ValidationCause
  ): Promise<ValidationMessage[]> | ValidationMessage[] => {
    // If the field is pristine and validatePristine is false, do not validate
    if (!this.state.meta.isTouched) return [];

    try {
      this.form.validate(cause);
    } catch {}

    // Attempt to sync validate first
    const { hasErrored } = this.validateSync(cause);

    if (hasErrored && !this.options.asyncAlways) {
      return this.state.meta.errors;
    }
    // No error? Attempt async validation
    return this.validateAsync(cause);
  };

  validateAsync = async (cause: ValidationCause) => {
    const validates = getAsyncValidatorArray(cause, this.options);

    const linkedFields = this.getLinkedFields(cause);
    const linkedFieldValidates = linkedFields.reduce(
      (acc, field) => {
        const fieldValidates = getAsyncValidatorArray(cause, field.options);
        for (const validate of fieldValidates) {
          (validate as any).field = field;
        }
        return acc.concat(fieldValidates as never);
      },
      [] as Array<{ field: FieldApi<any, any, any, any> } & AsyncValidator<any>>
    );

    if (!this.state.meta.isValidating) {
      this.setMeta(prev => ({ ...prev, isValidating: true }));
    }

    for (const linkedField of linkedFields) {
      linkedField.setMeta(prev => ({ ...prev, isValidating: true }));
    }

    /**
     * We have to use a for loop and generate our promises this way, otherwise it won't be sync
     * when there are no validators needed to be run
     */
    const validatesPromises: Promise<ValidationMessage | undefined>[] = [];
    const linkedPromises: Promise<ValidationMessage | undefined>[] = [];

    const validateFieldAsyncFn = (
      field: FieldApi<any, any, any, any>,
      validateObj: AsyncValidator<any>,
      promises: Promise<ValidationMessage | undefined>[]
    ) => {
      const key = getErrorMapKey(validateObj.cause);
      const fieldValidatorMeta = field.getInfo().validationMetaMap[key];

      fieldValidatorMeta?.lastAbortController.abort();
      const controller = new AbortController();

      this.getInfo().validationMetaMap[key] = {
        lastAbortController: controller
      };

      promises.push(
        new Promise<ValidationMessage | undefined>(async resolve => {
          let rawError!: ValidationMessage | undefined;
          try {
            rawError = await new Promise((rawResolve, rawReject) => {
              setTimeout(async () => {
                if (controller.signal.aborted) return rawResolve(undefined);
                try {
                  rawResolve(
                    await this.runValidator({
                      type: "validateAsync",
                      validate: validateObj.validate,
                      value: {
                        fieldApi: field,
                        signal: controller.signal,
                        value: field.getValue()
                      }
                    })
                  );
                } catch (error_) {
                  rawReject(error_);
                }
              }, validateObj.debounceMs);
            });
          } catch (error_: unknown) {
            rawError = error_ as ValidationMessage;
          }
          const error = normalizeError(rawError);
          field.setMeta(prev => {
            return {
              ...prev,
              errorMap: {
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                ...prev?.errorMap,
                [getErrorMapKey(cause)]: error
              }
            };
          });

          resolve(error);
        })
      );
    };

    // TODO: Dedupe this logic to reduce bundle size
    for (const validateObj of validates) {
      if (!validateObj.validate) continue;
      validateFieldAsyncFn(this, validateObj, validatesPromises);
    }
    for (const fieldValitateObj of linkedFieldValidates) {
      if (!fieldValitateObj.validate) continue;
      validateFieldAsyncFn(
        fieldValitateObj.field,
        fieldValitateObj,
        linkedPromises
      );
    }

    let results: ValidationMessage[] = [];
    if (validatesPromises.length > 0 || linkedPromises.length > 0) {
      results = await Promise.all(validatesPromises);
      await Promise.all(linkedPromises);
    }

    this.setMeta(prev => ({ ...prev, isValidating: false }));

    for (const linkedField of linkedFields) {
      linkedField.setMeta(prev => ({ ...prev, isValidating: false }));
    }

    return results.filter(Boolean);
  };

  validateSync = (cause: ValidationCause) => {
    const validates = getSyncValidatorArray(cause, this.options);

    const linkedFields = this.getLinkedFields(cause);
    const linkedFieldValidates = linkedFields.reduce(
      (acc, field) => {
        const fieldValidates = getSyncValidatorArray(cause, field.options);
        for (const validate of fieldValidates) {
          (validate as any).field = field;
        }
        return acc.concat(fieldValidates as never);
      },
      [] as Array<{ field: FieldApi<any, any, any, any> } & SyncValidator<any>>
    );

    // Needs type cast as eslint errantly believes this is always falsy
    let hasErrored = false as boolean;

    this.form.store.batch(() => {
      const validateFieldFn = (
        field: FieldApi<any, any, any, any>,
        validateObj: SyncValidator<any>
      ) => {
        const error = normalizeError(
          field.runValidator({
            type: "validate",
            validate: validateObj.validate,
            value: { fieldApi: field, value: field.getValue() }
          })
        );
        const errorMapKey = getErrorMapKey(validateObj.cause);
        if (field.state.meta.errorMap[errorMapKey] !== error) {
          field.setMeta(prev => ({
            ...prev,
            errorMap: {
              ...prev.errorMap,
              [getErrorMapKey(validateObj.cause)]: error
            }
          }));
        }
        if (error) {
          hasErrored = true;
        }
      };

      for (const validateObj of validates) {
        if (!validateObj.validate) continue;
        validateFieldFn(this, validateObj);
      }
      for (const fieldValitateObj of linkedFieldValidates) {
        if (!fieldValitateObj.validate) continue;
        validateFieldFn(fieldValitateObj.field, fieldValitateObj);
      }
    });

    /**
     *  when we have an error for onSubmit in the state, we want
     *  to clear the error as soon as the user enters a valid value in the field
     */
    const submitErrKey = getErrorMapKey("submit");
    if (
      this.state.meta.errorMap[submitErrKey] &&
      cause !== "submit" &&
      !hasErrored
    ) {
      this.setMeta(prev => ({
        ...prev,
        errorMap: {
          ...prev.errorMap,
          [submitErrKey]: undefined
        }
      }));
    }

    return { hasErrored };
  };

  constructor(
    opts: FieldApiOptions<
      TParentData,
      TName,
      TFieldValidator,
      TFormValidator,
      TData
    >
  ) {
    this.form = opts.form as never;
    this.name = opts.name as never;

    if (opts.defaultValue !== undefined) {
      this.form.setFieldValue(this.name, opts.defaultValue as never);
    }

    this.store = new Store<FieldState<TData>>(
      {
        meta: this._getMeta() ?? {
          errorMap: {},
          errors: [],
          isDirty: false,
          isPristine: true,
          isTouched: false,
          isValidating: false,
          touchedErrors: [],
          ...opts.defaultMeta
        },

        value: this.getValue()
      },
      {
        onUpdate: () => {
          const { state } = this.store;

          state.meta.errors = Object.values(state.meta.errorMap).filter(
            (val: unknown) => val !== undefined
          );

          state.meta.touchedErrors = state.meta.isTouched
            ? state.meta.errors
            : [];

          state.meta.isPristine = !state.meta.isDirty;

          this.prevState = state;
          this.state = state;
        }
      }
    );

    this.state = this.store.state;
    this.prevState = this.state;
    this.options = opts as never;
  }

  runValidator<
    TValue extends { fieldApi: FieldApi<any, any, any, any>; value: TData },
    TType extends "validate" | "validateAsync"
  >(props: {
    type: TType;
    validate: TType extends "validate"
      ? FieldValidateOrFn<any, any, any, any>
      : FieldAsyncValidateOrFn<any, any, any, any>;
    value: TValue;
  }): ReturnType<ReturnType<Validator<any>>[TType]> {
    const adapters = [
      this.form.options.validatorAdapter,
      this.options.validatorAdapter
    ] as const;
    for (const adapter of adapters) {
      if (adapter && typeof props.validate !== "function") {
        return adapter()[props.type](
          props.value as never,
          props.validate
        ) as never;
      }
    }

    return (props.validate as FieldValidateFn<any, any>)(props.value) as never;
  }
}

function normalizeError(rawError?: ValidationMessage) {
  if (rawError) {
    if (typeof rawError !== "string") {
      return "Invalid Form Values";
    }

    return rawError;
  }

  return undefined;
}

function getErrorMapKey(cause: ValidationCause) {
  switch (cause) {
    case "submit": {
      return "onSubmit";
    }
    case "blur": {
      return "onBlur";
    }
    case "mount": {
      return "onMount";
    }
    case "server": {
      return "onServer";
    }
    case "change":
    default: {
      return "onChange";
    }
  }
}
