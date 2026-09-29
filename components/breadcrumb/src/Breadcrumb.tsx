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

import { getFontSized, getSpaced } from "@cyclone-ui/helpers";
import { LabelText } from "@cyclone-ui/label-text";
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
import { ChevronRight, ChevronsRight, Slash } from "@tamagui/lucide-icons-2";
import { XStack } from "@tamagui/stacks";
import type { TextContextStyles } from "@tamagui/text";

export type BreadcrumbVariant = "chevron" | "double" | "slash";

export type BreadcrumbContextProps = TextContextStyles &
  { theme?: ThemeName | null } & {
    size: FontSizeTokens;
    variant: BreadcrumbVariant;
    inverse: boolean;
  };

export const BreadcrumbContext = createStyledContext<BreadcrumbContextProps, "size" | "variant" | "inverse">({
  size: true,
  variant: "slash",
  inverse: false
} as BreadcrumbContextProps, {
  // Only the keys that styled consumers declare as variants; v3 forwards every
  // injected context key that is not a variant to the DOM element.
  keys: ["size"]
});

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

const BreadcrumbCurrent = styled(LabelText, {
  displayName: "BreadcrumbCurrent",
  context: BreadcrumbContext,
  transition: "200ms",
  cursor: "default",
  color: "inkSubtle",
  fontWeight: "semibold",
  verticalAlign: "middle",
  variants: {
    // `BreadcrumbContext` passes `size: true`, which Tamagui v3 maps to the
    // `sm` / `4` font key the typography fonts do not define; resolve it (and
    // any font size key) against the font's own `true` step.
    size: styled.dynamic<FontSizeTokens | number>((val, env) =>
      val === true ||
      (typeof val === "string" && !!env.font && val in env.font.size)
        ? getFontSized(val === true ? ("true" as FontSizeTokens) : val, env)
        : undefined
    )
  } as const
});

const BreadcrumbImpl = createStyledHOC(BreadcrumbFrame, 
  ({ children, currentName, ...props }: GetProps<typeof BreadcrumbFrame> & Partial<BreadcrumbContextProps> & {
    currentName: string;
  }, forwardRef) => {
    const { theme } = BreadcrumbContext.useStyledContext();

    return (
      <Theme name={theme}>
        <BreadcrumbFrame ref={forwardRef} theme={theme} {...props}>
          <XGroup display="contents">
            {children}
            <BreadcrumbCurrent>{currentName || "Current"}</BreadcrumbCurrent>
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

  transition: "200ms"
});

const BreadcrumbItemImpl = createStyledHOC(BreadcrumbLink, 
  ({ children, ...props }, forwardRef) => {
    const { size, variant, inverse } = BreadcrumbContext.useStyledContext();

    return (
      <XGroup.Item>
        <View display="block">
          <BreadcrumbLink
            ref={forwardRef}
            size={size}
            inverse={inverse}
            {...props}>
            {children}
          </BreadcrumbLink>
        </View>

        {variant === "chevron" && (
          <ChevronRight color="inkSubtle" size="4xl" strokeWidth={3} />
        )}
        {variant === "double" && (
          <ChevronsRight color="inkSubtle" size="4xl" strokeWidth={2} />
        )}
        {variant === "slash" && (
          <Slash color="inkSubtle" size="lg" strokeWidth={3.5} />
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
