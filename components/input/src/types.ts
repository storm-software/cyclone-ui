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

import type {
  ColorTokens,
  SizeTokens,
  TamaguiComponentPropsBase,
  TextProps,
  ViewProps
} from "@tamagui/web";
import type { InputModeOptions, TextInputProps } from "react-native";

type DetailedInputProps = React.DetailedHTMLProps<
  React.HTMLProps<HTMLInputElement>,
  HTMLInputElement
>;

export type InputChangeEventHandler = (event: CustomEvent<string>) => any;

export type InputProps = ViewProps &
  Omit<
    DetailedInputProps,
    | "className"
    | "children"
    | "value"
    | "size"
    | "onChange"
    | "onInput"
    | keyof ViewProps
  > &
  Pick<TextProps, "color"> &
  Omit<DetailedInputProps["style"], "color"> &
  Omit<
    TextInputProps,
    | "inputMode"
    | "secureTextEntry"
    | "onChangeText"
    | "onChange"
    | "onInput"
    | "editable"
    | "enterKeyHint"
    | "keyboardType"
    | "placeholderTextColor"
    | "selectionColor"
    | "numberOfLines"
  > & {
    /**
     * use `type` instead of inputMode for most cases, use `inputMode="none"` to disable the soft keyboard
     */
    inputMode?: InputModeOptions;

    /**
     * The color of the placeholder text displayed prior to input provided by the user
     */
    placeholderTextColor?: ColorTokens;

    /**
     * The color of the text selection in the input
     */
    selectionColor?: ColorTokens;

    /**
     * The HTML element to render when on web
     */
    render?: TamaguiComponentPropsBase["render"];

    /**
     * The enter key to display in the mobile keyboard
     *
     * @defaultValue "done"
     */
    enterKeyHint?:
      "done" | "go" | "next" | "search" | "send" | "enter" | "previous";

    /**
     * @deprecated - use `type` instead
     */
    keyboardType?: TextInputProps["keyboardType"];

    /**
     * @deprecated - use `readOnly` instead
     */
    editable?: TextInputProps["editable"];

    /**
     * @deprecated - use `type="password"` instead
     */
    secureTextEntry?: TextInputProps["secureTextEntry"];

    /**
     * @deprecated - use `onChange` instead
     */
    onChangeText?: TextInputProps["onChange"];

    /**
     * @deprecated - use `render='textarea'` instead
     */
    multiline?: boolean;

    /**
     * @deprecated - use `rows` instead
     */
    numberOfLines?: number;
  };

export interface InputContextProps {
  /**
   * The input's name.
   */
  name?: string;

  /**
   * The input's current size.
   */
  size: SizeTokens;

  /**
   * The input's current circular status value.
   */
  circular: boolean;

  /**
   * The input's current disabled status value.
   */
  disabled: boolean;

  /**
   * The input's current focused status value.
   */
  focused: boolean;

  /**
   * Callback that is called when the text input's text changes.
   *
   * @remarks
   * This is called after `onInput` and is useful for cases where you want to handle the input after it has been provided.
   */
  onChange?: InputChangeEventHandler;

  /**
   * Callback that is called when the user provides input to the text field.
   *
   * @remarks
   * This is called before `onChange` and is useful for cases where you want to prevent certain characters from being inputted.
   */
  onInput?: InputChangeEventHandler;

  /**
   * Callback that is called when the text input is focused.
   */
  onFocus?: () => any;

  /**
   * Callback that is called when the text input is blurred.
   */
  onBlur?: () => any;
}
