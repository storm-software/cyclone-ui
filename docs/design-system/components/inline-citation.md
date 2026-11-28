---
title: Inline Citation
description: A source marker inside a sentence of an AI reply, a small hostname button that opens a hover card with the source's title, description, link and quote, and pages through several sources.
documentType: reference
tags: [component, inline-citation, citation, sources, ai, agent, hover-card, popover]
component:
  name: inline-citation
  package: "@cyclone-ui/inline-citation"
  stories:
    - title: AI/InlineCitation
      file: components/inline-citation/src/InlineCitation.stories.tsx
---

# Inline Citation

`InlineCitation` marks a source in the sentence it supports. A small button labeled with the source's hostname, like `react.dev`, sits after the sentence. Hovering it, focusing it with the keyboard or pressing it opens a card with the source's title, a short description, a link to the page and an optional quote. A citation with several sources shows `react.dev +2`, and its card pages through them.

It is the Cyclone UI version of the [AI SDK Elements](https://elements.ai-sdk.dev) Inline Citation component, rebuilt like the [shadcn/ui](https://ui.shadcn.com/docs/ai-elements) one on a hover card and a button: here a [Popover](./popover.md) and a [Button](./button.md). The exports and props keep their AI SDK Elements names. To list a reply's sources after it, use [Sources](./sources.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add inline-citation
pnpm install
```

- **File:** `InlineCitation.tsx`. The CLI writes it to `<path>/inline-citation/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Popover](./popover.md), [Trace](./trace.md), [Accordion](./accordion.md), [Collapsible](./collapsible.md), [Container](./container.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), [Sheet](./sheet.md), [Tooltip](./tooltip.md), and [Visually Hidden](./visually-hidden.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/popper`, and `@tamagui/use-controllable-state`.

## Import

```tsx
import { InlineCitation } from "@cyclone-ui/inline-citation";
```

## Usage

Put a card after the sentence it supports:

```tsx
<BodyText size="sm">
  Next.js streams a route in chunks, so the page shows up before every
  request finishes.
  <InlineCitation.Card>
    <InlineCitation.Card.Trigger sources={[source.url]} />
    <InlineCitation.Card.Body>
      <InlineCitation.Source
        title={source.title}
        url={source.url}
        description={source.description}
      />
    </InlineCitation.Card.Body>
  </InlineCitation.Card>
</BodyText>
```

For several sources, page through them with a carousel. Wrap the cited words in `InlineCitation` and `InlineCitation.Text` to highlight them while the citation is hovered:

```tsx
<InlineCitation>
  <InlineCitation.Text>React sends the fallback first</InlineCitation.Text>
  <InlineCitation.Card>
    <InlineCitation.Card.Trigger sources={sources.map(source => source.url)} />
    <InlineCitation.Card.Body>
      <InlineCitation.Carousel>
        <InlineCitation.Carousel.Header />
        <InlineCitation.Carousel.Content>
          {sources.map(source => (
            <InlineCitation.Carousel.Item key={source.url}>
              <InlineCitation.Source title={source.title} url={source.url} />
              {source.quote && (
                <InlineCitation.Quote>{source.quote}</InlineCitation.Quote>
              )}
            </InlineCitation.Carousel.Item>
          ))}
        </InlineCitation.Carousel.Content>
      </InlineCitation.Carousel>
    </InlineCitation.Card.Body>
  </InlineCitation.Card>
</InlineCitation>
```

With the AI SDK, a citation's sources are `source-url` parts. Their `title` is optional: fall back to the hostname.

## Anatomy

```tsx
<InlineCitation>
  <InlineCitation.Text />
  <InlineCitation.Card>
    <InlineCitation.Card.Trigger />
    <InlineCitation.Card.Body>
      <InlineCitation.Carousel>
        <InlineCitation.Carousel.Header>
          <InlineCitation.Carousel.Prev />
          <InlineCitation.Carousel.Next />
          <InlineCitation.Carousel.Index />
        </InlineCitation.Carousel.Header>
        <InlineCitation.Carousel.Content>
          <InlineCitation.Carousel.Item>
            <InlineCitation.Source />
            <InlineCitation.Quote />
          </InlineCitation.Carousel.Item>
        </InlineCitation.Carousel.Content>
      </InlineCitation.Carousel>
    </InlineCitation.Card.Body>
  </InlineCitation.Card>
</InlineCitation>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `InlineCitation` | An inline `<span>` | Groups the cited text and its card, so hovering the card's button highlights the text. Optional. |
| `InlineCitation.Text` | An inline `<span>` | The cited words, with a `primary/15` background while the citation is hovered. |
| `InlineCitation.Card` | A [`Popover`](./popover.md) that opens on hover and focus | Holds the open state. |
| `InlineCitation.Card.Trigger` | A small, rounded `tertiary` [`Button`](./button.md) | The marker in the sentence: the first source's hostname and `+N`. |
| `InlineCitation.Card.Body` | `Popover.Content`, 280 px wide | The card. |
| `InlineCitation.Source` | The title (`BodyText`, `emphasis`), the description (`subtle`, up to three lines) and a `Trace.Link` to the hostname | One source. |
| `InlineCitation.Quote` | A `<blockquote>` in italic `subtle` text beside a `hairline` rule | A quote from the source. |
| `InlineCitation.Carousel` | A `View` | Holds the current page. |
| `InlineCitation.Carousel.Header` | A row of `Prev`, `Next` and `Index`, or its children | The paging controls. Hidden when there is only one item. |
| `InlineCitation.Carousel.Prev`, `.Next` | Circular `ghost` buttons with a chevron | Show the previous or next item, wrapping around at the ends. |
| `InlineCitation.Carousel.Index` | `BodyText` like "2/3", right-aligned | The current item and the count. |
| `InlineCitation.Carousel.Content` | A `View` with `aria-live="polite"` | Shows the current item. |
| `InlineCitation.Carousel.Item` | A `View` that fades in | One item. |

## Examples

The examples are the stories in [`InlineCitation.stories.tsx`](../../../components/inline-citation/src/InlineCitation.stories.tsx).

| Story | What it shows |
| --- | --- |
| `Base` | Three citations in two paragraphs. The play function hovers a citation and checks that the card opens without moving focus and closes when the pointer leaves. It then tabs to the citation, which opens the card, presses `Enter` to move focus to the link, checks the link's `target` and name, and presses `Escape`, which closes the card and returns focus to the button. |
| `Carousel` | One citation with three sources, a highlighted cited text and a quote. The play function presses the button twice (the card stays open), pages forward and back, and checks that paging wraps around. |
| `Open` | A card open with `defaultOpen`, with a quote. |

## Props

### InlineCitation and InlineCitation.Text

Both accept the Tamagui `Text` props and render a `<span>`.

### InlineCitation.Card

`InlineCitation.Card` accepts the [`Popover`](./popover.md) props, such as `placement` (default `bottom`), `hoverable` (default `{ delay: { open: 10, close: 100 } }`) and `shouldAdapt` (default `false`: the card stays a card on small screens), and adds:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `boolean` | None | Whether the card is open. Setting it makes the card controlled; pass `onOpenChange` too. |
| `defaultOpen` | `boolean` | `false` | Whether the card starts open when uncontrolled. |
| `onOpenChange` | `(open: boolean) => void` | None | Called with the new open state. |

### InlineCitation.Card.Trigger

`InlineCitation.Card.Trigger` accepts the [`Button`](./button.md) props.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `sources` | `string[]` | Required | The sources' URLs. The button shows the first one's hostname, without `www.`, and `+N` for the rest, or "unknown" when the list is empty. |
| `children` | `ReactNode` | None | A custom label in place of the hostname and count. |

### InlineCitation.Card.Body

`InlineCitation.Card.Body` accepts the `Popover.Content` props, such as `variant` and `hasArrow`. Its children are laid out in a 280 px column.

### InlineCitation.Source

`InlineCitation.Source` accepts the `View` props. Its children follow the link.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | None | The page's title, on one line. |
| `url` | `string` | None | The page's URL, shown as a link to its hostname that opens in a new tab. |
| `description` | `string` | None | A short summary, up to three lines. |

### InlineCitation.Quote

`InlineCitation.Quote` accepts the [`BodyText`](./body-text.md) props. Its children are the quote.

### InlineCitation.Carousel parts

`InlineCitation.Carousel`, `.Header`, `.Content` and `.Item` accept the `View` props. `.Header`'s children replace the default `Prev`, `Next` and `Index`. `.Index` accepts the `BodyText` props; its `children` replace the "2/3" text. `.Prev` and `.Next` accept the `Button` props, except `children`.

The exported types are `InlineCitationProps`, `InlineCitationTextProps`, `InlineCitationCardProps`, `InlineCitationCardTriggerProps`, `InlineCitationCardBodyProps`, `InlineCitationSourceProps`, `InlineCitationQuoteProps`, `InlineCitationCarouselProps`, `InlineCitationCarouselContentProps`, `InlineCitationCarouselItemProps`, `InlineCitationCarouselHeaderProps`, `InlineCitationCarouselIndexProps`, and `InlineCitationCarouselButtonProps`. For React Server Components, the parts are also exported under their AI SDK Elements names: `InlineCitationText`, `InlineCitationCard`, `InlineCitationCardTrigger`, `InlineCitationCardBody`, `InlineCitationSource`, `InlineCitationQuote`, `InlineCitationCarousel`, `InlineCitationCarouselContent`, `InlineCitationCarouselItem`, `InlineCitationCarouselHeader`, `InlineCitationCarouselIndex`, `InlineCitationCarouselPrev`, and `InlineCitationCarouselNext`.

## Behavior

- **Hover:** the card opens 10 ms after the pointer enters the button and closes shortly after it leaves, unless the pointer moves onto the card. Focus stays where it was.
- **Keyboard focus:** tabbing to the button opens the card. Focus stays on the button, and tabbing away closes the card.
- **Keyboard press:** `Enter` or `Space` on the button opens the card if needed and moves focus to its first link or button. `Escape` closes the card and returns focus to the button.
- **Pointer and touch press:** pressing the button opens the card and keeps it open when the pointer leaves; pressing it again keeps it open. Pressing outside or `Escape` closes it. The card stays a card on small screens, no wider than the viewport. `shouldAdapt` turns it into a bottom sheet below the `sm` breakpoint, but the sheet renders a `<div>` where the card is, which is invalid inside a `<p>`.
- **Carousel:** Previous and Next wrap around at the ends, so they are never disabled and never drop focus. The header is hidden when there is only one item.
- The button sits inline in the text, `lg` after the sentence, and does not push the surrounding lines apart.

## Variants and states

- **One or several sources:** the button reads `react.dev` or `react.dev +2`.
- **Highlighted text:** `InlineCitation.Text` takes a `primary/15` background while the citation is hovered.
- **Card surface:** `InlineCitation.Card.Body` takes the [Popover](./popover.md) `variant`, `shadowStyle`, `glass` and `hasArrow` props. The default is the `elevated` surface.

## Accessibility

- The button is a real `<button>`, so it is in the Tab order. It has `aria-haspopup="dialog"` and `aria-expanded`, and its name is the hostname and count.
- Hovering or focusing the button never moves focus. Only a keyboard press moves focus into the card, and `Escape` returns it to the button.
- The link in `InlineCitation.Source` is named by the hostname, followed by visually hidden "(opens in a new tab)". The globe and external-link icons are hidden from assistive tech.
- Previous and Next are named "Previous source" and "Next source". The carousel content is a polite live region, so screen readers read the new source after paging.

## Related

- [Sources](./sources.md)
- [Popover](./popover.md)
- [Tooltip](./tooltip.md)
- [Trace](./trace.md)

## Source

- [`components/inline-citation/src/InlineCitation.tsx`](../../../components/inline-citation/src/InlineCitation.tsx)
- [`components/inline-citation/src/InlineCitation.stories.tsx`](../../../components/inline-citation/src/InlineCitation.stories.tsx)
