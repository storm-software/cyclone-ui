/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

export interface DebounceOptions {
  /**
   * Call the `fn` on the [leading edge of the timeout](https://css-tricks.com/debouncing-throttling-explained-examples/#article-header-id-1).
   * Meaning immediately, instead of waiting for `wait` milliseconds.
   *
   * @defaultValue false
   */
  readonly leading?: boolean;

  /**
  Call the `fn` on trailing edge with last used arguments. Result of call is from previous call.
  @defaultValue true
  */
  readonly trailing?: boolean;
}

const DEBOUNCE_DEFAULTS: DebounceOptions = {
  trailing: true
};

export function debounce<TArgs extends unknown[], TReturn>(
  fn: (...args: TArgs) => PromiseLike<TReturn> | TReturn,
  wait = 25,
  options: DebounceOptions = {}
) {
  // Validate options
  options = { ...DEBOUNCE_DEFAULTS, ...options };
  if (!Number.isFinite(wait)) {
    throw new TypeError("Expected `wait` to be a finite number");
  }

  // Last result for leading value
  let leadingValue: PromiseLike<TReturn> | TReturn;

  // Debounce timeout handle
  let timeout: NodeJS.Timeout | undefined;

  // Promises to be resolved when debounce if finished
  let resolveList: Array<(value: PromiseLike<TReturn> | TReturn) => void> = [];

  // Keep state of currently resolving promise
  let currentPromise: Promise<TReturn> | undefined;

  // Trailing call info
  let trailingArgs: any[] | undefined;

  const applyFn = async (_this: any, args: any[]) => {
    currentPromise = _applyPromised(fn, _this, args);

    void currentPromise.finally(async () => {
      currentPromise = undefined;
      if (options.trailing && trailingArgs && !timeout) {
        const promise = applyFn(_this, trailingArgs);
        trailingArgs = undefined;
        return promise;
      }

      return undefined;
    });

    return currentPromise;
  };

  return async (...args: TArgs) => {
    if (currentPromise) {
      if (options.trailing) {
        trailingArgs = args;
      }
      return currentPromise;
    }
    return new Promise<TReturn>(resolve => {
      const shouldCallNow = !timeout && options.leading;

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = undefined;

        const promise = options.leading ? leadingValue : applyFn(this, args);
        for (const _resolve of resolveList) _resolve(promise);

        resolveList = [];
      }, wait);

      if (shouldCallNow) {
        leadingValue = applyFn(this, args);
        resolve(leadingValue);
      } else {
        resolveList.push(resolve);
      }
    });
  };
}

async function _applyPromised(fn: () => any, _this: any, args: any[]) {
  return await fn.apply(_this, args as []);
}
