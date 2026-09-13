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

import { Link } from "@cyclone-ui/link";
import type { GetProps, TamaguiElement } from "@tamagui/core";
import { styled, Text, View } from "@tamagui/core";
import { ChevronDown, Menu, X } from "@tamagui/lucide-icons-2";
import type { ReactNode } from "react";
import {
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore
} from "react";

const reducedMotionMediaQuery = "(prefers-reduced-motion: reduce)";

type NavigationHeaderMediaQuery = {
  matches: boolean;
  addEventListener: (type: "change", listener: () => void) => void;
  removeEventListener: (type: "change", listener: () => void) => void;
};

type NavigationHeaderWindow = {
  scrollY: number;
  addEventListener: (
    type: "scroll",
    listener: () => void,
    options?: { passive?: boolean }
  ) => void;
  removeEventListener: (type: "scroll", listener: () => void) => void;
  matchMedia?: (query: string) => NavigationHeaderMediaQuery;
};

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

const NavigationHeaderFrame = styled(View, {
  name: "NavigationHeader",
  render: "header",

  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: "$40",
  width: "100%",
  backgroundColor: "$backgroundPage"
});

const NavigationHeaderBar = styled(View, {
  name: "NavigationHeaderBar",

  width: "100%",
  maxWidth: 1440,
  boxSizing: "border-box",
  marginHorizontal: "auto",
  paddingHorizontal: "$4xl",
  alignItems: "center",
  flexDirection: "row",
  gap: "$5xl",

  "$max-md": {
    paddingHorizontal: "$2xl"
  }
});

const NavigationHeaderEdge = styled(View, {
  name: "NavigationHeaderEdge",

  minWidth: 0,
  flexBasis: 0,
  flexGrow: 1,
  flexShrink: 1,
  alignItems: "center",
  flexDirection: "row"
});

const NavigationHeaderLogo = styled(NavigationHeaderEdge, {
  name: "NavigationHeaderLogo",
  justifyContent: "flex-start"
});

const NavigationHeaderLogoContent = styled(View, {
  name: "NavigationHeaderLogoContent",

  flexShrink: 0,
  transformOrigin: "left center"
});

const NavigationHeaderNavigation = styled(View, {
  name: "NavigationHeaderNavigation",
  render: "nav",

  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  gap: "$6xl",
  transformOrigin: "center",

  "$max-md": {
    display: "none"
  }
});

const NavigationHeaderItemFrame = styled(View, {
  name: "NavigationHeaderItem",

  display: "block",
  width: "fit-content",
  flexShrink: 0,
  borderBottomWidth: 2,
  borderBottomColor: "$transparent",

  variants: {
    active: {
      true: {
        color: "$foreground",
        borderBottomColor: "$foreground"
      }
    },
    mobile: {
      true: {
        width: "100%",
        minHeight: "$11xl",
        borderBottomWidth: 0
      }
    }
  } as const
});

const NavigationHeaderItemLink = styled(Link, {
  name: "NavigationHeaderItemLink",

  width: "100%",
  minWidth: "fit-content",
  paddingVertical: "$2xl",
  paddingBottom: 5,
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  color: "$foregroundBody",
  fontSize: "$sm",
  fontWeight: "$medium",
  textDecorationLine: "none",

  hoverStyle: {
    color: "$foreground",
    textDecorationLine: "none"
  },

  focusVisibleStyle: {
    color: "$foreground",
    outlineColor: "$foreground",
    outlineOffset: -4,
    outlineStyle: "solid",
    outlineWidth: 2
  },

  variants: {
    active: {
      true: {
        color: "$foreground"
      }
    },
    mobile: {
      true: {
        minHeight: "$11xl",
        paddingHorizontal: "$5xl",
        paddingTop: 0,
        justifyContent: "flex-start"
      }
    }
  } as const
});

