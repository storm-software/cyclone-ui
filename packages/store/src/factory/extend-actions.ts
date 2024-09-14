import { ActionBuilder, State, StateActions, StoreApi } from "../types";

export const extendActions = <
  TActionBuilder extends ActionBuilder<
    TState,
    StateActions<TState> & TActions,
    TSelectors
  >,
  TState extends State = State,
  TActions = {},
  TSelectors = {}
>(
  builder: TActionBuilder,
  api: StoreApi<TState, StateActions<TState> & TActions, TSelectors>
): StoreApi<
  TState,
  StateActions<TState> & TActions & ReturnType<TActionBuilder>,
  TSelectors
> => {
  const actions = builder(api.set, api.get, api);
  // Object.keys(actions).forEach((key) => {
  //   actions[key] = (...args: any[]) => {
  //     // React batch
  //     batch(() => {
  //       actions[key](...args);
  //     });
  //   };
  // });

  return {
    ...(api as any),
    set: {
      ...api.set,
      ...actions
    }
  };
};
