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

import type { AlertType } from "@cyclone-ui/alert";
import { Alert } from "@cyclone-ui/alert";
import type { ToastRootProps } from "@tamagui/toast/v2";
import { Toast } from "@tamagui/toast/v2";

const getAlertType = (type: unknown): AlertType => {
  switch (type) {
    case "error":
      return "danger";
    case "help":
      return "discovery";
    case "danger":
    case "discovery":
    case "warning":
    case "info":
    case "success":
    case "positive":
    case "negative":
      return type;
    default:
      return "primary";
  }
};

export type MessageProps = Partial<ToastRootProps>;

export const Message = (props: MessageProps) => (
  <Toast
    duration={30 * 1000}
    gap={20}
    position="bottom-right"
    swipeDirection="horizontal"
    swipeThreshold={50}
    {...props}>
    <Toast.Viewport label="Messages">
      <Toast.List
        renderItem={({ handleClose, index, toast }) => (
          <Toast.Item
            index={index}
            toast={toast}
            unstyled={true}
            width="100%"
            maxWidth={800}>
            <Alert type={getAlertType(toast.data?.messageType ?? toast.type)}>
              <Alert.Icon>{toast.icon}</Alert.Icon>
              <Alert.Content>
                <Alert.Content.Heading>
                  {typeof toast.title === "function"
                    ? toast.title()
                    : toast.title}
                </Alert.Content.Heading>
                {toast.description && (
                  <Alert.Content.Body>
                    {typeof toast.description === "function"
                      ? toast.description()
                      : toast.description}
                  </Alert.Content.Body>
                )}
              </Alert.Content>
              <Alert.Close onPress={handleClose} />
            </Alert>
          </Toast.Item>
        )}
      />
    </Toast.Viewport>
  </Toast>
);
