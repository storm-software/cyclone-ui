import {
  useCallback,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { ColorRole, SelectOption } from "@cyclone-ui/colors";
import { Adapt } from "@tamagui/adapt";
import { isWeb } from "@tamagui/constants";
import type { ColorTokens, FontSizeTokens } from "@tamagui/core";
import {
  createStyledContext,
  getVariable,
  styled,
  Text,
  useTheme,
  View
} from "@tamagui/core";
import { getFontSize } from "@tamagui/font-size";
import { getFontSized } from "@tamagui/get-font-sized";
import { getSpace } from "@tamagui/get-token";
import { XGroup } from "@tamagui/group";
import { withStaticProperties } from "@tamagui/helpers";
import { useGetThemedIcon } from "@tamagui/helpers-tamagui";
import { Label } from "@tamagui/label";
import { LinearGradient } from "@tamagui/linear-gradient";
import {
  AlertCircle,
  Asterisk,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Info,
  Lock
} from "@tamagui/lucide-icons";
import {
  Select as TamaguiSelect,
  type SelectProps as TamaguiSelectProps
} from "@tamagui/select";
import { Sheet } from "@tamagui/sheet";
import { ThemeableStack, XStack, YStack } from "@tamagui/stacks";
import type {
  GetProps,
  SizeVariantSpreadFunction,
  TextProps,
  VariantSpreadExtras
} from "@tamagui/web";

const defaultContextValues = {
  size: "$true",
  scaleIcon: 1.3,
  color: undefined,
  required: false,
  disabled: false,
  theme: `${ColorRole.BASE}_Select`,
  options: [] as SelectOption[]
} as const;

export const SelectContext = createStyledContext<{
  size: FontSizeTokens;
  scaleIcon: number;
  color?: ColorTokens | string;
  required: boolean;
  disabled: boolean;
  theme: string;
  options: SelectOption[];
}>(defaultContextValues);

export const defaultSelectGroupStyles = {
  size: "$true",
  fontFamily: "$body",
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
    borderColor: "$accent10",
    backgroundColor: "$background"
  }
} as const;

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

