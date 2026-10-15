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

import { BodyText } from "@cyclone-ui/body-text";
import { Field } from "@cyclone-ui/field";
import {
  getSpaced,
  useFieldOptions,
  useFormControl
} from "@cyclone-ui/helpers";
import { Eye, EyeSlash } from "@cyclone-ui/icons";
import type { InputChangeEventHandler } from "@cyclone-ui/input";
import { Input, InputContext } from "@cyclone-ui/input";
import type { GetProps } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  Theme,
  View,
  withStaticProperties
} from "@tamagui/core";
import { YStack } from "@tamagui/stacks";
import type { KeyboardEvent } from "react";
import { createContext, use, useCallback, useMemo, useState } from "react";
import {
  getMissingPasswordCriteria,
  getPasswordStrength,
  isStrongPassword
} from "./password-strength";

interface PasswordInputContextValue {
  passwordVisible: boolean;
  togglePasswordVisibility: () => void;
}

const PasswordInputContext = createContext<PasswordInputContextValue>({
  passwordVisible: false,
  togglePasswordVisibility: () => undefined
});

const CAPS_LOCK_MESSAGE = {
  code: "password-input.caps-lock",
  message: "Caps lock on",
  type: "info"
} as const;

/**
 * Validates that a password meets every strength criterion, returning a
 * message for each one it misses.
 */
export const passwordStrengthValidator = (value: string) =>
  !value || isStrongPassword(value)
    ? []
    : getMissingPasswordCriteria(value).map(({ code, message }) => ({
        code: `password-input.${code}`,
        message,
        type: "danger" as const
      }));

// ponytail: only used when the `Field` sets no `validate` of its own; a
// field's own `validate` replaces it (the old field appended it to
// `validate.onChange`). Merging needs `Field` to combine control-supplied
// validators with its own.
const PASSWORD_FIELD_OPTIONS = {
  defaults: { validate: { onChange: [passwordStrengthValidator] } }
};

const NO_FIELD_OPTIONS = {};

export interface PasswordInputExtraProps {
  /**
   * Show the password strength meter below the input.
   *
   * @defaultValue false
   */
  showStrength?: boolean;

  /**
   * Inside a `Field`, validate the password's strength (listing each missing criterion) when the field sets no `validate` of its own.
   *
   * @defaultValue false
   */
  validateStrength?: boolean;
}

export type PasswordInputProps = GetProps<typeof Input> &
  PasswordInputExtraProps;

const strengthLabels = [
  "Password strength",
  "Very weak",
  "Weak",
  "Good",
  "Strong"
] as const;

const PasswordStrengthFrame = styled(View, {
  displayName: "PasswordInputStrength",
  gap: "xl"
});

const PasswordStrengthSegments = styled(View, {
  flexDirection: "row",
  gap: "xl"
});

const PasswordStrengthSegment = styled(View, {
  height: "sm",
  flex: 1,
  borderRadius: 100_000,
  backgroundColor: "surface"
});

const PasswordStrengthLabel = styled(BodyText, {
  color: "ink",
  textAlign: "right",
  marginRight: "md"
});

const PasswordInputStrength = ({ value }: { value: string }) => {
  const strength = getPasswordStrength(value);
  const activeTheme =
    strength === 1 ? "danger" : strength === 2 ? "warning" : "success";

  return (
    <PasswordStrengthFrame
      role="meter"
      aria-label="Password strength"
      aria-valuemin={0}
      aria-valuemax={4}
      aria-valuenow={strength}
      aria-valuetext={strengthLabels[strength]}>
      <PasswordStrengthSegments aria-hidden={true}>
        {Array.from({ length: 4 }, (_, index) => {
          const active = index < strength;

          return (
            <Theme key={index} name={active ? activeTheme : "base"}>
              <PasswordStrengthSegment
                backgroundColor={`${active ? "primary" : "surface"}`}
              />
            </Theme>
          );
        })}
      </PasswordStrengthSegments>
      <PasswordStrengthLabel>{strengthLabels[strength]}</PasswordStrengthLabel>
    </PasswordStrengthFrame>
  );
};

