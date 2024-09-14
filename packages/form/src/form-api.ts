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

import { baseAtom, createAtomStore } from "@cyclone-ui/state";
import { atomFamily } from "jotai/utils";
import {
  FormBaseState,
  FormExtendedState,
  type FormOptions,
  type Validator
} from "./types";

const atomWithField = <TField extends string, TValue>(
  field: TField,
  initialValue: TValue
) => {
  const optionsAtom = baseAtom(initialValue);
};

function getDefaultFormState<
  TFormValue extends object,
  TFormValidator extends Validator<TFormValue, unknown> | undefined = undefined
>(
  defaultState: Partial<FormBaseState<TFormValue, TFormValidator>>
): FormBaseState<TFormValue, TFormValidator> {
  return {
    values: defaultState.values ?? ({} as never),
    isSubmitted: defaultState.isSubmitted ?? false,
    isSubmitting: defaultState.isSubmitting ?? false,
    isValidating: defaultState.isValidating ?? false,
    submissionAttempts: defaultState.submissionAttempts ?? 0,
    isDisabled: defaultState.isDisabled ?? false,
    validationResults: {
      resultMap: defaultState.validationResults?.resultMap ?? {},
      meta: defaultState.validationResults?.meta ?? {
        onChange: undefined,
        onBlur: undefined,
        onSubmit: undefined,
        onMount: undefined,
        onServer: undefined
      }
    },
    fieldStates: defaultState.fieldStates ?? ({} as never),
    fieldOptions: defaultState.fieldOptions ?? ({} as never),
    fieldValidationResults: defaultState.fieldValidationResults ?? ({} as never)
  };
}

export const createFormStore = <
  TFormValue extends object,
  TFormValidator extends Validator<TFormValue, unknown> | undefined = undefined,
  TName extends string = string
>(
  name: TName,
  options: FormOptions<TFormValue, TFormValidator, TName>
) => {
  return createAtomStore<
    FormBaseState<TFormValue, TFormValidator>,
    FormExtendedState<TFormValue, TFormValidator>,
    TName
  >({
    ...options,
    name,
    initialState: getDefaultFormState<TFormValue, TFormValidator>({
      ...options?.defaultState,
      values: options?.defaultValues ?? options?.defaultState?.values,
      intro: atomFamily(get => `My name is ${get(atoms.fieldStates)}`)
    }),
    extend: atoms => ({
      intro: atomFamily(get => `My name is ${get(atoms.fieldStates)}`)
    })
  });
};

