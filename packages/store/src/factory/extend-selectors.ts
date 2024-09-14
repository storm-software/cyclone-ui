import {
  SelectorBuilder,
  State,
  StateActions,
  StoreApi,
  StoreApiGet,
  StoreApiUse,
  StoreApiUseTracked
} from "../types";

export const extendSelectors = <
  TSelectorBuilder extends SelectorBuilder<TState, TActions, TSelectors>,
  TState extends State,
  TActions = {},
  TSelectors = {}
>(
  builder: TSelectorBuilder,
  api: StoreApi<TState, StateActions<TState> & TActions, TSelectors>
): StoreApi<
  TState,
  StateActions<TState> & TActions,
  TSelectors & ReturnType<TSelectorBuilder>
> => {
  const use = {
    ...api.use
  } as StoreApiUse<TState, TSelectors & ReturnType<TSelectorBuilder>>;

  const useTracked = {
    ...api.useTracked
  } as StoreApiUseTracked<TState, TSelectors & ReturnType<TSelectorBuilder>>;

  const get = {
    ...api.get
  } as StoreApiGet<TState, TSelectors & ReturnType<TSelectorBuilder>>;

  Object.keys(
    builder(api.store.getState() as TState, api.get, api) as TSelectors &
      ReturnType<TSelectorBuilder>
  ).forEach(key => {
    // @ts-ignore
    use[key] = (...args: any[]) =>
      api.useStore(state => {
        const selectors = builder(state, api.get, api);
        const selector = selectors[key];
        return selector(...args);
      });
    // @ts-ignore
    useTracked[key] = (...args: any[]) => {
      const trackedState = api.useTrackedStore();
      const selectors = builder(trackedState, api.get, api);
      const selector = selectors[key];
      return selector(...args);
    };
    // @ts-ignore
    get[key] = (...args: any[]) => {
      const selectors = builder(api.store.getState(), api.get, api);
      const selector = selectors[key];
      return selector(...args);
    };
  });

  return {
    ...(api as any),
    get,
    use,
    useTracked
  } as StoreApi<
    TState,
    StateActions<TState> & TActions,
    TSelectors & ReturnType<TSelectorBuilder>
  >;
};
