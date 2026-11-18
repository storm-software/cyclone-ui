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

// The `@tamagui/tailwind` variant of Badge.tsx, installed in its place by
// `cyclone-ui init --style tailwind`. Keep the exports in sync.

import type { ColorThemeName } from "@cyclone-ui/state/theme";
import type { TransitionProp } from "@tamagui/core";
import type { TailwindViewElement } from "@tamagui/tailwind";
import { styled, Text, View } from "@tamagui/tailwind";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { forwardRef, useState } from "react";

const BADGE_NAME = "Badge";

/**
 * The color of the badge: one of MUI's palette names, or any cyclone-ui color theme.
 */
export type BadgeColor =
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning"
  | ColorThemeName;

export type BadgeVariant = "standard" | "dot";

export type BadgeOverlap = "rectangular" | "circular";

export type BadgeVerticalOrigin = "top" | "bottom";

export type BadgeHorizontalOrigin = "left" | "right";

export interface BadgeOrigin {
  /**
   * The edge of the wrapped element the badge is centered on vertically
   *
   * @defaultValue "top"
   */
  vertical?: BadgeVerticalOrigin;

  /**
   * The edge of the wrapped element the badge is centered on horizontally
   *
   * @defaultValue "right"
   */
  horizontal?: BadgeHorizontalOrigin;
}

// MUI's palette names, mapped to the cyclone-ui theme with the same role.
// `default` keeps the surrounding theme (`base`, unless a parent sets one).
const BADGE_COLOR_THEMES: Record<string, ColorThemeName | undefined> = {
  default: undefined,
  primary: "brand",
  secondary: "discovery",
  error: "danger",
  info: "info",
  success: "success",
  warning: "warning"
};

const getBadgeTheme = (color: BadgeColor): ColorThemeName | undefined =>
  color in BADGE_COLOR_THEMES
    ? BADGE_COLOR_THEMES[color]
    : (color as ColorThemeName);

// Hugs the wrapped element inside a stretching parent (such as a `YStack`),
// so the badge lands on the element's corner instead of the parent's edge.
const BadgeRootFrame = styled(
  View,
  "relative inline-flex w-fit shrink-0 flex-row",
  { displayName: BADGE_NAME }
);

const BadgeBadgeFrame = styled(
  View,
  "absolute z-[1] box-border flex-row flex-wrap content-center items-center justify-center rounded-[1000000000px] bg-primary",
  {
    displayName: BADGE_NAME,
    variants: {
      variant: {
        standard: "h-4xl min-w-4xl px-[6px]",
        dot: "h-sm min-w-sm px-[0px]"
      }
    },
    defaultVariants: {
      variant: "standard"
    }
  }
);

// The position and transform depend on the anchor, `overlap` and `invisible`
// together.
const getBadgePlacement = (
  vertical: BadgeVerticalOrigin,
  horizontal: BadgeHorizontalOrigin,
  overlap: BadgeOverlap,
  invisible: boolean
) => {
  // MUI's inset: circular children (avatars, icon buttons) pull the badge in
  // to where their outline passes the corner.
  const offset = overlap === "circular" ? "[14%]" : "[0px]";

  return [
    vertical === "bottom" ? `bottom-${offset}` : `top-${offset}`,
    horizontal === "left" ? `left-${offset}` : `right-${offset}`,
    // Centers the badge on the anchor corner. Transforms apply in the order
    // they are set, so translating before scaling keeps the badge centered on
    // the corner while it scales about its own center.
    horizontal === "left" ? "translate-x-[-50%]" : "translate-x-[50%]",
    vertical === "bottom" ? "translate-y-[50%]" : "translate-y-[-50%]",
    // Not 0: the motion driver animates the transform string with WAAPI, and
    // a `scale(0)` matrix is singular, so the browser would flip it halfway
    // through instead of interpolating.
    invisible ? "scale-[0.001]" : "scale-100"
  ].join(" ");
};

const BadgeText = styled(
  Text,
  // `leading-[1]` is unitless, as in CSS: a multiple of the font size.
  "font-caption text-[12px] font-medium leading-[1] text-on-primary",
  { displayName: BADGE_NAME }
);

// MUI's `transitions.duration.enteringScreen` and `leavingScreen`.
// `@tamagui/tailwind` leaves `transition` out of its props, but its runtime
// animates class changes with it like any Tamagui component.
const BADGE_SHOW_TRANSITION: { transition: TransitionProp } = {
  transition: { duration: "225ms", easing: "ease-in-out" }
};
const BADGE_HIDE_TRANSITION: { transition: TransitionProp } = {
  transition: { duration: "195ms", easing: "ease-in-out" }
};

// The default frames are `span`s, like MUI's root, so a badge can sit inside
// a `button` or text.
const SPAN = { render: "span" } as const;

// The class grammar has no `vertical-align`, so the default root sets it
// inline, before any `style` of its own.
const ALIGN_MIDDLE = { verticalAlign: "middle" } as const;

// The ring copies the badge's color and shape, and sits behind its content
// (the badge's `zIndex` makes it a stacking context).
const BADGE_PULSE_CSS = `
@media (prefers-reduced-motion: no-preference) {
  @keyframes cyclone-badge-pulse {
    from {
      transform: scale(1);
      opacity: 0.6;
    }

    to {
      transform: scale(2.4);
      opacity: 0;
    }
  }

  .cyclone-badge-pulse {
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: inherit;
    background: inherit;
    pointer-events: none;
    animation: cyclone-badge-pulse 1.5s ease-out infinite;
  }
}
`;

const isShallowEqual = <T extends object>(a: T, b: T) =>
  (Object.keys(a) as (keyof T)[]).every(key => Object.is(a[key], b[key]));

