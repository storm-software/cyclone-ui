import {
  EqualityChecker,
  ImmerStoreApi,
  SelectRecord,
  State,
  StoreApiUse,
  UseImmerStore
} from "../types";

export const generateStateHookSelectors = <TState extends State>(
  useStore: UseImmerStore<TState>,
  store: ImmerStoreApi<TState>
): StoreApiUse<TState> => {
  const selectors: SelectRecord<TState> = {} as any;

  Object.keys((store as any).getState() as TStateT).forEach(key => {
    // selectors[`use${capitalize(key)}`] = () =>
    selectors[key] = (equalityFn?: EqualityChecker<TState[keyof TState]>) => {
      return useStore((state: TState) => state[key], equalityFn);
    };
  });

  return selectors;
};
