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
import type { GetProps } from "@tamagui/core";
import { styled, Text, View } from "@tamagui/core";
import { ChevronDown, Menu, X } from "@tamagui/lucide-icons-2";
import type { ReactNode } from "react";
import { useId, useState } from "react";

const NavigationHeaderFrame = styled(View, {
  name: "NavigationHeader",
  render: "header",

  position: "relative",
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

const NavigationHeaderNavigation = styled(View, {
  name: "NavigationHeaderNavigation",
  render: "nav",

  height: "100%",
  alignItems: "stretch",
  justifyContent: "center",
  flexDirection: "row",
  gap: "$6xl",

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

  hoverStyle: {
    borderBottomColor: "$borderHover"
  },

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
  paddingVertical: "$xl",
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

  transition: "400ms",
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  zIndex: "$50",
  backgroundColor: "$backgroundPage",
  borderBottomWidth: 1,
  borderBottomColor: "$borderSubtle",
  boxShadow: "$lg",

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
  paddingHorizontal: "$3xl",
  alignItems: "center",
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
      const mobileNavigationId = useId();
      const openItem =
        openItemIndex === null ? undefined : items[openItemIndex];

      return (
        <NavigationHeaderFrame
          ref={forwardedRef}
          {...props}
          onMouseLeave={event => {
            onMouseLeave?.(event);
            setOpenItemIndex(null);
          }}
          onBlur={event => {
            onBlur?.(event);
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setOpenItemIndex(null);
            }
          }}>
          <NavigationHeaderBar>
            <NavigationHeaderLogo>{logo}</NavigationHeaderLogo>

            <NavigationHeaderNavigation aria-label={navigationLabel}>
              {items.map((item, index) => {
                const hasChildren = Boolean(item.children?.length);
                const active =
                  item.active || item.children?.some(child => child.active);
                const dropdownId = `${mobileNavigationId}-submenu-${index}`;

                return (
                  <NavigationHeaderItemFrame
                    key={`${item.href ?? "navigation-item"}-${index}`}
                    active={active}
                    position="relative">
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
                          gap="$lg"
                          onMouseEnter={() => setOpenItemIndex(index)}
                          onKeyDown={event => {
                            if (event.key === "Escape") {
                              setOpenItemIndex(null);
                            }
                          }}
                          onPress={() =>
                            setOpenItemIndex(current =>
                              current === index ? null : index
                            )
                          }>
                          {item.label}
                          <ChevronDown aria-hidden={true} size={16} />
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

          {openItem?.children?.length ? (
            <NavigationHeaderDropdown
              id={`${mobileNavigationId}-submenu-${openItemIndex}`}>
              <NavigationHeaderDropdownContent>
                {groupNavigationHeaderChildren(openItem.children).map(
                  (group, groupIndex) => (
                    <NavigationHeaderDropdownGroup
                      key={`${group.label ?? "navigation-group"}-${groupIndex}`}>
                      {group.label ? (
                        <NavigationHeaderDropdownGroupLabel>
                          {group.label}
                        </NavigationHeaderDropdownGroupLabel>
                      ) : null}

                      {group.items.map((child, childIndex) => (
                        <NavigationHeaderDropdownLink
                          key={`${child.href ?? "navigation-child"}-${childIndex}`}
                          group={false}
                          inverse={true}
                          underline="none"
                          featured={child.featured}
                          href={child.href}
                          target={child.target}
                          external={child.external}
                          aria-current={child.active ? "page" : undefined}
                          onPress={event => {
                            child.onPress?.(event);
                            setOpenItemIndex(null);
                          }}>
                          {child.label}
                        </NavigationHeaderDropdownLink>
                      ))}
                    </NavigationHeaderDropdownGroup>
                  )
                )}
              </NavigationHeaderDropdownContent>
            </NavigationHeaderDropdown>
          ) : null}

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
