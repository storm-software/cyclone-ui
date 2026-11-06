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

import type {
  ContainerSurfaceProps,
  ContainerVariant
} from "@cyclone-ui/container";
import {
  ContainerBackground,
  containerShadows,
  containerVariants
} from "@cyclone-ui/container";
import type { GetProps, SizeTokens } from "@tamagui/core";
import {
  createStyledContext,
  createStyledHOC,
  styled,
  withStaticProperties
} from "@tamagui/core";
import { usePopperContext } from "@tamagui/popper";
import type { TooltipProps as TamaguiTooltipProps } from "@tamagui/tooltip";
import { Tooltip as TamaguiTooltip } from "@tamagui/tooltip";

export type TooltipVariant = ContainerVariant;

/**
 * The surface of the tooltip's content and arrow, drawn by a `Container`.
 * `Tooltip.Content` can also set its own. `variant` defaults to `tertiary` and
 * `shadowStyle` to `raised`; an `outlined` tooltip keeps an opaque `elevated`
 * backing so its text stays readable over the page. A tooltip is too small for
 * `Container`'s `noise`.
 */
export interface TooltipContextProps extends Omit<
  ContainerSurfaceProps,
  "noise"
> {
  size: SizeTokens;
}

export const TooltipContext = createStyledContext<TooltipContextProps, "size">(
  {
    size: "12xl"
  } as TooltipContextProps,
  {
    // Not the surface props: `TooltipContentImpl` turns them into a
    // `ContainerBackground` and the arrow's colors.
    keys: ["size"]
  }
);

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
      shadowStyle,
      glass,
      accented,
      ...props
    }: TamaguiTooltipProps & Partial<TooltipContextProps>,
    forwardedRef
  ) => {
    return (
      <TooltipContext.Provider
        size={size}
        variant={variant}
        shadowStyle={shadowStyle}
        glass={glass}
        accented={accented}>
        {/* v3's Tooltip (Popper) has no `size` prop; size lives in context. */}
        <TamaguiTooltip ref={forwardedRef} {...props}>
          {children}
        </TamaguiTooltip>
      </TooltipContext.Provider>
    );
  },
  { displayName: "Tooltip" }
);

// The rotated arrow is centered on the box edge, so the content border draws
// across its base. Shift it inward by the border width; its fill covers the line.
const TooltipArrow = (props: GetProps<typeof TamaguiTooltip.Arrow>) => {
  const { placement } = usePopperContext("");
  const borderWidth =
    typeof props.borderWidth === "number" ? props.borderWidth : 0;
  const side = placement?.split("-")[0];
  const inset = !borderWidth
    ? undefined
    : side === "top"
      ? { marginBottom: borderWidth }
      : side === "left"
        ? { marginRight: borderWidth }
        : side === "right"
          ? { marginLeft: borderWidth }
          : { marginTop: borderWidth };

  return <TamaguiTooltip.Arrow {...props} {...inset} />;
};

// The `ContainerBackground` draws the surface. Positioned for it (Popper
// positions a wrapper, not this frame), and `isolation` makes the stacking
// context: Tamagui hands a content `zIndex` to the portal instead.
// No `context: TooltipContext`: it would merge the context's `size` into the
// content's props, and v3's content has no `size`, so it reached the DOM.
const TooltipContent = styled(
  TamaguiTooltip.Content,
  {
    displayName: "Tooltip",
    position: "relative",
    isolation: "isolate",
    transition: "200ms",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    paddingVertical: "3xl",
    paddingHorizontal: "2xl",
    borderWidth: 0,
    borderRadius: "tooltip",
    x: "enter:0 exit:0",
    y: "enter:-5px exit:-5px",
    opacity: "enter:0 exit:0",
    scale: "enter:0.9 exit:0.9",
    outlineColor: "focus-visible:primary-active",
    outlineWidth: "focus-visible:3px",
    outlineOffset: "focus-visible:lg",
    outlineStyle: "focus-visible:solid"
  },
  // Tamagui's `Tooltip.Content` HOC passes `backgroundColor="background"` to its
  // inner content, and `styled()` turns ours into a class that loses to it, so
  // forward it as a prop instead or the content shows Tamagui's background.
  { inlineProps: new Set(["backgroundColor"]) }
);

interface TooltipContentExtraProps extends Omit<
  ContainerSurfaceProps,
  "noise"
> {
  hasArrow?: boolean;
  arrowBorderColor?: GetProps<typeof TooltipContent>["borderColor"];
}

const TooltipContentImpl = createStyledHOC(
  TooltipContent,
  (
    {
      children,
      hasArrow = true,
      arrowBorderColor,
      variant: variantProp,
      shadowStyle: shadowStyleProp,
      glass: glassProp,
      accented: accentedProp,
      backgroundColor: backgroundColorProp,
      borderColor,
      borderWidth,
      ...props
    }: Omit<GetProps<typeof TooltipContent>, "variant"> &
      TooltipContentExtraProps,
    forwardedRef
  ) => {
    const context = TooltipContext.useStyledContext();
    const variant = variantProp ?? context.variant ?? "tertiary";
    const shadowStyle = shadowStyleProp ?? context.shadowStyle ?? "raised";
    const glass = glassProp ?? context.glass;
    const accented = accentedProp ?? context.accented;
    // Unlike `Button`'s `outlined`, an outlined tooltip keeps an opaque
    // backing so its text stays readable over the page.
    const backgroundColor =
      variant === "outlined" && !glass ? "elevated" : "transparent";
    // Explicit colors and widths win over the variant's, on the surface the
    // `ContainerBackground` draws and on the arrow.
    const overrides = {
      ...(backgroundColorProp !== undefined && {
        backgroundColor: backgroundColorProp
      }),
      ...(borderColor !== undefined && { borderColor }),
      ...(borderWidth !== undefined && { borderWidth })
    };

    return (
      <TooltipContent
        ref={forwardedRef}
        boxShadow={containerShadows[shadowStyle]}
        backgroundColor={backgroundColor}
        {...props}>
        <ContainerBackground
          variant={variant}
          shadowStyle={shadowStyle}
          glass={glass}
          accented={accented}
          {...overrides}
        />
        {hasArrow && (
          <TooltipArrow
            {...containerVariants[variant]}
            {...(backgroundColor !== "transparent" && { backgroundColor })}
            {...(accented && { borderColor: "primary" })}
            {...(shadowStyle === "flat" && { borderWidth: 0 })}
            {...overrides}
            {...(arrowBorderColor && { borderColor: arrowBorderColor })}
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
