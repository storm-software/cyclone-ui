import type { PrimitiveAtom, SetStateAction, WritableAtom } from "jotai";
/**
 * Creates an atom that broadcasts its value to other tabs/windows using the BroadcastChannel API.
 *
 * @param key - The key to use for the BroadcastChannel
 * @param initialValueOrAtom - The initial value of the atom
 * @returns An atom that broadcasts its value to other tabs/windows using the BroadcastChannel API.
 */
export declare function atomWithBroadcast<TValue>(key: string, initialValueOrAtom: PrimitiveAtom<TValue> | TValue | WritableAtom<TValue, [SetStateAction<TValue>], void>): WritableAtom<TValue, [SetStateAction<TValue>], void>;
//# sourceMappingURL=atom-with-broadcast.d.ts.map