/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

/* eslint-disable ts/no-unsafe-call -- bunshi/jotai molecule APIs and @stryke/async types */

import { delay } from "@stryke/async";
import { isEqual } from "@stryke/helpers/is-equal";
import { useThemeName } from "@tamagui/core";
import type { WritableAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import type { PropsWithChildren } from "react";
import { useEffect, useRef, useState } from "react";
import { useAtomEffect } from "../../base/hooks/use-atom-effect";
import type { FieldValidation } from "../hooks/form-field-validations";
import { FormFieldValidationsContext } from "../hooks/form-field-validations";
import { useFormActions } from "../hooks/use-form-actions";
import { FormApi } from "../molecules/form-molecule";
import type { FormErrors, FormOptions } from "../types";
import { ValidationCause } from "../types";
import { AbortError } from "../utilities/abort-error";
import { applyServerErrors, hasServerErrors } from "../utilities/server-errors";

/**
 * Show the form's `errors` option on its fields: during the first render (so
 * they are in the server HTML), then whenever it changes.
 */
const useServerErrors = (errors: FormErrors | undefined) => {
  const molecule = FormApi.useMolecule();
  const setResults = FormApi.use().validationResultsFields.set();
  const setSubmitAttempts = FormApi.use().submitAttempts.set();
  const hasErrors = hasServerErrors(errors);

  useHydrateAtoms(
    hasErrors
      ? ([
          [molecule.validationResultsFields, applyServerErrors({}, errors)],
          // Errors from a submission: show every field's errors, as after a
          // client-side submit attempt.
          [molecule.submitAttempts, 1]
        ] as unknown as [WritableAtom<unknown, [unknown], void>, unknown][])
      : []
  );

  // Starts at the hydrated errors, so mounting doesn't apply them again.
  const appliedRef = useRef(errors);
  useEffect(() => {
    if (isEqual(appliedRef.current, errors)) {
      return;
    }

    appliedRef.current = errors;
    setResults(previous => applyServerErrors(previous, errors));
    if (hasServerErrors(errors)) {
      setSubmitAttempts(previous => Math.max(previous, 1));
    }
  }, [errors, setResults, setSubmitAttempts]);
};

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
  // Hydrate during render so the first (and server) render sees the options.
  useHydrateAtoms([
    [molecule.options, { theme, ...props } as FormOptions<Record<string, any>>]
  ]);
  useEffect(() => {
    setOptions({ theme, ...props } as FormOptions<Record<string, any>>);
  }, [setOptions]);
  useServerErrors(props.errors);

  useAtomEffect(
    (get, set) => {
      const values = get(molecule.values);
      const options = get(molecule.options);

      const abortController = new AbortController();
      void (async () => {
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
  const [fieldValidations] = useState(() => new Set<FieldValidation>());

  return (
    <FormApi.Provider scope={name}>
      <FormFieldValidationsContext value={fieldValidations}>
        <FormStateManager {...props} />
        {children}
      </FormFieldValidationsContext>
    </FormApi.Provider>
  );
};
