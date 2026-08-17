/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */
/* eslint-disable react-compiler/react-compiler -- bunshi proxy accessors call hooks on demand */
/* eslint-disable react-hooks/rules-of-hooks -- bunshi proxy accessors call hooks on demand */
/* eslint-disable react/rules-of-hooks -- bunshi proxy accessors call hooks on demand */
import { isFunction } from "@stryke/type-checks/is-function";
import { isString } from "@stryke/type-checks/is-string";
import { createScope as createScopeBase, molecule, onMount, onUnmount, use as useBase } from "bunshi";
import { ScopeProvider, useMolecule as useMoleculeBase } from "bunshi/react";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { RESET } from "jotai/utils";
import { useCallback } from "react";
import { useSyncMolecule } from "../hooks/use-sync-molecule";
import { isAtom, isResetAtom, isWritableAtom } from "./is-atom";
import { setAtomDebugLabel } from "./set-atom-debug";
export const DEFAULT_SCOPE = "__global__";
/**
 * Create a new Scope with the given default value.
 *
 * @param defaultValue - The default value for the Scope.
 * @param options - The options for the Scope.
 * @returns The new Scope.
 */
export function createScope(defaultValue = DEFAULT_SCOPE, options) {
    return createScopeBase(defaultValue, options);
}
/**
 * Use a Molecule or Scope in a molecule definition.
 *
 * @param dependency - The Molecule or Scope to use.
 * @returns The value of the Molecule or Scope.
 */
export function use(dependency) {
    return useBase(dependency);
}
/**
 * Create a new Molecule with the given constructor function.
 *
 * @param constructFn - The constructor function for the Molecule.
 * @param options - The options for the Molecule.
 * @returns The new Molecule.
 */
export function createMoleculeApi(constructFn, options) {
    const Scope = !options.scope || isString(options.scope)
        ? createScope(options.scope ?? DEFAULT_SCOPE)
        : options.scope;
    const Molecule = molecule((mol, scope) => {
        const currentScope = scope(Scope);
        const result = constructFn(currentScope);
        result.__scope = atom(() => currentScope);
        result.__typename = atom(() => options.type);
        for (const key of Object.keys(result)) {
            if (isAtom(result[key])) {
                setAtomDebugLabel(result[key], `${options.type}/${currentScope}:${String(key)}`);
            }
        }
        onMount(() => {
            if (options.onMount) {
                const unmount = options.onMount(result);
                if (isFunction(unmount)) {
                    return unmount;
                }
            }
        });
        onUnmount(() => {
            if (options.onUnmount) {
                options.onUnmount();
            }
        });
        return result;
    });
    const useMolecule = (opts) => useMoleculeBase(Molecule, opts);
    const use = (opts) => {
        const atoms = useMolecule(opts);
        const keys = Object.keys(atoms);
        // Return a proxy that allows for dynamic access to the Molecule's atoms.
        return new Proxy({}, {
            get(_, proxyKey) {
                if (keys
                    .filter(k => k !== "__scope" && k !== "__typename")
                    .includes(proxyKey)) {
                    const key = proxyKey;
                    return {
                        get: () => useAtomValue(atoms[key]),
                        set: isWritableAtom(atoms[key])
                            ? () => useSetAtom(atoms[key])
                            : undefined,
                        reset: isResetAtom(atoms[key])
                            ? () => {
                                const setAtom = useSetAtom(atoms[key]);
                                return useCallback(() => {
                                    setAtom(RESET);
                                }, [setAtom]);
                            }
                            : undefined
                    };
                }
                return undefined;
            }
        });
    };
    function MoleculeStateManager({ initialState }) {
        const atoms = useMolecule();
        useSyncMolecule(atoms, initialState);
        return null;
    }
    function Provider({ children, scope, initialState, ...props }) {
        return (<ScopeProvider {...props} scope={Scope} value={scope}>
        {initialState && (<MoleculeStateManager initialState={initialState}/>)}
        {children}
      </ScopeProvider>);
    }
    return {
        Scope,
        Provider,
        Molecule,
        useMolecule,
        use
    };
}
// export type CreateMoleculeOptions<TScope extends string> = {
//   scope: MoleculeScope<TScope> | TScope;
//   name: string;
// };
// /**
//  * Create a new Molecule with the given constructor function.
//  *
//  * @param constructFn - The constructor function for the Molecule.
//  * @param options - The options for the Molecule.
//  * @returns The new Molecule.
//  */
// export function createMolecule<TState>(
//   constructFn: MoleculeConstructor<TState>,
//   options: { type: string } = { type: "Molecule" }
// ): Molecule<MoleculeState<TState>> {
//   return molecule((mol: MoleculeGetter, scope: ScopeGetter) => {
//     const result = constructFn(mol, scope) as MoleculeState<TState>;
//     result.__id = baseAtom(() => uuid());
//     result.__timestamp = baseAtom(() => Date.now());
//     result.__typename = baseAtom(() => options.name);
//     return result;
//   });
// }
//# sourceMappingURL=create-molecule.jsx.map