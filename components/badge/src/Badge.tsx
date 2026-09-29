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

import { HeadingExtraSmallText } from "@cyclone-ui/heading-text";
import type {
  ColorTokens,
  FontSizeTokens,
  GetProps,
  SizeTokens,
  Variable
} from "@tamagui/core";
import {
  createStyledContext,
  createStyledHOC,
  styled,
  View
} from "@tamagui/core";
import { getFontSize } from "@tamagui/font-size";
import { getFontSized } from "@tamagui/get-font-sized";
import { withStaticProperties } from "@tamagui/helpers";
import { useGetThemedIcon } from "@tamagui/helpers-tamagui";

const BadgeContext = createStyledContext(
  {
    size: true as SizeTokens | number,
    outlined: false,
    pressable: false
  },
  {
    keys: ["size", "outlined", "pressable"]
  }
);

const BADGE_NAME = "Badge";

type BadgeTokens = { size: object; space: object };
type BadgeSize = SizeTokens | number;

// v2 `"...size"` variants only ran for keys of the size token scale, so every
// other value (numbers, the `true` default) left the base styles untouched.
const isSizeToken = (val: unknown, tokens: BadgeTokens): val is string =>
  typeof val === "string" && val in tokens.size;

const getSpaceToken = (val: string, tokens: BadgeTokens) =>
  (tokens.space as Record<string, Variable<number> | undefined>)[val];

const getSpaceValue = (val: string, tokens: BadgeTokens): number =>
  Number(getSpaceToken(val, tokens)?.val ?? 0);

const BadgeFrame = styled(View, {
  displayName: BADGE_NAME,
  flexDirection: "row",
  width: "fit-content",
  backgroundColor: "accent",
  boxShadow: "none",
  borderRadius: "button",
  paddingHorizontal: "3xl",
  paddingVertical: "lg",
  justifyContent: "center",
  alignItems: "center",
  context: BadgeContext,
  variants: {
    circular: {
      true: {
        borderRadius: 1000_000_000
      }
    },

    outlined: {
      true: {
        backgroundColor: "transparent",
        borderColor: "accent",
        borderWidth: 2
      }
    },

    size: styled.dynamic<BadgeSize>((val, { tokens }) => {
      const matched = isSizeToken(val, tokens);

      return {
        paddingHorizontal: matched ? getSpaceToken(val, tokens) : undefined,
        paddingVertical: matched ? getSpaceValue(val, tokens) * 0.2 : undefined
      };
    }),

    pressable: {
      true: {
        tabIndex: 0,
        role: "button",
        backgroundColor: "hover:mutedHover",
        borderColor: "hover:accentHover",
        boxShadow: "focus-visible:ringOffset"
      }
    }
  } as const,
  defaultVariants: {
    pressable: false
  }
});

const BadgeTextFrame = styled(HeadingExtraSmallText, {
  displayName: BADGE_NAME,
  context: BadgeContext,
  color: "onAccent",
  variants: {
    // v2 `"...fontSize"`: only font size keys (including the `true` default,
    // which the font scale carries as its own `true` key) restyle the text.
    size: styled.dynamic<FontSizeTokens | number>((val, env) =>
      val === true ||
      (typeof val === "string" && !!env.font && val in env.font.size)
        ? getFontSized(val === true ? ("true" as FontSizeTokens) : val, env)
        : undefined
    )
  } as const
});

const BadgeText = createStyledHOC(
  BadgeTextFrame,
  ({ children, color, ...props }, forwardedRef) => {
    const { outlined, pressable } = BadgeContext.useStyledContext();
    const baseColor = color ?? (outlined ? "accent" : "onAccent");

    return (
      <BadgeTextFrame
        ref={forwardedRef}
        {...props}
        color={
          // A caller-authored `hover:` clause wins, like v2's caller `hoverStyle`.
          pressable &&
          typeof baseColor === "string" &&
          !baseColor.includes("hover:")
            ? `${baseColor} hover:${outlined ? "accentHover" : "onAccentHover"}`
            : baseColor
        }>
        {children}
      </BadgeTextFrame>
    );
  },
  {
    displayName: BADGE_NAME
  }
);

