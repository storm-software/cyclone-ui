import { produce } from "immer";
import { StateCreator } from "zustand";
import {
  PublishOptions,
  SetImmerState,
  State,
  StateCreatorWithDevtools,
  StoreApi
} from "../types";

export interface PublishMiddlewareState {
  /**
   * The id of the tab / window
   */
  id: number;

  /**
   * The broadcast channel
   */
  channel: BroadcastChannel;

  /**
   * Is the store synced with the other tabs
   */
  isSynced: boolean;

  /**
   * Is this tab / window the main tab / window
   * When a new tab / window is opened, it will be synced with the main
   */
  isLeader: boolean;

  /**
   * Store a list of all the tabs / windows
   * Only for the main tab / window
   */
  followers: number[];
}

/**
 * Types
 */
type Item = { [key: string]: unknown };
type Message =
  | {
      action: "sync";
    }
  | {
      action: "change";
      state: Item;
    }
  | {
      action: "add_new_follower";
      id: number;
    }
  | {
      action: "close";
      id: number;
    }
  | {
      action: "change_leader";
      id: number;
      followers: number[];
    };

export const publishMiddleware =
  <TState extends State>(
    config: StateCreatorWithDevtools<
      TState,
      SetImmerState<TState>,
      StoreApi<TState>
    >,
    options?: PublishOptions
  ): StateCreatorWithDevtools<TState> =>
  (set, get, api) => {
    const _setState = api.setState;

    if (typeof window === "undefined") {
      console.warn(
        "BroadcastChannel is not supported in this environment. The store will not be shared."
      );
      return config(set, get, api);
    }
    if (typeof BroadcastChannel === "undefined") {
      console.warn(
        "BroadcastChannel is not supported in this browser. The store will not be shared."
      );
      return config(set, get, api);
    }

    const publisher: PublishMiddlewareState = {
      id: 0,
      channel: new BroadcastChannel(options?.name ? options?.name : api.name),
      isSynced: get() !== undefined,
      isLeader: false,
      followers: [0]
    };

    const setState = (fn, actionName) => {
      const previous = get() as Item;
      _setState(fn, actionName);

      if (options?.keepSynced === false) {
        return;
      }

      publisher.channel.postMessage({
        action: "change",
        state: Object.entries(get() as Item).reduce((obj, [key, val]) => {
          if (previous[key] !== val) {
            obj = { ...obj, [key]: val };
          }
          return obj;
        }, {} as Item)
      } as Message);
    };
    api.setState = setState;

    /**
     * Subscribe to the broadcast channel
     */
    publisher.channel.onmessage = e => {
      if ((e.data as Message).action === "sync") {
        if (!publisher.isLeader) {
          return;
        }

        publisher.channel.postMessage({
          action: "change",
          state: Object.entries(get() as Item).reduce((obj, [key, val]) => {
            if (typeof val !== "function" && typeof val !== "symbol") {
              obj = { ...obj, [key]: val };
            }
            return obj;
          }, {})
        } as Message);

        /**
         * Set the new tab / window id
         */
        const new_id = publisher.followers[publisher.followers.length - 1]! + 1;
        publisher.followers.push(new_id);

        publisher.channel.postMessage({
          action: "add_new_follower",
          id: new_id
        } as Message);

        return;
      }

      /**
       * Set an id for the tab / window if it doesn't have one
       */
      if (
        (e.data as Message).action === "add_new_follower" &&
        !publisher.isLeader &&
        publisher.id === 0
      ) {
        publisher.id = e.data.id;
        return;
      }

      /**
       * On receiving a new state, update the state
       */
      if ((e.data as Message).action === "change") {
        /**
         * Update the state
         */
        set(e.data.state);

        /**
         * Set the synced attribute
         */
        publisher.isSynced = true;
      }

      /**
       * On receiving a close message, remove the tab / window id from the list
       */
      if ((e.data as Message).action === "close") {
        if (!publisher.isLeader) {
          return;
        }

        const index = publisher.followers.indexOf(e.data.id);
        if (index !== -1) {
          publisher.followers.splice(index, 1);
        }
      }

      /**
       * On receiving a change_leader message, change the main tab / window
       */
      if ((e.data as Message).action === "change_leader") {
        if (e.data.id === publisher.id) {
          publisher.isLeader = true;
          publisher.followers.splice(
            0,
            publisher.followers.length,
            ...e.data.followers
          );
        }
      }
    };

    const onClose = (): void => {
      publisher.channel.postMessage({
        action: "close",
        id: publisher.id
      } as Message);

      if (publisher.isLeader) {
        if (publisher.followers.length === 1) {
          publisher.channel.close();
          return;
        }

        const remaining = publisher.followers.filter(
          follower => follower !== publisher.id
        );
        publisher.channel.postMessage({
          action: "change_leader",
          id: remaining[0],
          followers: remaining
        } as Message);

        return;
      }
    };
    window.addEventListener("beforeunload", onClose);

    if (!publisher.isSynced) {
      publisher.channel.postMessage({ action: "sync" } as Message);

      /**
       * If isSynced is false after 100ms, this tab is the main tab
       */
      setTimeout(() => {
        if (!publisher.isSynced) {
          publisher.isLeader = true;
          publisher.isSynced = true;
        }
      }, options?.timeoutMs ?? 100);
    }

    return config(setState, get, api);
  };
