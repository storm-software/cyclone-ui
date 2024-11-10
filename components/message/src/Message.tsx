import { Alert, AlertContext } from "@cyclone-ui/alert";
import { Button } from "@cyclone-ui/button";
import { ColorThemeName } from "@cyclone-ui/colors";
import {
  Toast,
  ToastViewport,
  ToastViewportProps,
  useToastState
} from "@cyclone-ui/provider";
import { createStyledContext, styled } from "@tamagui/core";
import { X } from "@tamagui/lucide-icons";
import type { ColorTokens, SizeTokens } from "@tamagui/web";

const defaultContextValues = {
  size: "$3" as SizeTokens,
  scaleIcon: 2,
  color: undefined,
  theme: ColorThemeName.BASE
} as const;

export const MessageContext = createStyledContext<{
  size: SizeTokens;
  scaleIcon: number;
  color?: ColorTokens | string;
  theme: string;
}>(defaultContextValues);

const MESSAGE_NAME = "Message";

const MessageClose = styled(Toast.Close, {
  name: "Message",
  context: MessageContext,

  zIndex: 25,
  position: "absolute",
  top: "$1.5",
  right: "$1.5"
});

export const MessageFrame = styled(Toast, {
  name: MESSAGE_NAME,
  context: AlertContext,

  animation: "200ms",
  padding: 0,
  elevate: true,
  unstyled: true,
  marginTop: "$5",
  marginHorizontal: "$6",
  borderColor: "transparent",
  backgroundColor: "$background",

  enterStyle: { opacity: 0, scale: 0.75, y: 100 },
  exitStyle: { opacity: 0, scale: 1, y: -20 },

  hoverStyle: {
    backgroundColor: "$backgroundHover"
  },

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        return {
          borderRadius: tokens.radius[val] ?? val
        };
      }
    }
  }
});

export const Message = () => {
  const current = useToastState();
  if (!current || current.isHandledNatively) {
    return null;
  }

  return (
    <MessageFrame
      key={current.id}
      theme={current.theme}
      duration={current.duration}
      viewportName={current.viewportName}>
      <Alert theme={current.theme}>
        <Alert.Header
          theme={current.theme}
          animation="slow"
          enterStyle={{
            opacity: 0,
            y: 50
          }}>
          <Alert.Icon>{current.icon}</Alert.Icon>
          <Alert.Heading theme={current.theme}>{current.title}</Alert.Heading>
        </Alert.Header>
        {!!current.message && (
          <Alert.Body
            animation="lazy"
            enterStyle={{
              opacity: 0,
              y: 50
            }}>
            {current.message}
          </Alert.Body>
        )}
        <MessageClose>
          <Button
            theme={current.theme}
            variant="ghost"
            circular={true}
            padding="$0.75">
            <Button.Icon>
              <X size="$1.5" />
            </Button.Icon>
          </Button>
        </MessageClose>
      </Alert>
    </MessageFrame>
  );
};

export type MessageViewportProps = Partial<ToastViewportProps> &
  Omit<ToastViewportProps, "portalToRoot">;

export const MessageViewport = ({
  portalToRoot = true,
  ...rest
}: MessageViewportProps) => {
  return <ToastViewport portalToRoot={portalToRoot} {...rest} />;
};
