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

  color: "$foregroundPrimary",
  fontFamily: "$heading-md"
});

export type HeadingTextProps = GetProps<typeof BaseHeadingText>;

export const HeadingText = BaseHeadingText.styleable<{ level?: number }>(
  ({ children, level, ...props }, forwardedRef) => {
    if (level === 1) {
      return (
        <Heading3XLText ref={forwardedRef} {...props}>
          {children}
        </Heading3XLText>
      );
    } else if (level === 2) {
      return (
        <Heading2XLText ref={forwardedRef} {...props}>
          {children}
        </Heading2XLText>
      );
    } else if (level === 3) {
      return (
        <HeadingXLText ref={forwardedRef} {...props}>
          {children}
        </HeadingXLText>
      );
    } else if (level === 4) {
      return (
        <HeadingLargeText ref={forwardedRef} {...props}>
          {children}
        </HeadingLargeText>
      );
    } else if (level === 5) {
      return (
        <HeadingMediumText ref={forwardedRef} {...props}>
          {children}
        </HeadingMediumText>
      );
    } else if (level === 6) {
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

export const Heading3XLText = styled(BaseHeadingText, {
  name: "Heading3XLText",
  render: "h1",
  fontFamily: "$heading-3xl"
});

export const Heading2XLText = styled(BaseHeadingText, {
  name: "Heading2XLText",
  render: "h2",
  fontFamily: "$heading-2xl"
});

export const HeadingXLText = styled(BaseHeadingText, {
  name: "HeadingXLText",
  render: "h3",
  fontFamily: "$heading-xl"
});

export const HeadingLargeText = styled(BaseHeadingText, {
  name: "HeadingLargeText",
  render: "h4",
  fontFamily: "$heading-lg"
});

export const HeadingMediumText = styled(BaseHeadingText, {
  name: "HeadingMediumText",
  render: "h5",
  fontFamily: "$heading-md"
});

export const HeadingSmallText = styled(BaseHeadingText, {
  name: "HeadingSmallText",
  render: "h6",
  fontFamily: "$heading-sm"
});