const NavigationHeaderDropdown = styled(View, {
  name: "NavigationHeaderDropdown",

  position: "absolute",
  top: "calc(100% - 1px)",
  left: 0,
  right: 0,
  zIndex: "$50",
  overflow: "hidden",
  backgroundColor: "$backgroundPage",
  borderBottomWidth: 1,
  borderBottomColor: "$borderSubtle",

  variants: {
    open: {
      true: {
        pointerEvents: "auto",
        clipPath: "inset(0 0 0 0)",
        borderBottomColor: "$borderSubtle"
      },
      false: {
        pointerEvents: "none",
        clipPath: "inset(0 0 100% 0)",
        borderBottomColor: "$transparent"
      }
    }
  } as const,

  "$max-md": {
    display: "none"
  }
});

const NavigationHeaderDropdownContent = styled(View, {
  name: "NavigationHeaderDropdownContent",

  width: "100%",
  maxWidth: 1440,
  marginHorizontal: "auto",
  paddingHorizontal: "$7xl",
  paddingTop: "$7xl",
  paddingBottom: "$10xl",
  alignItems: "flex-start",
  flexDirection: "row",
  gap: "$10xl"
});

const NavigationHeaderDropdownGroup = styled(View, {
  name: "NavigationHeaderDropdownGroup",

  minWidth: 0,
  flexBasis: 0,
  flexGrow: 1,
  flexDirection: "column",
  gap: "$lg"
});

const NavigationHeaderDropdownGroupLabel = styled(Text, {
  name: "NavigationHeaderDropdownGroupLabel",

  marginBottom: "$xl",
  color: "$foregroundBody",
  fontFamily: "$body",
  fontSize: 14,
  lineHeight: 20
});

const NavigationHeaderDropdownLink = styled(Link, {
  name: "NavigationHeaderDropdownLink",

  width: "100%",
  minHeight: "$10xl",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  display: "flex",
  color: "$foregroundBody",
  fontSize: "$sm",
  fontWeight: "$medium",
  textDecorationLine: "none",
  borderRadius: "$md",

  hoverStyle: {
    color: "$foreground",
    textDecorationLine: "none"
  },

  focusVisibleStyle: {
    color: "$foreground",
    outlineColor: "$foreground",
    outlineOffset: -2,
    outlineStyle: "solid",
    outlineWidth: 2
  },

  variants: {
    featured: {
      true: {
        minHeight: "$11xl",
        paddingHorizontal: 0,
        fontFamily: "$heading-xl",
        fontSize: 30,
        lineHeight: 36,
        fontWeight: "$normal",
        backgroundColor: "$transparent"
      }
    }
  } as const
});

const NavigationHeaderMobileGroupLabel = styled(
  NavigationHeaderDropdownGroupLabel,
  {
    name: "NavigationHeaderMobileGroupLabel",

    marginTop: "$2xl",
    marginBottom: "$md",
    paddingHorizontal: "$5xl"
  }
);

const NavigationHeaderActions = styled(NavigationHeaderEdge, {
  name: "NavigationHeaderActions",

  paddingVertical: "$2xl",
  justifyContent: "flex-end",
  gap: "$2xl",

  "$max-md": {
    display: "none"
  }
});

const NavigationHeaderMenuButtonSlot = styled(View, {
  name: "NavigationHeaderMenuButtonSlot",
  display: "none",
  marginLeft: "auto",

  "$max-md": {
    display: "flex"
  }
});

const NavigationHeaderMenuButton = styled(View, {
  name: "NavigationHeaderMenuButton",
  render: "button",
  role: "button",

  width: "$11xl",
  height: "$11xl",
  padding: 0,
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  backgroundColor: "$transparent",
  borderWidth: 0,
  borderRadius: "$full",

  hoverStyle: {
    backgroundColor: "$backgroundHover"
  },

  pressStyle: {
    backgroundColor: "$backgroundActive"
  },

  focusVisibleStyle: {
    boxShadow: "$ringOffset"
  }
});

