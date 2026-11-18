// Imported first: it creates the Tamagui config, which some components read
// while their modules load.
import { config } from "@cyclone-ui/tokens/tamagui";
import { TamaguiProvider } from "@tamagui/core";
import type { ReactNode } from "react";
import { renderToString } from "react-dom/server";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { Checkbox } from "../../../../components/checkbox/src";
import { Field } from "../../../../components/field/src";
import { Form } from "../../../../components/form/src";
import { Input } from "../../../../components/input/src";
import { RadioGroup } from "../../../../components/radio-group/src";
import { Select } from "../../../../components/select/src";
import { Switch } from "../../../../components/switch/src";
import { TextArea } from "../../../../components/text-area/src";

const render = (children: ReactNode) =>
  renderToString(
    <TamaguiProvider config={config} defaultTheme="light">
      {children}
    </TamaguiProvider>
  );

const items = [
  { name: "Alpha", value: "a" },
  { name: "Beta", value: "b" }
];

const controls: Record<string, ReactNode> = {
  Input: (
    <Input>
      <Input.TextBox>
        <Input.TextBox.Value />
      </Input.TextBox>
    </Input>
  ),
  TextArea: <TextArea />,
  Checkbox: <Checkbox />,
  Switch: <Switch />,
  // Without children, these render the field's items.
  Select: <Select />,
  RadioGroup: <RadioGroup />
};

const inField = (
  control: ReactNode,
  form: Partial<Parameters<typeof Form>[0]> = {}
) => (
  <Form name="signup" initialValues={{ choice: "" }} {...form}>
    <Field name="choice" required items={items}>
      <Field.Label>Choice</Field.Label>
      {control}
    </Field>
    <Form.Submit>Send</Form.Submit>
  </Form>
);

/** The form elements named `choice`, which a native submit would send. */
const namedElements = (html: string) =>
  html.match(/<(input|select|textarea)\b[^>]*\bname="choice"[^>]*>/g) ?? [];

// Tamagui keys objects it has seen before without calling `Math.random()`
// again, so render once first, as an app has by the time it prerenders.
beforeAll(() => {
  for (const control of Object.values(controls)) {
    render(inField(control));
  }
});

afterEach(() => vi.restoreAllMocks());

// Popover/roving-focus based controls stream behind their own boundary; the
// rest render completely into the prerendered shell.
const streamed = new Set(["Select", "RadioGroup"]);

describe.each(Object.entries(controls))("%s in a Field", (name, control) => {
  it("renders a named element the form submits", () => {
    expect(namedElements(render(inField(control)))).not.toHaveLength(0);
  });

  it("keeps prerender randomness inside its own Suspense boundary", () => {
    // Next.js interrupts a Cache Components prerender when a Client
    // Component reads randomness; a boundary must contain it.
    vi.spyOn(Math, "random").mockImplementation(() => {
      throw new Error("Prerender cannot read Math.random()");
    });

    const html = render(inField(control));

    expect(html).toContain("Choice</label>");
    expect(html).toMatch(/<button[^>]*type="submit"/);
    // A failed boundary renders its fallback, which is still a working form
    // control.
    expect(html.includes("<!--$!-->")).toBe(streamed.has(name));
    expect(namedElements(html)).not.toHaveLength(0);
  });
});

describe("prerendered fallbacks", () => {
  const throwOnRandom = () =>
    vi.spyOn(Math, "random").mockImplementation(() => {
      throw new Error("Prerender cannot read Math.random()");
    });

  it("renders a native select with the field's items", () => {
    throwOnRandom();
    const html = render(
      inField(controls.Select, { initialValues: { choice: "b" } })
    );

    expect(html).toMatch(/<select[^>]*id="choice"/);
    expect(html).toMatch(/<select[^>]*required/);
    expect(html).toMatch(/<option value="a"[^>]*>Alpha<\/option>/);
    expect(html).toMatch(/<option value="b"[^>]*selected[^>]*>Beta<\/option>/);
  });

  it("renders native radios with the field's items", () => {
    throwOnRandom();
    const html = render(
      inField(controls.RadioGroup, { initialValues: { choice: "b" } })
    );
    const radios = html.match(/<input[^>]*type="radio"[^>]*>/g) ?? [];

    expect(radios).toHaveLength(2);
    expect(radios.every(radio => /name="choice"/.test(radio))).toBe(true);
    expect(radios.find(radio => /value="b"/.test(radio))).toMatch(/checked/);
  });
});

describe("native validation and accessibility", () => {
  it("puts required and the field's constraints on the input", () => {
    const html = render(
      <Form name="signup" initialValues={{ code: "" }}>
        <Field
          name="code"
          required
          minLength={4}
          maxLength={8}
          pattern="[a-z]+">
          <Field.Label>Code</Field.Label>
          {controls.Input}
        </Field>
      </Form>
    );
    const input = html.match(/<input[^>]*id="code"[^>]*>/)?.[0];

    expect(input).toMatch(/name="code"/);
    expect(input).toMatch(/required/);
    expect(input).toMatch(/minLength="4"/);
    expect(input).toMatch(/maxLength="8"/);
    expect(input).toMatch(/pattern="\[a-z\]\+"/);
    expect(input).not.toMatch(/aria-invalid/);
  });

  it("shows a server action's errors in the server HTML", () => {
    const html = render(
      <Form
        name="signup"
        initialValues={{ email: "taken@example.com" }}
        errors={{ email: "This email is already registered" }}>
        <Field name="email">
          <Field.Label>Email</Field.Label>
          {controls.Input}
        </Field>
        <Form.Submit>Send</Form.Submit>
      </Form>
    );
    const input = html.match(/<input[^>]*id="email"[^>]*>/)?.[0];

    expect(html).toContain("This email is already registered");
    expect(html).toMatch(/id="email-messages"/);
    expect(input).toMatch(/aria-invalid="true"/);
    expect(input).toMatch(/aria-describedby="email-messages"/);
    // A server's errors don't block resubmitting the fixed form.
    expect(html.match(/<button[^>]*type="submit"[^>]*>/)?.[0]).not.toMatch(
      /disabled/
    );
  });
});
