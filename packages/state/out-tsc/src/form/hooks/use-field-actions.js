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
/* eslint-disable ts/no-unsafe-call -- validator callbacks are dynamically keyed */
import { upperCaseFirst } from "@stryke/string-format/upper-case-first";
import { isPromise } from "@stryke/type-checks/is-promise";
import { RESET, useAtomCallback } from "jotai/utils";
import { useCallback } from "react";
import { FieldApi } from "../molecules/field-molecule";
import { ValidationCause } from "../types";
export const useFieldActions = () => {
    const field = FieldApi.useMolecule();
    const validate = useAtomCallback(useCallback(async (get, set, nextValue, cause) => {
        const options = get(field.options);
        if ((options.validate?.[`on${upperCaseFirst(cause)}`] &&
            options.validate[`on${upperCaseFirst(cause)}`].length > 0) ||
            (options.validate?.[`on${upperCaseFirst(ValidationCause.INITIALIZE)}`] &&
                options.validate[`on${upperCaseFirst(ValidationCause.INITIALIZE)}`]
                    .length > 0)) {
            const previousValue = get(field.previousValue);
            const results = [];
            if (options.validate?.[`on${upperCaseFirst(cause)}`] &&
                options.validate[`on${upperCaseFirst(cause)}`].length > 0) {
                results.push(...options.validate[`on${upperCaseFirst(cause)}`].map(validator => validator(nextValue, previousValue, cause, get, set)));
            }
            if (cause !== ValidationCause.INITIALIZE &&
                options.validate?.[`on${upperCaseFirst(ValidationCause.INITIALIZE)}`] &&
                options.validate[`on${upperCaseFirst(ValidationCause.INITIALIZE)}`]
                    .length > 0) {
                results.push(...options.validate[`on${upperCaseFirst(ValidationCause.INITIALIZE)}`].map(validator => validator(nextValue, previousValue, cause, get, set)));
            }
            const messages = [];
            const promises = [];
            for (const result of results) {
                if (result) {
                    if (isPromise(result)) {
                        promises.push(result);
                    }
                    else {
                        messages.push(...result);
                    }
                }
            }
            if (promises.length > 0) {
                set(field.validating, true);
                for (const result of await Promise.all(promises)) {
                    if (result && result.length > 0) {
                        messages.push(...result);
                    }
                }
                set(field.validating, false);
            }
            set(field.validationResults, prev => ({
                ...prev,
                [cause]: messages
            }));
        }
    }, []));
    const reset = useAtomCallback(useCallback(async (get, set) => {
        // set(field.disabled, RESET);
        // set(field.touched, RESET);
        // set(field.blurred, RESET);
        set(field.value, get(field.initialValue));
        set(field.options, RESET);
        // set(field.validating, RESET);
        // set(field.validationResults, RESET);
    }, []));
    const initialize = useAtomCallback(useCallback(async (get, set, initialValue, skipIfDirty = true) => {
        if (skipIfDirty && get(field.dirty)) {
            return;
        }
        if (initialValue !== get(field.initialValue)) {
            set(field.initialValue, initialValue);
        }
    }, []));
    const change = useAtomCallback(useCallback(async (get, set, nextValue, touch = false) => {
        if (!get(field.disabled)) {
            if (!get(field.touched) && touch) {
                set(field.touched, touch);
            }
            const options = get(field.options);
            const value = get(field.value);
            let nextParsed = nextValue;
            if (options.parse) {
                nextParsed = options.parse(nextValue);
            }
            if (!options.isEqual(nextParsed, value)) {
                set(field.value, nextParsed);
            }
        }
    }, []));
    const focus = useAtomCallback(useCallback(async (get, set) => {
        if (!get(field.disabled)) {
            if (!get(field.touched)) {
                set(field.touched, true);
            }
            set(field.focused, true);
        }
    }, []));
    const blur = useAtomCallback(useCallback(async (get, set) => {
        if (!get(field.disabled)) {
            if (!get(field.touched)) {
                set(field.touched, true);
            }
            set(field.focused, false);
            set(field.blurred, true);
        }
    }, []));
    const setFocused = useCallback(async (focused) => {
        if (focused) {
            return focus();
        }
        return blur();
    }, [focus, blur]);
    const toggleFocused = useAtomCallback(useCallback(async (get) => setFocused(!get(field.focused)), [setFocused]));
    const mount = useAtomCallback(useCallback(async (get, set, ref, tabIndex) => {
        set(field.ref, ref);
        set(field.tabIndex, tabIndex ?? 0);
        if (!get(field.initialValue)) {
            const options = get(field.options);
            set(field.initialValue, options.defaultValue ?? null);
        }
    }, []));
    return {
        mount,
        initialize,
        change,
        focus,
        blur,
        setFocused,
        toggleFocused,
        validate,
        reset
    };
};
//# sourceMappingURL=use-field-actions.js.map