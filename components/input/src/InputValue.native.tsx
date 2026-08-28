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

import type { Mutable } from "@stryke/types/base";
import { styled, useComposedRefs } from "@tamagui/core";
import { registerFocusable } from "@tamagui/focusable";
import type { ComponentProps, ComponentType } from "react";
import { useEffect, useRef } from "react";
import type {
  TextInputChangeEvent,
  TextInputKeyPressEvent,
  TextInputSubmitEditingEvent
} from "react-native";
import { TextInput } from "react-native";
import type { InputComponentProps } from "./types";
import { baseInputStyle, InputContext } from "./utilities";

/* eslint-disable ts/no-unused-vars --
 * Web-only props are destructured so they are not forwarded to the native input.
 */

const BaseInputValue = styled(
  TextInput,
  baseInputStyle[0] as any,
  baseInputStyle[1]
);

export const Input: ComponentType<InputComponentProps> =
  BaseInputValue.styleable<InputComponentProps>((inProps, forwardedRef) => {
    const {
      disabled,
      name,
      onChange: contextOnChange,
      onInput: contextOnInput,
      onBlur,
      onFocus
    } = InputContext.useStyledContext();

    const {
      // some of destructed props are just to avoid passing them to ...rest because they are not in native.
      type,
      onChange: inputOnChange,
      onInput: inputOnInput,
      // @ts-ignore
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
      rows,
      enterKeyHint,
      returnKeyType,
      onKeyDown,
      inputMode,
      ...rest
    } = inProps;
    const onChange = inputOnChange ?? contextOnChange;
    const onInput = inputOnInput ?? contextOnInput;

    const ref = useRef<HTMLInputElement>(null);
    const composedRefs = useComposedRefs<any>(forwardedRef, ref);

    let secureTextEntry = false;
    const cursorColor = caretColor;
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
      numberOfLines: rows ?? rest.numberOfLines
    } as Mutable<ComponentProps<typeof BaseInputValue>>;

    if (type === "textarea") {
      finalProps.multiline = true;
    }

    if (onKeyDown) {
      finalProps.onKeyPress = (e: TextInputKeyPressEvent) => {
        const { key } = e.nativeEvent;
        if (
          key === "Backspace" ||
          (type === "textarea" && key === "Enter") ||
          key.length === 1
        ) {
          onKeyDown({
            key,
            type: "keydown"
          } as any);
        }
      };

      finalProps.onSubmitEditing = (_e: TextInputSubmitEditingEvent) => {
        onKeyDown({
          key: "Enter",
          type: "keydown"
        } as any);
      };
    }

    if (onChange || onInput) {
      finalProps.onChange = (event: TextInputChangeEvent) => {
        const { text } = event.nativeEvent;
        if (onInput) {
          onInput(
            new CustomEvent("input", {
              detail: text
            })
          );
        }

        if (onChange) {
          onChange(
            new CustomEvent("change", {
              detail: text
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
          onFocus?.();
        },
        focus: () => {
          onFocus?.();
        }
      });
    }, [name, disabled, onFocus]);

    return (
      <BaseInputValue
        onChange={_e => {}}
        ref={composedRefs}
        onBlur={onBlur}
        onFocus={onFocus}
        editable={!disabled}
        {...finalProps}
      />
    );
  });
