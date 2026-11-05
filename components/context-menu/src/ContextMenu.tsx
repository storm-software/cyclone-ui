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
import type { FormControlSize } from "@cyclone-ui/helpers";
import {
  formSizeVariants,
  getFormSizeToken,
  getSized,
  getSpaced
} from "@cyclone-ui/helpers";
import { ChevronRight, Confirm, Lock } from "@cyclone-ui/icons";
import type { PopoverVariant } from "@cyclone-ui/popover";
import { Popover } from "@cyclone-ui/popover";
import { Tooltip } from "@cyclone-ui/tooltip";
import type { GetProps, LayoutEvent, ThemeName } from "@tamagui/core";
import {
  createStyledContext,
  createStyledHOC,
  isWeb,
  styled,
  Theme,
  useMedia,
  useThemeName,
  View,
  withStaticProperties
} from "@tamagui/core";
import type { JSX, ReactNode } from "react";
import { createContext, use, useLayoutEffect, useMemo, useState } from "react";
import { getContextMenuSize } from "./utilities";

// Menus narrower than this center their item text, unless an item shows an
// indicator (see `CONTEXT_MENU_STYLES`).
const NARROW_MENU_WIDTH = getSized("20xl");

const CONTEXT_MENU_STYLES = `
[data-context-menu-item]:last-child [data-context-menu-item-divider] {
  display: none;
}

[data-context-menu-item-children]:not(:last-child) > [data-context-menu-item]:last-child [data-context-menu-item-divider] {
  display: flex;
}

[data-context-menu-item]:focus-visible {
  outline: none;
}

[data-context-menu-narrow]:not(:has([data-context-menu-item-adorned])) [data-context-menu-item-group] {
  justify-content: center;
}
`;

const ENABLED_ITEM_SELECTOR =
  "[data-context-menu-item]:not([aria-disabled='true'])";

interface ContextMenuContextValue {
  size: FormControlSize;
  value?: string;
  onValueChange?: (value: string) => void;
  variant?: PopoverVariant;
}

// A hovered, focused or highlighted item's background on each filled menu;
// the other menus use `floating-active`.
const ITEM_HIGHLIGHTS: Partial<Record<PopoverVariant, string>> = {
  primary: "primary-hovered",
  secondary: "secondary-hovered",
  tertiary: "surface-hovered"
};

// `dark_brand` / `brand` -> `brand`; `dark`, `base` and `dark_base` are
// uncolored.
const isUncoloredTheme = (themeName: string | null | undefined) => {
  const parts = themeName?.split("_") ?? [];
  const color = parts.length > 1 ? parts[1] : parts[0];

  return !color || color === "base" || color === "light" || color === "dark";
};

// The text and icon color on the `primary` / `secondary` menus, in every item
// state: the `on-*` colors have no state shades. `on-secondary` is faint on
// the uncolored themes' light `secondary`, so those use `primary` there, as
// `Button` does.
const useItemForeground = (variant: PopoverVariant | undefined) => {
  const themeName = useThemeName();

  return variant === "primary"
    ? "on-primary"
    : variant === "secondary"
      ? isUncoloredTheme(themeName)
        ? "primary"
        : "on-secondary"
      : undefined;
};

// The text, chevron and (when themed) icon color of an item in each state.
// Themed items rest at their theme's `primary`, not `primary-inactive`.
const getItemColor = ({
  selected,
  disabled,
  highlighted,
  themed
}: {
  selected: boolean;
  disabled: boolean;
  highlighted: boolean;
  themed: boolean;
}) =>
  disabled
    ? "primary-disabled"
    : selected
      ? "primary-active"
      : highlighted || themed
        ? "primary"
        : "primary-inactive group-hover/item:primary group-focus-visible/item:primary";

// Frames take `size` from the item rather than through `context`: a styled
// `context` merges every value (including `value`) into the frame's props.
const ContextMenuContext = createStyledContext<ContextMenuContextValue, "size">(
  { size: "md" },
  { keys: ["size"] }
);

// The enclosing item's state, for `ContextMenu.Item.Text`.
const ContextMenuItemStateContext = createContext({
  selected: false,
  disabled: false,
  highlighted: false,
  themed: false
});

export interface ContextMenuExtraProps {
  size?: FormControlSize;

  /**
   * The menu's surface (see `Popover`'s `variant`). `primary` and `secondary`
   * also draw the items in `on-primary` / `on-secondary`.
   */
  variant?: PopoverVariant;