/* export const createForm2Store = <
  TFormValue extends Record<string, unknown>,
  TFormValidator extends Validator<TFormValue, unknown> | undefined = undefined
>(
  name: string,
  options: FormOptions<TFormValue, TFormValidator> = {}
) => {
  return createStore(name)<FormState<TFormValue, TFormValidator>>({
    ...getDefaultFormState<TFormValue, TFormValidator>({
      ...(options?.defaultState ?? {}),
      values: options?.defaultValues ?? options?.defaultState?.values
    }),
    options
  })
    .extendSelectors((state, get, api) => ({
      isFieldsValidating: () => {
        return (Object.values(get.fieldStates()) as FieldState[]).some(
          field => !!field?.isValidating
        );
      },
      isFieldValid: <TFieldName extends DeepKey<TFormValue>>(
        name: TFieldName
      ) => {
        return (
          Object.values(
            get.fieldValidationResults.$path(name)
          ) as ValidationResults[]
        ).some(
          field =>
            !field?.resultMap ||
            !Object.values(field?.resultMap).some(results =>
              results.some(result =>
                !result
                  ? false
                  : isString(result)
                    ? !!result
                    : result.type === ValidationMessageType.ERROR
              )
            )
        );
      },
      isTouched: () => {
        return (
          Object.values(get.fieldMeta()) as (FieldMeta | undefined)[]
        ).some(field => field?.isTouched);
      },
      isDirty: () => {
        return (
          Object.values(get.fieldMeta()) as (FieldMeta | undefined)[]
        ).some(field => field?.isDirty);
      },
      isPristine: () => {
        return !get.isDirty();
      },
      isValidating: () => {
        return get.isFieldsValidating() || get.isFormValidating();
      },
      isFormValid: () => {
        return get.errors().length === 0;
      },
      firstError: () => {
        return get.errors.$item(1);
      },
      isValid: () => {
        return get.isFieldsValid() && get.isFormValid();
      },
      canSubmit: () => {
        return (
          (get.submissionAttempts() === 0 && !get.isTouched()) ||
          (!get.isValidating() && !get.isSubmitting() && get.isValid())
        );
      },
      fieldInfo: <TField extends string>(
        field: TField
      ): FieldInfo<TFormValue, TFormValidator> => {
        let info = get._fieldInfo.$path(field);

        return (
          info ?? {
            instance: null,
            validationMetaMap: {
              onChange: undefined,
              onBlur: undefined,
              onSubmit: undefined,
              onMount: undefined,
              onServer: undefined
            }
          }
        );
      }
    }))
    .extendSelectors((state, get, api) => ({
      isAllFieldsValid: () =>
        Object.keys(get.fieldMeta()).some(field => get.isFieldValid(field))
    }))
    .extendActions((set, get, api) => ({
      _runValidator: <
        TValue extends {
          value: TFormValue;
          api: StoreApi<FormState<TFormValue, TFormValidator>>;
        },
        TType extends "validate" | "validateAsync"
      >(props: {
        validate: TType extends "validate"
          ? FormValidateOrFn<TFormValue, TFormValidator>
          : FormAsyncValidateOrFn<TFormValue, TFormValidator>;
        value: TValue;
        type: TType;
      }): ReturnType<ReturnType<Validator<TType>>[TType]> => {
        const adapter = get.options.$path("validatorAdapter") as TFormValidator;
        if (adapter && typeof props.validate !== "function") {
          return adapter()[props.type](props.value, props.validate) as never;
        }

        return (props.validate as FormValidateFn<TFormValue, TFormValidator>)(
          props.value
        ) as never;
      },
      update: (options?: FormOptions<TFormValue, TFormValidator>) => {
        if (!options) {
          return;
        }

        // Options need to be updated first so that when the store is updated, the state is correct for the derived state
        // set.options(options as any);

        set.state(prev => {
          if (
            options.defaultState &&
            options.defaultState !== get.options.$path("defaultState") &&
            !get.isTouched()
          ) {
            Object.keys(options.defaultState).forEach(key => {
              prev[key] = options.defaultState![key];
            });
          }

          if (
            options.defaultValues &&
            options.defaultValues !== get.options.$path("defaultValues") &&
            !get.isTouched()
          ) {
            prev.values = options.defaultValues as Draft<TFormValue>;
          }

          const defaulted = getDefaultFormState(options);

          return defaulted;
        });

        set.mergeState(
          getDefaultFormState<TFormValue, TFormValidator>({
            ...get.state(),
            values:
              get.options.$path("defaultValues") ??
              get.options.$path("defaultState.values")
          })
        );
      },
      resetFieldMeta: <TField extends Paths<TFormValue>>(
        fieldMeta: Record<TField, FieldMeta>
      ): Record<TField, FieldMeta> => {
        return Object.keys(fieldMeta).reduce(
          (acc: Record<TField, FieldMeta>, key) => {
            const fieldKey = key as TField;
            acc[fieldKey] = {
              isValidating: false,
              isTouched: false,
              isDirty: false,
              isPristine: true,
              isDisabled: false,
              isRequired: false,
              touchedErrors: [],
              errorMap: {},
              errors: [],
              warnings: [],
              information: [],
              successes: []
            };
            return acc;
          },
          {} as Record<TField, FieldMeta>
        );
      },
      validateAllFields: async (cause: ValidationCause) => {
        const fieldValidationPromises: Promise<ValidationMessage[]>[] =
          [] as any;

        void (
          Object.values(get._fieldInfo()) as FieldInfo<any, TFormValidator>[]
        ).forEach(field => {
          if (!field.instance) {
            return;
          }

          const fieldInstance = field.instance;
          // Validate the field
          fieldValidationPromises.push(
            Promise.resolve().then(() => fieldInstance.validate(cause))
          );

          // If any fields are not touched
          if (!field.instance.state.meta.isTouched) {
            // Mark them as touched
            field.instance.setMeta(prev => ({ ...prev, isTouched: true }));
          }
        });

        const fieldErrorMapMap = await Promise.all(fieldValidationPromises);
        return fieldErrorMapMap.flat();
      },
      validateField: <TField extends string>(
        field: TField,
        cause: ValidationCause
      ) => {
        const fieldInstance = get.fieldInfo(field)?.instance;
        if (!fieldInstance) {
          return [];
        }

        // If the field is not touched (same logic as in validateAllFields)
        if (!fieldInstance.state.meta.isTouched) {
          // Mark it as touched
          fieldInstance.setMeta(prev => ({ ...prev, isTouched: true }));
        }

        return fieldInstance.validate(cause);
      }
    }))
    .extendActions((set, get, api) => ({
      mount: () => {
        const { onMount } = (get.options.$path("validators") ||
          {}) as FormValidators<TFormValue, TFormValidator>;
        if (!onMount) {
          return;
        }

        const error = set._runValidator({
          validate: onMount,
          value: {
            value: get.values(),
            api
          },
          type: "validate"
        });
        if (error) {
          set.errorMap(prev => {
            prev.onMount = error;
          });
        }
      },
      reset: () => {
        const fields = set.resetFieldMeta(get.fieldMeta());
        set.mergeState(
          getDefaultFormState<TFormValue, TFormValidator>({
            ...get.state(),
            values: (get.options.$path("defaultValues") ??
              get.options.$path("defaultState.values")) as
              | TFormValue
              | undefined,
            fieldMeta: fields
          })
        );
      },
      validateArrayFieldsStartingFrom: async <TField extends Paths<TFormValue>>(
        field: TField,
        index: number,
        cause: ValidationCause
      ) => {
        const currentValue = get.values.$path(field);
        const lastIndex = Array.isArray(currentValue)
          ? Math.max(currentValue.length - 1, 0)
          : null;

        // We have to validate all fields that have shifted (at least the current field)
        const fieldKeysToValidate = [`${field}[${index}]`];
        for (let i = index + 1; i <= (lastIndex ?? 0); i++) {
          fieldKeysToValidate.push(`${field}[${i}]`);
        }

        // We also have to include all fields that are nested in the shifted fields
        const fieldsToValidate = Object.keys(get._fieldInfo()).filter(
          fieldKey => fieldKeysToValidate.some(key => fieldKey.startsWith(key))
        ) as Paths<TFormValue>[];

        // Validate the fields
        const fieldValidationPromises: Promise<ValidationMessage[]>[] =
          [] as any;
        fieldsToValidate.forEach(nestedField => {
          fieldValidationPromises.push(
            Promise.resolve().then(() => set.validateField(nestedField, cause))
          );
        });

        const fieldErrorMapMap = await Promise.all(fieldValidationPromises);
        return fieldErrorMapMap.flat();
      },

      values: <TField extends string>(
        name: TField,
        value: SetRecordParam<Get<TFormValue, ToPath<TField>>>,
        options?: { touch?: boolean }
      ) => {
        const touch = options?.touch;
        if (touch) {
          set.fieldMeta.$path(state => {
            state.isTouched = true;
            state.isDirty = true;
          });
        }

        set.values(prev => setBy(prev, name, value));
        if (touch) {
          set.validateField(field, "change");
        }
      },

      deleteField: <TField extends string>(
        field: TField,
        options?: { touch?: boolean }
      ) => {
        if (options?.touch) {
          set.fieldMeta.$path(state => {
            state.isTouched = true;
            state.isDirty = true;
          });
        }

        api.remove.values.$path(field);
        api.remove.fieldMeta.$path(field);
        api.remove._fieldInfo.$path(field);

        set.validateField(field, "change");
      },

      pushFieldValue: <TField extends string>(
        field: TField,
        value: Get<TFormValue, ToPath<TField>> extends any[]
          ? Get<TFormValue, ToPath<TField>>[number]
          : never,
        options?: { touch?: boolean }
      ) => {
        if (options?.touch) {
          set.fieldMeta.$path(state => {
            state.isTouched = true;
            state.isDirty = true;
          });
        }

        set.values.$path(field, state => {
          state.push(value);
        });

        set.validateField(field, "change");
      },

      insertFieldValue: async <TField extends string>(
        field: TField,
        index: number,
        value: Get<TFormValue, ToPath<TField>> extends any[]
          ? Get<TFormValue, ToPath<TField>>[number]
          : never,
        options?: { touch?: boolean }
      ) => {
        if (options?.touch) {
          set.fieldMeta.$path(state => {
            state.isTouched = true;
            state.isDirty = true;
          });
        }

        set.values.$path(field, state => {
          const newState = state.slice(0, index);
          newState.push(value);
          newState.push(...state.slice(index));
        });

        set.validateField(field, "change");
      }
    }));

  // .extendActions((set, get, api) => ({

  //   }));
  // })).extendActions((set, get, api) => ({
  //   deleteField: <TField extends DeepKey<TFormValue>>(field: TField) => {
  //     set.values(prev => deleteBy(prev, field));
  //     set.fieldMeta(prev => ({
  //       ...prev,
  //       [field]: undefined
  //     }));

  //     set._fieldInfo(prev => ({
  //       ...prev,
  //       [field]: undefined
  //     }));
  //   },

  //   pushFieldValue: <TField extends DeepKey<TFormValue>>(
  //     field: TField,
  //     value: DeepValue<TFormValue, TField> extends any[]
  //       ? DeepValue<TFormValue, TField>[number]
  //       : never,
  //     opts?: { touch?: boolean }
  //   ) => {
  //     set.values(
  //       field,
  //       prev => [...(Array.isArray(prev) ? prev : []), value] as any,
  //       opts
  //     );
  //     this.validateField(field, "change");
  //   },

  //   insertFieldValue: async <TField extends DeepKey<TFormValue>>(
  //     field: TField,
  //     index: number,
  //     value: DeepValue<TFormValue, TField> extends any[]
  //       ? DeepValue<TFormValue, TField>[number]
  //       : never,
  //     opts?: { touch?: boolean }
  //   ) => {
  //     this.setFieldValue(
  //       field,
  //       prev => {
  //         return [
  //           ...(prev as DeepValue<TFormValue, TField>[]).slice(0, index),
  //           value,
  //           ...(prev as DeepValue<TFormValue, TField>[]).slice(index)
  //         ] as any;
  //       },
  //       opts
  //     );

  //     // Validate the whole array + all fields that have shifted
  //     await this.validateField(field, "change");
  //   },

  //   replaceFieldValue: async <TField extends DeepKey<TFormValue>>(
  //     field: TField,
  //     index: number,
  //     value: DeepValue<TFormValue, TField> extends any[]
  //       ? DeepValue<TFormValue, TField>[number]
  //       : never,
  //     opts?: { touch?: boolean }
  //   ) => {
  //     this.setFieldValue(
  //       field,
  //       prev => {
  //         return (prev as DeepValue<TFormValue, TField>[]).map((d, i) =>
  //           i === index ? value : d
  //         ) as any;
  //       },
  //       opts
  //     );

  //     // Validate the whole array + all fields that have shifted
  //     await this.validateField(field, "change");
  //     await this.validateArrayFieldsStartingFrom(field, index, "change");
  //   },

  //   removeFieldValue: async <TField extends DeepKey<TFormValue>>(
  //     field: TField,
  //     index: number,
  //     opts?: { touch?: boolean }
  //   ) => {
  //     const fieldValue = this.getFieldValue(field);

  //     const lastIndex = Array.isArray(fieldValue)
  //       ? Math.max(fieldValue.length - 1, 0)
  //       : null;

  //     this.setFieldValue(
  //       field,
  //       prev => {
  //         return (prev as DeepValue<TFormValue, TField>[]).filter(
  //           (_d, i) => i !== index
  //         ) as any;
  //       },
  //       opts
  //     );

  //     if (lastIndex !== null) {
  //       const start = `${field}[${lastIndex}]`;
  //       const fieldsToDelete = Object.keys(this.fieldInfo).filter(f =>
  //         f.startsWith(start)
  //       );

  //       // Cleanup the last fields
  //       fieldsToDelete.forEach(f => this.deleteField(f as TField));
  //     }

  //     // Validate the whole array + all fields that have shifted
  //     await this.validateField(field, "change");
  //     await this.validateArrayFieldsStartingFrom(field, index, "change");
  //   },

  //   swapFieldValues: <TField extends DeepKey<TFormValue>>(
  //     field: TField,
  //     index1: number,
  //     index2: number,
  //     opts?: { touch?: boolean }
  //   ) => {
  //     this.setFieldValue(
  //       field,
  //       (prev: any) => {
  //         const prev1 = prev[index1]!;
  //         const prev2 = prev[index2]!;
  //         return setBy(setBy(prev, `${index1}`, prev2), `${index2}`, prev1);
  //       },
  //       opts
  //     );

  //     // Validate the whole array
  //     this.validateField(field, "change");
  //     // Validate the swapped fields
  //     this.validateField(
  //       `${field}[${index1}]` as DeepKey<TFormValue>,
  //       "change"
  //     );
  //     this.validateField(
  //       `${field}[${index2}]` as DeepKey<TFormValue>,
  //       "change"
  //     );
  //   },

  //   moveFieldValues: <TField extends DeepKey<TFormValue>>(
  //     field: TField,
  //     index1: number,
  //     index2: number,
  //     opts?: { touch?: boolean }
  //   ) => {
  //     this.setFieldValue(
  //       field,
  //       (prev: any) => {
  //         prev.splice(index2, 0, prev.splice(index1, 1)[0]);
  //         return prev;
  //       },
  //       opts
  //     );

  //     // Validate the whole array
  //     this.validateField(field, "change");
  //     // Validate the moved fields
  //     this.validateField(
  //       `${field}[${index1}]` as DeepKey<TFormValue>,
  //       "change"
  //     );
  //     this.validateField(
  //       `${field}[${index2}]` as DeepKey<TFormValue>,
  //       "change"
  //     );
  //   }
  // }));
};

// export class FormApi<
//   TFormValue,
//   TFormValidator extends Validator<TFormValue, unknown> | undefined = undefined
// > implements IFormApi<TFormValue, TFormValidator>
// {
//   public options: FormOptions<TFormValue, TFormValidator> = {};
//   public store!: StoreApi<FormState<TFormValue>>;
//   // Do not use __state directly, as it is not reactive.
//   // Please use form.useStore() utility to subscribe to state
//   public state!: FormState<TFormValue>;
//   // // This carries the context for nested fields
//   public fieldInfo: Record<
//     DeepKey<TFormValue>,
//     FieldInfo<TFormValue, TFormValidator>
//   > = {} as any;

//   public prevTransformArray: unknown[] = [];

//   public constructor(opts?: FormOptions<TFormValue, TFormValidator>) {
//     this.store = new Store<FormState<TFormValue>>(
//       getDefaultFormState({
//         ...(opts?.defaultState as any),
//         values: opts?.defaultValues ?? opts?.defaultState?.values,
//         isFormValid: true
//       }),
//       {
//         onUpdate: () => {
//           let { state } = this.store;
//           // Computed state
//           const fieldMetaValues = Object.values(state.fieldMeta) as (
//             | FieldMeta
//             | undefined
//           )[];

//           const isFieldsValidating = fieldMetaValues.some(
//             field => field?.isValidating
//           );

//           const isFieldsValid = !fieldMetaValues.some(
//             field =>
//               field?.errorMap &&
//               isNonEmptyArray(Object.values(field.errorMap).filter(Boolean))
//           );

//           const isTouched = fieldMetaValues.some(field => field?.isTouched);

//           const isDirty = fieldMetaValues.some(field => field?.isDirty);
//           const isPristine = !isDirty;

//           const isValidating = isFieldsValidating || state.isFormValidating;
//           state.errors = Object.values(state.errorMap).filter(
//             (val: unknown) => val !== undefined
//           );
//           const isFormValid = state.errors.length === 0;
//           const isValid = isFieldsValid && isFormValid;
//           const canSubmit =
//             (state.submissionAttempts === 0 && !isTouched) ||
//             (!isValidating && !state.isSubmitting && isValid);

//           state = {
//             ...state,
//             isFieldsValidating,
//             isFieldsValid,
//             isFormValid,
//             isValid,
//             canSubmit,
//             isTouched,
//             isPristine,
//             isDirty
//           };

//           this.state = state;
//           this.store.state = this.state;

//           // Only run transform if state has shallowly changed - IE how React.useEffect works
//           const transformArray = this.options.transform?.deps ?? [];
//           const shouldTransform =
//             transformArray.length !== this.prevTransformArray.length ||
//             transformArray.some((val, i) => val !== this.prevTransformArray[i]);

//           if (shouldTransform) {
//             // This mutates the state
//             this.options.transform?.fn(this);
//             this.store.state = this.state;
//             this.prevTransformArray = transformArray;
//           }
//         }
//       }
//     );

//     this.state = this.store.state;
//     this.update(opts || {});
//   }

//   public Field!: FieldComponent<TFormValue, TFormValidator>;
//   public useField!: UseField<TFormValue, TFormValidator>;
//   public useStore!: <TSelected = FormState<TFormValue>>(
//     selector?: ((state: FormState<TFormValue>) => TSelected) | undefined
//   ) => TSelected;
//   public Subscribe!: <TSelected = FormState<TFormValue>>(props: {
//     selector?: ((state: FormState<TFormValue>) => TSelected) | undefined;
//     children: ((state: NoInfer<TSelected>) => NodeType) | NodeType;
//   }) => ReactNode;

//   public runValidator = <
//     TValue extends { value: TFormValue; formApi: FormApi<any, any> },
//     TType extends "validate" | "validateAsync"
//   >(props: {
//     validate: TType extends "validate"
//       ? FormValidateOrFn<TFormValue, TFormValidator>
//       : FormAsyncValidateOrFn<TFormValue, TFormValidator>;
//     value: TValue;
//     type: TType;
//   }): ReturnType<ReturnType<Validator<any>>[TType]> => {
//     const adapter = this.options.validatorAdapter;
//     if (adapter && typeof props.validate !== "function") {
//       return adapter()[props.type](props.value, props.validate) as never;
//     }

//     return (props.validate as FormValidateFn<any, any>)(props.value) as never;
//   };

//   public mount = () => {
//     const { onMount } = this.options.validators || {};
//     if (!onMount) return;
//     const error = this.runValidator({
//       validate: onMount,
//       value: {
//         value: this.state.values,
//         formApi: this
//       },
//       type: "validate"
//     });
//     if (error) {
//       this.store.setState(prev => ({
//         ...prev,
//         errorMap: { ...prev.errorMap, onMount: error }
//       }));
//     }
//   };

//   public update = (options?: FormOptions<TFormValue, TFormValidator>) => {
//     if (!options) return;

//     const oldOptions = this.options;

//     // Options need to be updated first so that when the store is updated, the state is correct for the derived state
//     this.options = options;

//     this.store.batch(() => {
//       const shouldUpdateValues =
//         options.defaultValues &&
//         options.defaultValues !== oldOptions.defaultValues &&
//         !this.state.isTouched;

//       const shouldUpdateState =
//         options.defaultState !== oldOptions.defaultState &&
//         !this.state.isTouched;

//       this.store.setState(() =>
//         getDefaultFormState(
//           Object.assign(
//             {},
//             this.state as any,

//             shouldUpdateState ? options.defaultState : {},

//             shouldUpdateValues
//               ? {
//                   values: options.defaultValues
//                 }
//               : {}
//           )
//         )
//       );
//     });
//   };

//   public reset = () => {
//     const { fieldMeta: currentFieldMeta } = this.state;
//     const fieldMeta = this.resetFieldMeta(currentFieldMeta);
//     this.store.setState(() =>
//       getDefaultFormState({
//         ...(this.options.defaultState as any),
//         values: this.options.defaultValues ?? this.options.defaultState?.values,
//         fieldMeta
//       })
//     );
//   };

//   public validateAllFields = async (cause: ValidationCause) => {
//     const fieldValidationPromises: Promise<ValidationError[]>[] = [] as any;
//     this.store.batch(() => {
//       void (
//         Object.values(this.fieldInfo) as FieldInfo<any, TFormValidator>[]
//       ).forEach(field => {
//         if (!field.instance) {
//           return;
//         }

//         const fieldInstance = field.instance;
//         // Validate the field
//         fieldValidationPromises.push(
//           Promise.resolve().then(() => fieldInstance.validate(cause))
//         );
//         // If any fields are not touched
//         if (!field.instance.state.meta.isTouched) {
//           // Mark them as touched
//           field.instance.setMeta(prev => ({ ...prev, isTouched: true }));
//         }
//       });
//     });

//     const fieldErrorMapMap = await Promise.all(fieldValidationPromises);
//     return fieldErrorMapMap.flat();
//   };

//   public validateArrayFieldsStartingFrom = async <
//     TField extends DeepKey<TFormValue>
//   >(
//     field: TField,
//     index: number,
//     cause: ValidationCause
//   ) => {
//     const currentValue = this.getFieldValue(field);

//     const lastIndex = Array.isArray(currentValue)
//       ? Math.max(currentValue.length - 1, 0)
//       : null;

//     // We have to validate all fields that have shifted (at least the current field)
//     const fieldKeysToValidate = [`${field}[${index}]`];
//     for (let i = index + 1; i <= (lastIndex ?? 0); i++) {
//       fieldKeysToValidate.push(`${field}[${i}]`);
//     }

//     // We also have to include all fields that are nested in the shifted fields
//     const fieldsToValidate = Object.keys(this.fieldInfo).filter(fieldKey =>
//       fieldKeysToValidate.some(key => fieldKey.startsWith(key))
//     ) as DeepKey<TFormValue>[];

//     // Validate the fields
//     const fieldValidationPromises: Promise<ValidationError[]>[] = [] as any;
//     this.store.batch(() => {
//       fieldsToValidate.forEach(nestedField => {
//         fieldValidationPromises.push(
//           Promise.resolve().then(() => this.validateField(nestedField, cause))
//         );
//       });
//     });

//     const fieldErrorMapMap = await Promise.all(fieldValidationPromises);
//     return fieldErrorMapMap.flat();
//   };

//   public validateField = <TField extends DeepKey<TFormValue>>(
//     field: TField,
//     cause: ValidationCause
//   ) => {
//     // eslint-disable-next-line  @typescript-eslint/no-unnecessary-condition
//     const fieldInstance = this.fieldInfo[field]?.instance;
//     if (!fieldInstance) return [];

//     // If the field is not touched (same logic as in validateAllFields)
//     if (!fieldInstance.state.meta.isTouched) {
//       // Mark it as touched
//       fieldInstance.setMeta(prev => ({ ...prev, isTouched: true }));
//     }

//     return fieldInstance.validate(cause);
//   };

//   // TODO: This code is copied from FieldApi, we should refactor to share
//   public validateSync = (cause: ValidationCause) => {
//     const validates = getSyncValidatorArray(cause, this.options);
//     let hasErrored = false as boolean;

//     this.store.batch(() => {
//       for (const validateObj of validates) {
//         if (!validateObj.validate) continue;

//         const error = normalizeError(
//           this.runValidator({
//             validate: validateObj.validate,
//             value: {
//               value: this.state.values,
//               formApi: this
//             },
//             type: "validate"
//           })
//         );
//         const errorMapKey = getErrorMapKey(validateObj.cause);
//         if (this.state.errorMap[errorMapKey] !== error) {
//           this.store.setState(prev => ({
//             ...prev,
//             errorMap: {
//               ...prev.errorMap,
//               [errorMapKey]: error
//             }
//           }));
//         }
//         if (error) {
//           hasErrored = true;
//         }
//       }
//     });

//     /**
//      *  when we have an error for onSubmit in the state, we want
//      *  to clear the error as soon as the user enters a valid value in the field
//      */
//     const submitErrKey = getErrorMapKey("submit");
//     if (
//       this.state.errorMap[submitErrKey] &&
//       cause !== "submit" &&
//       !hasErrored
//     ) {
//       this.store.setState(prev => ({
//         ...prev,
//         errorMap: {
//           ...prev.errorMap,
//           [submitErrKey]: undefined
//         }
//       }));
//     }

