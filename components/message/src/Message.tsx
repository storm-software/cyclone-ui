import { ThemeableStack, YStack } from "@tamagui/stacks";
import type {
  ColorTokens,
  FontSizeTokens,
  GetProps,
  SizeTokens,
  TextProps,
  VariantSpreadExtras
} from "@tamagui/web";
import {
  View,
  createStyledContext,
  getVariable,
  styled,
  useTheme
} from "@tamagui/core";
import { LinearGradient } from "@tamagui/linear-gradient";
import {
  Toast,
  ToastViewport,
  ToastViewportProps,
  useToastState,
  useToastController
} from "@cyclone-ui/provider";
import { getFontSize } from "@tamagui/font-size";
import { ColorRole } from "@cyclone-ui/themes";
import { Button } from "@cyclone-ui/button";
import { useGetThemedIcon } from "@tamagui/helpers-tamagui";
import React from "react";
import {
  AlertCircle,
  CheckCircle,
  HelpCircle,
  XCircle,
  Info
} from "@tamagui/lucide-icons";

const defaultContextValues = {
  size: "$3" as SizeTokens,
  scaleIcon: 2,
  color: undefined,
  theme: ColorRole.BASE
} as const;

export const MessageContext = createStyledContext<{
  size: SizeTokens;
  scaleIcon: number;
  color?: ColorTokens | string;
  theme: string;
}>(defaultContextValues);

const MESSAGE_NAME = "Message";

export const MessageFrame: any = styled(Toast, {
  name: MESSAGE_NAME,
  context: MessageContext,

  overflow: "hidden",
  animation: "$slow",
  borderColor: "$primary",
  borderWidth: 2,
  marginHorizontal: "$6",
  backgroundColor: "transparent",

  focusVisibleStyle: {
    borderColor: "$borderColor",
    outlineColor: "$borderColor",
    outlineStyle: "solid",
    outlineWidth: 1
  },

  pressStyle: {
    borderColor: "$borderColor",
    outlineColor: "$borderColor",
    outlineStyle: "solid",
    outlineWidth: 1
  },

  variants: {
    unstyled: {
      false: {
        size: "$true",
        position: "relative"
      }
    },

    size: {
      "...size": (val, { tokens }) => {
        return {
          borderRadius: tokens.radius[val] ?? val
        };
      }
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1" ? true : false
  }
});

const MessageBackground = styled(YStack, {
  name: MESSAGE_NAME,
  context: MessageContext,

  fullscreen: true,
  backgroundColor: "$fg",
  animation: "$slow",
  overflow: "hidden",
  zIndex: 0,
  opacity: 0.025
});

const MessageBackgroundGradient = styled(LinearGradient, {
  name: MESSAGE_NAME,
  context: MessageContext,

  fullscreen: true,
  flexDirection: "row",
  animation: "$slow",
  overflow: "hidden",
  opacity: 0.8,
  zIndex: 5,
  colors: ["transparent", "$backgroundHover"],

  start: [0, 0],
  end: [1.0, 1.0]
});

const MessageContent = styled(YStack, {
  name: MESSAGE_NAME,
  context: MessageContext,

  flexDirection: "column",
  animation: "$slow",
  zIndex: 20,
  padding: "$6",
  margin: 0,

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        return {
          gap: tokens.space[val] ?? val,
          padding: tokens.space[val] ?? val
        };
      }
    }
  }
});

export const MessageHeader = styled(ThemeableStack, {
  name: MESSAGE_NAME,
  context: MessageContext,

  flexDirection: "row",
  paddingBottom: 0,
  zIndex: 10,
  backgroundColor: "transparent",
  alignItems: "center",

  variants: {
    unstyled: {
      false: {}
    },

    size: {
      "...size": (val, { tokens }) => {
        return {
          gap: tokens.space[val] ?? val
        };
      }
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1" ? true : false
  }
});

const MessageIconFrame = styled(View, {
  name: MESSAGE_NAME,
  context: MessageContext,

  justifyContent: "center",
  alignItems: "center",
  animation: "$slow",

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        return {
          borderRadius: tokens.radius[val] ?? val
        };
      }
    },

    backgrounded: {
      true: {
        backgroundColor: "$color4",
        padding: "$2"
      },
      false: {
        backgroundColor: "transparent",
        padding: 0
      }
    }
  } as const,

  defaultVariants: {
    backgrounded: true
  }
});

const getIconSize = (size: FontSizeTokens, scale: number) => {
  return (
    (typeof size === "number"
      ? size * 0.6
      : getFontSize(size as FontSizeTokens)) * scale
  );
};