const NavigationHeaderMobilePanel = styled(View, {
  name: "NavigationHeaderMobilePanel",

  display: "none",
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  maxHeight: "calc(100vh - 52px)",
  paddingVertical: "$2xl",
  overflowY: "auto",
  backgroundColor: "$backgroundPage",
  borderBottomWidth: 1,
  borderBottomColor: "$borderSubtle",
  boxShadow: "$md",

  variants: {
    open: {
      true: {
        "$max-md": {
          display: "flex"
        }
      }
    }
  } as const
});

const NavigationHeaderMobileNavigation = styled(View, {
  name: "NavigationHeaderMobileNavigation",
  render: "nav",

  width: "100%",
  flexDirection: "column"
});

const NavigationHeaderMobileChildren = styled(View, {
  name: "NavigationHeaderMobileChildren",

  width: "100%",
  paddingLeft: "$5xl",
  paddingBottom: "$2xl",
  flexDirection: "column"
});

const NavigationHeaderMobileChildLink = styled(NavigationHeaderDropdownLink, {
  name: "NavigationHeaderMobileChildLink",

  minHeight: "$10xl",
  paddingHorizontal: "$5xl",
  backgroundColor: "$transparent"
});

const NavigationHeaderMobileActions = styled(View, {
  name: "NavigationHeaderMobileActions",

  marginTop: "$2xl",
  paddingTop: "$5xl",
  paddingHorizontal: "$5xl",
  paddingBottom: "$3xl",
  alignItems: "stretch",
  flexDirection: "column",
  gap: "$2xl",
  borderTopWidth: 1,
  borderTopColor: "$borderSubtle"
});

export interface NavigationHeaderChildItem {
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

export interface NavigationHeaderItem extends NavigationHeaderChildItem {
  /** Optional second-level destinations displayed beneath this item. */
  children?: readonly NavigationHeaderChildItem[];
}

interface NavigationHeaderChildGroup {
  label?: string;
  featured: boolean;
  items: NavigationHeaderChildItem[];
}

type NavigationHeaderDropdownHover = {
  scope: "featured" | "standard";
  groupIndex: number;
  childIndex: number;
};

const dropdownTransition = "200ms";

const useNavigationHeaderDropdownHeight = (
  open: boolean,
  contentKey: number | null
) => {
  const contentRef = useRef<TamaguiElement | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const content = contentRef.current;

    setHeight(
      open && content
        ? (content as unknown as { scrollHeight: number }).scrollHeight
        : 0
    );
  }, [contentKey, open]);

  return { contentRef, height };
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
  /** The product or company mark displayed at the start of the header. */
  logo: ReactNode;

  /** Primary destinations shown in the center on wide screens. */
  items: readonly NavigationHeaderItem[];

  /** Account and conversion actions displayed at the end of the header. */
  actions?: ReactNode;

  /** Accessible name for the primary navigation landmark. */
  navigationLabel?: string;

  /** Accessible name for the compact navigation trigger. */
  menuLabel?: string;
}

