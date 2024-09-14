/* eslint-disable @typescript-eslint/no-explicit-any */

export interface DebounceOptions {
  /**
   * Call the `fn` on the [leading edge of the timeout](https://css-tricks.com/debouncing-throttling-explained-examples/#article-header-id-1).
   * Meaning immediately, instead of waiting for `wait` milliseconds.
   *
   * @default false
   */
  readonly leading?: boolean;

  /**
  Call the `fn` on trailing edge with last used arguments. Result of call is from previous call.
  @default true
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
  // eslint-disable-next-line no-param-reassign
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
  let currentPromise: Promise<TReturn> | null;

  // Trailing call info
  let trailingArgs: any[] | null;

  const applyFn = (_this: any, args: any[]) => {
    currentPromise = _applyPromised(fn, _this, args);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    currentPromise.finally(() => {
      currentPromise = null;
      if (options.trailing && trailingArgs && !timeout) {
        const promise = applyFn(_this, trailingArgs);
        trailingArgs = null;
        return promise;
      }

      return undefined;
    });

    return currentPromise;
  };

  // eslint-disable-next-line func-names
  return function (...args: TArgs) {
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
        resolveList.forEach(_resolve => _resolve(promise));

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
  // eslint-disable-next-line no-return-await
  return await fn.apply(_this, args);
}
