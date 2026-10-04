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

import type { ColorThemeName } from "@cyclone-ui/state/theme";
import type { GetProps } from "@tamagui/core";
import { createStyledHOC, styled, Text, View } from "@tamagui/core";
import type { ElementType, ReactNode } from "react";
import { useState } from "react";

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

const BadgeRootFrame = styled(View, {
  displayName: BADGE_NAME,
  // A `span`, like MUI's root, so a badge can sit inside a `button` or text.
  render: "span",
  position: "relative",
  display: "inline-flex",
  flexDirection: "row",
  verticalAlign: "middle",
  flexShrink: 0,
  // Hugs the wrapped element inside a stretching parent (such as a `YStack`),
  // so the badge lands on the element's corner instead of the parent's edge.
  width: "fit-content"
});

const BadgeBadgeFrame = styled(View, {
  displayName: BADGE_NAME,
  render: "span",
  position: "absolute",
  zIndex: 1,
  flexDirection: "row",
  flexWrap: "wrap",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  borderRadius: 1000_000_000,
  backgroundColor: "accent",

  variants: {
    variant: {
      standard: {
        height: "4xl",
        minWidth: "4xl",
        paddingHorizontal: 6
      },
      dot: {
        height: "sm",
        minWidth: "sm",
        paddingHorizontal: 0
      }
    },

    // Styled by the `.resolve` below because the position and transform
    // depend on the anchor, `overlap` and `invisible` together.
    vertical: styled.dynamic<BadgeVerticalOrigin>(),
    horizontal: styled.dynamic<BadgeHorizontalOrigin>(),
    overlap: styled.dynamic<BadgeOverlap>(),
    invisible: styled.dynamic<boolean>()
  } as const,
  defaultVariants: {
    variant: "standard"
  }
}).resolve(({ vertical, horizontal, overlap, invisible }) => {
  // MUI's inset: circular children (avatars, icon buttons) pull the badge in
  // to where their outline passes the corner.
  const offset = overlap === "circular" ? "14%" : 0;

  return {
    top: vertical === "bottom" ? undefined : offset,
    bottom: vertical === "bottom" ? offset : undefined,
    left: horizontal === "left" ? offset : undefined,
    right: horizontal === "left" ? undefined : offset,
    // Centers the badge on the anchor corner. Transforms apply in the order
    // they are set, so translating before scaling keeps the badge centered on
    // the corner while it scales about its own center.
    x: horizontal === "left" ? "-50%" : "50%",
    y: vertical === "bottom" ? "50%" : "-50%",
    // Not 0: the motion driver animates the transform string with WAAPI, and
    // a `scale(0)` matrix is singular, so the browser would flip it halfway
    // through instead of interpolating.
    scale: invisible ? 0.001 : 1
  };
});

const BadgeText = styled(Text, {
  displayName: BADGE_NAME,
  color: "onAccent",
  fontFamily: "caption",
  fontSize: 12,
  fontWeight: "500",
  // Unitless, as in CSS: a multiple of `fontSize`.
  lineHeight: 1
});

// MUI's `transitions.duration.enteringScreen` and `leavingScreen`.
const BADGE_SHOW_TRANSITION = { duration: "225ms", easing: "ease-in-out" };
const BADGE_HIDE_TRANSITION = { duration: "195ms", easing: "ease-in-out" };

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

type BadgeRootProps = GetProps<typeof BadgeRootFrame>;

type BadgeBadgeProps = Omit<
  GetProps<typeof BadgeBadgeFrame>,
  "vertical" | "horizontal" | "overlap" | "invisible" | "variant"
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
   * The props used for each slot
   */
  slotProps?: {
    root?: Partial<BadgeRootProps>;
    badge?: Partial<BadgeBadgeProps>;
  };
}

export type BadgeProps = Omit<BadgeRootProps, keyof BadgeOwnProps> &
  BadgeOwnProps;

export const Badge = createStyledHOC(
  BadgeRootFrame,
  (
    {
      anchorOrigin,
      badgeContent,
      children,
      color = "default",
      invisible: invisibleProp = false,
      max = 99,
      overlap = "rectangular",
      showZero = false,
      variant = "standard",
      slots,
      slotProps,
      ...props
    }: BadgeProps,
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

    return (
      <RootSlot ref={forwardedRef} {...props} {...slotProps?.root}>
        {children}
        <BadgeSlot
          // The count is decoration: describe it on the wrapped element
          // instead, for example with an `aria-label`.
          aria-hidden
          theme={getBadgeTheme(shown.color)}
          variant={shown.variant}
          vertical={shown.vertical}
          horizontal={shown.horizontal}
          overlap={shown.overlap}
          invisible={invisible}
          transition={invisible ? BADGE_HIDE_TRANSITION : BADGE_SHOW_TRANSITION}
          {...slotProps?.badge}>
          {typeof content === "string" || typeof content === "number" ? (
            <BadgeText>{content}</BadgeText>
          ) : (
            content
          )}
        </BadgeSlot>
      </RootSlot>
    );
  },
  {
    displayName: BADGE_NAME
  }
);
