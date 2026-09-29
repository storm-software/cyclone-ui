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
import { Field, useFieldHasValidationMessage } from "@cyclone-ui/field";
import { HeadingSmallText } from "@cyclone-ui/heading-text";
import {
  formSizeVariants,
  getFormFontScale,
  getFormFontSize,
  type FormControlSize
} from "@cyclone-ui/helpers";
import { RadioGroup, RadioGroupContext } from "@cyclone-ui/radio-group";
import { FieldApi, useFieldActions } from "@cyclone-ui/state/form";
import type { SelectOption } from "@stryke/types/form";
import { createStyledHOC, styled, withStaticProperties } from "@tamagui/core";
import { Label } from "@tamagui/label";
import { YStack } from "@tamagui/stacks";
import type { Atom } from "jotai";
import { useAtomValue } from "jotai";
import type { FocusEvent } from "react";
import { useCallback } from "react";

const RadioGroupFieldGroup = createStyledHOC(
  Field,
  ({ children, ...props }, forwardedRef) => {
    return (
      <Field ref={forwardedRef} {...props}>
        {children}
      </Field>
    );
  }
);

const RadioGroupItemValue = styled(Label, {
  displayName: "RadioGroupItemValue",
  context: RadioGroupContext,
  render: "label",
  transition: "200ms",
  cursor: "pointer",
  color: "inkEmphasis",
  fontWeight: "normal",
  // v2 `$true`: every configured font defines a literal `true` line height
  lineHeight: "true",
  wordWrap: "break-word",
  verticalAlign: "middle",
  variants: {
    // `styled.dynamic` re-brands the helper's carrier with this package's
    // `@tamagui/web` symbol type (runtime no-op; helpers resolves another copy).
    size: styled.dynamic<FormControlSize>(
      formSizeVariants(size => ({ fontSize: 18 * getFormFontScale(size) }))
    ),
    selected: {
      true: {
        fontWeight: 900
      }
    },

    disabled: {
      true: {
        color:
          "accentDisabled hover:accentDisabled press:accentDisabled focus:accentDisabled",
        backgroundColor: "surfaceElevatedDisabled",
        userSelect: "none",
        cursor: "not-allowed"
      }
    }
  } as const,
  defaultVariants: {
    selected: false,
    disabled: false
  }
});

const RadioGroupItemDetails = styled(BodyText, {
  displayName: "RadioGroupItemDetails",
  context: RadioGroupContext,
  transition: "200ms",
  cursor: "pointer",
  color: "inkBody",
  fontSize: "md",
  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((size, env) => getFormFontSize(size, env, "md"))
    ),
    disabled: {
      true: {
        color:
          "accentDisabled hover:accentDisabled press:accentDisabled focus:accentDisabled",
        backgroundColor: "transparent",
        userSelect: "none",
        cursor: "not-allowed"
      }
    }
  } as const,
  defaultVariants: {
    disabled: false
  }
});

const RadioGroupItem = (props: { itemAtom: Atom<SelectOption> }) => {
  const item = useAtomValue(props.itemAtom);
  const { value, selected, disabled, name, description } = item;
  const hasValidationMessage = useFieldHasValidationMessage();

  const { change } = useFieldActions();
  const handlePress = useCallback(() => {
    if (!disabled) {
      change(value);
    }
  }, [disabled, value, change]);

  return (
    <RadioGroup.Item
      {...item}
      group={"item" as any}
      onPress={handlePress}
      cursor="pointer"
      backgroundColor={
        selected
          ? "surfaceElevatedActive hover:surfaceElevatedHover"
          : "surfaceElevated hover:surfaceElevatedHover"
      }
      borderColor={
        selected ? "accentHover" : hasValidationMessage ? "accent" : "hairline"
      }
      borderWidth={1}
      borderRadius="control">
      <YStack gap="md" justifyContent="flex-start" flex={1}>
        <RadioGroupItemValue
          htmlFor={String(value)}
          disabled={disabled}
          selected={selected}
          color="group-hover/item:inkEmphasis">
          <HeadingSmallText>{name}</HeadingSmallText>
        </RadioGroupItemValue>
        {description && (
          <RadioGroupItemDetails
            disabled={disabled}
            display="flex"
            color="group-hover/item:inkEmphasis">
            {description}
          </RadioGroupItemDetails>
        )}
      </YStack>

      {disabled && <Field.ThemeIcon disabled={true} />}
    </RadioGroup.Item>
  );
};

const RadioGroupFieldControl = createStyledHOC(
  RadioGroup,
  (props, forwardedRef) => {
    const { focus, blur, change } = useFieldActions();
    const handleBlur = useCallback(
      (event: FocusEvent<HTMLElement>) => {
        if (event.currentTarget.contains(event.relatedTarget)) {
          return;
        }

        void blur();
      },
      [blur]
    );

    const field = FieldApi.use();
    const name = field.name.get();
    const disabled = field.disabled.get();
    const formattedValue = field.formattedValue.get();
    const initialValue = field.initialValue.get();
    const itemsAtoms = field.itemsAtoms.get();

    return (
      <RadioGroup
        ref={forwardedRef}
        {...props}
        size={field.size.get()}
        name={name}
        disabled={disabled}
        onFocus={focus}
        onBlur={handleBlur}
        onValueChange={change}
        value={formattedValue}
        defaultValue={initialValue}>
        {itemsAtoms.map((itemAtom, i) => {
          // eslint-disable-next-line react/no-array-index-key
          return <RadioGroupItem key={i} itemAtom={itemAtom} />;
        })}
      </RadioGroup>
    );
  }
);

export const RadioGroupField = withStaticProperties(RadioGroupFieldGroup, {
  Label: Field.Label,
  Link: Field.Link,
  Control: RadioGroupFieldControl,
  Details: Field.Details
});