  /**
   * The `value` of the selected item, which displays a check mark.
   */
  value?: string;

  /**
   * Called with an item's `value` when that item is pressed.
   */
  onValueChange?: (value: string) => void;
}

/**
 * A menu of actions that opens as a popover on large screens and as a bottom
 * sheet on small screens.
 */
const ContextMenuFrame = createStyledHOC(
  Popover,
  (
    {
      size = "md",
      value,
      onValueChange,
      variant,
      ...props
    }: Omit<GetProps<typeof Popover>, "size" | "variant"> &
      ContextMenuExtraProps,
    forwardedRef
  ) => (
    <ContextMenuContext.Provider
      size={size}
      value={value}
      onValueChange={onValueChange}
      variant={variant}>
      <Popover
        ref={forwardedRef}
        variant={variant}
        size={getFormSizeToken(size)}
        placement="bottom-start"
        // Floating UI applies the offset on whichever side the menu flips to.
        offset={getSpaced("2xl")}
        {...props}
      />
    </ContextMenuContext.Provider>
  ),
  { displayName: "ContextMenu" }
);

export type ContextMenuProps = GetProps<typeof ContextMenuFrame>;

export type ContextMenuContentProps = GetProps<typeof Popover.Content>;

const ContextMenuContent = ({
  children,
  ...props
}: ContextMenuContentProps): JSX.Element => {
  const { size } = ContextMenuContext.useStyledContext();
  const { contentPadding, contentGap } = getContextMenuSize(size);
  const [menu, setMenu] = useState<HTMLElement | null>(null);
  const [narrow, setNarrow] = useState(false);

  // Only the web styles read `narrow`. A `ResizeObserver`, not `onLayout`:
  // `onLayout` kept its first measurement, taken before the popover is sized.
  useLayoutEffect(() => {
    if (!menu || typeof ResizeObserver === "undefined") {
      return;
    }

    const resizeObserver = new ResizeObserver(([entry]) =>
      setNarrow(entry!.contentRect.width < NARROW_MENU_WIDTH)
    );
    resizeObserver.observe(menu);

    return () => resizeObserver.disconnect();
  }, [menu]);

  return (
    <Popover.Content maxWidth="90vw" padding={contentPadding} {...props}>
      {/* Adapted to a sheet, only the children render, so they carry the
          layout, styles and keyboard navigation. */}
      <View
        data-context-menu-narrow={narrow ? "" : undefined}
        gap={contentGap}
        width="100%"
        ref={setMenu as any}
        onKeyDown={(event: any) => {
          const step =
            event.key === "ArrowDown" ? 1 : event.key === "ArrowUp" ? -1 : 0;

          if (!step || event.defaultPrevented) {
            return;
          }

          const items: HTMLElement[] = Array.from(
            event.currentTarget.querySelectorAll(ENABLED_ITEM_SELECTOR)
          );
          const index = items.indexOf(
            event.currentTarget.ownerDocument.activeElement
          );
          const next =
            index < 0
              ? items.at(step > 0 ? 0 : -1)
              : items[(index + step + items.length) % items.length];

          if (next) {
            event.preventDefault();
            next.focus();
          }
        }}>
        {isWeb && <style>{CONTEXT_MENU_STYLES}</style>}
        {children}
      </View>
    </Popover.Content>
  );
};

// `paddingRight` keeps the items clear of the scrollbar, so it (and the
// scrollbar gutter) only applies once the content actually overflows.
const ContextMenuScrollView = ({
  children,
  onLayout,
  onContentSizeChange,
  style,
  ...props
}: GetProps<typeof Popover.Content.ScrollView>): JSX.Element => {
  const [viewportHeight, setViewportHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const isOverflowing = contentHeight > viewportHeight + 1;

  return (
    <Popover.Content.ScrollView
      size="lg"
      maxHeight="47xl"
      paddingRight={isOverflowing ? "3xl" : 0}
      {...props}
      style={[style, { scrollbarGutter: "auto" }]}
      onLayout={(event: LayoutEvent) => {
        setViewportHeight(event.nativeEvent.layout.height);
        onLayout?.(event);
      }}
      onContentSizeChange={(width: number, height: number) => {
        setContentHeight(height);
        onContentSizeChange?.(width, height);
      }}>
      <View width="100%">{children}</View>
    </Popover.Content.ScrollView>
  );
};

const ContextMenuItemFrame = styled(View, {
  displayName: "ContextMenu",
  render: "button",
  transition: "200ms",
  cursor: "pointer",
  backgroundColor: "transparent",
  position: "relative",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
  borderWidth: 0,
  borderRadius: "button",
  outlineStyle: "focus-visible:none",
  outlineWidth: "focus-visible:0px",

  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((val: FormControlSize) => {
        const { itemFramePaddingHorizontal, itemPaddingVertical } =
          getContextMenuSize(val);

        return {
          paddingHorizontal: itemFramePaddingHorizontal,
          paddingVertical: itemPaddingVertical
        };
      })
    ),

    disabled: {
      true: {
        cursor: "not-allowed"
      }
    }
  } as const,

  defaultVariants: {
    size: "md",
    disabled: false
  }
});

