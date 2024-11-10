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

import { ColorThemeName } from "@cyclone-ui/colors";
import { SelectOption } from "@storm-stack/types/utility-types/form";
import { atom, Atom } from "jotai";
import { FieldOptions, FieldStatus, InferFieldState } from "../types";

export const atomWithFieldStatus = (
  themeAtom: Atom<string | undefined>
): Atom<FieldStatus> => {
  return atom<FieldStatus>(get => {
    const theme = get(themeAtom);

    if (theme) {
      if (theme?.includes(ColorThemeName.HELP)) {
        return FieldStatus.HELP;
      } else if (theme?.includes(ColorThemeName.SUCCESS)) {
        return FieldStatus.SUCCESS;
      } else if (theme?.includes(ColorThemeName.INFO)) {
        return FieldStatus.INFO;
      } else if (theme?.includes(ColorThemeName.WARNING)) {
        return FieldStatus.WARNING;
      } else if (theme?.includes(ColorThemeName.DANGER)) {
        return FieldStatus.ERROR;
      }
    }

    return FieldStatus.BASE;
  });
};

export const atomWithFieldItems = <TFieldValue = any>(
  optionsAtom: Atom<FieldOptions>,
  valueAtom: Atom<TFieldValue | null>,
  disabledAtom: Atom<InferFieldState<TFieldValue, boolean>>
): Atom<SelectOption[]> => {
  return atom<SelectOption[]>(get => {
    const options = get(optionsAtom);
    const value = get(valueAtom);
    const disabled = get(disabledAtom);

    return (options.items ?? []).reduce((ret, item, index) => {
      if (!ret.some(existing => existing.value === item.value)) {
        ret.push({
          index,

          ...item,
          selected: item.value === value,
          disabled: Boolean(item.disabled) || Boolean(disabled)
        });
      }

      return ret;
    }, [] as SelectOption[]);
  });
};
