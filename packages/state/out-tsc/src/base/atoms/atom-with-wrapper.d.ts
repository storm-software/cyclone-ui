import type { WritableAtom } from "jotai";
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
export declare const atomWithWrapper: <TValue>(initialValue: TValue) => WritableAtom<TValue, [TValue], Promise<void> | void>;
//# sourceMappingURL=atom-with-wrapper.d.ts.map