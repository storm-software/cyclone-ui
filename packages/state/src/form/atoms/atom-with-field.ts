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

import type { SelectOption, SelectOptionValue } from "@stryke/types/form";
import type { Atom, SetStateAction, WritableAtom } from "jotai";
import { atom } from "jotai";
import type { RESET } from "jotai/utils";
import { atomWithDefault } from "jotai/utils";
import type { FieldOptions, FieldStatus, InferFieldState } from "../types";

export const atomWithFieldStatus = (
  themeAtom: Atom<string | undefined>
): Atom<FieldStatus> => {
  return atom<FieldStatus>(get => {
    const theme = get(themeAtom);

    if (theme) {
      if (theme?.includes("secondary")) {
        return "secondary";
      } else if (theme?.includes("discovery")) {
        return "discovery";
      } else if (theme?.includes("success")) {
        return "success";
      } else if (theme?.includes("info")) {
        return "info";
      } else if (theme?.includes("warning")) {
        return "warning";
      } else if (theme?.includes("danger")) {
        return "danger";
      } else if (theme?.includes("positive")) {
        return "positive";
      } else if (theme?.includes("negative")) {
        return "negative";
      }
    }

    return "primary";
  });
};

export const atomWithFieldItems = <TFieldValue = any>(
  optionsAtom: Atom<FieldOptions<TFieldValue>>,
  valueAtom: Atom<TFieldValue | null>,
  disabledAtom: Atom<InferFieldState<TFieldValue, boolean>>
): WritableAtom<
  SelectOption<SelectOptionValue, string>[],
  [typeof RESET | SetStateAction<SelectOption<SelectOptionValue, string>[]>],
  void
> => {
  return atomWithDefault(get => {
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
