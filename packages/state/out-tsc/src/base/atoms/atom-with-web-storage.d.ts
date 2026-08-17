import type { PrimitiveAtom, WritableAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import type { AsyncStorage, SyncStorage } from "jotai/vanilla/utils/atomWithStorage";
import type { SetStateAction } from "react";
export declare const getWebStorage: <TValue>() => AsyncStorage<TValue> | SyncStorage<TValue>;
/**
 * Creates an atom that persists its state in external storage and sends a broadcast message to other tabs/windows when the state changes.
 *
 * @param key - The key to use for the storage
 * @param initialValue - The initial value of the atom
 * @param webStorage - The storage to use
 * @returns An atom that persists its state in external storage and sends a broadcast message to other tabs/windows when the state changes.
 */
export declare function atomWithWebStorage<TValue>(key: string, initialValueOrAtom: PrimitiveAtom<TValue> | TValue | WritableAtom<TValue, [SetStateAction<TValue>], void>, webStorage?: AsyncStorage<TValue> | SyncStorage<TValue>, options?: {
    debounceMs?: number;
} & Parameters<typeof atomWithStorage>[3]): WritableAtom<TValue, [SetStateAction<TValue>], void>;
//# sourceMappingURL=atom-with-web-storage.d.ts.map