//     return { hasErrored };
//   };

//   public validateAsync = async (
//     cause: ValidationCause
//   ): Promise<ValidationError[]> => {
//     const validates = getAsyncValidatorArray(cause, this.options);

//     if (!this.state.isFormValidating) {
//       this.store.setState(prev => ({ ...prev, isFormValidating: true }));
//     }

//     /**
//      * We have to use a for loop and generate our promises this way, otherwise it won't be sync
//      * when there are no validators needed to be run
//      */
//     const promises: Promise<ValidationError | undefined>[] = [];

//     for (const validateObj of validates) {
//       if (!validateObj.validate) continue;
//       const key = getErrorMapKey(validateObj.cause);
//       const fieldValidatorMeta = this.state.validationMetaMap[key];

//       fieldValidatorMeta?.lastAbortController.abort();
//       const controller = new AbortController();

//       this.state.validationMetaMap[key] = {
//         lastAbortController: controller
//       };

//       promises.push(
//         new Promise<ValidationError | undefined>(async resolve => {
//           let rawError!: ValidationError | undefined;
//           try {
//             rawError = await new Promise((rawResolve, rawReject) => {
//               setTimeout(async () => {
//                 if (controller.signal.aborted) return rawResolve(undefined);
//                 try {
//                   rawResolve(
//                     await this.runValidator({
//                       validate: validateObj.validate!,
//                       value: {
//                         value: this.state.values,
//                         formApi: this,
//                         signal: controller.signal
//                       },
//                       type: "validateAsync"
//                     })
//                   );
//                 } catch (e) {
//                   rawReject(e);
//                 }
//               }, validateObj.debounceMs);
//             });
//           } catch (e: unknown) {
//             rawError = e as ValidationError;
//           }
//           const error = normalizeError(rawError);
//           this.store.setState(prev => ({
//             ...prev,
//             errorMap: {
//               ...prev.errorMap,
//               [getErrorMapKey(cause)]: error
//             }
//           }));