export const NavigationHeader =
  NavigationHeaderFrame.styleable<NavigationHeaderProps>(
    (
      {
        logo,
        items,
        actions,
        navigationLabel = "Primary navigation",
        menuLabel = "Navigation menu",
        onBlur,
        onMouseLeave,
        ...props
      },
      forwardedRef
    ) => {
      const [menuOpen, setMenuOpen] = useState(false);
      const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);
      const [hoveredItemIndex, setHoveredItemIndex] = useState<number | null>(
        null
      );
      const [hoveredDropdownItem, setHoveredDropdownItem] =
        useState<NavigationHeaderDropdownHover | null>(null);
      const isAtTop = useIsAtTop();
      const prefersReducedMotion = usePrefersReducedMotion();
      const mobileNavigationId = useId();
      const openItem =
        openItemIndex === null ? undefined : items[openItemIndex];
      const submenuOpen = Boolean(openItem?.children?.length);
      const { contentRef: dropdownContentRef, height: dropdownHeight } =
        useNavigationHeaderDropdownHeight(submenuOpen, openItemIndex);
      const scaleStyle = {
        transform: isAtTop ? "scale(1.25)" : "none",
        transition: prefersReducedMotion
          ? "none"
          : "transform 200ms ease-in-out"
      };
      const navigationStyle = {
        ...scaleStyle,
        // Keep each item's border-bottom in the same transformed navigation row.
        transform: `${isAtTop ? "scale(1.25) " : ""}translateY(-15%)`
      };
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
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setOpenItemIndex(null);
              setHoveredItemIndex(null);
              setHoveredDropdownItem(null);
            }
          }}>
          <NavigationHeaderBar>
            <NavigationHeaderLogo>
              <NavigationHeaderLogoContent style={scaleStyle}>
                {logo}
              </NavigationHeaderLogoContent>
            </NavigationHeaderLogo>

            <NavigationHeaderNavigation
              aria-label={navigationLabel}
              style={navigationStyle}>
              {items.map((item, index) => {
                const hasChildren = Boolean(item.children?.length);
                const active =
                  item.active ?? item.children?.some(child => child.active);
                const navigationItemColor =
                  hoveredItemIndex === null
                    ? undefined
                    : hoveredItemIndex === index
                      ? "$foregroundActive"
                      : "$foregroundInactive";
                const dropdownId = `${mobileNavigationId}-submenu-${index}`;

                return (
                  <NavigationHeaderItemFrame
                    key={`${item.href ?? "navigation-item"}-${index}`}
                    active={active}
                    borderBottomColor={
                      active
                        ? (navigationItemColor ?? "$foreground")
                        : "$transparent"
                    }
                    position="relative"
                    onMouseEnter={() => {
                      setHoveredItemIndex(index);
                      setHoveredDropdownItem(null);
                    }}>
                    {hasChildren ? (
                      <>
                        <NavigationHeaderItemLink
                          group={false}
                          inverse={true}
                          underline="none"
                          render="button"
                          role="button"
                          aria-controls={dropdownId}
                          aria-expanded={openItemIndex === index}
                          aria-haspopup="true"
                          active={active}
                          color={navigationItemColor}
                          gap="$lg"
                          onMouseEnter={() => setOpenItemIndex(index)}
                          onFocus={() => setOpenItemIndex(index)}
                          onKeyDown={event => {
                            if (event.key === "Escape") {
                              setOpenItemIndex(null);
                            }
                          }}
                          onPress={() => setOpenItemIndex(index)}>
                          {item.label}
                          <ChevronDown
                            aria-hidden={true}
                            color="currentColor"
                            size={16}
                          />
                        </NavigationHeaderItemLink>
                      </>
                    ) : (
                      <NavigationHeaderItemLink
                        group={false}
                        inverse={true}
                        underline="none"
                        href={item.href}
                        target={item.target}
                        external={item.external}
                        active={item.active}
                        color={navigationItemColor}
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

            {actions ? (
              <NavigationHeaderActions>{actions}</NavigationHeaderActions>
            ) : (
              <NavigationHeaderEdge />
            )}

            <NavigationHeaderMenuButtonSlot>
              <NavigationHeaderMenuButton
                aria-controls={mobileNavigationId}
                aria-expanded={menuOpen}
                aria-label={
                  menuOpen ? `Close ${menuLabel}` : `Open ${menuLabel}`
                }
                onPress={() => setMenuOpen(open => !open)}>
                {menuOpen ? (
                  <X aria-hidden={true} />
                ) : (
                  <Menu aria-hidden={true} />
                )}
              </NavigationHeaderMenuButton>
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
            height={dropdownHeight}
            transition={prefersReducedMotion ? "none" : dropdownTransition}
            onMouseLeave={() => setHoveredDropdownItem(null)}>
            {openItem?.children?.length ? (
              <NavigationHeaderDropdownContent ref={dropdownContentRef}>
                {groupNavigationHeaderChildren(openItem.children).map(
                  (group, groupIndex) => (
                    <NavigationHeaderDropdownGroup
                      key={`${group.label ?? "navigation-group"}-${groupIndex}`}>
                      {group.label ? (
                        <NavigationHeaderDropdownGroupLabel>
                          {group.label}
                        </NavigationHeaderDropdownGroupLabel>
                      ) : null}

                      {group.items.map((child, childIndex) => {
                        const scope = group.featured ? "featured" : "standard";
                        const hovered = hoveredDropdownItem?.scope === scope;
                        const color = hovered
                          ? hoveredDropdownItem.groupIndex === groupIndex &&
                            hoveredDropdownItem.childIndex === childIndex
                            ? "$foregroundActive"
                            : "$foregroundInactive"
                          : undefined;

                        return (
                          <NavigationHeaderDropdownLink
                            key={`${child.href ?? "navigation-child"}-${childIndex}`}
                            group={false}
                            inverse={true}
                            underline="none"
                            featured={child.featured}
                            href={child.href}
                            target={child.target}
                            external={child.external}
                            color={color}
                            aria-current={child.active ? "page" : undefined}
                            onMouseEnter={() =>
                              setHoveredDropdownItem({
                                scope,
                                groupIndex,
                                childIndex
                              })
                            }
                            onPress={event => {
                              child.onPress?.(event);
                              setOpenItemIndex(null);
                            }}>
                            {child.label}
                          </NavigationHeaderDropdownLink>
                        );
                      })}
                    </NavigationHeaderDropdownGroup>
                  )
                )}
              </NavigationHeaderDropdownContent>
            ) : null}
          </NavigationHeaderDropdown>

          <NavigationHeaderMobilePanel id={mobileNavigationId} open={menuOpen}>
            <NavigationHeaderMobileNavigation aria-label={navigationLabel}>
              {items.map((item, index) => (
                <View
                  key={`${item.href ?? "mobile-navigation-item"}-${index}`}
                  width="100%">
                  <NavigationHeaderItemFrame
                    active={
                      item.active || item.children?.some(child => child.active)
                    }
                    mobile={true}>
                    <NavigationHeaderItemLink
                      group={false}
                      inverse={true}
                      underline="none"
                      href={item.href}
                      target={item.target}
                      external={item.external}
                      active={item.active}
                      mobile={true}
                      aria-current={item.active ? "page" : undefined}
                      onPress={event => {
                        item.onPress?.(event);
                        setMenuOpen(false);
                      }}>
                      {item.label}
                    </NavigationHeaderItemLink>
                  </NavigationHeaderItemFrame>

                  {item.children?.length ? (
                    <NavigationHeaderMobileChildren>
                      {groupNavigationHeaderChildren(item.children).map(
                        (group, groupIndex) => (
                          <View
                            key={`${group.label ?? "mobile-navigation-group"}-${groupIndex}`}
                            width="100%">
                            {group.label ? (
                              <NavigationHeaderMobileGroupLabel>
                                {group.label}
                              </NavigationHeaderMobileGroupLabel>
                            ) : null}

                            {group.items.map((child, childIndex) => (
                              <NavigationHeaderMobileChildLink
                                key={`${child.href ?? "mobile-navigation-child"}-${childIndex}`}
                                group={false}
                                inverse={true}
                                underline="none"
                                href={child.href}
                                target={child.target}
                                external={child.external}
                                aria-current={child.active ? "page" : undefined}
                                onPress={event => {
                                  child.onPress?.(event);
                                  setMenuOpen(false);
                                }}>
                                {child.label}
                              </NavigationHeaderMobileChildLink>
                            ))}
                          </View>
                        )
                      )}
                    </NavigationHeaderMobileChildren>
                  ) : null}
                </View>
              ))}
            </NavigationHeaderMobileNavigation>

            {actions && (
              <NavigationHeaderMobileActions>
                {actions}
              </NavigationHeaderMobileActions>
            )}
          </NavigationHeaderMobilePanel>
        </NavigationHeaderFrame>
      );
    },
    { staticConfig: { componentName: "NavigationHeader" } }
  );
