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
import { ScrollView } from "@cyclone-ui/scroll-view";
import { Sheet } from "@cyclone-ui/sheet";
import type { AdaptWhen } from "@tamagui/adapt";
import { Adapt } from "@tamagui/adapt";
import type { GetProps, SizeTokens } from "@tamagui/core";
import {
  createStyledContext,
  createStyledHOC,
  styled,
  withStaticProperties
} from "@tamagui/core";
import { Popover as TamaguiPopover } from "@tamagui/popover";

export type PopoverVariant = ContainerVariant;

/**
 * The surface of the popover's content, arrow and small-screen sheet, drawn by
 * a `Container`. `Popover.Content` can also set its own. `variant` defaults to
 * `elevated` and `shadowStyle` to `elevated`; an `outlined` popover keeps an
 * opaque `elevated` backing so its content stays readable over the page.
 */
export interface PopoverContextProps extends ContainerSurfaceProps {
  size: SizeTokens;
}

export const PopoverContext = createStyledContext<PopoverContextProps, "size">(
  {
    size: true
  } as PopoverContextProps,
  {
    // Not the surface props: `PopoverContentImpl` passes them on, so a
    // surface set on `Popover.Content` reaches the arrow too.
    keys: ["size"]
  }
);

const PopoverFrame = styled(TamaguiPopover, {
  displayName: "Popover",
  context: PopoverContext
});

export interface PopoverFrameExtraProps extends Partial<PopoverContextProps> {
  shouldAdapt?: boolean;
}

const PopoverFrameImpl = createStyledHOC(
  PopoverFrame,
  (
    {
      children,
      size = true,
      shouldAdapt = true,
      variant,
      shadowStyle,
      glass,
      noise,
      accented,
      ...props
    }: GetProps<typeof PopoverFrame> & PopoverFrameExtraProps,
    forwardedRef
  ) => {
    const surface = { variant, shadowStyle, glass, noise, accented };

    return (
      <PopoverContext.Provider size={size} {...surface}>
        {/* Not `PopoverFrame`: a styled frame consumes `offset` as the CSS
            `offset` style, so it never reaches the popper. */}
        <TamaguiPopover ref={forwardedRef} allowFlip={true} {...props}>
          {children}

          {shouldAdapt && (
            // Viewport-only (no `platform`), so every small screen gets the
            // bottom sheet, not just touch devices. The app's media keys are
            // declared by the app config, which this package's typecheck
            // doesn't load.
            <Adapt when={"max-sm" as unknown as AdaptWhen}>
              <Sheet snapPoints={["fit"]} snapPointsMode="fit" {...surface}>
                <Sheet.Overlay />
                <Sheet.Container padding="5xl">
                  <Sheet.Background />
                  <Sheet.Handle />
                  <Adapt.Contents />
                </Sheet.Container>
              </Sheet>
            </Adapt>
          )}
        </TamaguiPopover>
      </PopoverContext.Provider>
    );
  },
  { displayName: "Popover" }
);

const PopoverArrow = styled(TamaguiPopover.Arrow, {
  displayName: "Popover",
  context: PopoverContext
});

// The `ContainerBackground` draws the surface. Positioned for it (Popper
// positions a wrapper, not this frame), and `isolation` makes the stacking
// context: Tamagui hands a content `zIndex` to the portal instead.
const PopoverContent = styled(TamaguiPopover.Content, {
  displayName: "Popover",
  context: PopoverContext,
  position: "relative",
  isolation: "isolate",
  backgroundColor: "transparent",
  padding: "3xl",
  borderWidth: 0,
  borderRadius: "popover",
  marginHorizontal: "auto",
  outlineStyle: "focus-visible:solid",
  outlineWidth: "focus-visible:2px",
  outlineColor: "focus-visible:primary-active",
  y: "enter:-10px exit:-10px",
  opacity: "enter:0 exit:0",

  transition: {
    duration: "100ms",
    opacity: { duration: "100ms", spring: { overshootClamping: true } }
  }
});

interface PopoverContentExtraProps extends ContainerSurfaceProps {
  hasArrow?: boolean;
}

const PopoverContentImpl = createStyledHOC(
  PopoverContent,
  (
    {
      children,
      hasArrow = false,
      variant: variantProp,
      shadowStyle: shadowStyleProp,
      glass: glassProp,
      noise: noiseProp,
      accented: accentedProp,
      backgroundColor,
      borderColor,
      borderWidth,
      ...props
    }: Omit<GetProps<typeof PopoverContent>, "variant"> &
      PopoverContentExtraProps,
    forwardedRef
  ) => {
    const context = PopoverContext.useStyledContext();
    const variant = variantProp ?? context.variant ?? "elevated";
    const shadowStyle = shadowStyleProp ?? context.shadowStyle ?? "elevated";
    const glass = glassProp ?? context.glass;
    const accented = accentedProp ?? context.accented;
    // Unlike `Button`'s `outlined`, an outlined popover keeps an opaque
    // backing so its content stays readable over the page.
    const backing =
      variant === "outlined" && !glass ? { backgroundColor: "elevated" } : null;
    // Explicit colors and widths win over the variant's, on the surface the
    // `ContainerBackground` draws and on the arrow.
    const overrides = {
      ...(backgroundColor !== undefined && { backgroundColor }),
      ...(borderColor !== undefined && { borderColor }),
      ...(borderWidth !== undefined && { borderWidth })
    };

    return (
      <PopoverContent
        ref={forwardedRef}
        boxShadow={containerShadows[shadowStyle]}
        {...backing}
        {...props}>
        <ContainerBackground
          variant={variant}
          shadowStyle={shadowStyle}
          glass={glass}
          noise={noiseProp ?? context.noise}
          accented={accented}
          {...overrides}
        />
        {hasArrow && (
          <PopoverArrow
            {...containerVariants[variant]}
            {...backing}
            {...(accented && { borderColor: "primary" })}
            {...(shadowStyle === "flat" && { borderWidth: 0 })}
            {...overrides}
          />
        )}
        {children}
      </PopoverContent>
    );
  },
  { displayName: "Popover" }
);

export const Popover = withStaticProperties(PopoverFrameImpl, {
  Content: withStaticProperties(PopoverContentImpl, {
    ScrollView,
    Close: TamaguiPopover.Close
  }),
  Anchor: TamaguiPopover.Anchor,
  Trigger: TamaguiPopover.Trigger
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Popover.ContentClose` is undefined on the server).
 */
export {
  PopoverContentImpl as PopoverContent,
  ScrollView as PopoverContentScrollView
};
export const PopoverContentClose = TamaguiPopover.Close;
export const PopoverAnchor = TamaguiPopover.Anchor;
export const PopoverTrigger = TamaguiPopover.Trigger;