//           resolve(error);
//         })
//       );
//     }

//     let results: ValidationError[] = [];
//     if (promises.length) {
//       results = await Promise.all(promises);
//     }

//     this.store.setState(prev => ({
//       ...prev,
//       isFormValidating: false
//     }));

//     return results.filter(Boolean);
//   };

//   public validate = (
//     cause: ValidationCause
//   ): ValidationError[] | Promise<ValidationError[]> => {
//     // Attempt to sync validate first
//     const { hasErrored } = this.validateSync(cause);

//     if (hasErrored && !this.options.asyncAlways) {
//       return this.state.errors;
//     }

//     // No error? Attempt async validation
//     return this.validateAsync(cause);
//   };

//   public handleSubmit = async () => {
//     // Check to see that the form and all fields have been touched
//     // If they have not, touch them all and run validation
//     // Run form validation
//     // Submit the form

//     this.store.setState(old => ({
//       ...old,
//       // Submission attempts mark the form as not submitted
//       isSubmitted: false,
//       // Count submission attempts
//       submissionAttempts: old.submissionAttempts + 1
//     }));

//     // Don't let invalid forms submit
//     if (!this.state.canSubmit) return;

//     this.store.setState(d => ({ ...d, isSubmitting: true }));

//     const done = () => {
//       this.store.setState(prev => ({ ...prev, isSubmitting: false }));
//     };

