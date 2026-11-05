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

import { Button } from "@cyclone-ui/button";
import { EyebrowText } from "@cyclone-ui/eyebrow-text";
import { HeadingLargeText } from "@cyclone-ui/heading-text";
import type { IconComponent } from "@cyclone-ui/icons";
import { Link } from "@cyclone-ui/link";
import { RedactedAnimation } from "@cyclone-ui/redacted-animation";
import type { SearchDialogProps } from "@cyclone-ui/search-dialog";
import { SearchDialog } from "@cyclone-ui/search-dialog";
import { MenuToggle } from "@cyclone-ui/vectors";
import type { GetProps } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  useMedia,
  View,
  withStaticProperties
} from "@tamagui/core";
import type { ReactElement, ReactNode } from "react";
import {
  Children,
  cloneElement,
  Fragment,
  isValidElement,
  useEffect,
  useId,
  useState,
  useSyncExternalStore
} from "react";

const reducedMotionMediaQuery = "(prefers-reduced-motion: reduce)";
type NavigationHeaderPressEvent = Parameters<
  NonNullable<GetProps<typeof Link>["onPress"]>
>[0];

interface NavigationHeaderMediaQuery {
  matches: boolean;
  addEventListener: (type: "change", listener: () => void) => void;
  removeEventListener: (type: "change", listener: () => void) => void;
}

interface NavigationHeaderWindow {
  scrollY: number;
  addEventListener: (
    type: "scroll",
    listener: () => void,
    options?: { passive?: boolean }
  ) => void;
  removeEventListener: (type: "scroll", listener: () => void) => void;
  matchMedia?: (query: string) => NavigationHeaderMediaQuery;
}

const getBrowserWindow = () =>
  (globalThis as typeof globalThis & { window?: NavigationHeaderWindow })
    .window;

const subscribeToWindowScroll = (onStoreChange: () => void) => {
  const browserWindow = getBrowserWindow();

  if (!browserWindow) {
    return () => {};
  }

  browserWindow.addEventListener("scroll", onStoreChange, { passive: true });

  return () => browserWindow.removeEventListener("scroll", onStoreChange);
};

const getIsAtTop = () => {
  const browserWindow = getBrowserWindow();

  return !browserWindow || browserWindow.scrollY <= 0;
};

const subscribeToReducedMotion = (onStoreChange: () => void) => {
  const mediaQuery = getBrowserWindow()?.matchMedia?.(reducedMotionMediaQuery);

  if (!mediaQuery) {
    return () => {};
  }

  mediaQuery.addEventListener("change", onStoreChange);

  return () => mediaQuery.removeEventListener("change", onStoreChange);
};

// Locks page scroll behind the compact menu so only the panel scrolls.
const useLockPageScroll = (locked: boolean) => {
  useEffect(() => {
    const root = (
      globalThis as typeof globalThis & {
        document?: {
          documentElement: {
            style: {
              overflow: string;
              setProperty: (property: string, value: string) => void;
            };
          };
        };
      }
    ).document?.documentElement;

    if (!locked || !root) {
      return;
    }

    const { overflow } = root.style;
    root.style.setProperty("overflow", "hidden");

    return () => {
      root.style.setProperty("overflow", overflow);
    };
  }, [locked]);
};

const getPrefersReducedMotion = () =>
  getBrowserWindow()?.matchMedia?.(reducedMotionMediaQuery).matches ?? false;

const useIsAtTop = () =>
  useSyncExternalStore(subscribeToWindowScroll, getIsAtTop, () => true);

const usePrefersReducedMotion = () =>
  useSyncExternalStore(
    subscribeToReducedMotion,
    getPrefersReducedMotion,
    () => true
  );

// Inside `backgroundImage`, since Tamagui parses color-mix() words in
// `backgroundColor` as tokens.
const translucentCanvas = "color-mix(in oklab, var(--canvas) 70%, transparent)";
// Dots match the header's canvas, so they vanish over an empty page and only
// show as a screen over content scrolled underneath.
const dotColor = "var(--canvas)";

const NavigationHeaderFrame = styled(View, {
  displayName: "NavigationHeader",
  render: "header",

  transition: "400ms",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: "40",
  width: "100%",
  // The variant's look comes from `NavigationHeaderBackground`.
  backgroundColor: "transparent hover:canvas"
});

