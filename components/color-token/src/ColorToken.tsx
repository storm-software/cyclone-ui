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

import { BodyText } from "@cyclone-ui/body-text";
import { writeClipboard } from "@cyclone-ui/copy-button/clipboard";
import { Tooltip } from "@cyclone-ui/tooltip";
import type { GetProps, TamaguiElement } from "@tamagui/core";
import { styled, View } from "@tamagui/core";
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { getColorFormats } from "./utilities";

type CopiedFormat = "hex" | "OKLCH";

const ColorTokenFrame = styled(View, {
  name: "ColorToken",
  render: "button",
  alignItems: "center",
  justifyContent: "center",
  width: "14xl",
  height: "14xl",
  padding: 0,
  borderWidth: 0,
  borderRadius: "xl",
  cursor: "pointer",
  outlineStyle: "none",
  // The subtle ring keeps dark swatches visible on a dark background.
  boxShadow: "ring-subtle focus-visible:ring-offset",
  transition: "200ms",
  scale: "1 press:0.96"
});

const ColorTokenLabel = styled(BodyText, {
  name: "ColorTokenLabel",
  render: "span",
  fontFamily: "code",
  fontWeight: "medium",
  size: "xxs",
  pointerEvents: "none",
  userSelect: "none",
  transition: "150ms",
  opacity: "0 group-hover/colorToken:1 group-focus-visible/colorToken:1",

  variants: {
    visible: {
      true: { opacity: 1 }
    }
  } as const
});

export interface ColorTokenProps extends Omit<
  GetProps<typeof ColorTokenFrame>,
  "children" | "name"
> {
  /** The token's name, such as `color.red.1`. */
  name: string;
  /** The token's CSS color: hex, `rgb()`, `hsl()`, `oklch()` or a named color. */
  value: string;
  /** A short description of the token, shown in the tooltip under its name. */
  description?: string;
  /** How long to show the copied feedback. @defaultValue 1500 */
  copiedDuration?: number;
}

type PressEvent = Parameters<NonNullable<ColorTokenProps["onPress"]>>[0];

const TOOLTIP_DELAY = { open: 300 };

/**
 * A color token swatch. Hovering shows the token's name and description in a
 * tooltip and its hex value on the swatch. Pressing copies the hex value;
 * Shift with a press (or Shift+Enter) copies the OKLCH value.
 */
export const ColorToken = forwardRef<TamaguiElement, ColorTokenProps>(
  (
    { name, value, description, copiedDuration = 1500, onPress, ...props },
    ref
  ) => {
    const formats = useMemo(
      () =>
        getColorFormats(value) ?? { hex: value, oklch: value, light: false },
      [value]
    );
    const [copied, setCopied] = useState<CopiedFormat | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const attemptRef = useRef(0);

    useEffect(
      () => () => {
        attemptRef.current++;
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      },
      []
    );

    const copy = async (format: CopiedFormat) => {
      const attempt = ++attemptRef.current;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      try {
        await writeClipboard(format === "hex" ? formats.hex : formats.oklch);
        if (attempt !== attemptRef.current) return;
        setCopied(format);
        timeoutRef.current = setTimeout(() => setCopied(null), copiedDuration);
      } catch {
        if (attempt === attemptRef.current) setCopied(null);
      }
    };

    return (
      <Tooltip delay={TOOLTIP_DELAY} placement="top">
        <Tooltip.Trigger
          asChild={true}
          disablePressTrigger={true}
          aria-expanded={undefined}
          // On web, Slot routes this to the button's click, whose event carries
          // the Shift state for both pointer and Enter/Space activation.
          onPress={(event: PressEvent) => {
            onPress?.(event);
            const shiftKey =
              (event as { shiftKey?: boolean }).shiftKey ??
              (event?.nativeEvent as { shiftKey?: boolean } | undefined)
                ?.shiftKey;
            void copy(shiftKey ? "OKLCH" : "hex");
          }}>
          <ColorTokenFrame
            ref={ref}
            group="colorToken"
            {...({ type: "button" } as object)}
            backgroundColor={value}
            aria-label={`${name}, ${formats.hex}`}
            aria-description="Press to copy the hex value, or Shift and press to copy the OKLCH value."
            data-copied={copied ?? undefined}
            {...props}>
            <ColorTokenLabel
              color={formats.light ? "black" : "white"}
              visible={copied !== null}
              aria-live="polite">
              {copied ? "Copied" : formats.hex}
            </ColorTokenLabel>
          </ColorTokenFrame>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <View
            gap="2xl"
            maxWidth="28xl"
            paddingVertical="xl"
            paddingHorizontal="2xl"
            alignItems="center">
            <View gap="sm" alignItems="center">
              <BodyText
                fontFamily="code"
                fontWeight="medium"
                size="xs"
                textAlign="center">
                {name}
              </BodyText>
              {description ? (
                <BodyText size="xs" color="subtle" textAlign="center">
                  {description}
                </BodyText>
              ) : null}
            </View>
            <View gap="lg">
              <BodyText size="xxs" color="subtle" textAlign="center">
                {copied ? `Copied ${copied} value` : "Click to copy hex"}
              </BodyText>
              {!copied && (
                <BodyText size="xxs" color="subtle" textAlign="center">
                  Shift-click for OKLCH
                </BodyText>
              )}
            </View>
          </View>
        </Tooltip.Content>
      </Tooltip>
    );
  }
);

ColorToken.displayName = "ColorToken";
