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

import { BodyText } from "@cyclone-ui/body-text";
import type { FormControlSize } from "@cyclone-ui/helpers";
import {
  formSizeVariants,
  getFormSizeToken,
  getSized,
  getSpaced
} from "@cyclone-ui/helpers";
import { Check, Lock } from "@cyclone-ui/icons";
import { Popover } from "@cyclone-ui/popover";
import type { GetProps, LayoutEvent } from "@tamagui/core";
import {
  createStyledContext,
  createStyledHOC,
  isWeb,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import type { JSX } from "react";
import { createContext, use, useState } from "react";
import { getContextMenuSize } from "./utilities";

// Menus narrower than this center their item text, unless an item shows an
// indicator (see `CONTEXT_MENU_STYLES`).
const NARROW_MENU_WIDTH = getSized("20xl");

const CONTEXT_MENU_STYLES = `
[data-context-menu-item]:last-child [data-context-menu-item-divider] {
  display: none;
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
}

// Frames take `size` from the item rather than through `context`: a styled
// `context` merges every value (including `value`) into the frame's props.
const ContextMenuContext = createStyledContext<ContextMenuContextValue, "size">(
  { size: "md" },
  { keys: ["size"] }
);

// The enclosing item's state, for `ContextMenu.Item.Text`.
const ContextMenuItemStateContext = createContext({
  selected: false,
  disabled: false
});

export interface ContextMenuExtraProps {
  size?: FormControlSize;

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
 * sheet on small touch screens.
 */
const ContextMenuFrame = createStyledHOC(
  Popover,
  (
    {
      size = "md",
      value,
      onValueChange,
      ...props
    }: Omit<GetProps<typeof Popover>, "size"> & ContextMenuExtraProps,
    forwardedRef
  ) => (
    <ContextMenuContext.Provider
      size={size}
      value={value}
      onValueChange={onValueChange}>
      <Popover
        ref={forwardedRef}
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
  const [narrow, setNarrow] = useState(false);

  return (
    <Popover.Content maxWidth="90vw" {...props}>
      {/* Adapted to a sheet, only the children render, so they carry the
          layout, styles and keyboard navigation. */}
      <View
        data-context-menu-narrow={narrow ? "" : undefined}
        gap="3xl"
        width="100%"
        onLayout={event =>
          setNarrow(event.nativeEvent.layout.width < NARROW_MENU_WIDTH)
        }
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
      style={[style, { scrollbarGutter: "auto" } as any]}
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
  width: "max-content",
  minWidth: "100%",
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
    "transparent group-hover/item:surfaceOverlayHover group-focus-visible/item:surfaceOverlayHover",
  pointerEvents: "none",
  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((val: FormControlSize) => {
        const inset = getContextMenuSize(val).itemPaddingVertical;

        return { top: inset, bottom: inset };
      })
    ),

    disabled: {
      true: {
        backgroundColor:
          "group-hover/item:transparent group-focus-visible/item:transparent"
      }
    }
  } as const,
  defaultVariants: {
    size: "md",
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
  alignItems: "center",
  minWidth: "100%",
  width: "max-content",
  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((val: FormControlSize) => {
        const { lineHeight, itemPaddingHorizontal } = getContextMenuSize(val);

        return {
          minHeight: lineHeight,
          paddingHorizontal: itemPaddingHorizontal
        };
      })
    )
  } as const,
  defaultVariants: {
    size: "md"
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
};

const ContextMenuItem = ({
  children,
  value,
  disabled: disabledProp,
  onPress,
  ...props
}: ContextMenuItemProps): JSX.Element => {
  const {
    size,
    value: selectedValue,
    onValueChange
  } = ContextMenuContext.useStyledContext();
  const disabled = Boolean(disabledProp);
  const selected = value !== undefined && value === selectedValue;
  const { indicatorWidth, indicatorIconSize } = getContextMenuSize(size);

  return (
    <ContextMenuItemStateContext.Provider value={{ selected, disabled }}>
      <ContextMenuItemFrame
        // Not typed on a styled View; keeps the item from submitting a form.
        {...({ type: "button" } as object)}
        group="item"
        data-context-menu-item
        // Rows with an indicator keep a narrow menu's text left-aligned.
        data-context-menu-item-adorned={selected || disabled ? "" : undefined}
        aria-disabled={disabled || undefined}
        size={size}
        disabled={disabled}
        {...props}
        onPress={event => {
          if (disabled) {
            return;
          }

          onPress?.(event);
          if (value !== undefined) {
            onValueChange?.(value);
          }
        }}>
        <ContextMenuItemBackground size={size} disabled={disabled} />
        <ContextMenuItemGroup size={size} data-context-menu-item-group>
          {children}
          {(selected || disabled) && (
            <View
              aria-hidden={true}
              width={indicatorWidth}
              marginLeft="auto"
              flexShrink={0}
              alignItems="flex-end"
              justifyContent="center">
              {disabled ? (
                <Lock size={indicatorIconSize} color="accentDisabled" />
              ) : (
                <Check
                  size={indicatorIconSize}
                  color="accentActive"
                  weight="black"
                />
              )}
            </View>
          )}
        </ContextMenuItemGroup>
        <ContextMenuItemDivider size={size} data-context-menu-item-divider />
      </ContextMenuItemFrame>
    </ContextMenuItemStateContext.Provider>
  );
};

const ContextMenuItemText = (props: GetProps<typeof BodyText>): JSX.Element => {
  const { size } = ContextMenuContext.useStyledContext();
  const { selected, disabled } = use(ContextMenuItemStateContext);
  const {
    fontSize,
    lineHeight,
    itemTextPaddingVertical,
    itemTextPaddingHorizontal
  } = getContextMenuSize(size);

  return (
    <BodyText
      render="span"
      transition="200ms"
      cursor="inherit"
      // On the text: a View frame doesn't emit `color` for it to inherit.
      color={
        disabled
          ? "accentDisabled"
          : selected
            ? "accentActive"
            : "accentInactive group-hover/item:accent group-focus-visible/item:accent"
      }
      fontSize={fontSize}
      lineHeight={`${lineHeight}px`}
      fontWeight={selected ? "bold" : "normal"}
      paddingVertical={itemTextPaddingVertical}
      paddingHorizontal={itemTextPaddingHorizontal}
      {...props}
    />
  );
};

// A leading icon, flag or other adornment.
const ContextMenuItemIcon = (props: GetProps<typeof BodyText>): JSX.Element => {
  const { size } = ContextMenuContext.useStyledContext();
  const { fontSize, lineHeight } = getContextMenuSize(size);

  return (
    <BodyText
      render="span"
      aria-hidden={true}
      flexShrink={0}
      minWidth="2xl"
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
  Content: withStaticProperties(ContextMenuContent, {
    ScrollView: ContextMenuScrollView
  }),
  Item: withStaticProperties(ContextMenuItem, {
    Text: ContextMenuItemText,
    Icon: ContextMenuItemIcon,
    Label: ContextMenuItemLabel
  })
});
