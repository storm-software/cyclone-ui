/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { ScrollView } from "@cyclone-ui/scroll-view";
import { Adapt } from "@tamagui/adapt";
import {
  createStyledContext,
  SizeTokens,
  styled,
  withStaticProperties
} from "@tamagui/core";
import { Popover as TamaguiPopover } from "@tamagui/popover";

export type PopoverContextProps = {
  size: SizeTokens;
  shouldAdapt: true;
};

export const PopoverContext = createStyledContext<PopoverContextProps>({
  size: "$true",
  shouldAdapt: true
});

const PopoverFrame = styled(TamaguiPopover, {
  name: "Popover",
  context: PopoverContext
});

const PopoverFrameImpl = PopoverFrame.styleable<Partial<PopoverContextProps>>(
  (
    { children, size = "$true", shouldAdapt = true, ...props },
    forwardedRef
  ) => {
    return (
      <PopoverContext.Provider size={size} shouldAdapt={shouldAdapt}>
        <TamaguiPopover
          ref={forwardedRef}
          size={size}
          allowFlip={true}
          {...props}>
          {children}

          {shouldAdapt && (
            <Adapt when={"sm" as any} platform="touch">
              <TamaguiPopover.Sheet
                modal={true}
                dismissOnSnapToBottom={true}
                snapPointsMode="fit">
                <TamaguiPopover.Sheet.Frame padding="$4">
                  <Adapt.Contents />
                </TamaguiPopover.Sheet.Frame>
                <TamaguiPopover.Sheet.Overlay
                  animation="lazy"
                  enterStyle={{ opacity: 0 }}
                  exitStyle={{ opacity: 0 }}
                />
              </TamaguiPopover.Sheet>
            </Adapt>
          )}
        </TamaguiPopover>
      </PopoverContext.Provider>
    );
  },
  { staticConfig: { componentName: "Popover" } }
);

const PopoverArrow = styled(TamaguiPopover.Arrow, {
  name: "Popover",
  context: PopoverContext,

  backgroundColor: "$base3",
  borderWidth: 1,
  borderColor: "$primary",
  top: -12
});

const PopoverContent = styled(TamaguiPopover.Content, {
  name: "Popover",
  context: PopoverContext,

  flex: 1,
  backgroundColor: "$base3",
  padding: "$3",
  borderWidth: 1,
  borderColor: "$primary",
  borderRadius: "$true",
  marginHorizontal: "auto",

  enterStyle: { y: -10, opacity: 0 },
  exitStyle: { y: -10, opacity: 0 },

  animation: [
    "100ms",
    {
      opacity: {
        overshootClamping: true
      }
    }
  ],

  focusVisibleStyle: {
    outlineColor: "$accent10",
    outlineWidth: 3,
    outlineOffset: "$1.25",
    outlineStyle: "solid",
    borderColor: "$borderColorFocus"
  },

  variants: {
    elevated: {
      true: {
        shadowColor: "$shadowColor",
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 30,
        elevate: true
      }
    }
  } as const,

  defaultVariants: {
    elevated: true
  }
});

type PopoverContentExtraProps = {
  hasArrow?: boolean;
};

const PopoverContentImpl = PopoverContent.styleable<PopoverContentExtraProps>(
  ({ children, hasArrow = true, ...props }, forwardedRef) => {
    return (
      <PopoverContent ref={forwardedRef} {...props}>
        {hasArrow && <PopoverArrow />}
        {children}
      </PopoverContent>
    );
  },
  { staticConfig: { componentName: "Popover" } }
);

export const Popover = withStaticProperties(PopoverFrameImpl, {
  Content: withStaticProperties(PopoverContentImpl, {
    ScrollView,
    Close: TamaguiPopover.Close
  }),
  Anchor: TamaguiPopover.Anchor,
  Trigger: TamaguiPopover.Trigger
});
