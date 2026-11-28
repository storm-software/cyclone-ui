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
import type { ButtonProps } from "@cyclone-ui/button";
import { Button } from "@cyclone-ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Web
} from "@cyclone-ui/icons";
import type { PopoverContentExtraProps } from "@cyclone-ui/popover";
import { Popover } from "@cyclone-ui/popover";
import { Trace } from "@cyclone-ui/trace";
import type {
  GetProps,
  TamaguiElement,
  TextProps,
  ViewProps
} from "@tamagui/core";
import {
  Text,
  useComposedRefs,
  View,
  withStaticProperties
} from "@tamagui/core";
import { usePopperContextSlow } from "@tamagui/popper";
import { useControllableState } from "@tamagui/use-controllable-state";
import type { ReactNode, RefObject } from "react";
import {
  Children,
  createContext,
  forwardRef,
  use,
  useEffect,
  useRef,
  useState
} from "react";

// The host without `www.`, or the URL itself when it doesn't parse.
const getHostname = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

export type InlineCitationProps = TextProps;

/**
 * A citation inside a sentence: the `InlineCitationText` it supports and the
 * `InlineCitationCard` that shows its sources. The text is highlighted while
 * the citation is hovered.
 */
const InlineCitationRoot = forwardRef<TamaguiElement, InlineCitationProps>(
  (props, forwardedRef) => (
    <Text ref={forwardedRef} render="span" group="citation" {...props} />
  )
);

InlineCitationRoot.displayName = "InlineCitation";

export type InlineCitationTextProps = TextProps;

/** The cited text, highlighted while its citation is hovered. */
const InlineCitationText = forwardRef<TamaguiElement, InlineCitationTextProps>(
  (props, forwardedRef) => (
    <Text
      ref={forwardedRef}
      render="span"
      borderRadius="sm"
      transition="200ms"
      backgroundColor="transparent group-hover/citation:primary/15"
      {...props}
    />
  )
);

InlineCitationText.displayName = "InlineCitation.Text";

interface InlineCitationCardContextValue {
  open: boolean;
  /** Opens the card and keeps it open when the pointer leaves. */
  pin: () => void;
  /** The card's content, to move focus into it. */
  bodyRef: RefObject<TamaguiElement | null>;
  /** Opens the card from the keyboard and moves focus into it. */
  enter: () => void;
  /** Whether this open moves focus into the card. Reading it clears it. */
  takeFocusOnOpen: () => boolean;
  /** Whether the reader entered the card with the keyboard. Reading it clears it. */
  takeEntered: () => boolean;
}

// A plain context: a styled context Provider resets its values to defaults.
const InlineCitationCardContext =
  createContext<InlineCitationCardContextValue | null>(null);

const useInlineCitationCard = () => {
  const context = use(InlineCitationCardContext);
  if (!context) {
    throw new Error(
      "InlineCitationCard parts must be used within an InlineCitationCard"
    );
  }

  return context;
};

// Opens almost at once and lingers a little, so the pointer can cross the
// gap to the card.
const HOVER = { delay: { open: 10, close: 100 } };

export type InlineCitationCardProps = Omit<
  GetProps<typeof Popover>,
  "open" | "defaultOpen" | "onOpenChange"
> & {
  /** Whether the card is open. Makes it controlled; pass `onOpenChange` too. */
  open?: boolean;
  /** Whether the card starts open when uncontrolled. Defaults to `false`. */
  defaultOpen?: boolean;
  /** Called with the new open state. */
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
};

/**
 * A hover card for a citation's sources. It opens when its trigger is
 * hovered, focused with the keyboard or pressed (touch), and closes on
 * `Escape`, when the pointer leaves or when focus moves away.
 */
