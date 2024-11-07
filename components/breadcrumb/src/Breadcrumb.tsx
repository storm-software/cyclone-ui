/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { Link } from "@cyclone-ui/link";
import {
  createStyledContext,
  FontSizeTokens,
  styled,
  ThemeableProps
} from "@tamagui/core";
import { withStaticProperties } from "@tamagui/helpers";
import { ChevronRight, ChevronsRight, Slash } from "@tamagui/lucide-icons";
import { ThemeableStack, XStack } from "@tamagui/stacks";
import { SizableText, type TextContextStyles } from "@tamagui/text";

export type BreadcrumbDivider = "chevron" | "double" | "slash";
export const BreadcrumbDivider = {
  CHEVRON: "chevron" as BreadcrumbDivider,
  DOUBLE: "double" as BreadcrumbDivider,
  SLASH: "slash" as BreadcrumbDivider
};

export type BreadcrumbContextProps = TextContextStyles &
  ThemeableProps & {
    size: FontSizeTokens;
    divider: BreadcrumbDivider;
  };

export const BreadcrumbContext = createStyledContext<BreadcrumbContextProps>({
  size: "$true",
  divider: BreadcrumbDivider.SLASH
});

const BreadcrumbFrame = styled(ThemeableStack, {
  name: "Breadcrumb",
  context: BreadcrumbContext,

  animation: "normal",
  flexDirection: "row",
  flexWrap: "nowrap",
  alignItems: "center",

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        return {
          gap: tokens.size[val]
        };
      }
    }
  }
});

const BreadcrumbCurrent = styled(SizableText, {
  name: "BreadcrumbCurrent",
  context: BreadcrumbContext,

  animation: "normal",
  cursor: "default",
  color: "$color",
  fontFamily: "$link",
  fontWeight: "$lg",
  verticalAlign: "middle"
});

const BreadcrumbImpl = BreadcrumbFrame.styleable<{
  currentName: string;
}>(
  ({ children, currentName, ...props }, forwardRef) => {
    const { theme } = BreadcrumbContext.useStyledContext();

    return (
      <BreadcrumbFrame ref={forwardRef} theme={theme} {...props}>
        {children}
        <BreadcrumbCurrent>{currentName || "Current"}</BreadcrumbCurrent>
      </BreadcrumbFrame>
    );
  },
  {
    staticConfig: { componentName: "Breadcrumb" }
  }
);

const BreadcrumbItemFrame = styled(XStack, {
  name: "BreadcrumbItem",
  context: BreadcrumbContext,

  animation: "normal",
  flexDirection: "row",
  flexWrap: "nowrap",
  alignItems: "center",

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        return {
          gap: tokens.size[val]
        };
      }
    }
  }
});

const BreadcrumbLink = styled(Link, {
  name: "BreadcrumbItem",
  context: BreadcrumbContext,

  animation: "normal",
  underline: "initial",
  flexGrow: 1,
  flexShrink: 1,
  ellipse: true
});

const BreadcrumbItemImpl = BreadcrumbLink.styleable(
  (props, forwardRef) => {
    const { children, ...rest } = props;
    const { size, theme, divider } = BreadcrumbContext.useStyledContext();

    return (
      <BreadcrumbItemFrame size={size} theme={theme}>
        <BreadcrumbLink ref={forwardRef} theme={theme} size={size} {...rest}>
          {children}
        </BreadcrumbLink>
        {divider === BreadcrumbDivider.CHEVRON && (
          <ChevronRight color="$borderColor" size="$2" />
        )}
        {divider === BreadcrumbDivider.DOUBLE && (
          <ChevronsRight color="$borderColor" size="$2" />
        )}
        {divider === BreadcrumbDivider.SLASH && (
          <Slash color="$borderColor" size="$0.75" />
        )}
      </BreadcrumbItemFrame>
    );
  },
  {
    staticConfig: { componentName: "BreadcrumbItem" }
  }
);

export const Breadcrumb = withStaticProperties(BreadcrumbImpl, {
  Item: BreadcrumbItemImpl
});
