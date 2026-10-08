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

import type { TokenValue } from "@cyclone-ui/helpers";
import { getButtonSized, getSized } from "@cyclone-ui/helpers";
import type { ThemeableIconProps } from "@cyclone-ui/themeable-icon";
import { ThemeableIcon } from "@cyclone-ui/themeable-icon";
import type {
  ColorTokens,
  GetProps,
  SizeTokens,
  ThemeName,
  UnionableNumber,
  UnionableString,
  Variable
} from "@tamagui/core";
import {
  createStyledContext,
  createStyledHOC,
  styled,
  Text,
  useThemeName,
  View
} from "@tamagui/core";
import { withStaticProperties } from "@tamagui/helpers";
import { YStack } from "@tamagui/stacks";
import type { TextContextStyles, TextParentStyles } from "@tamagui/text";
import { useCallback, useMemo, useRef, useState } from "react";

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
  | "tertiary"
  | "secondary"
  | "primary"
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
  backgroundColor: "transparent hover:transparent press:transparent",
  borderWidth: "3px hover:1px press:1px",
  borderColor: "accent hover:accent press:accentActive"
} as const;

const reverseCascadeFrameStyle = {
  backgroundColor: "accent hover:transparent press:transparent",
  borderWidth: "1px hover:3px press:3px",
  borderColor: "accent hover:accent press:accentActive"
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
   * @defaultValue "5xl"
   */
  size: SizeTokens;

  /**
   * The variant style of the button
   *
   * @defaultValue "tertiary"
   */
  variant: ButtonVariant;

  /**
   * The radius of the button's border
   *
   * @defaultValue "button"
   */
  borderRadius?: BorderRadiusSizeTokens;

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

type ButtonExtraProps = TextParentStyles & {
  theme?: ThemeName | null;
} & Partial<ButtonContextProps> & {
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

export const ButtonContext = createStyledContext<
  ButtonContextProps,
  | "size"
  | "variant"
  | "borderRadius"
  | "unstyled"
  | "circular"
  | "rounded"
  | "ringed"
  | "disabled"
  | "noPadding"
  | "animate"
>(
  {
    // No `borderRadius` default: the Provider merges defaults into the value
    // and `ButtonFrame` receives it as a call-site prop, which outranks the
    // `circular` / `rounded` variants. `ButtonFrame` defaults it to "button".
    size: "10xl",
    variant: "tertiary",
    unstyled: false,
    circular: false,
    rounded: false,
    ringed: false,
    disabled: false,
    noPadding: false,
    animate: true
  } as ButtonContextProps,
  {
    keys: [
      "size",
      "variant",
      "borderRadius",
      "unstyled",
      "circular",
      "rounded",
      "ringed",
      "disabled",
      "noPadding",
      "animate"
    ]
  }
);

const getDisabledFrameStyle = (variant: ButtonVariant | undefined) => {
  if (variant === "tertiary") {
    return disabledFrameStyle("surfaceElevatedDisabled", "accentDisabled");
  } else if (variant === "secondary") {
    return disabledFrameStyle("mutedDisabled", "hairlineInactive");
  } else if (variant === "primary" || isReverseCascadeVariant(variant)) {
    return disabledFrameStyle("mutedDisabled", "accentDisabled");
  } else if (variant === "outlined" || isCascadeVariant(variant)) {
    return disabledFrameStyle("transparent", "accentDisabled");
  } else if (variant === "ghost" || variant === "link") {
    return disabledFrameStyle("transparent", "transparent");
  }

  return disabledFrameStyle(undefined, undefined);
};

const disabledFrameStyle = (
  backgroundColor: string | undefined,
  borderColor: string | undefined
) =>
  ({
    cursor: "not-allowed",
    pointerEvents: "none",
    backgroundColor,
    borderColor
  }) as const;

const ButtonFrame = styled(View, {
  displayName: "Button",
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
  borderRadius: "button",
  minWidth: "fit-content",
  paddingHorizontal: "2xl",
  boxShadow: "focus-visible:ringOffset",
  // No `press:` background colors: a press draws a `ButtonRipple` from the
  // press point instead.
  variants: {
    variant: {
      tertiary: {
        borderWidth: 1,
        borderColor: "accent hover:accentHover press:accentActive",
        backgroundColor: "surfaceElevated hover:surfaceElevatedHover"
      },

      secondary: {
        borderWidth: 0,
        borderColor: "transparent hover:transparent press:transparent",
        backgroundColor: "muted hover:mutedHover"
      },

      primary: {
        borderWidth: 0,
        borderColor: "transparent hover:transparent press:transparent",
        backgroundColor: "accent hover:accentHover"
      },

      outlined: {
        backgroundColor: "transparent hover:transparent press:transparent",
        borderWidth: 3,
        borderColor: "accent hover:accentHover press:accentActive"
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
        backgroundColor: "transparent hover:transparent press:transparent",
        borderWidth: "0px hover:0px press:0px",
        borderColor: "transparent hover:transparent press:transparent"
      },

      link: {
        backgroundColor: "transparent hover:transparent press:transparent",
        borderWidth: "0px hover:0px press:0px",
        borderColor: "transparent hover:transparent press:transparent"
      }
    },

    // Height/padding only. Avoid a `size` / `...size` variant — Tamagui (and its
    // compiler) treat those as a width+height shorthand and clip the label.
    // Styled by the `.resolve` below because the geometry depends on `circular`.
    frameSize: styled.dynamic<SizeTokens | number | boolean>(),

    // Styled by the `.resolve` below because the colors depend on `variant`.
    disabled: styled.dynamic<boolean>(),

    ringed: {
      true: {
        boxShadow: "hover:ringOffset press:ringOffset"
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
      // Keep a resting scale so the motion driver always has a transform to
      // animate from and back to. A press-only value makes motion derive the
      // missing "from" as `scale(0)` on press, and on release the transform is
      // dropped instead of animated.
      true: {
        scale: "1 press:0.96"
      },
      false: {
        scale: "1"
      }
    }
  } as const,

  defaultVariants: {
    variant: "tertiary",
    frameSize: "5xl",
    disabled: false,
    ringed: false,
    circular: false,
    rounded: false,
    noPadding: false,
    animate: true
  }
}).resolve((props, env) => {
  const frameSize = props.frameSize === true ? "10xl" : props.frameSize;
  const sized = frameSize
    ? getButtonSized(frameSize as TokenValue, env, Boolean(props.circular))
    : undefined;

  return {
    ...sized,
    // The resolved padding would otherwise override the `noPadding` variant.
    paddingHorizontal: props.noPadding ? 0 : sized?.paddingHorizontal,
    // The `circular` and `rounded` variants own the radius when set.
    borderRadius:
      props.circular || props.rounded ? undefined : sized?.borderRadius,
    // A circle keeps its square box instead of growing along the parent's
    // main axis.
    flexGrow: props.circular ? 0 : undefined,
    ...(props.disabled
      ? getDisabledFrameStyle(props.variant as ButtonVariant | undefined)
      : undefined)
  };
});

const ButtonTextFrame = styled(Text, {
  displayName: "ButtonText",
  context: ButtonContext,
  render: "span",
  transition: "400ms",
  userSelect: "none",
  borderRadius: 0,
  cursor: "pointer",
  textAlign: "center",
  textTransform: "capitalize",
  whiteSpace: "nowrap",
  fontFamily: "button",
  // v3 font classes no longer apply the font's default weight and leading.
  fontWeight: "true",
  lineHeight: "true",
  color: "hover:accent",
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: "auto",
  minWidth: "fit-content",
  zIndex: "20",
  variants: {
    variant: {
      tertiary: {
        color: "accent"
      },

      secondary: {
        color: "onAccent"
      },

      primary: {
        color: "onAccent"
      },

      outlined: {
        color: "accent"
      },

      cascade: {
        color: "accent"
      },

      "double-cascade": {
        color: "accent"
      },

      "cascade-top": {
        color: "accent"
      },

      "cascade-left": {
        color: "accent"
      },

      "cascade-bottom": {
        color: "accent"
      },

      "cascade-right": {
        color: "accent"
      },

      "diagonal-cascade": {
        color: "accent"
      },

      "double-diagonal-cascade": {
        color: "accent"
      },

      "diagonal-cascade-top": {
        color: "accent"
      },

      "diagonal-cascade-left": {
        color: "accent"
      },

      "diagonal-cascade-bottom": {
        color: "accent"
      },

      "diagonal-cascade-right": {
        color: "accent"
      },

      "reverse-cascade": {
        color: "onAccent"
      },
      "reverse-double-cascade": {
        color: "onAccent"
      },
      "reverse-cascade-top": {
        color: "onAccent"
      },
      "reverse-cascade-left": {
        color: "onAccent"
      },
      "reverse-cascade-bottom": {
        color: "onAccent"
      },
      "reverse-cascade-right": {
        color: "onAccent"
      },
      "reverse-diagonal-cascade": {
        color: "onAccent"
      },
      "reverse-double-diagonal-cascade": {
        color: "onAccent"
      },
      "reverse-diagonal-cascade-top": {
        color: "onAccent"
      },
      "reverse-diagonal-cascade-left": {
        color: "onAccent"
      },
      "reverse-diagonal-cascade-bottom": {
        color: "onAccent"
      },
      "reverse-diagonal-cascade-right": {
        color: "onAccent"
      },

      ghost: {
        color: "accent"
      },

      link: {
        color: "accent",
        textDecorationLine: "underline",
        textDecorationColor: "accent",
        textDecorationStyle: "solid"
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        pointerEvents: "none",
        color: "accentDisabled hover:accentDisabled press:accentDisabled",
        textDecoration: "none hover:none press:none"
      }
    }
  } as const,
  defaultVariants: {
    variant: "tertiary",
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
    variant === "primary" ||
    isReverseCascadeVariant(variant) ||
    (variant === "secondary" && !themeName?.endsWith("base"))
  ) {
    return (
      disabled ? "onAccentDisabled" : (color ?? "onAccent")
    ) as ThemeableIconProps["color"];
  }

  return (
    disabled ? "accentDisabled" : (color ?? "accent")
  ) as ThemeableIconProps["color"];
};

const hoverColorForVariant = (
  variant: ButtonVariant,
  disabled: boolean,
  themeName?: string | null | undefined
) => {
  if (disabled) {
    if (
      variant === "primary" ||
      (variant === "secondary" && !themeName?.endsWith("base"))
    ) {
      return "onAccentDisabled";
    }

    return "accentDisabled";
  }

  if (
    variant === "ghost" ||
    (variant === "secondary" && themeName?.endsWith("base")) ||
    isReverseCascadeVariant(variant)
  ) {
    return "accent";
  }

  if (
    variant === "primary" ||
    variant === "secondary" ||
    isCascadeVariant(variant)
  ) {
    return "onAccent";
  }

  return "accentHover";
};

const pressedColorForVariant = (
  variant: ButtonVariant,
  disabled: boolean,
  themeName?: string | null | undefined
) => {
  if (disabled) {
    if (
      variant === "primary" ||
      (variant === "secondary" && !themeName?.endsWith("base"))
    ) {
      return "onAccentDisabled";
    }

    return "accentDisabled";
  }

  if (isReverseCascadeVariant(variant)) {
    return "accentActive";
  }

  if (
    variant === "primary" ||
    variant === "secondary" ||
    isCascadeVariant(variant)
  ) {
    return "onAccentActive";
  }

  return "accentActive";
};

/** Join flat style values; later clauses win over earlier ones. */
const joinFlatValues = (...values: unknown[]) =>
  values.filter(value => value != null && value !== "").join(" ");

const ButtonText = createStyledHOC(
  ButtonTextFrame,
  (
    {
      children,
      size: _size,
      ...props
    }: GetProps<typeof ButtonTextFrame> & { size?: SizeTokens },
    forwardedRef
  ) => {
    const { variant, disabled, color } = ButtonContext.useStyledContext();
    const theme = useThemeName();
    const hoverColor = hoverColorForVariant(variant, disabled, theme);

    return (
      <ButtonTextFrame
        ref={forwardedRef}
        variant={variant}
        disabled={disabled}
        color={`${String(colorForVariant(variant, disabled, color, theme))} group-hover/button:${hoverColor}`}
        {...props}
        borderRadius={0}
        textDecorationColor={`group-hover/button:${hoverColor}`}>
        {children}
      </ButtonTextFrame>
    );
  },
  {
    displayName: "ButtonText"
  }
);

const ButtonIcon = createStyledHOC(
  View,
  (
    {
      children,
      size,
      color: colorProp,
      ...props
    }: GetProps<typeof View> & { size?: SizeTokens },
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
    const groupColor = `group-hover/button:${hoverColorForVariant(
      variant,
      disabled
    )} group-press/button:${pressedColorForVariant(variant, disabled)}`;

    return (
      <View
        ref={forwardedRef}
        zIndex="20"
        alignItems="center"
        flexGrow={0}
        flexShrink={0}>
        <ThemeableIcon
          {...props}
          disabled={disabled}
          size={adjusted}
          color={joinFlatValues(
            colorForVariant(variant, disabled, color),
            groupColor,
            // Callers extend the icon color with their own flat clauses, e.g.
            // `color="group-hover/button:accentHover"`.
            colorProp
          )}>
          {children}
        </ThemeableIcon>
      </View>
    );
  },
  {
    displayName: "ButtonIcon"
  }
);

const ButtonHoverBackground = styled(YStack, {
  displayName: "Button",
  context: ButtonContext,
  transition: "500ms",
  zIndex: "10",
  position: "absolute",
  borderColor: "accent",
  pointerEvents: "none",
  variants: {
    effect: {
      ghost: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        opacity: 0,
        backgroundColor: "mutedHover"
      },
      cascade: {
        top: 0,
        bottom: 0,
        left: "-100%",
        width: "100%",
        opacity: 1,
        backgroundColor: "accent"
      },
      "cascade-left": {
        top: 0,
        bottom: 0,
        left: "-100%",
        width: "100%",
        opacity: 1,
        backgroundColor: "accent"
      },
      "cascade-top": {
        top: "-100%",
        right: 0,
        left: 0,
        height: "100%",
        opacity: 1,
        backgroundColor: "accent"
      },
      "cascade-bottom": {
        right: 0,
        bottom: "-100%",
        left: 0,
        height: "100%",
        opacity: 1,
        backgroundColor: "accent"
      },
      "cascade-right": {
        top: 0,
        right: "-100%",
        bottom: 0,
        width: "100%",
        opacity: 1,
        backgroundColor: "accent"
      },
      "diagonal-cascade": {
        top: 0,
        bottom: 0,
        left: "-125%",
        width: "125%",
        opacity: 1,
        backgroundColor: "accent",
        clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%)"
      },
      "diagonal-cascade-left": {
        top: 0,
        bottom: 0,
        left: "-125%",
        width: "125%",
        opacity: 1,
        backgroundColor: "accent",
        clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%)"
      },
      "diagonal-cascade-top": {
        top: "-400%",
        right: 0,
        left: 0,
        height: "400%",
        opacity: 1,
        backgroundColor: "accent",
        clipPath: "polygon(0 0, 100% 0, 100% 25%, 0 100%)"
      },
      "diagonal-cascade-bottom": {
        right: 0,
        bottom: "-400%",
        left: 0,
        height: "400%",
        opacity: 1,
        backgroundColor: "accent",
        clipPath: "polygon(0 75%, 100% 0, 100% 100%, 0 100%)"
      },
      "diagonal-cascade-right": {
        top: 0,
        right: "-125%",
        bottom: 0,
        width: "125%",
        opacity: 1,
        backgroundColor: "accent",
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

/**
 * Cascade layers stay square regardless of the frame's radius — the frame's
 * `overflow: hidden` clips them to its shape. Explicit props win over the
 * `borderRadius`, `circular`, and `rounded` values inherited from context.
 */
const cascadeBackgroundShape = {
  circular: false,
  rounded: false,
  borderRadius: 0
} as const;

type ButtonPressEvent = Parameters<
  NonNullable<GetProps<typeof View>["onPress"]>
>[0];

type CascadePosition = Partial<
  Record<"top" | "right" | "bottom" | "left", number | string>
>;

/**
 * Combine a cascade layer's resting offset with the offset it slides to while
 * the button group is hovered.
 */
const getCascadePositionStyle = (
  base: CascadePosition | undefined,
  hover: CascadePosition | undefined
) => {
  const style: Record<string, string> = {};
  for (const [key, value] of Object.entries(base ?? {})) {
    style[key] = String(value);
  }
  for (const [key, value] of Object.entries(hover ?? {})) {
    style[key] = joinFlatValues(style[key], `group-hover/button:${value}`);
  }

  return style as Record<keyof CascadePosition, string>;
};

/** Removes a ripple just after its 600ms `transition` has finished. */
const RIPPLE_LIFETIME_MS = 650;

interface ButtonRippleCircle {
  /** The circle's diameter before it scales: the frame's longer side. */
  size: number;
  /** The circle's top-left corner, placing its center on the press point. */
  x: number;
  y: number;
}

const ButtonRippleFrame = styled(View, {
  displayName: "ButtonRipple",
  position: "absolute",
  pointerEvents: "none",
  borderRadius: 1000_000_000,
  // Above the ghost and cascade layers ("10" = 100), below the label and
  // icon ("20" = 200).
  zIndex: 150,
  // Mounts as a dot on the press point and grows to 2.6x the frame's longer
  // side while it fades out. Naming `enter`, as `InputSeparator` does, keeps
  // `createComponent` off its `avoidReRenders` path for the mount animation.
  transition: {
    duration: "600ms",
    easing: "ease-out",
    enter: "600ms ease-out"
  },
  // Not `enter:0`: the motion driver animates the transform string with WAAPI,
  // and a `scale(0)` matrix is singular, so the browser flips it to 2.6 halfway
  // through instead of interpolating.
  scale: "2.6 enter:0.001",
  opacity: "0 enter:0.3"
});

const ButtonRipple = createStyledHOC(
  ButtonRippleFrame,
  (props, forwardedRef) => {
    const { variant, disabled } = ButtonContext.useStyledContext();
    const theme = useThemeName();

    return (
      <ButtonRippleFrame
        ref={forwardedRef}
        // The label's hover color: a pointer press lands on the hovered
        // button, so this stays visible on hover backgrounds and cascade fills.
        backgroundColor={hoverColorForVariant(variant, disabled, theme)}
        {...props}
      />
    );
  },
  {
    displayName: "ButtonRipple"
  }
);

/** The parts of a web `click` event a ripple is placed from. */
interface ButtonRippleClick {
  currentTarget: {
    offsetWidth: number;
    offsetHeight: number;
    getBoundingClientRect?: () => {
      left: number;
      top: number;
      width: number;
      height: number;
    };
  } | null;
  clientX: number;
  clientY: number;
  detail: number;
}

/**
 * The ripple circle for a press, in the frame's own coordinates. Needs the
 * pressed DOM element (web): other press events add no ripple.
 */
const getRippleCircle = (
  event: ButtonPressEvent
): ButtonRippleCircle | undefined => {
  const { currentTarget, clientX, clientY, detail } =
    event as unknown as ButtonRippleClick;
  if (!currentTarget?.getBoundingClientRect) {
    return undefined;
  }

  const rect = currentTarget.getBoundingClientRect();
  const { offsetWidth: width, offsetHeight: height } = currentTarget;
  const size = Math.max(width, height);
  // A keyboard click (`detail` 0) has no pointer position, so its ripple
  // starts from the center. The client rect includes the press `scale`
  // transform, so the pointer offset is mapped back to the unscaled frame.
  const pointer = detail > 0;
  const centerX = pointer
    ? ((clientX - rect.left) * width) / rect.width
    : width / 2;
  const centerY = pointer
    ? ((clientY - rect.top) * height) / rect.height
    : height / 2;

  return { size, x: centerX - size / 2, y: centerY - size / 2 };
};

/** Press ripples that each remove themselves once their animation ends. */
const useButtonRipples = () => {
  const [ripples, setRipples] = useState<
    (ButtonRippleCircle & { id: number })[]
  >([]);
  const nextIdRef = useRef(0);

  const addRipple = useCallback((event: ButtonPressEvent) => {
    const circle = getRippleCircle(event);
    if (!circle) {
      return;
    }

    const id = nextIdRef.current++;
    setRipples(prev => [...prev, { ...circle, id }]);
    setTimeout(
      () => setRipples(prev => prev.filter(ripple => ripple.id !== id)),
      RIPPLE_LIFETIME_MS
    );
  }, []);

  return [ripples, addRipple] as const;
};

export type ButtonProps = ButtonExtraProps &
  Omit<GetProps<typeof ButtonFrame>, "frameSize" | "size">;

const ButtonContainerImpl = createStyledHOC(
  ButtonFrame,
  (
    {
      variant = "tertiary",
      size = "10xl",
      disabled = false,
      circular = false,
      rounded = false,
      noPadding = false,
      ringed = false,
      animate = true,
      children,
      onPress,
      onClick,
      render,
      href,
      download,
      ghostOpacity = 0.75,
      ...props
    }: GetProps<typeof ButtonFrame> & ButtonProps,
    forwardedRef
  ) => {
    const [ripples, addRipple] = useButtonRipples();

    const handlePress = useCallback(
      (event: ButtonPressEvent) => {
        if (render !== "a") {
          event.preventDefault();
        }
        event.stopPropagation();

        if (!disabled) {
          addRipple(event);
          if (onPress) {
            onPress?.(event);
          }
          if (onClick) {
            onClick?.(event);
          }
        }
      },
      [disabled, onPress, onClick, render, addRipple]
    );

    const cascadeState = isCascadeVariant(variant)
      ? {
          effect: getCascadeEffect(variant),
          reverse: isReverseCascadeVariant(variant)
        }
      : undefined;

    const frame = (
      <ButtonFrame
        group={"button"}
        ref={forwardedRef}
        render={render}
        // Tamagui v3 no longer types `href` on View; it still reaches the
        // rendered `<a>` element when `render="a"`.
        {...({ href } as object)}
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
            opacity={`group-hover/button:${disabled ? 0 : ghostOpacity}`}
          />
        )}
        {cascadeState && (
          <>
            {isDoubleCascadeVariant(cascadeState.effect) && (
              <ButtonHoverBackground
                effect={doubleCascadeEffect[cascadeState.effect]}
                {...cascadeBackgroundShape}
                backgroundColor="muted"
                {...getCascadePositionStyle(
                  cascadeState.reverse
                    ? cascadeHoverStyle[
                        doubleCascadeEffect[cascadeState.effect]
                      ]
                    : undefined,
                  disabled
                    ? undefined
                    : cascadeState.reverse
                      ? cascadeInitialStyle[
                          doubleCascadeEffect[cascadeState.effect]
                        ]
                      : { left: 0 }
                )}
                slow
              />
            )}
            <ButtonHoverBackground
              effect={
                isDoubleCascadeVariant(cascadeState.effect)
                  ? doubleCascadeEffect[cascadeState.effect]
                  : cascadeState.effect
              }
              {...cascadeBackgroundShape}
              {...getCascadePositionStyle(
                cascadeState.reverse
                  ? cascadeHoverStyle[cascadeState.effect]
                  : isDoubleCascadeVariant(cascadeState.effect)
                    ? { left: "-171.875%" }
                    : undefined,
                disabled
                  ? undefined
                  : cascadeState.reverse
                    ? cascadeInitialStyle[cascadeState.effect]
                    : cascadeHoverStyle[cascadeState.effect]
              )}
              slow={isDoubleCascadeVariant(cascadeState.effect)}
            />
          </>
        )}
        {ripples.map(({ id, size, x, y }) => (
          <ButtonRipple key={id} width={size} height={size} left={x} top={y} />
        ))}
        {children}
      </ButtonFrame>
    );

    return (
      <ButtonContext.Provider
        // Only context keys: a styled context treats every key in its value
        // as a context prop, so spreading all props swallowed `aria-*` and
        // other DOM attributes before they reached the element.
        {...(props.borderRadius === undefined
          ? null
          : { borderRadius: props.borderRadius })}
        {...(props.unstyled === undefined
          ? null
          : { unstyled: props.unstyled })}
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
    displayName: "Button"
  }
);

export const Button = withStaticProperties(ButtonContainerImpl, {
  Text: ButtonText,
  Icon: ButtonIcon
});
