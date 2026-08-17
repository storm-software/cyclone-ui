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
  tag: "span",
  accessibilityRole: "header",

  color: "$foregroundOnPrimary",
  fontFamily: "$heading",
  size: "$true"
});

export type HeadingTextProps = GetProps<typeof BaseHeadingText>;

export const HeadingText = BaseHeadingText.styleable<{ level?: number }>(
  ({ children, level, ...props }, forwardedRef) => {
    if (level === 1) {
      return (
        <Heading1Text ref={forwardedRef} {...props}>
          {children}
        </Heading1Text>
      );
    } else if (level === 2) {
      return (
        <Heading2Text ref={forwardedRef} {...props}>
          {children}
        </Heading2Text>
      );
    } else if (level === 3) {
      return (
        <Heading3Text ref={forwardedRef} {...props}>
          {children}
        </Heading3Text>
      );
    } else if (level === 4) {
      return (
        <Heading4Text ref={forwardedRef} {...props}>
          {children}
        </Heading4Text>
      );
    } else if (level === 5) {
      return (
        <Heading5Text ref={forwardedRef} {...props}>
          {children}
        </Heading5Text>
      );
    } else if (level === 6) {
      return (
        <Heading6Text ref={forwardedRef} {...props}>
          {children}
        </Heading6Text>
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

export const Heading1Text = styled(BaseHeadingText, {
  name: "Heading1Text",
  tag: "h1",
  size: "$12"
});

export const Heading2Text = styled(BaseHeadingText, {
  name: "Heading2Text",
  tag: "h2",
  size: "$11"
});

export const Heading3Text = styled(BaseHeadingText, {
  name: "Heading3Text",
  tag: "h3",
  size: "$10"
});

export const Heading4Text = styled(BaseHeadingText, {
  name: "Heading4Text",
  tag: "h4",
  size: "$9"
});

export const Heading5Text = styled(BaseHeadingText, {
  name: "Heading5Text",
  tag: "h5",
  size: "$8"
});

export const Heading6Text = styled(BaseHeadingText, {
  name: "Heading6Text",
  tag: "h6",
  size: "$7"
});
