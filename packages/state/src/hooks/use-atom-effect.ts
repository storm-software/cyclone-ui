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

import { useMemoStable } from "@storm-stack/hooks/use-memo-stable";
import { useAtomValue } from "jotai/react";
import { loadable } from "jotai/utils";
import { atomWithEffect, type EffectCallback } from "../atoms/atom-with-effect";

/**
 * A hook that runs a side effect when the component mounts.
 *
 * @param effectFn - The side effect function.
 */
export function useAtomEffect(effectFn: EffectCallback, deps: any[] = []) {
  useAtomValue(loadable(useMemoStable(() => atomWithEffect(effectFn), deps)));
}
