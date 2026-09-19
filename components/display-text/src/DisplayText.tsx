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

const BaseDisplayText = styled(SizableText, {
  name: "DisplayText",
  render: "h1",
  role: "heading",

  color: "$foreground",
  fontFamily: "$display"
});

export type DisplayTextProps = GetProps<typeof BaseDisplayText>;

export const DisplayText = BaseDisplayText.styleable<{
  hero?: boolean;
}>(
  ({ children, hero, ...props }, forwardedRef) => {
    return (
      <BaseDisplayText
        ref={forwardedRef}
        fontFamily={hero ? "$display-hero" : "$display"}
        {...props}>
        {children}
      </BaseDisplayText>
    );
  },
  { staticConfig: { componentName: "DisplayText" } }
);
