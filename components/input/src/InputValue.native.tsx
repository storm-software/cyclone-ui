import { styled, useComposedRefs } from "@tamagui/core";
import { registerFocusable } from "@tamagui/focusable";
import { useEffect, useRef } from "react";
import type {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputKeyPressEventData,
  TextInputSubmitEditingEventData
} from "react-native";
import { TextInput } from "react-native";
import type { InputProps } from "./types";
import { baseInputStyle, InputContext } from "./utilities";

const InnerInputValue = styled(TextInput, baseInputStyle[0], baseInputStyle[1]);

export const Input = InnerInputValue.styleable<InputProps>(
  (inProps, forwardedRef) => {
    const { disabled, name } = InputContext.useStyledContext();

    const {
      // some of destructed props are just to avoid passing them to ...rest because they are not in native.
      type,
      //@ts-ignore
      dirname,
      max,
      min,
      minLength,
      multiple,
      name: _name,
      required,
      step,
      disabled: _disabled,
      id,
      caretColor,
      onChange,
      onInput,
      rows,
      enterKeyHint,
      returnKeyType,
      onKeyDown,
      inputMode,
      tag,
      ...rest
    } = inProps;

    const ref = useRef<HTMLInputElement>(null);
    const composedRefs = useComposedRefs<any>(forwardedRef, ref);

    let secureTextEntry = false;
    let cursorColor = caretColor;
    let _returnKeyType = returnKeyType;
    let _enterKeyHint = enterKeyHint;
    if (enterKeyHint === "go") {
      _returnKeyType = "go";
      _enterKeyHint = undefined;
    }

    let _inputMode = inputMode;
    if (type === "email") {
      _inputMode = "email";
    } else if (type === "tel") {
      _inputMode = "tel";
    } else if (type === "search") {
      _inputMode = "search";
    } else if (type === "url") {
      _inputMode = "url";
    } else if (type === "password") {
      secureTextEntry = true;
      _inputMode = "text";
    } else if (type === "number") {
      _inputMode = "numeric";
    } else {
      _inputMode = "text";
    }

    let showSoftInputOnFocus = true;
    if (inputMode === "none") {
      showSoftInputOnFocus = false;
    }

    const finalProps = {
      ...rest,
      inputMode: _inputMode,
      showSoftInputOnFocus,
      disabled,
      id,
      cursorColor,
      enterKeyHint: _enterKeyHint,
      returnKeyType: _returnKeyType,
      secureTextEntry,
      numberOfLines: rows || rest.numberOfLines
    } as any;

    if (tag === "textarea") {
      finalProps.multiline = true;
    }

    if (onKeyDown) {
      finalProps.onKeyPress = (
        e: NativeSyntheticEvent<TextInputKeyPressEventData>
      ) => {
        const { key } = e.nativeEvent;
        if (
          key === "Backspace" ||
          (tag === "textarea" && key === "Enter") ||
          key.length === 1
        ) {
          onKeyDown({
            key,
            type: "keydown"
          } as any);
        }
      };

      finalProps.onSubmitEditing = (
        e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
      ) => {
        onKeyDown({
          key: "Enter",
          type: "keydown"
        } as any);
      };
    }

    if (onChange || onInput) {
      finalProps.onChange = (
        event: NativeSyntheticEvent<TextInputChangeEventData>
      ) => {
        const { text } = event.nativeEvent;

        if (onInput) {
          onInput(
            new CustomEvent("input", {
              detail: {
                text
              }
            })
          );
        }

        if (onChange) {
          onChange(
            new CustomEvent("change", {
              detail: {
                text
              }
            })
          );
        }
      };
    }

    useEffect(() => {
      if (!name) {
        return;
      }
      if (disabled) {
        return;
      }

      return registerFocusable(name, {
        focusAndSelect: () => {
          ref.current?.focus();
        },
        focus: () => {}
      });
    }, [name, disabled]);

    return (
      <InnerInputValue onChange={e => {}} ref={composedRefs} {...finalProps} />
    );
  }
);
