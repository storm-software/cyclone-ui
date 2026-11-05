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

"use client";

import type { GetProps, SizeTokens } from "@tamagui/core";
import {
  createStyledContext,
  createStyledHOC,
  styled,
  withStaticProperties
} from "@tamagui/core";
import type { TooltipProps as TamaguiTooltipProps } from "@tamagui/tooltip";
import { Tooltip as TamaguiTooltip } from "@tamagui/tooltip";

export type TooltipVariant = "primary" | "secondary" | "tertiary" | "outlined";

export interface TooltipContextProps {
  size: SizeTokens;

  /**
   * The surface of the tooltip's content and arrow: `primary` fills it with
   * `primary`, `secondary` with `secondary` and a `border` border, `tertiary`
   * with `surface` and a `hairline` border, and `outlined` draws a 2px
   * `primary` border. Unset keeps the `elevated` surface with an `outline`
   * border.
   */
  variant?: TooltipVariant;
}

export const TooltipContext = createStyledContext<TooltipContextProps, "size">(
  {
    size: "12xl"
  } as TooltipContextProps,
  {
    // Not `variant`: `TooltipContentImpl` turns it into surface props.
    keys: ["size"]
  }
);

// Unlike `Button`'s `outlined`, an outlined tooltip keeps an opaque surface so
// its text stays readable over the page. The shadow belongs to `elevated`.
const tooltipSurfaces = {
  primary: {
    backgroundColor: "primary",
    borderColor: "transparent",
    borderWidth: 0
  },
  secondary: {
    backgroundColor: "secondary",
    borderColor: "border",
    borderWidth: 1
  },
  tertiary: {
    backgroundColor: "surface",
    borderColor: "hairline",
    borderWidth: 1
  },
  outlined: {
    backgroundColor: "elevated",
    borderColor: "primary",
    borderWidth: 2
  }
} as const;

const TooltipFrame = styled(TamaguiTooltip, {
  displayName: "Tooltip",
  context: TooltipContext
});

const TooltipFrameImpl = createStyledHOC(
  TooltipFrame,
  (
    {
      children,
      size = true,
      variant,
      ...props
    }: TamaguiTooltipProps & Partial<TooltipContextProps>,
    forwardedRef
  ) => {
    return (
      <TooltipContext.Provider size={size} variant={variant}>
        {/* v3's Tooltip (Popper) has no `size` prop; size lives in context. */}
        <TamaguiTooltip ref={forwardedRef} {...props}>
          {children}
        </TamaguiTooltip>
      </TooltipContext.Provider>
    );
  },
  { displayName: "Tooltip" }
);

const TooltipArrow = styled(TamaguiTooltip.Arrow, {
  displayName: "Tooltip",
  context: TooltipContext,
  backgroundColor: "elevated",
  borderWidth: 1,
  borderColor: "primary"
});

const TooltipContent = styled(
  TamaguiTooltip.Content,
  {
    displayName: "Tooltip",
    context: TooltipContext,
    transition: "200ms",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "elevated",
    paddingVertical: "3xl",
    paddingHorizontal: "2xl",
    borderWidth: 1,
    borderColor: "primary focus-visible:primary-active",
    borderRadius: "tooltip",
    x: "enter:0 exit:0",
    y: "enter:-5px exit:-5px",
    opacity: "enter:0 exit:0",
    scale: "enter:0.9 exit:0.9",
    outlineColor: "focus-visible:primary-active",
    outlineWidth: "focus-visible:3px",
    outlineOffset: "focus-visible:lg",
    outlineStyle: "focus-visible:solid",

    variants: {
      elevated: {
        true: {
          boxShadow: "0px 4px 30px #0D0C0766"
        }
      }
    } as const,

    defaultVariants: {
      elevated: true
    }
  },
  // Tamagui's `Tooltip.Content` HOC passes `backgroundColor="background"` to its
  // inner content, and `styled()` turns ours into a class that loses to it, so
  // forward it as a prop instead or the body won't match the arrow.
  { inlineProps: new Set(["backgroundColor"]) }
);

interface TooltipContentExtraProps {
  hasArrow?: boolean;
  arrowBorderColor?: GetProps<typeof TooltipContent>["borderColor"];
  /** Overrides the `Tooltip`'s `variant`. */
  variant?: TooltipVariant;
}

const TooltipContentImpl = createStyledHOC(
  TooltipContent,
  (
    {
      children,
      hasArrow = true,
      arrowBorderColor,
      variant: variantProp,
      borderColor: borderColorProp,
      backgroundColor: backgroundColorProp,
      borderWidth: borderWidthProp,
      elevated: elevatedProp,
      ...props
    }: GetProps<typeof TooltipContent> & TooltipContentExtraProps,
    forwardedRef
  ) => {
    const variant = variantProp ?? TooltipContext.useStyledContext().variant;
    const surface = variant ? tooltipSurfaces[variant] : undefined;
    const borderColor = borderColorProp ?? surface?.borderColor ?? "outline";
    // Keep the arrow on the same background as the body
    const backgroundColor =
      backgroundColorProp ?? surface?.backgroundColor ?? "elevated";
    const borderWidth = borderWidthProp ?? surface?.borderWidth;
    // A `variant` brings its own shadow, like `Button`'s.
    const elevated = elevatedProp ?? variant === undefined;

    return (
      <TooltipContent
        ref={forwardedRef}
        // Without the floating shadow, the raised variants keep `Button`'s
        // resting one.
        {...(!elevated &&
          (variant === "secondary" || variant === "tertiary") && {
            boxShadow: "color-shadow-resting-raised"
          })}
        {...props}
        elevated={elevated}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        {...(borderWidth !== undefined && { borderWidth })}>
        {hasArrow && (
          <TooltipArrow
            backgroundColor={backgroundColor}
            borderColor={arrowBorderColor || borderColor}
            {...(borderWidth !== undefined && { borderWidth })}
          />
        )}
        {children}
      </TooltipContent>
    );
  },
  { displayName: "Tooltip" }
);

export const Tooltip = withStaticProperties(TooltipFrameImpl, {
  Content: TooltipContentImpl,
  Trigger: TamaguiTooltip.Trigger
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Tooltip.Content` is undefined on the server).
 */
export { TooltipContentImpl as TooltipContent };
export const TooltipTrigger = TamaguiTooltip.Trigger;
