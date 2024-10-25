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

import { isSetObject } from "@storm-stack/types/type-checks/is-set-object";
import { ValidationResults } from "../types";

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
