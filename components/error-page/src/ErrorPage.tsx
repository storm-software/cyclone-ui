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

import { BodyText } from "@cyclone-ui/body-text";
import { EyebrowText } from "@cyclone-ui/eyebrow-text";
import { HeadingLargeText } from "@cyclone-ui/heading-text";
import { ArrowRight } from "@cyclone-ui/icons";
import type { IllustrationComponent } from "@cyclone-ui/illustrations";
import {
  BreakersIllustration,
  KeypadIllustration,
  LoupeIllustration,
  PadlockIllustration,
  PlugIllustration,
  QueryIllustration,
  RailIllustration,
  RouterIllustration,
  SieveIllustration,
  SlowIllustration
} from "@cyclone-ui/illustrations";
import type { GetProps } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  Text,
  View,
  withStaticProperties
} from "@tamagui/core";
import type { ReactNode } from "react";
import { createContext, use } from "react";
import { Linking, Platform } from "react-native";

const isWeb = Platform.OS === "web";

export interface ErrorPageCopy {
  /** The large title under the illustration. */
  title: string;
  /** The heading of the introduction. */
  message: string;
  description: string;
  Illustration: IllustrationComponent;
  /** The sub-theme that tints the code, the illustration and the actions. */
  theme?: "warning" | "danger";
}

const ERRORS: Record<number, ErrorPageCopy> = {
  400: {
    title: "Bad request",
    message: "That request didn’t make sense to us.",
    description:
      "The server couldn’t read the request. Check the address or the details you sent, then try again.",
    Illustration: QueryIllustration
  },
  401: {
    title: "Unauthorized",
    message: "You’ll need to sign in first.",
    description:
      "This page is only available to signed-in users. Sign in to your account, then try again.",
    Illustration: KeypadIllustration,
    theme: "warning"
  },
  403: {
    title: "Forbidden",
    message: "This one’s off limits.",
    description:
      "You’re signed in, but your account doesn’t have permission to view this page.",
    Illustration: PadlockIllustration,
    theme: "warning"
  },
  404: {
    title: "Not found",
    message: "Looks like you’ve taken a wrong turn.",
    description: "The page you’re looking for doesn’t exist or has been moved.",
    Illustration: LoupeIllustration
  },
  408: {
    title: "Timed out",
    message: "That took longer than expected.",
    description:
      "The server stopped waiting for the request to finish. Check your connection, then try again.",
    Illustration: SlowIllustration,
    theme: "warning"
  },
  410: {
    title: "Gone",
    message: "This page has been taken down.",
    description:
      "The page you’re looking for was removed on purpose and won’t be coming back.",
    Illustration: RailIllustration
  },
  429: {
    title: "Slow down",
    message: "That’s a lot of requests at once.",
    description:
      "You’ve sent too many requests in a short time. Wait a moment, then try again.",
    Illustration: SieveIllustration,
    theme: "warning"
  },
  500: {
    title: "Server error",
    message: "Something broke on our end.",
    description:
      "An unexpected error stopped the server from finishing your request. Try again in a moment.",
    Illustration: BreakersIllustration,
    theme: "danger"
  },
  502: {
    title: "Bad gateway",
    message: "Our servers got their wires crossed.",
    description:
      "A server along the way got an invalid response from the one behind it. Try again in a moment.",
    Illustration: RouterIllustration,
    theme: "danger"
  },
  503: {
    title: "Unavailable",
    message: "We’re temporarily offline.",
    description:
      "The service is down for maintenance or under heavy load. Try again in a few minutes.",
    Illustration: PlugIllustration,
    theme: "danger"
  },
  504: {
    title: "Timed out",
    message: "The server took too long to answer.",
    description:
      "A server along the way waited too long for a response from the one behind it. Try again in a moment.",
    Illustration: SlowIllustration,
    theme: "danger"
  }
};

/**
 * The default copy, illustration and tone for an HTTP status code. Codes
 * without their own entry fall back to `400` (other 4xx) or `500`.
 */
export const getErrorPageCopy = (code: number): ErrorPageCopy =>
  ERRORS[code] ?? (code >= 400 && code < 500 ? ERRORS[400]! : ERRORS[500]!);

/**
 * A font size that fills the container's line with `text`: the viewport less
 * the side padding (and a scrollbar), over the text's width in ems. Storm Sans
 * capitals average ~0.65em, so the estimate errs small. Long titles wrap
 * rather than shrink past `min(12vw,64px)`.
 */
const fitTitle = (text: string) => {
  const ems = (text.length * 0.68).toFixed(2);
  const fit = (gutter: number) =>
    `clamp(min(12vw,64px),calc((min(100vw,1440px) - ${gutter}px) / ${ems}),240px)`;

  return `${fit(96)} max-md:${fit(40)}`;
};

const ErrorPageContext = createContext<ErrorPageCopy>(ERRORS[500]!);

