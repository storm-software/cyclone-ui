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

import { noop } from "@storm-stack/utilities";
import { baseAtom } from "../base/base-atom";

const pendingPromise = new Promise<never>(noop);

/**
 * Creates an atom that always returns a pending promise.
 *
 * @returns An atom that always returns a pending promise.
 */
export const atomWithPending = <Value>() =>
  baseAtom(pendingPromise as unknown as Value);
