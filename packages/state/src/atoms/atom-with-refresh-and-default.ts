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