const InlineCitationCardRoot = ({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  children,
  ...props
}: InlineCitationCardProps) => {
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  const bodyRef = useRef<TamaguiElement>(null);
  const focusOnOpenRef = useRef(false);
  const enteredRef = useRef(false);
  const pinnedRef = useRef(false);
  const pin = () => {
    pinnedRef.current = true;
    setOpen(true);
  };
  const take = (ref: RefObject<boolean>) => {
    const value = ref.current;
    ref.current = false;
    return value;
  };

  return (
    <InlineCitationCardContext
      value={{
        open,
        bodyRef,
        pin,
        enter: () => {
          enteredRef.current = true;
          const body = bodyRef.current as HTMLElement | null;
          if (open && body) {
            body
              .querySelector<HTMLElement>("a[href], button:not([disabled])")
              ?.focus();
          } else {
            focusOnOpenRef.current = true;
          }
          pin();
        },
        takeFocusOnOpen: () => take(focusOnOpenRef),
        takeEntered: () => take(enteredRef)
      }}>
      <Popover
        hoverable={HOVER}
        placement="bottom"
        // A small card fits a phone; a bottom sheet would also render a
        // `<div>` inside the sentence's `<p>`.
        shouldAdapt={false}
        {...props}
        open={open}
        onOpenChange={(next, via) => {
          // A pressed card stays open when the pointer leaves (a touch ends
          // with one); a press outside, `Escape` or focus leaving closes it.
          if (!next && via === "hover" && pinnedRef.current) return;
          if (!next) pinnedRef.current = false;
          setOpen(next);
        }}>
        {children}
      </Popover>
    </InlineCitationCardContext>
  );
};

export type InlineCitationCardTriggerProps = Omit<ButtonProps, "children"> & {
  /** The URLs of the sources. The first one's hostname labels the button, with a count of the rest. */
  sources: string[];
  /** A custom label in place of the hostname and count. */
  children?: ReactNode;
};

/**
 * The marker in the sentence: a small button labeled with the first source's
 * hostname and `+N` for the rest. Pressing it with the keyboard moves focus
 * into the open card.
 */
const InlineCitationCardTrigger = forwardRef<
  TamaguiElement,
  InlineCitationCardTriggerProps
>(({ sources, children, ...props }, forwardedRef) => {
  const { open, pin, enter } = useInlineCitationCard();
  // Tamagui's popper wires hover for scoped popovers only; this one is
  // unscoped, so the trigger reports its hover itself (as `Tooltip.Trigger`).
  const popper = usePopperContextSlow("");
  const [first] = sources;

  return (
    <Popover.Trigger
      asChild={true}
      // A press opens rather than toggles: hovering already opened it.
      disablePressTrigger={true}
      // Tamagui tracks it only for the trigger it last saw hovered, focused
      // or pressed, so a `defaultOpen` or touch-opened card read as closed.
      aria-expanded={open}
      onMouseEnter={event => popper.onHoverReference?.(event.nativeEvent)}
      onMouseLeave={() => popper.onLeaveReference?.()}
      onPress={event => {
        // A keyboard (or screen reader) press is a click without a pointer.
        const keyboard =
          (event as unknown as { detail?: number } | undefined)?.detail === 0;
        if (keyboard) {
          enter();
        } else {
          pin();
        }
      }}>
      <Button
        ref={forwardedRef}
        variant="tertiary"
        size="5xl"
        rounded={true}
        tight={true}
        paddingHorizontal="xl"
        marginLeft="lg"
        display="inline-flex"
        verticalAlign="middle"
        // Taller than a line of text: don't push the lines apart.
        marginVertical={-2}
        flexGrow={0}
        {...props}>
        <Button.Text fontSize="xs" lineHeight="xs" fontWeight="500">
          {children ??
            (first
              ? `${getHostname(first)}${sources.length > 1 ? ` +${sources.length - 1}` : ""}`
              : "unknown")}
        </Button.Text>
      </Button>
    </Popover.Trigger>
  );
});

InlineCitationCardTrigger.displayName = "InlineCitation.Card.Trigger";

export type InlineCitationCardBodyProps = Omit<
  GetProps<typeof Popover.Content>,
  "variant"
> &
  PopoverContentExtraProps;

/** The card: put an `InlineCitationSource` or an `InlineCitationCarousel` in it. */
const InlineCitationCardBody = forwardRef<
  TamaguiElement,
  InlineCitationCardBodyProps
>(({ children, ...props }, forwardedRef) => {
  const { bodyRef, takeFocusOnOpen, takeEntered } = useInlineCitationCard();
  const composedRef = useComposedRefs<TamaguiElement>(forwardedRef, bodyRef);

  return (
    <Popover.Content
      // Not a dialog that holds focus: hovering or focusing the trigger
      // leaves focus there, and only a keyboard press moves it in.
      trapFocus={false}
      onOpenAutoFocus={event => {
        if (!takeFocusOnOpen()) event.cancel();
      }}
      // Return focus to the trigger only if the reader moved into the card
      // and focus didn't move on to something else.
      onCloseAutoFocus={event => {
        const active = globalThis.document?.activeElement;
        const body = bodyRef.current as HTMLElement | null;
        if (
          !takeEntered() ||
          (active && active !== document.body && !body?.contains(active))
        ) {
          event.cancel();
        }
      }}
      {...props}>
      {/* Layout on an inner view, which an adapted (`shouldAdapt`) sheet
          keeps: it takes only the content's children. */}
      <View ref={composedRef} width={280} maxWidth="100%" gap="xl">
        {children}
      </View>
    </Popover.Content>
  );
});

