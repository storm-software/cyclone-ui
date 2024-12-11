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

import type { FileResult } from "@storm-stack/types/utility-types/file";
import type {
  Atom,
  ExtractAtomArgs,
  PrimitiveAtom,
  SetStateAction,
  WritableAtom
} from "jotai";
import { RESET } from "jotai/utils";

export type SetStateActionWithReset<Value> =
  | Value
  | typeof RESET
  | ((prev: Value) => Value | typeof RESET);
export type WithInitialValue<Value> = {
  init: Value;
};

/**
 * A type that checks if the value is a [Jotai](https://jotai.org) `Atom` object
 */
export type IsAtom<T> = [T] extends [Atom<unknown>] ? true : false;

/**
 * A type that checks if the value is a [Jotai](https://jotai.org) `WritableAtom` object
 */
export type IsWritableAtom<T> = [T] extends [
  WritableAtom<unknown, unknown[], Promise<void> | void>
]
  ? true
  : false;

/**
 * A type that checks if the value is a [Jotai](https://jotai.org) `WritableAtom` object without the ability to be read
 */
export type IsWriteOnlyAtom<T> = [T] extends [
  WritableAtom<null, unknown[], Promise<void> | void>
]
  ? true
  : false;

/**
 * A type that checks if the value is a [Jotai](https://jotai.org) `Atom` object with the ability to reset to it's initial value
 */
export type IsResetAtom<T> =
  IsWritableAtom<T> extends true
    ? ExtractAtomArgs<T> extends [SetStateActionWithReset<infer U>]
      ? true
      : false
    : false;

export type BaseAtom<
  TValue,
  TArgs extends unknown[] = [SetStateAction<TValue>],
  TResult = void
> = WritableAtom<TValue, TArgs, TResult>;

export type AtomRecord<T> = {
  [K in keyof T]: Atom<T[K]>;
};

export type WritableAtomRecord<T> = {
  [K in keyof T]: WritableAtom<
    T[K],
    [SetStateAction<T[K]> | typeof RESET],
    void
  >;
};

export type ClientFileResult = FileResult & {
  id: number;
};

export type SplitAtomAction<TValue> =
  | {
      type: "remove";
      atom: PrimitiveAtom<TValue>;
    }
  | {
      type: "insert";
      value: TValue;
      before?: PrimitiveAtom<TValue>;
    }
  | {
      type: "move";
      atom: PrimitiveAtom<TValue>;
      before?: PrimitiveAtom<TValue>;
    };
