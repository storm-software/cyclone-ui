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
import { useComposedRefs } from "@tamagui/core";
import { useRef, type Ref } from "react";
import { FieldApi } from "../molecules/field-molecule";

type PossibleRef<T> =
  | React.Ref<T>
  | React.ForwardedRef<T>
  | React.RefObject<T>
  | undefined;

export const useFieldRef = <TFieldValue>(
  forwardedRef?: Ref<HTMLInputElement>
): Ref<HTMLInputElement> => {
  const ref = useRef<HTMLInputElement | null>(null);

  const field = FieldApi.use();
  const options = field.options.get();

  const inputRef = useMaskito({ options: options.mask });

  const refs = [ref, inputRef] as Ref<HTMLInputElement>[];
  if (forwardedRef) {
    refs.push(forwardedRef as Ref<HTMLInputElement>);
  }

  return useComposedRefs(...refs);
};
