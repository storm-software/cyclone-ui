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

import { getButtonSized, getSized } from "@cyclone-ui/helpers";
import type { ThemeableIconProps } from "@cyclone-ui/themeable-icon";
import { ThemeableIcon } from "@cyclone-ui/themeable-icon";
import type {
  ColorTokens,
  GetProps,
  SizeTokens,
  ThemeableProps,
  UnionableNumber,
  UnionableString,
  Variable,
  VariantSpreadExtras
} from "@tamagui/core";
import {
  Text,
  View,
  createStyledContext,
  styled,
  useThemeName
} from "@tamagui/core";
import { withStaticProperties } from "@tamagui/helpers";
import { ThemeableStack } from "@tamagui/stacks";
import type { TextContextStyles, TextParentStyles } from "@tamagui/text";
import { useCallback, useMemo } from "react";
import type { GestureResponderEvent } from "react-native";

type ButtonCascadeEffect =
  | "cascade"
  | "double-cascade"
  | "cascade-top"
  | "cascade-left"
  | "cascade-bottom"
  | "cascade-right"
  | "diagonal-cascade"
  | "double-diagonal-cascade"
  | "diagonal-cascade-top"
  | "diagonal-cascade-left"
  | "diagonal-cascade-bottom"
  | "diagonal-cascade-right";

type ButtonReverseCascadeVariant = `reverse-${ButtonCascadeEffect}`;

type ButtonCascadeVariant = ButtonCascadeEffect | ButtonReverseCascadeVariant;

type ButtonVariant =
  | "surface"
  | "subtle"
  | "inverse"
  | "outlined"
  | ButtonCascadeVariant
  | "ghost"
  | "link";

const isCascadeVariant = (
  variant: ButtonVariant | undefined
): variant is ButtonCascadeVariant => variant?.includes("cascade") ?? false;

const isReverseCascadeVariant = (
  variant: ButtonVariant | undefined
): variant is ButtonReverseCascadeVariant =>
  variant?.startsWith("reverse-") ?? false;

const getCascadeEffect = (variant: ButtonCascadeVariant): ButtonCascadeEffect =>
  (isReverseCascadeVariant(variant)
    ? variant.slice("reverse-".length)
    : variant) as ButtonCascadeEffect;

const cascadeHoverStyle = {
  cascade: { left: 0 },
  "double-cascade": { left: 0 },
  "cascade-left": { left: 0 },
  "cascade-top": { top: 0 },
  "cascade-bottom": { bottom: 0 },
  "cascade-right": { right: 0 },
  "diagonal-cascade": { left: 0 },
  "double-diagonal-cascade": { left: 0 },
  "diagonal-cascade-left": { left: 0 },
  "diagonal-cascade-top": { top: 0 },
  "diagonal-cascade-bottom": { bottom: 0 },
  "diagonal-cascade-right": { right: 0 }
} as const;

const cascadeInitialStyle = {
  cascade: { left: "-100%" },
  "double-cascade": { left: "-100%" },
  "cascade-left": { left: "-100%" },
  "cascade-top": { top: "-100%" },
  "cascade-bottom": { bottom: "-100%" },
  "cascade-right": { right: "-100%" },
  "diagonal-cascade": { left: "-125%" },
  "double-diagonal-cascade": { left: "-125%" },
  "diagonal-cascade-left": { left: "-125%" },
  "diagonal-cascade-top": { top: "-400%" },
  "diagonal-cascade-bottom": { bottom: "-400%" },
  "diagonal-cascade-right": { right: "-125%" }
} as const;

const doubleCascadeEffect = {
  "double-cascade": "cascade",
  "double-diagonal-cascade": "diagonal-cascade"
} as const;

const isDoubleCascadeVariant = (
  variant: ButtonCascadeEffect
): variant is keyof typeof doubleCascadeEffect =>
  variant in doubleCascadeEffect;

