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

import { Button } from "@cyclone-ui/button";
import { ColorThemeName } from "@cyclone-ui/colors";
import { getRadius, getSized } from "@cyclone-ui/helpers";
import { isWeb } from "@tamagui/constants";
import type { GetProps, SizeTokens, VariantSpreadExtras } from "@tamagui/core";
import {
  styled,
  useThemeName,
  View,
  withStaticProperties
} from "@tamagui/core";
import { XGroup } from "@tamagui/group";
import { ChevronDown } from "@tamagui/lucide-icons";
import { Select as TamaguiSelect } from "@tamagui/select";
import { Separator } from "@tamagui/separator";
import { useCallback, useMemo } from "react";
import { SelectItems } from "./SelectItems";
import { SelectTextBox } from "./SelectTextBox";
import { SelectContextProps } from "./types";
import { getSelectSize, SelectContext } from "./utilities";

const SelectGroup = styled(XGroup, {
  name: "Select",
  context: SelectContext,

  animation: "normal",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  backgroundColor: "transparent",
  borderWidth: 1,
  borderColor: "$borderColor",
  outlineStyle: "none",
  gap: "$0",

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

  focusVisibleStyle: {
    outlineColor: "$accent10",
    outlineWidth: 3,
    outlineOffset: "$1.25",
    outlineStyle: "solid",
    borderColor: "$borderColorFocus"
  },

  variants: {
    focused: {
      true: {
        outlineColor: "$accent10",
        outlineWidth: 3,
        outlineOffset: "$1.25",
        outlineStyle: "solid",
        borderColor: "$borderColorFocus"
      }
    },

    size: {
      "...size": (
        val: SizeTokens | number,
        extras: VariantSpreadExtras<any>
      ) => {
        const result = getSelectSize(val, extras);

        return {
          ...result,
          paddingHorizontal: 0
        };
      }
    },

    disabled: {
      true: {
        borderColor: "$borderColorDisabled",
        userSelect: "none",
        cursor: "not-allowed",

        hoverStyle: {
          borderColor: "$borderColorDisabled"
        },

        focusStyle: {
          borderColor: "$borderColorDisabled",
          outlineStyle: "none"
        },

        pressStyle: {
          borderColor: "$borderColorDisabled",
          outlineStyle: "none"
        }
      }
    }
  } as const,

  defaultVariants: {
    size: "$true",
    disabled: false,
    focused: false
  }
});

const SelectSeparator = styled(Separator, {
  name: "Select",
  context: SelectContext,

  animation: "normal",
  borderWidth: 1,
  borderColor: "$borderColor",
  vertical: true,
  height: "50%",
  marginVertical: "$0.25",

  variants: {
    focused: {
      true: {
        borderColor: "$borderColorFocus"
      }
    },

    disabled: {
      true: {
        borderColor: "$borderColorDisabled",

        hoverStyle: {
          borderColor: "$borderColorDisabled"
        },

        focusStyle: {
          borderColor: "$borderColorDisabled"
        },

        pressStyle: {
          borderColor: "$borderColorDisabled"
        }
      }
    }
  } as const,

  defaultVariants: {
    disabled: false,
    focused: false
  }
});

const SelectTrigger = Button.styleable<{
  forcePlacement?: GetProps<typeof XGroup.Item>["forcePlacement"];
  rotateOnFocused?: boolean;
}>(
  ({ children, rotateOnFocused = true, ...props }, forwardedRef) => {
    const { circular, focused, disabled, size, onFocus } =
      SelectContext.useStyledContext();

    const radius = useMemo(
      () => getRadius("$true", { circular, scale: 0.75 }),
      []
    );
    const adjustedTrigger = useMemo(
      () => getSized(size, { shift: -3 }),
      [size]
    );

    const theme = useThemeName();
    const rotate = useMemo(
      () => (rotateOnFocused ? focused : false),
      [rotateOnFocused, focused]
    );

    return (
      <View
        animation="slow"
        rotate={rotate ? "180deg" : "0deg"}
        cursor={disabled ? "not-allowed" : "pointer"}
        paddingHorizontal="$0.6"
        flexBasis="6%"
        minWidth="$4">
        <Button
          ref={forwardedRef}
          variant="ghost"
          {...props}
          disabled={disabled}
          borderRadius={radius}
          onPress={onFocus}
          size={adjustedTrigger}
          color={
            theme?.includes(ColorThemeName.BASE) ? "$borderColor" : "$color"
          }>
          <Button.Icon>
            {children || <ChevronDown disabled={disabled} />}
          </Button.Icon>
        </Button>
      </View>
    );
  },
  { staticConfig: { componentName: "Select" } }
);

const BaseSelect = styled(TamaguiSelect, {
  name: "Select",
  context: SelectContext,

  animation: "normal",
  cursor: "pointer",
  justifyContent: "center",
  alignItems: "center",
  borderColor: "transparent",
  backgroundColor: "transparent",

  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        color: "$colorDisabled",
        backgroundColor: "transparent"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const SelectTextBoxImpl = SelectTextBox.styleable<Partial<SelectContextProps>>(
  ({ children, ...props }, forwardedRef) => {
    const { focused, disabled } = SelectContext.useStyledContext();

    return (
      <SelectGroup
        group={"select" as any}
        focused={focused}
        disabled={disabled}
        minWidth="$10">
        <SelectTextBox {...props}>
          <XGroup.Item>
            <View flex={1}>{children}</View>
          </XGroup.Item>

          <XGroup.Item>
            <SelectSeparator
              ref={forwardedRef}
              focused={focused}
              disabled={disabled}
              $group-select-hover={{
                borderColor: disabled
                  ? "$borderColorDisabled"
                  : focused
                    ? "$borderColorFocus"
                    : "$accent10"
              }}
            />
          </XGroup.Item>

          <XGroup.Item>
            <SelectTrigger />
          </XGroup.Item>
        </SelectTextBox>
      </SelectGroup>
    );
  },
  { staticConfig: { componentName: "Select" } }
);

const SelectGroupImpl = BaseSelect.styleable<Partial<SelectContextProps>>(
  (
    {
      name,
      disabled,
      focused,
      children,
      onFocus,
      onBlur,
      onChange,
      size = "$true",
      ...props
    },
    forwardedRef
  ) => {
    const handleOpenChanged = useCallback(
      (open: boolean, via?: "hover" | "press") => {
        if (open) {
          onFocus?.();
        } else {
          onBlur?.();
        }
      },
      [onFocus, onBlur]
    );

    const handleChanged = useCallback(
      (value: string) => {
        onChange?.(
          new CustomEvent("change", {
            detail: value
          })
        );
        onBlur?.();
      },
      [onChange, onBlur]
    );

    return (
      <SelectContext.Provider
        {...props}
        name={name}
        disabled={disabled}
        focused={focused}
        size={size}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}>
        <BaseSelect
          id={name}
          ref={forwardedRef}
          disablePreventBodyScroll={true}
          {...props}
          onValueChange={handleChanged}
          onOpenChange={handleOpenChanged}
          open={focused}
          disabled={disabled}
          size={size}>
          {children}
        </BaseSelect>
      </SelectContext.Provider>
    );
  },
  { staticConfig: { componentName: "Select" } }
);

export const Select = withStaticProperties(SelectGroupImpl, {
  TextBox: withStaticProperties(SelectTextBoxImpl, {
    Value: SelectTextBox.Value
  }),
  Items: SelectItems
});
