import type { MaybePromise } from "@storm-stack/types";
import { Provider as AtomProvider } from "jotai";
import { createStore } from "jotai/vanilla";
import React, {
  useContext,
  useEffect,
  useMemo,
  useState,
  type ComponentProps
} from "react";
import { useHydrateStore, useSyncStore } from "../hooks/index";
import type { JotaiStore, SimpleWritableAtomRecord } from "./create-atom-store";

type AtomProviderProps = ComponentProps<typeof AtomProvider>;

const getFullyQualifiedScope = (storeName: string, scope: string) => {
  return `${storeName}:${scope}`;
};

/**
 * Context mapping store name and scope to store. The 'provider' scope is used
 * to reference any provider belonging to the store, regardless of scope.
 */
const PROVIDER_SCOPE = "provider";
const AtomStoreContext = React.createContext<Map<string, JotaiStore>>(
  new Map()
);

/**
 * Tries to find a store in each of the following places, in order:
 * 1. The store context, matching the store name and scope
 * 2. The store context, matching the store name and 'provider' scope
 * 3. Otherwise, return undefined
 */
export const useAtomStore = (
  storeName: string,
  scope: string = PROVIDER_SCOPE,
  warnIfUndefined = true
): JotaiStore | undefined => {
  const storeContext = useContext(AtomStoreContext);
  const store =
    storeContext.get(getFullyQualifiedScope(storeName, scope)) ??
    storeContext.get(getFullyQualifiedScope(storeName, PROVIDER_SCOPE));

  if (!store && warnIfUndefined) {
    // eslint-disable-next-line no-console
    console.warn(
      `Tried to access jotai store '${storeName}' outside of a matching provider.`
    );
  }

  return store;
};

export type ProviderProps<T extends object> = {
  initialValues?: Partial<{ [TKey in keyof T]: T[TKey] }>;
  resetKey?: unknown;
  scope?: string;
} & AtomProviderProps &
  Partial<T>;

export function HydrateAtoms<T extends object>({
  atoms,
  children,
  initialValues,
  store,
  ...props
}: {
  atoms: SimpleWritableAtomRecord<T>;
} & Omit<ProviderProps<T>, "scope">): ProviderProps<T>["children"] {
  useHydrateStore(
    atoms,
    { ...initialValues, ...props },
    {
      store
    }
  );
  useSyncStore(atoms, props, {
    store
  });

  return children;
}

/**
 * Creates a generic provider for a jotai store.
 *
 * - `initialValues`: Initial values for the store.
 * - `props`: Dynamic values for the store.
 */
export const createAtomProvider = <T extends object, N extends string = "">(
  storeScope: N,
  atoms: SimpleWritableAtomRecord<T>,
  options: {
    effect?: React.FC;
    onMount?: (
      _atoms: SimpleWritableAtomRecord<T>
    ) => MaybePromise<void> | void;
    onUnmount?: (
      _atoms: SimpleWritableAtomRecord<T>
    ) => MaybePromise<void> | void;
  } = {}
): React.FC<ProviderProps<T>> => {
  const Effect = options.effect;

  return function AtomProviderComponent({
    children,
    resetKey,
    scope,
    store: _,
    ...props
  }: ProviderProps<T>) {
    const [storeState, setStoreState] = useState<JotaiStore>(createStore());

    useEffect(() => {
      if (resetKey) {
        setStoreState(createStore());
      }
    }, [resetKey]);

    const previousStoreContext = useContext(AtomStoreContext);

    const storeContext = useMemo(() => {
      const newStoreContext = new Map(previousStoreContext);

      if (scope) {
        // Make the store findable by its fully qualified scope
        newStoreContext.set(
          getFullyQualifiedScope(storeScope, scope),
          storeState
        );
      }

      // Make the store findable by its store name alone
      newStoreContext.set(
        getFullyQualifiedScope(storeScope, PROVIDER_SCOPE),
        storeState
      );

      return newStoreContext;
    }, [previousStoreContext, scope, storeState]);

    return (
      <AtomStoreContext.Provider value={storeContext}>
        <AtomProvider store={storeState}>
          <HydrateAtoms
            atoms={atoms}
            store={storeState}
            {...(props as Omit<ProviderProps<T>, "scope">)}>
            <InnerAtomProviderComponent atoms={atoms} onMount={options.onMount}>
              {!!Effect && <Effect />}
              {children}
            </InnerAtomProviderComponent>
          </HydrateAtoms>
        </AtomProvider>
      </AtomStoreContext.Provider>
    );
  };
};

type InnerAtomProviderComponentProps<TState extends object> = {
  atoms: SimpleWritableAtomRecord<TState>;
  children: React.ReactNode;
  onMount?: (_atoms: SimpleWritableAtomRecord<TState>) => MaybePromise<void>;
};

const InnerAtomProviderComponent = <TState extends object>(
  props: InnerAtomProviderComponentProps<TState>
) => {
  const { atoms, children, onMount } = props;

  useEffect(() => {
    if (onMount) {
      void onMount(atoms);
    }
  }, []);

  return children;
};
