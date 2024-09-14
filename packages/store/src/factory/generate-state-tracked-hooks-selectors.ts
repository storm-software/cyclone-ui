import {
  ImmerStoreApi,
  SelectTrackedRecord,
  State,
  StoreApiUseTracked
} from "../types";

export const generateStateTrackedHooksSelectors = <TState extends State>(
  useTrackedStore: () => TState,
  store: ImmerStoreApi<TState>
): StoreApiUseTracked<TState> => {
  const selectors: SelectTrackedRecord<TState> = {} as any;

  Object.keys(store.getState() as TState).forEach(key => {
    selectors[key as keyof TState] = () => {
      return useTrackedStore()[key as keyof TState];
    };
  });

  return selectors;
};
