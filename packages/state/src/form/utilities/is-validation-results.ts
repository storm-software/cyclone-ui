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

import { isSetObject } from "@stryke/type-checks/is-set-object";
import type { ValidationResults } from "../types";

export const isValidationResults = (value: any): value is ValidationResults => {
  return (
    isSetObject(value) &&
    (Array.isArray((value as ValidationResults).initialize) ||
      Array.isArray((value as ValidationResults).change) ||
      Array.isArray((value as ValidationResults).blur) ||
      Array.isArray((value as ValidationResults).submit) ||
      Array.isArray((value as ValidationResults).server))
  );
};
