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

import {
  createStyledContext,
  SizeTokens,
  styled,
  withStaticProperties
} from "@tamagui/core";
import { Tooltip as TamaguiTooltip } from "@tamagui/tooltip";

export type TooltipContextProps = {
  size: SizeTokens;
};

export const TooltipContext = createStyledContext<TooltipContextProps>({
  size: "$5"
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

  backgroundColor: "$base3",
  borderWidth: 1,
  borderColor: "$borderColor"
});

const TooltipContent = styled(TamaguiTooltip.Content, {
  name: "Tooltip",
  context: TooltipContext,

  animation: "normal",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$base3",
  paddingVertical: "$3",
  paddingHorizontal: "$2.5",
  borderWidth: 1,
  borderColor: "$borderColor",
  borderRadius: "$3",

  enterStyle: { x: 0, y: -5, opacity: 0, scale: 0.9 },
  exitStyle: { x: 0, y: -5, opacity: 0, scale: 0.9 },

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

type TooltipContentExtraProps = {
  hasArrow?: boolean;
};

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
