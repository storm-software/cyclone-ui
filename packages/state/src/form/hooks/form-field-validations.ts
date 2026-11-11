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

import { createContext } from "react";

/**
 * Runs all of a field's validators against its current value. Synchronous
 * validators store their results before the returned promise settles.
 */
export type FieldValidation = () => Promise<void>;

/**
 * The validations of a form's mounted fields, which the form runs on submit
 * (`null` outside of a `FormProvider`).
 */
export const FormFieldValidationsContext =
  createContext<Set<FieldValidation> | null>(null);
