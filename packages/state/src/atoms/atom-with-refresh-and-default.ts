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

import type { Getter, PrimitiveAtom } from "jotai";
import { baseAtom } from "../base/base-atom";

export const atomWithRefreshAndDefault = <TValue>(
  refreshAtom: PrimitiveAtom<number>,
  getDefault: (get: Getter) => TValue
) => {
  const overwrittenAtom = baseAtom<{ refresh: number; value: TValue } | null>(
    null
  );

  return baseAtom(
    get => {
      const lastState = get(overwrittenAtom);
      if (lastState && lastState.refresh === get(refreshAtom)) {
        return lastState.value;
      }
      return getDefault(get);
    },
    (get, set, update: TValue) => {
      set(overwrittenAtom, { refresh: get(refreshAtom), value: update });
    }
  );
};
