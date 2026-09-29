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

import type { FontSizeTokens, GetProps } from "@tamagui/core";
import { createStyledHOC, styled } from "@tamagui/core";
// Lets TypeScript name `GetFontSizedInput` (SizableText's `size` type) in
// this package's declarations.
import type {} from "@tamagui/get-font-sized";
import { SizableText } from "@tamagui/text";

const BaseHeadingText = styled(SizableText, {
  displayName: "HeadingText",
  render: "span",
  role: "heading",
  fontFamily: "display-md",
  // Tamagui v3 maps `size: true` to the `sm` / `4` font key; the generated fonts
  // only define `true` plus their own step, so name the default step explicitly.
  size: "true" as FontSizeTokens,
  color: "accent"
});

export const HeadingHeroText = styled(BaseHeadingText, {
  displayName: "HeadingHeroText",
  render: "h1",
  fontFamily: "display-hero",
  color: "accent"
});

export const HeadingTitleText = styled(BaseHeadingText, {
  displayName: "HeadingTitleText",
  render: "h1",
  fontFamily: "display-lg",
  color: "inkEmphasis"
});

export const HeadingExtraLargeText = styled(BaseHeadingText, {
  displayName: "HeadingExtraLargeText",
  render: "h2",
  fontFamily: "display-lg",
  color: "inkEmphasis"
});

export const HeadingLargeText = styled(BaseHeadingText, {
  displayName: "HeadingLargeText",
  render: "h3",
  fontFamily: "display-md",
  color: "inkEmphasis"
});

export const HeadingMediumText = styled(BaseHeadingText, {
  displayName: "HeadingMediumText",
  render: "h4",
  fontFamily: "display-sm",
  color: "inkEmphasis"
});

export const HeadingSmallText = styled(BaseHeadingText, {
  displayName: "HeadingSmallText",
  render: "h5",
  fontFamily: "display-sm",
  color: "inkEmphasis"
});

export const HeadingExtraSmallText = styled(BaseHeadingText, {
  displayName: "HeadingExtraSmallText",
  render: "span",
  fontFamily: "display-sm",
  color: "inkEmphasis"
});

export type HeadingTextProps = GetProps<typeof BaseHeadingText>;

export const HeadingText = createStyledHOC(
  BaseHeadingText,
  (
    {
      children,
      level,
      ...props
    }: GetProps<typeof BaseHeadingText> & {
      level?:
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | "hero"
        | "title"
        | "xl"
        | "lg"
        | "md"
        | "sm"
        | "xs";
    },
    forwardedRef
  ) => {
    if (level === 1 || level === "hero") {
      return (
        <HeadingHeroText ref={forwardedRef} {...props}>
          {children}
        </HeadingHeroText>
      );
    } else if (level === "title") {
      return (
        <HeadingTitleText ref={forwardedRef} {...props}>
          {children}
        </HeadingTitleText>
      );
    } else if (level === 2 || level === "xl") {
      return (
        <HeadingExtraLargeText ref={forwardedRef} {...props}>
          {children}
        </HeadingExtraLargeText>
      );
    } else if (level === 3 || level === "lg") {
      return (
        <HeadingLargeText ref={forwardedRef} {...props}>
          {children}
        </HeadingLargeText>
      );
    } else if (level === 4 || level === "md") {
      return (
        <HeadingMediumText ref={forwardedRef} {...props}>
          {children}
        </HeadingMediumText>
      );
    } else if (level === 5 || level === "sm") {
      return (
        <HeadingSmallText ref={forwardedRef} {...props}>
          {children}
        </HeadingSmallText>
      );
    } else if (level === 6 || level === "xs") {
      return (
        <HeadingExtraSmallText ref={forwardedRef} {...props}>
          {children}
        </HeadingExtraSmallText>
      );
    }

    return (
      <BaseHeadingText ref={forwardedRef} {...props}>
        {children}
      </BaseHeadingText>
    );
  },
  { displayName: "HeadingText" }
);
