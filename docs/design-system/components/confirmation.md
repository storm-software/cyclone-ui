---
title: Confirmation
description: Asks the person to approve or deny a tool call before it runs, with the question, an optional description and icon, and Deny and Approve buttons. An AI component.
documentType: reference
tags: [component, confirmation, approval, ai, agent, tool]
component:
  name: confirmation
  package: "@cyclone-ui/confirmation"
  stories:
    - title: AI/Confirmation
      file: components/confirmation/src/Confirmation.stories.tsx
---

# Confirmation

`Confirmation` asks the person for a yes or no before a tool runs, such as a command that deletes files. It is a bordered row with an icon that names the tool, the question, and Deny and Approve buttons. A pending approval is a question for the person, not a step the agent took, so it sits outside the [Trace](./trace.md). Once the person answers, the call becomes a [Tool](./tool.md) line.

It is the Cyclone UI version of the [AI SDK Elements](https://elements.ai-sdk.dev) Confirmation, with the same exports and props. It has no AI SDK dependency: the package defines the `ToolState` and `ToolApproval` types that it and [Tool](./tool.md) read.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add confirmation
pnpm install
```

- **File:** `Confirmation.tsx`. The CLI writes it to `<path>/confirmation/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core` and `@tamagui/helpers-tamagui`.

## Import

```tsx
import { Confirmation } from "@cyclone-ui/confirmation";
```

## Usage

While a tool part is `approval-requested`, answer it with the approval's id. With the AI SDK, pass `sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithApprovalResponses` to `useChat` so that the chat continues once every approval has an answer.

```tsx
<Confirmation approval={part.approval} state={part.state} icon={<Console />}>
  <Confirmation.Title description="The command runs in this project.">
    <Confirmation.Request>Run {part.input.command}?</Confirmation.Request>
    <Confirmation.Accepted>You approved {part.input.command}</Confirmation.Accepted>
    <Confirmation.Rejected>You denied {part.input.command}</Confirmation.Rejected>
  </Confirmation.Title>
  <Confirmation.Actions>
    <Confirmation.Action
      variant="outlined"
      onPress={() =>
        addToolApprovalResponse({ id: part.approval.id, approved: false })
      }>
      Deny
    </Confirmation.Action>
    <Confirmation.Action
      variant="primary"
      onPress={() =>
        addToolApprovalResponse({ id: part.approval.id, approved: true })
      }>
      Approve
    </Confirmation.Action>
  </Confirmation.Actions>
</Confirmation>
```

To turn the answered call into a line, render the `Confirmation` only while the part is `approval-requested` and a [Tool](./tool.md) otherwise. `Tool.Header` reads "Running …" once it is approved and "Denied …" once it is denied. The [Tool](./tool.md) `Approval` story shows this.

## Anatomy

```tsx
<Confirmation>
  <Confirmation.Title>
    <Confirmation.Request />
    <Confirmation.Accepted />
    <Confirmation.Rejected />
  </Confirmation.Title>
  <Confirmation.Actions>
    <Confirmation.Action />
  </Confirmation.Actions>
</Confirmation>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Confirmation` | A `tertiary` [`Container`](./container.md) row with `role="group"`, and the `icon` before its children | Holds the approval and state. Renders nothing without an `approval` or while the input streams in. |
| `Confirmation.Title` | A medium-weight `BodyText` with an optional subtle description under it | The question, which names the group. It takes the free space and the actions wrap under it when the row is narrow. |
| `Confirmation.Request` | Its children while the state is `approval-requested` | The question. |
| `Confirmation.Accepted` | Its children once the approval is answered with `approved: true` | What the person decided. |
| `Confirmation.Rejected` | Its children once the approval is answered with `approved: false` | What the person decided. |
| `Confirmation.Actions` | A row at the end of the confirmation while the state is `approval-requested` | Holds the buttons. |
| `Confirmation.Action` | A small [`Button`](./button.md) that keeps its width; a string child becomes `Button.Text` | Deny or Approve. |

## Examples

The examples are the stories in [`Confirmation.stories.tsx`](../../../components/confirmation/src/Confirmation.stories.tsx). Each asks to run `rm -rf dist`.

| Stories | What they show |
| --- | --- |
| `Request` | A pending approval. The play function checks that the question names the group and that Deny and Approve call their handlers. |
| `Accepted`, `Rejected` | An answered approval: the title reads "You approved …" or "You denied …" and the buttons are gone. |
| `Answer` | The play function tabs to Deny, then to Approve, and presses Enter. The confirmation turns into "You approved rm -rf dist". |
| `Hidden while the input streams` | Renders nothing while the state is `input-streaming`. |

The [Tool](./tool.md) `Approval` and `ApprovalDenied` stories show the whole flow, from the confirmation to the tool line.

## Props

### Confirmation

`Confirmation` accepts the [`Container`](./container.md) props and adds these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `approval` | `ToolApproval` | None | The tool part's `approval`: `{ id, approved?, reason? }`. Without it, nothing renders. |
| `state` | `ToolState` | Required | The tool part's `state`. Nothing renders while it is `input-streaming` or `input-available`. |
| `icon` | `ReactNode` | None | An icon before the question that names the tool, such as `<Console />`. It is 16 px and `ink`. |

### Confirmation.Title

`Confirmation.Title` accepts the [`BodyText`](./body-text.md) props and adds:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `description` | `ReactNode` | None | Secondary text under the question, such as where the command runs. |

### Confirmation.Request, Confirmation.Accepted and Confirmation.Rejected

Each takes only `children`.

### Confirmation.Actions and Confirmation.Action

`Confirmation.Actions` accepts the `View` props. `Confirmation.Action` accepts the [`Button`](./button.md) props, with `size="sm"`. Pass `variant="outlined"` for Deny and `variant="primary"` for Approve.

### useConfirmation

`useConfirmation()` returns `{ approval, state, titleId }` for the nearest `Confirmation`. It throws outside one.

The exported types are `ConfirmationProps`, `ConfirmationTitleProps`, `ConfirmationRequestProps`, `ConfirmationAcceptedProps`, `ConfirmationRejectedProps`, `ConfirmationActionsProps`, `ConfirmationActionProps`, `ConfirmationContextValue`, `ToolState`, and `ToolApproval`. For React Server Components, the parts are also exported as `ConfirmationTitle`, `ConfirmationRequest`, `ConfirmationAccepted`, `ConfirmationRejected`, `ConfirmationActions`, and `ConfirmationAction`.

## Behavior

- `ToolState` is `"input-streaming" | "input-available" | "approval-requested" | "approval-responded" | "output-available" | "output-error" | "output-denied"`.
- While the state is `approval-requested`, `Confirmation.Request` and `Confirmation.Actions` show.
- In any later state, `Confirmation.Accepted` shows when `approval.approved` is `true` and `Confirmation.Rejected` when it is `false`. The actions hide.
- `Confirmation.Title` and the actions wrap onto two rows when the question needs more room.

## Variants and states

- **Surface:** a `tertiary` [Container](./container.md), with the `surface` fill and a `hairline` border. It takes the other [Container](./container.md) props, such as `variant`.
- **States:** pending (with buttons), approved, and denied.

## Accessibility

- The confirmation is a `group` named by its title, so screen readers announce the question with the Deny and Approve buttons.
- The icon is hidden from assistive tech. Write the question so that it names the tool and what it does ("Run rm -rf dist?").
- The buttons are in the Tab order, Deny first.

## Related

- [Tool](./tool.md)
- [Trace](./trace.md)
- [Button](./button.md)
- [Container](./container.md)

## Source

- [`components/confirmation/src/Confirmation.tsx`](../../../components/confirmation/src/Confirmation.tsx)
- [`components/confirmation/src/Confirmation.stories.tsx`](../../../components/confirmation/src/Confirmation.stories.tsx)
