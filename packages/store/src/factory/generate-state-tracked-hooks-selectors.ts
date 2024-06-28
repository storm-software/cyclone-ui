import {
  ImmerStoreApi,
  SelectRecord,
  State,
  StoreApiUseTracked
} from "../types";

export const generateStateTrackedHooksSelectors = <T extends State>(
  useTrackedStore: () => T,
  store: ImmerStoreApi<T>
): StoreApiUseTracked<T> => {
  const selectors: SelectRecord<T> = {} as any;

  Object.keys((store as any).getState()).forEach(key => {
    selectors[key as keyof T] = () => {
      return useTrackedStore()[key as keyof T];
    };
  });

  return selectors;
};
