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

import { ScrollView } from "@cyclone-ui/scroll-view";
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
import { Sheet } from "@tamagui/sheet";

export interface PopoverContextProps {
  size: SizeTokens;
}

export const PopoverContext = createStyledContext<PopoverContextProps, "size">(
  {
    size: true
  } as PopoverContextProps,
  {
    keys: ["size"]
  }
);

const PopoverFrame = styled(TamaguiPopover, {
  displayName: "Popover",
  context: PopoverContext
});

interface PopoverFrameExtraProps extends Partial<PopoverContextProps> {
  shouldAdapt?: boolean;
}

const PopoverFrameImpl = createStyledHOC(
  PopoverFrame,
  (
    {
      children,
      size = true,
      shouldAdapt = true,
      ...props
    }: GetProps<typeof PopoverFrame> & PopoverFrameExtraProps,
    forwardedRef
  ) => {
    return (
      <PopoverContext.Provider size={size}>
        <PopoverFrame
          ref={forwardedRef}
          size={size}
          allowFlip={true}
          {...props}>
          {children}

          {shouldAdapt && (
            <Adapt
              // The app's media keys are declared by the app config, which
              // this package's typecheck doesn't load.
              when={"max-sm" as unknown as AdaptWhen}
              platform="touch">
              <Sheet
                modal={true}
                dismissOnSnapToBottom={true}
                snapPointsMode="fit">
                <Sheet.Container padding="5xl">
                  <Sheet.Background backgroundColor="surfaceFloating" />
                  <Adapt.Contents />
                </Sheet.Container>
                <Sheet.Overlay
                  backgroundColor="overlayBackdrop"
                  transition="500ms"
                  opacity="enter:0 exit:0"
                />
              </Sheet>
            </Adapt>
          )}
        </PopoverFrame>
      </PopoverContext.Provider>
    );
  },
  { displayName: "Popover" }
);

const PopoverArrow = styled(TamaguiPopover.Arrow, {
  displayName: "Popover",
  context: PopoverContext,
  backgroundColor: "surfaceFloating",
  borderWidth: 1,
  borderColor: "accent"
});

const PopoverContent = styled(TamaguiPopover.Content, {
  displayName: "Popover",
  context: PopoverContext,
  backgroundColor: "surfaceFloating",
  padding: "3xl",
  borderWidth: 1,
  borderColor: "overlayBorder focus-visible:accentActive",
  borderRadius: "popover",
  marginHorizontal: "auto",
  y: "enter:-10px exit:-10px",
  opacity: "enter:0 exit:0",

  transition: {
    duration: "100ms",
    opacity: { duration: "100ms", spring: { overshootClamping: true } }
  },

  variants: {
    elevated: {
      true: {
        boxShadow: "0px 4px 30px overlayBackdrop"
      }
    }
  } as const,

  defaultVariants: {
    elevated: true
  }
});

interface PopoverContentExtraProps {
  hasArrow?: boolean;
}

const PopoverContentImpl = createStyledHOC(
  PopoverContent,
  (
    {
      children,
      hasArrow = false,
      ...props
    }: GetProps<typeof PopoverContent> & PopoverContentExtraProps,
    forwardedRef
  ) => {
    return (
      <PopoverContent ref={forwardedRef} {...props}>
        {hasArrow && <PopoverArrow />}
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