const cascadeFrameStyle = {
  backgroundColor: "transparent",
  borderWidth: 3,
  borderColor: "$accent",

  hoverStyle: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "$accent"
  },

  pressStyle: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "$accentActive"
  }
} as const;

const reverseCascadeFrameStyle = {
  backgroundColor: "$accent",
  borderWidth: 1,
  borderColor: "$accent",

  hoverStyle: {
    backgroundColor: "transparent",
    borderWidth: 3,
    borderColor: "$accent"
  },

  pressStyle: {
    backgroundColor: "transparent",
    borderWidth: 3,
    borderColor: "$accentActive"
  }
} as const;

type BorderRadiusSizeTokens =
  | number
  | `$${string}`
  | `$${number}`
  | "unset"
  | `$${string}.${string}`
  | `$${string}.${number}`
  | UnionableNumber
  | UnionableString
  | Variable<any>
  | any
  | undefined;

export type ButtonContextProps = TextContextStyles & {
  /**
   * The size of the button
   *
   * @defaultValue "$5xl"
   */
  size: SizeTokens;

  /**
   * The variant style of the button
   *
   * @defaultValue "surface"
   */
  variant: ButtonVariant;

  /**
   * The radius of the button's border
   *
   * @defaultValue "$button"
   */
  borderRadius: BorderRadiusSizeTokens;

  /**
   * Override the font color of the button
   */
  color?: ColorTokens | string;

  /**
   * remove default styles
   *
   * @defaultValue false
   */
  unstyled: boolean;

  /**
   * Should the button have a circular shape
   *
   * @defaultValue false
   */
  circular: boolean;

  /**
   * Should the button's left and right sides be fully rounded
   *
   * @defaultValue false
   */
  rounded: boolean;

  /**
   * Should the button have a ringed outline
   *
   * @defaultValue false
   */
  ringed: boolean;

  /**
   * Should the button be disabled
   *
   * @defaultValue false
   */
  disabled: boolean;

  /**
   * Should the default padding be removed
   *
   * @defaultValue false
   */
  noPadding: boolean;

  /**
   * Should the pressed, scale animation be applied
   *
   * @defaultValue true
   */
  animate: boolean;
};

type ButtonExtraProps = TextParentStyles &
  ThemeableProps &
  Partial<ButtonContextProps> & {
    /**
     * An alternate way to provide an onPress handler
     */
    onClick?: null | ((event?: any) => void);

    /**
     * The href to navigate to when the button is clicked
     */
    href?: string;

    /**
     * Should the button be a download link
     */
    download?: boolean;

    /**
     * The opacity of the ghost background when hovered
     *
     * @defaultValue 0.25
     */
    ghostOpacity?: number;
  };

export const ButtonContext = createStyledContext<ButtonContextProps>({
  size: "$10xl",
  variant: "surface",
  borderRadius: "$button",
  unstyled: false,
  circular: false,
  rounded: false,
  ringed: false,
  disabled: false,
  noPadding: false,
  animate: true
});

