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

import { atomWithEffect } from "@cyclone-ui/state";
import { useMemoStable } from "@storm-stack/hooks/use-memo-stable";
import { isBoolean } from "@storm-stack/types/type-checks/is-boolean";
import { deepMerge } from "@storm-stack/utilities/helper-fns/deep-merge";
import { delay } from "@storm-stack/utilities/helper-fns/delay";
import { getField } from "@storm-stack/utilities/helper-fns/get-field";
import { isEqual } from "@storm-stack/utilities/helper-fns/is-equal";
import { AbortError } from "@storm-stack/utilities/types";
import { useThemeName } from "@tamagui/core";
import { SetStateAction, useAtomValue, WritableAtom } from "jotai";
import { loadable, RESET } from "jotai/utils";
import {
  createContext,
  PropsWithChildren,
  RefObject,
  useMemo,
  useRef
} from "react";
import { useFieldActions } from "../hooks/use-field-actions";
import { useFormStore } from "../hooks/use-form-store";
import { createFieldStore, FieldStore } from "../stores/field-store";
import { formStore } from "../stores/form-store";
import {
  FieldBaseState,
  FieldOptions,
  InferFieldState,
  ValidationCause,
  Validator
} from "../types";
import { requiredValidator } from "../utilities/validators";

export type FieldProviderOptions<
  TFieldValue = any,
  TValidator extends Validator<TFieldValue> = Validator<TFieldValue>
> = PropsWithChildren<FieldOptions<TFieldValue, TValidator>>;

export const FieldStoreContext = createContext<RefObject<FieldStore> | null>(
  null
);

type FieldStoreManagerProps<TFieldValue = any> = PropsWithChildren<{
  store: FieldStore<TFieldValue>;
}>;

function FieldStoreManager<TFieldValue = any>({
  children,
  store
}: FieldStoreManagerProps<TFieldValue>) {
  const { validate } = useFieldActions();

  // Handle initialize events
  // useAtomValue(
  //   loadable(
  //     useMemoStable(
  //       () =>
  //         atomWithEffect((get, set) => {
  //           const initialValue = get(store.api.atom.initialValue);

  //           const abortController = new AbortController();
  //           (async () => {
  //             try {
  //               const options = get(store.api.atom.options);

  //               await delay(options.debounceMs);
  //               abortController.signal.throwIfAborted();

  //               if (get(store.api.atom.dirty)) {
  //                 return;
  //               }

  //               set(
  //                 store.api.atom.value as WritableAtom<
  //                   TFieldValue,
  //                   [SetStateAction<TFieldValue> | typeof RESET],
  //                   void
  //                 >,
  //                 initialValue
  //               );
  //               set(
  //                 store.api.atom.blurred as WritableAtom<
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
  //                 store.api.atom.validating as WritableAtom<
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
  //                 store.api.atom.validationResults as WritableAtom<
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
  useAtomValue(
    loadable(
      useMemoStable(
        () =>
          atomWithEffect((get, set) => {
            const value = get(store.api.atom.value);

            const abortController = new AbortController();
            (async () => {
              try {
                const options = get(store.api.atom.options);

                await delay(options.debounceMs);
                abortController.signal.throwIfAborted();

                if (options.onChange) {
                  await Promise.resolve(
                    options.onChange({
                      get,
                      set,
                      store
                    })
                  );

                  // Do not perform validation if the field if changed by the onChange callback
                  abortController.signal.throwIfAborted();
                }

                const promises = [] as Promise<void>[];
                promises.push(validate(value, ValidationCause.CHANGE));

                const blurred = get(store.api.atom.blurred);
                if (blurred) {
                  promises.push(validate(value, ValidationCause.BLUR));
                }

                const submitAttempts = get(formStore.api.atom.submitAttempts);
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
          }),
        [validate]
      )
    )
  );

  // Handle focus and blur events
  useAtomValue(
    loadable(
      useMemoStable(
        () =>
          atomWithEffect((get, set) => {
            const focused = get(store.api.atom.focused);

            const abortController = new AbortController();
            (async () => {
              try {
                const options = get(store.api.atom.options);

                await delay(options.debounceMs);
                abortController.signal.throwIfAborted();

                if (isBoolean(focused)) {
                  if (!get(store.api.atom.touched)) {
                    set(
                      store.api.atom.touched as WritableAtom<
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
                          store
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
                          store
                        })
                      );

                      // Do not perform validation if the field if changed by the onBlur callback
                      abortController.signal.throwIfAborted();
                    }

                    const value = get(store.api.atom.value);

                    const promises = [] as Promise<void>[];
                    promises.push(validate(value, ValidationCause.BLUR));

                    const submitAttempts = get(
                      formStore.api.atom.submitAttempts
                    );
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
          }),
        [validate]
      )
    )
  );

  return <>{children}</>;
}

export const FieldProvider = <
  TFieldValue = any,
  TValidator extends Validator<TFieldValue> = Validator<TFieldValue>
>({
  children,
  ...props
}: FieldProviderOptions<TFieldValue, TValidator>) => {
  const theme = useThemeName();

  const formStore = useFormStore();
  const formOptions = formStore.get.options();
  const formName = formStore.get.name();

  const defaultValue = useMemo(
    () =>
      (props.defaultValue !== undefined
        ? props.defaultValue
        : getField(formOptions.defaultValues, props.name)) ?? null,
    [formOptions.defaultValues, props.defaultValue, props.name]
  );

  const options = useMemo(() => {
    const result = deepMerge(
      deepMerge(
        {
          theme,
          disabled: false,
          required: false,
          size: "$true",
          debounceMs: 250,
          isEqual,
          validate: {}
        },
        formOptions.defaultFieldOptions
      ),
      props
    ) as FieldBaseState<TFieldValue>["options"];

    result.defaultValue = defaultValue;
    result.validate.onBlur = [
      ...(result.validate?.onBlur ?? ([] as TValidator[])),
      ...(result.required ? [requiredValidator] : [])
    ];

    return result;
  }, [theme, formOptions.defaultFieldOptions, props]);

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

  const fieldStore = useMemo(
    () => createFieldStore<TFieldValue>(options.name),
    [options.name]
  );

  return (
    <FieldStoreContext.Provider value={useRef(fieldStore as FieldStore)}>
      <fieldStore.Provider
        scope={`${formName}:${String(options.name)}`}
        initialValues={{
          required: options.required as InferFieldState<TFieldValue, boolean>,
          disabled: options.disabled as InferFieldState<TFieldValue, boolean>,
          // value: defaultValue,
          // initialValue: defaultValue,
          options
        }}>
        <FieldStoreManager<TFieldValue> store={fieldStore}>
          {children}
        </FieldStoreManager>
      </fieldStore.Provider>
    </FieldStoreContext.Provider>
  );
};
