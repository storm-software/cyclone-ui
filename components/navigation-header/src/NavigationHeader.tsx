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

import { EyebrowText } from "@cyclone-ui/eyebrow-text";
import { HeadingLargeText } from "@cyclone-ui/heading-text";
import { CaretDown, List, X } from "@cyclone-ui/icons";
import { Link } from "@cyclone-ui/link";
import type { GetProps, TamaguiElement } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import type { KeyboardEvent, ReactElement, ReactNode } from "react";
import {
  Children,
  isValidElement,
  useEffect,
  useId,
  useRef,
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
  displayName: "NavigationHeader",
  render: "header",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: "40",
  width: "100%",
  backgroundColor: "surfaceCanvas"
});

const NavigationHeaderBar = styled(View, {
  displayName: "NavigationHeaderBar",
  width: "100%",
  maxWidth: 1440,
  boxSizing: "border-box",
  marginHorizontal: "auto",
  paddingHorizontal: "4xl max-md:2xl",
  alignItems: "center",
  flexDirection: "row",
  gap: "5xl"
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

const NavigationHeaderNavigation = styled(View, {
  displayName: "NavigationHeaderNavigation",
  render: "nav",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  gap: "6xl",
  transformOrigin: "center",
  display: "max-md:none"
});

const NavigationHeaderItemFrame = styled(View, {
  displayName: "NavigationHeaderItem",
  display: "block",
  width: "fit-content",
  flexShrink: 0,
  borderBottomWidth: 2,
  borderBottomColor: "transparent",
  variants: {
    active: {
      true: {
        color: "accent",
        borderBottomColor: "accent"
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
  width: "100%",
  minWidth: "fit-content",
  paddingVertical: "2xl",
  paddingBottom: 5,
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  color: "inkBody hover:accent focus-visible:accent",
  fontWeight: 500,
  textDecorationLine: "none hover:none",
  outlineColor: "focus-visible:accent",
  outlineOffset: "focus-visible:-4px",
  outlineStyle: "focus-visible:solid",
  outlineWidth: "focus-visible:2px",
  variants: {
    active: {
      true: {
        color: "accent"
      }
    },
    mobile: {
      true: {
        minHeight: "11xl",
        paddingHorizontal: "5xl",
        paddingTop: 0,
        justifyContent: "flex-start"
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
  backgroundColor: "surfaceCanvas",
  borderBottomWidth: 1,
  borderBottomColor: "hairline",
  display: "max-md:none",
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
  marginBottom: "xl",
  color: "inkSubtle",
  variant: "sm"
});

const NavigationHeaderDropdownLink = styled(Link, {
  displayName: "NavigationHeaderDropdownLink",
  width: "100%",
  minHeight: "10xl",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  display: "flex",
  color: "inkBody hover:accent focus-visible:accent",
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

const NavigationHeaderMobileGroupLabel = styled(
  NavigationHeaderDropdownGroupLabel,
  {
    displayName: "NavigationHeaderMobileGroupLabel",
    marginTop: "2xl",
    marginBottom: "md",
    paddingHorizontal: "5xl"
  }
);

const NavigationHeaderActions = styled(NavigationHeaderEdge, {
  displayName: "NavigationHeaderActions",
  paddingVertical: "2xl",
  justifyContent: "flex-end",
  gap: "2xl",
  display: "max-md:none"
});

const NavigationHeaderMenuButtonSlot = styled(View, {
  displayName: "NavigationHeaderMenuButtonSlot",
  display: "none max-md:flex",
  marginLeft: "auto"
});

const NavigationHeaderMenuButton = styled(View, {
  displayName: "NavigationHeaderMenuButton",
  render: "button",
  role: "button",
  width: "11xl",
  height: "11xl",
  padding: 0,
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  backgroundColor: "transparent hover:mutedHover press:mutedActive",
  borderWidth: 0,
  borderRadius: "full",
  boxShadow: "focus-visible:ringOffset"
});

const NavigationHeaderMobilePanel = styled(View, {
  displayName: "NavigationHeaderMobilePanel",
  display: "none",
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  maxHeight: "calc(100vh - 52px)",
  paddingVertical: "2xl",
  overflowY: "auto",
  backgroundColor: "surfaceCanvas",
  borderBottomWidth: 1,
  borderBottomColor: "hairline",
  boxShadow: "md",
  variants: {
    open: {
      true: {
        display: "max-md:flex"
      }
    }
  } as const
});

const NavigationHeaderMobileNavigation = styled(View, {
  displayName: "NavigationHeaderMobileNavigation",
  render: "nav",

  width: "100%",
  flexDirection: "column"
});

const NavigationHeaderMobileChildren = styled(View, {
  displayName: "NavigationHeaderMobileChildren",
  width: "100%",
  paddingLeft: "5xl",
  paddingBottom: "2xl",
  flexDirection: "column"
});

const NavigationHeaderMobileChildLink = styled(NavigationHeaderDropdownLink, {
  displayName: "NavigationHeaderMobileChildLink",
  minHeight: "10xl",
  paddingHorizontal: "5xl",
  backgroundColor: "transparent"
});

const NavigationHeaderMobileActions = styled(View, {
  displayName: "NavigationHeaderMobileActions",
  marginTop: "2xl",
  paddingTop: "5xl",
  paddingHorizontal: "5xl",
  paddingBottom: "3xl",
  alignItems: "stretch",
  flexDirection: "column",
  gap: "2xl",
  borderTopWidth: 1,
  borderTopColor: "hairline"
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
  /** Compose the logo, navigation, actions, and optional menu button. */
  children: ReactNode;
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

const getSlots = <Props,>(children: ReactNode, slot: unknown) =>
  Children.toArray(children).filter(
    (child): child is ReactElement<Props> =>
      isValidElement<Props>(child) && child.type === slot
  );

const getSlot = <Props,>(children: ReactNode, slot: unknown) =>
  getSlots<Props>(children, slot).at(0);

const getItemLabel = (children: ReactNode) =>
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
      onBlur,
      onMouseLeave,
      ...props
    }: GetProps<typeof NavigationHeaderFrame> & NavigationHeaderProps,
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
    const menuButton = getSlot<NavigationHeaderMenuButtonProps>(
      children,
      NavigationHeaderMenuButtonSlotComponent
    );
    const items = getNavigationHeaderItems(navigation?.props.children);
    const navigationLabel = navigation?.props.label ?? "Primary navigation";
    const menuLabel = menuButton?.props.label ?? "Navigation menu";
    const openItem = openItemIndex === null ? undefined : items[openItemIndex];
    const submenuOpen = Boolean(openItem?.children?.length);
    const { contentRef: dropdownContentRef, height: dropdownHeight } =
      useNavigationHeaderDropdownHeight(submenuOpen, openItemIndex);
    // Tamagui's motion driver only animates its own transform props; a
    // transition set through `style` is dropped.
    const scaleProps = {
      scale: isAtTop ? 1.25 : 1,
      transition: prefersReducedMotion ? "none" : scaleTransition
    };
    // Keep each item's border-bottom in the same transformed navigation row.
    // Tamagui translates before scaling, so scale the offset with the row.
    const navigationY = isAtTop ? "-18.75%" : "-15%";

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
        <NavigationHeaderBar>
          <NavigationHeaderLogo>
            <NavigationHeaderLogoContent {...scaleProps}>
              {logo}
            </NavigationHeaderLogoContent>
          </NavigationHeaderLogo>

          <NavigationHeaderNavigation
            aria-label={navigationLabel}
            y={navigationY}
            {...scaleProps}>
            {items.map((item, index) => {
              const hasChildren = Boolean(item.children?.length);
              const active =
                item.active ?? item.children?.some(child => child.active);
              const navigationItemColor =
                hoveredItemIndex === null
                  ? undefined
                  : hoveredItemIndex === index
                    ? "accentActive"
                    : "accentInactive";
              const dropdownId = `${mobileNavigationId}-submenu-${index}`;

              return (
                <NavigationHeaderItemFrame
                  key={`${item.href ?? "navigation-item"}-${index}`}
                  active={active}
                  borderBottomColor={
                    active ? (navigationItemColor ?? "accent") : "transparent"
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
                        color={navigationItemColor}
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
                        onKeyDown={(
                          event: KeyboardEvent<HTMLButtonElement>
                        ) => {
                          if (event.key === "Escape") {
                            setOpenItemIndex(null);
                          }
                        }}
                        onPress={() => setOpenItemIndex(index)}>
                        {item.label}
                        <CaretDown
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
              aria-label={menuOpen ? `Close ${menuLabel}` : `Open ${menuLabel}`}
              onPress={() => setMenuOpen(open => !open)}>
              {menuOpen ? (
                <X aria-hidden={true} />
              ) : (
                <List aria-hidden={true} />
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
                          ? "accentActive"
                          : "accentInactive"
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
                          onPress={(event: NavigationHeaderPressEvent) => {
                            child.onPress?.(event);
                            setOpenItemIndex(null);
                          }}>
                          {child.featured ? (
                            <HeadingLargeText>
                              {child.label}
                            </HeadingLargeText>
                          ) : (
                            child.label
                          )}
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
                    item.active ?? item.children?.some(child => child.active)
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
                    onPress={(event: NavigationHeaderPressEvent) => {
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
                              onPress={(event: NavigationHeaderPressEvent) => {
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
  Actions: NavigationHeaderActionsSlot,
  MenuButton: NavigationHeaderMenuButtonSlotComponent
});
