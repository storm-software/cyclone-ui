/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { isFunction } from "@storm-stack/types/type-checks/is-function";
import { isString } from "@storm-stack/types/type-checks/is-string";
import {
  createScope as createScopeBase,
  molecule,
  MoleculeGetter,
  MoleculeScope,
  onMount,
  onUnmount,
  ScopeGetter,
  use as useBase
} from "bunshi";
import {
  MoleculeScopeOptions as MoleculeScopeOptionsBase,
  ProviderProps,
  ScopeProvider,
  useMolecule as useMoleculeBase
} from "bunshi/react";
import {
  atom,
  Atom,
  SetStateAction,
  useAtomValue,
  useSetAtom,
  WritableAtom
} from "jotai";
import { RESET } from "jotai/utils";
import { useCallback } from "react";
import { useSyncMolecule } from "../hooks/use-sync-molecule";
import {
  AtomRecord,
  ExtractAtomRecordValues,
  IsResetAtom,
  SetStateActionWithReset
} from "../types";
import { isResetAtom, isWritableAtom } from "./is-atom";

export type Molecule<TValue> = {
  displayName?: string;
} & Record<symbol, unknown>;

export type BaseMoleculeState = AtomRecord<{
  __scope: string;
  __typename: string;
}>;

export type MoleculeState<TState extends AtomRecord<any> = AtomRecord<any>> =
  BaseMoleculeState & TState;

export const DEFAULT_SCOPE = "__global__";

/**
 * Create a new Scope with the given default value.
 *
 * @param defaultValue - The default value for the Scope.
 * @param options - The options for the Scope.
 * @returns The new Scope.
 */
export function createScope(
  defaultValue = DEFAULT_SCOPE,
  options?: {
    debugLabel?: string;
  }
) {
  return createScopeBase<string>(defaultValue, options);
}

/**
 * Use a Molecule or Scope in a molecule definition.
 *
 * @param dependency - The Molecule or Scope to use.
 * @returns The value of the Molecule or Scope.
 */
export function use<TValue>(
  dependency: Molecule<TValue> | MoleculeScope<TValue>
): TValue {
  return useBase<TValue>(dependency);
}

type UseMoleculeState<TState extends AtomRecord<any> = AtomRecord<any>> = {
  [TKey in keyof TState]: {
    get: TState[TKey] extends Atom<infer TValue>
      ? (opts?: MoleculeScopeOptions) => TValue
      : never;
    set: TState[TKey] extends WritableAtom<
      infer TValue,
      infer TArgs,
      infer TReturn
    >
      ? (opts?: MoleculeScopeOptions) => (...args: TArgs) => TReturn
      : never;
    reset: IsResetAtom<TState[TKey]> extends true
      ? (opts?: MoleculeScopeOptions) => () => void
      : never;
  };
};

export type MoleculeScopeOptions = MoleculeScopeOptionsBase;

export type MoleculeApi<TState extends AtomRecord<any> = AtomRecord<any>> = {
  Molecule: Molecule<MoleculeState<TState>>;
  Provider: React.FC<MoleculeProviderProps<TState>>;
  Scope: MoleculeScope<string>;
  useMolecule: (opts?: MoleculeScopeOptions) => MoleculeState<TState>;
  use: (opts?: MoleculeScopeOptions) => UseMoleculeState<TState>;
};

export type GetMoleculeState<TMoleculeApi extends MoleculeApi<any>> =
  ReturnType<TMoleculeApi["useMolecule"]>;

export type MoleculeProviderProps<
  TState extends AtomRecord<any> = AtomRecord<any>
> = Omit<ProviderProps<string>, "scope" | "value"> & {
  scope: string;
  initialState?: Partial<ExtractAtomRecordValues<TState>>;
};

export type CleanupCallback = () => unknown;
export type MountCallback<TState extends AtomRecord<any> = AtomRecord<any>> = (
  state: MoleculeState<TState>
) => CleanupCallback | void;

export type MoleculeOptions<TState extends AtomRecord<any> = AtomRecord<any>> =
  {
    type: string;
    scope?: MoleculeScope<string> | string;
    onMount?: MountCallback<TState>;
    onUnmount?: CleanupCallback;
  };

/**
 * Create a new Molecule with the given constructor function.
 *
 * @param constructFn - The constructor function for the Molecule.
 * @param options - The options for the Molecule.
 * @returns The new Molecule.
 */
export function createMoleculeApi<
  TState extends AtomRecord<any> = AtomRecord<any>
>(
  constructFn: (scope: string) => TState,
  options: MoleculeOptions<TState>
): MoleculeApi<TState> {
  const Scope =
    !options.scope || isString(options.scope)
      ? createScope((options.scope ?? DEFAULT_SCOPE) as string)
      : options.scope;

  const Molecule = molecule<MoleculeState<TState>>(
    (mol: MoleculeGetter, scope: ScopeGetter) => {
      const currentScope = scope(Scope);

      const result = constructFn(currentScope) as MoleculeState<TState>;
      result.__scope = atom(() => currentScope);
      result.__typename = atom(() => options.type);

      onMount(() => {
        if (options.onMount) {
          const unmount = options.onMount(result);
          if (isFunction(unmount)) {
            return unmount;
          }
        }

        return;
      });
      onUnmount(() => {
        if (options.onUnmount) {
          options.onUnmount();
        }
      });

      return result;
    }
  );

  const useMolecule = (opts?: MoleculeScopeOptions) =>
    useMoleculeBase<MoleculeState<TState>>(Molecule, opts);
  const use = (opts?: MoleculeScopeOptions): UseMoleculeState<TState> => {
    const atoms = useMolecule(opts);
    const keys = Object.keys(atoms) as (keyof MoleculeState<TState>)[];

    // Return a proxy that allows for dynamic access to the Molecule's atoms.
    return new Proxy({} as UseMoleculeState<TState>, {
      get(_, proxyKey: string) {
        if (
          keys
            .filter(k => k !== "__scope" && k !== "__typename")
            .some(k => k === proxyKey)
        ) {
          const key = proxyKey as keyof TState;

          return {
            get: () => useAtomValue(atoms[key] as Atom<TState[typeof key]>),
            set: isWritableAtom(atoms[key])
              ? () =>
                  useSetAtom(
                    atoms[key] as WritableAtom<
                      TState[typeof key],
                      [SetStateAction<TState[typeof key]>],
                      void
                    >
                  )
              : undefined,
            reset: isResetAtom(atoms[key])
              ? () => {
                  const setAtom = useSetAtom(
                    atoms[key] as WritableAtom<
                      TState[typeof key],
                      [SetStateActionWithReset<TState[typeof key]>],
                      void
                    >
                  );

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

  function MoleculeStateManager<
    TState extends AtomRecord<any> = AtomRecord<any>
  >({
    initialState
  }: {
    initialState: Partial<ExtractAtomRecordValues<TState>>;
  }) {
    const atoms = useMolecule();
    useSyncMolecule(atoms, initialState);

    return null;
  }

  function Provider<TState extends AtomRecord<any> = AtomRecord<any>>({
    children,
    scope,
    initialState,
    ...props
  }: MoleculeProviderProps<TState>) {
    return (
      <ScopeProvider {...props} scope={Scope} value={scope}>
        {initialState && (
          <MoleculeStateManager<TState> initialState={initialState} />
        )}
        {children}
      </ScopeProvider>
    );
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
