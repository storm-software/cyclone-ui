import type { Getter, SetStateAction, Setter, WritableAtom } from "jotai/vanilla";
export type Callback<Value> = (get: Getter, set: Setter, newVal: Value, prevVal: Value) => void;
/**
 * Creates an atom that broadcasts its value to other tabs/windows using the BroadcastChannel API.
 *
 * @param initialValue - The initial value of the atom
 * @returns An atom that broadcasts its value to other tabs/windows using the BroadcastChannel API.
 */
export declare function atomWithListeners<TValue>(initialValue: TValue | WritableAtom<TValue, any, Promise<void> | void>): readonly [WritableAtom<TValue, [arg: SetStateAction<TValue>], void>, (callback: Callback<TValue>) => void];
//# sourceMappingURL=atom-with-listeners.d.ts.map