InlineCitationCardBody.displayName = "InlineCitation.Card.Body";

export type InlineCitationSourceProps = ViewProps & {
  /** The page's title. */
  title?: string;
  /** The page's URL, shown as a link to its hostname that opens in a new tab. */
  url?: string;
  /** A short summary of the page. */
  description?: string;
};

/** One source: its title, description and a link to it. */
const InlineCitationSource = forwardRef<
  TamaguiElement,
  InlineCitationSourceProps
>(({ title, url, description, children, ...props }, forwardedRef) => (
  <View ref={forwardedRef} gap="lg" minWidth={0} {...props}>
    {title && (
      <BodyText size="sm" color="emphasis" fontWeight="600" numberOfLines={1}>
        {title}
      </BodyText>
    )}
    {description && (
      <BodyText size="xs" color="subtle" numberOfLines={3}>
        {description}
      </BodyText>
    )}
    {url && (
      <Trace.Link href={url} external={true} marginTop="lg">
        <Trace.Line>
          <Trace.Icon>
            <Web />
          </Trace.Icon>
          <Trace.Title>{getHostname(url)}</Trace.Title>
          <Trace.Icon>
            <ExternalLink />
          </Trace.Icon>
        </Trace.Line>
      </Trace.Link>
    )}
    {children}
  </View>
));

InlineCitationSource.displayName = "InlineCitation.Source";

export type InlineCitationQuoteProps = BodyTextProps;

/** A quote from the source, set off by a rule. */
const InlineCitationQuote = forwardRef<
  TamaguiElement,
  InlineCitationQuoteProps
>((props, forwardedRef) => (
  <BodyText
    ref={forwardedRef}
    render="blockquote"
    size="xs"
    color="subtle"
    fontStyle="italic"
    margin={0}
    paddingLeft="2xl"
    borderLeftWidth={2}
    borderColor="hairline"
    {...props}
  />
));

InlineCitationQuote.displayName = "InlineCitation.Quote";

interface CarouselContextValue {
  index: number;
  count: number;
  setIndex: (index: number) => void;
  setCount: (count: number) => void;
}

const CarouselContext = createContext<CarouselContextValue | null>(null);

const useCarousel = () => {
  const context = use(CarouselContext);
  if (!context) {
    throw new Error(
      "InlineCitationCarousel parts must be used within an InlineCitationCarousel"
    );
  }

  return context;
};

export type InlineCitationCarouselProps = ViewProps;

/**
 * Pages through several sources, one at a time. Put a `Header` with the
 * `Prev`, `Next` and `Index` parts and a `Content` of `Item`s in it.
 */
const InlineCitationCarouselRoot = forwardRef<
  TamaguiElement,
  InlineCitationCarouselProps
>((props, forwardedRef) => {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <CarouselContext value={{ index, count, setIndex, setCount }}>
      <View ref={forwardedRef} gap="xl" {...props} />
    </CarouselContext>
  );
});

InlineCitationCarouselRoot.displayName = "InlineCitation.Carousel";

export type InlineCitationCarouselContentProps = ViewProps;

/** Shows the current `Item`, and announces it when it changes. */
const InlineCitationCarouselContent = forwardRef<
  TamaguiElement,
  InlineCitationCarouselContentProps
>(({ children, ...props }, forwardedRef) => {
  const { index, setCount } = useCarousel();
  const items = Children.toArray(children);

  useEffect(() => setCount(items.length), [items.length, setCount]);

  return (
    <View ref={forwardedRef} aria-live="polite" {...props}>
      {items[Math.min(index, items.length - 1)]}
    </View>
  );
});

InlineCitationCarouselContent.displayName = "InlineCitation.Carousel.Content";

export type InlineCitationCarouselItemProps = ViewProps;

/** One page of the carousel, such as an `InlineCitationSource`. */
const InlineCitationCarouselItem = forwardRef<
  TamaguiElement,
  InlineCitationCarouselItemProps
