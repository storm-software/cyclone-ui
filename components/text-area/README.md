# Text Area

A `TextArea` component that renders a multiline text input. It uses the same tokens and state behavior as the Cyclone UI `Input`.

## Quick Features

- Renders a `textarea` with 3 rows by default
- `outlined`, `underlined`, and `inlined` variants, and `sm`, `md`, and `lg` sizes
- Focus and disabled states, and a border that reflects field validation messages
- Inside a `Field`, it takes its name, value, size, disabled state, and focus state from the field, and floats the field label by default

## Installing

Copy the component into your project with the [Cyclone UI CLI](../../docs/packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add text-area
pnpm install
```

The [component reference](../../docs/design-system/components/text-area.md) lists the files that the CLI copies and the components it copies with them.

The `@cyclone-ui/text-area` package is not published to npm yet. After it is published, you can also install it with a package manager:

Using [pnpm](http://pnpm.io):

```bash
pnpm add -D @cyclone-ui/text-area
```

<details>
  <summary>Using npm</summary>

```bash
npm install -D @cyclone-ui/text-area
```

</details>

<details>
  <summary>Using yarn</summary>

```bash
yarn add -D @cyclone-ui/text-area
```

</details>

## Usage

```tsx
import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import { TextArea } from "@cyclone-ui/text-area";

<Form name="contact" initialValues={{ message: "" }}>
  <Field name="message">
    <Field.Label>Message</Field.Label>
    <TextArea placeholder="Enter a message" rows={3} />
  </Field>
</Form>;
```

See the [Text area documentation](../../docs/design-system/components/text-area.md) for all props.

## Development

This project is built using [Nx](https://nx.dev). As a result, many of the usual commands are available to assist in development.

### Building

Run `nx build text-area` to build the library.

### Running unit tests

Run `nx test text-area` to execute the unit tests via [Vitest](https://vitest.dev).

### Linting

Run `nx lint text-area` to run [ESLint](https://eslint.org/) on the package.
