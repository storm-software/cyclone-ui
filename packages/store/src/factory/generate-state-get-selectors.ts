import { DeepKeys, DeepValue, isPrimitive } from "@cyclone-ui/types";
import { GetRecord, ImmerStoreApi, State } from "../types";
import { getBy } from "../utils";

export const generateStateGetSelectors = <
  TState extends State
  // K extends keyof T = keyof T,
  // C extends keyof T[K] = keyof T[K]
>(
  store: ImmerStoreApi<TState>
) => {
  const selectors = {} as GetRecord<TState>;

  Object.keys(store.getState() as TState).forEach(key => {
    // const key: keyof TState = _key;

    // for (const key in ) {
    // selectors[`get${capitalize(key)}`] = () => store.getState()[key as keyof T];

    function getStateField(): TState[keyof TState];
    function getStateField<TIndex extends number>(
      index: TIndex
    ): TState[keyof TState][TIndex];
    function getStateField<TKey extends DeepKeys<TState[keyof TState]>>(
      deepKey: TKey
    ): DeepValue<TState[keyof TState], TKey>;
    function getStateField<TKey extends keyof TState[keyof TState] | number>(
      deepKeyOrIndex?: TKey
    ): TKey extends undefined
      ? TState[keyof TState]
      : TState[keyof TState][TKey] {
      let state = store.getState()[key] as TState[keyof TState];
      if (deepKeyOrIndex) {
        if (typeof deepKeyOrIndex === "number") {
          return state[deepKeyOrIndex] as TState[keyof TState][TKey];
        }

        return getBy(state, deepKeyOrIndex);
      }

      return state as TState[keyof TState];
    }

    // function getStateField<TKey extends keyof TState>(
    //   index?: number
    // ): GetRecord<TState[TKey]> {
    //   let state = store.getState()[key] as TState[keyof TState];
    //   if (isPrimitive(state)) {
    //     return state;
    //   }

    //   if (Array.isArray(state)) {
    //     if (index) {
    //       return state.map(_ => getStateField(state[index]));
    //     }

    //     return state;
    //   }

    //   // return generateStateGetSelectors<TState[keyof TState]>(
    //   //   state
    //   // );

    //   return Object.keys(state).reduce(
    //     (acc, key) => {
    //       acc[key] = getStateField(key);
    //       return acc;
    //     },
    //     {} as GetRecord<TState[keyof TState]>
    //   );

    //   // if (state) {
    //   //   return getBy(state, deepKey);
    //   // }

    //   // return state as TState[keyof TState];
    // }

    selectors[key as keyof TState] = getStateField;
  });

  // Object.keys().forEach((key: K) => {

  // });

  return selectors;
};
