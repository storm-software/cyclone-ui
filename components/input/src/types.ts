import type {
  ColorTokens,
  SizeTokens,
  StackProps,
  TamaguiComponentPropsBase,
  TextProps
} from "@tamagui/web";
import type { InputModeOptions, TextInputProps } from "react-native";

export type InputContextProps = {
  name?: string;
  size: SizeTokens;
  color?: ColorTokens | string;
  circular: boolean;
  disabled: boolean;
  focused: boolean;
};

type DetailedInputProps = React.DetailedHTMLProps<
  React.HTMLProps<HTMLInputElement>,
  HTMLInputElement
>;

export type InputChangeEventHandler = (
  event: CustomEvent<{ text: string }>
) => any;

export type InputProps = StackProps &
  Omit<
    DetailedInputProps,
    | "className"
    | "children"
    | "value"
    | "size"
    | "onChange"
    | "onInput"
    | keyof StackProps
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
     * The HTML tag to render when on web
     */
    tag?: TamaguiComponentPropsBase["tag"];

    /**
     * The enter key to display in the mobile keyboard
     *
     * @defaultValue "done"
     */
    enterKeyHint?:
      | "done"
      | "go"
      | "next"
      | "search"
      | "send"
      | "enter"
      | "previous";

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
     * @deprecated - use `tag='textarea'` instead
     */
    multiline?: boolean;

    /**
     * @deprecated - use `rows` instead
     */
    numberOfLines?: number;
  };
