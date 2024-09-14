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


import { isString } from "@storm-stack/types";
import { upperCaseFirst } from "@storm-stack/utilities";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import type { useHydrateAtoms } from "jotai/utils";
import { RESET } from "jotai/utils";
import type {
  Atom,
  SetStateAction,
  WritableAtom,
  createStore
} from "jotai/vanilla";
import type {
  AsyncStorage,
  SyncStorage
} from "jotai/vanilla/utils/atomWithStorage";
import type React from "react";
import { useCallback } from "react";
import {
  atomWithWebStorage,
  getWebStorage
} from "../atoms/atom-with-web-storage";
import { atomWithWrapper } from "../atoms/atom-with-wrapper";
import { baseAtom } from "../base/base-atom";
import type { ProviderProps } from "./create-atom-provider";
import { createAtomProvider, useAtomStore } from "./create-atom-provider";
import { isAtom, isWritableAtom } from "./is-atom";

export type JotaiStore = ReturnType<typeof createStore>;

export type InternalState<
  TState extends object,
  TOptions extends CreateAtomStoreOptions<
    TState,
    SelectorsFn<TState>
  > = CreateAtomStoreOptions<TState, SelectorsFn<TState>>
> = {
  $name: TOptions["name"];
  $timestamp: number;
  $options: TOptions;
};

export type UseAtomOptions = {
  delayMs?: number;
  scope?: string;
  store?: JotaiStore;
};

export type UseAtomOptionsOrScope = UseAtomOptions | string;

export type GetRecord<O> = {
  [K in keyof O]: O[K] extends Atom<infer V>
    ? (options?: UseAtomOptionsOrScope) => V
    : never;
};

export type SetRecord<O> = {
  // eslint-disable-next-line no-unused-vars
  [K in keyof O]: O[K] extends WritableAtom<infer _V, infer A, infer R>
    ? (options?: UseAtomOptionsOrScope) => (...args: A) => R
    : never;
};

export type ResetRecord<O> = {
  // eslint-disable-next-line no-unused-vars
  [K in keyof O]: O[K] extends WritableAtom<infer _V, [typeof RESET], infer R>
    ? (options?: UseAtomOptionsOrScope) => () => R
    : never;
};

export type UseRecord<O> = {
  [K in keyof O]: O[K] extends WritableAtom<infer V, infer A, infer R>
    ? (options?: UseAtomOptionsOrScope) => [V, (...args: A) => R]
    : never;
};

export type StoreAtomsWithoutSelectors<TState extends object> = {
  [TKey in keyof TState]: TState[TKey] extends Atom<any>
    ? TState[TKey]
    : WritableAtom<
        TState[TKey],
        [SetStateAction<TState[TKey]> | typeof RESET],
        void
      >;
} & AtomRecord<InternalState<TState>>;

export type StoreAtoms<
  TState extends object,
  TOptions extends CreateAtomStoreOptions<
    TState,
    SelectorsFn<TState>
  > = CreateAtomStoreOptions<TState, SelectorsFn<TState>>
> = InferOptionsSelectorsReturnType<TState, TOptions> &
  StoreAtomsWithoutSelectors<TState>;

export type FilterWritableAtoms<T> = {
  [K in keyof T]-?: T[K] extends WritableAtom<any, any, any> ? T[K] : never;
};

export type WritableStoreAtoms<
  TState extends object,
  TOptions extends CreateAtomStoreOptions<
    TState,
    SelectorsFn<TState>
  > = CreateAtomStoreOptions<TState, SelectorsFn<TState>>
> = FilterWritableAtoms<StoreAtoms<TState, TOptions>>;

export type AtomRecord<O> = {
  [K in keyof O]: Atom<O[K]>;
};
export type SimpleWritableAtomRecord<T> = {
  [K in keyof T]: WritableAtom<
    T[K],
    [SetStateAction<T[K]> | typeof RESET],
    void
  >;
};

type UseNameStore<TName extends string = ""> = `use${Capitalize<TName>}Store`;
type NameStore<TName extends string = ""> = TName extends ""
  ? "store"
  : `${TName}Store`;
type NameProvider<TName extends string = ""> = `${Capitalize<TName>}Provider`;

export type UseHydrateAtoms<TState> = (
  initialValues: Partial<Record<keyof TState, any>>,
  options?: Parameters<typeof useHydrateAtoms>[1]
) => void;
export type UseSyncAtoms<TState> = (
  values: Partial<Record<keyof TState, any>>,
  options?: {
    store?: JotaiStore;
  }
) => void;

