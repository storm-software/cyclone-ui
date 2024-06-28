import { enableMapSet, setAutoFreeze } from "immer";
import { createTrackedSelector } from "react-tracked";
import type { StateCreator } from "zustand";
import {
  devtools as devtoolsMiddleware,
  persist as persistMiddleware
} from "zustand/middleware";
import { useStoreWithEqualityFn } from "zustand/traditional";
import { createStore as createVanillaStore } from "zustand/vanilla";
import { generateStateActions } from "./factory/generate-state-actions";
import { generateStateGetSelectors } from "./factory/generate-state-get-selectors";
import { generateStateHookSelectors } from "./factory/generate-state-hook-selectors";
import { generateStateRemovers } from "./factory/generate-state-removers";
import { generateStateTrackedHooksSelectors } from "./factory/generate-state-tracked-hooks-selectors";
import { storeFactory } from "./factory/store-factory";
import { immerMiddleware, publishMiddleware } from "./middleware";
import {
  CreateStoreOptions,
  ImmerStoreApi,
  MergeState,
  SetImmerState,
  State,
  StateActions,
  StateGetters,
  StateRemovers,
  StoreApi,
  StoreApiUse,
  StoreApiUseTracked,
  UseImmerStore
} from "./types";
import { pipe } from "./utils/pipe";

export const createStore =
  (name: string) =>
  <TState extends State>(
    initialState: Omit<TState, "_">,
    options: CreateStoreOptions<TState> = {}
  ): StoreApi<TState, StateActions<TState>> => {
    const {
      middlewares: _middlewares = [],
      devtools,
      persist,
      immer,
      publish
    } = options;

    setAutoFreeze(immer?.enabledAutoFreeze ?? false);
    if (immer?.enableMapSet) {
      enableMapSet();
    }

    const middlewares: any[] = [immerMiddleware];
    if (publish?.enabled) {
      middlewares.push((config: any) =>
        publishMiddleware(config, { name, ...publish })
      );
    }

    middlewares.push(..._middlewares);

    if (persist?.enabled) {
      const opts = {
        ...persist,
        name: persist.name ?? name
      };

      middlewares.push((config: any) => persistMiddleware(config, opts));
    }

    if (devtools?.enabled) {
      middlewares.push((config: any) =>
        devtoolsMiddleware(config, { ...devtools, name })
      );
    }

    middlewares.push(createVanillaStore);

    // const pipeMiddlewares = (createState: StateCreator<T, SetImmerState<T>>) =>
    //   pipe(createState as any, ...middlewares) as ImmerStoreApi<T>;

    // @ts-ignore
    const pipeMiddlewares = (createState: StateCreator<TState>) =>
      pipe(createState as any, ...middlewares) as ImmerStoreApi<TState>;

    const store = pipeMiddlewares(
      () =>
        ({
          ...initialState,
          _: { name, createdOn: new Date().valueOf() }
        }) as TState
    );
    const useStore = ((selector, equalityFn) =>
      useStoreWithEqualityFn(
        store as any,
        selector as any,
        equalityFn as any
      )) as UseImmerStore<TState>;

    const stateActions = generateStateActions<TState>(store, name);

    const mergeState: MergeState<TState> = (state, actionName) => {
      store.setState(
        draft => {
          Object.assign(draft as any, state);
        },
        actionName || `@@${name}/mergeState`
      );
    };

    const setState: SetImmerState<TState> = (fn, actionName) => {
      store.setState(fn, actionName || `@@${name}/setState`);
    };

    const stateRemovers = generateStateRemovers<TState>(store, name);

    const hookSelectors = generateStateHookSelectors<TState>(useStore, store);
    const getterSelectors = generateStateGetSelectors<TState>(store);

    const useTrackedStore = createTrackedSelector<TState>(useStore);
    const trackedHooksSelectors = generateStateTrackedHooksSelectors<TState>(
      useTrackedStore,
      store
    );

    const api = {
      get: {
        state: store.getState,
        ...getterSelectors
      } as StateGetters<TState>,
      name,
      set: {
        state: setState,
        mergeState,
        ...stateActions
      } as StateActions<TState>,
      remove: {
        ...stateRemovers
      } as StateRemovers<TState>,
      store,
      use: hookSelectors as StoreApiUse<TState>,
      useTracked: trackedHooksSelectors as StoreApiUseTracked<TState>,
      useStore,
      useTrackedStore,
      extendSelectors: () => api as any,
      extendActions: () => api as any
    } satisfies StoreApi<TState, StateActions<TState>>;

    return storeFactory(api) as StoreApi<TState, StateActions<TState>>;
  };

// Alias {@link createStore}
export const createZustandStore = createStore;
