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
import { ArrowsVertical, ChevronRight, Search } from "@cyclone-ui/icons";
import { Kbd, KbdGroup } from "@cyclone-ui/kbd";
import type { ScrollViewProps } from "@cyclone-ui/scroll-view";
import { ScrollView } from "@cyclone-ui/scroll-view";
import type { GetProps } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  Text,
  View,
  withStaticProperties
} from "@tamagui/core";
import type { ReactNode } from "react";
import { useId, useState } from "react";

/** Up to two initials, such as `DM` for "Dana Mireles". */
const getNavigationSidebarInitials = (name: string, max = 2) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, max)
    .map(word => word[0]!.toUpperCase())
    .join("");

const NavigationSidebarFrame = styled(View, {
  displayName: "NavigationSidebar",
  render: "nav",
  flexGrow: 1,
  flexShrink: 1,
  minHeight: 0,
  flexDirection: "column",

  variants: {
    /** A rounded, bordered card, for a sidebar that sits on its own. */
    bordered: {
      true: {
        backgroundColor: "surface",
        borderWidth: 1,
        borderColor: "hairline",
        borderRadius: "2xl",
        overflow: "hidden"
      }
    }
  } as const
});

export type NavigationSidebarProps = GetProps<typeof NavigationSidebarFrame>;

const NavigationSidebarHeader = styled(View, {
  displayName: "NavigationSidebarHeader",
  flexShrink: 0,
  flexDirection: "column",
  gap: "2xl",
  padding: "4xl",
  paddingBottom: "md"
});

const NavigationSidebarBodyContent = styled(View, {
  displayName: "NavigationSidebarBodyContent",
  flexDirection: "column",
  gap: "md",
  paddingHorizontal: "4xl",
  paddingTop: "md",
  paddingBottom: "4xl"
});

/** The scroll container between the header and footer. */
const NavigationSidebarBody = ({ children, ...props }: ScrollViewProps) => (
  <ScrollView size="lg" flex={1} minHeight={0} {...props}>
    <NavigationSidebarBodyContent>{children}</NavigationSidebarBodyContent>
  </ScrollView>
);

const NavigationSidebarFooter = styled(View, {
  displayName: "NavigationSidebarFooter",
  flexShrink: 0,
  flexDirection: "column",
  gap: "2xl",
  padding: "4xl",
  borderTopWidth: 1,
  borderTopColor: "hairline"
});

// Icons paint with `currentColor`, which a View frame doesn't set.
const NavigationSidebarIcon = styled(Text, {
  displayName: "NavigationSidebarIcon",
  display: "flex",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center",
  color: "ink",

  variants: {
    active: {
      true: {
        color: "primary"
      }
    }
  } as const
});

const NavigationSidebarAvatar = styled(View, {
  displayName: "NavigationSidebarAvatar",
  flexShrink: 0,
  width: "8xl",
  height: "8xl",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",

  variants: {
    shape: {
      // A workspace logo.
      square: {
        backgroundColor: "emphasis",
        borderRadius: "lg"
      },
      // A person.
      circle: {
        borderWidth: 1,
        borderColor: "hairline",
        borderRadius: "full"
      }
    }
  } as const
});

const NavigationSidebarAvatarText = styled(BodyText, {
  render: "span",
  size: "sm",
  fontWeight: "600",

  variants: {
    shape: {
      square: { color: "canvas" },
      circle: { color: "emphasis" }
    }
  } as const
});

interface NavigationSidebarIdentityProps {
  shape: "square" | "circle";
  title: string;
  description?: ReactNode;
  /** An image or icon; defaults to the title's initials. */
  avatar?: ReactNode;
}

