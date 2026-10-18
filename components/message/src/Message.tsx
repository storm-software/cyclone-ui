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
import { useEvent, View } from "@tamagui/core";
import type { ToastItemRenderProps, ToastRootProps } from "@tamagui/toast";
import { Toast, toast as toastApi, useToasts } from "@tamagui/toast";
import { useEffect, useMemo, useRef, useState } from "react";

const getAlertType = (type: unknown): AlertType => {
  switch (type) {
    case "error":
      return "danger";
    case "help":
      return "discovery";
    case "danger":
    case "brand":
    case "discovery":
    case "warning":
    case "info":
    case "success":
    case "positive":
    case "negative":
      return type;
    default:
      return "base";
  }
};

export type MessageProps = Partial<ToastRootProps>;

const DEFAULT_DURATION = 30 * 1000;

// Shrinks from full width to nothing over `duration`, freezing while `paused`.
const MessageTimer = ({
  duration,
  paused,
  onComplete
}: {
  duration: number;
  paused: boolean;
  onComplete: () => void;
}) => {
  const remainingRef = useRef(duration);
  const [progress, setProgress] = useState(1);
  const complete = useEvent(onComplete);

  useEffect(() => {
    if (paused) {
      return undefined;
    }

    const end = Date.now() + remainingRef.current;
    let frame = requestAnimationFrame(function tick() {
      remainingRef.current = Math.max(0, end - Date.now());
      setProgress(remainingRef.current / duration);
      if (remainingRef.current === 0) {
        complete();
      } else {
        frame = requestAnimationFrame(tick);
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [paused, duration, complete]);

  // Inset by the `container` radius (1rem) so the bar stays on the straight
  // part of the bottom edge instead of running past the rounded corners.
  return (
    <View
      position="absolute"
      bottom={0}
      left="1rem"
      right="1rem"
      height={3}
      zIndex={30}
      pointerEvents="none">
      <View
        height="100%"
        width={`${progress * 100}%`}
        backgroundColor="secondary"
      />
    </View>
  );
};

const MessageItem = ({
  handleClose,
  index,
  toast,
  duration
}: ToastItemRenderProps & { duration: number }) => {
  const { expanded } = useToasts();
  const [hovered, setHovered] = useState(false);
  const paused = hovered || expanded;

  const timeout =
    toast.type === "loading"
      ? Number.POSITIVE_INFINITY
      : (toast.duration ?? duration);

  // The library only pauses its own timer while 2+ messages are stacked, so the
  // dismissal timer is owned by `MessageTimer` instead.
  const item = useMemo(
    () => ({ ...toast, duration: Number.POSITIVE_INFINITY }),
    [toast]
  );

  return (
    <Toast.Item
      index={index}
      toast={item}
      width="100%"
      maxWidth={800}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}>
      <Alert
        type={getAlertType(toast.data?.messageType ?? toast.type)}
        hovered={paused}>
        <Alert.Icon>{toast.icon}</Alert.Icon>
        <Alert.Content>
          <Alert.Content.Heading>
            {typeof toast.title === "function" ? toast.title() : toast.title}
          </Alert.Content.Heading>
          {!!toast.description && (
            <Alert.Content.Body>
              {typeof toast.description === "function"
                ? toast.description()
                : toast.description}
            </Alert.Content.Body>
          )}
        </Alert.Content>
        <Alert.Close onPress={handleClose} />
        {Number.isFinite(timeout) && (
          <MessageTimer
            duration={timeout}
            paused={paused}
            onComplete={() => {
              toast.onAutoClose?.(toast);
              toastApi.dismiss(toast.id);
            }}
          />
        )}
      </Alert>
    </Toast.Item>
  );
};

export const Message = ({
  duration = DEFAULT_DURATION,
  ...props
}: MessageProps) => (
  <Toast
    duration={duration}
    gap={20}
    position="bottom-right"
    swipeDirection="horizontal"
    swipeThreshold={50}
    {...props}>
    <Toast.Viewport label="Messages">
      <Toast.List
        renderItem={renderProps => (
          <MessageItem {...renderProps} duration={duration} />
        )}
      />
    </Toast.Viewport>
  </Toast>
);
