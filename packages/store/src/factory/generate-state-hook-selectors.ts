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

  Object.keys((store as any).getState() as TState).forEach(key => {
    // selectors[`use${capitalize(key)}`] = () =>
    selectors[key as keyof TState] = (
      equalityFn?: EqualityChecker<TState[keyof TState]>
    ) => {
      return useStore((state: TState) => state[key], equalityFn);
    };
  });

  return selectors;
};

// type WithSelectors<S> = S extends { getState: () => infer T }
//   ? S & { use: { [K in keyof T]: () => T[K] } }
//   : never

// const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
//   _store: S,
// ) => {
//   let store = _store as WithSelectors<typeof _store>
//   store.use = {}
//   for (let k of Object.keys(store.getState())) {
//     ;(store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
//   }

//   return store
// }
