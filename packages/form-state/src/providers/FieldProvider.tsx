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

import { useAtomEffect } from "@cyclone-ui/state";
import { isBoolean } from "@storm-stack/types/type-checks/is-boolean";
import { delay } from "@storm-stack/utilities/helper-fns/delay";
import { AbortError } from "@storm-stack/utilities/types";
import { useThemeName } from "@tamagui/core";
import { SetStateAction, WritableAtom } from "jotai";
import { RESET } from "jotai/utils";
import { PropsWithChildren } from "react";
import { useFieldActions } from "../hooks/use-field-actions";
import { FieldApi, FieldOptionsState } from "../molecules/field-molecule";
import { FormApi } from "../molecules/form-molecule";
import { FieldOptions, ValidationCause } from "../types";

type FieldStateManagerProps<TFieldValue = any> = PropsWithChildren<
  FieldOptions<TFieldValue>
>;

function FieldStateManager<TFieldValue = any>(
  props: FieldStateManagerProps<TFieldValue>
) {
  const { validate } = useFieldActions();

  const form = FormApi.useMolecule();
  const field = FieldApi.useMolecule();

  // Handle initialize events
  // useAtomValue(
  //   loadable(
  //     useMemoStable(
  //       () =>
  //         atomWithEffect((get, set) => {
  //           const initialValue = get(field.initialValue);

  //           const abortController = new AbortController();
  //           (async () => {
  //             try {
  //               const options = get(field.options);

  //               await delay(options.debounceMs);
  //               abortController.signal.throwIfAborted();

  //               if (get(field.dirty)) {
  //                 return;
  //               }

  //               set(
  //                 field.value as WritableAtom<
  //                   TFieldValue,
  //                   [SetStateAction<TFieldValue> | typeof RESET],
  //                   void
  //                 >,
  //                 initialValue
  //               );
  //               set(
  //                 field.blurred as WritableAtom<
  //                   InferFieldState<TFieldValue, boolean>,
  //                   [
  //                     | SetStateAction<InferFieldState<TFieldValue, boolean>>
  //                     | typeof RESET
  //                   ],
  //                   void
  //                 >,
  //                 RESET
  //               );
  //               set(
  //                 field.validating as WritableAtom<
  //                   InferFieldState<TFieldValue, boolean>,
  //                   [
  //                     | SetStateAction<InferFieldState<TFieldValue, boolean>>
  //                     | typeof RESET
  //                   ],
  //                   void
  //                 >,
  //                 RESET
  //               );
  //               set(
  //                 field.validationResults as WritableAtom<
  //                   InferFieldState<
  //                     TFieldValue,
  //                     Partial<Record<ValidationCause, ValidationDetails[]>>
  //                   >,
  //                   [
  //                     | SetStateAction<
  //                         InferFieldState<
  //                           TFieldValue,
  //                           Partial<
  //                             Record<ValidationCause, ValidationDetails[]>
  //                           >
  //                         >
  //                       >
  //                     | typeof RESET
  //                   ],
  //                   void
  //                 >,
  //                 RESET
  //               );

  //               if (options.onInitialize) {
  //                 await Promise.resolve(
  //                   options.onInitialize({
  //                     get,
  //                     set,
  //                     store
  //                   })
  //                 );

  //                 // Do not perform validation if the field if changed by the onChange callback
  //                 abortController.signal.throwIfAborted();
  //               }

  //               await Promise.resolve(
  //                 validate(initialValue, ValidationCause.INITIALIZE)
  //               );
  //             } catch (e) {
  //               if (e instanceof AbortError) {
  //                 // async cleanup logic here
  //               } else {
  //                 // console.error(e);
  //               }
  //             }
  //           })();

  //           return () => {
  //             abortController.abort(new AbortError());
  //           };
  //         }),
  //       [validate]
  //     )
  //   )
  // );

  // Handle value change event
  useAtomEffect(
    (get, set) => {
      const value = get(field.value);

      const abortController = new AbortController();
      (async () => {
        try {
          const options = get(field.options);

          await delay(options.debounceMs);
          abortController.signal.throwIfAborted();

          if (options.onChange) {
            await Promise.resolve(
              options.onChange({
                get,
                set,
                atoms: field
              })
            );

            // Do not perform validation if the field if changed by the onChange callback
            abortController.signal.throwIfAborted();
          }

          const promises = [] as Promise<void>[];
          promises.push(validate(value, ValidationCause.CHANGE));

          const blurred = get(field.blurred);
          if (blurred) {
            promises.push(validate(value, ValidationCause.BLUR));
          }

          const submitAttempts = get(form.submitAttempts);
          if (submitAttempts > 0) {
            promises.push(validate(value, ValidationCause.SUBMIT));
          }

          await Promise.all(promises);
        } catch (e) {
          if (e instanceof AbortError) {
            // async cleanup logic here
          } else {
            // console.error(e);
          }
        }
      })();

      return () => {
        abortController.abort(new AbortError());
      };
    },
    [validate]
  );

  // Handle focus and blur events
  useAtomEffect(
    (get, set) => {
      const focused = get(field.focused);

      const abortController = new AbortController();
      (async () => {
        try {
          const options = get(field.options);

          await delay(options.debounceMs);
          abortController.signal.throwIfAborted();

          if (isBoolean(focused)) {
            if (!get(field.touched)) {
              set(
                field.touched as WritableAtom<
                  boolean,
                  [SetStateAction<boolean> | typeof RESET],
                  void
                >,
                true
              );
            }

            if (focused) {
              if (options.onFocus) {
                await Promise.resolve(
                  options.onFocus({
                    get,
                    set,
                    atoms: field
                  })
                );

                // Do not perform validation if the field if changed by the onFocus callback
                abortController.signal.throwIfAborted();
              }
            } else {
              if (options.onBlur) {
                await Promise.resolve(
                  options.onBlur({
                    get,
                    set,
                    atoms: field
                  })
                );

                // Do not perform validation if the field if changed by the onBlur callback
                abortController.signal.throwIfAborted();
              }

              const value = get(field.value);

              const promises = [] as Promise<void>[];
              promises.push(validate(value, ValidationCause.BLUR));

              const submitAttempts = get(form.submitAttempts);
              if (submitAttempts > 0) {
                promises.push(validate(value, ValidationCause.SUBMIT));
              }

              await Promise.all(promises);
            }
          }
        } catch (e) {
          if (e instanceof AbortError) {
            // async cleanup logic here
          } else {
            // console.error(e);
          }
        }
      })();

      return () => {
        abortController.abort(new AbortError());
      };
    },
    [validate]
  );

  return null;
}

