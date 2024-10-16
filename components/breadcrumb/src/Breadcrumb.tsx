import { useContext } from "react";
import { Link, LinkProps } from "@cyclone-ui/link";
import { ColorRole } from "@cyclone-ui/colors";
import {
  createStyledContext,
  FontSizeTokens,
  styled,
  Theme,
  ThemeableProps,
} from "@tamagui/core";
import { withStaticProperties } from "@tamagui/helpers";
import { ChevronRight, ChevronsRight, Slash } from "@tamagui/lucide-icons";
import { ThemeableStack, XStack } from "@tamagui/stacks";
import type { SizableTextProps, TextContextStyles } from "@tamagui/text";
import { SizableText } from "@tamagui/text";

export type BreadcrumbDivider = "chevron" | "double" | "slash";
export const BreadcrumbDivider = {
  CHEVRON: "chevron" as BreadcrumbDivider,
  DOUBLE: "double" as BreadcrumbDivider,
  SLASH: "slash" as BreadcrumbDivider
};

interface BreadcrumbExtraProps {
  divider: BreadcrumbDivider;
}

export type BreadcrumbProps = SizableTextProps & BreadcrumbExtraProps;

type BreadcrumbContextProps = TextContextStyles &
  ThemeableProps & {
    size: FontSizeTokens;
    divider: BreadcrumbDivider;
  };

export const BreadcrumbContext = createStyledContext<BreadcrumbContextProps>({
  size: "$0.5",
  divider: BreadcrumbDivider.SLASH,
  theme: ColorRole.BRAND
});

const BreadcrumbFrame = styled(ThemeableStack, {
  name: "Breadcrumb",
  context: BreadcrumbContext,
  animation: "medium",
  flexDirection: "row",
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

const BreadcrumbFrameImpl = BreadcrumbFrame.styleable<{
  current: string;
}>(
  (props, forwardRef) => {
    const { children, current, ...rest } = props;
    const { size, theme } = useContext(BreadcrumbContext);

    return (
      <BreadcrumbFrame {...rest} ref={forwardRef} theme={theme}>
        {children}
        <SizableText
          color="$fg"
          fontFamily="$body"
          fontWeight="$6"
          verticalAlign="middle"
          size={size}
          theme={theme}>
          {current}
        </SizableText>
      </BreadcrumbFrame>
    );
  },
  {
    staticConfig: { componentName: "Breadcrumb" }
  }
);

const BreadcrumbItemContainer = styled(XStack, {
  name: "Breadcrumb",
  context: BreadcrumbContext,
  animation: "$medium",
  flexDirection: "row",
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

const BreadcrumbItem = Link.styleable<LinkProps>(
  (props, forwardRef) => {
    const { children, ...rest } = props;
    const { size, theme, divider } = useContext(BreadcrumbContext);

    return (
      <Theme name={theme} componentName="Breadcrumb">
        <BreadcrumbItemContainer size={size}>
          <Link
            ref={forwardRef}
            underline="initial"
            fontFamily="$body"
            {...rest}>
            {children}
          </Link>
          {divider === BreadcrumbDivider.CHEVRON && (
            <ChevronRight color="$color" size="$1" />
          )}
          {divider === BreadcrumbDivider.DOUBLE && (
            <ChevronsRight color="$color" size="$1" />
          )}
          {divider === BreadcrumbDivider.SLASH && (
            <Slash color="$color" size="$0.5" />
          )}
        </BreadcrumbItemContainer>
      </Theme>
    );
  },
  {
    staticConfig: { componentName: "Breadcrumb" }
  }
);

export const Breadcrumb = withStaticProperties(BreadcrumbFrameImpl, {
  Item: BreadcrumbItem,
  props: BreadcrumbContext.Provider
});