const NavigationSidebarIdentity = ({
  shape,
  title,
  description,
  avatar
}: NavigationSidebarIdentityProps) => (
  <>
    <NavigationSidebarAvatar aria-hidden={true} shape={shape}>
      {avatar ?? (
        <NavigationSidebarAvatarText shape={shape}>
          {getNavigationSidebarInitials(title, shape === "square" ? 1 : 2)}
        </NavigationSidebarAvatarText>
      )}
    </NavigationSidebarAvatar>
    <View flexGrow={1} flexShrink={1} minWidth={0}>
      <BodyText
        render="span"
        size="sm"
        color="emphasis"
        fontWeight="600"
        numberOfLines={1}>
        {title}
      </BodyText>
      {description ? (
        <BodyText render="span" size="xs" color="subtle" numberOfLines={1}>
          {description}
        </BodyText>
      ) : null}
    </View>
  </>
);

const NavigationSidebarBoxButton = styled(View, {
  displayName: "NavigationSidebarBoxButton",
  render: "button",
  role: "button",
  flexDirection: "row",
  alignItems: "center",
  gap: "2xl",
  minHeight: "10xl",
  paddingHorizontal: "2xl",
  cursor: "pointer",
  backgroundColor: "surface hover:secondary-hovered press:secondary-active",
  borderWidth: 1,
  borderColor: "hairline",
  borderRadius: "xl",
  boxShadow: "focus-visible:ring-offset",
  outlineWidth: 0
});

export interface NavigationSidebarSwitcherExtraProps {
  /** The workspace, team or product name. */
  title: string;
  /** A second line, such as the plan or role. */
  description?: ReactNode;
  /** The workspace logo; defaults to the title's first letter. */
  logo?: ReactNode;
}

export type NavigationSidebarSwitcherProps = Omit<
  GetProps<typeof NavigationSidebarBoxButton>,
  "children"
> &
  NavigationSidebarSwitcherExtraProps;

/**
 * Shows the current workspace and opens a way to switch it. Wrap it in a
 * menu or popover trigger, or handle `onPress`.
 */
const NavigationSidebarSwitcher = createStyledHOC(
  NavigationSidebarBoxButton,
  (
    { title, description, logo, ...props }: NavigationSidebarSwitcherProps,
    forwardedRef
  ) => (
    <NavigationSidebarBoxButton
      ref={forwardedRef}
      paddingVertical="xl"
      paddingLeft="xl"
      {...props}>
      <NavigationSidebarIdentity
        shape="square"
        title={title}
        description={description}
        avatar={logo}
      />
      <NavigationSidebarIcon>
        <ArrowsVertical aria-hidden={true} size={16} color="currentColor" />
      </NavigationSidebarIcon>
    </NavigationSidebarBoxButton>
  ),
  { displayName: "NavigationSidebarSwitcher" }
);

export interface NavigationSidebarSearchExtraProps {
  /** @default "Search" */
  placeholder?: string;
  /** Keys of the shortcut that opens search, such as `["Ctrl", "K"]`. */
  shortcut?: readonly string[];
}

export type NavigationSidebarSearchProps = Omit<
  GetProps<typeof NavigationSidebarBoxButton>,
  "children"
> &
  NavigationSidebarSearchExtraProps;

/** A button that opens search, such as a `SearchDialog`, from `onPress`. */
const NavigationSidebarSearch = createStyledHOC(
  NavigationSidebarBoxButton,
  (
    {
      placeholder = "Search",
      shortcut = [],
      ...props
    }: NavigationSidebarSearchProps,
    forwardedRef
  ) => (
    <NavigationSidebarBoxButton
      ref={forwardedRef}
      aria-label={placeholder}
      aria-keyshortcuts={shortcut.length > 0 ? shortcut.join("+") : undefined}
      {...props}>
      <NavigationSidebarIcon>
        <Search aria-hidden={true} size={16} color="currentColor" />
      </NavigationSidebarIcon>
      <BodyText
        render="span"
        size="sm"
        color="subtle"
        flexGrow={1}
        flexShrink={1}
        textAlign="left"
        numberOfLines={1}>
        {placeholder}
      </BodyText>
      {shortcut.length > 0 ? (
        <KbdGroup aria-hidden={true}>
          {shortcut.map(key => (
            <Kbd key={key}>{key}</Kbd>
          ))}
        </KbdGroup>
      ) : null}
    </NavigationSidebarBoxButton>
  ),
  { displayName: "NavigationSidebarSearch" }
);

