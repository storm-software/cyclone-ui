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

/* eslint-disable unicorn/no-null */

import { ColorRole } from "@cyclone-ui/colors";
import { atomWithTanstack } from "@cyclone-ui/state";
import { isSet } from "@storm-stack/types/type-checks/is-set";
import { atom, Atom } from "jotai";
import {
  FieldOptions,
  FieldStatus,
  FieldValueType,
  InferFieldValue
} from "../types";

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

export type FieldAtomFamilyOptions = {
  field: FieldApi<any, any, any, any>;
  formName: string;
};

// export const fieldAtomFamily = atomFamily<
//   FieldAtomFamilyOptions,
//   ReturnType<typeof atomWithField>
// >(
//   (options: FieldAtomFamilyOptions) => atomWithField(options.field),
//   (options1, options2) =>
//     `${options1.formName}:${options1.field.name}` ===
//     `${options2.formName}:${options2.field.name}`
// );

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

export const atomWithFieldValue = <
  TFieldOptions extends FieldOptions = FieldOptions,
  TFieldValue extends
    InferFieldValue<TFieldOptions> = InferFieldValue<TFieldOptions>
>(
  fieldAtom: Atom<FieldApi<
    any,
    any,
    any,
    ValibotValidator,
    TFieldValue
  > | null>,
  optionsAtom: Atom<TFieldOptions>
) => {
  return atom<TFieldValue>(get => {
    const options = get(optionsAtom);
    const field = get(fieldAtom);

    return (
      options.valueType === FieldValueType.STRING
        ? isSet(field?.state.value)
          ? String(field.state.value)
          : ""
        : options.valueType === FieldValueType.BOOLEAN
          ? isSet(field?.state.value)
            ? Boolean(field.state.value)
            : false
          : isSet(field?.state.value)
            ? field.state.value
            : null
    ) as TFieldValue;
  });
};
