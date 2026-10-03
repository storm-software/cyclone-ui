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
import { getSpaced } from "@cyclone-ui/helpers";
import { CaretDoubleRight, CaretRight } from "@cyclone-ui/icons";
import { Link } from "@cyclone-ui/link";
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
  View
} from "@tamagui/core";
import { XGroup } from "@tamagui/group";
import { withStaticProperties } from "@tamagui/helpers";
import { XStack } from "@tamagui/stacks";
import type { TextContextStyles } from "@tamagui/text";
import { SizableText } from "@tamagui/text";

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
  color: "inkSubtle",
  fontWeight: "semibold",
  verticalAlign: "middle",
  size: "sm"
});

const BreadcrumbImpl = createStyledHOC(
  BreadcrumbFrame,
  (
    {
      children,
      currentName,
      ...props
    }: GetProps<typeof BreadcrumbFrame> &
      Partial<BreadcrumbContextProps> & {
        currentName: string;
      },
    forwardRef
  ) => {
    const { theme } = BreadcrumbContext.useStyledContext();

    return (
      <Theme name={theme}>
        <BreadcrumbFrame ref={forwardRef} theme={theme} {...props}>
          <XGroup display="contents">
            {children}
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

const BreadcrumbItemImpl = createStyledHOC(
  BreadcrumbLink,
  ({ children, ...props }, forwardRef) => {
    const { size, variant, inverse, subtle, subtlest } =
      BreadcrumbContext.useStyledContext();

    return (
      <XGroup.Item>
        <View display="block">
          <BreadcrumbLink
            ref={forwardRef}
            size={size}
            inverse={inverse}
            {...(subtlest
              ? { variant: "subtlest" as const }
              : subtle && { variant: "subtle" as const })}
            {...props}>
            {children}
          </BreadcrumbLink>
        </View>

        {variant === "chevron" && (
          <CaretRight color="inkSubtle" size="2xl" weight="bold" />
        )}
        {variant === "double" && (
          <CaretDoubleRight color="inkSubtle" size="2xl" />
        )}
        {variant === "slash" && (
          <SizableText color="inkSubtle" fontSize="body-sm" fontWeight="bold">
            /
          </SizableText>
        )}
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
