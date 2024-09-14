import { atomWithReducer } from "jotai/utils";

export function atomWithCompare<TValue>(
  initialValue: TValue,
  areEqual: (prev: TValue, next: TValue) => boolean
) {
  return atomWithReducer(initialValue, (prev: TValue, next: TValue) => {
    if (areEqual(prev, next)) {
      return prev;
    }

    return next;
  });
}