//     // Validate all fields
//     await this.validateAllFields("submit");

//     // Fields are invalid, do not submit
//     if (!this.state.isFieldsValid) {
//       done();
//       this.options.onSubmitInvalid?.({
//         value: this.state.values,
//         formApi: this
//       });
//       return;
//     }

//     // Run validation for the form
//     await this.validate("submit");

//     if (!this.state.isValid) {
//       done();
//       this.options.onSubmitInvalid?.({
//         value: this.state.values,
//         formApi: this
//       });
//       return;
//     }

//     try {
//       // Run the submit code
//       await this.options.onSubmit?.({
//         value: this.state.values,
//         formApi: this
//       });

//       this.store.batch(() => {
//         this.store.setState(prev => ({ ...prev, isSubmitted: true }));
//         done();
//       });
//     } catch (err) {
//       done();
//       throw err;
//     }
//   };

//   public getFieldValue = <TField extends DeepKey<TFormValue>>(
//     field: TField
//   ): DeepValue<TFormValue, TField> => getBy(this.state.values, field);

//   public getFieldMeta = <TField extends DeepKey<TFormValue>>(
//     field: TField
//   ): FieldMeta | undefined => {
//     return this.state.fieldMeta[field];
//   };

//   public getFieldInfo = <TField extends DeepKey<TFormValue>>(
//     field: TField
//   ): FieldInfo<TFormValue, TFormValidator> => {
//     // eslint-disable-next-line  @typescript-eslint/no-unnecessary-condition
//     return (this.fieldInfo[field] ||= {
//       instance: null,
//       validationMetaMap: {
//         onChange: undefined,
//         onBlur: undefined,
//         onSubmit: undefined,
//         onMount: undefined,
//         onServer: undefined
//       }
//     });
//   };

