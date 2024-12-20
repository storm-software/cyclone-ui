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

import { Alert } from "@cyclone-ui/alert";
import { Button } from "@cyclone-ui/button";
import { Toast, useToastState } from "@cyclone-ui/message-state";
import { styled } from "@tamagui/core";
import { X } from "@tamagui/lucide-icons";

const MessageClose = styled(Toast.Close, {
  name: "Alert",

  zIndex: 25,
  position: "absolute",
  top: "$1.5",
  right: "$1.5"
});

const MessageFrame = styled(Toast, {
  name: "Alert",

  animation: "200ms",
  unstyled: true,

  flexGrow: 1,
  flex: 1,
  width: "100%",
  padding: 0,
  borderColor: "transparent",
  backgroundColor: "$background",

  enterStyle: { opacity: 0, scale: 0.75, y: 100 },
  exitStyle: { opacity: 0, scale: 1, y: -20 },

  hoverStyle: {
    backgroundColor: "$backgroundHover"
  }
});

export const Message = () => {
  const current = useToastState();
  if (!current || !current.customData || current.isHandledNatively) {
    return null;
  }

  const data = current.customData;

  return (
    <MessageFrame
      id={current.id}
      key={current.id}
      theme={data.theme}
      type="foreground"
      duration={30 * 1000}
      viewportName="messages">
      <Alert theme={data.theme}>
        <Alert.Icon>{current.icon}</Alert.Icon>

        <Alert.Content
          animation="slow"
          enterStyle={{
            opacity: 0,
            y: 50
          }}>
          {data.heading && (
            <Alert.Content.Heading>{data.heading}</Alert.Content.Heading>
          )}

          {current.message && (
            <Alert.Content.Body
              animation="lazy"
              enterStyle={{
                opacity: 0,
                y: 50
              }}>
              {current.message}
            </Alert.Content.Body>
          )}
        </Alert.Content>

        <MessageClose asChild={true}>
          <Button
            theme={data.theme}
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