export type StoreApi<
  TState extends object,
  TOptions extends CreateAtomStoreOptions<
    TState,
    SelectorsFn<TState>
  > = CreateAtomStoreOptions<TState, SelectorsFn<TState>>
> = {
  atom: StoreAtoms<TState, TOptions>;
  name: TOptions["name"];
};

export type GetAtomFn = <V>(
  atom: Atom<V>,
  options?: UseAtomOptionsOrScope
) => V;

export type SetAtomFn = <V, A extends unknown[], R>(
  atom: WritableAtom<V, A, R>,
  options?: UseAtomOptionsOrScope
) => (...args: A) => R;

export type ResetAtomFn = <V, R>(
  atom: WritableAtom<V, [typeof RESET], R>,
  options?: UseAtomOptionsOrScope
) => () => R;

export type UseAtomFn = <V, A extends unknown[], R>(
  atom: WritableAtom<V, A, R>,
  options?: UseAtomOptionsOrScope
) => [V, (...args: A) => R];

export type UseStoreApi<
  TState extends object,
  TOptions extends CreateAtomStoreOptions<
    TState,
    SelectorsFn<TState>
  > = CreateAtomStoreOptions<TState, SelectorsFn<TState>>
> = (options?: UseAtomOptionsOrScope) => {
  get: { atom: GetAtomFn } & GetRecord<StoreAtoms<TState, TOptions>>;
  reset: {
    atom: ResetAtomFn;
  } & ResetRecord<WritableStoreAtoms<TState, TOptions>>;
  set: { atom: SetAtomFn } & SetRecord<WritableStoreAtoms<TState, TOptions>>;
  store: (opts?: UseAtomOptionsOrScope) => JotaiStore | undefined;
  use: { atom: UseAtomFn } & UseRecord<WritableStoreAtoms<TState, TOptions>>;
};

export type AtomStoreApi<
  TState extends object,
  TOptions extends CreateAtomStoreOptions<
    TState,
    SelectorsFn<TState>
  > = CreateAtomStoreOptions<TState, SelectorsFn<TState>>
> = {
  [key in keyof Record<NameProvider<TOptions["name"]>, object>]: React.FC<
    ProviderProps<TState>
  >;
} & {
  [key in keyof Record<NameStore<TOptions["name"]>, object>]: StoreApi<
    TState,
    TOptions
  >;
} & {
  [key in keyof Record<UseNameStore<TOptions["name"]>, object>]: UseStoreApi<
    TState,
    TOptions
  >;
} & {
  name: TOptions["name"];
};

const withDefaultOptions = <TState extends object>(
  fnRecord: TState,
  defaultOptions: UseAtomOptions
): TState =>
  Object.fromEntries(
    Object.entries(fnRecord).map(([key, fn]) => [
      key,
      (options: UseAtomOptions = {}) => fn({ ...defaultOptions, ...options })
    ])
  ) as TState;

const convertScopeShorthand = (
  optionsOrScope: UseAtomOptionsOrScope = {}
): UseAtomOptions =>
  isString(optionsOrScope) ? { scope: optionsOrScope } : optionsOrScope;

export type SelectorsFn<
  TState extends object,
  TSelectorsReturnType extends object = object
> = (
  atomsWithoutSelectors: StoreAtomsWithoutSelectors<TState>
) => AtomRecord<TSelectorsReturnType>;

export type InferSelectorsReturnType<
  TState extends object,
  TSelectorsFn extends SelectorsFn<TState> | undefined
> =
  TSelectorsFn extends SelectorsFn<TState, infer TSelectorsReturnType>
    ? TSelectorsReturnType
    : never;

export type InferOptionsSelectorsReturnType<
  TState extends object,
  TOptions extends CreateAtomStoreOptions<TState, SelectorsFn<TState>>
> = InferSelectorsReturnType<TState, TOptions["selectors"]>;

export interface CreateAtomStoreOptions<
  TState extends object,
  TSelectorsFn extends SelectorsFn<TState> | undefined = undefined
> {
  delayMs?: UseAtomOptions["delayMs"];
  effect?: React.FC;
  onMount?: (store: JotaiStore) => void;
  onUnmount?: (store: JotaiStore) => void;
  initialState: {
    [TKey in keyof TState]: Atom<TState[TKey]> | TState[TKey];
  };
  name: string;
  selectors?: TSelectorsFn;
  meta?: Record<string, any>;
  storage?: AsyncStorage<any> | SyncStorage<any> | false;
}

