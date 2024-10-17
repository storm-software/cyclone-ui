import { ColorRole } from "@cyclone-ui/colors";
import {
  FieldIcon,
  FieldThemeIcon,
  useFieldActions,
  useFieldStore
} from "@cyclone-ui/form";
import { ThemedIcon } from "@cyclone-ui/themeable-icon";
import { SelectOption } from "@storm-stack/types/utility-types/form";
import { Adapt } from "@tamagui/adapt";
import { isWeb } from "@tamagui/constants";
import type { ColorTokens, FontSizeTokens } from "@tamagui/core";
import {
  createStyledContext,
  styled,
  Theme,
  View,
  withStaticProperties
} from "@tamagui/core";
import { getFontSized } from "@tamagui/get-font-sized";
import { getSpace } from "@tamagui/get-token";
import { XGroup } from "@tamagui/group";
import { LinearGradient } from "@tamagui/linear-gradient";
import { Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import { Select as TamaguiSelect } from "@tamagui/select";
import { Sheet } from "@tamagui/sheet";
import { XStack, YStack } from "@tamagui/stacks";
import type { GetProps, SizeVariantSpreadFunction } from "@tamagui/web";
import { forwardRef, useCallback, useLayoutEffect, useMemo } from "react";

const defaultContextValues = {
  size: "$true",
  color: undefined,
  hideIcons: true
} as const;

export const SelectContext = createStyledContext<{
  size: FontSizeTokens;
  color?: ColorTokens | string;
  hideIcons: boolean;
}>(defaultContextValues);

export const defaultSelectGroupStyles = {
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

    required: {
      true: {}
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

    open: {
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
    unstyled: process.env.TAMAGUI_HEADLESS === "1" ? true : false,
    required: false,
    disabled: false,
    open: false
  }
});

export const selectSizeVariant: SizeVariantSpreadFunction<any> = (
  val = "$true",
  extras
) => {
  const radiusToken =
    extras.tokens.radius[val] ?? extras.tokens.radius["$true"];
  const paddingHorizontal = getSpace(val, {
    shift: -2,
    bounds: [2]
  });

  const fontStyle = getFontSized(val as any, extras);
  // lineHeight messes up select on native
  if (!isWeb && fontStyle) {
    delete fontStyle["lineHeight"];
  }

  return {
    ...fontStyle,
    height: val,
    borderRadius: extras.props.circular ? 100_000 : radiusToken,
    paddingHorizontal
  };
};

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
  backgroundColor: "$background",
  borderWidth: 0,
  borderColor: "transparent",
  borderStyle: "none" as any,
  outlineWidth: 0,
  outlineColor: "transparent",
  outlineStyle: "none",
  paddingHorizontal: "$2",

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
}>(({ children, ...props }, ref) => {
  const store = useFieldStore();
  const disabled = store.get.disabled();

  return (
    <SelectValueFrame
      id={store.get.name()}
      ref={ref}
      size={0}
      {...props}
      disabled={disabled}
      placeholding={!store.get.value() && !disabled}>
      {children}
    </SelectValueFrame>
  );
});

const SelectItemFrame = styled(TamaguiSelect.Item, {
  name: SELECT_NAME,
  context: SelectContext,

  backgroundColor: "transparent",

  // hoverStyle: {
  //   backgroundColor: "$color8"
  // },

  variants: {
    selected: {
      true: {
        backgroundColor: "$muted"

        // hoverStyle: {
        //   backgroundColor: "$color8"
        // }
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

export const SelectItem = forwardRef<
  typeof TamaguiSelect.Item,
  GetProps<typeof TamaguiSelect.Item> & Partial<Omit<SelectOption, "name">>
>((props, forwardedRef) => {
  const { children, value, ...rest } = props;

  const store = useFieldStore();
  const setItems = store.set.items();

  const fieldValue = store.get.value();
  const fieldDisabled = store.get.disabled();

  const selected = useMemo(() => fieldValue === value, [fieldValue, value]);
  const disabled = useMemo(
    () => !!(fieldDisabled || props.disabled),
    [fieldDisabled, props.disabled]
  );

  useLayoutEffect(() => {
    setItems(prev => [
      ...prev.filter(item => item.value !== value),
      { name: children, value, disabled: disabled, selected } as SelectOption
    ]);
  }, [disabled, value, selected]);

  return (
    <SelectItemFrame
      {...rest}
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

export type SelectExtraProps = {
  onOpen?: () => any;
  onClose?: () => any;
  placeholder?: string;
};

const BaseSelectImpl = BaseSelect.styleable<SelectExtraProps>((props, ref) => {
  const { size } = SelectContext.useStyledContext();
  const { children, onOpen, onClose, placeholder, ...rest } = props;

  const store = useFieldStore();
  const disabled = store.get.disabled();
  const validating = store.get.validating();
  const value = store.get.value();
  const focused = store.get.focused();
  const required = store.get.required();

  const { change, blur, focus } = useFieldActions();
  const handleOpenChange = useCallback(
    (next: boolean) => {
      if (next) {
        focus();
        onOpen?.();
      } else {
        blur();
        onClose?.();
      }
    },
    [focus, blur, onOpen, onClose]
  );

  return (
    <BaseSelect
      id={store.get.name()}
      ref={ref}
      size={size}
      disablePreventBodyScroll={true}
      {...rest}
      onOpenChange={handleOpenChange}
      onValueChange={change}
      open={focused}
      value={String(value ?? "")}
      defaultValue={String(store.get.initialValue() ?? "")}
      disabled={disabled}>
      <SelectTrigger disabled={disabled}>
        <XStack alignItems="center" width="100%">
          {!disabled && <FieldThemeIcon />}
          <SelectValue placeholder={placeholder} />

          {(disabled || validating) && <FieldThemeIcon />}
          {!disabled && (
            <SelectIconChevron open={focused}>
              <FieldIcon>
                <ChevronDown />
              </FieldIcon>
            </SelectIconChevron>
          )}
        </XStack>
      </SelectTrigger>

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
          <TamaguiSelect.Group>
            {!required && (
              <SelectItem key={-1} index={-1} value={null as any}></SelectItem>
            )}
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
    </BaseSelect>
  );
});

const SelectIconChevron = styled(View, {
  name: SELECT_NAME,
  context: SelectContext,

  marginRight: 0,
  animation: "slow",

  variants: {
    open: {
      true: {
        rotate: "180deg"
      },
      false: {
        rotate: "0deg"
      }
    }
  } as const,

  defaultVariants: {
    open: false
  }
});

const SelectGroupImpl = BaseSelectImpl.styleable<SelectExtraProps>(
  (props, forwardedRef) => {
    const { children, ...rest } = props;

    const store = useFieldStore();
    const focused = store.get.focused();
    const disabled = store.get.disabled();

    return (
      <SelectGroupFrame open={focused} disabled={disabled}>
        <BaseSelectImpl ref={forwardedRef} {...rest}>
          {children}
        </BaseSelectImpl>
      </SelectGroupFrame>
    );
  }
);

export const Select = withStaticProperties(SelectGroupImpl, {
  Icon: ThemedIcon,
  Item: SelectItem
});
