import { Draft } from "immer";
import { StoreApi as RawStoreApi, UseBoundStore } from "zustand";
import {
  PersistOptions as _PersistOptions,
  DevtoolsOptions,
  NamedSet
} from "zustand/middleware";
import { GetState, StateSelector } from "zustand/vanilla";
import { DeepKeys, DeepValue } from "@cyclone-ui/types";

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
> = SelectRecord<TState> & TSelectors;
export type StoreApiSet<TActions = {}> = TActions;

export type StoreApi<TState extends State, TActions = {}, TSelectors = {}> = {
  get: StoreApiGet<TState, TSelectors>;
  name: string;
  set: StoreApiSet<TActions>;
  remove: StateRemovers<TState>;
  store: ImmerStoreApi<TState>;
  use: StoreApiUse<TState, TSelectors>;
  useTracked: StoreApiUseTracked<TState, TSelectors>;
  useStore: UseImmerStore<TState>;
  useTrackedStore: () => TState;

  extendSelectors<SB extends SelectorBuilder<TState, TActions, TSelectors>>(
    builder: SB
  ): StoreApi<
    TState,
    StateActions<TState> & TActions,
    TSelectors & ReturnType<SB>
  >;

  extendActions<
    AB extends ActionBuilder<
      TState,
      StateActions<TState> & TActions,
      TSelectors
    >
  >(
    builder: AB
  ): StoreApi<
    TState,
    StateActions<TState> & TActions & ReturnType<AB>,
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

export type IsEqual<A, B> =
  (<G>() => G extends A ? 1 : 2) extends <G>() => G extends B ? 1 : 2
    ? true
    : false;

export type Primitive =
  | null
  | undefined
  | string
  | number
  | boolean
  | symbol
  | bigint;

export type GetRecord<TState extends {}> = {
  [TField in keyof TState]: TState[TField] extends Primitive
    ? () => TState[TField]
    : TState[TField] extends any[]
      ? <TIndex extends number>(
          index?: TIndex
        ) => TIndex extends undefined ? TState[TField] : TState[TField][TIndex]
      : <TKey extends DeepKeys<TState[TField]>>(
          key?: TKey
        ) => TKey extends undefined
          ? TState[TField]
          : DeepValue<TState[TField], TKey>;
};

// TState extends Primitive ? TState : TState extends any[] ? (index?: number) => TState[number] : <TKey extends DeepKeys<TState>>(key?: TKey) => TKey extends undefined ? DeepValue<TState, TKey> : TState;

// export type GetRecord<TState extends {} | any[] | Primitive> =
//   TState extends Primitive
//     ? TState
//     : TState extends any[]
//       ? <TIndex extends number>(
//           index?: TIndex
//         ) => TIndex extends undefined ? TState : GetRecord<TState[number]>
//       : TState extends {}
//         ? {
//             [TField in keyof TState]: () => GetRecord<TState[TField]>;
//           }
//         : never;

// <TKey extends keyof TState>(key?: TKey) => TKey extends undefined ? DeepValue<TState, TKey> : TState;};

// export type GetRecordProperty<
//   T extends {},
//   K extends keyof T = keyof T,
//   C extends undefined | keyof T[K] = undefined
// > = (childKey?: C) => C extends keyof T[K] ? T[K][C] : T[K];
// export type GetRecord<
//   T extends {},
//   C extends undefined | keyof T[keyof T] = undefined
// > = { [K in keyof T]: GetRecordProperty<T, K, C> };

// {
//   [I in K]: ;
// };

export type SetRecordParam<S> = S | ((previous: S) => S);
export type SetRecordProperty<
  T extends {},
  K extends keyof T = keyof T,
  C extends keyof T[K] | undefined = undefined
> = (
  value: C extends keyof T[K] ? SetRecordParam<T[K][C]> : SetRecordParam<T[K]>,
  childKey?: C
) => void;
export type SetRecord<
  T extends {}
  // C extends keyof T[keyof T] | undefined = undefined
> = {
  [K in keyof T]: SetRecordProperty<T, K, undefined | keyof T[K]>;
};

export type RemoveRecord<T extends {}> = {
  [K in keyof T]: (childKey?: keyof T[K]) => void;
};

// export type UseRecord<T> = {
//   [K in keyof T as `use${Capitalize<string & K>}`]: () => T[K];
// };
// export type GetRecord<T> = {
//   [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
// };
// export type SetRecord<T> = {
//   [K in keyof T as `set${Capitalize<string & K>}`]: (value: T[K]) => void;
// };

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
