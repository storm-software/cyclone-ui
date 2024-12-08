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
import { atomEffect } from "jotai-effect";
import { useAtomValue } from "jotai/react";

type EffectFn = Parameters<typeof atomEffect>[0];

export function useAtomEffect(effectFn: EffectFn) {
  useAtomValue(useMemoStable(() => atomEffect(effectFn), [effectFn]));
}
