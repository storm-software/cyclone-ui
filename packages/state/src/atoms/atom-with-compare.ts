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

import { atomWithReducer } from "jotai/utils";

export function atomWithCompare<TValue>(
  initialValue: TValue,
  areEqual: (prev: TValue, next: TValue) => boolean
) {
  return atomWithReducer(initialValue, (prev: TValue, next: TValue) => {
    if (areEqual(prev, next)) {
      return prev;
    }

    return next;
  });
}
