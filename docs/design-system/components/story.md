---
title: Story
description: Reference for the Story component, a documentation block that displays a component with a title, a description, variants, and a Props panel of controls that update the display.
documentType: reference
tags: [component, story, docs, controls, playground]
component:
  name: story
  package: "@cyclone-ui/story"
  stories:
    - title: Docs/Story
      file: components/story/src/Story.stories.tsx
---

# Story

`Story` displays a component on a documentation page and lets the reader change its props. It renders the component in a preview. Under the preview, a Props panel holds one control for each prop: a text input, a number input, a switch, or a select. Each change renders the preview again.

It is like [Fumadocs Story](https://www.fumadocs.dev/docs/next/integrations/story), built from Cyclone UI parts. Fumadocs Story builds its controls from the component's TypeScript props at build time. `Story` builds them at run time from the initial `args` and the `controls` that you declare, so it needs no build plugin.

Use [Type Table](./type-table.md) to list every prop of a component with its type. Use `Story` to show the component live, with the props that a reader is likely to change.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add story
pnpm install
```

- **File:** `Story.tsx`. The CLI writes it to `<path>/story/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Field](./field.md), [Form](./form.md), [Heading Text](./heading-text.md), [Input](./input.md), [Number Input](./number-input.md), [Select](./select.md), [Switch](./switch.md), and the components that they need.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/stacks`.

## Import

```tsx
import { Story } from "@cyclone-ui/story"
```

## Usage

Pass a component and its initial `args`. String, number, and boolean args get a control. Declare other controls, such as a select, in `controls`:

```tsx
<Story
  title="Kbd"
  description="A keyboard key cap."
  component={Kbd}
  args={{ children: "Esc", size: "md" }}
  controls={{
    size: {
      type: "select",
      options: ["sm", "md", "lg"],
      description: "The key size."
    }
  }}
/>
```

For a compound component, build the display from the args with `render`. Give the props type as the type argument:

```tsx
interface ButtonStoryProps {
  label: string
  variant: "primary" | "outlined"
  disabled: boolean
}

;<Story<ButtonStoryProps>
  title="Button"
  render={({ label, ...props }) => (
    <Button {...props}>
      <Button.Text>{label}</Button.Text>
    </Button>
  )}
  args={{ label: "Save", disabled: false }}
  variants={[
    { name: "Primary", fixed: { variant: "primary" } },
    {
      name: "Outlined",
      description: "A secondary action.",
      args: { label: "Cancel" },
      fixed: { variant: "outlined" }
    }
  ]}
/>
```

In an MDX page, render the story like any other component.

## Anatomy

```tsx
<Story>
  {/* StoryHeader: title, description, variant select */}
  {/* StoryPreview > StoryCanvas: the component */}
  {/* StoryControls: Props heading, Reset, a Form of Fields */}
</Story>
```

| Part            | Renders                                                                                 | Purpose                                                                                                                                                                                                                        |
| --------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Story`         | A `YStack` with a 1 px `hairline` border, the `card` radius, and a `surface` background | The block. It accepts the props of a Tamagui `View`, except `children` and `render`.                                                                                                                                           |
| `StoryHeader`   | An `XStack` with a `hairline` bottom border                                             | The `title` as `HeadingSmallText`, the `description` and the selected variant's description as subtle `sm` `BodyText`, and the variant select. It renders only when there is a title, a description, or more than one variant. |
| `StoryPreview`  | A `View` with a `canvas` background, `3xl` padding, and a minimum height of 160 px      | Centers the display. An error boundary inside it catches a render that throws, and a `Suspense` boundary shows the skeleton while it loads.                                                                                    |
| `StoryCanvas`   | A `View` with `maxWidth: "100%"`                                                        | Sizes the display to its content, so that a child with `flexGrow: 1` (such as a `Button`) does not fill the preview.                                                                                                           |
| `StoryControls` | A `YStack` with a `hairline` top border                                                 | A "Props" heading, a ghost `sm` Reset `Button`, and a `Form` with one `Field` for each control. It renders only when there is at least one control.                                                                            |

## Examples

The examples are the stories in [`Story.stories.tsx`](../../../components/story/src/Story.stories.tsx).

