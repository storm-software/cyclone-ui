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

import { ColorThemeName } from "@cyclone-ui/colors";
import { SelectOption } from "@storm-stack/types/utility-types/form";
import { Adapt } from "@tamagui/adapt";
import { isWeb } from "@tamagui/constants";
import type {
  ColorTokens,
  FontSizeTokens,
  SizeTokens,
  VariantSpreadExtras
} from "@tamagui/core";
import {
  createStyledContext,
  styled,
  Theme,
  View,
  withStaticProperties
} from "@tamagui/core";
import { getSize, getSpace } from "@tamagui/get-token";
import { XGroup } from "@tamagui/group";
import { LinearGradient } from "@tamagui/linear-gradient";
import { Check, ChevronDown, ChevronUp, Lock } from "@tamagui/lucide-icons";
import { Select as TamaguiSelect } from "@tamagui/select";
import { Sheet } from "@tamagui/sheet";
import { XStack, YStack } from "@tamagui/stacks";
import { useMemo } from "react";

export type SelectContextProps = {
  name?: string;
  size: FontSizeTokens;
  color?: ColorTokens | string;
  disabled: boolean;
  focused: boolean;
};

export const SelectContext = createStyledContext<SelectContextProps>({
  size: "$true",
  disabled: false,
  focused: false
});

const getSelectSize = (
  val: SizeTokens | number,
  extras: VariantSpreadExtras<any>
) => {
  const { tokens, props } = extras;

  if (!val || props.circular) {
    return;
  }
  if (typeof val === "number") {
    return {
      paddingHorizontal: val * 0.25,
      height: val,
      borderRadius: props.circular ? 100_000 : val * 0.2
    };
  }

  const xSize = getSpace(val);
  const radiusToken = tokens.radius[val] ?? tokens.radius["$true"];

  return {
    paddingHorizontal: xSize,
    height: val,
    borderRadius: props.circular ? 100_000 : radiusToken
  };
};

