---
title: Plan
description: A Trace line for the steps an agent decides on before it starts, with the goal and its progress, that opens into done, running and pending steps.
documentType: reference
tags: [component, plan, ai, agent, steps, trace, collapsible]
component:
  name: plan
  package: "@cyclone-ui/plan"
  stories:
    - title: AI/Plan
      file: components/plan/src/Plan.stories.tsx
---

# Plan

`Plan` is the list of steps an agent decides on before it starts, such as the steps of a migration, shown as a [Trace](./trace.md) line. The line names the goal and counts how many steps are done, and it opens into the steps. Each step is done, running or pending. The plan starts open, and the line shimmers while the agent works through it.

It is the Cyclone UI version of the [AI SDK Elements](https://elements.ai-sdk.dev) Plan component, rebuilt on `Trace` like the [shadcn/ui](https://ui.shadcn.com/docs/ai-elements) one. The exports keep their AI SDK Elements names, and `Plan.Step` is new. When the steps are not known up front, use [Task](./task.md#task-or-plan) instead.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add plan
pnpm install
```

- **File:** `Plan.tsx`. The CLI writes it to `<path>/plan/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Trace](./trace.md), [Accordion](./accordion.md), [Body Text](./body-text.md), [Collapsible](./collapsible.md), [Container](./container.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), and [Visually Hidden](./visually-hidden.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { Plan } from "@cyclone-ui/plan";
```

## Usage

```tsx
const done = steps.filter(step => step.status === "done").length;

<Plan isStreaming={streaming && done < steps.length}>
  <Plan.Header>
    <Plan.Title>Plan: migrate to Base UI</Plan.Title>
    <Plan.Description>
      {done} of {steps.length} done
    </Plan.Description>
  </Plan.Header>
  <Plan.Content>
    {steps.map(step => (
      <Plan.Step key={step.title} status={step.status}>
        {step.title}
      </Plan.Step>
    ))}
  </Plan.Content>
</Plan>;
```

With the AI SDK, stream the plan as a data part with a fixed `id`, such as `"plan"`. The SDK replaces a data part with the same `id`, so the plan updates in place:

```tsx
const plan = message.parts.find(part => part.type === "data-plan");
```

To explain the approach, put text above the steps, inside `Plan.Content`:

```tsx
<Plan.Content>
  <BodyText size="sm">
    Store the theme in a cookie so the server renders the right one.
  </BodyText>
  <Plan.Step status="done">Add a dark variant to the theme tokens</Plan.Step>
  <Plan.Step>Read the theme from a cookie on the server</Plan.Step>
</Plan.Content>
```

Buttons can't sit inside the line, which is a button itself. Put a `Plan.Action` in `Plan.Header`: it is rendered beside the line. `Plan.Footer` is a row under the plan that stays when the plan closes:

```tsx
<Plan>
  <Plan.Header>
    <Plan.Title>Plan: add dark mode</Plan.Title>
    <Plan.Action>
      <Button variant="outlined" size="sm" flexGrow={0}>
        <Button.Text>Edit</Button.Text>
      </Button>
    </Plan.Action>
  </Plan.Header>
  <Plan.Content>…</Plan.Content>
  <Plan.Footer>
    <Button variant="primary" size="sm" flexGrow={0}>
      <Button.Text>Build</Button.Text>
    </Button>
  </Plan.Footer>
</Plan>
```

## Anatomy

```tsx
<Plan>
  <Plan.Header>
    <Plan.Title />
    <Plan.Description />
    <Plan.Action />
  </Plan.Header>
  <Plan.Content>
    <Plan.Step />
  </Plan.Content>
  <Plan.Footer />
</Plan>
```

| Part               | Renders                                                                                     | Purpose                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `Plan`             | A [`Trace.Collapsible`](./trace.md#tracecollapsible), open by default                       | Holds `isStreaming`.                                                        |
| `Plan.Header`      | A `Trace.Collapsible.Trigger` with a `Trace.Line`: a map icon and its children              | Opens and closes the steps. Shimmers while the plan streams.               |
| `Plan.Title`       | `Trace.Title`                                                                               | The goal: "Plan: migrate to Base UI".                                       |
| `Plan.Description` | `Trace.Description`                                                                         | The progress: "2 of 4 done".                                                |
| `Plan.Action`      | A row `View`, rendered beside the trigger                                                   | Buttons for the plan, such as "Edit".                                       |
| `Plan.Content`     | `Trace.Collapsible.Content` with a `Trace`                                                  | The steps, and any text above them, indented under a rule.                  |
| `Plan.Step`        | A `Trace.Line` with a status icon and a title                                               | One step.                                                                   |
| `Plan.Footer`      | A row `View` lined up with the plan's line                                                  | Buttons under the plan, such as "Build".                                    |
| `Plan.Trigger`     | Only its children                                                                           | Kept for code written against AI SDK Elements: the whole line opens the plan. |

## Examples

The examples are the stories in [`Plan.stories.tsx`](../../../components/plan/src/Plan.stories.tsx).

| Stories     | What they show                                                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Streaming` | The steps turn done one by one. The play function checks that the plan starts open at "0 of 4 done" and is still open at "4 of 4 done".              |
| `Steps`     | Done, running and pending steps without streaming, so nothing shimmers.                                                                               |
| `Details`   | Text above the steps. The play function closes the plan with `Enter` and checks `onOpenChange`.                                                       |
| `Actions`   | An "Edit" button beside the line and a footer with "Build" and "Keep planning". The play function checks that pressing "Edit" doesn't toggle the plan. |

## Props

### Plan

`Plan` accepts the [`Trace.Collapsible`](./trace.md#tracecollapsible) props and adds this prop:

| Prop          | Type      | Default | Description                                                                         |
| ------------- | --------- | ------- | ----------------------------------------------------------------------------------- |
| `isStreaming` | `boolean` | `false` | Whether the agent is still working through the plan. The line and the running step shimmer. |
| `defaultOpen` | `boolean` | `true`  | Whether the plan starts open when uncontrolled.                                     |

### Plan.Header

`Plan.Header` accepts the `Trace.Collapsible.Trigger` props. Its children are the line's content, after the icon; `Plan.Action` children are rendered beside the trigger.

### Plan.Title and Plan.Description

They are `Trace.Title` and `Trace.Description` and accept the [`BodyText`](./body-text.md) props.

### Plan.Step

`Plan.Step` accepts the [`Trace.Line`](./trace.md#traceline) props except `status`, and adds this prop:

| Prop     | Type                                 | Default     | Description                                                                                                              |
| -------- | ------------------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| `status` | `"done" \| "running" \| "pending"`   | `"pending"` | A check when done, a dotted circle while running (shimmering while the plan streams), a dimmed empty circle while pending. |

### Plan.Action, Plan.Footer and Plan.Content

`Plan.Action` and `Plan.Footer` accept the `View` props. `Plan.Content` accepts the `Trace.Collapsible.Content` props.

The exported types are `PlanProps`, `PlanHeaderProps`, `PlanTitleProps`, `PlanDescriptionProps`, `PlanActionProps`, `PlanContentProps`, `PlanStepProps`, `PlanStepStatus`, and `PlanFooterProps`. For React Server Components, the parts are also exported as `PlanHeader`, `PlanTitle`, `PlanDescription`, `PlanAction`, `PlanTrigger`, `PlanContent`, `PlanStep`, and `PlanFooter`.

## Behavior

- The plan starts open and stays open when it is done: it is the reference for what the agent set out to do.
- While `isStreaming` is `true`, the line is running: its title shimmers, and so does the running step's. Pass `false` once every step is done.
- A pending step is dimmed. A running step shows a dotted circle, and a done step a check that draws itself in when the step turns done.
- `Plan.Action` children are taken out of the header's children and rendered after the trigger, so the buttons are not nested in the trigger's button.

## Variants and states

- **Streaming:** the line and the running step shimmer, or nothing does.
- **Open:** open by default, closed by the reader or the `open` prop.
- **Step:** `done`, `running`, or `pending`.

## Accessibility

- The header is a button with `aria-expanded`, named by the title and the description: "Plan: migrate to Base UI 2 of 4 done".
- The status icons are hidden from screen readers, so say the status in the step's title when it matters, or count the done steps in the description.
- `Plan.Action` and `Plan.Footer` buttons are separate tab stops after the header.
- The shimmer stops when the reader prefers reduced motion.

## Related

- [Task](./task.md)
- [Queue](./queue.md)
- [Trace](./trace.md)
- [Stepper](./stepper.md)

## Source

- [`components/plan/src/Plan.tsx`](../../../components/plan/src/Plan.tsx)
- [`components/plan/src/Plan.stories.tsx`](../../../components/plan/src/Plan.stories.tsx)