const ContextMenuItemBackground = styled(View, {
  displayName: "ContextMenu",
  transition: "200ms",
  position: "absolute",
  left: 0,
  right: 0,
  borderRadius: "button",
  // `focus-visible`, not `focus`: opening the menu focuses its first item,
  // which should only look highlighted when navigating by keyboard.
  backgroundColor:
    "transparent group-hover/item:floating-active group-focus-visible/item:floating-active",
  pointerEvents: "none",

  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((val: FormControlSize) => {
        const inset = getContextMenuSize(val).itemPaddingVertical;

        return { top: inset, bottom: inset };
      })
    ),

    // Highlighted without focus, such as a combobox's active option.
    highlighted: {
      true: {
        backgroundColor: "floating-active"
      }
    },

    disabled: {
      true: {
        backgroundColor:
          "group-hover/item:transparent group-focus-visible/item:transparent"
      }
    }
  } as const,
  defaultVariants: {
    size: "md",
    highlighted: false,
    disabled: false
  }
});

const ContextMenuItemDivider = styled(View, {
  displayName: "ContextMenu",
  position: "absolute",
  bottom: 0,
  borderBottomWidth: 1,
  borderBottomColor: "hairline",
  pointerEvents: "none",

  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((val: FormControlSize) => {
        const inset = getContextMenuSize(val).dividerInset;

        return { left: inset, right: inset };
      })
    )
  } as const,

  defaultVariants: {
    size: "md"
  }
});

const ContextMenuItemGroup = styled(View, {
  displayName: "ContextMenu",
  transition: "200ms",
  position: "relative",
  cursor: "inherit",
  flexDirection: "row",
  gap: "sm",
  alignItems: "center",
  flex: 1,
  minWidth: 0,

  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((val: FormControlSize) => {
        const { lineHeight, itemPaddingHorizontal } = getContextMenuSize(val);

        return {
          minHeight: lineHeight,
          paddingHorizontal: itemPaddingHorizontal
        };
      })
    ),

    disabled: {
      true: {
        opacity: 0.5
      }
    }
  } as const,

  defaultVariants: {
    size: "md",
    disabled: false
  }
});

export type ContextMenuItemProps = Omit<
  GetProps<typeof ContextMenuItemFrame>,
  "size"
> & {
  /**
   * Passed to the menu's `onValueChange` on press. The item is selected, and
   * shows a check mark, when it equals the menu's `value`.
   */
  value?: string;

  /**
   * Shows the item as hovered while focus stays elsewhere, for example on a
   * combobox's `aria-activedescendant` option.
   */
  highlighted?: boolean;

  /**
   * Colors the item's text and icons with this theme's `primary` tokens
   * (`primary-inactive`, `primary`, `primary-active`, ...), for example
   * `danger` on a destructive action.
   */
  theme?: ThemeName | null;

  /**
   * Child items, shown in a submenu that opens beside this item (on hover,
   * press or `ArrowRight`). The item shows a right chevron.
   */
  items?: ReactNode;
};

