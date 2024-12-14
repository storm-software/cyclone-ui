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

import { LabelText } from "@cyclone-ui/label-text";
import NumberFlow from "@number-flow/react";
import { GetProps } from "@tamagui/core";

export const NumberText = LabelText.styleable(
  ({ children, ...props }, forwardedRef) => {
    let value = Number(children);
    if (isNaN(value)) {
      value = 0;
    }

    return (
      <LabelText ref={forwardedRef} {...props}>
        <NumberFlow value={value} />
      </LabelText>
    );
  }
);

export type NumberTextProps = GetProps<typeof NumberText>;
