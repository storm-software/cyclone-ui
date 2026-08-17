import { useAtomValue } from "jotai/react";
import type { Atom } from "jotai/vanilla";
type Options = Parameters<typeof useAtomValue>[1];
export declare function usePrepareAtoms(atoms: Atom<unknown>[], options?: Options): void;
export {};
//# sourceMappingURL=use-prepare-atoms.d.ts.map