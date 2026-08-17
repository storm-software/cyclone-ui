import type { MoleculeScope } from "bunshi";
import type { MoleculeScopeOptions as MoleculeScopeOptionsBase, ProviderProps } from "bunshi/react";
import type { Atom, WritableAtom } from "jotai";
import type { AtomRecord, AtomRecordConstraint, ExtractAtomRecordValues, IsResetAtom } from "../../types";
export type Molecule<TValue> = {
    displayName?: string;
} & Record<symbol, unknown>;
export type BaseMoleculeState = AtomRecord<{
    __scope: string;
    __typename: string;
}>;
export type MoleculeState<TState extends AtomRecordConstraint<TState> = AtomRecordConstraint> = BaseMoleculeState & TState;
export declare const DEFAULT_SCOPE = "__global__";
/**
 * Create a new Scope with the given default value.
 *
 * @param defaultValue - The default value for the Scope.
 * @param options - The options for the Scope.
 * @returns The new Scope.
 */
export declare function createScope(defaultValue?: string, options?: {
    debugLabel?: string;
}): MoleculeScope<string>;
/**
 * Use a Molecule or Scope in a molecule definition.
 *
 * @param dependency - The Molecule or Scope to use.
 * @returns The value of the Molecule or Scope.
 */
export declare function use<TValue>(dependency: Molecule<TValue> | MoleculeScope<TValue>): TValue;
type UseMoleculeState<TState extends AtomRecordConstraint<TState> = AtomRecordConstraint> = {
    [TKey in keyof TState]: {
        get: TState[TKey] extends Atom<infer TValue> ? (opts?: MoleculeScopeOptions) => TValue : never;
        set: TState[TKey] extends WritableAtom<infer _TValue, infer TArgs, infer TReturn> ? (opts?: MoleculeScopeOptions) => (...args: TArgs) => TReturn : never;
        reset: IsResetAtom<TState[TKey]> extends true ? (opts?: MoleculeScopeOptions) => () => void : never;
    };
};
export type MoleculeScopeOptions = MoleculeScopeOptionsBase;
export interface MoleculeApi<TState extends AtomRecordConstraint<TState> = AtomRecordConstraint> {
    Molecule: Molecule<MoleculeState<TState>>;
    Provider: React.FC<MoleculeProviderProps<TState>>;
    Scope: MoleculeScope<string>;
    useMolecule: (opts?: MoleculeScopeOptions) => MoleculeState<TState>;
    use: (opts?: MoleculeScopeOptions) => UseMoleculeState<TState>;
}
export type GetMoleculeState<TMoleculeApi extends MoleculeApi<any>> = ReturnType<TMoleculeApi["useMolecule"]>;
export type MoleculeProviderProps<TState extends AtomRecordConstraint<TState> = AtomRecordConstraint> = Omit<ProviderProps<string>, "scope" | "value"> & {
    scope: string;
    initialState?: Partial<ExtractAtomRecordValues<TState>>;
};
export type CleanupCallback = () => unknown;
export type MountCallback<TState extends AtomRecordConstraint<TState> = AtomRecordConstraint> = (state: MoleculeState<TState>) => CleanupCallback | void;
export interface MoleculeOptions<TState extends AtomRecordConstraint<TState> = AtomRecordConstraint> {
    type: string;
    scope?: MoleculeScope<string> | string;
    onMount?: MountCallback<TState>;
    onUnmount?: CleanupCallback;
}
/**
 * Create a new Molecule with the given constructor function.
 *
 * @param constructFn - The constructor function for the Molecule.
 * @param options - The options for the Molecule.
 * @returns The new Molecule.
 */
export declare function createMoleculeApi<TState extends AtomRecordConstraint<TState> = AtomRecordConstraint>(constructFn: (scope: string) => TState, options: MoleculeOptions<TState>): MoleculeApi<TState>;
export {};
//# sourceMappingURL=create-molecule.d.ts.map