import type { JotaiStore, WritableAtomRecord } from "../../types";
export type UseSyncAtoms<T> = (values: Partial<Record<keyof T, any>>, store?: JotaiStore) => void;
/**
 * Update atoms with new values on changes.
 */
export declare const useSyncMolecule: <T extends object>(atoms: WritableAtomRecord<T>, values: Partial<Record<keyof T, unknown>>, store?: JotaiStore) => void;
//# sourceMappingURL=use-sync-molecule.d.ts.map