import type { Atom, WritableAtom } from "jotai";
/**
 * Check if the value is a [Jotai](https://jotai.org) `Atom` object
 *
 * @param value - The value to check
 * @returns A boolean indicating whether the value is an `Atom` object
 */
export declare const isAtom: <TValue = unknown>(value: unknown) => value is Atom<TValue>;
/**
 * Check if the value is a [Jotai](https://jotai.org) `WritableAtom` object
 *
 * @param value - The value to check
 * @returns A boolean indicating whether the value is a `WritableAtom` object
 */
export declare const isWritableAtom: <TValue = unknown, TArgs extends unknown[] = unknown[], TResult extends Promise<void> | void = Promise<void> | void>(value: unknown) => value is WritableAtom<TValue, TArgs, TResult>;
/**
 * Check if the value is a [Jotai](https://jotai.org) `Atom` object with the ability to reset to it's initial value
 *
 * @param value - The value to check
 * @returns A boolean indicating whether the value is a `Atom` object with the ability to reset to it's initial value
 */
export declare const isResetAtom: <TValue = unknown, TArgs extends unknown[] = unknown[], TResult extends Promise<void> | void = Promise<void> | void>(value: unknown) => value is WritableAtom<TValue, TArgs, TResult>;
//# sourceMappingURL=is-atom.d.ts.map