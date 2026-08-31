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

import { styled, useComposedRefs, useEvent, useTheme } from "@tamagui/core";
import { registerFocusable } from "@tamagui/focusable";
import type { TamaguiWebElement } from "@tamagui/web";
import type { FormEvent } from "react";
import { useCallback, useEffect, useRef } from "react";
import type { InputComponentProps } from "./types";
import { InputContext, baseInputStyle } from "./utilities";

/* eslint-disable ts/no-unused-vars --
 * Native-only props are destructured so they are not forwarded to the web input.
 */

const BaseInputValue = styled(
  "input" as any,
  baseInputStyle[0],
  baseInputStyle[1]
);

export const InputValue = BaseInputValue.styleable<InputComponentProps>(
  ({ autoComplete = "off", ...inProps }, forwardedRef) => {
    const {
      disabled,
      name,
      onChange: contextOnChange,
      onInput: contextOnInput,
      onBlur: contextOnBlur,
      onFocus: contextOnFocus
    } = InputContext.useStyledContext();

    const {
      // some of destructed props are just to avoid passing them to ...rest because they are not in web.
      allowFontScaling,
      selectTextOnFocus,
      showSoftInputOnFocus,
      textContentType,
      passwordRules,
      textBreakStrategy,
      underlineColorAndroid,
      selection,
      lineBreakStrategyIOS,
      returnKeyLabel,
      onSubmitEditing,
      caretHidden,
      clearButtonMode,
      clearTextOnFocus,
      contextMenuHidden,
      dataDetectorTypes,
      enablesReturnKeyAutomatically,
      importantForAutofill,
      inlineImageLeft,
      inlineImagePadding,
      inputAccessoryViewID,
      keyboardAppearance,
      keyboardType,
      cursorColor,
      disableFullscreenUI,
      editable,
      maxFontSizeMultiplier,
      multiline,
      numberOfLines,
      onChangeText,
      onContentSizeChange,
      onEndEditing,
      onScroll,
      onSelectionChange,
      caretColor,
      placeholderTextColor,
      blurOnSubmit,
      enterKeyHint,
      returnKeyType,
      rejectResponderTermination,
      scrollEnabled,
      secureTextEntry,
      selectionColor,
      nativePaddingInline,
      inputMode,
      onChange: inputOnChange,
      onInput: inputOnInput,
      onBlur: inputOnBlur,
      onFocus: inputOnFocus,
      ...rest
    } = inProps;

    const ref = useRef<TamaguiWebElement<HTMLInputElement>>(null);
    const theme = useTheme();

    const composedRefs = useComposedRefs(forwardedRef, ref);
    const onChange = inputOnChange ?? contextOnChange;
    const onInput = inputOnInput ?? contextOnInput;
    const handleSelectionChange = useEvent(() => {
      const start = ref.current?.selectionStart ?? 0;
      const end = ref.current?.selectionEnd ?? 0;
      onSelectionChange?.({
        nativeEvent: {
          selection: {
            end,
            start
          }
        }
      } as any);
    });

    useEffect(() => {
      if (onSelectionChange) {
        ref.current?.addEventListener("selectionchange", handleSelectionChange);

        return () => {
          ref.current?.removeEventListener(
            "selectionchange",
            handleSelectionChange
          );
        };
      }

      return () => {};
    }, [handleSelectionChange, onSelectionChange]);

    useEffect(() => {
      if (selection) {
        ref.current?.setSelectionRange(
          selection.start || null,
          selection.end ?? null
        );
      }
    }, [selection]);

    const handleInput = useCallback(
      (event: FormEvent<HTMLInputElement>) => {
        event.stopPropagation();
        const value = event.target.value;
        onInput?.(
          new CustomEvent("input", {
            detail: value
          })
        );
        onChange?.(new CustomEvent("change", { detail: value }));
      },
      [onChange, onInput]
    );

    const finalProps = {
      ...rest,
      autoComplete,
      inputMode,
      disabled,
      caretColor,
      enterKeyHint,
      style: {
        ...(rest.style as any),
        ...(placeholderTextColor && {
          "--placeholderColor":
            theme[placeholderTextColor]?.variable || placeholderTextColor
        }),
        ...(selectionColor && {
          "--selectionColor": theme[selectionColor]?.variable || selectionColor
        })
      }
    };

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
          contextOnFocus?.();
        },
        focus: () => {
          contextOnFocus?.();
        }
      });
    }, [name, disabled, contextOnFocus]);

    return (
      <>
        {process.env.TAMAGUI_TARGET === "web" && (
          <style>
            {`
      input::selection, textarea::selection {
        background-color: var(--selectionColor) !important;
      }

      input::placeholder, textarea::placeholder {
        color: var(--placeholderColor) !important;
      }
      `}
          </style>
        )}

        <BaseInputValue asChild {...finalProps} disabled={disabled} id={name}>
          <input
            ref={composedRefs}
            style={{
              height: "100%",
              flex: 1,
              minWidth: 0,
              margin: 0,
              padding: 0,
              paddingInline: nativePaddingInline ?? "var(--t-space-4xl)"
            }}
            onChange={handleInput}
            onBlur={inputOnBlur ?? contextOnBlur}
            onFocus={inputOnFocus ?? contextOnFocus}
          />
        </BaseInputValue>
      </>
    );
  },
  { staticConfig: { componentName: "InputValue" } }
);
