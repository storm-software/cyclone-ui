---
title: Sources
description: A Trace line that reads "Used 3 sources" and opens into a link for each page an AI agent used for a reply.
documentType: reference
tags: [component, sources, ai, agent, links, citations, trace, collapsible]
component:
  name: sources
  package: "@cyclone-ui/sources"
  stories:
    - title: AI/Sources
      file: components/sources/src/Sources.stories.tsx
---

# Sources

`Sources` lists the links an AI agent used for a reply. It is a [Trace](./trace.md) line that says how many there are, like "Used 3 sources", and opens into a link for each page. Each link opens in a new tab.

It is the Cyclone UI version of the [AI SDK Elements](https://elements.ai-sdk.dev) Sources component, rebuilt on `Trace` like the [shadcn/ui](https://ui.shadcn.com/docs/ai-elements) one. The exports and props keep their AI SDK Elements names. To cite a source inside a sentence, use [Inline Citation](./inline-citation.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add sources
pnpm install
```

- **File:** `Sources.tsx`. The CLI writes it to `<path>/sources/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Trace](./trace.md), [Accordion](./accordion.md), [Body Text](./body-text.md), [Collapsible](./collapsible.md), [Container](./container.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), and [Visually Hidden](./visually-hidden.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { Sources } from "@cyclone-ui/sources";
```

## Usage

```tsx
<Sources>
  <Sources.Trigger count={sources.length} />
  <Sources.Content>
    {sources.map(source => (
      <Sources.Source key={source.url} href={source.url} title={source.title} />
    ))}
  </Sources.Content>
</Sources>
```

With the AI SDK, the sources are the message's `source-url` parts. The agent can cite a page more than once, so dedupe them by URL, and render `Sources` only when there is at least one:

```tsx
const sources = message.parts
  .filter(part => part.type === "source-url")
  .filter(
    (part, index, all) => all.findIndex(other => other.url === part.url) === index
  );

{sources.length > 0 && (
  <Sources>
    <Sources.Trigger count={sources.length} />
    <Sources.Content>
      {sources.map(source => (
        <Sources.Source key={source.url} href={source.url} title={source.title} />
      ))}
    </Sources.Content>
  </Sources>
)}
```

A part's `title` is optional. Without it, the link shows the URL's hostname, like `typescriptlang.org`.

## Anatomy

```tsx
<Sources>
  <Sources.Trigger />
  <Sources.Content>
    <Sources.Source />
  </Sources.Content>
</Sources>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Sources` | A `Trace` with a `Trace.Collapsible` | Holds the open state. |
| `Sources.Trigger` | A `Trace.Collapsible.Trigger` with a `Trace.Line`: a globe icon and "Used N sources" | Opens and closes the list. |
| `Sources.Content` | A `Trace.Collapsible.Content` with a `Trace` | The list of links. |
| `Sources.Source` | A `Trace.Link` (`external`) with a `Trace.Line`: the title and an external-link icon | One page. |

## Examples

The examples are the stories in [`Sources.stories.tsx`](../../../components/sources/src/Sources.stories.tsx).

| Story | What it shows |
| --- | --- |
| `Base` | Three sources, closed. The play function opens the list, checks a link's `href`, `target` and accessible name, and closes it again with `Enter`. |
| `Open` | The list open with `defaultOpen`. |
| `Single` | One source without a title: the trigger reads "Used 1 source" and the link shows the hostname. |
| `Streaming` | A reply streams in, then its sources arrive one at a time. The first page is cited twice and deduped. |

## Props

### Sources

`Sources` accepts the [`Trace.Collapsible`](./trace.md) props.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `boolean` | None | Whether the list is open. Setting it makes `Sources` controlled; pass `onOpenChange` too. |
| `defaultOpen` | `boolean` | `false` | Whether the list starts open when uncontrolled. |
| `onOpenChange` | `(open: boolean) => void` | None | Called with the new open state when the reader opens or closes the list. |

### Sources.Trigger

`Sources.Trigger` accepts the `Trace.Collapsible.Trigger` props.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `count` | `number` | Required | The number of sources, shown as "Used 3 sources" ("Used 1 source" for one). |
| `children` | `ReactNode` | None | A custom line in place of the default one. Wrap it in a `Trace.Line`. |

### Sources.Content

`Sources.Content` accepts the `Trace.Collapsible.Content` props. Its children are the `Sources.Source` links.

### Sources.Source

`Sources.Source` accepts the `Trace.Link` props, except `external`, which is always on.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `href` | `string` | Required | The page's URL. |
| `title` | `string` | The URL's hostname, without `www.` | The page's title, which names the link. |
| `children` | `ReactNode` | None | A custom line in place of the default one. Wrap it in a `Trace.Line`. |

The exported types are `SourcesProps`, `SourcesTriggerProps`, `SourcesContentProps`, and `SourceProps`. For React Server Components, the parts are also exported under their AI SDK Elements names: `SourcesTrigger`, `SourcesContent`, and `Source`.

## Behavior

- The list starts closed unless `defaultOpen` or `open` says otherwise. Pressing the line, or `Enter` or `Space` on it, opens and closes it.
- Each link opens its page in a new tab with `rel="noreferrer"`. On native, it opens the URL with `Linking`.
- A link's title truncates to one line. The line darkens while the pointer is over it.

## Variants and states

- **Closed and open:** the chevron after "Used N sources" points down when closed and up when open.
- **Without a title:** the link shows the URL's hostname. A URL that doesn't parse is shown as is.

## Accessibility

- The trigger is a button with `aria-expanded`. Its name, like "Used 3 sources", tells the reader what opens before they open it.
- Each source is a link named by its title, followed by visually hidden "(opens in a new tab)".
- The globe and external-link icons are decorative and hidden from assistive tech.

## Related

- [Trace](./trace.md)
- [Inline Citation](./inline-citation.md)
- [Reasoning](./reasoning.md)
- [Tool](./tool.md)

## Source

- [`components/sources/src/Sources.tsx`](../../../components/sources/src/Sources.tsx)
- [`components/sources/src/Sources.stories.tsx`](../../../components/sources/src/Sources.stories.tsx)
