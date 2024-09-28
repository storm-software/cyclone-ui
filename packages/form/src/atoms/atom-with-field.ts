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

import { atomWithTanstack } from "@cyclone-ui/state";
import {
  DeepKeys,
  DeepValue,
  FieldApi,
  FieldState,
  Validator
} from "@tanstack/react-form/nextjs";
import { ValibotValidator } from "@tanstack/valibot-form-adapter";
import { Atom } from "jotai";

/**
 * Creates an atom that creates and wraps a Tanstack Field.
 *
 *
 * @remarks
 * Please see the {@link https://tanstack.com/form | Tanstack Form documentation} for more information.
 *
 * @param options - The Tanstack Field options to use when creating the FieldApi.
 * @returns An atom that wraps a Tanstack Field.
 */
export const atomWithField = <
  TFormValues,
  TFieldName extends DeepKeys<TFormValues>,
  TFieldValidator extends
    | Validator<DeepValue<TFormValues, TFieldName>, unknown>
    | undefined = undefined,
  TFieldValue extends DeepValue<TFormValues, TFieldName> = DeepValue<
    TFormValues,
    TFieldName
  >
>(
  field: FieldApi<
    TFormValues,
    TFieldName,
    TFieldValidator,
    ValibotValidator,
    TFieldValue
  >
): Atom<FieldState<TFieldValue>> => {
  return atomWithTanstack<FieldState<TFieldValue>>(field.store);
};
