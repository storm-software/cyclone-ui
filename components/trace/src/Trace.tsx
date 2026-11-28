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

import type { BodyTextProps } from "@cyclone-ui/body-text";
import { BodyText } from "@cyclone-ui/body-text";
import type {
  CollapsibleContentProps,
  CollapsibleHeaderProps,
  CollapsibleProps
} from "@cyclone-ui/collapsible";
import { Collapsible } from "@cyclone-ui/collapsible";
import { VisuallyHidden } from "@cyclone-ui/visually-hidden";
import { isWeb } from "@tamagui/constants";
import type { GetProps, TamaguiElement } from "@tamagui/core";
import { styled, Text, View, withStaticProperties } from "@tamagui/core";
import { useGetThemedIcon } from "@tamagui/helpers-tamagui";
import type { ReactNode } from "react";
import { createContext, forwardRef, use } from "react";
import { Linking } from "react-native";

/**
 * The state of the work a line reports: in progress, failed, or not started
 * yet. Done work has no status.
 */
export type TraceStatus = "running" | "error" | "pending";

const TraceLineContext = createContext<TraceStatus | undefined>(undefined);

/** The status of the nearest `Trace.Line`. */
export const useTraceStatus = () => use(TraceLineContext);

// Lines are muted, and darken when the trigger or link around them is
// hovered. Failed lines keep the danger theme's `primary`.
const getLineColor = (status: TraceStatus | undefined) =>
  status === "error" ? "primary" : "ink group-hover/trace:emphasis";

// The `ring-offset` focus ring's outer edge. A collapsible's Accordion clips
// its header (`overflow: hidden`), so the header is inset by this much and a
// wrapper is pulled back out, keeping the line where it was.
const RING_INSET = 7;

/** A list of lines. Lines and the triggers around them keep their own width. */
const TraceFrame = styled(View, {
  name: "Trace",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "xl",
  width: "100%",
  minWidth: 0
});

const TraceLineFrame = styled(View, {
  name: "TraceLine",
  render: "span",
  flexDirection: "row",
  alignItems: "center",
  gap: "xl",
  maxWidth: "100%",
  minWidth: 0,
  variants: {
    status: {
      running: {},
      error: {},
      pending: { opacity: 0.6 }
    }
  } as const
});

export type TraceLineProps = Omit<GetProps<typeof TraceLineFrame>, "status"> & {
  /** The state of the work the line reports. Done work has none. */
  status?: TraceStatus;
};

/**
 * One line: an icon and a title. It is not a button or a tab stop: wrap it
 * in a `Trace.Collapsible.Trigger`, a `Trace.Link` or a `Trace.Button` to
 * make it do something.
 */
const TraceLine = forwardRef<TamaguiElement, TraceLineProps>(
  ({ status, children, ...props }, forwardedRef) => (
    <TraceLineContext value={status}>
      <TraceLineFrame
        ref={forwardedRef}
        status={status}
        theme={status === "error" ? "danger" : undefined}
        {...props}>
        {children}
      </TraceLineFrame>
    </TraceLineContext>
  )
);

TraceLine.displayName = "Trace.Line";

const TraceIconFrame = styled(Text, {
  name: "TraceIcon",
  render: "span",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: 16,
  height: 16,
  transition: "200ms"
});

export type TraceIconProps = GetProps<typeof TraceIconFrame>;

/**
 * A 16px icon slot, hidden from assistive tech. Before the title it names the
 * action; after it, it is an indicator (such as an external link arrow). The
 * icon follows the line's color unless it sets its own.
 */
const TraceIcon = forwardRef<TamaguiElement, TraceIconProps>(
  ({ children, ...props }, forwardedRef) => {
    const status = use(TraceLineContext);
    // A View can't carry `color` in v3, so this Text passes it to the icon's
    // `currentColor`.
    const getThemedIcon = useGetThemedIcon({ size: 16, color: "currentColor" });

    return (
      <TraceIconFrame
        ref={forwardedRef}
        aria-hidden={true}
        color={getLineColor(status)}
        {...props}>
        {getThemedIcon(children)}
      </TraceIconFrame>
    );
  }
);

TraceIcon.displayName = "Trace.Icon";

