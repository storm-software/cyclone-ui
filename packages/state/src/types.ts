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

import type { Atom, SetStateAction, WritableAtom } from "jotai";

export type IsAtom<T> = [T] extends [Atom<unknown>] ? true : false;
export type IsWritableAtom<T> = [T] extends [
  WritableAtom<unknown, unknown[], Promise<void> | void>
]
  ? true
  : false;
export type IsWriteOnlyAtom<T> = [T] extends [
  WritableAtom<null, unknown[], Promise<void> | void>
]
  ? true
  : false;

export type BaseAtom<
  TValue,
  TArgs extends unknown[] = [SetStateAction<TValue>],
  TResult = void
> = WritableAtom<TValue, TArgs, TResult>;