const ContextMenuItem = ({
  children,
  value,
  highlighted = false,
  disabled: disabledProp,
  theme,
  items,
  onPress,
  onKeyDown,
  ...props
}: ContextMenuItemProps): JSX.Element => {
  const {
    size,
    value: selectedValue,
    onValueChange,
    variant
  } = ContextMenuContext.useStyledContext();

  const disabled = Boolean(disabledProp);
  const highlight = variant && ITEM_HIGHLIGHTS[variant];
  const themed = Boolean(theme);

  // A themed item keeps its theme's `primary` colors on every menu surface.
  const foreground = useItemForeground(themed ? undefined : variant);
  const selected = value !== undefined && value === selectedValue;
  const hasItems = Boolean(items) && !disabled;
  const { indicatorWidth, indicatorIconSize, confirmIconSize } =
    getContextMenuSize(size);
  const [open, setOpen] = useState(false);

  // Where the menu is a bottom sheet (`Popover`'s `max-sm`), child items
  // expand inline: a submenu popover would fight the sheet's focus trap.
  const inline = Boolean((useMedia() as Record<string, boolean>)["max-sm"]);

  const itemState = useMemo(
    () => ({ selected, disabled, highlighted, themed }),
    [selected, disabled, highlighted, themed]
  );

  const frame = (
    <ContextMenuItemFrame
      // Not typed on a styled View; keeps the item from submitting a form.
      {...({ type: "button" } as object)}
      group="item"
      data-context-menu-item
      // Rows with an indicator keep a narrow menu's text left-aligned.
      data-context-menu-item-adorned={
        selected || disabled || hasItems ? "" : undefined
      }
      aria-disabled={disabled || undefined}
      size={size}
      disabled={disabled}
      {...props}
      onPress={event => {
        if (disabled) {
          return;
        }

        onPress?.(event);
        if (hasItems) {
          setOpen(inline ? !open : true);
        }
        if (value !== undefined) {
          onValueChange?.(value);
        }
      }}
      onKeyDown={(event: any) => {
        onKeyDown?.(event);
        if (hasItems && event.key === "ArrowRight") {
          event.preventDefault();
          setOpen(true);
        } else if (inline && open && event.key === "ArrowLeft") {
          event.preventDefault();
          setOpen(false);
        }
      }}>
      <ContextMenuItemBackground
        size={size}
        highlighted={highlighted}
        disabled={disabled}
        {...(highlight && {
          backgroundColor: disabled
            ? "transparent"
            : highlighted
              ? highlight
              : `transparent group-hover/item:${highlight} group-focus-visible/item:${highlight}`
        })}
      />
      {/* Only the content: the hover background stays the menu's. */}
      <Theme name={theme}>
        <ContextMenuItemGroup
          size={size}
          disabled={disabled}
          data-context-menu-item-group>
          {children}
          {(selected || disabled || hasItems) && (
            <View
              aria-hidden={true}
              width={indicatorWidth}
              marginLeft="auto"
              flexShrink={0}
              alignItems="flex-end"
              justifyContent="center">
              {disabled ? (
                <Lock
                  size={indicatorIconSize}
                  variant="bold"
                  color={foreground ?? "primary-disabled"}
                />
              ) : selected ? (
                <View paddingLeft="lg">
                  <Confirm
                    size={confirmIconSize}
                    variant="bold"
                    color={foreground ?? "primary-active"}
                  />
                </View>
              ) : (
                // Follows the item's hover through CSS, like the text.
                <BodyText
                  render="span"
                  display="flex"
                  transition="200ms"
                  rotate={inline && open ? "90deg" : "0deg"}
                  color={foreground ?? getItemColor(itemState)}>
                  <ChevronRight
                    size={indicatorIconSize}
                    variant="bold"
                    color="currentColor"
                    // The wrapper animates the color; the icon's own CSS
                    // transition would ease it a second time and lag.
                    style={{ transition: "none" } as object}
                  />
                </BodyText>
              )}
            </View>
          )}
        </ContextMenuItemGroup>
      </Theme>
      <ContextMenuItemDivider size={size} data-context-menu-item-divider />
    </ContextMenuItemFrame>
  );

  return (
    <ContextMenuItemStateContext.Provider value={itemState}>
      {hasItems && inline ? (
        <>
          {frame}
          {open && (
            <View
              data-context-menu-item-children
              paddingLeft="3xl"
              onKeyDown={(event: any) => {
                if (event.key === "ArrowLeft" && !event.defaultPrevented) {
                  event.preventDefault();
                  setOpen(false);
                  // Back to this item, which follows the child items.
                  event.currentTarget.previousElementSibling?.focus();
                }
              }}>
              {items}
            </View>
          )}
        </>
      ) : hasItems ? (
        <Popover
          open={open}
          onOpenChange={setOpen}
          variant={variant}
          size={getFormSizeToken(size)}
          placement="right-start"
          offset={getSpaced("2xl")}
          hoverable={true}
          // Opened by hover, press or `ArrowRight`, not by arrowing past it.
          disableFocus={true}
          shouldAdapt={false}>
          {/* Pressing opens rather than toggles: hovering already opened it. */}
          <Popover.Trigger asChild={true} disablePressTrigger={true}>
            {frame}
          </Popover.Trigger>
          <ContextMenuContent
            onKeyDown={(event: any) => {
              // A nested submenu handles its own `ArrowLeft` first.
              if (event.key === "ArrowLeft" && !event.defaultPrevented) {
                event.preventDefault();
                setOpen(false);
              }
            }}>
            {/* Like the menu's items, inside a scroll view: the content's
                `gap` would otherwise space every item apart. */}
            <ContextMenuScrollView>{items}</ContextMenuScrollView>
          </ContextMenuContent>
        </Popover>
      ) : (
        frame
      )}
    </ContextMenuItemStateContext.Provider>
  );
};

