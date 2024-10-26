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

import { ColorRole } from "@cyclone-ui/colors";
import { SelectOption } from "@storm-stack/types/utility-types/form";
import { Adapt } from "@tamagui/adapt";
import { isWeb } from "@tamagui/constants";
import type { ColorTokens, FontSizeTokens } from "@tamagui/core";
import {
  createStyledContext,
  styled,
  Theme,
  useThemeName,
  View,
  withStaticProperties
} from "@tamagui/core";
import { XGroup } from "@tamagui/group";
import { LinearGradient } from "@tamagui/linear-gradient";
import { Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import { Select as TamaguiSelect } from "@tamagui/select";
import { Sheet } from "@tamagui/sheet";
import { YStack } from "@tamagui/stacks";
import { useMemo } from "react";

const defaultContextValues = {
  size: "$true",
  color: undefined,
  hideIcons: true,
  disabled: false,
  focused: false
} as const;

export type SelectContextProps = {
  name?: string;
  size: FontSizeTokens;
  color?: ColorTokens | string;
  hideIcons?: boolean;
  disabled: boolean;
  focused: boolean;
};

export const SelectContext =
  createStyledContext<SelectContextProps>(defaultContextValues);

export const defaultSelectGroupStyles = {
  size: "$true",
  fontFamily: "$body",
  fontSize: "$4",
  color: "$color",
  // backgroundColor: "$background",
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
  }
} as const;

export const SELECT_NAME = "Select";

const SelectGroupFrame = styled(XGroup, {
  name: SELECT_NAME,
  context: SelectContext,

  justifyContent: "space-between",
  animation: "slow",
  height: "$4.5",

  variants: {
    unstyled: {
      false: defaultSelectGroupStyles
    },

    scaleIcon: {
      ":number": {} as any
    },

    size: {
      "...size": (val, { tokens }) => {
        return {
          borderRadius: tokens.radius[val]
        };
      }
    },

    disabled: {
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
    },

    focused: {
      true: {
        outlineColor: "$accent10",
        outlineWidth: 2,
        outlineOffset: "$1.25",
        outlineStyle: "solid",
        borderColor: "$borderColorFocus"
      }
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1",
    disabled: false,
    focused: false
  }
});

const SelectTrigger = styled(TamaguiSelect.Trigger, {
  name: SELECT_NAME,
  context: SelectContext,

  unstyled: true,
  radiused: true,
  hoverTheme: false,
  pressTheme: true,
  focusable: true,
  backgrounded: false,

  justifyContent: "space-between",
  animation: "slow",
  size: "$true",
  fontFamily: "$body",
  color: "$color",
  // backgroundColor: "$background",
  borderWidth: 0,
  borderColor: "transparent",
  borderStyle: "none" as any,
  outlineWidth: 0,
  outlineColor: "transparent",
  outlineStyle: "none",
  paddingHorizontal: "$2",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",

  variants: {
    scaleIcon: {
      ":number": {} as any
    },

    required: {
      true: {}
    },

    disabled: {
      true: {
        color: "$disabled",
        placeholderColor: "$disabled",
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
    required: false,
    disabled: false
  }
});

const SelectItemFrame = styled(TamaguiSelect.Item, {
  name: SELECT_NAME,
  context: SelectContext,

  hoverStyle: {
    backgroundColor: "$color8"
  },

  focusStyle: {
    backgroundColor: "color8"
  },

  variants: {
    selected: {
      true: {
        backgroundColor: "$muted",

        hoverStyle: {
          backgroundColor: "$color8"
        }
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        backgroundColor: "transparent",

        hoverStyle: {
          backgroundColor: "transparent"
        }
      },
      false: {
        cursor: "pointer"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false,
    selected: false
  }
});

const SelectItemTextFrame = styled(TamaguiSelect.ItemText, {
  name: SELECT_NAME,
  context: SelectContext,

  color: "$color",
  fontFamily: "$body",
  fontSize: "$true",
  fontWeight: "$true",
  paddingVertical: "$1",

  variants: {
    selected: {
      true: {
        color: "$fg"
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        color: "$disabled",

        hoverStyle: {
          color: "$disabled"
        }
      },
      false: {
        cursor: "pointer"
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
        selected={selected}
        disabled={disabled}>
        <SelectItemTextFrame
          selected={selected}
          disabled={disabled}
          $group-hover={{
            color: disabled ? "$disabled" : selected ? "$fg" : "$colorHover"
          }}>
          {children}
        </SelectItemTextFrame>
        <TamaguiSelect.ItemIndicator marginLeft="auto">
          <Theme name={ColorRole.ACCENT}>
            <Check size="$2" color="$color" />
          </Theme>
        </TamaguiSelect.ItemIndicator>
      </SelectItemFrame>
    );
  }
);

const SelectValueFrame = styled(TamaguiSelect.Value, {
  name: SELECT_NAME,
  context: SelectContext,

  fontFamily: "$body",
  fontSize: "$true",
  fontWeight: "$true",
  color: "$fg",
  backgroundColor: "transparent",
  flexGrow: 1,
  marginHorizontal: "$1.75",

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
        color: "$disabled"
      },
      false: {
        cursor: "pointer"
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
}>(({ children, placeholding, ...props }, forwardedRef) => {
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
});

const BaseSelect = styled(TamaguiSelect, {
  name: SELECT_NAME,
  context: SelectContext,

  justifyContent: "center",
  alignItems: "center",
  animation: "fast",
  borderColor: "transparent",

  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        color: "$disabled",
        backgroundColor: "transparent"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const SelectChevron = styled(ChevronDown, {
  name: SELECT_NAME,
  context: SelectContext,

  animation: "500ms"
});

const SelectChevronImpl = SelectChevron.styleable<{
  rotateOnFocused?: boolean;
}>(({ rotateOnFocused = true, ...props }, forwardedRef) => {
  const { color, focused, disabled } = SelectContext.useStyledContext();
  const theme = useThemeName();

  const rotate = useMemo(
    () => (rotateOnFocused ? focused : false),
    [rotateOnFocused, focused]
  );

  return (
    <View animation="500ms" rotate={rotate ? "180deg" : "0deg"}>
      <SelectChevron
        ref={forwardedRef}
        theme={theme}
        {...props}
        color={
          color ||
          (disabled
            ? "$disabled"
            : theme.toLowerCase().includes(ColorRole.BASE)
              ? "$base9"
              : "$primary")
        }
      />
    </View>
  );
});

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
  }
);

const SelectItems = View.styleable(({ children, ...props }, forwardedRef) => {
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
          width="100%"
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
          <TamaguiSelect.Group>{children}</TamaguiSelect.Group>
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
});

export const Select = withStaticProperties(SelectGroup, {
  Trigger: withStaticProperties(SelectTrigger, {
    Value: SelectValue,
    Chevron: SelectChevronImpl
  }),
  Items: withStaticProperties(SelectItems, {
    Item: SelectItem
  })
});