// A separate layer, so it can fade out at the top of the page and be masked
// without fading the bar's content.
const NavigationHeaderBackground = styled(View, {
  displayName: "NavigationHeaderBackground",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  pointerEvents: "none",

  variants: {
    variant: {
      filled: {
        backgroundColor: "canvas"
      },
      transparent: {
        backgroundImage: `linear-gradient(${translucentCanvas}, ${translucentCanvas})`,
        backdropFilter: "blur(12px)"
      },
      dotted: {
        backgroundImage: `radial-gradient(circle, ${dotColor} 1px, transparent 1px), linear-gradient(${translucentCanvas}, ${translucentCanvas})`,
        backgroundSize: "8px 8px, auto",
        backdropFilter: "blur(12px)",
        // Fades the dots, tint and blur so the bar's bottom edge is nearly
        // transparent.
        // RGB, since Tamagui parses color words like `black` as tokens.
        maskImage: "linear-gradient(rgb(0 0 0), rgb(0 0 0 / 0.05))"
      }
    }
  } as const,
  defaultVariants: {
    variant: "filled"
  }
});

const NavigationHeaderBar = styled(View, {
  displayName: "NavigationHeaderBar",
  // Paints above the absolutely positioned background.
  position: "relative",
  width: "100%",
  maxWidth: 1440,
  boxSizing: "border-box",
  marginHorizontal: "auto",
  paddingHorizontal: "8xl max-md:4xl",
  paddingVertical: "lg max-md:md",
  alignItems: "center",
  flexDirection: "row",
  // Tight on compact screens so logo, search and menu fit in 320px.
  gap: "5xl max-xl:lg"
});

const NavigationHeaderEdge = styled(View, {
  displayName: "NavigationHeaderEdge",
  minWidth: 0,
  flexBasis: 0,
  flexGrow: 1,
  flexShrink: 1,
  alignItems: "center",
  flexDirection: "row"
});

const NavigationHeaderLogo = styled(NavigationHeaderEdge, {
  displayName: "NavigationHeaderLogo",
  justifyContent: "flex-start"
});

const NavigationHeaderLogoContent = styled(View, {
  displayName: "NavigationHeaderLogoContent",
  flexShrink: 0,
  transformOrigin: "left center"
});

// Scales the navigation and search together, so the larger navigation at the
// top of the page never overlaps the search button.
const NavigationHeaderCenter = styled(View, {
  displayName: "NavigationHeaderCenter",
  height: "100%",
  order: "0 max-xl:1",
  flexShrink: 0,
  alignItems: "center",
  flexDirection: "row",
  // Navigation's `6xl` gap minus the search button's inner padding, so the
  // search glyph sits as far from the last item as the items do apart.
  gap: "3xl",
  transformOrigin: "center"
});

const NavigationHeaderNavigation = styled(View, {
  displayName: "NavigationHeaderNavigation",
  render: "nav",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  gap: "6xl",
  display: "flex max-xl:none"
});

const NavigationHeaderItemFrame = styled(View, {
  displayName: "NavigationHeaderItem",
  display: "block",
  width: "fit-content",
  flexShrink: 0,
  borderBottomWidth: 3,
  borderBottomColor: "transparent",

  variants: {
    active: {
      true: {
        color: "emphasis",
        borderBottomColor: "emphasis"
      }
    },
    mobile: {
      true: {
        width: "100%",
        minHeight: "11xl",
        borderBottomWidth: 0
      }
    }
  } as const
});

const NavigationHeaderItemLink = styled(Link, {
  displayName: "NavigationHeaderItemLink",
  variant: "emphasis",
  width: "100%",
  minWidth: "fit-content",
  paddingVertical: "2xl",
  paddingBottom: 5,
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  color: "emphasis hover:emphasis-hovered focus-visible:emphasis-active",
  fontWeight: "bold",
  textDecorationLine: "none hover:none",
  outlineColor: "focus-visible:primary",
  outlineOffset: "focus-visible:-4px",
  outlineStyle: "focus-visible:solid",
  outlineWidth: "focus-visible:2px",

  variants: {
    active: {
      true: {
        color: "emphasis-active"
      }
    },
    mobile: {
      true: {
        minHeight: "11xl",
        paddingHorizontal: "5xl",
        paddingTop: 0,
        paddingBottom: 0,
        flexDirection: "row",
        justifyContent: "flex-start",
        fontSize: "lg"
      }
    }
  } as const
});

const NavigationHeaderDropdown = styled(View, {
  displayName: "NavigationHeaderDropdown",
  position: "absolute",
  top: "calc(100% - 1px)",
  left: 0,
  right: 0,
  zIndex: "50",
  overflow: "hidden",
  backgroundColor: "canvas",
  borderBottomWidth: 1,
  borderBottomColor: "hairline",
  display: "flex max-xl:none",

  variants: {
    open: {
      true: {
        pointerEvents: "auto",
        clipPath: "inset(0 0 0 0)",
        borderBottomColor: "hairline"
      },
      false: {
        pointerEvents: "none",
        clipPath: "inset(0 0 100% 0)",
        borderBottomColor: "transparent"
      }
    }
  } as const
});

