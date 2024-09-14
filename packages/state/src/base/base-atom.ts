/* eslint-disable no-redeclare */
import type { Atom, PrimitiveAtom, WritableAtom } from "jotai/vanilla";
import { atom as jotaiAtom } from "jotai/vanilla";
import { setAtomDebugLabel } from "../utilities/set-atom-debug";

type Getter = <Value>(atom: Atom<Value>) => Value;
type Setter = <Value, Args extends unknown[], Result>(
  atom: WritableAtom<Value, Args, Result>,
  ...args: Args
) => Result;
type SetAtom<Args extends unknown[], Result> = <A extends Args>(
  ...args: A
) => Result;
/**
 * setSelf is for internal use only and subject to change without notice.
 */
type Read<Value, SetSelf = never> = (
  get: Getter,
  options: {
    readonly setSelf: SetSelf;
    readonly signal: AbortSignal;
  }
) => Value;
type Write<Args extends unknown[], Result> = (
  get: Getter,
  set: Setter,
  ...args: Args
) => Result;
type WithInitialValue<Value> = {
  init: Value;
};

// writable derived atom
export function baseAtom<TValue, TArgs extends unknown[], TResult>(
  read: Read<TValue, SetAtom<TArgs, TResult>>,
  write: Write<TArgs, TResult>
): WritableAtom<TValue, TArgs, TResult>;

// read-only derived atom
export function baseAtom<TValue>(read: Read<TValue>): Atom<TValue>;

// write-only derived atom
export function baseAtom<TValue, TArgs extends unknown[], TResult>(
  initialValue: TValue,
  write: Write<TArgs, TResult>
): WithInitialValue<TValue> & WritableAtom<TValue, TArgs, TResult>;

// primitive atom
export function baseAtom<TValue>(
  initialValue: TValue
): PrimitiveAtom<TValue> & WithInitialValue<TValue>;

/**
 * Create a "base" atom that can be used to create derived atoms.
 * The base atom is a writable atom that can be used to create derived atoms.
 *
 * @remarks
 * This function serves as a wrapper around the `atom` function from the Jotai library that adds debugging helpers.
 *
 * @param readOrInitialValue - The initial value of the atom or a read function
 * @param write - The write function for the atom
 * @returns The base atom
 */
export function baseAtom<TValue, TArgs extends unknown[], TResult>(
  readOrInitialValue: Read<TValue, SetAtom<TArgs, TResult>> | TValue,
  write?: Write<TArgs, TResult>
) {
  const result = jotaiAtom<TValue, TArgs, TResult>(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readOrInitialValue as any,
    write as Write<TArgs, TResult>
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (result as any).setDebugLabel = (label: string) => {
    setAtomDebugLabel(result, label);
  };

  return result;
}
