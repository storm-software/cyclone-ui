import type { Atom } from "jotai/vanilla";
/**
 * Add a debug label to the Jotai Atom
 *
 * @param atom - The atom to apply the debug label to
 * @param label - The label to apply to the atom
 */
export declare const setAtomDebugLabel: (atom: Atom<unknown>, label: string) => void;
/**
 * Mark the atom as a *private* or internal
 *
 * @param atom - The atom to mark as private
 */
export declare const setAtomDebugPrivate: (atom: Atom<unknown>) => void;
//# sourceMappingURL=set-atom-debug.d.ts.map