const NavigationHeaderDropdownContent = styled(View, {
  displayName: "NavigationHeaderDropdownContent",
  width: "100%",
  maxWidth: 1440,
  marginHorizontal: "auto",
  paddingHorizontal: "7xl",
  paddingTop: "7xl",
  paddingBottom: "10xl",
  alignItems: "flex-start",
  flexDirection: "row",
  gap: "10xl"
});

const NavigationHeaderDropdownGroup = styled(View, {
  displayName: "NavigationHeaderDropdownGroup",
  minWidth: 0,
  flexBasis: 0,
  flexGrow: 1,
  flexDirection: "column",
  gap: "lg"
});

const NavigationHeaderDropdownGroupLabel = styled(EyebrowText, {
  displayName: "NavigationHeaderDropdownGroupLabel",
  marginBottom: "3xl",
  color: "subtle"
});

const NavigationHeaderDropdownLink = styled(Link, {
  displayName: "NavigationHeaderDropdownLink",
  width: "100%",
  minHeight: "10xl",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  display: "flex",
  color: "emphasis hover:emphasis-active focus-visible:emphasis-active",
  fontWeight: 500,
  textDecorationLine: "none hover:none",
  borderRadius: "md",

  variants: {
    featured: {
      true: {
        minHeight: "11xl",
        paddingHorizontal: 0,
        fontSize: 30,
        lineHeight: "36px",
        fontWeight: "normal",
        backgroundColor: "transparent"
      }
    }
  } as const
});

const NavigationHeaderDropdownEntrance = styled(View, {
  displayName: "NavigationHeaderDropdownEntrance",
  width: "100%"
});

const NavigationHeaderActions = styled(NavigationHeaderEdge, {
  displayName: "NavigationHeaderActions",
  paddingVertical: "2xl",
  justifyContent: "flex-end",
  display: "max-md:none"
});

const NavigationHeaderActionsContent = styled(View, {
  displayName: "NavigationHeaderActionsContent",
  alignItems: "center",
  flexDirection: "row",
  gap: "2xl"
});

const NavigationHeaderMenuButtonSlot = styled(View, {
  displayName: "NavigationHeaderMenuButtonSlot",
  // Overlaps the buttons' transparent padding, so the menu glyph sits near the
  // search glyph and aligns with the bar's right padding.
  display: "none max-xl:flex",
  order: 2,
  marginLeft: -8,
  marginRight: -11
});

// Kept separate from the animated panel so inline animation styles cannot
// override responsive visibility.
const NavigationHeaderMobileLayer = styled(View, {
  displayName: "NavigationHeaderMobileLayer",
  display: "none max-xl:flex",
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  height: "calc(100dvh - 100%)",
  // Clips the panel's slide-in so it never overlaps the header bar.
  overflow: "hidden"
});

const NavigationHeaderMobilePanel = styled(View, {
  displayName: "NavigationHeaderMobilePanel",
  flexGrow: 1,
  flexShrink: 1,
  minHeight: 0,
  overflowY: "auto",
  backgroundColor: "canvas"
});

const NavigationHeaderMobileContent = styled(View, {
  displayName: "NavigationHeaderMobileContent",
  // Fills the panel so the social footer can sit at its bottom.
  flexGrow: 1,
  paddingTop: "4xl",
  paddingBottom: "2xl"
});

const NavigationHeaderMobileNavigation = styled(View, {
  displayName: "NavigationHeaderMobileNavigation",
  render: "nav",
  width: "100%",
  flexDirection: "column"
});

const NavigationHeaderMobileActions = styled(View, {
  displayName: "NavigationHeaderMobileActions",
  display: "none max-md:flex",
  marginTop: "2xl",
  paddingTop: "5xl",
  paddingHorizontal: "2xl",
  paddingBottom: "3xl",
  flexDirection: "column",
  gap: "2xl",
  borderTopWidth: 1,
  borderTopColor: "hairline"
});

const NavigationHeaderMobileSocial = styled(View, {
  displayName: "NavigationHeaderMobileSocial",
  render: "nav",
  marginTop: "auto",
  paddingTop: "3xl",
  paddingHorizontal: "2xl",
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "md",
  borderTopWidth: 1,
  borderTopColor: "hairline"
});

const NavigationHeaderSocialLink = styled(Link, {
  displayName: "NavigationHeaderSocialLink",
  width: "10xl",
  height: "10xl",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  textDecorationLine: "none hover:none",
  borderRadius: "md",
  outlineColor: "focus-visible:primary",
  outlineStyle: "focus-visible:solid",
  outlineWidth: "focus-visible:2px"
});

