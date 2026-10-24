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

import type { ComponentProps } from "react";
import { Hr, Section } from "react-email";
import type { EmailTheme } from "../theme";
import { cx } from "../theme";

export const Card = ({
  className,
  ...props
}: ComponentProps<typeof Section>) => (
  <Section
    {...props}
    className={cx(
      "rounded-2xl border border-solid border-hairline bg-elevated p-5",
      className
    )}
  />
);

export interface CalloutProps extends ComponentProps<typeof Section> {
  theme?: EmailTheme;
}

export const Callout = ({
  theme = "base",
  className,
  ...props
}: CalloutProps) => (
  <Section
    {...props}
    className={cx(
      `rounded-2xl border-[3px] border-solid border-${theme}-primary p-3`,
      className
    )}
  />
);

// Mirrors the `@cyclone-ui/divider` thickness and color per size. The color is
// set on the top side: `Hr`'s default `border-top` shorthand would replace an
// all-sides `border-color`.
const dividerSizes = {
  sm: "border-t-[1px] border-t-hairline",
  md: "border-t-[2px] border-t-hairline",
  lg: "border-t-[3px] border-t-outline"
} as const;

export interface DividerProps extends ComponentProps<typeof Hr> {
  size?: keyof typeof dividerSizes;
}

export const Divider = ({ size = "md", className, ...props }: DividerProps) => (
  <Hr
    {...props}
    className={cx(
      "m-0 w-full border-0 border-solid",
      dividerSizes[size],
      className
    )}
  />
);
