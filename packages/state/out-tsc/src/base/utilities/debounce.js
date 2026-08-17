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
const DEBOUNCE_DEFAULTS = {
    trailing: true
};
export function debounce(fn, wait = 25, options = {}) {
    // Validate options
    options = { ...DEBOUNCE_DEFAULTS, ...options };
    if (!Number.isFinite(wait)) {
        throw new TypeError("Expected `wait` to be a finite number");
    }
    // Last result for leading value
    let leadingValue;
    // Debounce timeout handle
    let timeout;
    // Promises to be resolved when debounce if finished
    let resolveList = [];
    // Keep state of currently resolving promise
    let currentPromise;
    // Trailing call info
    let trailingArgs;
    const applyFn = async (_this, args) => {
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
    return async (...args) => {
        if (currentPromise) {
            if (options.trailing) {
                trailingArgs = args;
            }
            return currentPromise;
        }
        return new Promise(resolve => {
            const shouldCallNow = !timeout && options.leading;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                timeout = undefined;
                const promise = options.leading ? leadingValue : applyFn(this, args);
                for (const _resolve of resolveList)
                    _resolve(promise);
                resolveList = [];
            }, wait);
            if (shouldCallNow) {
                leadingValue = applyFn(this, args);
                resolve(leadingValue);
            }
            else {
                resolveList.push(resolve);
            }
        });
    };
}
async function _applyPromised(fn, _this, args) {
    return await fn.apply(_this, args);
}
//# sourceMappingURL=debounce.js.map