const ButtonFrame = styled(View, {
  name: "Button",
  context: ButtonContext,
  render: "button",
  role: "button",
  userSelect: "none",
  transition: "400ms",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  display: "flex",
  flexGrow: 1,
  flexShrink: 0,
  cursor: "pointer",
  flexWrap: "nowrap",
  flexDirection: "row",
  overflow: "hidden",
  borderRadius: "$button",
  minWidth: "fit-content",
  paddingHorizontal: "$2xl",

  focusVisibleStyle: {
    boxShadow: "$ringOffset"
  },

  variants: {
    variant: {
      surface: {
        borderWidth: 1,
        borderColor: "$accent",
        backgroundColor: "$surfaceElevated",

        hoverStyle: {
          backgroundColor: "$surfaceElevatedHover",
          borderColor: "$accentHover"
        },

        pressStyle: {
          backgroundColor: "$surfaceElevatedActive",
          borderColor: "$accentActive"
        }
      },

      subtle: {
        borderWidth: 0,
        borderColor: "transparent",
        backgroundColor: "$muted",

        hoverStyle: {
          backgroundColor: "$mutedHover",
          borderColor: "transparent"
        },

        pressStyle: {
          backgroundColor: "$mutedActive",
          borderColor: "transparent"
        }
      },

      inverse: {
        borderWidth: 0,
        borderColor: "transparent",
        backgroundColor: "$accent",

        hoverStyle: {
          backgroundColor: "$accentHover",
          borderColor: "transparent"
        },

        pressStyle: {
          backgroundColor: "$accentActive",
          borderColor: "transparent"
        }
      },

      outlined: {
        backgroundColor: "transparent",
        borderWidth: 3,
        borderColor: "$accent",

        hoverStyle: {
          backgroundColor: "transparent",
          borderColor: "$accentHover"
        },

        pressStyle: {
          backgroundColor: "transparent",
          borderColor: "$accentActive"
        }
      },

      cascade: cascadeFrameStyle,
      "double-cascade": cascadeFrameStyle,
      "cascade-top": cascadeFrameStyle,
      "cascade-left": cascadeFrameStyle,
      "cascade-bottom": cascadeFrameStyle,
      "cascade-right": cascadeFrameStyle,
      "diagonal-cascade": cascadeFrameStyle,
      "double-diagonal-cascade": cascadeFrameStyle,
      "diagonal-cascade-top": cascadeFrameStyle,
      "diagonal-cascade-left": cascadeFrameStyle,
      "diagonal-cascade-bottom": cascadeFrameStyle,
      "diagonal-cascade-right": cascadeFrameStyle,
      "reverse-cascade": reverseCascadeFrameStyle,
      "reverse-double-cascade": reverseCascadeFrameStyle,
      "reverse-cascade-top": reverseCascadeFrameStyle,
      "reverse-cascade-left": reverseCascadeFrameStyle,
      "reverse-cascade-bottom": reverseCascadeFrameStyle,
      "reverse-cascade-right": reverseCascadeFrameStyle,
      "reverse-diagonal-cascade": reverseCascadeFrameStyle,
      "reverse-double-diagonal-cascade": reverseCascadeFrameStyle,
      "reverse-diagonal-cascade-top": reverseCascadeFrameStyle,
      "reverse-diagonal-cascade-left": reverseCascadeFrameStyle,
      "reverse-diagonal-cascade-bottom": reverseCascadeFrameStyle,
      "reverse-diagonal-cascade-right": reverseCascadeFrameStyle,

      ghost: {
        backgroundColor: "transparent",
        borderWidth: 0,
        borderColor: "transparent",

        hoverStyle: {
          backgroundColor: "transparent",
          borderWidth: 0,
          borderColor: "transparent"
        },

        pressStyle: {
          backgroundColor: "$surfaceElevatedActive",
          borderWidth: 0,
          borderColor: "transparent"
        }
      },

      link: {
        backgroundColor: "transparent",
        borderWidth: 0,
        borderColor: "transparent",

        hoverStyle: {
          backgroundColor: "transparent",
          borderWidth: 0,
          borderColor: "transparent"
        },

        pressStyle: {
          backgroundColor: "transparent",
          borderWidth: 0,
          borderColor: "transparent"
        }
      }
    },

    // Height/padding only. Avoid a `size` / `...size` variant — Tamagui (and its
    // compiler) treat those as a width+height shorthand and clip the label.
    frameSize: {
      ":string": getButtonSized,
      ":number": getButtonSized,
      true: (_val: boolean, extras: VariantSpreadExtras<any>) =>
        getButtonSized("$10xl", extras)
    },

    disabled: {
      true: (_val: boolean, { props }: VariantSpreadExtras<any>) => {
        const result = {
          cursor: "not-allowed",
          pointerEvents: "none"
        } as Partial<VariantSpreadExtras<any>>["props"];

        const variant = props.variant as ButtonVariant | undefined;
        if (variant === "surface") {
          result.backgroundColor = "$surfaceElevatedDisabled";
          result.borderColor = "$accentDisabled";
        } else if (variant === "subtle") {
          result.backgroundColor = "$mutedDisabled";
          result.borderColor = "$hairlineInactive";
        } else if (variant === "inverse" || isReverseCascadeVariant(variant)) {
          result.backgroundColor = "$mutedDisabled";
          result.borderColor = "$accentDisabled";
        } else if (variant === "outlined" || isCascadeVariant(variant)) {
          result.backgroundColor = "transparent";
          result.borderColor = "$accentDisabled";
        } else if (variant === "ghost" || variant === "link") {
          result.backgroundColor = "transparent";
          result.borderColor = "transparent";
        }

        return result;
      }
    },

    ringed: {
      true: {
        hoverStyle: {
          boxShadow: "$ringOffset"
        },
        pressStyle: {
          boxShadow: "$ringOffset"
        }
      }
    },

    circular: {
      true: {
        borderRadius: 1000_000_000
      }
    },

    rounded: {
      true: {
        borderRadius: 1000_000_000
      }
    },

    noPadding: {
      true: {
        padding: 0
      }
    },

    animate: {
      true: {
        pressStyle: {
          scale: 0.9
        }
      }
    }
  } as const,

  defaultVariants: {
    variant: "surface",
    frameSize: "$5xl",
    disabled: false,
    ringed: false,
    circular: false,
    rounded: false,
    noPadding: false,
    animate: false
  }
});

