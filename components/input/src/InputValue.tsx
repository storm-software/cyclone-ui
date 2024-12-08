import {
  View,
  styled,
  useComposedRefs,
  useEvent,
  useTheme
} from "@tamagui/core";
import { registerFocusable } from "@tamagui/focusable";
import { FormEvent, useCallback, useEffect, useRef } from "react";
import { InputProps } from "./types";
import { InputContext, baseInputStyle } from "./utilities";

const BaseInputValue = styled(View, baseInputStyle[0], baseInputStyle[1]);

export const InputValue = BaseInputValue.styleable<InputProps>(
  ({ autoComplete = "off", ...inProps }, forwardedRef) => {
    const { disabled, name, onChange, onInput, onBlur, onFocus } =
      InputContext.useStyledContext();

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
      inputMode,
      ...rest
    } = inProps;

    const ref = useRef<HTMLInputElement>(null);
    const theme = useTheme();

    const composedRefs = useComposedRefs(forwardedRef, ref);

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
    }, []);

    useEffect(() => {
      if (selection) {
        ref.current?.setSelectionRange(
          selection.start || null,
          selection.end || null
        );
      }
    }, [selection?.start, selection?.end]);

    const finalProps = {
      ...rest,
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
    } as any;

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

    const handleChange = useCallback(
      (event: FormEvent<HTMLInputElement>) => {
        event.stopPropagation();

        if (onChange) {
          onChange(
            new CustomEvent("change", {
              detail: event.currentTarget.value
            })
          );
        }
      },
      [onChange]
    );

    const handleInput = useCallback(
      (event: FormEvent<HTMLInputElement>) => {
        if (onInput) {
          onInput(
            new CustomEvent("input", {
              detail: event.currentTarget.value
            })
          );
        }
      },
      [onInput]
    );

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

        <BaseInputValue
          ref={composedRefs}
          disabled={disabled}
          {...finalProps}
          id={name}
          onChange={handleChange}
          onInput={handleInput}
          onBlur={onBlur}
          onFocus={onFocus}
          autoComplete={autoComplete}
        />
      </>
    );
  },
  { staticConfig: { componentName: "InputValue" } }
);
