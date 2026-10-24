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

import type { ComponentProps, ComponentPropsWithoutRef } from "react";
import { Heading, Link, Text } from "react-email";
import type { EmailTheme } from "../theme";
import { cx } from "../theme";

// Mirrors the `HeadingText` levels in `@cyclone-ui/heading-text`, with the
// `display` / `editorial` typography leading (1.2375).
const headingLevels = {
  hero: {
    as: "h1",
    className: "text-5xl/[1.2375] font-semibold text-base-primary"
  },
  title: {
    as: "h1",
    className: "text-3xl/[1.2375] font-semibold text-base-primary"
  },
  lg: { as: "h2", className: "text-3xl/[1.2375] font-semibold text-emphasis" },
  md: { as: "h3", className: "text-xl/[1.2375] font-bold text-emphasis" },
  sm: { as: "h4", className: "text-lg/[1.2375] font-semibold text-emphasis" },
  xs: { as: "h5", className: "text-md/[1.2375] font-semibold text-emphasis" }
} as const;

// `Heading`'s props are a union keyed by `as`, which `level` picks here.
export interface HeadingTextProps extends ComponentPropsWithoutRef<"h1"> {
  level: keyof typeof headingLevels;
  variant?: "base" | "editorial";
}

export const HeadingText = ({
  level,
  variant = "base",
  className,
  ...props
}: HeadingTextProps) => (
  <Heading
    as={headingLevels[level].as}
    {...props}
    className={cx(
      "m-0",
      variant === "editorial" ? "font-editorial" : "font-display",
      headingLevels[level].className,
      className
    )}
  />
);

export type TextVariant = "emphasis" | "ink" | "subtle" | "subtlest";

export interface BodyTextProps extends ComponentProps<typeof Text> {
  size?: "xxs" | "xs" | "sm" | "md" | "lg";
  variant?: TextVariant;
}

export const BodyText = ({
  size = "md",
  variant = "ink",
  className,
  ...props
}: BodyTextProps) => (
  <Text
    {...props}
    className={cx(
      `m-0 font-body font-normal text-${size} text-${variant}`,
      className
    )}
  />
);

export interface EyebrowTextProps extends ComponentProps<typeof Text> {
  /**
   * `subtle` (the default, as in `@cyclone-ui/eyebrow-text`) is under 4.5:1
   * on light surfaces, so pick `ink` when the label carries meaning.
   */
  variant?: TextVariant;
}

export const EyebrowText = ({
  variant = "subtle",
  className,
  ...props
}: EyebrowTextProps) => (
  <Text
    {...props}
    className={cx(
      `m-0 font-code text-xs font-medium uppercase text-${variant}`,
      className
    )}
  />
);

export interface LinkTextProps extends ComponentProps<typeof Link> {
  /**
   * The text color: `base` uses the theme's `link` color, the rest use their
   * own color tokens.
   */
  variant?: "base" | TextVariant;
  theme?: EmailTheme;
  /**
   * Email clients have no hover state, so the underline is either always
   * shown or never.
   */
  underline?: "static" | "none";
  /**
   * The body text size; inherits the surrounding text's size when omitted.
   */
  size?: "sm" | "md" | "lg";
}

export const LinkText = ({
  variant = "base",
  theme = "base",
  underline = "static",
  size,
  className,
  ...props
}: LinkTextProps) => (
  <Link
    {...props}
    className={cx(
      "font-medium",
      variant === "base" ? `text-${theme}-link` : `text-${variant}`,
      underline === "static" ? "underline" : "no-underline",
      size && `font-body text-${size}`,
      className
    )}
  />
);