//   public setFieldMeta = <TField extends DeepKey<TFormValue>>(
//     field: TField,
//     updater: Updater<FieldMeta>
//   ) => {
//     this.store.setState(prev => {
//       return {
//         ...prev,
//         fieldMeta: {
//           ...prev.fieldMeta,
//           [field]: functionalUpdate(updater, prev.fieldMeta[field])
//         }
//       };
//     });
//   };

//   public resetFieldMeta = <TField extends DeepKey<TFormValue>>(
//     fieldMeta: Record<TField, FieldMeta>
//   ): Record<TField, FieldMeta> => {
//     return Object.keys(fieldMeta).reduce(
//       (acc: Record<TField, FieldMeta>, key) => {
//         const fieldKey = key as TField;
//         acc[fieldKey] = {
//           isValidating: false,
//           isTouched: false,
//           isDirty: false,
//           isPristine: true,
//           touchedErrors: [],
//           errors: [],
//           errorMap: {}
//         };
//         return acc;
//       },
//       {} as Record<TField, FieldMeta>
//     );
//   };

//   public setFieldValue = <TField extends DeepKey<TFormValue>>(
//     field: TField,
//     updater: Updater<DeepValue<TFormValue, TField>>,
//     opts?: { touch?: boolean }
//   ) => {
//     const touch = opts?.touch;

