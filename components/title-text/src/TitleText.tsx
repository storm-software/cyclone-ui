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

const BaseTitleText = styled(SizableText, {
  name: "TitleText",
  tag: "span",
  accessibilityRole: "header",

  color: "$foregroundOnPrimary",
  fontFamily: "$title",
  size: "$true"
});

export type TitleTextProps = GetProps<typeof BaseTitleText>;

export const TitleText = BaseTitleText.styleable<{ level?: number }>(
  ({ children, level, ...props }, forwardedRef) => {
    if (level === 1) {
      return (
        <Title1Text ref={forwardedRef} {...props}>
          {children}
        </Title1Text>
      );
    } else if (level === 2) {
      return (
        <Title2Text ref={forwardedRef} {...props}>
          {children}
        </Title2Text>
      );
    } else if (level === 3) {
      return (
        <Title3Text ref={forwardedRef} {...props}>
          {children}
        </Title3Text>
      );
    } else if (level === 4) {
      return (
        <Title4Text ref={forwardedRef} {...props}>
          {children}
        </Title4Text>
      );
    } else if (level === 5) {
      return (
        <Title5Text ref={forwardedRef} {...props}>
          {children}
        </Title5Text>
      );
    } else if (level === 6) {
      return (
        <Title6Text ref={forwardedRef} {...props}>
          {children}
        </Title6Text>
      );
    }

    return (
      <BaseTitleText ref={forwardedRef} {...props}>
        {children}
      </BaseTitleText>
    );
  },
  { staticConfig: { componentName: "TitleText" } }
);

export const Title1Text = styled(BaseTitleText, {
  name: "Title1Text",
  tag: "h1",
  size: "$12"
});

export const Title2Text = styled(BaseTitleText, {
  name: "Title2Text",
  tag: "h2",
  size: "$11"
});

export const Title3Text = styled(BaseTitleText, {
  name: "Title3Text",
  tag: "h3",
  size: "$10"
});

export const Title4Text = styled(BaseTitleText, {
  name: "Title4Text",
  tag: "h4",
  size: "$9"
});

export const Title5Text = styled(BaseTitleText, {
  name: "Title5Text",
  tag: "h5",
  size: "$8"
});

export const Title6Text = styled(BaseTitleText, {
  name: "Title6Text",
  tag: "h6",
  size: "$7"
});
