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
import type { ButtonProps } from "@cyclone-ui/button";
import { Button } from "@cyclone-ui/button";
import { ArrowDown, Download } from "@cyclone-ui/icons";
import { ScrollView } from "@cyclone-ui/scroll-view";
import { isWeb } from "@tamagui/constants";
import type { TamaguiElement, ViewProps } from "@tamagui/core";
import { Text, View, withStaticProperties } from "@tamagui/core";
import type { ReactNode, RefObject } from "react";
import {
  createContext,
  forwardRef,
  use,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";

// How much of the previous turn stays in view above a new one.
const PEEK = 48;

// How close to the end, in pixels, still counts as at the end.
const END_SLOP = 8;

const scrollBehavior = (): ScrollBehavior =>
  matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

interface ChatContextValue {
  viewportRef: RefObject<HTMLElement | null>;
  /** Whether the view follows the reply as it grows. */
  isFollowing: () => boolean;
  setFollowing: (following: boolean) => void;
  atEnd: boolean;
  setAtEnd: (atEnd: boolean) => void;
}

// A plain context: a styled context Provider resets its values to defaults.
const ChatContext = createContext<ChatContextValue | null>(null);

const useChatContext = () => {
  const context = use(ChatContext);
  if (!context) {
    throw new Error("Chat parts must be rendered inside a <Chat>.");
  }

  return context;
};

export type ChatProps = ViewProps;

/**
 * The thread of a conversation. It fills its parent, which must have a
 * height, and holds the scroll state its parts share.
 */
const ChatRoot = forwardRef<TamaguiElement, ChatProps>(
  ({ children, ...props }, forwardedRef) => {
    const viewportRef = useRef<HTMLElement>(null);
    const followingRef = useRef(true);
    const [atEnd, setAtEnd] = useState(true);
    // Functions, not the ref: the parts can't write to a ref from context.
    const isFollowing = useCallback(() => followingRef.current, []);
    const setFollowing = useCallback((following: boolean) => {
      followingRef.current = following;
    }, []);
    const value = useMemo(
      () => ({ viewportRef, isFollowing, setFollowing, atEnd, setAtEnd }),
      [isFollowing, setFollowing, atEnd]
    );

    return (
      <ChatContext value={value}>
        <View
          ref={forwardedRef}
          flex={1}
          minHeight={0}
          position="relative"
          {...props}>
          {children}
        </View>
      </ChatContext>
    );
  }
);

ChatRoot.displayName = "Chat";

export type ChatContentProps = ViewProps;

/**
 * The scrolling transcript. Props go to its `role="log"` list of
 * `Chat.Item`s; pass `aria-busy` while a reply streams so screen readers
 * announce it once it is done.
 *
 * It opens at the start of the last turn. A new turn (a `Chat.Item` with
 * `scrollAnchor`) scrolls up near the top, under a peek of the previous turn,
 * and its reply streams into the space below it. While the reader stays at
 * the end the view follows the reply; scrolling up leaves them where they
 * are until they scroll back down or press `Chat.ScrollButton`.
 */
const ChatContent = forwardRef<TamaguiElement, ChatContentProps>(
  ({ children, ...props }, forwardedRef) => {
    const { viewportRef, isFollowing, setFollowing, setAtEnd } =
      useChatContext();
    const logRef = useRef<HTMLElement>(null);
    const roomRef = useRef<HTMLElement>(null);

    // ponytail: web only. On native the transcript is a plain ScrollView;
    // follow the end with onContentSizeChange if a native app needs it.
    useLayoutEffect(() => {
      const scroller = viewportRef.current;
      const content = logRef.current;
      const spacer = roomRef.current;
      if (!isWeb || !scroller || !content || !spacer) {
        return;
      }

      const lastAnchor = () =>
        [...content.querySelectorAll("[data-scroll-anchor]")].at(-1) ?? null;
      const offsetOf = (element: Element) =>
        element.getBoundingClientRect().top -
        scroller.getBoundingClientRect().top +
        scroller.scrollTop;
      const update = () => {
        const distance =
          scroller.scrollHeight - scroller.clientHeight - scroller.scrollTop;
        setAtEnd(distance <= END_SLOP);

        return distance;
      };

      // Open at the start of the last turn, or at the end if it fits.
      let anchor = lastAnchor();
      scroller.scroll({
        top: anchor ? offsetOf(anchor) - PEEK : scroller.scrollHeight,
        behavior: "instant"
      });
      setFollowing(update() <= END_SLOP);
      let lastTop = scroller.scrollTop;

      const onResize = () => {
        const next = lastAnchor();
        const newTurn = next !== anchor;
        anchor = next;

        // Room under the newest turn, so it can sit near the top while its
        // reply is shorter than the viewport. It shrinks as the reply grows,
        // which keeps the end, and so the view, where it is.
        const used = anchor
          ? content.getBoundingClientRect().bottom -
            anchor.getBoundingClientRect().top +
            PEEK
          : scroller.clientHeight;
        spacer.style.height = `${Math.max(0, scroller.clientHeight - used)}px`;

        if (newTurn && anchor) {
          setFollowing(true);
          scroller.scroll({
            top: offsetOf(anchor) - PEEK,
            behavior: scrollBehavior()
          });
        } else if (isFollowing() && spacer.offsetHeight === 0) {
          scroller.scroll({ top: scroller.scrollHeight, behavior: "instant" });
        }
        update();
      };

      const onScroll = () => {
        const top = scroller.scrollTop;
        // The reader scrolled up: stop following until they're back at the end.
        if (update() <= END_SLOP) {
          setFollowing(true);
        } else if (top < lastTop) {
          setFollowing(false);
        }
        lastTop = top;
      };

      const observer = new ResizeObserver(onResize);
      observer.observe(content);
      observer.observe(scroller);
      scroller.addEventListener("scroll", onScroll, { passive: true });

      return () => {
        observer.disconnect();
        scroller.removeEventListener("scroll", onScroll);
      };
    }, [viewportRef, isFollowing, setFollowing, setAtEnd]);

    return (
      <ScrollView
        ref={viewportRef as never}
        size="lg"
        flex={1}
        minHeight={0}
        role="region"
        aria-label="Messages"
        tabIndex={0}
        boxShadow="none focus-visible:ring-offset">
        <View
          ref={node => {
            logRef.current = node as HTMLElement | null;
            if (typeof forwardedRef === "function") {
              forwardedRef(node);
            } else if (forwardedRef) {
              forwardedRef.current = node;
            }
          }}
          role="log"
          aria-relevant="additions"
          gap="7xl"
          padding="4xl"
          {...props}>
          {children}
        </View>
        <View ref={roomRef as never} aria-hidden={true} flexShrink={0} />
      </ScrollView>
    );
  }
);

ChatContent.displayName = "ChatContent";

export interface ChatItemProps extends ViewProps {
  /**
   * Starts a turn: when it is added, the view scrolls it near the top and the
   * reply streams in below it. Set it on the person's messages.
   */
  scrollAnchor?: boolean;
}

/** One row of the transcript: a message, a marker or a checkpoint. */
// ponytail: no `content-visibility: auto` on rows. Its placeholder height
// changes once a row paints, which moves the turn the view opened at; add it
// with an open position that re-aligns until the reader scrolls, if long
// threads paint slowly.
const ChatItem = forwardRef<TamaguiElement, ChatItemProps>(
  ({ scrollAnchor, ...props }, forwardedRef) => (
    <View
      ref={forwardedRef}
      flexShrink={0}
      minWidth={0}
      {...(scrollAnchor ? { "data-scroll-anchor": "" } : {})}
      {...props}
    />
  )
);

ChatItem.displayName = "ChatItem";

export type ChatScrollButtonProps = ButtonProps;

/**
 * A button over the bottom of the transcript that scrolls to the end and
 * follows the reply again. It shows only when the reader is away from the
 * end.
 */
const ChatScrollButton = forwardRef<TamaguiElement, ChatScrollButtonProps>(
  ({ onPress, ...props }, forwardedRef) => {
    const { viewportRef, setFollowing, atEnd } = useChatContext();

    return (
      <View
        position="absolute"
        bottom="4xl"
        left={0}
        right={0}
        alignItems="center"
        pointerEvents="box-none">
        <View
          opacity={atEnd ? 0 : 1}
          y={atEnd ? 8 : 0}
          transition="200ms"
          pointerEvents={atEnd ? "none" : "auto"}
          // `inert` is not typed on View; it keeps the hidden button out of
          // the tab order and the accessibility tree.
          {...(atEnd ? { inert: true } : {})}>
          <Button
            ref={forwardedRef}
            circular={true}
            size="sm"
            variant="floating"
            shadowStyle="raised"
            aria-label="Scroll to end"
            {...props}
            onPress={event => {
              onPress?.(event);
              const scroller = viewportRef.current;
              if (scroller) {
                setFollowing(true);
                scroller.scroll({
                  top: scroller.scrollHeight,
                  behavior: scrollBehavior()
                });
              }
            }}>
            <Button.Icon>
              <ArrowDown />
            </Button.Icon>
          </Button>
        </View>
      </View>
    );
  }
);

ChatScrollButton.displayName = "ChatScrollButton";

export interface ChatEmptyStateProps extends ViewProps {
  /**
   * The title.
   *
   * @defaultValue "No messages yet"
   */
  title?: string;
  /**
   * The line under the title.
   *
   * @defaultValue "Start a conversation to see messages here"
   */
  description?: string;
  /** An icon above the title. Set its `size`, such as 32. */
  icon?: ReactNode;
}

/**
 * What the thread shows before the first message, in place of
 * `Chat.Content`. `children` replace the icon, title and description.
 */
const ChatEmptyState = forwardRef<TamaguiElement, ChatEmptyStateProps>(
  (
    {
      title = "No messages yet",
      description = "Start a conversation to see messages here",
      icon,
      children,
      ...props
    },
    forwardedRef
  ) => (
    <View
      ref={forwardedRef}
      flex={1}
      alignItems="center"
      justifyContent="center"
      gap="xl"
      padding="8xl"
      {...props}>
      {children ?? (
        <>
          {icon ? (
            <Text display="flex" color="subtle" marginBottom="xl">
              {icon}
            </Text>
          ) : null}
          <BodyText
            size="sm"
            color="emphasis"
            fontWeight="semibold"
            textAlign="center">
            {title}
          </BodyText>
          {description ? (
            <BodyText size="sm" color="subtle" textAlign="center">
              {description}
            </BodyText>
          ) : null}
        </>
      )}
    </View>
  )
);

ChatEmptyState.displayName = "ChatEmptyState";

/**
 * The shape of a message `messagesToMarkdown` reads. An AI SDK `UIMessage`
 * fits it.
 */
export interface ChatMessage {
  role: "system" | "user" | "assistant";
  parts: readonly { type: string; text?: string }[];
}

const formatChatMessage = (message: ChatMessage) =>
  `**${message.role[0]!.toUpperCase()}${message.role.slice(1)}:** ${message.parts
    .map(part => (part.type === "text" ? (part.text ?? "") : ""))
    .join("")}`;

/**
 * The messages as Markdown, one paragraph each. By default each one reads
 * `**Role:** text`, from its text parts.
 */
export const messagesToMarkdown = <TMessage extends ChatMessage>(
  messages: readonly TMessage[],
  formatMessage: (message: TMessage, index: number) => string = formatChatMessage
) => messages.map((message, index) => formatMessage(message, index)).join("\n\n");

export interface ChatDownloadProps extends ButtonProps {
  /** The messages to save. */
  messages: readonly ChatMessage[];
  /**
   * The file's name.
   *
   * @defaultValue "conversation.md"
   */
  filename?: string;
  /** Formats each message, as in `messagesToMarkdown`. */
  formatMessage?: (message: ChatMessage, index: number) => string;
}

/**
 * A button that downloads the thread as a Markdown file, such as in a header
 * above it. Web only: it renders nothing on native.
 */
const ChatDownload = forwardRef<TamaguiElement, ChatDownloadProps>(
  (
    {
      messages,
      filename = "conversation.md",
      formatMessage,
      onPress,
      ...props
    },
    forwardedRef
  ) =>
    isWeb ? (
      <Button
        ref={forwardedRef}
        circular={true}
        size="sm"
        variant="floating"
        shadowStyle="raised"
        tooltip="Download conversation"
        {...props}
        onPress={event => {
          onPress?.(event);
          const url = URL.createObjectURL(
            new Blob([messagesToMarkdown(messages, formatMessage)], {
              type: "text/markdown"
            })
          );
          const link = document.createElement("a");
          link.href = url;
          link.download = filename;
          link.click();
          URL.revokeObjectURL(url);
        }}>
        <Button.Icon>
          <Download />
        </Button.Icon>
      </Button>
    ) : null
);

ChatDownload.displayName = "ChatDownload";

export const Chat = withStaticProperties(ChatRoot, {
  Content: ChatContent,
  Item: ChatItem,
  ScrollButton: ChatScrollButton,
  EmptyState: ChatEmptyState,
  Download: ChatDownload
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Chat.Content` is undefined on the server).
 */
export { ChatContent, ChatDownload, ChatEmptyState, ChatItem, ChatScrollButton };
