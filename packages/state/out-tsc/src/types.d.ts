import type { FileResult } from "@stryke/types/file";
import type { Atom, createStore, ExtractAtomArgs, ExtractAtomValue, PrimitiveAtom, SetStateAction, WritableAtom } from "jotai";
import type { RESET } from "jotai/utils";
export type JotaiStore = ReturnType<typeof createStore>;
export type SetStateActionWithReset<Value> = Value | typeof RESET | ((prev: Value) => Value | typeof RESET);
export interface WithInitialValue<Value> {
    init: Value;
}
/**
 * A type that checks if the value is a [Jotai](https://jotai.org) `Atom` object
 */
export type IsAtom<T> = [T] extends [Atom<unknown>] ? true : false;
/**
 * A type that checks if the value is a [Jotai](https://jotai.org) `WritableAtom` object
 */
export type IsWritableAtom<T> = [T] extends [
    WritableAtom<unknown, unknown[], Promise<void> | void>
] ? true : false;
/**
 * A type that checks if the value is a [Jotai](https://jotai.org) `WritableAtom` object without the ability to be read
 */
export type IsWriteOnlyAtom<T> = [T] extends [
    WritableAtom<null, unknown[], Promise<void> | void>
] ? true : false;
/**
 * A type that checks if the value is a [Jotai](https://jotai.org) `Atom` object with the ability to reset to it's initial value
 */
export type IsResetAtom<T> = IsWritableAtom<T> extends true ? ExtractAtomArgs<T> extends [SetStateActionWithReset<infer _U>] ? true : false : false;
export type BaseAtom<TValue, TArgs extends unknown[] = [SetStateAction<TValue>], TResult = void> = WritableAtom<TValue, TArgs, TResult>;
export type AtomRecord<T> = {
    [K in keyof T]: Atom<T[K]>;
};
/**
 * Constraint for objects whose values are Jotai atoms.
 *
 * Prefer `TState extends AtomRecordConstraint<TState>` over
 * `TState extends AtomRecord<any>` — the latter requires a string index
 * signature and rejects fixed-key interfaces such as `FormAtoms`.
 */
export type AtomRecordConstraint<T extends object = object> = {
    [K in keyof T]: Atom<unknown>;
};
export type WritableAtomRecord<T extends object = object> = {
    [K in keyof T]: WritableAtom<T[K], [
        SetStateAction<T[K]> | typeof RESET
    ], void>;
};
export type ExtractAtomRecordValues<T extends AtomRecordConstraint<T>> = {
    [K in keyof T]: ExtractAtomValue<T[K]>;
};
export type ClientFileResult = FileResult & {
    id: number;
};
export type SplitAtomAction<TValue> = {
    type: "remove";
    atom: PrimitiveAtom<TValue>;
} | {
    type: "insert";
    value: TValue;
    before?: PrimitiveAtom<TValue>;
} | {
    type: "move";
    atom: PrimitiveAtom<TValue>;
    before?: PrimitiveAtom<TValue>;
};
//# sourceMappingURL=types.d.ts.map