const NavigationSidebarGroupLabel = styled(BodyText, {
  displayName: "NavigationSidebarGroupLabel",
  render: "span",
  size: "xs",
  color: "subtle",
  fontWeight: "500",
  paddingHorizontal: "2xl",
  paddingTop: "4xl",
  paddingBottom: "md"
});

export interface NavigationSidebarGroupProps {
  /** The group's heading, such as "Workspace". */
  label?: string;
  children?: ReactNode;
}

/** A labeled list of items and folders. */
const NavigationSidebarGroup = ({
  label,
  children
}: NavigationSidebarGroupProps) => {
  const labelId = useId();

  return (
    <View
      role="group"
      aria-labelledby={label ? labelId : undefined}
      flexDirection="column"
      gap="md">
      {label ? (
        <NavigationSidebarGroupLabel id={labelId}>
          {label}
        </NavigationSidebarGroupLabel>
      ) : null}
      {children}
    </View>
  );
};

const NavigationSidebarItemFrame = styled(View, {
  displayName: "NavigationSidebarItem",
  render: "a",
  flexDirection: "row",
  alignItems: "center",
  gap: "2xl",
  minHeight: "9xl",
  paddingHorizontal: "2xl",
  paddingVertical: "xl",
  borderRadius: "lg",
  cursor: "pointer",
  backgroundColor: "transparent hover:secondary-hovered press:secondary-active",
  borderWidth: 0,
  boxShadow: "focus-visible:ring-offset",
  outlineWidth: 0,
  textDecorationLine: "none",

  variants: {
    active: {
      true: {
        backgroundColor: "secondary"
      }
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: "not-allowed",
        pointerEvents: "none"
      }
    }
  } as const
});

const NavigationSidebarItemEnd = styled(Text, {
  displayName: "NavigationSidebarItemEnd",
  display: "flex",
  flexShrink: 0,
  alignItems: "center",
  color: "subtle",
  fontFamily: "body",
  fontSize: "xs",
  fontVariant: ["tabular-nums"]
});

export interface NavigationSidebarItemExtraProps {
  /** Renders a link; without it the item is a button. */
  href?: string;
  /** Rendered before the label, 16px with `color="currentColor"`. */
  icon?: ReactNode;
  /** Rendered after the label, such as an unread count. */
  end?: ReactNode;
  /** Marks the current page. */
  active?: boolean;
  disabled?: boolean;
  children: string;
}

export type NavigationSidebarItemProps = Omit<
  GetProps<typeof NavigationSidebarItemFrame>,
  keyof NavigationSidebarItemExtraProps
> &
  NavigationSidebarItemExtraProps;

/** A link (with `href`) or button with an icon, label and trailing content. */
const NavigationSidebarItem = createStyledHOC(
  NavigationSidebarItemFrame,
  (
    {
      href,
      icon,
      end,
      active = false,
      disabled = false,
      children,
      ...props
    }: NavigationSidebarItemProps,
    forwardedRef
  ) => (
    <NavigationSidebarItemFrame
      ref={forwardedRef}
      {...(href && !disabled
        ? { href }
        : { render: "button", role: "button", type: "button" })}
      active={active}
      disabled={disabled}
      aria-current={active ? "page" : undefined}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      {...props}>
      {icon ? (
        <NavigationSidebarIcon active={active}>{icon}</NavigationSidebarIcon>
      ) : null}
      <BodyText
        render="span"
        size="sm"
        flexGrow={1}
        flexShrink={1}
        textAlign="left"
        numberOfLines={1}
        color={active ? "primary" : "ink"}
        fontWeight={active ? "600" : undefined}>
        {children}
      </BodyText>
      {end === undefined || end === null ? null : (
        <NavigationSidebarItemEnd>{end}</NavigationSidebarItemEnd>
      )}
    </NavigationSidebarItemFrame>
  ),
  { displayName: "NavigationSidebarItem" }
);

