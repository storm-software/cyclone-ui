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

import type { InputContextProps } from "@cyclone-ui/input";

export type SelectChangeEventHandler = (
  event: CustomEvent<string | null>
) => any;

export type SelectContextProps = Omit<
  InputContextProps,
  "onChange" | "onInput"
> & {
  /**
   * Callback that is called when the text input's text changes.
   *
   * @remarks
   * This is called after `onInput` and is useful for cases where you want to handle the input after it has been provided.
   */
  onChange?: SelectChangeEventHandler;

  /**
   * Callback that is called when the user provides input to the text field.
   *
   * @remarks
   * This is called before `onChange` and is useful for cases where you want to prevent certain characters from being inputted.
   */
  onInput?: SelectChangeEventHandler;
};
