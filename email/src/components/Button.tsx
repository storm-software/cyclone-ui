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
import { Button as EmailButton } from "react-email";
import type { EmailTheme } from "../theme";
import { cx } from "../theme";

export type ButtonVariant =
  "primary" | "secondary" | "tertiary" | "outlined" | "ghost" | "link";

// The `@cyclone-ui/button` frame is 42px tall with 39px side padding; the
// padding gives up whatever the border takes so every variant keeps that box.
const variants = {
  primary: theme =>
    `px-[39px] py-[11px] bg-${theme}-primary text-${theme}-on-primary`,
  // The `base` secondary fill is a light gray, so it keeps the primary label.
  secondary: theme =>
    `px-[39px] py-[11px] bg-${theme}-secondary ${
      theme === "base" ? "text-base-primary" : `text-${theme}-on-secondary`
    }`,
  tertiary: theme =>
    `px-[38px] py-[10px] bg-surface border border-solid border-${theme}-primary text-${theme}-primary`,
  outlined: theme =>
    `px-[37px] py-[9px] bg-transparent border-2 border-solid border-${theme}-primary text-${theme}-primary`,
  ghost: theme => `px-[39px] py-[11px] bg-transparent text-${theme}-primary`,
  link: theme => `px-0 py-[11px] bg-transparent text-${theme}-link underline`
} satisfies Record<ButtonVariant, (theme: EmailTheme) => string>;

export interface ButtonProps extends ComponentProps<typeof EmailButton> {
  variant?: ButtonVariant;
  theme?: EmailTheme;
}

export const Button = ({
  variant = "tertiary",
  theme = "base",
  className,
  ...props
}: ButtonProps) => (
  <EmailButton
    {...props}
    className={cx(
      "box-border inline-block rounded-md text-center font-display text-sm/[1.2375] font-semibold capitalize",
      variant !== "link" && "no-underline",
      variants[variant](theme),
      className
    )}
  />
);