const ButtonTextFrame = styled(Text, {
  name: "ButtonText",
  context: ButtonContext,

  render: "span",
  transition: "400ms",
  userSelect: "none",
  borderRadius: 0,
  cursor: "pointer",
  textAlign: "center",
  textTransform: "capitalize",
  whiteSpace: "nowrap",
  fontFamily: "$button",

  hoverStyle: {
    color: "$accent"
  },

  flexGrow: 0,
  flexShrink: 0,
  flexBasis: "auto",
  minWidth: "fit-content",
  zIndex: "$20",

  variants: {
    variant: {
      surface: {
        color: "$accent"
      },

      subtle: {
        color: "$onAccent"
      },

      inverse: {
        color: "$onAccent"
      },

      outlined: {
        color: "$accent"
      },

      cascade: {
        color: "$accent"
      },

      "double-cascade": {
        color: "$accent"
      },

      "cascade-top": {
        color: "$accent"
      },

      "cascade-left": {
        color: "$accent"
      },

      "cascade-bottom": {
        color: "$accent"
      },

      "cascade-right": {
        color: "$accent"
      },

      "diagonal-cascade": {
        color: "$accent"
      },

      "double-diagonal-cascade": {
        color: "$accent"
      },

      "diagonal-cascade-top": {
        color: "$accent"
      },

      "diagonal-cascade-left": {
        color: "$accent"
      },

      "diagonal-cascade-bottom": {
        color: "$accent"
      },

      "diagonal-cascade-right": {
        color: "$accent"
      },

      "reverse-cascade": { color: "$onAccent" },
      "reverse-double-cascade": { color: "$onAccent" },
      "reverse-cascade-top": { color: "$onAccent" },
      "reverse-cascade-left": { color: "$onAccent" },
      "reverse-cascade-bottom": { color: "$onAccent" },
      "reverse-cascade-right": { color: "$onAccent" },
      "reverse-diagonal-cascade": { color: "$onAccent" },
      "reverse-double-diagonal-cascade": { color: "$onAccent" },
      "reverse-diagonal-cascade-top": { color: "$onAccent" },
      "reverse-diagonal-cascade-left": { color: "$onAccent" },
      "reverse-diagonal-cascade-bottom": { color: "$onAccent" },
      "reverse-diagonal-cascade-right": { color: "$onAccent" },

      ghost: {
        color: "$accent"
      },

      link: {
        color: "$accent",
        textDecorationLine: "underline",
        textDecorationColor: "$accent",
        textDecorationStyle: "solid"
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        pointerEvents: "none",
        color: "$accentDisabled",
        textDecoration: "none",

        hoverStyle: {
          color: "$accentDisabled",
          textDecoration: "none"
        },

        pressStyle: {
          color: "$accentDisabled",
          textDecoration: "none"
        }
      }
    }
  } as const,

  defaultVariants: {
    variant: "surface",
    disabled: false
  }
});