// A sweep of the `emphasis` color across the title while its work runs. Text
// fill, not `color`, turns transparent, so `currentColor` keeps the line's
// (hover) color under the sweep.
const SHIMMER_STYLES = `
@media (prefers-reduced-motion: no-preference) {
  @keyframes cyclone-trace-shimmer {
    from { background-position: 100% 0; }
    to { background-position: -100% 0; }
  }
  .cyclone-trace-shimmer {
    background-image: linear-gradient(90deg, currentColor 35%, var(--emphasis) 50%, currentColor 65%);
    background-size: 300% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: cyclone-trace-shimmer 2s linear infinite;
  }
}
`;

export type TraceTitleProps = BodyTextProps;

/**
 * The line's accessible name: one sentence on one line that says what
 * happened ("Edited trace.tsx"). It truncates, and shimmers while the line is
 * running unless the reader prefers reduced motion.
 */
const TraceTitle = forwardRef<TamaguiElement, TraceTitleProps>(
  ({ children, className, ...props }, forwardedRef) => {
    const status = use(TraceLineContext);
    const running = status === "running" && isWeb;

    return (
      <BodyText
        ref={forwardedRef}
        render="span"
        size="sm"
        numberOfLines={1}
        flexShrink={1}
        minWidth={0}
        transition="200ms"
        color={getLineColor(status)}
        className={
          running
            ? `${className ?? ""} cyclone-trace-shimmer`.trim()
            : className
        }
        {...props}>
        {/* Hoisted into <head> once, so it isn't part of the title's text. */}
        {running && (
          <style href="cyclone-trace-shimmer" precedence="cyclone-ui">
            {SHIMMER_STYLES}
          </style>
        )}
        {children}
      </BodyText>
    );
  }
);

TraceTitle.displayName = "Trace.Title";

export type TraceDescriptionProps = BodyTextProps;

/**
 * Secondary text after the title, such as a duration, a count or a diff stat.
 * It does not truncate.
 */
// A component rather than `styled(BodyText, { size })`: a styled `size`
// default turns BodyText bold.
const TraceDescription = forwardRef<TamaguiElement, TraceDescriptionProps>(
  (props, forwardedRef) => (
    <BodyText
      ref={forwardedRef}
      render="span"
      size="sm"
      color="subtle"
      flexShrink={0}
      fontVariant={["tabular-nums"]}
      {...props}
    />
  )
);

TraceDescription.displayName = "Trace.Description";

export type TraceCollapsibleProps = Omit<
  CollapsibleProps,
  "value" | "defaultValue" | "onValueChange"
> & {
  /** Whether the line is open. Makes it controlled; pass `onOpenChange` too. */
  open?: boolean;
  /** Whether the line starts open when uncontrolled. Defaults to `false`. */
  defaultOpen?: boolean;
  /** Called with the new open state when the reader opens or closes it. */
  onOpenChange?: (open: boolean) => void;
};

/**
 * A line that expands. Put a `Trace.Line` in its `Trigger` and the detail in
 * its `Content`.
 *
 * To open a line while its work streams and let the reader's choice win, keep
 * the choice in state and pass `open={choice ?? running}`.
 */
const TraceCollapsibleRoot = forwardRef<TamaguiElement, TraceCollapsibleProps>(
  ({ open, defaultOpen, onOpenChange, children, ...props }, forwardedRef) => (
    // Pulled out by the header's inset, so the focus ring isn't clipped.
    <View alignSelf="stretch" margin={-RING_INSET} minWidth={0}>
      <Collapsible
        ref={forwardedRef}
        variant="ghost"
        bordered={false}
        icon="chevron"
        {...props}
        value={open}
        defaultValue={defaultOpen}
        onValueChange={next => onOpenChange?.(Boolean(next))}>
        {children}
      </Collapsible>
    </View>
  )
);

TraceCollapsibleRoot.displayName = "Trace.Collapsible";

export type TraceCollapsibleTriggerProps = CollapsibleHeaderProps;

/** The button that opens and closes the line, with a chevron after it. */
const TraceCollapsibleTrigger = forwardRef<
  TamaguiElement,
  TraceCollapsibleTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <Collapsible.Header
    ref={forwardedRef}
    // The line's hover color follows this group (`group-hover/trace:`).
    group="trace"
    alignSelf="flex-start"
    maxWidth="100%"
    minWidth={0}
    justifyContent="flex-start"
    gap="lg"
    margin={RING_INSET}
    paddingVertical={0}
    borderRadius="sm"
    iconSize={16}
    iconColor="ink group-hover/trace:emphasis"
    {...props}>
    {children}
  </Collapsible.Header>
));