interface NavigationHeaderChildItem {
  label: ReactNode;
  /** Optional column heading used in the desktop mega menu. */
  group?: string;
  /** Displays this destination with prominent typography. */
  featured?: boolean;
  href?: string;
  target?: string;
  external?: boolean;
  active?: boolean;
  onPress?: GetProps<typeof Link>["onPress"];
}

interface NavigationHeaderItem extends NavigationHeaderChildItem {
  /** Optional second-level destinations displayed beneath this item. */
  children?: readonly NavigationHeaderChildItem[];
}

interface NavigationHeaderChildGroup {
  label?: string;
  featured: boolean;
  items: NavigationHeaderChildItem[];
}

interface NavigationHeaderDropdownHover {
  scope: "featured" | "standard";
  groupIndex: number;
  childIndex: number;
}

const dropdownTransition = "200ms";
const scaleTransition = "300ms";
// CSS media clauses determine layout before hydration: stop scaling below
// xxl, move navigation to the menu below xl, and move actions below md.
const entranceStagger = 50;

// Slides and fades each dropdown entry in, `index` steps after the first.
const getEntranceProps = (index: number) => {
  const transition = {
    duration: "250ms",
    easing: "ease-out",
    delay: index * entranceStagger
  };

  return {
    opacity: "1 enter:0",
    y: "0 enter:-8px",
    // Naming `enter` makes Tamagui animate the mount instead of snapping.
    transition: { ...transition, enter: transition }
  };
};

const groupNavigationHeaderChildren = (
  children: readonly NavigationHeaderChildItem[]
) => {
  const groups = new Map<string, NavigationHeaderChildGroup>();

  children.forEach(child => {
    const key = child.group ?? "";
    const group = groups.get(key);

    if (group) {
      group.items.push(child);
      group.featured ||= Boolean(child.featured);
    } else {
      groups.set(key, {
        label: child.group,
        featured: Boolean(child.featured),
        items: [child]
      });
    }
  });

  return [...groups.values()];
};

type NavigationHeaderFrameProps = GetProps<typeof NavigationHeaderFrame>;

export interface NavigationHeaderProps extends Omit<
  NavigationHeaderFrameProps,
  "children"
> {
  /** Compose the logo, navigation, actions, and optional menu button. */
  children: ReactNode;
  /**
   * The bar's background: opaque `filled` (default), a blurred
   * semi-transparent `transparent`, or `dotted`, which overlays a dot pattern.
   */
  variant?: "filled" | "transparent" | "dotted";
  /**
   * Hides the bar's background while the page is scrolled to the top, then
   * shows the `variant` background once the page scrolls down.
   */
  transparentAtTop?: boolean;
}

export interface NavigationHeaderLogoProps {
  children: ReactNode;
}

/** Product or company mark displayed at the start of the header. */
const NavigationHeaderLogoSlot = (_: NavigationHeaderLogoProps) => null;

export interface NavigationHeaderActionsProps {
  children: ReactNode;
}

/** Account and conversion actions displayed at the end of the header. */
const NavigationHeaderActionsSlot = (_: NavigationHeaderActionsProps) => null;

export interface NavigationHeaderNavigationProps {
  children: ReactNode;
  /** Accessible name for the primary navigation landmark. */
  label?: string;
}

/** Primary destinations shown in the center on wide screens. */
const NavigationHeaderNavigationSlot = (_: NavigationHeaderNavigationProps) =>
  null;

export type NavigationHeaderSearchProps = SearchDialogProps;

/**
 * A search button and dialog, shown after the navigation on wide screens and
 * before the menu button on compact ones.
 */
const NavigationHeaderSearchSlot = (_: NavigationHeaderSearchProps) => null;

export interface NavigationHeaderMenuButtonProps {
  /** Accessible name for the compact navigation trigger. */
  label?: string;
}

/** Optional configuration for the compact navigation trigger. */
const NavigationHeaderMenuButtonSlotComponent = (
  _: NavigationHeaderMenuButtonProps
) => null;

export interface NavigationHeaderItemProps extends Omit<
  NavigationHeaderChildItem,
  "label"
> {
  children: ReactNode;
}

/** A primary destination. Groups nested inside it become its mega menu. */
const NavigationHeaderItemSlot = (_: NavigationHeaderItemProps) => null;

export interface NavigationHeaderGroupProps {
  children: ReactNode;
  /** Column heading shown in the desktop mega menu. */
  label?: string;
  /** Displays links in this group with prominent typography by default. */
  featured?: boolean;
}

/** A column within a primary destination's mega menu. */
const NavigationHeaderGroupSlot = (_: NavigationHeaderGroupProps) => null;