const ContextMenuItemText = (props: GetProps<typeof BodyText>): JSX.Element => {
  const { size, variant } = ContextMenuContext.useStyledContext();
  const foreground = useItemForeground(variant);
  const itemState = use(ContextMenuItemStateContext);
  const {
    fontSize,
    lineHeight,
    itemTextPaddingVertical,
    itemTextPaddingHorizontal
  } = getContextMenuSize(size);
  const [text, setText] = useState<HTMLElement | null>(null);
  const [truncated, setTruncated] = useState(false);

  // Show the full text in a tooltip only while it is cut off.
  useLayoutEffect(() => {
    if (!text || typeof ResizeObserver === "undefined") {
      return;
    }

    const resizeObserver = new ResizeObserver(() =>
      setTruncated(text.scrollWidth > text.clientWidth)
    );
    resizeObserver.observe(text);

    return () => resizeObserver.disconnect();
  }, [text, props.children]);

  const content = (
    <BodyText
      ref={setText as any}
      render="span"
      transition="200ms"
      cursor="inherit"
      // On the text: a View frame doesn't emit `color` for it to inherit.
      color={(!itemState.themed && foreground) || getItemColor(itemState)}
      fontSize={fontSize}
      lineHeight={`${lineHeight}px`}
      fontWeight={itemState.selected ? "semibold" : "normal"}
      paddingVertical={itemTextPaddingVertical}
      paddingHorizontal={itemTextPaddingHorizontal}
      // One line, cut short with an ellipsis when it doesn't fit.
      numberOfLines={1}
      flexShrink={1}
      minWidth={0}
      {...props}
    />
  );

  // Only wrapped while truncated: a long list (the country selector) would
  // otherwise mount a tooltip per item.
  return truncated ? (
    <Tooltip groupId="context-menu-item">
      <Tooltip.Trigger asChild={true}>{content}</Tooltip.Trigger>
      <Tooltip.Content maxWidth="30xl">
        <View paddingVertical="2xl" paddingHorizontal="3xl">
          <BodyText>{props.children}</BodyText>
        </View>
      </Tooltip.Content>
    </Tooltip>
  ) : (
    content
  );
};

// A leading icon, flag or other adornment.
const ContextMenuItemIcon = (props: GetProps<typeof BodyText>): JSX.Element => {
  const { size, variant } = ContextMenuContext.useStyledContext();
  const { fontSize, lineHeight } = getContextMenuSize(size);
  const foreground = useItemForeground(variant);
  const itemState = use(ContextMenuItemStateContext);
  const color = itemState.themed ? getItemColor(itemState) : foreground;

  return (
    <BodyText
      render="span"
      aria-hidden={true}
      transition="200ms"
      {...(color && { color })}
      flexShrink={0}
      minWidth="2xl"
      marginRight="lg"
      fontSize={fontSize}
      lineHeight={`${lineHeight}px`}
      {...props}
    />
  );
};

// The item's main text, filling the space before any trailing text.
const ContextMenuItemLabel = (
  props: GetProps<typeof BodyText>
): JSX.Element => <ContextMenuItemText flex={1} minWidth={0} {...props} />;

export const ContextMenu = withStaticProperties(ContextMenuFrame, {
  Trigger: Popover.Trigger,
  Anchor: Popover.Anchor,
  Content: withStaticProperties(ContextMenuContent, {
    ScrollView: ContextMenuScrollView
  }),
  Item: withStaticProperties(ContextMenuItem, {
    Text: ContextMenuItemText,
    Icon: ContextMenuItemIcon,
    Label: ContextMenuItemLabel
  })
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`ContextMenu.Trigger` is undefined on the server).
 */
export {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuItemIcon,
  ContextMenuItemLabel,
  ContextMenuItemText,
  ContextMenuScrollView
};
export const ContextMenuTrigger = Popover.Trigger;
export const ContextMenuAnchor = Popover.Anchor;