const NavigationSidebarFolderItems = styled(View, {
  displayName: "NavigationSidebarFolderItems",
  flexDirection: "column",
  gap: "md",
  marginLeft: "4xl",
  paddingLeft: "lg",
  borderLeftWidth: 1,
  borderLeftColor: "hairline"
});

export interface NavigationSidebarFolderProps {
  label: string;
  icon?: ReactNode;
  /** Open on mount, such as when it holds the current page. */
  defaultOpen?: boolean;
  children?: ReactNode;
}

/** An item that expands to show nested items. */
const NavigationSidebarFolder = ({
  label,
  icon,
  defaultOpen = false,
  children
}: NavigationSidebarFolderProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const itemsId = useId();

  return (
    <>
      <NavigationSidebarItem
        icon={icon}
        aria-expanded={open}
        aria-controls={itemsId}
        end={
          <ChevronRight
            aria-hidden={true}
            size={14}
            color="currentColor"
            style={{ transform: `rotate(${open ? 90 : 0}deg)` }}
          />
        }
        onPress={() => setOpen(value => !value)}>
        {label}
      </NavigationSidebarItem>
      <NavigationSidebarFolderItems
        id={itemsId}
        display={open ? "flex" : "none"}>
        {children}
      </NavigationSidebarFolderItems>
    </>
  );
};

const NavigationSidebarAccountFrame = styled(View, {
  displayName: "NavigationSidebarAccount",
  flexDirection: "row",
  alignItems: "center",
  gap: "2xl"
});

export interface NavigationSidebarAccountExtraProps {
  name: string;
  /** A second line, such as the role or email. */
  description?: ReactNode;
  /** A profile image; defaults to the name's initials. */
  avatar?: ReactNode;
  /** Rendered after the name, such as a menu button. */
  end?: ReactNode;
}

export type NavigationSidebarAccountProps = Omit<
  GetProps<typeof NavigationSidebarAccountFrame>,
  "children"
> &
  NavigationSidebarAccountExtraProps;

/** The signed-in user, for the footer. */
const NavigationSidebarAccount = createStyledHOC(
  NavigationSidebarAccountFrame,
  (
    { name, description, avatar, end, ...props }: NavigationSidebarAccountProps,
    forwardedRef
  ) => (
    <NavigationSidebarAccountFrame ref={forwardedRef} {...props}>
      <NavigationSidebarIdentity
        shape="circle"
        title={name}
        description={description}
        avatar={avatar}
      />
      {end}
    </NavigationSidebarAccountFrame>
  ),
  { displayName: "NavigationSidebarAccount" }
);

/**
 * A sidebar for app and docs navigation. It fills its container, so it sits
 * on its own (pass `bordered` for a card) or inside `Page.SideNav`, which is
 * already a navigation landmark (pass `render="div"` there). Compose:
 *
 * - `Header`: a workspace `Switcher`, a `Search` button and anything else
 *   that stays put, such as a brand row with `Page.SideNavToggle`.
 * - `Body` (scrolls): `Group`s of `Item`s and `Folder`s.
 * - `Footer`: the signed-in `Account`.
 */
export const NavigationSidebar = withStaticProperties(NavigationSidebarFrame, {
  Header: NavigationSidebarHeader,
  Switcher: NavigationSidebarSwitcher,
  Search: NavigationSidebarSearch,
  Body: NavigationSidebarBody,
  Group: NavigationSidebarGroup,
  Item: NavigationSidebarItem,
  Folder: NavigationSidebarFolder,
  Footer: NavigationSidebarFooter,
  Account: NavigationSidebarAccount
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`NavigationSidebar.Item` is undefined on the server).
 */
export {
  NavigationSidebarAccount,
  NavigationSidebarBody,
  NavigationSidebarFolder,
  NavigationSidebarFooter,
  NavigationSidebarGroup,
  NavigationSidebarHeader,
  NavigationSidebarItem,
  NavigationSidebarSearch,
  NavigationSidebarSwitcher
};
