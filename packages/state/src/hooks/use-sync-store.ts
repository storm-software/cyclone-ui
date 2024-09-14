import { useSetAtom } from "jotai";
import { useEffect } from "react";
import type {
  SimpleWritableAtomRecord,
  UseSyncAtoms
} from "../utilities/create-atom-store";

/**
 * Update atoms with new values on changes.
 */
export const useSyncStore = (
  atoms: SimpleWritableAtomRecord<unknown>,
  values: Record<number | string, unknown>,
  { store }: Parameters<UseSyncAtoms<unknown>>[1] = {}
) => {
  for (const key of Object.keys(atoms)) {
    const value = values[key];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const set = useSetAtom(atoms[key], { store });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (value !== undefined && value !== null) {
        set(value);
      }
    }, [set, value]);
  }
};
