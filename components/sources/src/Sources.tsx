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

"use client";

import { ExternalLink, Web } from "@cyclone-ui/icons";
import type {
  TraceCollapsibleContentProps,
  TraceCollapsibleProps,
  TraceCollapsibleTriggerProps,
  TraceLinkProps
} from "@cyclone-ui/trace";
import { Trace } from "@cyclone-ui/trace";
import type { TamaguiElement } from "@tamagui/core";
import { withStaticProperties } from "@tamagui/core";
import { forwardRef } from "react";

// The host without `www.`, or the URL itself when it doesn't parse.
const getHostname = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

export type SourcesProps = TraceCollapsibleProps;

/**
 * The links the agent used for a reply: a line that opens into a list of
 * them. Put a `Sources.Trigger` and a `Sources.Content` in it.
 */
const SourcesRoot = forwardRef<TamaguiElement, SourcesProps>(
  (props, forwardedRef) => (
    <Trace>
      <Trace.Collapsible ref={forwardedRef} {...props} />
    </Trace>
  )
);

SourcesRoot.displayName = "Sources";

export type SourcesTriggerProps = TraceCollapsibleTriggerProps & {
  /** The number of sources, shown as "Used 3 sources". */
  count: number;
};

/**
 * The line that opens the list: "Used 3 sources", so the reader knows what
 * opens. `children` replace the line.
 */
const SourcesTrigger = forwardRef<TamaguiElement, SourcesTriggerProps>(
  ({ count, children, ...props }, forwardedRef) => (
    <Trace.Collapsible.Trigger ref={forwardedRef} {...props}>
      {children ?? (
        <Trace.Line>
          <Trace.Icon>
            <Web />
          </Trace.Icon>
          <Trace.Title>{`Used ${count} source${count === 1 ? "" : "s"}`}</Trace.Title>
        </Trace.Line>
      )}
    </Trace.Collapsible.Trigger>
  )
);

SourcesTrigger.displayName = "Sources.Trigger";

export type SourcesContentProps = TraceCollapsibleContentProps;

/** The list of `Source` links. */
const SourcesContent = forwardRef<TamaguiElement, SourcesContentProps>(
  ({ children, ...props }, forwardedRef) => (
    <Trace.Collapsible.Content ref={forwardedRef} {...props}>
      <Trace>{children}</Trace>
    </Trace.Collapsible.Content>
  )
);

SourcesContent.displayName = "Sources.Content";

export type SourceProps = Omit<TraceLinkProps, "external" | "title"> & {
  /** The page's title. Defaults to the URL's hostname. */
  title?: string;
};

/**
 * One source: a link that opens in a new tab, named by its title. `children`
 * replace the line.
 */
const Source = forwardRef<TamaguiElement, SourceProps>(
  ({ href, title, children, ...props }, forwardedRef) => (
    <Trace.Link ref={forwardedRef} href={href} external={true} {...props}>
      {children ?? (
        <Trace.Line>
          <Trace.Title>{title ?? getHostname(href)}</Trace.Title>
          <Trace.Icon>
            <ExternalLink />
          </Trace.Icon>
        </Trace.Line>
      )}
    </Trace.Link>
  )
);

Source.displayName = "Sources.Source";

export const Sources = withStaticProperties(SourcesRoot, {
  Trigger: SourcesTrigger,
  Content: SourcesContent,
  Source
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Sources.Trigger` is undefined on the server).
 */
export { Source, SourcesContent, SourcesTrigger };
