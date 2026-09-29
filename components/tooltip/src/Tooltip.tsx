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

import type { GetProps, SizeTokens } from "@tamagui/core";
import {
  createStyledContext,
  createStyledHOC,
  styled,
  withStaticProperties
} from "@tamagui/core";
import type { TooltipProps as TamaguiTooltipProps } from "@tamagui/tooltip";
import { Tooltip as TamaguiTooltip } from "@tamagui/tooltip";

export interface TooltipContextProps {
  size: SizeTokens;
}

export const TooltipContext = createStyledContext<TooltipContextProps, "size">(
  {
    size: "12xl"
  } as TooltipContextProps,
  {
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
      ...props
    }: TamaguiTooltipProps & Partial<TooltipContextProps>,
    forwardedRef
  ) => {
    return (
      <TooltipContext.Provider size={size}>
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
  backgroundColor: "surfaceFloating",
  borderWidth: 2,
  borderColor: "accent"
});

const TooltipContent = styled(TamaguiTooltip.Content, {
  displayName: "Tooltip",
  context: TooltipContext,
  transition: "200ms",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "surfaceFloating",
  paddingVertical: "3xl",
  paddingHorizontal: "2xl",
  borderWidth: 2,
  borderColor: "accent focus-visible:accentActive",
  borderRadius: "tooltip",
  x: "enter:0 exit:0",
  y: "enter:-5px exit:-5px",
  opacity: "enter:0 exit:0",
  scale: "enter:0.9 exit:0.9",
  outlineColor: "focus-visible:accentActive",
  outlineWidth: "focus-visible:3px",
  outlineOffset: "focus-visible:lg",
  outlineStyle: "focus-visible:solid",
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

interface TooltipContentExtraProps {
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
      ...props
    }: GetProps<typeof TooltipContent> & TooltipContentExtraProps,
    forwardedRef
  ) => {
    return (
      <TooltipContent ref={forwardedRef} {...props}>
        {hasArrow && (
          <TooltipArrow
            {...(arrowBorderColor ? { borderColor: arrowBorderColor } : null)}
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
