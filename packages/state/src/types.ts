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