export interface NavigationHeaderLinkProps extends Omit<
  NavigationHeaderChildItem,
  "group" | "label"
> {
  children: ReactNode;
}

/** A destination within a mega-menu group. */
const NavigationHeaderLinkSlot = (_: NavigationHeaderLinkProps) => null;

export interface NavigationHeaderSocialProps {
  children: ReactNode;
  /** Accessible name for the social links landmark. */
  label?: string;
}

/** Social links shown in the footer of the compact menu. */
const NavigationHeaderSocialSlot = (_: NavigationHeaderSocialProps) => null;

export interface NavigationHeaderSocialLinkProps {
  href: string;
  /** Accessible name, since the link shows only its icon. */
  label: string;
  icon: IconComponent;
}

/** An icon link to a social profile, opened in a new tab. */
const NavigationHeaderSocialLinkSlot = (_: NavigationHeaderSocialLinkProps) =>
  null;

const getSlots = <Props,>(children: ReactNode, slot: unknown) =>
  Children.toArray(children).filter(
    (child): child is ReactElement<Props> =>
      isValidElement<Props>(child) && child.type === slot
  );

const getSlot = <Props,>(children: ReactNode, slot: unknown) =>
  getSlots<Props>(children, slot).at(0);

// Flattens fragments so each action can be stretched across the compact menu,
// overriding any width sized for the header bar.
const getFullWidthActions = (children: ReactNode): ReactNode[] =>
  // eslint-disable-next-line react/no-children-to-array
  Children.toArray(children).flatMap(child =>
    isValidElement<{ children?: ReactNode }>(child)
      ? child.type === Fragment
        ? getFullWidthActions(child.props.children)
        : cloneElement(child as ReactElement<{ width?: string }>, {
            width: "100%"
          })
      : child
  );

const getItemLabel = (children: ReactNode) =>
  // eslint-disable-next-line react/no-children-to-array
  Children.toArray(children).filter(
    child => !isValidElement(child) || child.type !== NavigationHeaderGroupSlot
  );

const getNavigationHeaderItems = (
  children: ReactNode
): NavigationHeaderItem[] =>
  getSlots<NavigationHeaderItemProps>(children, NavigationHeaderItemSlot).map(
    ({ props }) => {
      const groups = getSlots<NavigationHeaderGroupProps>(
        props.children,
        NavigationHeaderGroupSlot
      );

      return {
        label: getItemLabel(props.children),
        href: props.href,
        target: props.target,
        external: props.external,
        active: props.active,
        onPress: props.onPress,
        children: groups.flatMap(group =>
          getSlots<NavigationHeaderLinkProps>(
            group.props.children,
            NavigationHeaderLinkSlot
          ).map(link => ({
            label: link.props.children,
            group: group.props.label,
            featured: link.props.featured ?? group.props.featured,
            href: link.props.href,
            target: link.props.target,
            external: link.props.external,
            active: link.props.active,
            onPress: link.props.onPress
          }))
        )
      };
    }
  );

