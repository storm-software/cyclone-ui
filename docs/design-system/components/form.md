---
title: Form
description: A form root that renders a native form element, provides Cyclone UI form state, and has Submit and Reset buttons.
documentType: reference
tags: [component, form, input, state]
---

# Form

`Form` is the root of a form. It renders a native `form` element and starts the Cyclone UI form state. Fields inside it read and write the form values. Use it to wrap [Field](./field.md) components.

## Import

```tsx
import { Form, FormReset, FormSubmit } from "@cyclone-ui/form";
```

## Usage

```tsx
<Form
  name="profile"
  initialValues={{ email: "" }}
  onSubmit={({ get, atoms }) => save(get(atoms.values))}>
  <Field name="email" required>
    <Field.Label>Email</Field.Label>
    <Input>
      <Input.TextBox>
        <Input.TextBox.Value />
      </Input.TextBox>
    </Input>
  </Field>

  <Form.Submit asChild>
    <Button>
      <Button.Text>Save</Button.Text>
    </Button>
  </Form.Submit>
  <Form.Reset asChild>
    <Button variant="outlined">
      <Button.Text>Reset</Button.Text>
    </Button>
  </Form.Reset>
</Form>
```

## Props

### `Form`

`Form` accepts the form options of `@cyclone-ui/state/form` and the view props of the frame.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | Required | The form name. It is the form scope and the element `id`. |
| `initialValues` | Object | None | The initial field values. |
| `disabled` | `boolean` | `false` | Disables the form. |
| `theme` | `string` | None | The form theme. |
| `validate` | Object | None | Validators for the `on...` validation causes. |
| `debounceMs` | `number` | `250` | The debounce time for `onChange` and validation calls. |
| `isEqual` | `(a, b) => boolean` | Default compare function | Compares two sets of values. |
| `defaultFieldOptions` | Object | None | Default options for all fields. |
| `onInitialize` | Callback | None | Called when the form starts. |
| `onChange` | Callback | None | Called when the form changes. |
| `onSubmit` | Callback | None | Called after a submit passes validation. |
| `errors` | `Record<string, string \| string[]>` | None | Error messages for fields, keyed by field name, such as a server action's result. |

`Form` also passes these native form attributes to the element: `acceptCharset`, `action`, `autoComplete`, `encType`, `method`, `noValidate`, and `target`. The source states that `Form` does not forward style props to its frame. Put layout styles on an inner `View`.

### Submitting

Submitting runs every field's validators, including fields the user never focused, and the form's `onSubmit` validators. Every field then shows its errors. If any field is invalid, the submit stops and the first invalid control receives focus. Otherwise `onSubmit` runs.

With an `action`, a valid submit continues to it. A function, such as a Server Function from `useActionState`, runs through React. A URL is posted by the browser. Without an `action`, the form never navigates.

`errors` show on the first render, including the server's. They count as a submit attempt, so every field shows its errors. They don't disable submitting, and each clears from its field once the user edits it.

### Without JavaScript

Every control renders a named native element, and fields put `required` and their constraint props on it. Before the page hydrates, the browser validates and posts the form to its `action`. After hydration, `Form` sets `noValidate` unless you pass it, and the fields show the same checks in their own messages.

### `Form.Submit` and `Form.Reset`

Both accept view props, such as `asChild`. They render a `button` element with `type="submit"` or `type="reset"`.

| Part | Press action |
| --- | --- |
| `Form.Submit` | Runs your `onPress`, then submits the form. |
| `Form.Reset` | Runs your `onPress`, then resets the form to its `initialValues`. |

React calls `form.reset()` after a function `action` finishes. `Form` skips that reset, so the fields keep their values, as React's controlled inputs do. To clear the form after a successful action, call `reset` from `useFormActions` or remount the form with a new `key`.

Both buttons are disabled while the form is disabled or submitting. An invalid form stays submittable, because submitting is what shows its errors.

## Variants and states

The stories show the default form and `theme` values `brand`, `discovery`, `danger`, `warning`, `info`, and `success`. The stories also pass `size` values `small` and `large` as story arguments.

## Related

- [Field](./field.md)
- [Input](./input.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/form/src/Form.tsx`](../../../components/form/src/Form.tsx)
- [`components/form/src/Form.stories.tsx`](../../../components/form/src/Form.stories.tsx)
- [`packages/state/src/form/types.ts`](../../../packages/state/src/form/types.ts)
