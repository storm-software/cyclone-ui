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

"use client";

import { useField as useTanstackField } from "@tanstack/react-form";
import { DeepKeys, DeepValue, Validator } from "@tanstack/react-form/nextjs";
import { type ValibotValidator } from "@tanstack/valibot-form-adapter";
import type { UseFieldOptions, UseFieldReturn } from "../types";

export const useField = <
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
  options: UseFieldOptions<
    TFormValues,
    TFieldName,
    TFieldValidator,
    TFieldValue
  >
): UseFieldReturn<TFormValues, TFieldName, TFieldValidator> => {
  return useTanstackField<
    TFormValues,
    TFieldName,
    TFieldValidator,
    ValibotValidator,
    TFieldValue
  >(options) as UseFieldReturn<TFormValues, TFieldName, TFieldValidator>;
};
