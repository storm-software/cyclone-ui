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
import { RadioGroup, RadioGroupContext } from "@cyclone-ui/radio-group";
import { FieldApi, useFieldActions } from "@cyclone-ui/state/form";
import type { SelectOption } from "@stryke/types/form";
import { styled, withStaticProperties } from "@tamagui/core";
import { Label } from "@tamagui/label";
import { YStack } from "@tamagui/stacks";
import type { Atom } from "jotai";
import { useAtomValue } from "jotai";
import type { PropsWithChildren } from "react";
import { useCallback } from "react";

const RadioGroupFieldGroup = Field.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Field ref={forwardedRef} {...props}>
        {children}
      </Field>
    );
  }
);

const RadioGroupItemValue = styled(Label, {
  name: "RadioGroupItemValue",
  render: "label",

  transition: "200ms",
  cursor: "pointer",
  color: "$foreground",
  fontFamily: "$heading-sm",
  fontSize: "$lg",
  fontWeight: "$normal",
  lineHeight: "$true",
  wordWrap: "break-word",
  verticalAlign: "middle",

  variants: {
    selected: {
      true: {
        fontWeight: "$black"
      }
    },

    disabled: {
      true: {
        color: "$foregroundDisabled",
        backgroundColor: "$backgroundElevatedDisabled",
        userSelect: "none",
        cursor: "not-allowed",

        hoverStyle: {
          color: "$foregroundDisabled"
        },

        focusStyle: {
          color: "$foregroundDisabled"
        },

        pressStyle: {
          color: "$foregroundDisabled"
        }
      }
    }
  } as const,

  defaultVariants: {
    selected: false,
    disabled: false
  }
});

const RadioGroupItemDetails = styled(BodyText, {
  name: "RadioGroupItemDetails",
  context: RadioGroupContext,

  transition: "200ms",
  cursor: "pointer",
  color: "$foregroundBody",
  fontSize: "$md",

  variants: {
    disabled: {
      true: {
        color: "$foregroundDisabled",
        backgroundColor: "transparent",
        userSelect: "none",
        cursor: "not-allowed",

        hoverStyle: {
          color: "$foregroundDisabled"
        },

        focusStyle: {
          color: "$foregroundDisabled"
        },

        pressStyle: {
          color: "$foregroundDisabled"
        }
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const RadioGroupItem = (
  props: PropsWithChildren<{ itemAtom: Atom<SelectOption> }>
) => {
  const item = useAtomValue(props.itemAtom);
  const { value, selected, disabled, name, description } = item;

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
      $group-item-hover={{ backgroundColor: "$backgroundElevatedHover" }}>
      <YStack gap="$md" justifyContent="flex-start" flex={1}>
        <RadioGroupItemValue
          htmlFor={String(value)}
          disabled={disabled}
          selected={selected}
          $group-item-hover={{ color: "$foregroundHover" }}>
          {name}
        </RadioGroupItemValue>
        {description && (
          <RadioGroupItemDetails
            disabled={disabled}
            display="flex"
            $group-item-hover={{ color: "$foregroundHover" }}>
            {description}
          </RadioGroupItemDetails>
        )}
      </YStack>

      {disabled && <Field.ThemeIcon disabled={true} />}
    </RadioGroup.Item>
  );
};

const RadioGroupFieldControl = RadioGroup.styleable((props, forwardedRef) => {
  const { focus, blur, change } = useFieldActions();

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
      name={name}
      disabled={disabled}
      onFocus={focus}
      onBlur={blur}
      onValueChange={change}
      value={formattedValue}
      defaultValue={initialValue}>
      {itemsAtoms.map((itemAtom, i) => {
        return <RadioGroupItem key={i} itemAtom={itemAtom} />;
      })}
    </RadioGroup>
  );
});

export const RadioGroupField = withStaticProperties(RadioGroupFieldGroup, {
  Label: Field.Label,
  Control: RadioGroupFieldControl,
  Details: Field.Details
});
