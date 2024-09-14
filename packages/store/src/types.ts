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

import {
 ArrayValues, DeepKey, DeepValue, Primitive 
} from "@storm-stack/types";
import { Draft as ImmerDraft } from "immer";
import { StoreApi as RawStoreApi, UseBoundStore } from "zustand";
import {
  PersistOptions as _PersistOptions,
  DevtoolsOptions,
  NamedSet
} from "zustand/middleware";
import { GetState, StateSelector } from "zustand/vanilla";

export type Draft<T> = ImmerDraft<T>;

export type StoreApiGet<
  TState extends State,
  TSelectors = {}
> = StateGetters<TState> & TSelectors;
export type StoreApiUse<
  TState extends State,
  TSelectors = {}
> = SelectRecord<TState> & TSelectors;
export type StoreApiUseTracked<
  TState extends State,
  TSelectors = {}
> = SelectTrackedRecord<TState> & TSelectors;
export type StoreApiSet<TActions = {}> = TActions;

export type StoreApi<TState extends State, TActions = {}, TSelectors = {}> = {
  name: string;
  get: StoreApiGet<TState, TSelectors>;
  set: StoreApiSet<TActions>;
  remove: StateRemovers<TState>;
  store: ImmerStoreApi<TState>;
  useStore: UseImmerStore<TState>;
  use: StoreApiUse<TState, TSelectors>;
  useTracked: StoreApiUseTracked<TState, TSelectors>;
  useTrackedStore: () => TState;

  extendSelectors<
    TSelectorBuilder extends SelectorBuilder<TState, TActions, TSelectors>
  >(
    builder: TSelectorBuilder
  ): StoreApi<
    TState,
    StateActions<TState> & TActions,
    TSelectors & ReturnType<TSelectorBuilder>
  >;

  extendActions<
    TActionBuilder extends ActionBuilder<
      TState,
      StateActions<TState> & TActions,
      TSelectors
    >
  >(
    builder: TActionBuilder
  ): StoreApi<
    TState,
    StateActions<TState> & TActions & ReturnType<TActionBuilder>,
    TSelectors
  >;

  // extendActionsMerge<AB extends ActionBuilder<TName, T, StateActions<T> & TActions>>(
  //     builder: AB
  //   ): StoreApi<
  //     TName,
  //     T,
  //     StateActions<T> & TActions & ReturnType<AB>,
  //     TSelectors
  //   >;
};

export type InternalState = {
  name: string;
  createdOn: number;
};
export type State = Record<string, any> & {
  _: InternalState;
};
export type EqualityChecker<TState> = (
  state: TState,
  newState: TState
) => boolean;

export type MergeState<TState extends State> = (
  state: Partial<TState>,
  actionName?: string
) => void;

export type StateActions<TState extends State> = SetRecord<TState> & {
  state: SetImmerState<TState>;
  mergeState: MergeState<TState>;
};
export type StateRemovers<TState extends State> = RemoveRecord<TState>;
export type StateGetters<TState extends State> = GetRecord<TState> & {
  state: GetState<TState>;
};
export type StateSelectors<TState extends State> = SelectRecord<TState> & {
  state: GetState<TState>;
};

export type SelectorRecord<TState> = Record<string, (state: TState) => any>;

export type SelectorBuilder<
  TState extends State,
  TActions = {},
  TSelectors = {}
> = (
  state: TState,
  get: StoreApiGet<TState, TSelectors>,
  api: StoreApi<TState, TActions, TSelectors>
) => Record<string, (...args: any[]) => any>;

export type ActionBuilder<
  TState extends State,
  TActions = {},
  TSelectors = {}
> = (
  set: StoreApiSet<TActions>,
  get: StoreApiGet<TState, TSelectors>,
  api: StoreApi<TState, TActions, TSelectors>
) => any;

export type SetImmerState<TState> = (
  fn: (draft: Draft<TState>) => void,
  actionName?: string
) => void;

export type StateCreatorWithDevtools<
  TState extends State,
  CustomSetState = NamedSet<TState>,
  CustomGetState = GetState<TState>,
  CustomStoreApi extends RawStoreApi<TState> = RawStoreApi<TState>
> = (set: CustomSetState, get: CustomGetState, api: CustomStoreApi) => TState;

