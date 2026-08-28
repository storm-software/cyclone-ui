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

import { BodyText } from "@cyclone-ui/body-text";
import type { Options } from "@stryke/string-format/pretty-bytes";
import { prettyBytes } from "@stryke/string-format/pretty-bytes";
import type { GetProps } from "@tamagui/core";

type BytesTextExtraProps = Options & {
  locale?: string;
};

export const BytesText = BodyText.styleable<BytesTextExtraProps>(
  ({ children, ...props }, forwardedRef) => {
    let value = Number(children);
    if (Number.isNaN(value)) {
      value = 0;
    }

    return (
      <BodyText ref={forwardedRef} {...props}>
        {prettyBytes(value)}
      </BodyText>
    );
  }
);

export type BytesTextProps = GetProps<typeof BytesText>;
