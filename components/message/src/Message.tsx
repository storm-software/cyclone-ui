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

"use client";

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
    case "positive":
      return "success";
    case "negative":
      return "danger";
    case "danger":
    case "brand":
    case "discovery":
    case "warning":
    case "info":
    case "success":
      return type;
    default:
      return "base";
  }
};

export type MessageProps = Partial<ToastRootProps>;

const DEFAULT_DURATION = 25 * 1000;
const DEFAULT_ERROR_DURATION = 60 * 1000;

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
  // Web node; this package's tsconfig has no DOM lib.
  const barRef = useRef<{
    style: { setProperty: (name: string, value: string) => void };
  }>(null);
  const complete = useEvent(onComplete);

  useEffect(() => {
    if (paused) {
      return undefined;
    }

    const end = Date.now() + remainingRef.current;
    let frame = requestAnimationFrame(function tick() {
      remainingRef.current = Math.max(0, end - Date.now());
      // Written straight to the node: a per-frame `width` prop re-renders and
      // inserts a new atomic CSS rule every frame, which makes the bar stutter.
      barRef.current?.style.setProperty(
        "transform",
        `scaleX(${remainingRef.current / duration})`
      );
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
        ref={barRef as any}
        height="100%"
        width="100%"
        transformOrigin="left"
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
}: ToastItemRenderProps & { duration?: number }) => {
  const { expanded } = useToasts();
  const [hovered, setHovered] = useState(false);
  const paused = hovered || expanded;

  const type = getAlertType(toast.data?.messageType ?? toast.type);
  const timeout =
    toast.type === "loading"
      ? Number.POSITIVE_INFINITY
      : (toast.duration ??
        duration ??
        (type === "danger" ? DEFAULT_ERROR_DURATION : DEFAULT_DURATION));

  // The library only pauses its own timer while 2+ messages are stacked, so the
  // dismissal timer is owned by `MessageTimer` instead.
  const item = useMemo(
    () => ({ ...toast, duration: Number.POSITIVE_INFINITY }),
    [toast]
  );

  // Collapsed, the library offsets each card behind the front one by `gap` but
  // also scales it down from its bottom edge (by 5% per step), which on a tall
  // message eats the whole offset. Filling the wrapper (sized to the front card)
  // and lifting by the shrunk share leaves a full `gap` of each card showing.
  const stacked = !expanded && index > 0;
  const shrink = 0.05 * index;

  return (
    <Toast.Item
      index={index}
      toast={item}
      width="100%"
      maxWidth="1000px max-sm:800px"
      flex={stacked ? 1 : undefined}
      minHeight={0}
      y={stacked ? `${(-shrink / (1 - shrink)) * 100}%` : 0}
      transition="400ms"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}>
      {/* Softer than the Container's `color-shadow-resting-raised` (30%/25%
          black in dark mode), which reads as a dark halo over page content. */}
      <Alert
        type={type}
        hovered={paused}
        boxShadow="0px 1px 2px 0px #0000000a, 0px 4px 16px 0px #0000000d">
        <Alert.Icon>{toast.icon}</Alert.Icon>
        {/* Only the card edge peeks out from the stack, not clipped text. */}
        <Alert.Content opacity={stacked ? 0 : 1} transition="400ms">
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
        <Alert.Close tooltip="Dismiss" onPress={handleClose} />
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

export const Message = ({ duration, ...props }: MessageProps) => (
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