export interface ImmerStoreApi<TState extends State>
  extends Omit<RawStoreApi<TState>, "setState"> {
  setState: SetImmerState<TState>;
}

export interface UseImmerStore<TState extends State>
  extends Omit<UseBoundStore<RawStoreApi<TState>>, "setState"> {
  (): TState;

  <U>(selector: StateSelector<TState, U>, equalityFn?: EqualityChecker<U>): U;

  setState: SetImmerState<TState>;
}

export type SelectRecord<TState> = {
  [K in keyof TState]: (equalityFn?: EqualityChecker<TState[K]>) => TState[K];
};
export type SelectTrackedRecord<TState> = {
  [K in keyof TState]: () => TState[K];
};

export type GetRecord<TState extends State> = {
  [TField in keyof TState]: TState[TField] extends Primitive
    ? () => TState[TField]
    : TState[TField] extends any[]
      ? (() => TState[TField]) & {
          $item: <TIndex extends number>(
            index: TIndex
          ) => ArrayValues<TState[TField]>;
        }
      : TState[TField] extends Record<string, unknown>
        ? (() => TState[TField]) & {
            $path: <TKey extends DeepKey<TState[TField]>>(
              key: TKey
            ) => DeepValue<TState[TField], TKey>;
          }
        : never;
};

type SetRecordParamReturnType<TState> = TState | void | undefined | never;
export type SetRecordParam<TState> =
  | TState
  | ((state: TState) => SetRecordParamReturnType<TState>);
export type SetRecord<TState extends State> = {
  [TField in keyof TState]: TState[TField] extends Primitive
    ? (param: SetRecordParam<TState[TField]>) => void
    : TState[TField] extends any[]
      ? ((param: SetRecordParam<TState[TField]>) => void) & {
          $item: <TIndex extends number>(
            index: TIndex,
            param: SetRecordParam<TState[TField][TIndex]>
          ) => void;
        }
      : TState[TField] extends object
        ? ((param: SetRecordParam<TState[TField]>) => void) & {
            $path: <TKey extends DeepKey<TState[TField]>>(
              key: TKey,
              param: SetRecordParam<DeepValue<TState[TField], TKey>>
            ) => void;
          }
        : never;
};

export type RemoveRecord<TState extends State> = {
  [TField in keyof TState]: TState[TField] extends Primitive
    ? () => void
    : TState[TField] extends any[]
      ? (() => void) & {
          $item: <TIndex extends number>(index: TIndex) => void;
        }
      : TState[TField] extends object
        ? (() => void) & {
            $path: <TKey extends DeepKey<TState[TField]>>(key: TKey) => void;
          }
        : never;
};

export interface CreateStoreOptions<TState extends State> {
  /**
   * Zustand middlewares.
   */
  middlewares?: any[];

  /**
   * Devtools middleware options.
   */
  devtools?: DevtoolsOptions;

  /**
   * Immer middleware options.
   */
  immer?: ImmerOptions;

  /**
   * Persist middleware options.
   */
  persist?: PersistOptions<Partial<TState>>;

  /**
   * Publish middleware options.
   */
  publish?: PublishOptions;
}

export type StateStorage = {
  getItem: (name: string) => string | null | Promise<string | null>;
  setItem: (name: string, value: string) => void | Promise<void>;
};
export type StorageValue<S> = { state: S; version: number };

export type PersistOptions<S> = Omit<_PersistOptions<S>, "name"> & {
  enabled?: boolean;
  name?: _PersistOptions<S>["name"];
};

export type PublishOptions = {
  /**
   * Channel name
   */
  name?: string;

  /**
   * Enable publish middleware.
   */
  enabled?: boolean;

  /**
   * Main timeout
   * If the main tab / window doesn't respond in this time, this tab / window will become the main
   *
   * @default 100
   */
  timeoutMs?: number;

  /**
   * If false, the store will only synchronize once with the main tab. After that, the store will be un-synchronized.
   * If true, the store will keep synchronized with the main tab.
   *
   * @default true
   */
  keepSynced?: boolean;
};

export interface ImmerOptions {
  /**
   * Enable autofreeze.
   */
  enabledAutoFreeze?: boolean;
  enableMapSet?: boolean;
}