const colorForVariant = (
  variant: ButtonVariant,
  disabled: boolean,
  color?: ColorTokens | string,
  themeName?: string | null | undefined
): ThemeableIconProps["color"] => {
  if (
    variant === "inverse" ||
    isReverseCascadeVariant(variant) ||
    (variant === "subtle" && !themeName?.endsWith("base"))
  ) {
    return (
      disabled ? "$onAccentDisabled" : (color ?? "$onAccent")
    ) as ThemeableIconProps["color"];
  }

  return (
    disabled ? "$accentDisabled" : (color ?? "$accent")
  ) as ThemeableIconProps["color"];
};

const hoverColorForVariant = (
  variant: ButtonVariant,
  disabled: boolean,
  themeName?: string | null | undefined
) => {
  if (disabled) {
    if (
      variant === "inverse" ||
      (variant === "subtle" && !themeName?.endsWith("base"))
    ) {
      return "$onAccentDisabled";
    }

    return "$accentDisabled";
  }

  if (
    variant === "ghost" ||
    (variant === "subtle" && themeName?.endsWith("base")) ||
    isReverseCascadeVariant(variant)
  ) {
    return "$accent";
  }

  if (
    variant === "inverse" ||
    variant === "subtle" ||
    isCascadeVariant(variant)
  ) {
    return "$onAccent";
  }

  return "$accentHover";
};

const pressedColorForVariant = (
  variant: ButtonVariant,
  disabled: boolean,
  themeName?: string | null | undefined
) => {
  if (disabled) {
    if (
      variant === "inverse" ||
      (variant === "subtle" && !themeName?.endsWith("base"))
    ) {
      return "$onAccentDisabled";
    }

    return "$accentDisabled";
  }

  if (isReverseCascadeVariant(variant)) {
    return "$accentActive";
  }

  if (
    variant === "inverse" ||
    variant === "subtle" ||
    isCascadeVariant(variant)
  ) {
    return "$onAccentActive";
  }

  return "$accentActive";
};

const ButtonText = ButtonTextFrame.styleable<{ size?: SizeTokens }>(
  ({ children, size: _size, ...props }, forwardedRef) => {
    const { variant, disabled, color } = ButtonContext.useStyledContext();
    const theme = useThemeName();

    return (
      <ButtonTextFrame
        ref={forwardedRef}
        variant={variant}
        disabled={disabled}
        color={colorForVariant(variant, disabled, color, theme)}
        {...props}
        borderRadius={0}
        $group-button-hover={{
          color: hoverColorForVariant(variant, disabled, theme),
          textDecorationColor: hoverColorForVariant(variant, disabled, theme)
        }}>
        {children}
      </ButtonTextFrame>
    );
  },
  {
    staticConfig: { componentName: "ButtonText" }
  }
);

