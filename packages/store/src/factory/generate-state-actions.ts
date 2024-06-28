import { Draft } from "immer";
import { ImmerStoreApi, SetRecord, SetRecordParam, State } from "../types";
import { getBy, isFunction, setBy } from "../utils";

export const generateStateActions = <TState extends State>(
  store: ImmerStoreApi<TState>,
  storeName: string
) => {
  const actions: SetRecord<T> = {} as any;

  Object.keys((store as any).getState() as T).forEach(_key => {
    // actions[key] = (
    //   param: SetRecordParam<T>,
    //   childKey?: keyof T[keyof T] | undefined
    // ) => {
    //   let updatedKey = key;

    //   let prev = store.getState()[key];
    //   if (childKey) {
    //     if (typeof childKey === "string") {
    //       updatedKey = `${key}.${childKey}`;
    //     } else if (typeof childKey === "number") {
    //       updatedKey = `${key}[${childKey}]`;
    //     }

    //     prev = getBy(prev, childKey);
    //   }

    //   let value = param;
    //   if (isFunction(param)) {
    //     if (param.length !== 1) {
    //       throw new Error(
    //         `A setter function must accept ${param.length <= 0 ? "a" : "only one"} parameter for the previous value. Use the format '(prev) => newValue' instead.`
    //       );
    //     }

    //     value = param(prev) as typeof prev;
    //   }

    //   if (prev === value) {
    //     return;
    //   }

    //   const actionKey = updatedKey.replace(/^\S/, s => s.toUpperCase());
    //   store.setState(draft => {
    //     setBy(draft, updatedKey as string | number, value as any);
    //   }, `@@${storeName}/set${actionKey}`);
    // };

    const key: keyof TState = _key;

    // for (const key in ) {
    // selectors[`get${capitalize(key)}`] = () => store.getState()[key as keyof T];
    function setStateField(param: SetRecordParam<TState[typeof key]>): void;
    function setStateField<C extends keyof TState[typeof key]>(
      param: SetRecordParam<TState[typeof key][C]>,
      childKey: C
    ): void;
    function setStateField<C extends keyof TState[typeof key]>(
      param: SetRecordParam<TState[typeof key] | TState[typeof key][C]>,
      childKey?: C
    ): void {
      let updatedKey = key;

      let prev = store.getState()[key];
      if (childKey) {
        if (typeof childKey === "string") {
          updatedKey = `${key as string}.${childKey}`;
        } else if (typeof childKey === "number") {
          updatedKey = `${key as string}[${childKey}]`;
        }

        prev = getBy(prev, childKey);
      }

      let value = param;
      if (isFunction(param)) {
        // if (param.length !== 1) {
        //   throw new Error(
        //     `A setter function must accept ${param.length <= 0 ? "a" : "only one"} parameter for the previous value. Use the format '(prev) => newValue' instead.`
        //   );
        // }

        value = param(prev) as typeof prev;
      }

      if (prev === value) {
        return;
      }

      const actionKey = updatedKey.replace(/^\S/, s => s.toUpperCase());
      store.setState(draft => {
        setBy(draft, updatedKey as string | number, value as any);
      }, `@@${storeName}/set${actionKey}`);
    }

    actions[key] = setStateField;
  });

  return actions;
};
