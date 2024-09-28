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

import { FormOptions, formOptions } from "@tanstack/react-form/nextjs";
import {
  valibotValidator,
  type ValibotValidator
} from "@tanstack/valibot-form-adapter";

export const createFormOptions = <TFormValues>(
  options?: FormOptions<TFormValues, ValibotValidator>
): FormOptions<TFormValues, ValibotValidator> | undefined => {
  return formOptions<TFormValues, ValibotValidator>({
    asyncDebounceMs: 500,
    validatorAdapter: valibotValidator(),
    ...options
  });
};
