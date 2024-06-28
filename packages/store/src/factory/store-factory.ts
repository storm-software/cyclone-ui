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
    extendSelectors: (builder: SelectorBuilder<TState, TActions, TSelectors>) =>
      storeFactory(extendSelectors(builder, api)),
    extendActions: (
      builder: ActionBuilder<
        TState,
        StateActions<TState> & TActions,
        TSelectors
      >
    ) => storeFactory(extendActions(builder, api))
  };
};
