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

import type { GetProps, TamaguiElement } from "@tamagui/core";
import { useMedia, View } from "@tamagui/core";
import { withStaticProperties } from "@tamagui/helpers";
import { XStack } from "@tamagui/stacks";
import type { FC, ReactNode } from "react";
import {
  Children,
  createContext,
  Fragment,
  isValidElement,
  use,
  useCallback,
  useLayoutEffect,
  useRef,
  useState
} from "react";

export type ActionButtonsProps = GetProps<typeof XStack>;
export type ActionButtonsGroupProps = GetProps<typeof XStack>;

const ActionButtonsContext = createContext<{
  stacked: boolean;
  /** The widest button's width, which every button takes in a row. */
  width: number;
  gap: ActionButtonsProps["gap"];
}>({ stacked: false, width: 0, gap: "xl" });

// Each button with a unique key; a fragment counts as its children, so
// `<>{a}{b}</>` still gives every button its own slot.
const getButtons = (children: ReactNode, prefix = ""): [string, ReactNode][] =>
  Children.toArray(children).flatMap((child, index) => {
    const key = `${prefix}${isValidElement(child) ? child.key : index}`;

    return isValidElement<{ children?: ReactNode }>(child) &&
      child.type === Fragment
      ? getButtons(child.props.children, key)
      : [[key, child] as [string, ReactNode]];
  });

const ActionButtonsGroup: FC<
  ActionButtonsGroupProps & { primary?: boolean }
> = ({ children, primary = false, ...props }) => {
  const { stacked, width, gap } = use(ActionButtonsContext);

  return (
    <XStack
      flexDirection={stacked ? "column" : "row"}
      gap={gap}
      flexShrink={0}
      // Pushes the primary buttons to the end of the row.
      {...(primary && !stacked && { marginLeft: "auto" })}
      {...props}>
      {getButtons(children).map(([key, child]) => (
        // Stretches the button: to `width` in a row, to the full width in a
        // column.
        <View
          key={key}
          data-action-button=""
          minWidth={stacked || !width ? undefined : width}>
          {child}
        </View>
      ))}
    </XStack>
  );
};

const ActionButtonsPrimary: FC<ActionButtonsGroupProps> = props => (
  <ActionButtonsGroup primary={true} {...props} />
);

const ActionButtonsSecondary: FC<ActionButtonsGroupProps> = props => (
  <ActionButtonsGroup {...props} />
);

// Secondary groups lead a row and trail a column.
const getActionButtonsRank = (child: ReactNode) => {
  const type = isValidElement(child) ? child.type : undefined;

  return type === ActionButtonsSecondary
    ? -1
    : type === ActionButtonsPrimary
      ? 1
      : 0;
};

/**
 * Lays out `ActionButtons.Secondary` and `ActionButtons.Primary` groups of
 * buttons. While every button fits in one row at the widest button's width,
 * the row holds the secondary buttons at the start and the primary buttons at
 * the end. Below the `sm` breakpoint, or once they don't fit, the buttons stack
 * at full width, primary first. Without a group among its children it renders
 * them as they are.
 */
const ActionButtonsImpl: FC<ActionButtonsProps> = ({
  children,
  gap: gapProp,
  ...props
}) => {
  // Without `gap`, a nested `ActionButtons` keeps its wrapper's (`xl` alone).
  const inherited = use(ActionButtonsContext);
  const gap = gapProp ?? inherited.gap;
  const isSmall = useMedia()["max-sm"] ?? false;
  const ref = useRef<TamaguiElement>(null);
  const [layout, setLayout] = useState({ width: 0, fits: true });
  const stacked = isSmall || !layout.fits;

  const measure = useCallback(() => {
    const node = ref.current;
    if (typeof HTMLElement === "undefined" || !(node instanceof HTMLElement)) {
      return;
    }

    const buttons = [
      ...node.querySelectorAll<HTMLElement>("[data-action-button]")
    ];
    if (buttons.length === 0 || node.clientWidth === 0) {
      return;
    }

    // Natural widths, whatever the current layout stretches them to.
    const styles = buttons.map(button => button.style.cssText);
    for (const button of buttons) {
      button.style.minWidth = "0";
      button.style.width = "max-content";
    }
    const width = Math.max(...buttons.map(button => button.offsetWidth));
    buttons.forEach((button, index) => {
      button.style.cssText = styles[index] ?? "";
    });

    const columnGap = Number.parseFloat(getComputedStyle(node).columnGap) || 0;
    const fits =
      buttons.length * width + (buttons.length - 1) * columnGap <=
      node.clientWidth;

    setLayout(current =>
      current.width === width && current.fits === fits
        ? current
        : { width, fits }
    );
  }, []);

  // Labels can change on any render; the container on any resize.
  // ponytail: a button that changes width without re-rendering this (late web
  // font, internal state) isn't re-measured; observe the buttons if it matters.
  useLayoutEffect(measure);
  useLayoutEffect(() => {
    const node = ref.current;
    if (
      typeof ResizeObserver === "undefined" ||
      !(node instanceof HTMLElement)
    ) {
      return;
    }

    const observer = new ResizeObserver(() => measure());
    observer.observe(node);

    return () => observer.disconnect();
  }, [measure]);

  const items = Children.toArray(children);
  if (!items.some(getActionButtonsRank)) {
    return (
      <ActionButtonsContext.Provider value={{ ...inherited, gap }}>
        {children}
      </ActionButtonsContext.Provider>
    );
  }

  return (
    <XStack
      ref={ref}
      width="100%"
      flexDirection={stacked ? "column" : "row"}
      gap={gap}
      {...props}>
      <ActionButtonsContext.Provider
        value={{ stacked, width: layout.width, gap }}>
        {items.sort(
          (a, b) =>
            (getActionButtonsRank(a) - getActionButtonsRank(b)) *
            (stacked ? -1 : 1)
        )}
      </ActionButtonsContext.Provider>
    </XStack>
  );
};

export interface ActionButtonsComponent extends FC<ActionButtonsProps> {
  Primary: FC<ActionButtonsGroupProps>;
  Secondary: FC<ActionButtonsGroupProps>;
}

export const ActionButtons: ActionButtonsComponent = withStaticProperties(
  ActionButtonsImpl,
  {
    Primary: ActionButtonsPrimary,
    Secondary: ActionButtonsSecondary
  }
);

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module.
 */
export { ActionButtonsPrimary, ActionButtonsSecondary };
