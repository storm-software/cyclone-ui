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

import type { SizeTokens } from "@tamagui/core";
import {
  createStyledContext,
  styled,
  withStaticProperties
} from "@tamagui/core";
import { Tooltip as TamaguiTooltip } from "@tamagui/tooltip";

export interface TooltipContextProps {
  size: SizeTokens;
}

export const TooltipContext = createStyledContext<TooltipContextProps>({
  size: "$12xl"
});

const TooltipFrame = styled(TamaguiTooltip, {
  name: "Tooltip",
  context: TooltipContext
});

const TooltipFrameImpl = TooltipFrame.styleable<Partial<TooltipContextProps>>(
  ({ children, size = "$true", ...props }, forwardedRef) => {
    return (
      <TooltipContext.Provider size={size}>
        <TamaguiTooltip ref={forwardedRef} size={size} {...props}>
          {children}
        </TamaguiTooltip>
      </TooltipContext.Provider>
    );
  },
  { staticConfig: { componentName: "Tooltip" } }
);

const TooltipArrow = styled(TamaguiTooltip.Arrow, {
  name: "Tooltip",
  context: TooltipContext,

  backgroundColor: "$backgroundFloating",
  borderWidth: 2,
  borderColor: "$overlayBorder"
});

const TooltipContent = styled(TamaguiTooltip.Content, {
  name: "Tooltip",
  context: TooltipContext,

  transition: "medium",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$backgroundFloating",
  paddingVertical: "$3xl",
  paddingHorizontal: "$2xl",
  borderWidth: 2,
  borderColor: "$overlayBorder",
  borderRadius: "$tooltip",

  enterStyle: { x: 0, y: -5, opacity: 0, scale: 0.9 },
  exitStyle: { x: 0, y: -5, opacity: 0, scale: 0.9 },

  focusVisibleStyle: {
    outlineColor: "$borderFocused",
    outlineWidth: 3,
    outlineOffset: "$lg",
    outlineStyle: "solid",
    borderColor: "$borderFocused"
  },

  variants: {
    elevated: {
      true: {
        boxShadow: "0px 4px 30px $overlayBackdrop"
      }
    }
  } as const,

  defaultVariants: {
    elevated: true
  }
});

interface TooltipContentExtraProps {
  hasArrow?: boolean;
}

const TooltipContentImpl = TooltipContent.styleable<TooltipContentExtraProps>(
  ({ children, hasArrow = true, ...props }, forwardedRef) => {
    return (
      <TooltipContent ref={forwardedRef} {...props}>
        {hasArrow && <TooltipArrow />}
        {children}
      </TooltipContent>
    );
  },
  { staticConfig: { componentName: "Tooltip" } }
);

export const Tooltip = withStaticProperties(TooltipFrameImpl, {
  Content: TooltipContentImpl,
  Trigger: TamaguiTooltip.Trigger
});