interface BadgeIconProps {
  color?: ColorTokens | string;
  scaleIcon?: number;
  size?: SizeTokens;
  children: React.ReactNode;
}

const BadgeIconFrame = styled(View, {
  displayName: BADGE_NAME,
  context: BadgeContext,

  variants: {
    size: styled.dynamic<BadgeSize>((val, { tokens }) => {
      const padding = isSizeToken(val, tokens)
        ? getSpaceValue(val, tokens) * 0.25
        : undefined;

      return {
        paddingHorizontal: padding,
        paddingVertical: padding
      };
    })
  }
});

const BadgeIcon = createStyledHOC(
  BadgeIconFrame,
  (props: GetProps<typeof BadgeIconFrame> & BadgeIconProps, ref) => {
    const { children, scaleIcon = 0.7, size, color, ...rest } = props;
    const chipContext = BadgeContext.useStyledContext();
    const finalSize = size || chipContext.size;

    const iconSize =
      (typeof finalSize === "number"
        ? finalSize * 0.5
        : getFontSize(finalSize as FontSizeTokens)) * scaleIcon;

    const getThemedIcon = useGetThemedIcon({
      size: iconSize,
      color: color as any
    });

    return (
      <BadgeIconFrame ref={ref} {...rest}>
        {getThemedIcon(children)}
      </BadgeIconFrame>
    );
  }
);

const ButtonComp = styled(View, {
  displayName: BADGE_NAME,
  context: BadgeContext,
  tabIndex: 0,
  role: "button",
  borderRadius: 1000_000_000,
  backgroundColor:
    "accent hover:mutedHover press:surfaceFloating focus:surfaceElevated",
  justifyContent: "center",
  alignItems: "center",
  borderColor: "hover:accentHover",
  variants: {
    size: styled.dynamic<BadgeSize>(),
    // Styled by the `.resolve` below because the offset depends on `size`.
    alignRight: styled.dynamic<boolean>(),
    alignLeft: styled.dynamic<boolean>()
  } as const
}).resolve(({ size, alignRight, alignLeft }, { tokens }) => {
  const getOffset = (factor: number) => {
    if (typeof size === "number") {
      return size * factor;
    }

    return isSizeToken(size, tokens)
      ? getSpaceValue(size, tokens) * factor
      : undefined;
  };

  return {
    x: alignLeft ? getOffset(-0.55) : alignRight ? getOffset(0.55) : undefined
  };
});

interface BadgeContextProps {
  size: BadgeSize;
  outlined: boolean;
  pressable: boolean;
}

export type BadgeProps = Omit<
  GetProps<typeof BadgeFrame>,
  keyof BadgeContextProps
> &
  Partial<BadgeContextProps>;

const BadgeFrameImpl = createStyledHOC(
  BadgeFrame,
  (
    {
      children,
      outlined = false,
      pressable = false,
      size = true,
      ...props
    }: BadgeProps,
    forwardedRef
  ) => {
    return (
      <BadgeContext.Provider
        // Only context keys: a styled context treats every key in its value
        // as a context prop, so spreading all props swallowed `aria-*` and
        // other DOM attributes before they reached the element.
        outlined={outlined}
        pressable={pressable}
        size={size}>
        <BadgeFrame
          ref={forwardedRef}
          {...props}
          outlined={outlined}
          pressable={pressable}
          size={size}>
          {children}
        </BadgeFrame>
      </BadgeContext.Provider>
    );
  },
  {
    displayName: BADGE_NAME
  }
);

export const Badge = withStaticProperties(BadgeFrameImpl, {
  Text: BadgeText,
  Icon: BadgeIcon,
  Button: ButtonComp
});
