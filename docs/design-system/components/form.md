---
title: Form
description: A form root that renders a native form element, provides Cyclone UI form state, and has Submit and Reset buttons.
documentType: reference
tags: [component, form, input, state]
component:
  name: form
  package: "@cyclone-ui/form"
  stories:
    - title: Form/Form
      file: components/form/src/Form.stories.tsx
---

# Form

`Form` is the root of a form. It renders a native `form` element and starts the Cyclone UI form state. Fields inside it read and write the form values. Use it to wrap [Field](./field.md) components.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add form
pnpm install
```

- **File:** `Form.tsx`. The CLI writes it to `<path>/form/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/core` and `@tamagui/helpers`.

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

## Anatomy

```tsx
<Form name="profile">
  {/* Field components */}
  <Form.Submit />
  <Form.Reset />
</Form>
```

| Part          | Renders                                                                                       | Purpose                                                                                                                                                            |
| ------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Form`        | A `FormProvider` (the form state, scoped by `name`) around a Tamagui `View` as `<form>`. The element `id` is `name`. | The root. It holds the form state, validates on submit, and handles the native submit and reset events.                                                            |
| `Form.Submit` | A Tamagui `View` as `<button type="submit">`                                                  | Submits the form. On the web, the native button submits the `<form>`. On native, which has no form element, it calls `submit` after `onPress`.                     |
| `Form.Reset`  | A Tamagui `View` as `<button type="reset">`                                                   | Resets the form. On the web, the native button resets the `<form>`. On native, it calls `reset` after `onPress`.                                                  |

`FormSubmit` and `FormReset` are also exported by name.

## Examples

The examples are the stories in [`Form.stories.tsx`](../../../components/form/src/Form.stories.tsx). Each story renders a `Form` with no fields and no `name`, so it shows an empty frame.

| Stories                                                     | What they show                                                                                         |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `Base`                                                      | A `Form` with no args.                                                                                 |
| `Brand`, `Discovery`, `Error`, `Warning`, `Info`, `Success` | `theme` set to `brand`, `discovery`, `danger`, `warning`, `info`, and `success`.                       |
| `Small`, `Large`                                            | A `size` story arg of `small` and `large`. `Form` has no `size` prop, so the arg has no effect.        |

## Props

### `Form`

`Form` accepts the form options of `@cyclone-ui/state/form` and the view props of the frame.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | Required | The form name. It is the form scope and the element `id`. |
| `initialValues` | Object | None | The initial field values. |
| `disabled` | `boolean` | `false` | Disables the form. |
| `theme` | `string` | `"base"` | The theme in the form state. `Form` does not apply it to its frame. |
| `validate` | Object | None | Validators for the `on...` validation causes. |
| `debounceMs` | `number` | `100` | The debounce time in milliseconds for `onChange` and validation calls. |
| `isEqual` | `(a, b) => boolean` | Default compare function | Compares two sets of values. |
| `defaultFieldOptions` | Object | None | Default options for all fields. |
| `onInitialize` | Callback | None | Called when the form starts. |
| `onChange` | Callback | None | Called when the form changes. |
| `onSubmit` | Callback | None | Called after a submit passes validation. |
| `errors` | `FormErrors` (`Record<string, string \| readonly string[] \| null \| undefined>`) | None | Error messages for fields, keyed by field name, such as a server action's result. |

`Form` also passes these native form attributes to the element: `acceptCharset`, `action`, `autoComplete`, `encType`, `method`, `noValidate`, and `target`. `Form` sends its other props to the form state, not to its frame, so it does not apply style props. Put layout styles on an inner `View`.

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

`Form` has no visual variants, and its frame has no styles. While the form is disabled or submitting, `Form.Submit` and `Form.Reset` are disabled. `disabled` also goes to the frame.

## Related

- [Field](./field.md)
- [Submit Button](./submit-button.md)
- [Input](./input.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/form/src/Form.tsx`](../../../components/form/src/Form.tsx)
- [`components/form/src/Form.stories.tsx`](../../../components/form/src/Form.stories.tsx) (title: `Form/Form`)
- [`packages/state/src/form/types.ts`](../../../packages/state/src/form/types.ts)
