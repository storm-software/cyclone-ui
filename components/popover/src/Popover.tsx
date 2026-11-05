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

export type PopoverVariant = "primary" | "secondary" | "tertiary" | "outlined";

export interface PopoverContextProps {
  size: SizeTokens;

  /**
   * The surface of the popover's content, arrow and small-screen sheet:
   * `primary` fills it with `primary`, `secondary` with `secondary` and a
   * `border` border, `tertiary` with `surface` and a `hairline` border, and
   * `outlined` draws a 2px `primary` border. Unset keeps the `elevated`
   * surface with a `hairline` border.
   */
  variant?: PopoverVariant;
}

export const PopoverContext = createStyledContext<PopoverContextProps, "size">(
  {
    size: true
  } as PopoverContextProps,
  {
    // Not `variant`: `PopoverContentImpl` passes it on, so a `variant` set on
    // `Popover.Content` reaches the arrow too.
    keys: ["size"]
  }
);

// Unlike `Button`'s `outlined`, an outlined popover keeps an opaque surface so
// its content stays readable over the page. The shadow belongs to `elevated`.
const popoverSurfaces = {
  primary: {
    backgroundColor: "primary",
    borderWidth: 0
  },
  secondary: {
    backgroundColor: "secondary",
    borderColor: "border"
  },
  tertiary: {
    backgroundColor: "surface",
    borderColor: "hairline"
  },
  outlined: {
    backgroundColor: "elevated",
    borderWidth: 2,
    borderColor: "primary"
  }
} as const;

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
      ...props
    }: GetProps<typeof PopoverFrame> & PopoverFrameExtraProps,
    forwardedRef
  ) => {
    return (
      <PopoverContext.Provider size={size} variant={variant}>
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
              <Sheet
                snapPoints={["fit"]}
                snapPointsMode="fit"
                variant={variant}>
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
  context: PopoverContext,
  backgroundColor: "elevated",
  borderWidth: 1,
  borderColor: "hairline",

  variants: {
    variant: popoverSurfaces
  } as const
});

const PopoverContent = styled(TamaguiPopover.Content, {
  displayName: "Popover",
  context: PopoverContext,
  backgroundColor: "elevated",
  padding: "3xl",
  borderWidth: 1,
  borderColor: "hairline focus-visible:primary-active",
  borderRadius: "popover",
  marginHorizontal: "auto",
  y: "enter:-10px exit:-10px",
  opacity: "enter:0 exit:0",

  transition: {
    duration: "100ms",
    opacity: { duration: "100ms", spring: { overshootClamping: true } }
  },

  variants: {
    variant: {
      primary: popoverSurfaces.primary,
      secondary: {
        ...popoverSurfaces.secondary,
        borderColor: "border focus-visible:primary-active"
      },
      tertiary: {
        ...popoverSurfaces.tertiary,
        borderColor: "hairline focus-visible:primary-active"
      },
      outlined: {
        ...popoverSurfaces.outlined,
        borderColor: "primary focus-visible:primary-active"
      }
    },

    elevated: {
      true: {
        boxShadow: "0px 4px 30px #0D0C0766"
      }
    }
  } as const,

  defaultVariants: {
    elevated: true
  }
}).resolve(({ elevated, variant }) =>
  // Without the floating shadow (the default with a `variant`), the raised
  // variants keep `Button`'s resting one.
  elevated === false && (variant === "secondary" || variant === "tertiary")
    ? { boxShadow: "color-shadow-resting-raised" }
    : undefined
);

interface PopoverContentExtraProps {
  hasArrow?: boolean;
}

const PopoverContentImpl = createStyledHOC(
  PopoverContent,
  (
    {
      children,
      hasArrow = false,
      variant: variantProp,
      elevated,
      ...props
    }: GetProps<typeof PopoverContent> & PopoverContentExtraProps,
    forwardedRef
  ) => {
    const variant = variantProp ?? PopoverContext.useStyledContext().variant;

    return (
      <PopoverContent
        ref={forwardedRef}
        {...props}
        variant={variant}
        // A `variant` brings its own shadow, like `Button`'s.
        elevated={elevated ?? variant === undefined}>
        {hasArrow && <PopoverArrow variant={variant} />}
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