| Stories       | What they show                                                                                                                                                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Base`        | A `Kbd` with an inferred text control (relabeled "Label") and a declared `size` select. The play function types a new label, picks a size, and presses Reset. |
| `Variants`    | A `Button` through `render`, with Primary, Outlined, and Ghost variants that fix `variant`. The play function switches to Outlined.                           |
| `Numbers`     | A meter with a number control, a fixed `max`, and a `caption` whose control is hidden with `false`.                                                           |
| `Loading`     | The meter with `loading` and a `skeleton` shaped like it: a bar and a caption line. The controls still show.                                                  |
| `Lazy`        | The meter as a `lazy` component that loads after 1.5 s. The default skeleton shows until it is ready.                                                         |
| `RenderError` | A component that throws while a switch is on. The error shows in the preview with an error icon, and the component renders again when the switch is off.      |

## Props

`Story` also accepts the props of a Tamagui `View`, except `children` and `render`, and passes them to the outer frame. The exported type is `StoryProps<TProps>`. `TProps` is the type of the args. TypeScript infers it from `component`. With `render`, give it as a type argument.

| Prop          | Type                              | Default | Description                                                                                                                          |
| ------------- | --------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `component`   | `ComponentType<TProps>`           | -       | The component to display. It receives the args as props.                                                                             |
| `render`      | `(args: TProps) => ReactNode`     | -       | Builds the display from the args, in place of `component`. Use it for compound components.                                           |
| `title`       | `string`                          | -       | The heading of the block.                                                                                                            |
| `description` | `ReactNode`                       | -       | Documentation for the component, under the title. A string renders as subtle `sm` `BodyText`.                                        |
| `args`        | `Partial<TProps>`                 | -       | The initial props. String, number, and boolean values get a control.                                                                 |
| `fixed`       | `Partial<TProps>`                 | -       | Props that the reader cannot change. They are passed to the component and get no control.                                            |
| `controls`    | `StoryControls<TProps>`           | -       | The control of each prop, over the inferred one. A prop listed here gets a control even without an initial value. `false` hides one. |
| `variants`    | `readonly StoryVariant<TProps>[]` | -       | Presets of args. With more than one, a select over the preview picks the variant.                                                    |
| `loading`     | `boolean`                         | `false` | Shows the skeleton in place of the display, such as while data it needs loads.                                                       |
| `skeleton`    | `ReactNode`                       | -       | The placeholder shown while the display loads or suspends. Shape it like the component. Defaults to a 240 × 40 px `Skeleton`.        |

### `StoryControl`

| Field         | Type                                          | Description                                                     |
| ------------- | --------------------------------------------- | --------------------------------------------------------------- |
| `type`        | `"text" \| "number" \| "boolean" \| "select"` | The control. See [Controls](#controls).                         |
| `options`     | `readonly (string \| number \| boolean)[]`    | Only for `select`, and required there. The values to pick from. |
| `label`       | `string`                                      | The field label. Defaults to the prop name.                     |
| `description` | `string`                                      | Documentation for the prop, shown with its control.             |

### `StoryVariant`

| Field         | Type              | Description                                                            |
| ------------- | ----------------- | ---------------------------------------------------------------------- |
| `name`        | `string`          | The name in the variant select. Unique among the story's variants.     |
| `description` | `string`          | Shown under the story description while the variant is selected.       |
| `args`        | `Partial<TProps>` | The initial props of the variant, over the story's `args`.             |
| `fixed`       | `Partial<TProps>` | Props that cannot be changed in the variant, over the story's `fixed`. |

## Controls

| `type`    | Control                                                     | Inferred from | Value                                                                        |
| --------- | ----------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------- |
| `text`    | An `sm` `Input`                                             | a `string`    | The text. An empty input gives `""`.                                         |
| `number`  | An `sm` `NumberInput` with decrease and increase buttons    | a `number`    | The number. An empty input, or text that is not a number, gives `undefined`. |
| `boolean` | An `sm` `Switch`, with its label beside it                  | a `boolean`   | `true` or `false`.                                                           |
| `select`  | An `sm` `Select` of `options`, labeled with `String(value)` | never         | The selected option.                                                         |

Each control is a `Field`, with its `description` as `Field.Details`. The label sits above the control, or beside the switch. Other values, such as objects, functions, and elements, get no control and are passed to the component as they are.

## Behavior

- **Args.** The display receives the story `args`, then the variant `args`, then the values of the controls, then the story `fixed` props, then the variant `fixed` props. A later source wins.
- **Order.** The controls follow the order of the args, then the order of `controls` for props without an initial value.
- **Updates.** A control updates the display 100 ms after the last change (the field `debounceMs`).
- **Reset.** Reset restores the initial args of the selected variant and remounts the controls. Choosing a variant does the same for the new variant.
- **Snapshot.** `Story` reads `args`, `fixed`, `controls`, and `variants` when it mounts and on each reset. A change to these props after that shows after the next reset.
- **Loading.** While `loading` is `true`, or while the display suspends (such as a `lazy` component loading), the preview shows the `skeleton`. The controls stay usable, and the display shows their values once it loads.
- **Errors.** When the display throws, the preview shows an animated `ErrorCircle` icon, "The component failed to render." and the error message, in the `danger` theme. React logs the error. The display renders again when the args change.

## Accessibility

- Each control has a `Field.Label` that names it. Screen readers read the label and its `Field.Details` description.
- The variant select has the label "Variant". The Reset button has the text "Reset".
- The error message in the preview has `role="alert"`, so screen readers announce it. Its icon is hidden from screen readers.
- While `loading` is `true`, the preview content has `aria-busy`. The default skeleton is hidden from screen readers.
- `Story` does not label the preview region. Give the displayed component its own accessible name, as it would have on a page.

## Related

- [Type Table](./type-table.md)
- [Code Block](./code-block.md)
- [Docs Page](./docs-page.md)
- [Field](./field.md)
- [Form](./form.md)

## Source

- [`components/story/src/Story.tsx`](../../../components/story/src/Story.tsx)
- [`components/story/src/Story.stories.tsx`](../../../components/story/src/Story.stories.tsx) (title: `Docs/Story`)
