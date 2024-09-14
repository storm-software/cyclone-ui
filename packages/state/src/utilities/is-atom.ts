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

export const isAtom = <TValue = unknown>(
  value: unknown
): value is Atom<TValue> => {
  try {
    return isPlainObject(value) && "read" in value && isFunction(value.read);
  } catch {
    return false;
  }
};

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
