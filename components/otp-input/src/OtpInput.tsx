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

"use client";

import type { FormControlSize, FormControlState } from "@cyclone-ui/helpers";
import {
  FormControlContext,
  getFormFontScale,
  getFormSizeToken,
  useFormControl
} from "@cyclone-ui/helpers";
import { Input } from "@cyclone-ui/input";
import type { GetProps } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  Text,
  useComposedRefs,
  View
} from "@tamagui/core";
import type { ClipboardEvent, FocusEvent } from "react";
import {
  Fragment,
  useCallback,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";

export interface OtpInputProps {
  /**
   * The number of characters in the one-time password.
   *
   * @defaultValue 4
   */
  length?: number;

  /**
   * Accept digits only. Set to `false` to also accept ASCII letters.
   * @defaultValue true
   */
  numericOnly?: boolean;

  /** Called after the user fills every slot. */
  onComplete?: (value: string) => void;

  /**
   * The name of the first input (`${name}-${index}` for the others).
   * Inside a `Field`, defaults to the field name.
   */
  name?: string;

  /**
   * The size of the input fields.
   */
  size?: FormControlSize;

  /**
   * Whether the input is disabled. When `true`, the user cannot interact with the input.
   */
  disabled?: boolean;

  /** Prevent editing without applying disabled colors. */
  readOnly?: boolean;

  /**
   * The code, for a controlled input. Inside a `Field`, the field holds the value instead.
   */
  value?: string;

  /** The initial code of an uncontrolled input outside a `Field`. */
  defaultValue?: string;

  /** Called with the new code when a digit changes. */
  onChange?: (value: string) => void;

  /**
   * A label between the first half of the boxes and the last half.
   * `length` 4 with `"-"` renders two boxes, the label, then the last two.
   */
  middleLabel?: string;
}

const OtpInputFrame = styled(View, {
  displayName: "OtpInput",
  flexDirection: "row",
  gap: "2xl",
  alignItems: "center"
});

const noop = () => undefined;
const digitsOnly = (value: string) => value.replace(/\D/g, "");
const lettersAndDigits = (value: string) => value.replace(/[^a-z0-9]/gi, "");

/**
 * A one-time passcode input with one text box per character. Wrap it in a
 * `Field` to connect it to a form.
 */
export const OtpInput = createStyledHOC(
  OtpInputFrame,
  (
    {
      children: _children,
      length: lengthProp = 4,
      numericOnly = true,
      onComplete,
      name: nameProp,
      size: sizeProp,
      disabled: disabledProp,
      readOnly: readOnlyProp,
      value: valueProp,
      defaultValue = "",
      onChange,
      middleLabel,
      ...props
    }: Omit<GetProps<typeof OtpInputFrame>, keyof OtpInputProps> &
      OtpInputProps,
    forwardedRef
  ) => {
    const formControl = useFormControl();
    const id = useId();
    const name = nameProp ?? formControl?.name ?? id;
    const size = sizeProp ?? formControl?.size;
    const disabled = disabledProp ?? formControl?.disabled ?? false;
    const readOnly = readOnlyProp ?? formControl?.readOnly ?? false;
    const focused = formControl?.focused ?? false;
    const length = Math.max(1, Math.floor(lengthProp));
    const [localValue, setLocalValue] = useState(defaultValue);
    const value =
      valueProp ??
      (formControl ? (formControl.formattedValue ?? "") : localValue);
    const onValueChange = onChange ?? formControl?.onChange;
    const onFocus = formControl?.onFocus;
    const onBlur = formControl?.onBlur;
    const sanitize = numericOnly ? digitsOnly : lettersAndDigits;

    // Each digit is a bare `Input`: this control connects the whole code to
    // the field, so the digits must not each take its value, focus, label
    // defaults or status adornments.
    const slotFormControl = useMemo<FormControlState | undefined>(
      () =>
        formControl && {
          ...formControl,
          inputRef: undefined,
          onChange: undefined,
          onFocus: undefined,
          onBlur: undefined,
          endAdornment: undefined,
          theme: undefined,
          setLabelDefaults: noop
        },
      [formControl]
    );

    const [activeIndex, setActiveIndex] = useState(0);
    const [hasFocus, setHasFocus] = useState(false);
    const firstInputRef = useRef<HTMLInputElement>(null);
    // The field's ref (masking and form registration) goes on the first digit.
    const firstSlotRef = useComposedRefs<HTMLInputElement>(
      firstInputRef,
      formControl?.inputRef
    );
    const inputSlotsRef = useRef<Array<HTMLInputElement | null>>([]);
    const slotSize = getFormSizeToken(size);
    const fontScale = getFormFontScale(size);
    const middle = Math.floor(length / 2);
    const showMiddle = Boolean(middleLabel) && middle > 0;
    const characters = useMemo(
      () => sanitize(value).slice(0, length).split(""),
      [length, sanitize, value]
    );

    const focusInput = useCallback(
      (index: number) => {
        const nextIndex = Math.max(0, Math.min(index, length - 1));
        setActiveIndex(nextIndex);
        setHasFocus(true);

        const input =
          nextIndex === 0
            ? firstInputRef.current
            : inputSlotsRef.current[nextIndex];
        input?.focus();
      },
      [length]
    );
    const updateValue = useCallback(
      (nextCharacters: string[]) => {
        if (readOnly) return;
        const nextValue = nextCharacters.join("").slice(0, length);
        setLocalValue(nextValue);
        onValueChange?.(nextValue);

        if (nextValue.length === length) {
          onComplete?.(nextValue);
        }
      },
      [length, onComplete, onValueChange, readOnly]
    );
    const applyInput = useCallback(
      (index: number, raw: string) => {
        const input = sanitize(raw);
        if (raw && !input) return;
        const nextCharacters = Array.from(
          { length },
          (_, slotIndex) => characters[slotIndex] ?? ""
        );

        if (!input) {
          nextCharacters[index] = "";
          updateValue(nextCharacters);
          return;
        }

        input
          .slice(0, length - index)
          .split("")
          .forEach((character, offset) => {
            nextCharacters[index + offset] = character;
          });

        updateValue(nextCharacters);
        focusInput(Math.min(index + input.length, length - 1));
      },
      [characters, focusInput, length, sanitize, updateValue]
    );
    const handlePaste = useCallback(
      (index: number, event: ClipboardEvent<HTMLElement>) => {
        event.preventDefault();
        const input = event.clipboardData.getData("text");
        if (input) applyInput(index, input);
      },
      [applyInput]
    );
    useLayoutEffect(() => {
      const inputs = Array.from({ length }, (_, index) =>
        index === 0 ? firstInputRef.current : inputSlotsRef.current[index]
      );
      const handleInput = (event: Event) => {
        const input = event.currentTarget as HTMLInputElement;
        const index = inputs.indexOf(input);

        if (index < 0) {
          return;
        }

        event.stopPropagation();
        const nextValue = input.value;
        // A rejected edit may leave the code state unchanged. Restore the
        // slot before applying the edit so the rendered value stays in sync.
        input.value = characters[index] ?? "";
        applyInput(index, nextValue);
      };

      inputs.forEach(input => input?.addEventListener?.("input", handleInput));

      return () =>
        inputs.forEach(input =>
          input?.removeEventListener?.("input", handleInput)
        );
    }, [applyInput, characters, length, name]);
    const handleKeyDown = useCallback(
      (index: number, event: { key?: string; preventDefault?: () => void }) => {
        if (event.key === "Backspace") {
          event.preventDefault?.();

          const nextCharacters = Array.from(
            { length },
            (_, slotIndex) => characters[slotIndex] ?? ""
          );
          const nextIndex = nextCharacters[index]
            ? index
            : Math.max(0, index - 1);
          nextCharacters[nextIndex] = "";
          updateValue(nextCharacters);
          focusInput(nextIndex);
        } else if (event.key === "ArrowLeft") {
          event.preventDefault?.();
          focusInput(index - 1);
        } else if (event.key === "ArrowRight") {
          event.preventDefault?.();
          focusInput(index + 1);
        }
      },
      [characters, focusInput, length, updateValue]
    );
    const handleBlur = useCallback(
      (event: FocusEvent<HTMLElement>) => {
        if (event.currentTarget.contains(event.relatedTarget)) {
          return;
        }

        setHasFocus(false);
        onBlur?.();
      },
      [onBlur]
    );

    return (
      <OtpInputFrame
        ref={forwardedRef}
        role="group"
        {...props}
        onBlur={handleBlur}>
        {Array.from({ length }, (_, index) => (
          <Fragment key={index}>
            {showMiddle && index === middle ? (
              <Text
                aria-hidden
                color={disabled ? "primary-disabled" : "emphasis"}
                fontFamily="body"
                fontWeight="400"
                fontSize={`${16 * fontScale}px`}
                lineHeight={`${24 * fontScale}px`}
                userSelect="none"
                flexShrink={0}>
                {middleLabel}
              </Text>
            ) : null}
            <FormControlContext
              value={
                slotFormControl?.id && index > 0
                  ? {
                      ...slotFormControl,
                      id: `${slotFormControl.id}-${index}`
                    }
                  : slotFormControl
              }>
              <Input
                name={index === 0 ? name : `${name}-${index}`}
                size={size}
                variant="outlined"
                width={slotSize}
                minWidth={slotSize}
                flex={0}
                focused={(focused || hasFocus) && activeIndex === index}
                disabled={disabled}
                readOnly={readOnly}
                tabIndex={-1}
                onChange={(event: CustomEvent<string>) =>
                  applyInput(index, event.detail)
                }>
                <Input.TextBox>
                  <Input.TextBox.Value
                    ref={
                      index === 0
                        ? firstSlotRef
                        : (element: HTMLInputElement | null) => {
                            inputSlotsRef.current[index] = element;
                          }
                    }
                    aria-label={`${numericOnly ? "Digit" : "Character"} ${index + 1} of ${length}`}
                    autoComplete={index === 0 ? "one-time-code" : "off"}
                    inputMode={numericOnly ? "numeric" : "text"}
                    enterKeyHint={index === length - 1 ? "done" : "next"}
                    maxLength={length}
                    pattern={numericOnly ? "[0-9]*" : "[a-zA-Z0-9]*"}
                    spellCheck={false}
                    type="text"
                    value={characters[index] ?? ""}
                    textAlign="center"
                    paddingHorizontal="zero"
                    nativePaddingInline="0px"
                    tabIndex={0}
                    onKeyDown={(event: {
                      key?: string;
                      preventDefault?: () => void;
                    }) => handleKeyDown(index, event)}
                    onPaste={(event: ClipboardEvent<HTMLElement>) =>
                      handlePaste(index, event)
                    }
                    onFocus={() => {
                      setActiveIndex(index);
                      setHasFocus(true);
                      onFocus?.();
                      const input =
                        index === 0
                          ? firstInputRef.current
                          : inputSlotsRef.current[index];
                      input?.select?.();
                    }}
                  />
                </Input.TextBox>
              </Input>
            </FormControlContext>
          </Fragment>
        ))}
      </OtpInputFrame>
    );
  },
  { displayName: "OtpInput" }
);
