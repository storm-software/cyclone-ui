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
import { atom } from "jotai";
import { atomWithDefault } from "jotai/utils";
import { FieldStatus } from "../types";
export const atomWithFieldStatus = (themeAtom) => {
    return atom(get => {
        const theme = get(themeAtom);
        if (theme) {
            if (theme?.includes("discovery")) {
                return FieldStatus.HELP;
            }
            else if (theme?.includes("success")) {
                return FieldStatus.SUCCESS;
            }
            else if (theme?.includes("info")) {
                return FieldStatus.INFO;
            }
            else if (theme?.includes("warning")) {
                return FieldStatus.WARNING;
            }
            else if (theme?.includes("danger")) {
                return FieldStatus.ERROR;
            }
        }
        return FieldStatus.BASE;
    });
};
export const atomWithFieldItems = (optionsAtom, valueAtom, disabledAtom) => {
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
        }, []);
    });
};
//# sourceMappingURL=atom-with-field.js.map