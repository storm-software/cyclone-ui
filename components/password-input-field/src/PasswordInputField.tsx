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
import { InputField } from "@cyclone-ui/input-field";
import {
  FieldApi,
  ValidationCause,
  type Validator
} from "@cyclone-ui/state/form";
import { styled, Text, Theme, View, withStaticProperties } from "@tamagui/core";
import { Eye, EyeOff } from "@tamagui/lucide-icons-2";
import { YStack } from "@tamagui/stacks";
import type { KeyboardEvent } from "react";
import { createContext, use, useCallback, useMemo, useState } from "react";
import {
  getMissingPasswordCriteria,
  getPasswordStrength,
  isStrongPassword
} from "./password-strength";

interface PasswordInputFieldContextValue {
  passwordVisible: boolean;
  togglePasswordVisibility: () => void;
}

const PasswordInputFieldContext = createContext<PasswordInputFieldContextValue>(
  {
    passwordVisible: false,
    togglePasswordVisibility: () => undefined
  }
);

const CAPS_LOCK_MESSAGE = {
  code: "password-input-field.caps-lock",
  message: "Caps lock on",
  type: "info"
} as const;

const passwordStrengthValidator: Validator<string> = value =>
  !value || isStrongPassword(value)
    ? []
    : getMissingPasswordCriteria(value).map(({ code, message }) => ({
        code: `password-input-field.${code}`,
        message,
        type: "danger"
      }));

const strengthLabels = [
  "Password strength",
  "Very weak",
  "Weak",
  "Good",
  "Strong"
] as const;

const PasswordStrengthFrame = styled(View, {
  name: "PasswordInputFieldStrength",
  gap: "$xl"
});

const PasswordStrengthSegments = styled(View, {
  flexDirection: "row",
  gap: "$xl"
});

const PasswordStrengthSegment = styled(View, {
  height: "$sm",
  flex: 1,
  borderRadius: 100_000,
  backgroundColor: "$backgroundElevated"
});

const PasswordStrengthLabel = styled(Text, {
  color: "$foregroundSecondary",
  fontFamily: "$body",
  textAlign: "right",
  marginRight: "$md"
});

const PasswordInputFieldStrength = PasswordStrengthFrame.styleable(
  (props, forwardedRef) => {
    const field = FieldApi.use();
    const value = field.formattedValue.get();
    const strength = getPasswordStrength(value);
    const activeTheme =
      strength === 1 ? "danger" : strength === 2 ? "warning" : "success";

    return (
      <PasswordStrengthFrame
        ref={forwardedRef}
        {...props}
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
                  backgroundColor={active ? "$border" : "$backgroundElevated"}
                />
              </Theme>
            );
          })}
        </PasswordStrengthSegments>
        <PasswordStrengthLabel>
          {strengthLabels[strength]}
        </PasswordStrengthLabel>
      </PasswordStrengthFrame>
    );
  }
);

const PasswordInputFieldGroup = Field.styleable(
  ({ children, theme, validate, ...props }, forwardedRef) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

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
    const validation = useMemo(
      () => ({
        ...validate,
        onChange: [...(validate?.onChange ?? []), passwordStrengthValidator]
      }),
      [validate]
    );

    return (
      <PasswordInputFieldContext value={context}>
        <Field
          ref={forwardedRef}
          {...props}
          theme={theme}
          validate={validation}
          width="100%">
          <YStack gap="$3xl">
            <YStack gap="$lg">{children}</YStack>
            <PasswordInputFieldStrength />
          </YStack>
        </Field>
      </PasswordInputFieldContext>
    );
  }
);

const PasswordInputFieldControlTextBoxValue =
  InputField.Control.TextBox.Value.styleable((props, forwardedRef) => {
    const field = FieldApi.use();
    const setValidationResults = field.validationResults.set();
    const { passwordVisible } = use(PasswordInputFieldContext);
    const setCapsLock = useCallback(
      (capsLock: boolean) => {
        setValidationResults(previousResults => {
          const previousMessages =
            previousResults?.[ValidationCause.SERVER] ?? [];
          const hasCapsLockMessage = previousMessages.some(
            message => message.code === CAPS_LOCK_MESSAGE.code
          );

          if (capsLock === hasCapsLockMessage) {
            return previousResults;
          }

          return {
            ...previousResults,
            [ValidationCause.SERVER]: capsLock
              ? [...previousMessages, CAPS_LOCK_MESSAGE]
              : previousMessages.filter(
                  message => message.code !== CAPS_LOCK_MESSAGE.code
                )
          };
        });
      },
      [setValidationResults]
    );
    const handleKeyEvent = useCallback(
      (event: KeyboardEvent<HTMLInputElement>) => {
        setCapsLock(event.getModifierState?.("CapsLock") ?? false);
      },
      [setCapsLock]
    );
    const handleKeyDown = useCallback(
      (event: KeyboardEvent<HTMLInputElement>) => {
        handleKeyEvent(event);
        props.onKeyDown?.(event as any);
      },
      [handleKeyEvent, props]
    );
    const handleKeyUp = useCallback(
      (event: KeyboardEvent<HTMLInputElement>) => {
        handleKeyEvent(event);
        props.onKeyUp?.(event as any);
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
      <InputField.Control.TextBox.Value
        ref={forwardedRef}
        {...props}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        type={passwordVisible ? "text" : "password"}
      />
    );
  });

const PasswordInputFieldControlTrigger = Field.Icon.styleable(
  ({ children, onPress, ...props }, forwardedRef) => {
    const field = FieldApi.use();
    const disabled = field.disabled.get();

    const { passwordVisible, togglePasswordVisibility } = use(
      PasswordInputFieldContext
    );
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
            <EyeOff aria-hidden={true} />
          ) : (
            <Eye aria-hidden={true} />
          ))}
      </Field.Icon>
    );
  }
);

export const PasswordInputField = withStaticProperties(
  PasswordInputFieldGroup,
  {
    Label: InputField.Label,
    Link: InputField.Link,
    Control: withStaticProperties(InputField.Control, {
      TextBox: withStaticProperties(InputField.Control.TextBox, {
        Value: PasswordInputFieldControlTextBoxValue
      }),
      Trigger: withStaticProperties(PasswordInputFieldControlTrigger, {
        Icon: Field.Icon,
        Text: InputField.Control.Trigger.Text
      })
    }),
    Details: InputField.Details,
    Icon: InputField.Icon
  }
);
