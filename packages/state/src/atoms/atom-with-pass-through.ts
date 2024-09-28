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
