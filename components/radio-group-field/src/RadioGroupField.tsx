/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { BodyText } from "@cyclone-ui/body-text";
import { Field } from "@cyclone-ui/field";
import { FieldApi, useFieldActions } from "@cyclone-ui/form-state";
import { RadioGroup, RadioGroupContext } from "@cyclone-ui/radio-group";
import { SelectOption } from "@storm-stack/types/index";
import { styled, withStaticProperties } from "@tamagui/core";
import { Label } from "@tamagui/label";
import { YStack } from "@tamagui/stacks";
import { Atom, useAtomValue } from "jotai";
import { PropsWithChildren, useCallback } from "react";

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
  tag: "label",

  animation: "normal",
  cursor: "pointer",
  color: "$color",
  fontFamily: "$label",
  fontSize: "$6",
  fontWeight: "$4",
  lineHeight: "$true",
  wordWrap: "break-word",
  verticalAlign: "middle",

  variants: {
    selected: {
      true: {
        fontWeight: "$6"
      }
    },

    disabled: {
      true: {
        color: "$colorDisabled",
        backgroundColor: "transparent",
        userSelect: "none",
        cursor: "not-allowed",

        hoverStyle: {
          color: "$colorDisabled"
        },

        focusStyle: {
          color: "$colorDisabled"
        },

        pressStyle: {
          color: "$colorDisabled"
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

  animation: "normal",
  cursor: "pointer",
  color: "$color",
  fontSize: "$5",

  variants: {
    disabled: {
      true: {
        color: "$colorDisabled",
        backgroundColor: "transparent",
        userSelect: "none",
        cursor: "not-allowed",

        hoverStyle: {
          color: "$colorDisabled"
        },

        focusStyle: {
          color: "$colorDisabled"
        },

        pressStyle: {
          color: "$colorDisabled"
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
    <RadioGroup.Item {...item} onPress={handlePress}>
      <YStack gap="$1" justifyContent="flex-start" flex={1}>
        <RadioGroupItemValue
          htmlFor={String(value)}
          disabled={disabled}
          selected={selected}>
          {name}
        </RadioGroupItemValue>
        {description && (
          <RadioGroupItemDetails disabled={disabled} display="flex">
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