const MessageIcon = MessageIconFrame.styleable<{
  scaleIcon?: number;
  color?: ColorTokens | string;
}>((props: any, ref: any) => {
  const { children, color: colorProp, ...rest } = props;
  const context = MessageContext.useStyledContext();
  const { size = "$true", color: contextColor, scaleIcon = 1 } = context;

  const themeColors = useTheme({
    name: context.theme
  });
  const color = getVariable(
    colorProp ||
      contextColor ||
      themeColors[contextColor as any]?.get("web") ||
      themeColors.primary?.get("web")
  );
  const iconSize = getIconSize(size as FontSizeTokens, scaleIcon);

  const getThemedIcon = useGetThemedIcon({
    size: iconSize,
    color: color as any
  });
  return (
    <MessageIconFrame ref={ref} theme={context.theme} {...rest}>
      {getThemedIcon(children)}
    </MessageIconFrame>
  );
});

export const MessageIconWrapper = MessageIcon.styleable(
  ({ children, ...props }: any, ref: any) => {
    const { theme } = MessageContext.useStyledContext();

    if (
      theme &&
      (theme.toLowerCase().includes(ColorRole.ERROR) ||
        theme.toLowerCase().includes(ColorRole.WARNING) ||
        theme.toLowerCase().includes(ColorRole.INFO) ||
        theme.toLowerCase().includes(ColorRole.HELP) ||
        theme.toLowerCase().includes(ColorRole.SUCCESS))
    ) {
      return null;
    }

    return (
      <MessageIcon ref={ref} {...props}>
        {children}
      </MessageIcon>
    );
  }
);

const MessageClose = styled(Toast.Close, {
  name: "Message",
  context: MessageContext,

  zIndex: 25,
  position: "absolute",
  top: "$1",
  right: "$1"
});

const MessageHeading = styled(Toast.Title, {
  name: "Message",
  context: MessageContext,

  theme: "base",
  fontFamily: "$heading",
  color: "$fg",
  zIndex: 20,

  variants: {
    size: {
      "...fontSize": (
        val: FontSizeTokens,
        config: VariantSpreadExtras<TextProps>
      ) => {
        if (!config.font) {
          return;
        }

        let sizeToken = 1;
        let heightToken = 1;
        if (typeof val !== "undefined" && val !== null) {
          sizeToken = (config.font.size?.[val] as any)?.val;
          heightToken = (config.font.lineHeight?.[val] as any)?.val;
        }

        const fontSize = (sizeToken ?? 1) * 2.6;
        const lineHeight = (heightToken ?? 1) * 2;
        const fontWeight = config.font.weight?.["$6"];
        const letterSpacing = config.font.letterSpacing?.[val];
        const textTransform = config.font.transform?.[val];
        const fontStyle = config.font.style?.[val];

        return {
          fontSize,
          lineHeight,
          fontWeight,
          letterSpacing,
          textTransform,
          fontStyle
        };
      }
    }
  } as const
});

const MessageBody = styled(Toast.Description, {
  name: MESSAGE_NAME,
  context: MessageContext,

  theme: "base",
  fontFamily: "$body",
  color: "$base10",
  zIndex: 20,
  padding: 0,

  variants: {
    size: {
      "...fontSize": (
        val: FontSizeTokens,
        config: VariantSpreadExtras<TextProps>
      ) => {
        if (!config.font) {
          return;
        }

        let sizeToken = 1;
        let heightToken = 1;
        if (typeof val !== "undefined" && val !== null) {
          sizeToken = (config.font.size?.[val] as any)?.val;
          heightToken = (config.font.lineHeight?.[val] as any)?.val;
        }

        const fontSize = (sizeToken ?? 1) * 1.5;
        const lineHeight = (heightToken ?? 1) * 1.3;
        const textTransform = config.font.transform?.[val];
        const fontStyle = config.font.style?.[val];

        return {
          fontSize,
          lineHeight,
          textTransform,
          fontStyle
        };
      }
    }
  } as const
});

export type MessageHeaderProps = GetProps<typeof MessageHeader>;
export type MessageHeadingProps = GetProps<typeof MessageHeading>;
export type MessageBodyProps = GetProps<typeof MessageBody>;
export type MessageIconProps = GetProps<typeof MessageIconWrapper>;

