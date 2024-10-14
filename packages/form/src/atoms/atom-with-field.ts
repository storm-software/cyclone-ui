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
import { atom, Atom } from "jotai";
import { FieldStatus } from "../types";

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

// export const getFieldIndicator = <TFieldValue = any>(
//   fieldIndicators: InferFieldState<TFieldValue, boolean>,
//   ifValueOverride?: boolean
// ): boolean => {
//   if (isBoolean(fieldIndicators)) {
//     return Boolean(fieldIndicators);
//   } else {
//     return !!Object.entries(fieldIndicators).reduce(
//       (ret, [_, fieldIndicator]) => {
//         if (isBoolean(fieldIndicator)) {
//           return isSet(ifValueOverride) && ret === ifValueOverride
//             ? ret
//             : ret && fieldIndicator;
//         }

//         return isSet(ifValueOverride) && ret === ifValueOverride
//           ? ret
//           : ret && getFieldIndicator(fieldIndicator, ifValueOverride);
//       },
//       undefined as undefined | boolean
//     );
//   }
// };

// export const atomWithFieldIndicator = <TFieldValue>(
//   fieldIndicatorAtom: Atom<InferFieldState<TFieldValue, boolean>>,
//   ifValueOverride?: boolean
// ) => {
//   return atom<boolean>(get => {
//     return getFieldIndicator(get(fieldIndicatorAtom), ifValueOverride);
//   });
// };
