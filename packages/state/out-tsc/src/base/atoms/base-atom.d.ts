import type { Atom, PrimitiveAtom, WritableAtom } from "jotai/vanilla";
import type { WithInitialValue } from "../../types";
type Getter = <Value>(atom: Atom<Value>) => Value;
type Setter = <Value, Args extends unknown[], Result>(atom: WritableAtom<Value, Args, Result>, ...args: Args) => Result;
type SetAtom<Args extends unknown[], Result> = <A extends Args>(...args: A) => Result;
/**
 * setSelf is for internal use only and subject to change without notice.
 */
type Read<Value, SetSelf = never> = (get: Getter, options: {
    readonly setSelf: SetSelf;
    readonly signal: AbortSignal;
}) => Value;
type Write<Args extends unknown[], Result> = (get: Getter, set: Setter, ...args: Args) => Result;
export declare function baseAtom<TValue, TArgs extends unknown[], TResult>(read: Read<TValue, SetAtom<TArgs, TResult>>, write: Write<TArgs, TResult>): WritableAtom<TValue, TArgs, TResult>;
export declare function baseAtom<TValue>(read: Read<TValue>): Atom<TValue>;
export declare function baseAtom<TValue, TArgs extends unknown[], TResult>(initialValue: TValue, write: Write<TArgs, TResult>): WithInitialValue<TValue> & WritableAtom<TValue, TArgs, TResult>;
export declare function baseAtom<TValue>(initialValue: TValue): PrimitiveAtom<TValue> & WithInitialValue<TValue>;
export {};
//# sourceMappingURL=base-atom.d.ts.map