//     this.store.batch(() => {
//       if (touch) {
//         this.setFieldMeta(field, prev => ({
//           ...prev,
//           isTouched: true,
//           isDirty: true
//         }));
//       }

//       this.store.setState(prev => {
//         return {
//           ...prev,
//           values: setBy(prev.values, field, updater)
//         };
//       });
//     });
//   };

//   public deleteField = <TField extends DeepKey<TFormValue>>(field: TField) => {
//     this.store.setState(prev => {
//       const newState = { ...prev };
//       newState.values = deleteBy(newState.values, field);
//       delete newState.fieldMeta[field];

//       return newState;
//     });
//     delete this.fieldInfo[field];
//   };

//   public pushFieldValue = <TField extends DeepKey<TFormValue>>(
//     field: TField,
//     value: DeepValue<TFormValue, TField> extends any[]
//       ? DeepValue<TFormValue, TField>[number]
//       : never,
//     opts?: { touch?: boolean }
//   ) => {
//     this.setFieldValue(
//       field,
//       prev => [...(Array.isArray(prev) ? prev : []), value] as any,
//       opts
//     );
//     this.validateField(field, "change");
//   };

//   public insertFieldValue = async <TField extends DeepKey<TFormValue>>(
//     field: TField,
//     index: number,
//     value: DeepValue<TFormValue, TField> extends any[]
//       ? DeepValue<TFormValue, TField>[number]
//       : never,
//     opts?: { touch?: boolean }
//   ) => {
//     this.setFieldValue(
//       field,
//       prev => {
//         return [
//           ...(prev as DeepValue<TFormValue, TField>[]).slice(0, index),
//           value,
//           ...(prev as DeepValue<TFormValue, TField>[]).slice(index)
//         ] as any;
//       },
//       opts
//     );