>((props, forwardedRef) => (
  <View
    ref={forwardedRef}
    gap="xl"
    transition="200ms"
    opacity="1 enter:0"
    {...props}
  />
));

InlineCitationCarouselItem.displayName = "InlineCitation.Carousel.Item";

export type InlineCitationCarouselHeaderProps = ViewProps;

/**
 * The row of the paging buttons and the index, by default `Prev`, `Next` and
 * `Index`. Hidden for a single source.
 */
const InlineCitationCarouselHeader = forwardRef<
  TamaguiElement,
  InlineCitationCarouselHeaderProps
>(({ children, ...props }, forwardedRef) => {
  const { count } = useCarousel();
  if (count < 2) return null;

  return (
    <View
      ref={forwardedRef}
      flexDirection="row"
      alignItems="center"
      gap="lg"
      {...props}>
      {children ?? (
        <>
          <InlineCitationCarouselPrev />
          <InlineCitationCarouselNext />
          <InlineCitationCarouselIndex />
        </>
      )}
    </View>
  );
});

InlineCitationCarouselHeader.displayName = "InlineCitation.Carousel.Header";

export type InlineCitationCarouselIndexProps = BodyTextProps;

/** The current source and the count, like "2/3". */
const InlineCitationCarouselIndex = forwardRef<
  TamaguiElement,
  InlineCitationCarouselIndexProps
>(({ children, ...props }, forwardedRef) => {
  const { index, count } = useCarousel();

  return (
    <BodyText
      ref={forwardedRef}
      render="span"
      size="xs"
      color="subtle"
      flex={1}
      textAlign="right"
      fontVariant={["tabular-nums"]}
      {...props}>
      {children ?? `${index + 1}/${count}`}
    </BodyText>
  );
});

InlineCitationCarouselIndex.displayName = "InlineCitation.Carousel.Index";

export type InlineCitationCarouselButtonProps = Omit<ButtonProps, "children">;

// Wraps around at the ends: a disabled button would drop focus, which closes
// the card.
const createCarouselButton = (step: 1 | -1, label: string) => {
  const CarouselButton = forwardRef<
    TamaguiElement,
    InlineCitationCarouselButtonProps
  >(({ onPress, ...props }, forwardedRef) => {
    const { index, count, setIndex } = useCarousel();

    return (
      <Button
        ref={forwardedRef}
        variant="ghost"
        size="8xl"
        circular={true}
        aria-label={label}
        {...props}
        onPress={event => {
          onPress?.(event);
          setIndex((index + step + count) % count);
        }}>
        <Button.Icon>
          {step < 0 ? <ChevronLeft /> : <ChevronRight />}
        </Button.Icon>
      </Button>
    );
  });
  CarouselButton.displayName = `InlineCitation.Carousel.${step < 0 ? "Prev" : "Next"}`;

  return CarouselButton;
};

/** Shows the previous source. */
const InlineCitationCarouselPrev = createCarouselButton(-1, "Previous source");
/** Shows the next source. */
const InlineCitationCarouselNext = createCarouselButton(1, "Next source");

export const InlineCitation = withStaticProperties(InlineCitationRoot, {
  Text: InlineCitationText,
  Card: withStaticProperties(InlineCitationCardRoot, {
    Trigger: InlineCitationCardTrigger,
    Body: InlineCitationCardBody
  }),
  Source: InlineCitationSource,
  Quote: InlineCitationQuote,
  Carousel: withStaticProperties(InlineCitationCarouselRoot, {
    Content: InlineCitationCarouselContent,
    Item: InlineCitationCarouselItem,
    Header: InlineCitationCarouselHeader,
    Index: InlineCitationCarouselIndex,
    Prev: InlineCitationCarouselPrev,
    Next: InlineCitationCarouselNext
  })
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`InlineCitation.Card` is undefined on the server). They keep
 * the AI SDK Elements names.
 */
export {
  InlineCitationCardRoot as InlineCitationCard,
  InlineCitationCardBody,
  InlineCitationCardTrigger,
  InlineCitationCarouselRoot as InlineCitationCarousel,
  InlineCitationCarouselContent,
  InlineCitationCarouselHeader,
  InlineCitationCarouselIndex,
  InlineCitationCarouselItem,
  InlineCitationCarouselNext,
  InlineCitationCarouselPrev,
  InlineCitationQuote,
  InlineCitationSource,
  InlineCitationText
};
