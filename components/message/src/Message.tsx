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

import { Alert } from "@cyclone-ui/alert";
import { Button } from "@cyclone-ui/button";
import { Toast, useToastState } from "@cyclone-ui/state/message";
import { styled } from "@tamagui/core";
import { X } from "@tamagui/lucide-icons-2";

const MessageClose = styled(Toast.Close, {
  name: "Alert",

  zIndex: "$20",
  position: "absolute",
  top: "$lg",
  right: "$lg"
});

const MessageFrame = styled(Toast, {
  name: "Alert",

  transition: "200ms",
  unstyled: true,

  flexGrow: 1,
  flex: 1,
  width: "100%",
  padding: 0,
  borderColor: "transparent",
  backgroundColor: "$backgroundPrimary",

  enterStyle: { opacity: 0, scale: 0.75, y: 100 },
  exitStyle: { opacity: 0, scale: 1, y: -20 },

  hoverStyle: {
    backgroundColor: "$backgroundPrimaryHover"
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
          transition="slow"
          enterStyle={{
            opacity: 0,
            y: 50
          }}>
          {data.heading && (
            <Alert.Content.Heading>{data.heading}</Alert.Content.Heading>
          )}

          {current.message && (
            <Alert.Content.Body
              transition="lazy"
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
            padding="$sm">
            <Button.Icon>
              <X size="$lg" />
            </Button.Icon>
          </Button>
        </MessageClose>
      </Alert>
    </MessageFrame>
  );
};
