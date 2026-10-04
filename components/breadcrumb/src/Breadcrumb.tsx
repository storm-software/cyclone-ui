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
import { Button } from "@cyclone-ui/button";
import { getSpaced } from "@cyclone-ui/helpers";
import { CaretDoubleRight, CaretRight, DotsThree } from "@cyclone-ui/icons";
import { Link } from "@cyclone-ui/link";
import { Popover } from "@cyclone-ui/popover";
import type {
  FontSizeTokens,
  GetProps,
  SizeTokens,
  ThemeName
} from "@tamagui/core";
import {
  createStyledContext,
  createStyledHOC,
  styled,
  Theme,
  useThemeName,
  View
} from "@tamagui/core";
import { XGroup } from "@tamagui/group";
import { withStaticProperties } from "@tamagui/helpers";
import { XStack, YStack } from "@tamagui/stacks";
import type { TextContextStyles } from "@tamagui/text";
import { SizableText } from "@tamagui/text";
import type { ReactNode } from "react";
import {
  Children,
  createContext,
  use,
  useCallback,
  useState
} from "react";
import { getBreadcrumbCollapse } from "./utilities";

export type BreadcrumbVariant = "chevron" | "double" | "slash";

export type BreadcrumbContextProps = TextContextStyles & {
  theme?: ThemeName | null;
} & {
  size: FontSizeTokens;
  variant: BreadcrumbVariant;
  inverse: boolean;
  subtle: boolean;
  subtlest: boolean;
};

export const BreadcrumbContext = createStyledContext<
  BreadcrumbContextProps,
  "size" | "variant" | "inverse" | "subtle" | "subtlest"
>(
  {
    size: true,
    variant: "slash",
    inverse: false,
    subtle: false,
    subtlest: false
  } as BreadcrumbContextProps,
  {
    // Only the keys that styled consumers declare as variants; v3 forwards every
    // injected context key that is not a variant to the DOM element.
    keys: ["size"]
  }
);

// Set inside the collapsed breadcrumbs menu, where `Breadcrumb.Item` renders a
// menu row instead of a link and separator. Pressing a row closes the menu.
const BreadcrumbMenuContext = createContext<(() => void) | null>(null);

const BREADCRUMB_MENU_VIEWPORT_PADDING = 10;

export interface BreadcrumbExtraProps {
  /**
   * The name of the current page, displayed after the links
   */
  currentName: string;

  /**
   * The maximum number of breadcrumbs to display, including the current page.
   * When there are more, the middle links collapse into a menu behind a
   * `DotsThree` button.
   *
   * @defaultValue 8
   */
  maxItems?: number;

  /**
   * The number of breadcrumbs to display before the collapsed menu
   *
   * @defaultValue 1
   */
  itemsBeforeCollapse?: number;

  /**
   * The number of breadcrumbs to display after the collapsed menu, including
   * the current page
   *
   * @defaultValue 1
   */
  itemsAfterCollapse?: number;

  /**
   * The accessible label of the button that opens the collapsed menu
   *
   * @defaultValue "Show path"
   */
  expandText?: string;
}

// A plain stack rather than `styled(XGroup)`, which never hands `transition`
// to the rendered frame; the group lives in a `display: contents` `XGroup`.
const BreadcrumbFrame = styled(XStack, {
  displayName: "Breadcrumb",
  context: BreadcrumbContext,
  transition: "200ms",
  alignItems: "center",
  flexWrap: "nowrap",
  flexShrink: 1,
  gap: "2xl",
  variants: {
    // v2 `"...size"` only matched keys of the size token scale; the `true`
    // default kept the base gap.
    size: styled.dynamic<SizeTokens>((val, { tokens }) =>
      typeof val === "string" && val in tokens.size
        ? { gap: getSpaced(val) / 2 }
        : undefined
    )
  }
});

const BreadcrumbCurrent = styled(BodyText, {
  displayName: "BreadcrumbCurrent",
  context: BreadcrumbContext,
  transition: "200ms",
  cursor: "default",
  color: "inkEmphasis",
  fontWeight: "semibold",
  verticalAlign: "middle",
  size: "sm"
});

/**
 * The resting color of `LinkText` for the breadcrumb's variant, so the menu
 * button reads as one of the links. Icons take a single SVG color, so there are
 * no hover or press clauses.
 */
const getBreadcrumbEllipsisColor = (
  themeName: string | null | undefined,
  {
    inverse,
    subtle,
    subtlest
  }: Pick<BreadcrumbContextProps, "inverse" | "subtle" | "subtlest">
) => {
  if (subtlest) {
    return "inkSubtle";
  } else if (subtle) {
    return "inkBody";
  }

  // `LinkText` collapses its color variants to `base` in the base theme.
  const isBaseTheme =
    !themeName ||
    themeName === "dark" ||
    themeName === "light" ||
    themeName.endsWith("base");

  return isBaseTheme && !inverse ? "link" : "accent";
};

const BreadcrumbSeparator = () => {
  const { variant } = BreadcrumbContext.useStyledContext();

  if (variant === "chevron") {
    return <CaretRight color="inkSubtle" size="2xl" weight="bold" />;
  } else if (variant === "double") {
    return <CaretDoubleRight color="inkSubtle" size="2xl" />;
  } else if (variant === "slash") {
    return (
      <SizableText
        color="inkSubtle"
        fontFamily="body-sm"
        fontSize="sm"
        fontWeight="bold">
        /
      </SizableText>
    );
  }

  return null;
};