const ErrorPageFrame = styled(View, {
  displayName: "ErrorPage",
  position: "relative",
  width: "100%",
  // The display type is sized to the viewport; never let it scroll sideways.
  overflow: "hidden",
  backgroundColor: "canvas"
});

const ErrorPageContainer = styled(View, {
  displayName: "ErrorPageContainer",
  width: "100%",
  maxWidth: 1440,
  marginHorizontal: "auto",
  paddingHorizontal: "8xl max-md:4xl"
});

const ErrorPageCode = styled(Text, {
  displayName: "ErrorPageCode",
  render: "p",
  margin: 0,
  paddingTop: "12xl max-md:8xl",
  color: "primary",
  fontFamily: "display",
  fontWeight: "bold",
  fontSize: isWeb ? "min(36vw,520px)" : 128,
  lineHeight: 0.85,
  letterSpacing: isWeb ? "-0.04em" : -4,
  // Tucks the foot of the numerals behind the band, just under the bar of a 4.
  marginBottom: isWeb ? "-0.15em" : -19
});

const ErrorPageBand = styled(View, {
  displayName: "ErrorPageBand",
  position: "relative",
  zIndex: "10",
  width: "100%",
  height: "360px max-md:240px",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: "surface",
  borderTopWidth: 1,
  borderBottomWidth: 1,
  borderColor: "hairline"
});

const ErrorPageTitle = styled(Text, {
  displayName: "ErrorPageTitle",
  render: "h1",
  margin: 0,
  color: "primary",
  fontFamily: "display",
  fontWeight: "bold",
  // Sized to its text on the web, see `ErrorPageImpl`.
  fontSize: 48,
  lineHeight: 0.85,
  letterSpacing: isWeb ? "-0.02em" : -1,
  textTransform: "uppercase"
});

const ErrorPageDetails = styled(View, {
  displayName: "ErrorPageDetails",
  width: "100%",
  paddingTop: "12xl max-md:10xl",
  paddingBottom: "14xl max-md:11xl",
  flexDirection: "row max-lg:column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "12xl max-md:10xl"
});

const ErrorPageIntroduction = styled(View, {
  displayName: "ErrorPageIntroduction",
  flexShrink: 1,
  maxWidth: 440,
  gap: "4xl"
});

const ErrorPageMessageFrame = styled(HeadingLargeText, {
  displayName: "ErrorPageMessage",
  render: "h2",
  margin: 0,
  fontWeight: "normal"
});

const ErrorPageDescriptionFrame = styled(BodyText, {
  displayName: "ErrorPageDescription",
  margin: 0
});

const ErrorPageActions = styled(View, {
  displayName: "ErrorPageActions",
  render: "nav",
  flexDirection: "row max-md:column",
  flexGrow: 1,
  flexShrink: 1,
  maxWidth: "840px max-lg:none",
  width: "max-lg:100%"
});

const ErrorPageActionFrame = styled(View, {
  displayName: "ErrorPageAction",
  render: "a",
  flexBasis: "0px max-md:auto",
  flexGrow: 1,
  minWidth: 0,
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "4xl",
  paddingHorizontal: "8xl max-md:0px",
  paddingVertical: "2xl max-md:7xl",
  borderColor: "hairline",
  borderLeftWidth: "1px max-md:0px",
  borderTopWidth: "0px max-md:1px",
  cursor: "pointer",
  textDecorationLine: "none",
  outlineWidth: 0,
  boxShadow: "focus-visible:ring-offset"
});

// A plain `View` carries the hover shift: on an icon HOC the `x` / `y`
// clauses compile to classes and snap instead of animating.
const ErrorPageActionIcon = styled(View, {
  displayName: "ErrorPageActionIcon",
  flexShrink: 0,
  transition: "200ms",
  rotate: "-45deg",
  // Applied after the rotation, so `x` runs along the arrow.
  x: "zero group-hover/action:4px"
});

const ErrorPageActionLabel = styled(EyebrowText, {
  displayName: "ErrorPageActionLabel",
  render: "span",
  color: "primary",
  // A styled `size` brings the size's font weight with it; re-declare ours.
  size: "sm",
  fontWeight: "medium",
  letterSpacing: 1
});

const ErrorPageActionDescription = styled(BodyText, {
  displayName: "ErrorPageActionDescription",
  render: "span",
  size: "sm",
  fontWeight: "normal"
});

const ErrorPageActionRule = styled(View, {
  displayName: "ErrorPageActionRule",
  width: 48,
  height: 1,
  marginTop: "md",
  transition: "300ms",
  transformOrigin: "left",
  backgroundColor: "hairline group-hover/action:primary",
  scaleX: "1 group-hover/action:2"
});

export type ErrorPageMessageProps = GetProps<typeof ErrorPageMessageFrame>;