export const Message = () => {
  const current = useToastState();
  if (!current || current.isHandledNatively) {
    return null;
  }

  return (
    <MessageFrame
      key={current.id}
      group="message"
      duration={current.duration}
      theme={current.theme}
      enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
      exitStyle={{ opacity: 0, scale: 1, y: -20 }}
      y={10}
      opacity={1}
      scale={1}
      padding={0}
      animation="100ms"
      elevate={true}
      viewportName={current.viewportName}>
      <MessageBackground
        style={{
          filter: "blur(2px)"
        }}
        $group-message-hover={{
          backgroundColor: "$backgroundHover"
        }}
        theme={current.theme}
      />
      <MessageContent theme={current.theme}>
        <MessageBackgroundGradient theme={current.theme} />
        <MessageHeader theme={current.theme}>
          {current.icon ? (
            <MessageIconWrapper>{current.icon}</MessageIconWrapper>
          ) : (
            <>
              {current.theme &&
                (current.theme.toLowerCase().includes(ColorRole.ERROR) ||
                  current.theme.toLowerCase().includes(ColorRole.WARNING)) && (
                  <MessageIcon>
                    <AlertCircle />
                  </MessageIcon>
                )}
              {current.theme &&
                current.theme.toLowerCase().includes(ColorRole.INFO) && (
                  <MessageIcon>
                    <Info />
                  </MessageIcon>
                )}
              {current.theme &&
                current.theme.toLowerCase().includes(ColorRole.HELP) && (
                  <MessageIcon>
                    <HelpCircle />
                  </MessageIcon>
                )}
              {current.theme &&
                current.theme.toLowerCase().includes(ColorRole.SUCCESS) && (
                  <MessageIcon>
                    <CheckCircle />
                  </MessageIcon>
                )}
            </>
          )}
          <MessageHeading theme={current.theme}>{current.title}</MessageHeading>
        </MessageHeader>
        {!!current.message && <MessageBody>{current.message}</MessageBody>}
      </MessageContent>
      <MessageClose>
        <Button
          theme={current.theme}
          variant="ghost"
          rounded={true}
          padding="$0.75">
          <MessageIcon backgrounded={false}>
            <XCircle />
          </MessageIcon>
        </Button>
      </MessageClose>
    </MessageFrame>
  );
};

export interface MessageProps {
  theme?: string;
  icon?: React.ReactNode;
  heading?: string;
  message: string;
}

export type MessageOptions = Omit<MessageProps, "message">;

export type MessageViewportProps = Partial<ToastViewportProps> &
  Omit<ToastViewportProps, "portalToRoot">;

export const MessageViewport = ({
  portalToRoot = true,
  ...rest
}: MessageViewportProps) => {
  return <ToastViewport portalToRoot={portalToRoot} {...rest} />;
};

export interface UseMessageControllerResult {
  show: (message: string, options: MessageOptions) => void;
  showInfo: (message: string, options: MessageOptions) => void;
  showSuccess: (message: string, options: MessageOptions) => void;
  showWarning: (message: string, options: MessageOptions) => void;
  showError: (message: string, options: MessageOptions) => void;
  showHelp: (message: string, options: MessageOptions) => void;
  hide: () => void;
  nativeToast: any;
  options?: any;
}

export const useMessageController = (): UseMessageControllerResult => {
  const toast = useToastController();

  return {
    ...toast,
    show: (message: string, options: MessageOptions = {}) => {
      toast.show(getMessageHeading(message, options), {
        message,
        ...options
      });
    },
    showInfo: (
      message: string,
      options: Omit<MessageOptions, "theme"> = {}
    ) => {
      toast.show(getMessageHeading(message, options), {
        message,
        theme: ColorRole.INFO,
        ...options
      });
    },
    showSuccess: (
      message: string,
      options: Omit<MessageOptions, "theme"> = {}
    ) => {
      toast.show(getMessageHeading(message, options), {
        message,
        theme: ColorRole.SUCCESS,
        ...options
      });
    },
    showWarning: (
      message: string,
      options: Omit<MessageOptions, "theme"> = {}
    ) => {
      toast.show(getMessageHeading(message, options), {
        message,
        theme: ColorRole.WARNING,
        ...options
      });
    },
    showError: (
      message: string,
      options: Omit<MessageOptions, "theme"> = {}
    ) => {
      toast.show(getMessageHeading(message, options), {
        message,
        theme: ColorRole.ERROR,
        ...options
      });
    },
    showHelp: (
      message: string,
      options: Omit<MessageOptions, "theme"> = {}
    ) => {
      toast.show(getMessageHeading(message, options), {
        message,
        theme: ColorRole.HELP,
        ...options
      });
    }
  };
};

export const getMessageHeading = (message: string, options: MessageOptions) => {
  return options.heading
    ? options.heading
    : options.theme?.toLowerCase().includes(ColorRole.ERROR)
      ? "Error"
      : options.theme?.toLowerCase().includes(ColorRole.WARNING)
        ? "Warning"
        : options.theme?.toLowerCase().includes(ColorRole.INFO)
          ? "Information"
          : options.theme?.toLowerCase().includes(ColorRole.HELP)
            ? "Help"
            : options.theme?.toLowerCase().includes(ColorRole.SUCCESS)
              ? "Success"
              : "Message";
};
