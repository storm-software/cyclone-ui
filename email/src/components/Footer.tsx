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

import type { ReactNode } from "react";
import { Fragment } from "react";
import { Section } from "react-email";
import { BodyText, HeadingText, LinkText } from "./Typography";

export interface FooterProps {
  companyName: string;
  /** A short statement about the company, shown as the footer heading. */
  tagline?: ReactNode;
  links?: { label: string; href: string }[];
  address?: ReactNode;
  /** Marketing emails must link to an unsubscribe page; transactional ones can omit it. */
  unsubscribeUrl?: string;
}

// Like `@cyclone-ui/footer`: `secondary` background, hairline top border and
// `primary` text (`emphasis` here, which keeps AA contrast on the fill).
export const Footer = ({
  companyName,
  tagline,
  links,
  address,
  unsubscribeUrl
}: FooterProps) => (
  <Section className="border-0 border-t border-solid border-hairline bg-base-secondary px-6 py-12">
    {tagline ? (
      <HeadingText level="sm" className="mb-6 max-w-[360px]">
        {tagline}
      </HeadingText>
    ) : null}
    {links?.length ? (
      <BodyText size="sm" variant="emphasis" className="mb-6">
        {links.map((link, index) => (
          <Fragment key={link.href}>
            {index > 0 && " · "}
            <LinkText href={link.href} variant="emphasis" underline="none">
              {link.label}
            </LinkText>
          </Fragment>
        ))}
      </BodyText>
    ) : null}
    {address ? (
      <BodyText size="xs" variant="emphasis" className="mb-4">
        {address}
      </BodyText>
    ) : null}
    <BodyText size="xs" variant="emphasis">
      © {new Date().getFullYear()} {companyName}
      {unsubscribeUrl && (
        <>
          {" · "}
          <LinkText href={unsubscribeUrl} variant="emphasis">
            Unsubscribe
          </LinkText>{" "}
          from {companyName} emails.
        </>
      )}
    </BodyText>
  </Section>
);
