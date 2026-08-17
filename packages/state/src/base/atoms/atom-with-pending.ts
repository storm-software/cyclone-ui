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

import { noop } from "@stryke/helpers/noop";
import type { PrimitiveAtom } from "jotai";
import type { WithInitialValue } from "../../types";
import { baseAtom } from "./base-atom";

const pendingPromise = new Promise<never>(noop);

/**
 * Creates an atom that always returns a pending promise.
 *
 * @returns An atom that always returns a pending promise.
 */
export const atomWithPending = <Value>(): PrimitiveAtom<Value> &
  WithInitialValue<Value> => baseAtom(pendingPromise as unknown as Value);
