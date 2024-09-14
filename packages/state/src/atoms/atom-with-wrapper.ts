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

import { isFunction } from "@storm-stack/types";
import type { WritableAtom } from "jotai";
import { baseAtom } from "../base/base-atom";

// eslint-disable-next-line no-unused-vars
type WrapFn<T> = T extends (...args: infer _A) => infer _R ? { __fn: T } : T;

const wrapFn = <T>(fnOrValue: T): WrapFn<T> =>
  (isFunction(fnOrValue) ? { __fn: fnOrValue } : fnOrValue) as any;

type UnwrapFn<T> = T extends { __fn: infer U } ? U : T;

const unwrapFn = <T>(wrappedFnOrValue: T): UnwrapFn<T> =>
  (wrappedFnOrValue &&
  typeof wrappedFnOrValue === "object" &&
  "__fn" in wrappedFnOrValue
    ? wrappedFnOrValue.__fn
    : wrappedFnOrValue) as any;

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
export const atomWithWrapper = <TValue>(
  initialValue: TValue
): WritableAtom<TValue, [TValue], Promise<void> | void> => {
  const rootAtom = baseAtom(wrapFn(initialValue));

  return baseAtom(
    get => unwrapFn(get(rootAtom)) as TValue,
    (_get, set, value) => set(rootAtom, wrapFn(value))
  );
};