/**
 * Create an atom store from an initial value.
 *
 * @remarks
 * Each property will have a getter and setter.
 *
 * @example
 *
 * ```tsx
 *
 * const { exampleStore, useExampleStore } = createAtomStore({ count: 1, say: 'hello' }, { name: 'example' as const })
 * const { exampleStore, useExampleStore } = createAtomStore({ count: 1, say: 'hello' }, { name: 'example' as const })
 * const [count, setCount] = useExampleStore().use.count()
 * const say = useExampleStore().get.say()
 * const setSay = useExampleStore().set.say()
 * setSay('world')
 * const countAtom = exampleStore.atom.count
 *
 * ```
 *
 * @param initialState - The initial state of the store
 * @param options - The options for the store
 * @returns The store and the store hook
 */
export const createAtomStore = <
  TState extends object,
  TOptions extends CreateAtomStoreOptions<
    TState,
    SelectorsFn<TState>
  > = CreateAtomStoreOptions<TState, SelectorsFn<TState>>
>(
  options: TOptions
): AtomStoreApi<TState, TOptions> => {
  type TStoreAtoms = StoreAtoms<TState, TOptions>;
  type TWritableStoreAtoms = WritableStoreAtoms<TState, TOptions>;
  type TStoreAtomsWithoutSelectors = StoreAtomsWithoutSelectors<TState>;
  type TWritableStoreAtomsWithoutSelectors =
    FilterWritableAtoms<TStoreAtomsWithoutSelectors>;

  const atomsWithoutSelectors = {} as TStoreAtomsWithoutSelectors;
  const writableAtomsWithoutSelectors =
    {} as TWritableStoreAtomsWithoutSelectors;
  const atomIsWritable = {} as Record<keyof TStoreAtoms, boolean>;

  for (const [key, atomOrValue] of Object.entries(options.initialState)) {
    // const atomConfig: Atom<unknown> = atomWithWebStorage(
    //   `${options.name}:${key}`,
    //   atomOrValue,
    //   options.storage
    // );

    const atomConfig: Atom<unknown> = isAtom(atomOrValue)
      ? atomOrValue
      : atomWithWrapper(atomOrValue);
    atomConfig.debugLabel = `${options.name}:${key}`;

    atomsWithoutSelectors[key as keyof TStoreAtomsWithoutSelectors] =
      atomConfig as any;

    const isWritable = isWritableAtom(atomConfig);
    atomIsWritable[key as keyof TStoreAtoms] = isWritable;

    if (isWritable) {
      writableAtomsWithoutSelectors[
        key as keyof TWritableStoreAtomsWithoutSelectors
      ] = atomConfig as any;
    }
  }

  atomsWithoutSelectors.$name =
    options.storage === false
      ? baseAtom<TOptions["name"]>(options.name)
    atomWithWebStorage<TOptions["name"]>(
          `${options.name}:$name`,
      options.name,
          options.storage || getWebStorage()
    );
  atomsWithoutSelectors.$timestamp =
    options.storage === false
      ? baseAtom<number>(Date.now())
    atomWithWebStorage<number>(
          `${options.name}:$timestamp`,
      Date.now(),
          options.storage || getWebStorage()
        );
  atomsWithoutSelectors.$options =
    options.storage === false
    baseAtom<TOptions>(options) :
    atomWithWebStorage<TOptions>(
      `${options.name}:$options`,
          options,
      options.storage || getWebStorage()
        );

  const atoms = { ...atomsWithoutSelectors } as TStoreAtoms;

  if (options.selectors) {
    const extendedAtoms = options.selectors(atomsWithoutSelectors);

    for (const [key, atomConfig] of Object.entries(extendedAtoms)) {
      atoms[key as keyof TStoreAtoms] = atomConfig;
      atomIsWritable[key as keyof TStoreAtoms] = isWritableAtom(atomConfig);
    }
  }

  const getAtoms = {} as GetRecord<TStoreAtoms>;
  const setAtoms = {} as SetRecord<TWritableStoreAtoms>;
  const resetAtoms = {} as ResetRecord<TWritableStoreAtoms>;
  const useAtoms = {} as UseRecord<TWritableStoreAtoms>;

  const useStore = (
    optionsOrScope: UseAtomOptionsOrScope = {},
    warnIfUndefined = true
  ) => {
    const { scope, store } = convertScopeShorthand(optionsOrScope);

    const contextStore = useAtomStore(options.name, scope, warnIfUndefined);
    return store ?? contextStore;
  };

  const useAtomValueWithStore: GetAtomFn = (atomConfig, optionsOrScope) => {
    const store = useStore(optionsOrScope, false);
    const { delayMs = options.delayMs } = convertScopeShorthand(optionsOrScope);

    return useAtomValue(atomConfig, { delay: delayMs, store });
  };

  const useSetAtomWithStore: SetAtomFn = (atomConfig, optionsOrScope) => {
    const store = useStore(optionsOrScope);
    return useSetAtom(atomConfig, { store });
  };

  const useResetAtomWithStore: ResetAtomFn = (atomConfig, optionsOrScope) => {
    const setAtom = useSetAtomWithStore(atomConfig, optionsOrScope);
    return useCallback(() => setAtom(RESET), [setAtom]);
  };

  const useAtomWithStore: UseAtomFn = (atomConfig, optionsOrScope) => {
    const store = useStore(optionsOrScope);
    const { delayMs = options.delayMs } = convertScopeShorthand(optionsOrScope);

    return useAtom(atomConfig, { delay: delayMs, store });
  };

  for (const key of Object.keys(atoms)) {
    const atomConfig = atoms[key as keyof TStoreAtoms];
    const isWritable: boolean = atomIsWritable[key as keyof TStoreAtoms];

    (getAtoms as any)[key] = (optionsOrScope: UseAtomOptionsOrScope = {}) =>
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useAtomValueWithStore(atomConfig, optionsOrScope);

    if (isWritable) {
      (setAtoms as any)[key] = (optionsOrScope: UseAtomOptionsOrScope = {}) =>
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useSetAtomWithStore(
          atomConfig as WritableAtom<any, any, any>,
          optionsOrScope
        );

      (resetAtoms as any)[key] = (optionsOrScope: UseAtomOptionsOrScope = {}) =>
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useResetAtomWithStore(
          atomConfig as WritableAtom<any, any, any>,
          optionsOrScope
        );

      (useAtoms as any)[key] = (optionsOrScope: UseAtomOptionsOrScope = {}) =>
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useAtomWithStore(
          atomConfig as WritableAtom<any, any, any>,
          optionsOrScope
        );
    }
  }

  const Provider: React.FC<ProviderProps<TState>> = createAtomProvider(
    options.name,
    writableAtomsWithoutSelectors,
    { effect: options.effect }
  );

  const storeApi: StoreApi<TState, TOptions> = {
    name: options.name,
    atom: atoms
  };

  const useStoreApi: UseStoreApi<TState, TOptions> = (defaultOptions = {}) => ({
    get: {
      ...withDefaultOptions(getAtoms, convertScopeShorthand(defaultOptions)),
      atom: (atomConfig, opts) =>
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useAtomValueWithStore(atomConfig, {
          ...convertScopeShorthand(defaultOptions),
          ...convertScopeShorthand(opts)
        })
    },
    reset: {
      ...withDefaultOptions(resetAtoms, convertScopeShorthand(defaultOptions)),
      atom: (atomConfig, opts) =>
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useResetAtomWithStore(atomConfig, {
          ...convertScopeShorthand(defaultOptions),
          ...convertScopeShorthand(opts)
        })
    },
    set: {
      ...withDefaultOptions(setAtoms, convertScopeShorthand(defaultOptions)),
      atom: (atomConfig, opts) =>
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useSetAtomWithStore(atomConfig, {
          ...convertScopeShorthand(defaultOptions),
          ...convertScopeShorthand(opts)
        })
    },
    store: opts =>
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useStore({
        ...convertScopeShorthand(defaultOptions),
        ...convertScopeShorthand(opts)
      }),
    use: {
      ...withDefaultOptions(useAtoms, convertScopeShorthand(defaultOptions)),
      atom: (atomConfig, opts) =>
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useAtomWithStore(atomConfig, {
          ...convertScopeShorthand(defaultOptions),
          ...convertScopeShorthand(opts)
        })
    }
  });

  return {
    name: options.name,
    [`${upperCaseFirst(options.name)}Provider` as NameProvider<
      TOptions["name"]
    >]: Provider,
    [`use${upperCaseFirst(options.name)}Store` as UseNameStore<
      TOptions["name"]
    >]: useStoreApi,
    [options.name.length > 0
      ? `${options.name}Store`
      : ("store" as NameStore<TOptions["name"]>)]: storeApi
  } as AtomStoreApi<TState, TOptions>;
};
