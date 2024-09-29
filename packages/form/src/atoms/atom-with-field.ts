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

import { ColorRole } from "@cyclone-ui/colors";
import { atomWithTanstack } from "@cyclone-ui/state";
import {
  DeepKeys,
  DeepValue,
  FieldApi,
  FieldState,
  Validator
} from "@tanstack/react-form/nextjs";
import { ValibotValidator } from "@tanstack/valibot-form-adapter";
import { atom, Atom } from "jotai";
import { FieldStatus } from "../types";

/**
 * Creates an atom that creates and wraps a Tanstack Field.
 *
 *
 * @remarks
 * Please see the {@link https://tanstack.com/field | Tanstack Form documentation} for more information.
 *
 * @param field - The Tanstack FieldApi.
 * @returns An atom that wraps a Tanstack Field Store.
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

export const atomWithFieldStatus = (
  themeAtom: Atom<string | undefined>
): Atom<FieldStatus> => {
  return atom<FieldStatus>(get => {
    const theme = get(themeAtom);

    if (theme) {
      if (theme.toLowerCase().includes(ColorRole.HELP)) {
        return FieldStatus.HELP;
      } else if (theme.toLowerCase().includes(ColorRole.SUCCESS)) {
        return FieldStatus.SUCCESS;
      } else if (theme.toLowerCase().includes(ColorRole.INFO)) {
        return FieldStatus.INFO;
      } else if (theme.toLowerCase().includes(ColorRole.WARNING)) {
        return FieldStatus.WARNING;
      } else if (theme.toLowerCase().includes(ColorRole.ERROR)) {
        return FieldStatus.ERROR;
      }
    }

    return FieldStatus.BASE;
  });
};