const ButtonIcon = View.styleable<{ size?: SizeTokens }>(
  (
    {
      children,
      size,
      "$group-button-hover": groupButtonHover,
      "$group-button-press": groupButtonPress,
      ...props
    },
    forwardedRef
  ) => {
    const {
      variant,
      disabled,
      color,
      size: contextSize
    } = ButtonContext.useStyledContext();
    const adjusted = useMemo(
      () => getSized(size ?? contextSize, { shift: -6 }),
      [size, contextSize]
    );

    return (
      <View
        ref={forwardedRef}
        zIndex="$20"
        alignItems="center"
        flexGrow={0}
        flexShrink={0}
        $group-button-hover={{
          color: hoverColorForVariant(variant, disabled),
          ...groupButtonHover
        }}
        $group-button-press={{
          color: pressedColorForVariant(variant, disabled),
          ...groupButtonPress
        }}>
        <ThemeableIcon
          {...props}
          disabled={disabled}
          size={adjusted}
          color={colorForVariant(variant, disabled, color)}
          $group-button-hover={{
            color: hoverColorForVariant(variant, disabled),
            ...groupButtonHover
          }}
          $group-button-press={{
            color: pressedColorForVariant(variant, disabled),
            ...groupButtonPress
          }}>
          {children}
        </ThemeableIcon>
      </View>
    );
  },
  {
    staticConfig: { componentName: "ButtonIcon" }
  }
);

const ButtonHoverBackground = styled(ThemeableStack, {
  name: "Button",
  context: ButtonContext,

  transition: "500ms",
  zIndex: "$10",
  position: "absolute",
  borderColor: "$accent",
  pointerEvents: "none",

  variants: {
    effect: {
      ghost: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        opacity: 0,
        backgroundColor: "$mutedHover"
      },
      cascade: {
        top: 0,
        bottom: 0,
        left: "-100%",
        width: "100%",
        opacity: 1,
        backgroundColor: "$accent"
      },
      "cascade-left": {
        top: 0,
        bottom: 0,
        left: "-100%",
        width: "100%",
        opacity: 1,
        backgroundColor: "$accent"
      },
      "cascade-top": {
        top: "-100%",
        right: 0,
        left: 0,
        height: "100%",
        opacity: 1,
        backgroundColor: "$accent"
      },
      "cascade-bottom": {
        right: 0,
        bottom: "-100%",
        left: 0,
        height: "100%",
        opacity: 1,
        backgroundColor: "$accent"
      },
      "cascade-right": {
        top: 0,
        right: "-100%",
        bottom: 0,
        width: "100%",
        opacity: 1,
        backgroundColor: "$accent"
      },
      "diagonal-cascade": {
        top: 0,
        bottom: 0,
        left: "-125%",
        width: "125%",
        opacity: 1,
        backgroundColor: "$accent",
        clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%)"
      },
      "diagonal-cascade-left": {
        top: 0,
        bottom: 0,
        left: "-125%",
        width: "125%",
        opacity: 1,
        backgroundColor: "$accent",
        clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%)"
      },
      "diagonal-cascade-top": {
        top: "-400%",
        right: 0,
        left: 0,
        height: "400%",
        opacity: 1,
        backgroundColor: "$accent",
        clipPath: "polygon(0 0, 100% 0, 100% 25%, 0 100%)"
      },
      "diagonal-cascade-bottom": {
        right: 0,
        bottom: "-400%",
        left: 0,
        height: "400%",
        opacity: 1,
        backgroundColor: "$accent",
        clipPath: "polygon(0 75%, 100% 0, 100% 100%, 0 100%)"
      },
      "diagonal-cascade-right": {
        top: 0,
        right: "-125%",
        bottom: 0,
        width: "125%",
        opacity: 1,
        backgroundColor: "$accent",
        clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)"
      }
    },

    slow: {
      true: {
        transition: "1s"
      }
    },

    circular: {
      true: {
        borderRadius: 1000_000_000
      }
    },

    rounded: {
      true: {
        borderRadius: 1000_000_000
      }
    }
  } as const,

  defaultVariants: {
    effect: "ghost",
    slow: false,
    circular: false,
    rounded: false
  }
});

export type ButtonProps = ButtonExtraProps &
  Omit<GetProps<typeof ButtonFrame>, "frameSize" | "size">;