interface BreadcrumbEllipsisProps {
  children: ReactNode;
  expandText: string;
}

/**
 * The `DotsThree` button that stands in for the collapsed links and lists them
 * in a popover menu.
 */
const BreadcrumbEllipsis = ({
  children,
  expandText
}: BreadcrumbEllipsisProps) => {
  const context = BreadcrumbContext.useStyledContext();
  const themeName = useThemeName();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <Popover open={open} onOpenChange={setOpen} placement="bottom-start">
        <Popover.Trigger asChild={true}>
          <Button
            variant="ghost"
            circular={true}
            noPadding={true}
            size="6xl"
            aria-label={expandText}>
            <Button.Icon>
              <DotsThree
                color={getBreadcrumbEllipsisColor(themeName, context)}
                size="4xl"
                weight="bold"
              />
            </Button.Icon>
          </Button>
        </Popover.Trigger>

        <Popover.Content
          padding="lg"
          borderWidth={1}
          borderColor="hairline"
          maxWidth="90vw"
          maxHeight={`calc(var(--tamagui-popper-available-height) - ${BREADCRUMB_MENU_VIEWPORT_PADDING}px)`}
          overflow="hidden">
          <BreadcrumbMenuContext value={close}>
            <YStack flexShrink={1} minHeight={0} overflowY="auto">
              {children}
            </YStack>
          </BreadcrumbMenuContext>
        </Popover.Content>
      </Popover>

      <BreadcrumbSeparator />
    </>
  );
};

const BreadcrumbImpl = createStyledHOC(
  BreadcrumbFrame,
  (
    {
      children,
      currentName,
      maxItems = 8,
      itemsBeforeCollapse = 1,
      itemsAfterCollapse = 1,
      expandText = "Show path",
      ...props
    }: GetProps<typeof BreadcrumbFrame> &
      Partial<BreadcrumbContextProps> &
      BreadcrumbExtraProps,
    forwardRef
  ) => {
    const { theme } = BreadcrumbContext.useStyledContext();

    const items = Children.toArray(children);
    const collapse = getBreadcrumbCollapse(items.length, {
      maxItems,
      itemsBeforeCollapse,
      itemsAfterCollapse
    });
    const trail = collapse
      ? [
          ...items.slice(0, collapse.start),
          <BreadcrumbEllipsis key="breadcrumb-ellipsis" expandText={expandText}>
            {items.slice(collapse.start, collapse.end)}
          </BreadcrumbEllipsis>,
          ...items.slice(collapse.end)
        ]
      : items;

    return (
      <Theme name={theme}>
        <BreadcrumbFrame ref={forwardRef} theme={theme} {...props}>
          <XGroup display="contents">
            {trail}
            <BreadcrumbCurrent size="sm">
              {currentName || "Current"}
            </BreadcrumbCurrent>
          </XGroup>
        </BreadcrumbFrame>
      </Theme>
    );
  },
  {
    displayName: "Breadcrumb"
  }
);

const BreadcrumbLink = styled(Link, {
  displayName: "BreadcrumbItem",
  context: BreadcrumbContext,

  transition: "200ms",
  size: "sm"
});

// A block, so the row fills the menu width and long names end in an ellipsis.
const BreadcrumbMenuLink = styled(Link, {
  displayName: "BreadcrumbMenuItem",
  display: "block",
  overflow: "hidden",
  textOverflow: "ellipsis",
  borderRadius: "button",
  paddingHorizontal: "3xl",
  paddingVertical: "xl",
  backgroundColor:
    "transparent hover:surfaceOverlayHover focus-visible:surfaceOverlayHover",
  size: "sm"
});

const BreadcrumbItemImpl = createStyledHOC(
  BreadcrumbLink,
  ({ children, size: sizeProp, ...props }, forwardRef) => {
    const { size, inverse, subtle, subtlest } =
      BreadcrumbContext.useStyledContext();
    const closeMenu = use(BreadcrumbMenuContext);

    // LinkText only sets its font family for `sm` / `md`; any other size (the
    // context default is `true`) leaves SizableText's `body` family, which is
    // not a configured font, so the browser falls back to its default serif.
    const linkSize = (sizeProp ?? size) === "md" ? "md" : "sm";
    const linkVariant = subtlest
      ? ("subtlest" as const)
      : subtle
        ? ("subtle" as const)
        : undefined;

    if (closeMenu) {
      return (
        <BreadcrumbMenuLink
          ref={forwardRef}
          size={linkSize}
          inverse={inverse}
          underline="none"
          {...(linkVariant && { variant: linkVariant })}
          {...props}
          onPress={event => {
            props.onPress?.(event);
            closeMenu();
          }}>
          {children}
        </BreadcrumbMenuLink>
      );
    }

    return (
      <XGroup.Item>
        <View display="block">
          <BreadcrumbLink
            ref={forwardRef}
            size={linkSize}
            inverse={inverse}
            {...(linkVariant && { variant: linkVariant })}
            {...props}>
            {children}
          </BreadcrumbLink>
        </View>

        <BreadcrumbSeparator />
      </XGroup.Item>
    );
  },
  {
    displayName: "BreadcrumbItem"
  }
);

export const Breadcrumb = withStaticProperties(BreadcrumbImpl, {
  Item: BreadcrumbItemImpl
});

export type BreadcrumbProps = GetProps<typeof Breadcrumb>;
