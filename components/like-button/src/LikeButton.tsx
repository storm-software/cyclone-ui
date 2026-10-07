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

import type { FormControlSize } from "@cyclone-ui/helpers";
import { getFormSizeScale } from "@cyclone-ui/helpers";
import { ThumbsUp } from "@cyclone-ui/icons";
import type { TamaguiElement, ViewProps } from "@tamagui/core";
import { View } from "@tamagui/core";
import { forwardRef, useCallback, useRef, useState } from "react";

export type LikeButtonSize = FormControlSize;

export interface LikeButtonProps
  extends Omit<ViewProps, "children" | "role" | "onPress"> {
  /** Whether the content is liked. Makes the button controlled. */
  liked?: boolean;
  /** The initial liked state when uncontrolled. */
  defaultLiked?: boolean;
  /** Called with the new liked state when the button is toggled. */
  onLikedChange?: (liked: boolean) => void;
  /** Disable the button. */
  disabled?: boolean;
  /** The icon size. */
  size?: LikeButtonSize;
}

/** The medium icon size in pixels; other sizes scale from it. */
const BASE_ICON_SIZE = 24;

const CONFETTI_COUNT = 16;
const CONFETTI_SIZE = 5;
const CONFETTI_DURATION = 900;
const CONFETTI_EASING = "cubic-bezier(0.16,1,0.3,1)";

type Keyframe = Record<string, string | number>;

interface BrowserElement {
  ownerDocument: { createElement: (tag: string) => BrowserElement };
  style: Record<string, string>;
  // Missing on native views, where the button toggles without motion.
  animate?: (
    keyframes: Keyframe[],
    options: { duration: number; easing: string; fill?: string }
  ) => { onfinish: (() => void) | null };
  appendChild: (child: BrowserElement) => unknown;
  remove: () => void;
}

const prefersReducedMotion = () =>
  (
    globalThis as typeof globalThis & {
      matchMedia?: (query: string) => { matches: boolean };
    }
  ).matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

/** Grow and tip the thumb down, flick it back up faster, then settle. */
const THUMB_KEYFRAMES: Keyframe[] = [
  { transform: "scale(1) rotate(0deg)" },
  { transform: "scale(1.3) rotate(16deg)", offset: 0.35 },
  { transform: "scale(1.3) rotate(-14deg)", offset: 0.55 },
  { transform: "scale(1) rotate(0deg)" }
];
const THUMB_DURATION = 600;

/** Random number in `[min, max)`. */
const random = (min: number, max: number) => min + Math.random() * (max - min);

/**
 * Burst confetti squares out of the centre of `container`. Each square flies
 * along an evenly spaced angle (with a little jitter) and removes itself once
 * its animation finishes.
 */
const burstConfetti = (container: BrowserElement, iconSize: number) => {
  const step = (Math.PI * 2) / CONFETTI_COUNT;

  for (let index = 0; index < CONFETTI_COUNT; index++) {
    const angle = index * step + random(-step, step) * 0.3;
    const distance = iconSize * random(0.8, 1.6);
    const piece = container.ownerDocument.createElement("span");

    Object.assign(piece.style, {
      position: "absolute",
      left: `${-CONFETTI_SIZE / 2}px`,
      top: `${-CONFETTI_SIZE / 2}px`,
      width: `${CONFETTI_SIZE}px`,
      height: `${CONFETTI_SIZE}px`,
      borderRadius: "1px",
      backgroundColor: "var(--accent)"
    });
    container.appendChild(piece);

    piece.animate!(
      [
        { transform: "translate(0, 0) rotate(0deg) scale(1)", opacity: 1 },
        {
          transform: `translate(${Math.cos(angle) * distance}px, ${
            Math.sin(angle) * distance
          }px) rotate(${random(-360, 360)}deg) scale(0.3)`,
          opacity: 0
        }
      ],
      { duration: CONFETTI_DURATION, easing: CONFETTI_EASING, fill: "forwards" }
    ).onfinish = () => piece.remove();
  }
};

/** A toggle button for liking content, celebrated with a thumb pop and confetti. */
export const LikeButton = forwardRef<TamaguiElement, LikeButtonProps>(
  (
    {
      liked: likedProp,
      defaultLiked = false,
      onLikedChange,
      disabled = false,
      size = "md",
      onMouseEnter,
      onMouseLeave,
      ...props
    },
    forwardedRef
  ) => {
    const [uncontrolledLiked, setUncontrolledLiked] = useState(defaultLiked);
    // The icons are `themed` SVG icons, which resolve a single color value
    // and cannot take a `hover:` clause.
    const [hovered, setHovered] = useState(false);
    const thumbRef = useRef<TamaguiElement>(null);
    const confettiRef = useRef<TamaguiElement>(null);

    const controlled = likedProp !== undefined;
    const liked = controlled ? likedProp : uncontrolledLiked;
    const iconSize = Math.round(BASE_ICON_SIZE * getFormSizeScale(size));

    const handlePress = useCallback(() => {
      const next = !liked;
      if (!controlled) {
        setUncontrolledLiked(next);
      }
      onLikedChange?.(next);

      // ponytail: web-only (Web Animations API); native toggles without motion.
      const thumb = thumbRef.current as unknown as BrowserElement | null;
      const confetti = confettiRef.current as unknown as BrowserElement | null;
      if (!next || !thumb?.animate || !confetti || prefersReducedMotion()) {
        return;
      }

      thumb.animate(THUMB_KEYFRAMES, {
        duration: THUMB_DURATION,
        easing: "ease-out"
      });
      burstConfetti(confetti, iconSize);
    }, [controlled, iconSize, liked, onLikedChange]);

    return (
      <View
        aria-label="Like"
        {...props}
        ref={forwardedRef}
        render="button"
        transition="250ms"
        position="relative"
        alignSelf="flex-start"
        alignItems="center"
        justifyContent="center"
        padding={0}
        borderWidth={0}
        backgroundColor="transparent"
        borderRadius="control"
        outlineStyle="none"
        boxShadow="none focus-visible:ringOffset"
        opacity={disabled ? 0.5 : 1}
        cursor={disabled ? "not-allowed" : "pointer"}
        disabled={disabled}
        aria-pressed={liked}
        onMouseEnter={event => {
          setHovered(true);
          onMouseEnter?.(event);
        }}
        onMouseLeave={event => {
          setHovered(false);
          onMouseLeave?.(event);
        }}
        onPress={handlePress}>
        <View ref={thumbRef} aria-hidden={true}>
          <ThumbsUp
            size={iconSize}
            weight={liked ? "fill" : "regular"}
            color={
              hovered && !disabled ? "accentHover" : liked ? "accent" : "color"
            }
          />
        </View>
        {/* Confetti squares are appended here imperatively and remove themselves. */}
        <View
          ref={confettiRef}
          aria-hidden={true}
          position="absolute"
          top="50%"
          left="50%"
          width={0}
          height={0}
          pointerEvents="none"
        />
      </View>
    );
  }
);