//     // Validate the whole array + all fields that have shifted
//     await this.validateField(field, "change");
//   };

//   public replaceFieldValue = async <TField extends DeepKey<TFormValue>>(
//     field: TField,
//     index: number,
//     value: DeepValue<TFormValue, TField> extends any[]
//       ? DeepValue<TFormValue, TField>[number]
//       : never,
//     opts?: { touch?: boolean }
//   ) => {
//     this.setFieldValue(
//       field,
//       prev => {
//         return (prev as DeepValue<TFormValue, TField>[]).map((d, i) =>
//           i === index ? value : d
//         ) as any;
//       },
//       opts
//     );

//     // Validate the whole array + all fields that have shifted
//     await this.validateField(field, "change");
//     await this.validateArrayFieldsStartingFrom(field, index, "change");
//   };

//   public removeFieldValue = async <TField extends DeepKey<TFormValue>>(
//     field: TField,
//     index: number,
//     opts?: { touch?: boolean }
//   ) => {
//     const fieldValue = this.getFieldValue(field);

//     const lastIndex = Array.isArray(fieldValue)
//       ? Math.max(fieldValue.length - 1, 0)
//       : null;

//     this.setFieldValue(
//       field,
//       prev => {
//         return (prev as DeepValue<TFormValue, TField>[]).filter(
//           (_d, i) => i !== index
//         ) as any;
//       },
//       opts
//     );

//     if (lastIndex !== null) {
//       const start = `${field}[${lastIndex}]`;
//       const fieldsToDelete = Object.keys(this.fieldInfo).filter(f =>
//         f.startsWith(start)
//       );

//       // Cleanup the last fields
//       fieldsToDelete.forEach(f => this.deleteField(f as TField));
//     }

//     // Validate the whole array + all fields that have shifted
//     await this.validateField(field, "change");
//     await this.validateArrayFieldsStartingFrom(field, index, "change");
//   };

//   public swapFieldValues = <TField extends DeepKey<TFormValue>>(
//     field: TField,
//     index1: number,
//     index2: number,
//     opts?: { touch?: boolean }
//   ) => {
//     this.setFieldValue(
//       field,
//       (prev: any) => {
//         const prev1 = prev[index1]!;
//         const prev2 = prev[index2]!;
//         return setBy(setBy(prev, `${index1}`, prev2), `${index2}`, prev1);
//       },
//       opts
//     );

//     // Validate the whole array
//     this.validateField(field, "change");
//     // Validate the swapped fields
//     this.validateField(`${field}[${index1}]` as DeepKey<TFormValue>, "change");
//     this.validateField(`${field}[${index2}]` as DeepKey<TFormValue>, "change");
//   };

//   public moveFieldValues = <TField extends DeepKey<TFormValue>>(
//     field: TField,
//     index1: number,
//     index2: number,
//     opts?: { touch?: boolean }
//   ) => {
//     this.setFieldValue(
//       field,
//       (prev: any) => {
//         prev.splice(index2, 0, prev.splice(index1, 1)[0]);
//         return prev;
//       },
//       opts
//     );

//     // Validate the whole array
//     this.validateField(field, "change");
//     // Validate the moved fields
//     this.validateField(`${field}[${index1}]` as DeepKey<TFormValue>, "change");
//     this.validateField(`${field}[${index2}]` as DeepKey<TFormValue>, "change");
//   };
// }

// function normalizeError(rawError?: ValidationError) {
//   if (rawError) {
//     if (typeof rawError !== "string") {
//       return "Invalid Form Values";
//     }

//     return rawError;
//   }

//   return undefined;
// }

// function getErrorMapKey(cause: ValidationCause) {
//   switch (cause) {
//     case "submit":
//       return "onSubmit";
//     case "blur":
//       return "onBlur";
//     case "mount":
//       return "onMount";
//     case "server":
//       return "onServer";
//     case "change":
//     default:
//       return "onChange";
//   }
// }
