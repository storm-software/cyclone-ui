/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { useMaskito } from "@maskito/react";
import { ReactRef, useComposedRefs } from "@storm-stack/hooks";
import { useRef } from "react";
import { useFieldStore } from "./use-field-store";

export const useFieldRef = <TFieldValue>(
  forwardedRef?: ReactRef<HTMLElement | null>
): ReactRef<HTMLInputElement | null> => {
  const ref = useRef<HTMLInputElement | null>(null);

  const store = useFieldStore<TFieldValue>();
  const options = store.get.options();

  const inputRef = useMaskito({ options: options.mask });

  const refs = [ref, inputRef] as ReactRef<HTMLInputElement | null>[];
  if (forwardedRef) {
    refs.push(forwardedRef);
  }

  return useComposedRefs(...refs);
};