const NavigationHeaderRoot = createStyledHOC(
  NavigationHeaderFrame,
  (
    {
      children,
      variant,
      transparentAtTop = false,
      onBlur,
      onMouseLeave,
      ...props
    }: GetProps<typeof NavigationHeaderFrame> & NavigationHeaderProps,
    forwardedRef
  ) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuButtonHovered, setMenuButtonHovered] = useState(false);
    const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);
    const [hoveredItemIndex, setHoveredItemIndex] = useState<number | null>(
      null
    );
    const [hoveredDropdownItem, setHoveredDropdownItem] =
      useState<NavigationHeaderDropdownHover | null>(null);

    const isAtTop = useIsAtTop();
    const prefersReducedMotion = usePrefersReducedMotion();
    const mobileNavigationId = useId();
    // Only the scroll-lock side effect needs the current viewport in JS.
    // All responsive visibility, ordering and scaling are handled by CSS.
    const compact = useMedia()["max-xl"];
    useLockPageScroll(menuOpen && Boolean(compact));
    const logo = getSlot<NavigationHeaderLogoProps>(
      children,
      NavigationHeaderLogoSlot
    )?.props.children;
    const actions = getSlot<NavigationHeaderActionsProps>(
      children,
      NavigationHeaderActionsSlot
    )?.props.children;
    const navigation = getSlot<NavigationHeaderNavigationProps>(
      children,
      NavigationHeaderNavigationSlot
    );
    const search = getSlot<NavigationHeaderSearchProps>(
      children,
      NavigationHeaderSearchSlot
    );
    const menuButton = getSlot<NavigationHeaderMenuButtonProps>(
      children,
      NavigationHeaderMenuButtonSlotComponent
    );

    const social = getSlot<NavigationHeaderSocialProps>(
      children,
      NavigationHeaderSocialSlot
    );
    const socialLinks = getSlots<NavigationHeaderSocialLinkProps>(
      social?.props.children,
      NavigationHeaderSocialLinkSlot
    );

    const items = getNavigationHeaderItems(navigation?.props.children);

    const navigationLabel = navigation?.props.label ?? "Primary navigation";
    const menuLabel = menuButton?.props.label ?? "Navigation menu";
    const openItem = openItemIndex === null ? undefined : items[openItemIndex];
    const submenuOpen = Boolean(openItem?.children?.length);

    // Stagger entries only when the dropdown opens from closed, not when the
    // pointer moves between items while it is already open.
    const [entrance, setEntrance] = useState({
      open: submenuOpen,
      index: openItemIndex,
      stagger: false
    });
    if (entrance.open !== submenuOpen || entrance.index !== openItemIndex) {
      setEntrance({
        open: submenuOpen,
        index: openItemIndex,
        stagger: submenuOpen && !entrance.open
      });
    }

    const staggerEntrance = entrance.stagger && !prefersReducedMotion;
    let entranceIndex = 0;
    const entranceProps = () =>
      staggerEntrance ? getEntranceProps(entranceIndex++) : {};

    // Native CSS transitions keep responsive transforms and ordering in CSS;
    // the motion driver would resolve those media clauses into inline styles.
    // Longhand props, since Tamagui drops `transition` inside `style`.
    const scaleProps = {
      scale: isAtTop ? "1 xl:1.1 xxl:1.25" : 1,
      transitionProperty: "scale",
      transitionDuration: prefersReducedMotion ? "0s" : scaleTransition
    };

    const centerSlot = (
      <NavigationHeaderCenter key="center" {...scaleProps}>
        <NavigationHeaderNavigation aria-label={navigationLabel}>
          {items.map((item, index) => {
            const hasChildren = Boolean(item.children?.length);
            const active =
              item.active ?? item.children?.some(child => child.active);

            // Always a plain color, like the dropdown links below, so Tamagui
            // clears its hover state on mouse leave.
            const navigationItemColor =
              hoveredItemIndex === null
                ? "emphasis"
                : hoveredItemIndex === index
                  ? "emphasis-active"
                  : "emphasis-inactive";
            const dropdownId = `${mobileNavigationId}-submenu-${index}`;

            return (
              <NavigationHeaderItemFrame
                key={`${item.href ?? "navigation-item"}-${index}`}
                active={active}
                borderBottomColor={active ? navigationItemColor : "transparent"}
                position="relative"
                onMouseEnter={() => {
                  setHoveredItemIndex(index);
                  setHoveredDropdownItem(null);
                }}>
                {hasChildren ? (
                  <>
                    <NavigationHeaderItemLink
                      group={false}
                      variant="emphasis"
                      style={{ color: `var(--${navigationItemColor})` }}
                      gap="lg"
                      inverse={true}
                      underline="none"
                      render="button"
                      role="button"
                      aria-controls={dropdownId}
                      aria-expanded={openItemIndex === index}
                      aria-haspopup="true"
                      active={active}
                      onMouseEnter={() => setOpenItemIndex(index)}
                      onFocus={() => setOpenItemIndex(index)}
                      // Inferred: `Link` types `onKeyDown` for a `<div>`.
                      onKeyDown={event => {
                        if (event.key === "Escape") {
                          setOpenItemIndex(null);
                        }
                      }}
                      onPress={() => setOpenItemIndex(index)}>
                      {item.label}
                    </NavigationHeaderItemLink>
                  </>
                ) : (
                  <NavigationHeaderItemLink
                    group={false}
                    variant="emphasis"
                    inverse={true}
                    underline="none"
                    href={item.href}
                    target={item.target}
                    external={item.external}
                    active={item.active}
                    style={{ color: `var(--${navigationItemColor})` }}
                    aria-current={item.active ? "page" : undefined}
                    onMouseEnter={() => setOpenItemIndex(null)}
                    onPress={item.onPress}>
                    {item.label}
                  </NavigationHeaderItemLink>
                )}
              </NavigationHeaderItemFrame>
            );
          })}
        </NavigationHeaderNavigation>

        {/* Nudged onto the labels' x-height center, which sits below their
                cap-height center; without them it centers with the menu. */}
        {search && (
          <SearchDialog {...search.props} y="2px max-xl:0" noPadding={true} />
        )}
      </NavigationHeaderCenter>
    );

    // CSS order moves the actions before search without changing the markup.
    const actionsSlot = actions ? (
      <NavigationHeaderActions key="actions">
        <NavigationHeaderActionsContent>
          {actions}
        </NavigationHeaderActionsContent>
      </NavigationHeaderActions>
    ) : (
      // Hidden like the actions, so the search sits by the menu button.
      <NavigationHeaderEdge key="actions" display="max-md:none" />
    );

    return (
      <NavigationHeaderFrame
        ref={forwardedRef}
        {...props}
        onMouseLeave={event => {
          onMouseLeave?.(event);
          setOpenItemIndex(null);
          setHoveredItemIndex(null);
          setHoveredDropdownItem(null);
        }}
        onBlur={event => {
          onBlur?.(event);
          if (
            !(
              event.currentTarget as unknown as {
                contains: (node: unknown) => boolean;
              }
            ).contains(event.relatedTarget)
          ) {
            setOpenItemIndex(null);
            setHoveredItemIndex(null);
            setHoveredDropdownItem(null);
          }
        }}>
        {/* Kept opaque while the compact menu is open, so the bar matches the
            panel beneath it. */}
        <NavigationHeaderBackground
          variant={variant}
          opacity={transparentAtTop && isAtTop && !menuOpen ? 0 : 1}
          transition={prefersReducedMotion ? "none" : "400ms"}
        />

        <NavigationHeaderBar>
          <NavigationHeaderLogo>
            <NavigationHeaderLogoContent {...scaleProps}>
              {logo}
            </NavigationHeaderLogoContent>
          </NavigationHeaderLogo>

          {centerSlot}
          {actionsSlot}

          <NavigationHeaderMenuButtonSlot>
            <Button
              variant="ghost"
              noPadding={true}
              circular={true}
              flexGrow={0}
              aria-controls={mobileNavigationId}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? `Close ${menuLabel}` : `Open ${menuLabel}`}
              onMouseEnter={() => setMenuButtonHovered(true)}
              onMouseLeave={() => setMenuButtonHovered(false)}
              onPress={() => setMenuOpen(open => !open)}>
              <Button.Icon>
                <MenuToggle
                  aria-hidden={true}
                  isOpen={menuOpen}
                  isHovered={menuButtonHovered}
                />
              </Button.Icon>
            </Button>
          </NavigationHeaderMenuButtonSlot>
        </NavigationHeaderBar>

        <NavigationHeaderDropdown
          id={
            openItemIndex === null
              ? undefined
              : `${mobileNavigationId}-submenu-${openItemIndex}`
          }
          open={submenuOpen}
          aria-hidden={!submenuOpen}
          style={{
            transition: prefersReducedMotion
              ? "none"
              : `clip-path ${dropdownTransition}`
          }}
          onMouseLeave={() => setHoveredDropdownItem(null)}>
          {openItem?.children?.length ? (
            <NavigationHeaderDropdownContent>
              {groupNavigationHeaderChildren(openItem.children).map(
                (group, groupIndex) => (
                  <NavigationHeaderDropdownGroup
                    key={`${group.label ?? "navigation-group"}-${groupIndex}`}>
                    {group.label ? (
                      <NavigationHeaderDropdownEntrance {...entranceProps()}>
                        <NavigationHeaderDropdownGroupLabel>
                          {group.label}
                        </NavigationHeaderDropdownGroupLabel>
                      </NavigationHeaderDropdownEntrance>
                    ) : null}

                    {group.items.map((child, childIndex) => {
                      const scope = group.featured ? "featured" : "standard";
                      const hovered = hoveredDropdownItem?.scope === scope;

                      // Always pass a plain color: switching between the link's
                      // own `hover:` styles and an override mid-hover makes
                      // Tamagui skip clearing its hover state on mouse leave,
                      // leaving the previous link stuck highlighted.
                      const color = hovered
                        ? hoveredDropdownItem.groupIndex === groupIndex &&
                          hoveredDropdownItem.childIndex === childIndex
                          ? "emphasis-active"
                          : "emphasis-inactive"
                        : "emphasis";

                      return (
                        <NavigationHeaderDropdownEntrance
                          key={`${child.href ?? "navigation-child"}-${childIndex}`}
                          {...entranceProps()}>
                          <NavigationHeaderDropdownLink
                            group={false}
                            variant="emphasis"
                            inverse={true}
                            underline="none"
                            featured={child.featured}
                            href={child.href}
                            target={child.target}
                            external={child.external}
                            style={{ color: `var(--${color})` }}
                            aria-current={child.active ? "page" : undefined}
                            onMouseEnter={() =>
                              setHoveredDropdownItem({
                                scope,
                                groupIndex,
                                childIndex
                              })
                            }
                            onPress={(event: NavigationHeaderPressEvent) => {
                              child.onPress?.(event);
                              setOpenItemIndex(null);
                            }}>
                            {child.featured ? (
                              <HeadingLargeText>{child.label}</HeadingLargeText>
                            ) : (
                              child.label
                            )}
                          </NavigationHeaderDropdownLink>
                        </NavigationHeaderDropdownEntrance>
                      );
                    })}
                  </NavigationHeaderDropdownGroup>
                )
              )}
            </NavigationHeaderDropdownContent>
          ) : null}
        </NavigationHeaderDropdown>

        <NavigationHeaderMobileLayer
          id={mobileNavigationId}
          // Stays mounted so it can fade out; `inert` (untyped in Tamagui)
          // drops the hidden links from focus and the accessibility tree.
          {...{ inert: !menuOpen }}
          pointerEvents={menuOpen ? "auto" : "none"}>
          <NavigationHeaderMobilePanel
            opacity={menuOpen ? 1 : 0}
            y={menuOpen ? 0 : -12}
            transition={
              prefersReducedMotion
                ? "none"
                : { duration: "300ms", easing: "ease-out" }
            }
            style={{ scrollbarWidth: "none" }}>
            <NavigationHeaderMobileContent>
              <NavigationHeaderMobileNavigation aria-label={navigationLabel}>
                {items.map((item, index) => (
                  <NavigationHeaderItemFrame
                    key={`${item.href ?? "mobile-navigation-item"}-${index}`}
                    active={
                      item.active ?? item.children?.some(child => child.active)
                    }
                    mobile={true}>
                    <NavigationHeaderItemLink
                      group={false}
                      variant="emphasis"
                      inverse={true}
                      underline="none"
                      href={item.href}
                      target={item.target}
                      external={item.external}
                      active={item.active}
                      mobile={true}
                      aria-current={item.active ? "page" : undefined}
                      onPress={(event: NavigationHeaderPressEvent) => {
                        item.onPress?.(event);
                        setMenuOpen(false);
                      }}>
                      {/* Mounts on open so the reveal replays each time. */}
                      {menuOpen ? (
                        <RedactedAnimation
                          delay={200 + index * entranceStagger}>
                          {item.label}
                        </RedactedAnimation>
                      ) : (
                        item.label
                      )}
                    </NavigationHeaderItemLink>
                  </NavigationHeaderItemFrame>
                ))}
              </NavigationHeaderMobileNavigation>

              {actions && (
                <NavigationHeaderMobileActions>
                  {getFullWidthActions(actions)}
                </NavigationHeaderMobileActions>
              )}

              {socialLinks.length > 0 && (
                <NavigationHeaderMobileSocial
                  aria-label={social?.props.label ?? "Social links"}>
                  {socialLinks.map(({ props: link }) => (
                    <NavigationHeaderSocialLink
                      key={link.href}
                      group={false}
                      variant="subtle"
                      underline="none"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}>
                      {/* `currentColor` follows the link's hover color. */}
                      <link.icon
                        aria-hidden={true}
                        color="currentColor"
                        size="6xl"
                      />
                    </NavigationHeaderSocialLink>
                  ))}
                </NavigationHeaderMobileSocial>
              )}
            </NavigationHeaderMobileContent>
          </NavigationHeaderMobilePanel>
        </NavigationHeaderMobileLayer>
      </NavigationHeaderFrame>
    );
  },
  { displayName: "NavigationHeader" }
);

export const NavigationHeader = withStaticProperties(NavigationHeaderRoot, {
  Logo: NavigationHeaderLogoSlot,
  Navigation: withStaticProperties(NavigationHeaderNavigationSlot, {
    Item: withStaticProperties(NavigationHeaderItemSlot, {
      Group: NavigationHeaderGroupSlot,
      Link: NavigationHeaderLinkSlot
    })
  }),
  Search: NavigationHeaderSearchSlot,
  Actions: NavigationHeaderActionsSlot,
  Social: withStaticProperties(NavigationHeaderSocialSlot, {
    Link: NavigationHeaderSocialLinkSlot
  }),
  MenuButton: NavigationHeaderMenuButtonSlotComponent
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`NavigationHeader.LogoSlot` is undefined on the server).
 */
export {
  NavigationHeaderActionsSlot,
  NavigationHeaderGroupSlot,
  NavigationHeaderItemSlot,
  NavigationHeaderLinkSlot,
  NavigationHeaderLogoSlot,
  NavigationHeaderMenuButtonSlotComponent,
  NavigationHeaderNavigationSlot,
  NavigationHeaderSearchSlot,
  NavigationHeaderSocialLinkSlot,
  NavigationHeaderSocialSlot
};
