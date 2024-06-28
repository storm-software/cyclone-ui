import { produce } from "immer";
import { StoreApi } from "zustand";
import { SetImmerState, State, StateCreatorWithDevtools } from "../types";

export const immerMiddleware =
  <TState extends State>(
    config: StateCreatorWithDevtools<
      TState,
      SetImmerState<TState>,
      StoreApi<TState>["getState"]
    >
  ): StateCreatorWithDevtools<TState> =>
  (set, get, api) => {
    const setState: SetImmerState<TState> = (fn, actionName) =>
      set(produce<TState>(fn), true, actionName);
    api.setState = setState as any;

    return config(setState, get, api);
  };
