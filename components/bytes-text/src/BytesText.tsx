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

import { BodyText } from "@cyclone-ui/body-text";
import { Options, prettyBytes } from "@storm-stack/string-fns/pretty-bytes";
import { GetProps } from "@tamagui/core";

type BytesTextExtraProps = Options & {
  locale?: string;
};

export const BytesText = BodyText.styleable<BytesTextExtraProps>(
  ({ children, ...props }, forwardedRef) => {
    let value = Number(children);
    if (isNaN(value)) {
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
