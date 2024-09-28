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
import { FormApi, FormState } from "@tanstack/react-form/nextjs";
import { type ValibotValidator } from "@tanstack/valibot-form-adapter";
import { Atom } from "jotai";

/**
 * Creates an atom that creates and wraps a Tanstack Form.
 *
 *
 * @remarks
 * Please see the {@link https://tanstack.com/form | Tanstack Form documentation} for more information.
 *
 * @param options - The Tanstack Form options to use when creating the FormApi.
 * @returns An atom that wraps a Tanstack form.
 */
export const atomWithForm = <TFormValues>(
  form: FormApi<TFormValues, ValibotValidator>
): Atom<FormState<TFormValues>> => {
  return atomWithTanstack(form.store);
};
