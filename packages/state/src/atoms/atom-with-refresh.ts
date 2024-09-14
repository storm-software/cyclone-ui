import type { Getter } from "jotai";
import { baseAtom } from "../base/base-atom";

export function atomWithRefresh<TValue>(fn: (get: Getter) => TValue) {
  const refreshCounter = baseAtom(0);

  return baseAtom(
    get => {
      get(refreshCounter);
      return fn(get);
    },
    (_, set) => set(refreshCounter, i => i + 1)
  );
}