/** The introduction's heading. Without children, the message for the code. */
const ErrorPageMessage = createStyledHOC(
  ErrorPageMessageFrame,
  ({ children, ...props }: ErrorPageMessageProps, forwardedRef) => {
    const { message } = use(ErrorPageContext);

    return (
      <ErrorPageMessageFrame ref={forwardedRef} {...props}>
        {children ?? message}
      </ErrorPageMessageFrame>
    );
  },
  { displayName: "ErrorPageMessage" }
);

export type ErrorPageDescriptionProps = GetProps<
  typeof ErrorPageDescriptionFrame
>;

/** The introduction's body copy. Without children, the description for the code. */
const ErrorPageDescription = createStyledHOC(
  ErrorPageDescriptionFrame,
  ({ children, ...props }: ErrorPageDescriptionProps, forwardedRef) => {
    const { description } = use(ErrorPageContext);

    return (
      <ErrorPageDescriptionFrame ref={forwardedRef} {...props}>
        {children ?? description}
      </ErrorPageDescriptionFrame>
    );
  },
  { displayName: "ErrorPageDescription" }
);

export type ErrorPageProps = Omit<GetProps<typeof ErrorPageFrame>, "title"> & {
  /**
   * The HTTP status code. Picks the default title, message, description,
   * illustration and tone (see `getErrorPageCopy`).
   *
   * @defaultValue 500
   */
  code?: number;
  /** Overrides the large title under the illustration. */
  title?: string;
  /** Replaces the illustration drawn for the code. */
  illustration?: ReactNode;
};

const ErrorPageImpl = createStyledHOC(
  ErrorPageFrame,
  (
    {
      code = 500,
      title,
      illustration,
      children,
      theme,
      ...props
    }: ErrorPageProps,
    forwardedRef
  ) => {
    const copy = getErrorPageCopy(code);
    const text = title ?? copy.title;

    return (
      <ErrorPageFrame ref={forwardedRef} theme={theme ?? copy.theme} {...props}>
        <ErrorPageContext value={copy}>
          <ErrorPageContainer>
            <ErrorPageCode>{code}</ErrorPageCode>
          </ErrorPageContainer>
          <ErrorPageBand>
            {illustration === undefined ? (
              <copy.Illustration
                play={true}
                palette={{ plate: "surface" }}
                width="auto"
                height="100%"
                maxWidth="100%"
              />
            ) : (
              illustration
            )}
          </ErrorPageBand>
          <ErrorPageContainer>
            <ErrorPageTitle {...(isWeb && { fontSize: fitTitle(text) })}>
              {text}
            </ErrorPageTitle>
          </ErrorPageContainer>
          <ErrorPageContainer>
            <ErrorPageDetails>
              {children ?? (
                <ErrorPageIntroduction>
                  <ErrorPageMessage />
                  <ErrorPageDescription />
                </ErrorPageIntroduction>
              )}
            </ErrorPageDetails>
          </ErrorPageContainer>
        </ErrorPageContext>
      </ErrorPageFrame>
    );
  },
  { displayName: "ErrorPage" }
);

export type ErrorPageActionProps = GetProps<typeof ErrorPageActionFrame> & {
  /** Renders a link; without it the action is a button. */
  href?: string;
  /** A line of copy under the label. */
  description?: ReactNode;
};

/** A way out of the error: an arrow, a label, an optional description. */
const ErrorPageAction = createStyledHOC(
  ErrorPageActionFrame,
  (
    { href, description, children, onPress, ...props }: ErrorPageActionProps,
    forwardedRef
  ) => (
    <ErrorPageActionFrame
      ref={forwardedRef}
      group="action"
      {...(href
        ? { href }
        : { render: "button", role: "button", type: "button" })}
      onPress={
        href && !isWeb
          ? event => {
              onPress?.(event);
              void Linking.openURL(href);
            }
          : onPress
      }
      {...props}>
      <ErrorPageActionIcon>
        <ArrowRight aria-hidden={true} size={20} color="primary" />
      </ErrorPageActionIcon>
      <View flexShrink={1} gap="xl">
        <ErrorPageActionLabel>{children}</ErrorPageActionLabel>
        {description ? (
          <ErrorPageActionDescription>{description}</ErrorPageActionDescription>
        ) : null}
        <ErrorPageActionRule />
      </View>
    </ErrorPageActionFrame>
  ),
  { displayName: "ErrorPageAction" }
);

export type ErrorPageIntroductionProps = GetProps<typeof ErrorPageIntroduction>;
export type ErrorPageActionsProps = GetProps<typeof ErrorPageActions>;

export const ErrorPage = withStaticProperties(ErrorPageImpl, {
  Introduction: ErrorPageIntroduction,
  Message: ErrorPageMessage,
  Description: ErrorPageDescription,
  Actions: ErrorPageActions,
  Action: ErrorPageAction
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module.
 */
export {
  ErrorPageAction,
  ErrorPageActions,
  ErrorPageDescription,
  ErrorPageIntroduction,
  ErrorPageMessage
};
