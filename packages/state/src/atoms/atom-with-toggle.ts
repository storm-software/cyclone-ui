import type { WritableAtom } from "jotai";
import { baseAtom } from "../base/base-atom";

export function atomWithToggle(
  initialValue?: boolean
): WritableAtom<boolean, [boolean | undefined], void> {
  const anAtom = baseAtom(initialValue, (get, set, nextValue?: boolean) => {
    const update = nextValue ?? !get(anAtom);
    set(anAtom, update);
  });

  return anAtom as WritableAtom<boolean, [boolean | undefined], void>;
}
