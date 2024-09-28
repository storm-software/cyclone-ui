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

import {
  FormOptions,
  mergeForm,
  useForm as useTanstackForm,
  useTransform
} from "@tanstack/react-form";
import { ServerFormState } from "@tanstack/react-form/nextjs";
import { type ValibotValidator } from "@tanstack/valibot-form-adapter";
import type { UseFormReturn } from "../types";

export const useForm = <TFormValues>(
  state: ServerFormState<TFormValues>,
  options: FormOptions<TFormValues, ValibotValidator> = {}
): UseFormReturn<TFormValues> => {
  return useTanstackForm<TFormValues, any>({
    ...options,
    transform: useTransform(baseForm => mergeForm(baseForm, state!), [state])
  });
};