export type FieldProviderOptions<TFieldValue = any> = PropsWithChildren<
  FieldOptions<TFieldValue> & { name: string }
>;

export function FieldProvider<TFieldValue = any>({
  children,
  name,
  ...props
}: FieldProviderOptions<TFieldValue>) {
  // const theme = useThemeName();

  // const form = FormApi.use();
  // const formOptions = form.options.get();

  // const defaultValue = useMemo(
  //   () =>
  //     (props.defaultValue !== undefined
  //       ? props.defaultValue
  //       : getField(formOptions.initialValues, props.name)) ?? null,
  //   [formOptions.initialValues, props.defaultValue, props.name]
  // );

  // const options = useMemo(() => {
  //   const result = deepMerge(
  //     { ...formOptions.defaultFieldOptions, theme },
  //     props
  //   ) as FieldBaseState<TFieldValue>["options"];

  //   result.defaultValue = defaultValue;
  //   result.validate.onBlur = [
  //     ...(result.validate?.onBlur ?? ([] as Validator[])),
  //     ...(result.required ? [requiredValidator] : [])
  //   ];

  //   return result;
  // }, [theme, formOptions.defaultFieldOptions, props]);

  // const items = useMemo(
  //   () =>
  //     (fieldOptions.items ?? []).reduce((ret, item, index) => {
  //       if (!ret.some(existing => existing.value === item.value)) {
  //         ret.push({
  //           index,
  //           disabled: Boolean(fieldOptions.disabled),
  //           selected: item.value === defaultValue,
  //           ...item
  //         });
  //       }

  //       return ret;
  //     }, [] as SelectOption[]),
  //   [fieldOptions.items, fieldOptions.disabled, defaultValue]
  // );

  // const fieldStore = useMemo(
  //   () => createFieldStore<TFieldValue>(options.name),
  //   [options.name]
  // );

  const theme = useThemeName();

  return (
    <FieldApi.Provider
      scope={name}
      initialState={{
        options: { theme, ...props } as FieldOptionsState<TFieldValue>
      }}>
      <FieldStateManager<TFieldValue> {...props} />
      {children}
    </FieldApi.Provider>
  );
}
