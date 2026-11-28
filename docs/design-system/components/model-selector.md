---
title: Model Selector
description: A menu that picks the model an AI agent runs, grouped by provider with a short description of each, or how hard the agent thinks. It opens as a popover on large screens and as a bottom sheet on small ones.
documentType: reference
tags: [component, model-selector, ai, agent, menu, chat]
component:
  name: model-selector
  package: "@cyclone-ui/model-selector"
  stories:
    - title: AI/ModelSelector
      file: components/model-selector/src/ModelSelector.stories.tsx
---

# Model Selector

`ModelSelector` is a menu for an AI chat input. One picks the model the agent runs, grouped by provider with a short description of each model. Another picks how hard the agent thinks (effort). Both use the same parts, and both usually sit in a [Prompt Input](./prompt-input.md) footer, next to the submit button.

It is built on [Context Menu](./context-menu.md), so it opens as a popover on large screens and as a bottom sheet on small screens. The selected option shows a check mark, and picking an option closes the menu.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add model-selector
pnpm install
```

- **File:** `ModelSelector.tsx`. The CLI writes it to `<path>/model-selector/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Context Menu](./context-menu.md), [Eyebrow Text](./eyebrow-text.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Popover](./popover.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), [Sheet](./sheet.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core` and `@tamagui/use-controllable-state`.

## Import

```tsx
import { ModelSelector } from "@cyclone-ui/model-selector";
```

## Usage

Keep the selected model in state, and show its name in the trigger:

```tsx
const PROVIDERS = [
  {
    name: "OpenAI",
    models: [
      { id: "gpt-5", name: "GPT-5", description: "Best for multi-step work" },
      { id: "gpt-5-mini", name: "GPT-5 mini", description: "Fast and affordable" }
    ]
  },
  {
    name: "Anthropic",
    models: [
      { id: "claude-sonnet-4-5", name: "Claude Sonnet 4.5", description: "Best for coding and agents" }
    ]
  }
];
const MODELS = PROVIDERS.flatMap(provider => provider.models);

const [model, setModel] = useState("gpt-5");
const current = MODELS.find(item => item.id === model)!;

<ModelSelector value={model} onValueChange={setModel}>
  <ModelSelector.Trigger aria-label={`Model: ${current.name}`}>
    {current.name}
  </ModelSelector.Trigger>
  <ModelSelector.Content>
    {PROVIDERS.map((provider, index) => (
      <Fragment key={provider.name}>
        {index > 0 && <ModelSelector.Separator />}
        <ModelSelector.Group heading={provider.name}>
          {provider.models.map(item => (
            <ModelSelector.Item
              key={item.id}
              value={item.id}
              description={item.description}>
              {item.name}
            </ModelSelector.Item>
          ))}
        </ModelSelector.Group>
      </Fragment>
    ))}
  </ModelSelector.Content>
</ModelSelector>;
```

The effort menu uses the same parts. The trigger's `label` shows a muted "Effort" before the selected level:

```tsx
<ModelSelector value={effort} onValueChange={setEffort}>
  <ModelSelector.Trigger label="Effort">{effortName}</ModelSelector.Trigger>
  <ModelSelector.Content>
    <ModelSelector.Group heading="Effort">
      <ModelSelector.Item value="low">Low</ModelSelector.Item>
      <ModelSelector.Item value="medium">Medium</ModelSelector.Item>
      <ModelSelector.Item value="high">High</ModelSelector.Item>
    </ModelSelector.Group>
  </ModelSelector.Content>
</ModelSelector>
```

With the AI SDK, send the model and the effort with each message, and map them to a model and provider options in the route:

```tsx
sendMessage({ text }, { body: { model, effort } });
```

## Anatomy

```tsx
<ModelSelector>
  <ModelSelector.Trigger />
  <ModelSelector.Content>
    <ModelSelector.Group>
      <ModelSelector.Item />
    </ModelSelector.Group>
    <ModelSelector.Separator />
    <ModelSelector.Group>
      <ModelSelector.Item>
        <ModelSelector.Name />
      </ModelSelector.Item>
    </ModelSelector.Group>
  </ModelSelector.Content>
</ModelSelector>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `ModelSelector` | A [`ContextMenu`](./context-menu.md) (a [`Popover`](./popover.md) that adapts to a bottom [`Sheet`](./sheet.md) below the `sm` breakpoint) | Holds the selected value and the open state. Picking an option closes it. |
| `ModelSelector.Trigger` | A `ghost`, `sm` [`Button`](./button.md) with the optional muted `label`, the `children` and a chevron | Opens the menu. |
| `ModelSelector.Content` | A `ContextMenu.Content` with a scroll view, at least 192 px wide | The menu. |
| `ModelSelector.Group` | A `View` with `role="group"`, named by an `EyebrowText` heading | Items under a heading, such as a provider's models. |
| `ModelSelector.Item` | A `ContextMenu.Item` with the name and an optional second line | One option. |
| `ModelSelector.Name` | A `ContextMenu.Item.Text` | An item's name, for custom item layouts. A string `children` of an item is wrapped in one. |
| `ModelSelector.Separator` | A 1 px `hairline` rule | Separates groups. |

## Examples

The examples are the stories in [`ModelSelector.stories.tsx`](../../../components/model-selector/src/ModelSelector.stories.tsx). They use two providers with two models each, and three effort levels.

| Stories | What they show |
| --- | --- |
| `Base` | The model menu. The play function picks Claude Sonnet 4.5, checks `onValueChange`, the closed menu and the new trigger name, then reopens the menu and checks the check mark. |
| `Open` | The model menu open, with the provider headings and the model descriptions. |
| `Effort` | The effort menu. The play function opens it with `Enter`, moves to High with the arrow keys and picks it with `Enter`, then reopens it and closes it with `Escape` without picking. |
| `EffortOpen` | The effort menu open. |
| `Toolbar` | Both menus side by side, as in a prompt input footer. |

## Props

### ModelSelector

`ModelSelector` accepts the [`ContextMenu`](./context-menu.md) props, such as `size`, `variant` and `placement`, and these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | None | The `value` of the selected item, which shows a check mark. |
| `onValueChange` | `(value: string) => void` | None | Called with an item's `value` when it is picked. The menu closes. |
| `open` | `boolean` | None | Whether the menu is open. Setting it makes the menu controlled. |
| `defaultOpen` | `boolean` | `false` | Whether the menu starts open when uncontrolled. |
| `onOpenChange` | `(open: boolean) => void` | None | Called with the new open state. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | The size of the items' text and spacing. |

### ModelSelector.Trigger

`ModelSelector.Trigger` accepts the [`Button`](./button.md) props. It is a `ghost` button of size `sm` that doesn't grow in a row.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | None | The selected option's name. |
| `label` | `string` | None | A muted label before the name, such as "Effort". With a string `children`, the button is named "Effort: Medium". |

### ModelSelector.Content

`ModelSelector.Content` accepts the `ContextMenu.Content` props, such as `width` and `minWidth` (default `26xl`, 192 px).

### ModelSelector.Group

`ModelSelector.Group` accepts the `View` props.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `heading` | `string` | None | The group's name, shown above its items in line with their text. It also names the group. |

### ModelSelector.Item

`ModelSelector.Item` accepts the `ContextMenu.Item` props, such as `disabled` and `theme`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | None | Passed to the menu's `onValueChange` when the item is picked. |
| `description` | `ReactNode` | None | A short line under the name, in the `subtle` color. |
| `children` | `ReactNode` | None | The name. A string is wrapped in a `ModelSelector.Name`; other content renders as it is. |

The exported types are `ModelSelectorProps`, `ModelSelectorTriggerProps`, `ModelSelectorContentProps`, `ModelSelectorGroupProps`, `ModelSelectorItemProps`, and `ModelSelectorNameProps`. For React Server Components, the parts are also exported as `ModelSelectorTrigger`, `ModelSelectorContent`, `ModelSelectorGroup`, `ModelSelectorItem`, `ModelSelectorName`, and `ModelSelectorSeparator`.

## Behavior

- Pressing the trigger opens the menu below it, or above it when there is no room below. Picking an option calls `onValueChange` and closes the menu. Pressing outside or `Escape` closes it without picking.
- The selected option shows a check mark and a bold name. Once an option is selected, the others dim until they are hovered or focused.
- Below the `sm` breakpoint, the menu opens as a bottom sheet.
- Names that don't fit end in an ellipsis and show the full name in a tooltip on hover.

## Variants and states

- **Surface:** the menu takes the `ContextMenu` `variant` (`elevated` by default), `shadowStyle`, `glass`, `noise`, and `accented` props.
- **Size:** `sm`, `md` (default), or `lg` items. The group headings stay in line with the item text at every size.
- **Disabled options:** a `disabled` item shows a lock and can't be picked.

## Accessibility

- The trigger is a button with `aria-expanded`. With `label`, it is named "Effort: Medium"; give the model trigger an `aria-label` such as "Model: GPT-5" so that it says what it picks.
- Opening the menu moves focus to the first option. The `ArrowDown` and `ArrowUp` keys move between options and wrap around, `Enter` or `Space` picks one, and `Escape` closes the menu and returns focus to the trigger.
- Each option is a button named by its name and description. Each group has `role="group"` and is named by its heading.

## Related

- [Prompt Input](./prompt-input.md)
- [Context](./context.md)
- [Context Menu](./context-menu.md)
- [Select](./select.md)

## Source

- [`components/model-selector/src/ModelSelector.tsx`](../../../components/model-selector/src/ModelSelector.tsx)
- [`components/model-selector/src/ModelSelector.stories.tsx`](../../../components/model-selector/src/ModelSelector.stories.tsx)
