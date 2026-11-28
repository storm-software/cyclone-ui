---
title: Context
description: A meter of how much of the model's context window an AI conversation has used, with a card of the token counts and the cost that opens on hover, focus or press.
documentType: reference
tags: [component, context, ai, agent, tokens, usage, chat]
component:
  name: context
  package: "@cyclone-ui/context"
  stories:
    - title: AI/Context
      file: components/context/src/Context.stories.tsx
---

# Context

`Context` shows how much of the model's context window an AI conversation has used. A small trigger shows the percentage and a ring. Hovering, focusing or pressing it opens a card with the used and maximum tokens, a usage bar, the tokens by kind and, when you pass one, the cost so far. It usually sits in a [Prompt Input](./prompt-input.md) footer.

The trigger is a [Button](./button.md) with a [Circular Progress](./circular-progress.md) ring, and the card is a [Popover](./popover.md) with a [Progress](./progress.md) bar. On small screens, the card opens as a bottom sheet.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add context
pnpm install
```

- **File:** `Context.tsx`. The CLI writes it to `<path>/context/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Circular Progress](./circular-progress.md), [Container](./container.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Popover](./popover.md), [Progress](./progress.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), [Sheet](./sheet.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/popper`, and `@tamagui/use-controllable-state`.

## Import

```tsx
import { Context, useContextValue } from "@cyclone-ui/context";
```

## Usage

```tsx
<Context
  usedTokens={10_660}
  maxTokens={128_000}
  usage={{
    inputTokens: 8420,
    outputTokens: 1260,
    reasoningTokens: 980,
    cachedInputTokens: 2048
  }}
  cost={0.0421}
/>
```

With the AI SDK, send the usage as message metadata when the stream finishes:

```ts
return result.toUIMessageStreamResponse({
  messageMetadata: ({ part }) =>
    part.type === "finish" ? { usage: part.totalUsage } : undefined
});
```

Then read it from the last assistant message. The AI SDK does not send the model's context window, so set `maxTokens` from the model you use:

```tsx
const usage = message.metadata?.usage;

<Context
  usedTokens={(usage?.inputTokens ?? 0) + (usage?.outputTokens ?? 0)}
  maxTokens={200_000}
  usage={usage}
/>;
```

`Context` has no pricing data. To show a cost, work it out from your provider's prices and pass it as `cost`, in US dollars.

## Anatomy

With no children, `Context` renders a `Context.Trigger` and a `Context.Content`, which renders the header, the body and (with `cost`) the footer:

```tsx
<Context>
  <Context.Trigger />
  <Context.Content>
    <Context.ContentHeader />
    <Context.ContentBody>
      <Context.InputUsage />
      <Context.OutputUsage />
      <Context.ReasoningUsage />
      <Context.CacheUsage />
    </Context.ContentBody>
    <Context.ContentFooter />
  </Context.Content>
</Context>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Context` | A hoverable [`Popover`](./popover.md) that adapts to a bottom [`Sheet`](./sheet.md) below the `sm` breakpoint | Holds the usage and the open state. |
| `Context.Trigger` | A `ghost`, `sm` [`Button`](./button.md) with the percentage used and a 16 px [`CircularProgress`](./circular-progress.md) ring | Opens the card on hover, focus and press. |
| `Context.Content` | A `Popover.Content`, 232 px wide, that never takes focus | The card. |
| `Context.ContentHeader` | "Context", the used and maximum tokens, and a [`Progress`](./progress.md) bar | The overall usage. |
| `Context.ContentBody` | The token rows under a `hairline` rule. Renders nothing when there are no counts above zero | The usage by kind of token. |
| `Context.InputUsage`, `OutputUsage`, `ReasoningUsage`, `CacheUsage` | A row with a `subtle` label and the count in compact notation. Renders nothing when the count is zero or missing | One kind of token. |
| `Context.ContentFooter` | A "Total cost" row under a `hairline` rule | The cost so far. |

## Examples

The examples are the stories in [`Context.stories.tsx`](../../../components/context/src/Context.stories.tsx). Most use 10,660 of 128,000 tokens.

| Stories | What they show |
| --- | --- |
| `Base` | The play function hovers the trigger, checks the card's counts, the progress bar's value and the missing cost row, and checks that leaving the trigger closes the card. |
| `Keyboard` | The play function tabs to the trigger, checks that the card opens and focus stays on the trigger, closes the card with `Escape`, and opens it again with `Enter`. |
| `Press` | The play function clicks the trigger without hovering it, as a tap does, and closes the card with a press outside. |
| `WithCost` | `cost={0.0421}` adds a "Total cost" row that reads `$0.0421`. |
| `Open` | The card open, with every row and the cost. |
| `NearlyFull` | 121,480 tokens used, 94.9%. |
| `Empty` | No tokens used and no `usage`: "0%", and no token rows. |
| `Composed` | Custom parts: the header and only the input and output rows. |
| `WhileTyping` | The play function types in a [Text Area](./text-area.md), hovers the meter, and checks that focus and the typed text stay in the text area. |

## Props

### Context

`Context` accepts the [`Popover`](./popover.md) props, such as `placement` and `variant`, and these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `usedTokens` | `number` | Required | The tokens the conversation uses. |
| `maxTokens` | `number` | Required | The model's context window, in tokens. |
| `usage` | `ContextUsage` | None | The tokens by kind: `inputTokens`, `outputTokens`, `reasoningTokens`, `cachedInputTokens` (and `totalTokens`, which isn't shown), in the shape of the AI SDK's `LanguageModelUsage`. |
| `cost` | `number` | None | The conversation's cost so far, in US dollars. When set, the card shows a "Total cost" row. |
| `open` | `boolean` | None | Whether the card is open. Setting it makes the card controlled. |
| `defaultOpen` | `boolean` | `false` | Whether the card starts open when uncontrolled. |
| `onOpenChange` | `(open: boolean) => void` | None | Called with the new open state. |
| `children` | `ReactNode` | A `Context.Trigger` and a `Context.Content` | Custom parts. |

### Context.Trigger

`Context.Trigger` accepts the [`Button`](./button.md) props. Its `children` replace the percentage and the ring.

### Context.Content

`Context.Content` accepts the `Popover.Content` props, such as `width` (default `30xl`, 232 px). Its `children` replace the header, body and footer.

### Context.ContentHeader, Context.ContentBody, Context.ContentFooter

These parts accept the `View` props. Their `children` replace their default content.

### Usage rows

`Context.InputUsage`, `Context.OutputUsage`, `Context.ReasoningUsage`, and `Context.CacheUsage` accept the `View` props. Their `children`, when set, render in place of the row.

### useContextValue

`useContextValue()` returns the usage of the nearest `Context`: `usedTokens`, `maxTokens`, `usage`, `cost`, `ratio` (the share used, from 0 to 1), and `setOpen`. It throws outside one.

The exported types are `ContextProps`, `ContextUsage`, `ContextValue`, `ContextTriggerProps`, `ContextContentProps`, `ContextContentHeaderProps`, `ContextContentBodyProps`, `ContextContentFooterProps`, and `ContextUsageProps`. For React Server Components, the parts are also exported as `ContextTrigger`, `ContextContent`, `ContextContentHeader`, `ContextContentBody`, `ContextContentFooter`, `ContextInputUsage`, `ContextOutputUsage`, `ContextReasoningUsage`, and `ContextCacheUsage`.

## Behavior

- The percentage has up to one decimal place ("8.3%"), and token counts use compact notation ("10.7K / 128K"). The cost shows two to four decimal places ("$0.0421"), since a conversation often costs less than a cent. The numbers are formatted for `en-US`.
- The percentage, ring and bar stop at 100%, even when `usedTokens` is above `maxTokens`.
- The card opens 10 ms after the pointer enters the trigger and closes 100 ms after it leaves, unless the pointer moves onto the card. Keyboard focus opens it, and moving focus away closes it. Pressing the trigger opens it (it doesn't toggle, since hovering already opened it), and pressing outside or `Escape` closes it.
- The card never takes focus or traps it, and closing it doesn't move focus. Hovering the meter while typing in a [Prompt Input](./prompt-input.md) leaves the caret where it was.
- Below the `sm` breakpoint, the card is a bottom sheet that only a press opens; hovering and focusing the trigger don't.

## Variants and states

- **Surface:** the card takes the `Popover` `variant` (`elevated` by default), `shadowStyle`, `glass`, `noise`, and `accented` props.
- **No usage:** without `usage`, or with all counts at zero, the card shows only the header.
- **No cost:** without `cost`, the card has no footer.

## Accessibility

- The trigger is a button named "8.3% of context used", which contains its visible text. The ring is hidden from assistive tech.
- The bar has `role="progressbar"`, the label "Context used", and the percentage as its value.
- The card opens on keyboard focus, not only on hover, and `Escape` closes it.

## Related

- [Prompt Input](./prompt-input.md)
- [Model Selector](./model-selector.md)
- [Progress](./progress.md)
- [Circular Progress](./circular-progress.md)
- [Popover](./popover.md)

## Source

- [`components/context/src/Context.tsx`](../../../components/context/src/Context.tsx)
- [`components/context/src/Context.stories.tsx`](../../../components/context/src/Context.stories.tsx)
