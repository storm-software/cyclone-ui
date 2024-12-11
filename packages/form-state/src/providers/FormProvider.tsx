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
import { delay } from "@storm-stack/utilities/helper-fns/delay";
import { AbortError } from "@storm-stack/utilities/types";
import { useThemeName } from "@tamagui/core";
import { PropsWithChildren, useEffect } from "react";
import { useFormActions } from "../hooks/use-form-actions";
import { FormApi } from "../molecules/form-molecule";
import { FormOptions, ValidationCause } from "../types";

type FormStateManagerProps<
  TFormValues extends Record<string, any> = Record<string, any>
> = PropsWithChildren<FormOptions<TFormValues>>;

function FormStateManager<
  TFormValues extends Record<string, any> = Record<string, any>
>(props: FormStateManagerProps<TFormValues>) {
  const { validate } = useFormActions();
  const molecule = FormApi.useMolecule();
  const theme = useThemeName();

  const setOptions = FormApi.use().options.set();
  useEffect(() => {
    setOptions({ theme, ...props } as FormOptions<Record<string, any>>);
  }, [setOptions]);

  useAtomEffect(
    (get, set) => {
      const values = get(molecule.values);
      const options = get(molecule.options);

      const abortController = new AbortController();
      (async () => {
        try {
          await delay(options.debounceMs);
          abortController.signal.throwIfAborted();

          if (options.onChange) {
            await Promise.resolve(
              options.onChange({
                get,
                set,
                atoms: molecule
              })
            );

            // Do not perform validation if the form if changed by the onChange callback
            abortController.signal.throwIfAborted();
          }

          const promises = [] as Promise<void>[];
          promises.push(validate(values, ValidationCause.CHANGE));

          const blurred = get(molecule.blurred);
          if (blurred) {
            promises.push(validate(values, ValidationCause.BLUR));
          }

          const submitAttempts = get(molecule.submitAttempts);
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
    },
    [validate]
  );

  return null;
}

export type FormProviderOptions<
  TFormValues extends Record<string, any> = Record<string, any>
> = PropsWithChildren<FormOptions<TFormValues> & { name: string }>;

export const FormProvider = <
  TFormValues extends Record<string, any> = Record<string, any>
>({
  children,
  name,
  ...props
}: FormProviderOptions<TFormValues>) => {
  return (
    <FormApi.Provider scope={name}>
      <FormStateManager {...props} />
      {children}
    </FormApi.Provider>
  );
};
