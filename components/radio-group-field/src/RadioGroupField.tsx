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
import { useFieldActions, useFieldStore } from "@cyclone-ui/form-state";
import {
  RADIO_GROUP_NAME,
  RadioGroup,
  RadioGroupContext
} from "@cyclone-ui/radio-group";
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

const RadioGroupItemLabel = styled(Label, {
  name: RADIO_GROUP_NAME,

  tag: "label",
  cursor: "pointer",
  animation: "100ms",
  color: "$base10",
  fontFamily: "$label",
  fontSize: "$6",
  fontWeight: "$4",
  lineHeight: "$true",
  wordWrap: "break-word",
  verticalAlign: "middle",

  variants: {
    selected: {
      true: {
        color: "$fg",
        fontWeight: "$6"
      }
    },

    disabled: {
      true: {
        color: "$disabled",
        placeholderColor: "$disabled",
        backgroundColor: "transparent",
        userSelect: "none",
        cursor: "not-allowed",

        hoverStyle: {
          color: "$disabled"
        },

        focusStyle: {
          color: "$disabled"
        },

        pressStyle: {
          color: "$disabled"
        }
      },
      false: {
        cursor: "pointer"
      }
    }
  } as const,

  defaultVariants: {
    selected: false,
    disabled: false
  }
});

const RadioGroupItemDescription = styled(BodyText, {
  name: RADIO_GROUP_NAME,
  context: RadioGroupContext,

  animation: "slow",
  color: "$color",
  fontSize: "$5",

  variants: {
    disabled: {
      true: {
        color: "$disabled",
        backgroundColor: "transparent",
        userSelect: "none",
        cursor: "not-allowed",

        hoverStyle: {
          color: "$disabled"
        },

        focusStyle: {
          color: "$disabled"
        },

        pressStyle: {
          color: "$disabled"
        }
      },
      false: {
        cursor: "pointer"
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
        <RadioGroupItemLabel
          htmlFor={String(value)}
          disabled={disabled}
          selected={selected}
          $group-hover={{
            color: disabled ? "$disabled" : selected ? "$fg" : "$base10"
          }}>
          {name}
        </RadioGroupItemLabel>
        {description && (
          <RadioGroupItemDescription disabled={disabled} display="flex">
            {description}
          </RadioGroupItemDescription>
        )}
      </YStack>

      {disabled && <Field.ThemeIcon disabled={true} />}
    </RadioGroup.Item>
  );
};

const RadioGroupFieldControl = RadioGroup.styleable((props, forwardedRef) => {
  const { focus, blur, change } = useFieldActions();

  const store = useFieldStore<string>();
  const name = store.get.name();
  const disabled = store.get.disabled();
  const formattedValue = store.get.formattedValue();
  const initialValue = store.get.initialValue();
  const itemsAtoms = store.get.itemsAtoms();

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
