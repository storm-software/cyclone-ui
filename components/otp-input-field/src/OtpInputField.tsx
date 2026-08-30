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

import { Field } from "@cyclone-ui/field";
import { Input } from "@cyclone-ui/input";
import { FieldApi, useFieldActions } from "@cyclone-ui/state/form";
import { styled, View, withStaticProperties } from "@tamagui/core";
import type { ClipboardEvent, FocusEvent } from "react";
import {
  createContext,
  use,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";

export interface OtpInputFieldProps {
  /**
   * The number of digits in the one-time password.
   *
   * @defaultValue 4
   */
  length?: number;

  /** Called after the user fills every digit. */
  onComplete?: (value: string) => void;
}

interface OtpInputFieldContextValue extends Required<
  Pick<OtpInputFieldProps, "length">
> {
  onComplete?: OtpInputFieldProps["onComplete"];
}

const OtpInputFieldContext = createContext<OtpInputFieldContextValue>({
  length: 4
});

const OtpInputFieldControlFrame = styled(View, {
  name: "OtpInputFieldControl",
  flexDirection: "row",
  gap: "$2xl",
  alignItems: "center"
});

const OtpInputFieldGroup = Field.styleable<OtpInputFieldProps>(
  ({ children, length = 4, onComplete, ...props }, forwardedRef) => {
    const context = useMemo(
      () => ({
        length: Math.max(1, Math.floor(length)),
        onComplete
      }),
      [length, onComplete]
    );

    return (
      <OtpInputFieldContext.Provider value={context}>
        <Field ref={forwardedRef} {...props}>
          {children}
        </Field>
      </OtpInputFieldContext.Provider>
    );
  }
);

const OtpInputFieldControl = OtpInputFieldControlFrame.styleable(
  ({ children: _children, ...props }, forwardedRef) => {
    const { length, onComplete } = use(OtpInputFieldContext);
    const field = FieldApi.use();
    const name = field.name.get();
    const value = field.formattedValue.get();
    const disabled = field.disabled.get();
    const focused = field.focused.get();
    const size = field.size.get();
    const { blur, change, focus, mount } = useFieldActions<string>();

    const [activeIndex, setActiveIndex] = useState(0);
    const [hasFocus, setHasFocus] = useState(false);
    const firstInputRef = useRef<HTMLInputElement>(null);
    const inputSlotsRef = useRef<Array<HTMLInputElement | null>>([]);
    const slotSize =
      size === "$true" || String(size) === "true" ? "$10xl" : size;
    const digits = value.replace(/\D/g, "").slice(0, length).split("");

    useLayoutEffect(() => {
      mount(firstInputRef);
    }, [mount]);

    const focusInput = useCallback(
      (index: number) => {
        const nextIndex = Math.max(0, Math.min(index, length - 1));
        const inputName = nextIndex === 0 ? name : `${name}-${nextIndex}`;

        setActiveIndex(nextIndex);
        setHasFocus(true);

        const input =
          nextIndex === 0
            ? firstInputRef.current
            : inputSlotsRef.current[nextIndex];
        const webInput =
          firstInputRef.current?.ownerDocument.getElementById(inputName);

        if (webInput) {
          webInput.focus();
          return;
        }

        input?.focus();
      },
      [length, name]
    );
    const updateValue = useCallback(
      (nextDigits: string[]) => {
        const nextValue = nextDigits.join("").slice(0, length);
        void change(nextValue, true);

        if (nextValue.length === length) {
          onComplete?.(nextValue);
        }
      },
      [change, length, onComplete]
    );
    const applyInput = useCallback(
      (index: number, input: string) => {
        const nextDigits = Array.from(
          { length },
          (_, slotIndex) => digits[slotIndex] ?? ""
        );

        if (!input) {
          nextDigits[index] = "";
          updateValue(nextDigits);
          return;
        }

        input
          .slice(0, length - index)
          .split("")
          .forEach((digit, offset) => {
            nextDigits[index + offset] = digit;
          });

        updateValue(nextDigits);
        focusInput(Math.min(index + input.length, length - 1));
      },
      [digits, focusInput, length, updateValue]
    );
    const handleChange = useCallback(
      (index: number, event: CustomEvent<string>) => {
        applyInput(index, event.detail.replace(/\D/g, ""));
      },
      [applyInput]
    );
    const handlePaste = useCallback(
      (index: number, event: ClipboardEvent<HTMLInputElement>) => {
        const input = event.clipboardData.getData("text").replace(/\D/g, "");

        if (!input) {
          return;
        }

        event.preventDefault();
        applyInput(index, input);
      },
      [applyInput]
    );
    useLayoutEffect(() => {
      const ownerDocument = firstInputRef.current?.ownerDocument;

      if (!ownerDocument) {
        return;
      }

      const inputs = Array.from({ length }, (_, index) => {
        const inputName = index === 0 ? name : `${name}-${index}`;

        return ownerDocument.getElementById(
          inputName
        ) as HTMLInputElement | null;
      });
      const handleInput = (event: Event) => {
        const input = event.currentTarget as HTMLInputElement;
        const index = inputs.indexOf(input);

        if (index < 0) {
          return;
        }

        event.stopPropagation();
        applyInput(index, input.value);
      };

      inputs.forEach(input => input?.addEventListener("input", handleInput));

      return () =>
        inputs.forEach(input =>
          input?.removeEventListener("input", handleInput)
        );
    }, [applyInput, length, name]);
    const handleKeyDown = useCallback(
      (index: number, event: { key: string; preventDefault: () => void }) => {
        if (event.key === "Backspace") {
          event.preventDefault();

          const nextDigits = Array.from(
            { length },
            (_, slotIndex) => digits[slotIndex] ?? ""
          );
          const nextIndex = nextDigits[index] ? index : Math.max(0, index - 1);
          nextDigits[nextIndex] = "";
          updateValue(nextDigits);
          focusInput(nextIndex);
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          focusInput(index - 1);
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          focusInput(index + 1);
        }
      },
      [digits, focusInput, length, updateValue]
    );
    const handleBlur = useCallback(
      (event: FocusEvent<HTMLElement>) => {
        if (event.currentTarget.contains(event.relatedTarget)) {
          return;
        }

        setHasFocus(false);
        void blur();
      },
      [blur]
    );

    return (
      <OtpInputFieldControlFrame
        ref={forwardedRef}
        role="group"
        {...props}
        onBlur={handleBlur}>
        {Array.from({ length }, (_, index) => (
          <Input
            key={index}
            name={index === 0 ? name : `${name}-${index}`}
            size={size}
            width={slotSize}
            minWidth={slotSize}
            flex={0}
            focused={(focused || hasFocus) && activeIndex === index}
            disabled={disabled}
            tabIndex={-1}
            onChange={event => handleChange(index, event)}>
            <Input.TextBox>
              <Input.TextBox.Value
                ref={
                  index === 0
                    ? firstInputRef
                    : element => {
                        inputSlotsRef.current[index] = element;
                      }
                }
                aria-label={`Digit ${index + 1} of ${length}`}
                autoComplete={index === 0 ? "one-time-code" : "off"}
                inputMode="numeric"
                enterKeyHint={index === length - 1 ? "done" : "next"}
                maxLength={length}
                pattern="[0-9]*"
                type="text"
                value={digits[index] ?? ""}
                textAlign="center"
                paddingHorizontal="$none"
                tabIndex={0}
                onKeyDown={event =>
                  handleKeyDown(
                    index,
                    event as unknown as {
                      key: string;
                      preventDefault: () => void;
                    }
                  )
                }
                onPaste={event => handlePaste(index, event)}
                onFocus={event => {
                  setActiveIndex(index);
                  setHasFocus(true);
                  void focus();
                  (event.currentTarget as HTMLInputElement).select?.();
                }}
              />
            </Input.TextBox>
          </Input>
        ))}
      </OtpInputFieldControlFrame>
    );
  },
  { staticConfig: { componentName: "OtpInputFieldControl" } }
);

export const OtpInputField = withStaticProperties(OtpInputFieldGroup, {
  Label: Field.Label,
  Control: OtpInputFieldControl,
  Details: Field.Details,
  Icon: Field.Icon
});