const SelectGroupFrame = styled(XGroup, {
  name: "Select",
  context: SelectContext,

  animation: "normal",
  backgroundColor: "transparent",
  justifyContent: "space-between",
  cursor: "pointer",
  borderWidth: 1,
  borderColor: "$borderColor",
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

const SelectTrigger = styled(TamaguiSelect.Trigger, {
  name: "SelectTrigger",
  context: SelectContext,

  unstyled: true,
  radiused: true,
  hoverTheme: false,
  pressTheme: true,
  focusable: true,
  backgrounded: false,
  bordered: false,

  animation: "normal",
  cursor: "pointer",
  justifyContent: "space-between",
  backgroundColor: "transparent",
  color: "$color",
  fontFamily: "$body",
  fontSize: "$4",
  fontWeight: "$true",
  borderWidth: 0,
  outlineStyle: "none",
  flexDirection: "row",
  alignItems: "center",
  flex: 1,

  variants: {
    size: {
      "...size": getSelectSize
    },

    disabled: {
      true: {
        color: "$colorDisabled",
        placeholderColor: "$colorDisabled",
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
    size: "$true",
    disabled: false
  }
});

const SelectTriggerImpl = SelectTrigger.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <SelectTrigger ref={forwardedRef} unstyled={true} {...props}>
        {children}
      </SelectTrigger>
    );
  },
  { staticConfig: { componentName: "SelectTrigger" } }
);

const SelectItemFrame = styled(TamaguiSelect.Item, {
  name: "SelectItemsItem",
  context: SelectContext,

  backgroundColor: "transparent",
  marginVertical: 0,
  paddingVertical: 0,
  paddingHorizontal: "$2",

  focusStyle: {
    backgroundColor: "transparent"
  },

  hoverStyle: {
    backgroundColor: "transparent"
  }
});

const SelectItemGroup = styled(XStack, {
  name: "SelectItemsItem",
  context: SelectContext,

  cursor: "pointer",
  gap: "$2",
  alignItems: "center",
  paddingHorizontal: "$2",
  paddingVertical: 0,
  borderRadius: "$3",
  minHeight: "$4",
  width: "100%",

  hoverStyle: {
    backgroundColor: "$muted"
  },

  focusStyle: {
    backgroundColor: "$muted"
  },

  focusVisibleStyle: {
    backgroundColor: "$muted"
  },

  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        backgroundColor: "transparent",

        hoverStyle: {
          backgroundColor: "transparent"
        },

        focusStyle: {
          backgroundColor: "transparent"
        }
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const SelectItemTextFrame = styled(TamaguiSelect.ItemText, {
  name: "SelectItemsItem",
  context: SelectContext,

  cursor: "pointer",
  color: "$color",
  fontFamily: "$body",
  fontSize: "$4",
  fontWeight: "$true",
  lineHeight: "$true",
  letterSpacing: "$true",
  flex: 1,

  variants: {
    selected: {
      true: {
        color: "$fg"
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        color: "$colorDisabled",

        hoverStyle: {
          color: "$colorDisabled"
        }
      }
    }
  } as const,

  defaultVariants: {
    disabled: false,
    selected: false
  }
});

const SelectItem = SelectItemFrame.styleable<Omit<SelectOption, "name">>(
  ({ children, value, selected, disabled, ...props }, forwardedRef) => {
    return (
      <SelectItemFrame
        {...props}
        group={true}
        ref={forwardedRef}
        value={String(value)}
        textValue={String(value)}
        disabled={disabled}>
        <SelectItemGroup disabled={disabled}>
          <View width="$2" justifyContent="center">
            {disabled && (
              <Theme name={ColorThemeName.BASE}>
                <Lock size="$1.5" color="$colorDisabled" />
              </Theme>
            )}
            <TamaguiSelect.ItemIndicator>
              <Theme name={ColorThemeName.ACCENT}>
                <Check size="$2" color="$color" />
              </Theme>
            </TamaguiSelect.ItemIndicator>
          </View>
          <SelectItemTextFrame
            selected={selected}
            disabled={disabled}
            $group-hover={{
              color: disabled
                ? "$colorDisabled"
                : selected
                  ? "$fg"
                  : "$colorHover"
            }}>
            {children}
          </SelectItemTextFrame>
        </SelectItemGroup>
      </SelectItemFrame>
    );
  },
  {
    staticConfig: { componentName: "SelectItemsItem" }
  }
);

const SelectValueFrame = styled(TamaguiSelect.Value, {
  name: "SelectTriggerValue",
  context: SelectContext,

  animation: "normal",
  unstyled: true,
  cursor: "pointer",
  color: "$color",
  fontFamily: "$body",
  fontSize: "$4",
  fontWeight: "$true",
  lineHeight: "$true",
  letterSpacing: "$true",
  display: "flex",
  flexGrow: 1,
  verticalAlign: "center",

  hoverStyle: {
    backgroundColor: "transparent"
  },

  focusStyle: {
    backgroundColor: "transparent"
  },

  variants: {
    placeholding: {
      true: {
        color: "$placeholderColor"
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        color: "$colorDisabled"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false,
    placeholding: false
  }
});

const SelectValue = SelectValueFrame.styleable<{
  placeholder?: string;
}>(
  ({ children, placeholding, ...props }, forwardedRef) => {
    const { disabled, name } = SelectContext.useStyledContext();

    return (
      <SelectValueFrame
        id={name}
        ref={forwardedRef}
        size={0}
        {...props}
        disabled={disabled}
        placeholding={placeholding && !disabled}>
        {children}
      </SelectValueFrame>
    );
  },
  {
    staticConfig: { componentName: "SelectTriggerValue" }
  }
);

const BaseSelect = styled(TamaguiSelect, {
  name: "Select",
  context: SelectContext,

  animation: "normal",
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

const SelectChevron = styled(ChevronDown, {
  name: "SelectTriggerValue",
  context: SelectContext,

  animation: "normal",
  cursor: "pointer",
  color: "$placeholderColor",

  variants: {
    size: {
      "...size": (
        val: SizeTokens | number,
        { props }: VariantSpreadExtras<any>
      ) => {
        if (!val || props.circular) {
          return;
        }
        if (typeof val === "number") {
          return {
            height: val * 0.5,
            width: val * 0.5
          };
        }

        const size = getSize(val);
        return {
          height: size.val * 0.5,
          width: size.val * 0.7
        };
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        color: "$colorDisabled"
      }
    }
  } as const,

  defaultVariants: {
    size: "$true",
    disabled: false
  }
});

const SelectChevronImpl = SelectChevron.styleable<{
  rotateOnFocused?: boolean;
}>(
  ({ rotateOnFocused = true, ...props }, forwardedRef) => {
    const { focused, disabled, size } = SelectContext.useStyledContext();

    const rotate = useMemo(
      () => (rotateOnFocused ? focused : false),
      [rotateOnFocused, focused]
    );

    return (
      <View animation="500ms" rotate={rotate ? "180deg" : "0deg"}>
        <SelectChevron
          ref={forwardedRef}
          {...props}
          size={size}
          disabled={disabled}
        />
      </View>
    );
  },
  {
    staticConfig: { componentName: "SelectTriggerValue" }
  }
);

const SelectGroup = BaseSelect.styleable<Partial<SelectContextProps>>(
  ({ name, disabled, focused, children, ...props }, forwardedRef) => {
    return (
      <SelectGroupFrame focused={focused} disabled={disabled}>
        <BaseSelect
          id={name}
          ref={forwardedRef}
          disablePreventBodyScroll={true}
          {...props}
          open={focused}
          disabled={disabled}>
          {children}
        </BaseSelect>
      </SelectGroupFrame>
    );
  },
  { staticConfig: { componentName: "Select" } }
);

const SelectItems = View.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <View ref={forwardedRef} flex={1} {...props}>
        <Adapt when={"sm" as any} platform="touch">
          <Sheet
            modal
            dismissOnSnapToBottom
            animationConfig={{
              type: "spring",
              damping: 20,
              mass: 1.2,
              stiffness: 250
            }}>
            <Sheet.Frame>
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay
              animation="lazy"
              enterStyle={{ opacity: 0 }}
              exitStyle={{ opacity: 0 }}
            />
          </Sheet>
        </Adapt>

        <TamaguiSelect.Content zIndex={200000}>
          <TamaguiSelect.ScrollUpButton
            alignItems="center"
            justifyContent="center"
            position="relative"
            height="$3">
            <YStack zIndex={10}>
              <ChevronUp size={20} />
            </YStack>
            <LinearGradient
              start={[0, 0]}
              end={[0, 1]}
              fullscreen={true}
              colors={["$background", "transparent"]}
              borderRadius="$4"
              marginTop="$0.2"
            />
          </TamaguiSelect.ScrollUpButton>

          <TamaguiSelect.Viewport
            animation="quick"
            animateOnly={["transform", "scale", "opacity"]}
            enterStyle={{ opacity: 0, scale: 0.9, y: -10 }}
            exitStyle={{ opacity: 0, scale: 0.95, y: 10 }}
            minWidth={200}>
            <TamaguiSelect.Group paddingTop="$1.5">
              {children}
            </TamaguiSelect.Group>
          </TamaguiSelect.Viewport>

          <TamaguiSelect.ScrollDownButton
            alignItems="center"
            justifyContent="center"
            position="relative"
            width="100%"
            height="$3">
            <YStack zIndex={10}>
              <ChevronDown size={20} />
            </YStack>
            <LinearGradient
              start={[0, 0]}
              end={[0, 1]}
              fullscreen={true}
              colors={["transparent", "$background"]}
              borderRadius="$4"
              marginBottom="$0.2"
            />
          </TamaguiSelect.ScrollDownButton>
        </TamaguiSelect.Content>
      </View>
    );
  },
  { staticConfig: { componentName: "SelectItems" } }
);

export const Select = withStaticProperties(SelectGroup, {
  Trigger: withStaticProperties(SelectTriggerImpl, {
    Value: SelectValue,
    Chevron: SelectChevronImpl
  }),
  Items: withStaticProperties(SelectItems, {
    Item: SelectItem
  })
});
