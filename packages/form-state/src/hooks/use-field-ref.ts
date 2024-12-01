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
// import { useComposedRefs } from "@storm-stack/hooks";
import { useComposedRefs, type TamaguiTextElement } from "@tamagui/core";
import { useRef, type LegacyRef } from "react";
import { useFieldStore } from "./use-field-store";

type PossibleRef<T> =
  | React.Ref<T>
  | React.ForwardedRef<T>
  | React.RefObject<T>
  | undefined;

export const useFieldRef = <TFieldValue>(
  forwardedRef?: LegacyRef<TamaguiTextElement>
): LegacyRef<TamaguiTextElement> => {
  const ref = useRef<TamaguiTextElement | null>(null);

  const store = useFieldStore<TFieldValue>();
  const options = store.get.options();

  const inputRef = useMaskito({ options: options.mask });

  const refs = [ref, inputRef] as PossibleRef<TamaguiTextElement>[];
  if (forwardedRef) {
    refs.push(forwardedRef as PossibleRef<TamaguiTextElement>);
  }

  return useComposedRefs(...refs);
};
