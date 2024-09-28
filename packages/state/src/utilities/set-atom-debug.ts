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

import { isDevelopment } from "@storm-stack/utilities";
import type { Atom } from "jotai/vanilla";

/**
 * Add a debug label to the Jotai Atom
 *
 * @param atom - The atom to apply the debug label to
 * @param label - The label to apply to the atom
 */
export const setAtomDebugLabel = (atom: Atom<unknown>, label: string) => {
  if (isDevelopment()) {
    // eslint-disable-next-line no-param-reassign
    atom.debugLabel = label;
  }
};

/**
 * Mark the atom as a *private* or internal
 *
 * @param atom - The atom to mark as private
 */
export const setAtomDebugPrivate = (atom: Atom<unknown>) => {
  if (isDevelopment()) {
    // eslint-disable-next-line no-param-reassign
    atom.debugPrivate = true;
  }
};
