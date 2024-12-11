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

import { isFunction, isPlainObject } from "@storm-stack/types";
import type { Atom, WritableAtom } from "jotai";

/**
 * Check if the value is a [Jotai](https://jotai.org) `Atom` object
 *
 * @param value - The value to check
 * @returns A boolean indicating whether the value is an `Atom` object
 */
export const isAtom = <TValue = unknown>(
  value: unknown
): value is Atom<TValue> => {
  try {
    return isPlainObject(value) && "read" in value && isFunction(value.read);
  } catch {
    return false;
  }
};

/**
 * Check if the value is a [Jotai](https://jotai.org) `WritableAtom` object
 *
 * @param value - The value to check
 * @returns A boolean indicating whether the value is a `WritableAtom` object
 */
export const isWritableAtom = <
  TValue = unknown,
  TArgs extends unknown[] = unknown[],
  TResult extends Promise<void> | void = Promise<void> | void
>(
  value: unknown
): value is WritableAtom<TValue, TArgs, TResult> => {
  try {
    return isAtom<TValue>(value) && "write" in value && isFunction(value.write);
  } catch {
    return false;
  }
};

/**
 * Check if the value is a [Jotai](https://jotai.org) `Atom` object with the ability to reset to it's initial value
 *
 * @param value - The value to check
 * @returns A boolean indicating whether the value is a `Atom` object with the ability to reset to it's initial value
 */
export const isResetAtom = <
  TValue = unknown,
  TArgs extends unknown[] = unknown[],
  TResult extends Promise<void> | void = Promise<void> | void
>(
  value: unknown
): value is WritableAtom<TValue, TArgs, TResult> => {
  try {
    return isWritableAtom<TValue>(value) && "init" in value;
  } catch {
    return false;
  }
};
