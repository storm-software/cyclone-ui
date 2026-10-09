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

import { getFieldLabelInset, useFieldHasStartIcon } from "@cyclone-ui/field";
import type { FormControlSize } from "@cyclone-ui/helpers";
import { getFormSizeScale } from "@cyclone-ui/helpers";
import type {
  GetProps,
  TamaDefer,
  TamaguiComponent,
  TextNonStyleProps,
  TextStylePropsBase
} from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  useComposedRefs,
  useEvent,
  useTheme
} from "@tamagui/core";
import { registerFocusable } from "@tamagui/focusable";
import type { TamaguiWebElement } from "@tamagui/web";
import type { FormEvent } from "react";
import { useCallback, useEffect, useRef } from "react";
import type { InputComponentProps } from "./types";
import { InputContext, baseInputStyle } from "./utilities";

/* eslint-disable ts/no-unused-vars --
 * Native-only props are destructured so they are not forwarded to the web input.
 */

// Tamagui v3 cannot infer props from a bare host tag, so describe the styled
// `<input>` explicitly: text styles plus the variants from `baseInputStyle`.
// The ref stays `any`, as v2 inferred from the `"input" as any` host, since
// it may hold an `<input>` or a `<textarea>`.
type BaseInputValueComponent = TamaguiComponent<
  TamaDefer,
  any,
  // `onChange`/`onInput` carry `InputChangeEventHandler` (see `types.ts`).
  Omit<TextNonStyleProps, "onChange" | "onInput">,
  TextStylePropsBase,
  { size?: FormControlSize; disabled?: boolean }
>;

const BaseInputValue = styled(
  "input" as any,
  baseInputStyle[0],
  baseInputStyle[1]
) as unknown as BaseInputValueComponent;
const BaseInputValueImpl = BaseInputValue as any;

export const InputValue = createStyledHOC(
  BaseInputValue,
  (
    {
      autoComplete = "off",
      ...inProps
    }: Omit<GetProps<typeof BaseInputValue>, "onChange" | "onInput"> &
      InputComponentProps,
    forwardedRef
  ) => {
    const {
      disabled: contextDisabled,
      name: contextName,
      onChange: contextOnChange,
      onInput: contextOnInput,
      onBlur: contextOnBlur,
      onFocus: contextOnFocus,
      labelPlacement,
      size: contextSize,
      variant
    } = InputContext.useStyledContext();
    // An underlined control's text starts flush with its left edge unless a
    // start icon sits before it.
    const flushStart = variant === "underlined" && !useFieldHasStartIcon();

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
      render = "input",
      inputMode,
      onChange: inputOnChange,
      onInput: inputOnInput,
      onBlur: inputOnBlur,
      onFocus: inputOnFocus,
      ...rest
    } = inProps;
    const disabled = inProps.disabled ?? contextDisabled;
    const name = inProps.name ?? contextName;

    const ref =
      useRef<TamaguiWebElement<HTMLInputElement | HTMLTextAreaElement>>(null);
    const theme = useTheme();

    const composedRefs = useComposedRefs(forwardedRef, ref);
    const paddingInline =
      nativePaddingInline ??
      `calc(var(--t-space-4xl) * ${getFormSizeScale(inProps.size ?? contextSize)})`;
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
      (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.stopPropagation();
        const value = event.currentTarget.value;
        onInput?.(
          new CustomEvent("input", {
            detail: value
          }) as any
        );
        onChange?.(new CustomEvent("change", { detail: value }) as any);
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
        }),
        "--autofillBackgroundColor": theme.surfaceElevated?.variable
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

      @media (prefers-reduced-motion: no-preference) {
        @keyframes cyclone-placeholder-fade-in {
          from {
            opacity: 0.65;
          }

          to {
            opacity: 1;
          }
        }

        input::placeholder, textarea::placeholder {
          animation: cyclone-placeholder-fade-in 180ms ease-out both;
        }
      }

      input.cyclone-input-value:-webkit-autofill {
        background-color: var(--autofillBackgroundColor) !important;
        -webkit-box-shadow: 0 0 0 1000px var(--autofillBackgroundColor) inset !important;
      }
      `}
          </style>
        )}

        <BaseInputValueImpl
          asChild
          {...finalProps}
          disabled={disabled}
          id={name}>
          {render === "textarea" ? (
            <textarea
              ref={composedRefs as any}
              name={name}
              style={{
                color: "var(--color)",
                flex: 1,
                minWidth: 0,
                margin: 0,
                paddingInlineStart: flushStart ? 0 : paddingInline,
                paddingInlineEnd: paddingInline
              }}
              onChange={handleInput}
              onBlur={(inputOnBlur ?? contextOnBlur) as any}
              onFocus={(inputOnFocus ?? contextOnFocus) as any}
            />
          ) : (
            <input
              className="cyclone-input-value"
              ref={composedRefs as any}
              name={name}
              style={{
                height: "100%",
                flex: 1,
                minWidth: 0,
                margin: 0,
                // No `padding` shorthand: merged style order varies by size,
                // and a later shorthand would reset `paddingInline` to 0.
                paddingBottom: 0,
                // Drop the text under a floating label by the extra height an
                // inset label adds over a border one (see `getFieldLabelInset`).
                paddingTop: labelPlacement
                  ? 7 * getFormSizeScale(inProps.size ?? contextSize) +
                    getFieldLabelInset(
                      labelPlacement,
                      inProps.size ?? contextSize
                    ) -
                    getFieldLabelInset("border")
                  : 0,
                paddingInlineStart: flushStart ? 0 : paddingInline,
                paddingInlineEnd: paddingInline
              }}
              onChange={handleInput}
              onBlur={(inputOnBlur ?? contextOnBlur) as any}
              onFocus={(inputOnFocus ?? contextOnFocus) as any}
            />
          )}
        </BaseInputValueImpl>
      </>
    );
  },
  { displayName: "InputValue" }
);