/**
 * Returns `value` while the badge is visible, and the last visible `value`
 * while it is hidden. Like MUI, a badge keeps its content, color and position
 * while it scales out, instead of showing a `0` or jumping corners.
 */
const useLastVisible = <T extends object>(value: T, invisible: boolean): T => {
  const [lastVisible, setLastVisible] = useState(value);

  // Compared by field: `value` is a new object on every render, and React
  // re-runs this render with the same props right after the update.
  if (!invisible && !isShallowEqual(lastVisible, value)) {
    setLastVisible(value);
  }

  return invisible ? lastVisible : value;
};

type BadgeRootProps = ComponentPropsWithoutRef<typeof BadgeRootFrame>;

type BadgeBadgeProps = Omit<
  ComponentPropsWithoutRef<typeof BadgeBadgeFrame>,
  "variant"
>;

export interface BadgeOwnProps {
  /**
   * The corner of the wrapped element the badge is centered on
   *
   * @defaultValue \{ vertical: "top", horizontal: "right" \}
   */
  anchorOrigin?: BadgeOrigin;

  /**
   * The content rendered within the badge
   */
  badgeContent?: ReactNode;

  /**
   * The element the badge is added to
   */
  children?: ReactNode;

  /**
   * The color of the badge
   *
   * @defaultValue "default"
   */
  color?: BadgeColor;

  /**
   * Should the badge be hidden
   *
   * @defaultValue false
   */
  invisible?: boolean;

  /**
   * The largest count to show; higher counts show as `${max}+`
   *
   * @defaultValue 99
   */
  max?: number;

  /**
   * The shape the badge overlaps
   *
   * @defaultValue "rectangular"
   */
  overlap?: BadgeOverlap;

  /**
   * Should the badge pulse, drawing attention with a ring that repeatedly
   * expands out of it and fades (web only, skipped for reduced motion)
   *
   * @defaultValue false
   */
  pulse?: boolean;

  /**
   * Should the badge show when `badgeContent` is zero
   *
   * @defaultValue false
   */
  showZero?: boolean;

  /**
   * The variant to use
   *
   * @defaultValue "standard"
   */
  variant?: BadgeVariant;

  /**
   * The components used for each slot
   */
  slots?: {
    root?: ElementType;
    badge?: ElementType;
  };

  /**
   * The props used for each slot. A slot's `className` applies after the
   * badge's own classes.
   */
  slotProps?: {
    root?: Partial<BadgeRootProps>;
    badge?: Partial<BadgeBadgeProps>;
  };
}

export interface BadgeProps
  extends Omit<BadgeRootProps, keyof BadgeOwnProps>, BadgeOwnProps {}

export const Badge = forwardRef<TailwindViewElement, BadgeProps>(
  (
    {
      anchorOrigin,
      badgeContent,
      children,
      color = "default",
      invisible: invisibleProp = false,
      max = 99,
      overlap = "rectangular",
      pulse = false,
      showZero = false,
      variant = "standard",
      slots,
      slotProps,
      className,
      ...props
    },
    forwardedRef
  ) => {
    // MUI's `useBadge`: a zero count hides the badge unless `showZero`, and
    // so does missing content, except on a dot.
    const invisible =
      invisibleProp ||
      (badgeContent === 0 && !showZero) ||
      (badgeContent == null && variant !== "dot");

    const shown = useLastVisible(
      {
        color,
        overlap,
        variant,
        vertical: anchorOrigin?.vertical ?? "top",
        horizontal: anchorOrigin?.horizontal ?? "right",
        content:
          badgeContent && Number(badgeContent) > max ? `${max}+` : badgeContent
      },
      invisible
    );

    const RootSlot: ElementType = slots?.root ?? BadgeRootFrame;
    const BadgeSlot: ElementType = slots?.badge ?? BadgeBadgeFrame;
    const content = shown.variant === "dot" ? null : shown.content;
    const { className: rootClassName, ...rootProps } = slotProps?.root ?? {};
    const rootStyle = rootProps.style ?? props.style;
    const { className: badgeClassName, ...badgeProps } = slotProps?.badge ?? {};

    return (
      <RootSlot
        {...(RootSlot === BadgeRootFrame ? SPAN : {})}
        ref={forwardedRef}
        {...props}
        {...rootProps}
        style={
          RootSlot === BadgeRootFrame ? [ALIGN_MIDDLE, rootStyle] : rootStyle
        }
        className={`${className ?? ""} ${rootClassName ?? ""}`}>
        {children}
        <BadgeSlot
          {...(BadgeSlot === BadgeBadgeFrame ? SPAN : {})}
          // The count is decoration: describe it on the wrapped element
          // instead, for example with an `aria-label`.
          aria-hidden
          theme={getBadgeTheme(shown.color)}
          variant={shown.variant}
          {...(invisible ? BADGE_HIDE_TRANSITION : BADGE_SHOW_TRANSITION)}
          {...badgeProps}
          className={`${getBadgePlacement(
            shown.vertical,
            shown.horizontal,
            shown.overlap,
            invisible
          )} ${badgeClassName ?? ""}`}>
          {/* ponytail: the pulse is CSS-only, so native renders a static badge. */}
          {pulse && process.env.TAMAGUI_TARGET === "web" && (
            <>
              <style>{BADGE_PULSE_CSS}</style>
              <span className="cyclone-badge-pulse" />
            </>
          )}
          {typeof content === "string" || typeof content === "number" ? (
            <BadgeText>{content}</BadgeText>
          ) : (
            content
          )}
        </BadgeSlot>
      </RootSlot>
    );
  }
);
