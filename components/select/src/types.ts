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
