import type { Atom } from "jotai/vanilla";
import { baseAtom } from "../base/base-atom";
import { isAtom } from "../utilities/is-atom";

/**
 * Create an atom with a wrapper that allows functions as values.
 *
 * @remarks
 * Jotai atoms don't allow functions as values by default. This function is a
 * drop-in replacement for `atom` that wraps functions in an object while
 * leaving non-functions unchanged. The wrapper object should be completely
 * invisible to consumers of the atom.
 *
 * @param initialValue - The initial value of the atom
 * @returns An atom with a wrapper that allows functions as values.
 */
export const atomWithPassThrough = <TValue>(
  initialValueOrAtom: Atom<TValue> | TValue
): typeof initialValueOrAtom extends Atom<unknown>
  ? typeof initialValueOrAtom
  : Atom<TValue> => {
  const rootAtom = isAtom(initialValueOrAtom)
    ? initialValueOrAtom
    : baseAtom<TValue>(initialValueOrAtom);

  return rootAtom;
};
