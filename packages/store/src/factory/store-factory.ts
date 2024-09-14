import {
  ActionBuilder,
  SelectorBuilder,
  State,
  StateActions,
  StoreApi
} from "../types";
import { extendActions } from "./extend-actions";
import { extendSelectors } from "./extend-selectors";

export const storeFactory = <
  TState extends State,
  TActions = {},
  TSelectors = {}
>(
  api: StoreApi<TState, StateActions<TState> & TActions, TSelectors>
) => {
  return {
    ...api,
    extendSelectors: <
      TSelectorBuilder extends SelectorBuilder<TState, TActions, TSelectors>
    >(
      builder: TSelectorBuilder
    ) =>
      storeFactory<TState, TActions, TSelectors>(
        extendSelectors<TSelectorBuilder, TState, TActions, TSelectors>(
          builder,
          api
        )
      ),
    extendActions: <
      TActionBuilder extends ActionBuilder<
        TState,
        StateActions<TState> & TActions,
        TSelectors
      >
    >(
      builder: TActionBuilder
    ) => storeFactory<TState, TActions, TSelectors>(extendActions(builder, api))
  };
};