const PasswordInputImpl = createStyledHOC(
  Input,
  (
    {
      children,
      onInput,
      showStrength = false,
      validateStrength = false,
      ...props
    }: PasswordInputProps,
    forwardedRef
  ) => {
    const formControl = useFormControl();
    useFieldOptions(
      validateStrength ? PASSWORD_FIELD_OPTIONS : NO_FIELD_OPTIONS
    );
    const [passwordVisible, setPasswordVisible] = useState(false);
    // Outside a `Field`, the strength meter follows what the user types.
    const [typedValue, setTypedValue] = useState("");

    const togglePasswordVisibility = useCallback(() => {
      setPasswordVisible(visible => !visible);
    }, []);
    const context = useMemo(
      () => ({
        passwordVisible,
        togglePasswordVisibility
      }),
      [passwordVisible, togglePasswordVisibility]
    );
    const handleInput = useCallback<InputChangeEventHandler>(
      event => {
        setTypedValue(event.detail);
        onInput?.(event);
      },
      [onInput]
    );

    return (
      <PasswordInputContext value={context}>
        <YStack
          gap="3xl"
          // `Field` spaces its children by `xl`; keep the `lg` gap between an
          // above label and the control that `PasswordInputField` had.
          marginTop={
            formControl?.labelVariant === "above"
              ? getSpaced("lg") - getSpaced("xl")
              : undefined
          }>
          <Input ref={forwardedRef} {...props} onInput={handleInput}>
            {children}
          </Input>
          {showStrength && (
            <PasswordInputStrength
              value={
                formControl ? (formControl.formattedValue ?? "") : typedValue
              }
            />
          )}
        </YStack>
      </PasswordInputContext>
    );
  },
  { displayName: "PasswordInput" }
);

const PasswordInputTextBoxValue = createStyledHOC(
  Input.TextBox.Value,
  (props, forwardedRef) => {
    const setMessage = useFormControl()?.setMessage;
    const { passwordVisible } = use(PasswordInputContext);
    const setCapsLock = useCallback(
      (capsLock: boolean) => {
        setMessage?.(
          CAPS_LOCK_MESSAGE.code,
          capsLock ? CAPS_LOCK_MESSAGE : undefined
        );
      },
      [setMessage]
    );
    const handleKeyEvent = useCallback(
      (event: KeyboardEvent<HTMLInputElement>) => {
        setCapsLock(event.getModifierState?.("CapsLock") ?? false);
      },
      [setCapsLock]
    );
    // Tamagui v3 types `onKeyDown`/`onKeyUp` as an intersection of the web
    // and native handlers; these handlers read the web keyboard event.
    const handleKeyDown = useCallback(
      (event: any) => {
        handleKeyEvent(event);
        props.onKeyDown?.(event);
      },
      [handleKeyEvent, props]
    );
    const handleKeyUp = useCallback(
      (event: any) => {
        handleKeyEvent(event);
        props.onKeyUp?.(event);
      },
      [handleKeyEvent, props]
    );
    const handleBlur = useCallback(
      (event: any) => {
        setCapsLock(false);
        props.onBlur?.(event);
      },
      [props, setCapsLock]
    );

    return (
      <Input.TextBox.Value
        ref={forwardedRef}
        {...props}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        type={passwordVisible ? "text" : "password"}
      />
    );
  },
  { displayName: "PasswordInputTextBoxValue" }
);

const PasswordInputTrigger = createStyledHOC(
  Field.Icon,
  ({ children, onPress, ...props }, forwardedRef) => {
    const { disabled } = InputContext.useStyledContext();
    const { passwordVisible, togglePasswordVisibility } =
      use(PasswordInputContext);
    const label = passwordVisible ? "Hide" : "Show";
    const handlePress = useCallback(
      (event: any) => {
        onPress?.(event);
        if (!disabled) {
          togglePasswordVisibility();
        }
      },
      [disabled, onPress, togglePasswordVisibility]
    );

    return (
      <Field.Icon
        ref={forwardedRef}
        {...props}
        position="end"
        aria-label={`${label} password`}
        accessibilityLabel={`${label} password`}
        disabled={disabled}
        onPress={handlePress}>
        {children ??
          (passwordVisible ? (
            <EyeSlash aria-hidden={true} />
          ) : (
            <Eye aria-hidden={true} />
          ))}
      </Field.Icon>
    );
  },
  { displayName: "PasswordInputTrigger" }
);

/**
 * A password text input with a show/hide toggle, a strength meter, and a caps
 * lock warning. Wrap it in a `Field` to connect it to a form, which also
 * validates the password's strength. Turn the meter and the validation off
 * with `showStrength={false}` and `validateStrength={false}`.
 */
export const PasswordInput = withStaticProperties(PasswordInputImpl, {
  TextBox: withStaticProperties(Input.TextBox, {
    Value: PasswordInputTextBoxValue
  }),
  Trigger: withStaticProperties(PasswordInputTrigger, {
    Icon: Field.Icon,
    Text: Input.Trigger.Text
  })
});
