import { useHydrateAtoms } from "jotai/utils";
import type { JotaiStore, WritableAtomRecord } from "../../types";
export type UseHydrateAtoms<T> = (initialValues: Partial<Record<keyof T, any>>, options?: Parameters<typeof useHydrateAtoms>[1]) => void;
/**
 * Hydrate atoms with initial values for SSR.
 */
export declare const useHydrateMolecule: <T extends object>(atoms: WritableAtomRecord<T>, initialValues: Partial<Record<keyof T, unknown>>, store?: JotaiStore) => void;
//# sourceMappingURL=use-hydrate-molecule.d.ts.map