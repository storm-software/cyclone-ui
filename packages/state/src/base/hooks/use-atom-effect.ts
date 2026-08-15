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

import { useMemoStable } from "@storm-stack/hooks/use-memo-stable";
import { useAtomValue } from "jotai/react";
import { loadable } from "jotai/utils";
import type { EffectCallback } from "../atoms/atom-with-effect";
import { atomWithEffect } from "../atoms/atom-with-effect";

/**
 * A hook that runs a side effect when the component mounts.
 *
 * @param effectFn - The side effect function.
 */
export function useAtomEffect(effectFn: EffectCallback, deps: any[] = []) {
  useAtomValue(loadable(useMemoStable(() => atomWithEffect(effectFn), deps)));
}
