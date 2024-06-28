import { Draft } from "immer";
import { ImmerStoreApi, RemoveRecord, State } from "../types";
import { removeBy } from "../utils";

export const generateStateRemovers = <T extends State>(
  store: ImmerStoreApi<T>,
  storeName: string
) => {
  const removes: RemoveRecord<T> = {} as any;

  Object.keys((store as any).getState() as T).forEach(key => {
    removes[key] = (childKey?: keyof T[keyof T] | undefined) => {
      let removeKey = key;
      if (childKey) {
        if (typeof childKey === "string") {
          removeKey = `${key}.${childKey}`;
        } else if (typeof childKey === "number") {
          removeKey = `${key}[${childKey}]`;
        }
      }

      const actionKey = removeKey.replace(/^\S/, s => s.toUpperCase());
      store.setState(draft => {
        if (childKey) {
          removeBy(draft, removeKey);
        } else {
          delete draft[removeKey as keyof Draft<T>];
        }
      }, `@@${storeName}/remove${actionKey}`);
    };
  });

  return removes;
};
