import { FieldStatus, useFieldActions, useFieldStore } from "@cyclone-ui/form";
import { ThemeableIconWrapper } from "@cyclone-ui/themeable-icon";
import { Checkbox as TamaguiCheckbox } from "@tamagui/checkbox";
import { isWeb } from "@tamagui/constants";
import type { ColorTokens, FontSizeTokens } from "@tamagui/core";
import {
  createStyledContext,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { XGroup } from "@tamagui/group";
import { Check } from "@tamagui/lucide-icons";
import { XStack } from "@tamagui/stacks";
import { useCallback } from "react";

const defaultContextValues = {
  size: "$true",
  color: undefined,
  hideIcons: true
} as const;

export const CheckboxContext = createStyledContext<{
  size: FontSizeTokens;
  color?: ColorTokens | string;
  hideIcons: boolean;
}>(defaultContextValues);

export const defaultCheckboxGroupStyles = {
  size: "$true",
  fontFamily: "$body",
  fontSize: "$4",
  color: "$color",
  backgroundColor: "$background",
  borderRadius: "$radius",
  borderWidth: 1,
  borderColor: "$borderColor",
  outlineWidth: 0,
  outlineColor: "transparent",
  outlineStyle: "none",

  ...(isWeb
    ? {
        tabIndex: 0
      }
    : {
        focusable: true
      }),

  // this fixes a flex bug where it overflows container
  minWidth: 0,

  hoverStyle: {
    borderColor: "$accent10"
  },

  focusStyle: {
    outlineColor: "$accent10",
    outlineWidth: 2,
    outlineOffset: "$1.25",
    outlineStyle: "solid",
    borderColor: "$borderColorFocus"
  }
} as const;

export const CHECKBOX_NAME = "Checkbox";

const CheckboxGroupFrame = styled(XGroup, {
  name: CHECKBOX_NAME,
  justifyContent: "space-between",
  context: CheckboxContext,
  animation: "$slow",

  variants: {
    unstyled: {
      false: defaultCheckboxGroupStyles
    },

    scaleIcon: {
      ":number": {} as any
    },

    applyFocusStyle: {
      ":boolean": (val, { props }) => {
        if (val) {
          return props.focusStyle || defaultCheckboxGroupStyles.focusStyle;
        }

        return {};
      }
    },

    size: {
      "...size": (val, { tokens }) => {
        return {
          borderRadius: tokens.radius[val]
        };
      }
    },

    required: {
      true: {}
    },

    isDisabled: {
      true: {
        color: "$disabled",
        borderColor: "$disabled",
        placeholderColor: "$disabled",
        userSelect: "none",
        cursor: "not-allowed",

        hoverStyle: {
          color: "$disabled",
          borderColor: "$disabled"
        },

        focusStyle: {
          color: "$disabled",
          borderColor: "$disabled",
          outlineStyle: "none",
          outlineColor: "transparent"
        },

        pressStyle: {
          color: "$disabled",
          borderColor: "$disabled",
          outlineStyle: "none",
          outlineColor: "transparent"
        }
      },
      false: {
        cursor: "pointer"
      }
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1" ? true : false,
    required: false,
    isDisabled: false
  }
});

const BaseCheckbox = styled(TamaguiCheckbox, {
  name: CHECKBOX_NAME,

  unstyled: true,

  context: CheckboxContext,
  verticalAlign: "center",
  height: "$1.5",
  width: "$1.5",
  padding: "$0.5",

  // internalAutofillSelected: {
  //   backgroundColor: "transparent !important",
  //   color: "inherit !important"
  // },

  variants: {
    isDisabled: {
      true: {
        cursor: "not-allowed",
        placeholderTextColor: "$disabled",
        color: "$disabled"
      },
      false: {
        placeholderTextColor: "$placeholderColor"
      }
    }
  } as const,

  defaultVariants: {
    isDisabled: false
  }
});

const BaseCheckboxImpl = BaseCheckbox.styleable((props, forwardedRef) => {
  const { size } = CheckboxContext.useStyledContext();
  const { children, ...rest } = props;

  const store = useFieldStore();

  const { focus, blur, change } = useFieldActions<boolean>();
  const handleCheckedChange = useCallback(
    async (checked: boolean) => {
      await change(checked);
      await blur();
    },
    [blur, change]
  );

  return (
    <View flex={1}>
      <BaseCheckbox
        ref={forwardedRef}
        size={size}
        {...rest}
        id={store.get.name()}
        onFocus={focus}
        onBlur={blur}
        onCheckedChange={handleCheckedChange}
        checked={Boolean(store.get.value())}
        defaultChecked={Boolean(store.get.initialValue())}
        isDisabled={store.get.isDisabled()}>
        <TamaguiCheckbox.Indicator
          animation="slow"
          enterStyle={{
            scale: 0.8,
            y: 10,
            opacity: 0
          }}
          exitStyle={{
            scale: 0.8,
            y: -10,
            opacity: 0
          }}
          justifyContent="center"
          alignItems="center">
          <Check color="$fg" height="$1" width="$1" />
        </TamaguiCheckbox.Indicator>
      </BaseCheckbox>
    </View>
  );
});

const CheckboxGroupImpl = BaseCheckboxImpl.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  const store = useFieldStore();
  const isDisabled = store.get.isDisabled();

  return (
    <XStack gap="$0.5" alignContent="center" verticalAlign="center">
      <CheckboxGroupFrame
        applyFocusStyle={store.get.isFocused()}
        isDisabled={isDisabled}>
        <BaseCheckboxImpl
          ref={forwardedRef}
          {...rest}
          paddingHorizontal={
            store.get.theme().toLowerCase().includes(FieldStatus.BASE)
              ? "$3"
              : 0
          }>
          {children}
        </BaseCheckboxImpl>
      </CheckboxGroupFrame>
    </XStack>
  );
});

export const Checkbox = withStaticProperties(CheckboxGroupImpl, {
  Icon: ThemeableIconWrapper
});
