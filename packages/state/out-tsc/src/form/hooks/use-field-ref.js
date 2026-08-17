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
/* eslint-disable react-hooks/refs -- composed input refs are collected during render */
import { useMaskito } from "@maskito/react";
import { useComposedRefs } from "@tamagui/core";
import { useRef } from "react";
import { FieldApi } from "../molecules/field-molecule";
export const useFieldRef = (forwardedRef) => {
    const ref = useRef(null);
    const field = FieldApi.use();
    const options = field.options.get();
    const inputRef = useMaskito({ options: options.mask });
    const refs = [ref, inputRef];
    if (forwardedRef) {
        refs.push(forwardedRef);
    }
    return useComposedRefs(...refs);
};
//# sourceMappingURL=use-field-ref.js.map