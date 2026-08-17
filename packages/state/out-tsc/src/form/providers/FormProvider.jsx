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
/* eslint-disable ts/no-unsafe-call -- bunshi/jotai molecule APIs and @stryke/async types */
import { delay } from "@stryke/async";
import { useThemeName } from "@tamagui/core";
import { useEffect } from "react";
import { useAtomEffect } from "../../base/hooks/use-atom-effect";
import { useFormActions } from "../hooks/use-form-actions";
import { FormApi } from "../molecules/form-molecule";
import { ValidationCause } from "../types";
import { AbortError } from "../utilities/abort-error";
function FormStateManager(props) {
    const { validate } = useFormActions();
    const molecule = FormApi.useMolecule();
    const theme = useThemeName();
    const setOptions = FormApi.use().options.set();
    useEffect(() => {
        setOptions({ theme, ...props });
    }, [setOptions]);
    useAtomEffect((get, set) => {
        const values = get(molecule.values);
        const options = get(molecule.options);
        const abortController = new AbortController();
        void (async () => {
            try {
                await delay(options.debounceMs);
                abortController.signal.throwIfAborted();
                if (options.onChange) {
                    await Promise.resolve(options.onChange({
                        get,
                        set,
                        atoms: molecule
                    }));
                    // Do not perform validation if the form if changed by the onChange callback
                    abortController.signal.throwIfAborted();
                }
                const promises = [];
                promises.push(validate(values, ValidationCause.CHANGE));
                const blurred = get(molecule.blurred);
                if (blurred) {
                    promises.push(validate(values, ValidationCause.BLUR));
                }
                const submitAttempts = get(molecule.submitAttempts);
                if (submitAttempts > 0) {
                    promises.push(validate(values, ValidationCause.SUBMIT));
                }
                await Promise.all(promises);
            }
            catch (e) {
                if (e instanceof AbortError) {
                    // async cleanup logic here
                }
                else {
                    // console.error(e);
                }
            }
        })();
        return () => {
            abortController.abort(new AbortError());
        };
    }, [validate]);
    return null;
}
export const FormProvider = ({ children, name, ...props }) => {
    return (<FormApi.Provider scope={name}>
      <FormStateManager {...props}/>
      {children}
    </FormApi.Provider>);
};
//# sourceMappingURL=FormProvider.jsx.map