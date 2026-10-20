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

import type { GetProps } from "@tamagui/core";
import { createStyledHOC, styled } from "@tamagui/core";
// Lets TypeScript name `GetFontSizedInput` (SizableText's `size` type) in
// this package's declarations.
import type {} from "@tamagui/get-font-sized";
import { SizableText } from "@tamagui/text";

const BaseHeadingText = styled(SizableText, {
  displayName: "HeadingText",
  render: "span",
  role: "heading",

  // The typography tokens only carry the family and leading, so each level
  // sets its own size and weight. Static (not `size`) so a `size: true` passed
  // through a styled context keeps the level's size.
  fontSize: "xl",
  lineHeight: "xl",
  fontWeight: "semibold",
  color: "primary",

  variants: {
    variant: {
      base: {
        fontFamily: "display"
      },
      editorial: {
        fontFamily: "editorial"
      }
    }
  } as const,

  defaultVariants: {
    variant: "base"
  }
});

export const HeadingHeroText = styled(BaseHeadingText, {
  displayName: "HeadingHeroText",
  render: "h1",
  color: "primary",
  fontSize: "5xl",
  lineHeight: "5xl",
  fontWeight: "semibold",
});

export const HeadingTitleText = styled(BaseHeadingText, {
  displayName: "HeadingTitleText",
  render: "h1",
  color: "primary",
  fontSize: "3xl",
  lineHeight: "3xl",
  fontWeight: "semibold",

});

export const HeadingLargeText = styled(BaseHeadingText, {
  displayName: "HeadingLargeText",
  render: "h2",
  color: "emphasis",
  fontSize: "3xl",
  lineHeight: "3xl",
  fontWeight: "semibold",

});

export const HeadingMediumText = styled(BaseHeadingText, {
  displayName: "HeadingMediumText",
  render: "h3",
  color: "emphasis",
  fontSize: "xl",
  lineHeight: "xl",
  fontWeight: "bold",

});

export const HeadingSmallText = styled(BaseHeadingText, {
  displayName: "HeadingSmallText",
  render: "h4",
  color: "emphasis",
  fontSize: "lg",
  lineHeight: "sm",
  fontWeight: "semibold",

});

export const HeadingExtraSmallText = styled(BaseHeadingText, {
  displayName: "HeadingExtraSmallText",
  render: "h5",
  color: "emphasis",
  fontSize: "md",
  lineHeight: "xs",
  fontWeight: "semibold",

});

export type HeadingTextProps = GetProps<typeof BaseHeadingText>;

export const HeadingText = createStyledHOC(
  BaseHeadingText,
  (
    {
      children,
      level,
      variant = "base",
      ...props
    }: GetProps<typeof BaseHeadingText> & {
      level?: 1 | 2 | 3 | 4 | 5 | "hero" | "title" | "lg" | "md" | "sm" | "xs";
    },
    forwardedRef
  ) => {
    if (level === "hero") {
      return (
        <HeadingHeroText ref={forwardedRef} variant={variant} {...props}>
          {children}
        </HeadingHeroText>
      );
    } else if (level === 1 || level === "title") {
      return (
        <HeadingTitleText ref={forwardedRef} variant={variant} {...props}>
          {children}
        </HeadingTitleText>
      );
    } else if (level === 2 || level === "lg") {
      return (
        <HeadingLargeText ref={forwardedRef} variant={variant} {...props}>
          {children}
        </HeadingLargeText>
      );
    } else if (level === 3 || level === "md") {
      return (
        <HeadingMediumText ref={forwardedRef} variant={variant} {...props}>
          {children}
        </HeadingMediumText>
      );
    } else if (level === 4 || level === "sm") {
      return (
        <HeadingSmallText ref={forwardedRef} variant={variant} {...props}>
          {children}
        </HeadingSmallText>
      );
    } else if (level === 5 || level === "xs") {
      return (
        <HeadingExtraSmallText ref={forwardedRef} variant={variant} {...props}>
          {children}
        </HeadingExtraSmallText>
      );
    }

    return (
      <BaseHeadingText ref={forwardedRef} variant={variant} {...props}>
        {children}
      </BaseHeadingText>
    );
  },
  { displayName: "HeadingText" }
);
