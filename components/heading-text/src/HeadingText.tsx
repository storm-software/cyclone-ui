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
import { styled } from "@tamagui/core";
import { SizableText } from "@tamagui/text";

const BaseHeadingText = styled(SizableText, {
  name: "HeadingText",
  render: "span",
  role: "heading",

  color: "$foreground",
  fontFamily: "$heading-md"
});

export const HeadingExtraLargeText = styled(BaseHeadingText, {
  name: "HeadingExtraLargeText",
  render: "h2",
  fontFamily: "$heading-xl"
});

export const HeadingLargeText = styled(BaseHeadingText, {
  name: "HeadingLargeText",
  render: "h3",
  fontFamily: "$heading-lg"
});

export const HeadingMediumText = styled(BaseHeadingText, {
  name: "HeadingMediumText",
  render: "h4",
  fontFamily: "$heading-md"
});

export const HeadingSmallText = styled(BaseHeadingText, {
  name: "HeadingSmallText",
  render: "h5",
  fontFamily: "$heading-sm"
});

export type HeadingTextProps = GetProps<typeof BaseHeadingText>;

export const HeadingText = BaseHeadingText.styleable<{
  level?: 1 | 2 | 3 | 4 | "sm" | "md" | "lg" | "xl";
}>(
  ({ children, level, ...props }, forwardedRef) => {
    if (level === 1 || level === "xl") {
      return (
        <HeadingExtraLargeText ref={forwardedRef} {...props}>
          {children}
        </HeadingExtraLargeText>
      );
    } else if (level === 2 || level === "lg") {
      return (
        <HeadingLargeText ref={forwardedRef} {...props}>
          {children}
        </HeadingLargeText>
      );
    } else if (level === 3 || level === "md") {
      return (
        <HeadingMediumText ref={forwardedRef} {...props}>
          {children}
        </HeadingMediumText>
      );
    } else if (level === 4 || level === "sm") {
      return (
        <HeadingSmallText ref={forwardedRef} {...props}>
          {children}
        </HeadingSmallText>
      );
    }

    return (
      <BaseHeadingText ref={forwardedRef} {...props}>
        {children}
      </BaseHeadingText>
    );
  },
  { staticConfig: { componentName: "HeadingText" } }
);
