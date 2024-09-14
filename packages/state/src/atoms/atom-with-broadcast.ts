import { StormParser } from "@storm-stack/serialization";
import { isFunction, isRuntimeServer } from "@storm-stack/utilities";
import type { PrimitiveAtom, SetStateAction, WritableAtom } from "jotai";
import { baseAtom } from "../base/base-atom";
import { isAtom } from "../utilities/is-atom";

/**
 * Creates an atom that broadcasts its value to other tabs/windows using the BroadcastChannel API.
 *
 * @param key - The key to use for the BroadcastChannel
 * @param initialValueOrAtom - The initial value of the atom
 * @returns An atom that broadcasts its value to other tabs/windows using the BroadcastChannel API.
 */
export function atomWithBroadcast<TValue>(
  key: string,
  initialValueOrAtom:
    | PrimitiveAtom<TValue>
    | TValue
    | WritableAtom<TValue, [SetStateAction<TValue>], void>
) {
  const valueAtom = isAtom(initialValueOrAtom)
    ? initialValueOrAtom
    : baseAtom(initialValueOrAtom);
  const listeners = new Set<(event: MessageEvent<string>) => void>();

  const channel = isRuntimeServer() ? null : new BroadcastChannel(key);
  if (channel) {
    channel.addEventListener("message", event => {
      for (const listener of listeners) listener(event);
    });
  }

  const broadcastAtom = baseAtom<
    TValue,
    [{ isEvent: boolean; value: SetStateAction<TValue> }],
    void
  >(
    get => get(valueAtom),
    (get, set, update: { isEvent: boolean; value: SetStateAction<TValue> }) => {
      set(
        valueAtom,
        (isFunction(update.value)
          ? update.value(get(valueAtom))
          : update.value) as TValue
      );

      if (!update.isEvent && !isRuntimeServer() && channel) {
        channel.postMessage(StormParser.stringify(get(valueAtom)));
      }
    }
  );
  broadcastAtom.onMount = setAtom => {
    const listener = (event: MessageEvent<string>) => {
      setAtom({ isEvent: true, value: StormParser.parse(event.data) });
    };
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  };

  return baseAtom<TValue, [SetStateAction<TValue>], void>(
    get => get(broadcastAtom),
    (_, set, update: SetStateAction<TValue>) => {
      set(broadcastAtom, {
        isEvent: false,
        value: update
      });
    }
  );
}
