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
import { delay } from "@storm-stack/utilities/helper-fns/delay";
import { isEqual } from "@storm-stack/utilities/helper-fns/is-equal";
import { AbortError } from "@storm-stack/utilities/types";
import { useThemeName } from "@tamagui/core";
import { useAtomValue } from "jotai";
import { loadable } from "jotai/utils";
import { PropsWithChildren } from "react";
import { useFormActions } from "../hooks/use-form-actions";
import { FormStore, formStore } from "../stores/form-store";
import {
  FormBaseState,
  FormOptions,
  ValidationCause,
  Validator
} from "../types";

type FormStoreManagerProps = PropsWithChildren<{
  store: FormStore;
}>;

function FormStoreManager({ children, store }: FormStoreManagerProps) {
  const { validate } = useFormActions();

  useAtomValue(
    loadable(
      useMemoStable(
        () =>
          atomWithEffect((get, set) => {
            const values = get(store.api.atom.values);

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

                  // Do not perform validation if the form if changed by the onChange callback
                  abortController.signal.throwIfAborted();
                }

                const promises = [] as Promise<void>[];
                promises.push(validate(values, ValidationCause.CHANGE));

                const blurred = get(store.api.atom.blurred);
                if (blurred) {
                  promises.push(validate(values, ValidationCause.BLUR));
                }

                const submitAttempts = get(formStore.api.atom.submitAttempts);
                if (submitAttempts > 0) {
                  promises.push(validate(values, ValidationCause.SUBMIT));
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

  return <>{children}</>;
}

export type FormProviderOptions<
  TFormValues extends Record<string, any> = Record<string, any>,
  TValidator extends Validator<TFormValues> = Validator<TFormValues>
> = PropsWithChildren<FormOptions<TFormValues, TValidator>>;

export const FormProvider = <
  TFormValues extends Record<string, any> = Record<string, any>,
  TValidator extends Validator<TFormValues> = Validator<TFormValues>
>({
  children,
  ...options
}: FormProviderOptions<TFormValues, TValidator>) => {
  const theme = useThemeName();

  return (
    <formStore.Provider
      scope={String(options.name)}
      initialValues={{
        name: String(options.name),
        disabled: Boolean(options.disabled),
        initialValues: options.defaultValues ?? {},
        values: options.defaultValues ?? {},
        options: {
          theme,
          debounceMs: 250,
          validate: {},
          isEqual,
          ...options
        } as FormBaseState["options"]
      }}>
      <FormStoreManager store={formStore}>{children}</FormStoreManager>
    </formStore.Provider>
  );
};