TraceCollapsibleTrigger.displayName = "Trace.Collapsible.Trigger";

export type TraceCollapsibleContentProps = CollapsibleContentProps;

/**
 * The detail of a line, indented under its icon beside a rule. A string is
 * shown as body text that keeps its line breaks.
 */
const TraceCollapsibleContent = forwardRef<
  TamaguiElement,
  TraceCollapsibleContentProps
>(({ children, ...props }, forwardedRef) => (
  <Collapsible.Content
    ref={forwardedRef}
    paddingTop={0}
    paddingBottom={RING_INSET}
    paddingHorizontal={RING_INSET}
    {...props}>
    <View
      // Centers the rule under the 16px icon.
      marginLeft={7}
      marginTop="xl"
      marginBottom="lg"
      paddingLeft="4xl"
      paddingRight="lg"
      borderLeftWidth={1}
      borderColor="hairline"
      gap="xl"
      minWidth={0}>
      {typeof children === "string" ? (
        <BodyText size="sm" whiteSpace="pre-wrap" wordBreak="break-word">
          {children}
        </BodyText>
      ) : (
        children
      )}
    </View>
  </Collapsible.Content>
));

TraceCollapsibleContent.displayName = "Trace.Collapsible.Content";

const TracePressableFrame = styled(View, {
  name: "TracePressable",
  flexDirection: "row",
  alignItems: "center",
  maxWidth: "100%",
  minWidth: 0,
  borderRadius: "sm",
  cursor: "pointer",
  outlineStyle: "none",
  boxShadow: "none focus-visible:ring-offset",
  textDecorationLine: "none",
  transition: "200ms"
});

export type TraceLinkProps = GetProps<typeof TracePressableFrame> & {
  /** The page the line opens. */
  href: string;
  /** Open the page in a new tab, and tell screen readers so. */
  external?: boolean;
};

/** A line that opens a page. Put a `Trace.Line` inside it. */
const TraceLink = forwardRef<TamaguiElement, TraceLinkProps>(
  ({ href, external, children, onPress, ...props }, forwardedRef) => (
    <TracePressableFrame
      ref={forwardedRef}
      group="trace"
      role="link"
      {...(isWeb
        ? ({
            render: "a",
            href,
            ...(external && { target: "_blank", rel: "noreferrer" })
          } as object)
        : {})}
      {...props}
      onPress={event => {
        onPress?.(event);
        if (!isWeb) {
          void Linking.openURL(href);
        }
      }}>
      {children}
      {external && (
        <VisuallyHidden>
          <Text> (opens in a new tab)</Text>
        </VisuallyHidden>
      )}
    </TracePressableFrame>
  )
);

TraceLink.displayName = "Trace.Link";

export type TraceButtonProps = GetProps<typeof TracePressableFrame>;

/**
 * A line that does something when pressed, such as the trigger of a dialog,
 * sheet or popover (`asChild`). Put a `Trace.Line` inside it.
 */
const TraceButton = forwardRef<TamaguiElement, TraceButtonProps>(
  (props, forwardedRef) => (
    <TracePressableFrame
      ref={forwardedRef}
      group="trace"
      render="button"
      role="button"
      {...({ type: "button" } as object)}
      backgroundColor="transparent"
      borderWidth={0}
      padding={0}
      {...props}
    />
  )
);

TraceButton.displayName = "Trace.Button";

export type TraceProps = GetProps<typeof TraceFrame> & {
  children?: ReactNode;
};

export const Trace = withStaticProperties(TraceFrame, {
  Line: TraceLine,
  Icon: TraceIcon,
  Title: TraceTitle,
  Description: TraceDescription,
  Collapsible: withStaticProperties(TraceCollapsibleRoot, {
    Trigger: TraceCollapsibleTrigger,
    Content: TraceCollapsibleContent
  }),
  Link: TraceLink,
  Button: TraceButton
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Trace.Line` is undefined on the server).
 */
export {
  TraceButton,
  TraceCollapsibleRoot as TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceLink,
  TraceTitle
};