const ButtonContainerImpl = ButtonFrame.styleable<ButtonProps>(
  (
    {
      variant = "surface",
      size = "$10xl",
      disabled = false,
      circular = false,
      rounded = false,
      noPadding = false,
      ringed = false,
      animate = false,
      children,
      onPress,
      onClick,
      render,
      href,
      download,
      ghostOpacity = 0.75,
      ...props
    },
    forwardedRef
  ) => {
    const handlePress = useCallback(
      (event: GestureResponderEvent) => {
        if (render !== "a") {
          event.preventDefault();
        }
        event.stopPropagation();

        if (!disabled) {
          if (onPress) {
            onPress?.(event);
          }
          if (onClick) {
            onClick?.(event);
          }
        }
      },
      [disabled, onPress, onClick, render]
    );

    const cascadeState = isCascadeVariant(variant)
      ? {
          effect: getCascadeEffect(variant),
          reverse: isReverseCascadeVariant(variant)
        }
      : undefined;

    const frame = (
      <ButtonFrame
        group={"button" as any}
        ref={forwardedRef}
        render={render}
        href={href}
        download={download}
        {...props}
        onPress={handlePress}
        frameSize={size}
        circular={circular}
        rounded={rounded}
        variant={variant}
        disabled={disabled}
        noPadding={noPadding}
        ringed={ringed}
        animate={animate}
        width={circular ? undefined : props.width}>
        {variant === "ghost" && (
          <ButtonHoverBackground
            effect="ghost"
            circular={circular}
            rounded={rounded}
            position="absolute"
            width="100%"
            $group-button-hover={{
              opacity: disabled ? 0 : ghostOpacity
            }}
          />
        )}
        {cascadeState && (
          <>
            {isDoubleCascadeVariant(cascadeState.effect) && (
              <ButtonHoverBackground
                effect={doubleCascadeEffect[cascadeState.effect]}
                circular={circular}
                rounded={rounded}
                slow
                backgroundColor="$muted"
                {...(cascadeState.reverse
                  ? cascadeHoverStyle[doubleCascadeEffect[cascadeState.effect]]
                  : {})}
                $group-button-hover={
                  disabled
                    ? {}
                    : cascadeState.reverse
                      ? cascadeInitialStyle[
                          doubleCascadeEffect[cascadeState.effect]
                        ]
                      : { left: 0 }
                }
              />
            )}
            <ButtonHoverBackground
              effect={
                isDoubleCascadeVariant(cascadeState.effect)
                  ? doubleCascadeEffect[cascadeState.effect]
                  : cascadeState.effect
              }
              circular={circular}
              rounded={rounded}
              slow={isDoubleCascadeVariant(cascadeState.effect)}
              left={
                !cascadeState.reverse &&
                isDoubleCascadeVariant(cascadeState.effect)
                  ? "-171.875%"
                  : undefined
              }
              {...(cascadeState.reverse
                ? cascadeHoverStyle[cascadeState.effect]
                : {})}
              $group-button-hover={
                disabled
                  ? {}
                  : cascadeState.reverse
                    ? cascadeInitialStyle[cascadeState.effect]
                    : cascadeHoverStyle[cascadeState.effect]
              }
              $group-button-press={{
                backgroundColor: "$accentActive"
              }}
            />
          </>
        )}
        {children}
      </ButtonFrame>
    );

    return (
      <ButtonContext.Provider
        {...props}
        variant={variant}
        size={size}
        disabled={disabled}
        circular={circular}
        rounded={rounded}
        noPadding={noPadding}
        ringed={ringed}
        animate={animate}>
        {frame}
      </ButtonContext.Provider>
    );
  },
  {
    staticConfig: { componentName: "Button" }
  }
);

export const Button = withStaticProperties(ButtonContainerImpl, {
  Text: ButtonText,
  Icon: ButtonIcon
});