const SelectGroupFrame = styled(TamaguiSelect.Trigger, {
  name: "Select",
  context: SelectContext,
  unstyled: true,
  radiused: true,
  hoverTheme: false,
  pressTheme: true,
  focusable: true,
  backgrounded: false,

  justifyContent: "space-between",
  animation: "$slow",
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
  paddingVertical: 0,

  variants: {
    scaleIcon: {
      ":number": {} as any
    },

    size: {
      "...size": selectSizeVariant
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

const SelectGroupFrameContainer = styled(ThemeableStack, {
  name: "Select",
  context: SelectContext,

  radiused: true,
  hoverTheme: true,
  pressTheme: true,
  focusable: true,
  backgrounded: false,
  animation: "$slow",
  backgroundColor: "transparent",
  borderWidth: 1,
  borderColor: "$borderColor",
  borderStyle: "solid",
  outlineWidth: 0,
  outlineColor: "transparent",
  outlineStyle: "none",

  hoverStyle: {
    borderColor: "$accent10"
  },

  focusStyle: {
    outlineColor: "$accent10",
    outlineWidth: 2,
    outlineOffset: "$1.25",
    outlineStyle: "solid",
    borderColor: "$borderColor"
  },

  variants: {
    scaleIcon: {
      ":number": {} as any
    },

    applyFocusStyle: {
      ":boolean": (val, { props }) => {
        if (val) {
          return (
            props.focusStyle || {
              outlineColor: "$accent10",
              outlineWidth: 2,
              outlineOffset: "$1.25",
              outlineStyle: "solid",
              borderColor: "$borderColorFocus"
            }
          );
        }
      }
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
        borderWidth: 1,

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
        borderWidth: 1,
        borderColor: "$borderColor",
        cursor: "pointer"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const DEFAULT_SELECT_NAME = "select_default_name";
const InternalStateContext = createStyledContext({
  name: DEFAULT_SELECT_NAME,
  setLabel: (val: string | React.ReactNode) => {},
  label: "" as string | React.ReactNode,
  setOpen: (val: boolean) => {},
  open: false,
  setValue: (val?: string) => {},
  value: undefined as string | undefined
});

const SelectGroupImpl = SelectGroupFrame.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;
  const { theme, disabled, size, scaleIcon } = SelectContext.useStyledContext();
  const { open } = InternalStateContext.useStyledContext();

  return (
    <SelectGroupFrameContainer theme={theme} applyFocusStyle={open}>
      <SelectGroupFrame
        theme={theme}
        ref={forwardedRef}
        {...rest}
        scaleIcon={scaleIcon}
        size={size}
        active={!disabled}
        disabled={disabled}>
        {theme &&
          (theme.toLowerCase().includes(ColorRole.ERROR) ||
            theme.toLowerCase().includes(ColorRole.WARNING)) && (
            <SelectIcon>
              <AlertCircle />
            </SelectIcon>
          )}
        {!disabled && theme && theme.toLowerCase().includes(ColorRole.INFO) && (
          <SelectIcon>
            <Info />
          </SelectIcon>
        )}
        {!disabled && theme && theme.toLowerCase().includes(ColorRole.HELP) && (
          <SelectIcon>
            <HelpCircle />
          </SelectIcon>
        )}
        {!disabled &&
          theme &&
          theme.toLowerCase().includes(ColorRole.SUCCESS) && (
            <SelectIcon>
              <CheckCircle />
            </SelectIcon>
          )}
        {children}
        {disabled && (
          <SelectIcon marginRight={0}>
            <Lock />
          </SelectIcon>
        )}
        {!disabled && (
          <SelectIconChevron marginRight={0} marginLeft="$0.75" opened={open}>
            <ChevronDown size="$1.5" />
          </SelectIconChevron>
        )}
      </SelectGroupFrame>
    </SelectGroupFrameContainer>
  );
});

const SelectValueFrame = styled(TamaguiSelect.Value, {
  name: "Select",
  context: SelectContext,

  paddingVertical: 0,

  variants: {
    placeholding: {
      true: {
        color: "$color"
      },
      false: {
        color: "$fg"
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        placeholderTextColor: "$disabled",
        color: "$disabled"
      },
      false: {
        placeholderTextColor: "$color"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false,
    placeholding: false
  }
});

const SelectValueImpl = SelectValueFrame.styleable<{
  placeholder?: string;
}>(({ children, ...props }, ref) => {
  const { size, disabled } = SelectContext.useStyledContext();
  const { name, value } = InternalStateContext.useStyledContext();

  return (
    <View flex={1}>
      <SelectValueFrame
        id={name}
        ref={ref}
        size={size}
        {...props}
        disabled={disabled}
        placeholding={!value}>
        {children}
      </SelectValueFrame>
    </View>
  );
});

// Icon starts

export const SelectIconFrame = styled(View, {
  name: "Select",
  justifyContent: "center",
  alignItems: "center",
  context: SelectContext,
  animation: "$slow",
  borderColor: "transparent",

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        let spaceToken = 1;
        if (typeof val !== "undefined" && val !== null) {
          spaceToken = (tokens.space?.[val] as any)?.val;
        }

        return {
          marginRight: (spaceToken ?? 1) * 1.6
        };
      }
    }
  } as const
});

const getIconSize = (size: FontSizeTokens, scale: number) => {
  return (
    (typeof size === "number"
      ? size * 0.6
      : getFontSize(size as FontSizeTokens)) * scale
  );
};

const SelectIcon = SelectIconFrame.styleable<{
  scaleIcon?: number;
  color?: ColorTokens | string;
}>((props: any, ref: any) => {
  const { children, color: colorProp, ...rest } = props;
  const selectContext = SelectContext.useStyledContext();
  const {
    size = "$true",
    color: contextColor,
    disabled,
    scaleIcon = 1
  } = selectContext;

  const themeColors = useTheme({
    name: selectContext.theme
  });
  const color = disabled
    ? "$disabled"
    : getVariable(
        colorProp ||
          contextColor ||
          themeColors[contextColor as any]?.get("web") ||
          themeColors.primary?.get("web")
      );
  const iconSize = getIconSize(size as FontSizeTokens, scaleIcon);

  const getThemedIcon = useGetThemedIcon({
    size: iconSize,
    color: color as any
  });
  return (
    <SelectIconFrame ref={ref} theme={selectContext.theme} {...rest}>
      {getThemedIcon(children)}
    </SelectIconFrame>
  );
});

const SelectIconWrapper = SelectIcon.styleable(
  ({ children, ...props }: any, ref: any) => {
    const { theme, disabled } = SelectContext.useStyledContext();

    if (
      (theme &&
        (theme.toLowerCase().includes(ColorRole.ERROR) ||
          theme.toLowerCase().includes(ColorRole.WARNING) ||
          theme.toLowerCase().includes(ColorRole.INFO) ||
          theme.toLowerCase().includes(ColorRole.HELP) ||
          theme.toLowerCase().includes(ColorRole.SUCCESS))) ||
      disabled
    ) {
      return null;
    }

    return (
      <SelectIcon ref={ref} {...props}>
        {children}
      </SelectIcon>
    );
  }
);

const SelectIconChevron = styled(SelectIcon, {
  name: "Select",
  context: SelectContext,

  marginRight: 0,
  animation: "$slow",

  variants: {
    opened: {
      true: {
        rotate: "180deg"
      },
      false: {
        rotate: "0deg"
      }
    }
  } as const,

  defaultVariants: {
    opened: false
  }
});

export const SelectComp = styled(TamaguiSelect, {
  name: "Select",
  context: SelectContext,

  justifyContent: "center",
  alignItems: "center",
  animation: "$slow",
  borderColor: "transparent",

  hoverStyle: {
    borderColor: "$accent10",
    backgroundColor: "$background"
  }
});

const SelectContainer = View.styleable<
  TamaguiSelectProps & {
    options?: SelectOption[];
    disabled?: boolean;
  }
>((props, forwardedRef) => {
  const { children, disabled, onValueChange, onOpenChange, ...rest } = props;
  const [open, setOpen] = useState(props.defaultOpen);
  const [label, setLabel] = useState<string | React.ReactNode>("");
  const [value, setValue] = useState<string | undefined>(
    props.value ?? props.defaultValue
  );

  const id = useId();
  const name = useMemo(
    () => (rest.name && rest.name !== DEFAULT_SELECT_NAME ? rest.name : id),
    [id, rest.name]
  );
  const ref = useRef(null);
  const options = rest.options || [];

  const handleOpenChange = useCallback(() => {
    const next = !disabled && !open;
    if (next !== open) {
      onOpenChange?.(next);
      setOpen(next);
    }
  }, [open, disabled]);
  const handleValueChange = useCallback(
    (next: string) => {
      if (next !== value) {
        onValueChange?.(next);
        setValue(next);
      }
    },
    [value, disabled]
  );

  return (
    <InternalStateContext.Provider
      name={name}
      label={label}
      setLabel={setLabel}
      open={open}
      setOpen={setOpen}
      value={value}
      setValue={setValue}>
      <SelectComp
        {...rest}
        ref={forwardedRef}
        name={name}
        value={value}
        onOpenChange={handleOpenChange}
        onValueChange={handleValueChange}
        open={open}>
        <View flexDirection="column" gap="$1.5">
          {children}
        </View>

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
              fullscreen
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
              <TamaguiSelect.Label>{label}</TamaguiSelect.Label>
              {useMemo(
                () =>
                  options.map((option, i) => {
                    return (
                      <TamaguiSelect.Item
                        index={i}
                        key={i}
                        value={String(option.value)}>
                        <TamaguiSelect.ItemText color="$fg">
                          {option.name}
                        </TamaguiSelect.ItemText>
                        <TamaguiSelect.ItemIndicator marginLeft="auto">
                          <Check size={16} theme="$accent" color="$fg" />
                        </TamaguiSelect.ItemIndicator>
                      </TamaguiSelect.Item>
                    );
                  }),
                [options]
              )}
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
              fullscreen
              colors={["transparent", "$background"]}
              borderRadius="$4"
              marginBottom="$0.2"
            />
          </TamaguiSelect.ScrollDownButton>
        </TamaguiSelect.Content>
      </SelectComp>
    </InternalStateContext.Provider>
  );
});

export const SelectContainerFrame = styled(SelectContainer, {
  name: "Select",
  context: SelectContext,
  flexDirection: "column",
  animation: "$slow",

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        let spaceToken = 1;
        if (typeof val !== "undefined" && val !== null) {
          spaceToken = (tokens.space?.[val] as any)?.val;
        }

        return {
          gap: (spaceToken ?? 1) * 0.3
        };
      }
    },

    color: {
      "...color": () => ({})
    },

    gapScale: {
      ":number": {} as any
    },

    required: {
      ":boolean": {} as any
    },

    disabled: {
      true: {
        cursor: "not-allowed"
      }
    }
  } as const,

  defaultVariants: {
    size: "$4",
    required: false,
    disabled: false
  }
});

export const SelectLabel = styled(Label, {
  name: "Label",
  context: SelectContext,
  fontFamily: "$label",
  animation: "$slow",
  cursor: "pointer",

  variants: {
    size: {
      "...fontSize": (
        val: FontSizeTokens,
        config: VariantSpreadExtras<TextProps>
      ) => {
        if (!config.font) {
          return;
        }

        let sizeToken = 1;
        let heightToken = 1;
        if (typeof val !== "undefined" && val !== null) {
          sizeToken = (config.font.size?.[val] as any)?.val;
          heightToken = (config.font.lineHeight?.[val] as any)?.val;
        }

        const fontSize = (sizeToken ?? 1) * 1.25;
        const lineHeight = (heightToken ?? 1) * 1;
        const fontWeight = config.font.weight?.["$3"];
        const letterSpacing = config.font.letterSpacing?.[val];
        const textTransform = config.font.transform?.[val];
        const fontStyle = config.font.style?.[val];

        return {
          fontSize,
          lineHeight,
          fontWeight,
          letterSpacing,
          textTransform,
          fontStyle
        };
      }
    },

    open: {
      true: {
        color: "$base12",
        fontWeight: "$5"
      },
      false: {
        color: "$base10"
      }
    },

    disabled: {
      true: {
        color: "$disabled",
        cursor: "not-allowed"
      }
    }
  } as const,

  defaultVariants: {
    open: false,
    disabled: false
  }
});

const SelectLabelImpl = SelectLabel.styleable((props, forwardedRef) => {
  const { required, disabled } = SelectContext.useStyledContext();
  const { open, name, label, setLabel } =
    InternalStateContext.useStyledContext();
  const { children, ...rest } = props;

  useLayoutEffect(() => {
    if (children !== label) {
      setLabel(children);
    }
  }, [children, label]);

  return (
    <XStack gap="$1.2">
      <SelectLabel
        ref={forwardedRef}
        {...rest}
        open={!!(disabled ? false : open)}
        disabled={disabled}
        htmlFor={name}
        theme="base">
        {children}
      </SelectLabel>
      {required && (
        <View position="relative">
          <Asterisk color="$error8" size="$0.75" position="absolute" top={-2} />
        </View>
      )}
    </XStack>
  );
});

export const SelectDetails = styled(Text, {
  name: "Select",
  context: SelectContext,
  animation: "$slow",
  color: "$borderColor",
  marginTop: "$0.5",
  fontStyle: "italic",
  opacity: 1,

  enterStyle: {
    opacity: 0,
    x: 10
  },

  exitStyle: {
    opacity: 0,
    x: 10
  },

  variants: {
    size: {
      "...fontSize": (val: any, { font }: any) => {
        if (!font) {
          return;
        }

        let sizeToken = 1;
        let heightToken = 1;
        if (typeof val !== "undefined" && val !== null) {
          sizeToken = (font.size?.[val] as any)?.val;
          heightToken = (font.lineHeight?.[val] as any)?.val;
        }

        const fontSize = (sizeToken ?? 1) * 1.05;
        const lineHeight = (heightToken ?? 1) * 1;
        const fontWeight = font.weight?.["$3"];
        const letterSpacing = font.letterSpacing?.[val];
        const textTransform = font.transform?.[val];
        const fontStyle = font.style?.[val];

        return {
          fontSize,
          lineHeight,
          fontWeight,
          letterSpacing,
          textTransform,
          fontStyle
        };
      }
    },

    disabled: {
      true: {
        color: "$disabled"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const SelectDetailsImpl = SelectDetails.styleable((props, forwardedRef) => {
  const { disabled } = SelectContext.useStyledContext();
  const { name } = InternalStateContext.useStyledContext();
  const { children, ...rest } = props;

  return (
    <SelectDetails
      ref={forwardedRef}
      disabled={disabled}
      htmlFor={name}
      {...rest}>
      {children}
    </SelectDetails>
  );
});

const SelectXGroup = styled(XGroup, {
  name: "Select",
  context: SelectContext,
  animation: "$slow",

  variants: {
    size: {
      "...size": (val: any, { tokens }: any) => {
        const radiusToken = tokens.radius[val] ?? tokens.radius["$true"];
        return {
          borderRadius: radiusToken
        };
      }
    }
  } as const
});

export type SelectContainerProps = GetProps<typeof SelectContainerFrame>;

export type SelectExtraProps = {
  required?: boolean;
};

export type SelectProps = SelectContainerProps & SelectExtraProps;

export const Select = withStaticProperties(SelectContainerFrame, {
  Box: SelectGroupImpl,
  Value: SelectValueImpl,
  Icon: SelectIconWrapper,
  Details: SelectDetailsImpl,
  Label: SelectLabelImpl,
  XGroup: withStaticProperties(SelectXGroup, { Item: XGroup.Item })
});
