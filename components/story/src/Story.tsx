/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

"use client";

import { BodyText } from "@cyclone-ui/body-text";
import { Button } from "@cyclone-ui/button";
import type { FieldProps } from "@cyclone-ui/field";
import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import { HeadingSmallText } from "@cyclone-ui/heading-text";
import { ErrorCircle } from "@cyclone-ui/icons/vectors";
import { Input } from "@cyclone-ui/input";
import { NumberInput } from "@cyclone-ui/number-input";
import { Select } from "@cyclone-ui/select";
import { Skeleton } from "@cyclone-ui/skeleton";
import { Switch } from "@cyclone-ui/switch";
import { ThemeSelect } from "@cyclone-ui/theme-select";
import type { ViewProps } from "@tamagui/core";
import { styled, Theme, View } from "@tamagui/core";
import { XStack, YStack } from "@tamagui/stacks";
import type { ComponentType, ReactNode } from "react";
import { Component, Suspense, useId, useState } from "react";

/** The value types a select control can choose between. */
export type StoryOptionValue = string | number | boolean;

interface StoryControlBase {
  /** The field label. Defaults to the prop name. */
  label?: string;
  /** Documentation for the prop, shown under its control. */
  description?: string;
}

/**
 * How a prop is edited in the controls panel.
 *
 * - `text`: a text input.
 * - `number`: a number input with increase and decrease buttons.
 * - `boolean`: a switch.
 * - `select`: a select of `options`.
 */
export type StoryControl =
  | (StoryControlBase & { type: "text" | "number" | "boolean" })
  | (StoryControlBase & {
      type: "select";
      options: readonly StoryOptionValue[];
    });

/** The control of each prop, or `false` to hide a prop's inferred control. */
export type StoryControls<TProps> = {
  [K in keyof TProps]?: StoryControl | false;
};

/** A preset of the story: its own args and fixed props. */
export interface StoryVariant<TProps> {
  /** The name in the variant select. Unique among the story's variants. */
  name: string;
  /** Documentation for the variant, shown under the story description. */
  description?: string;
  /** The initial props of the variant, over the story's `args`. */
  args?: Partial<TProps>;
  /** Props that can't be changed in the variant, over the story's `fixed`. */
  fixed?: Partial<TProps>;
}

// Tamagui's own `render` (the element to render as) gives way to the story's.
export type StoryProps<TProps extends object> = Omit<
  ViewProps,
  "children" | "render"
> & {
  /** The component to display. Its props are the story args. */
  component?: ComponentType<TProps>;
  /**
   * Renders the display from the args, in place of `component`. Use it for
   * compound components, whose parts are composed as children.
   */
  render?: (args: TProps) => ReactNode;
  /** The story heading. */
  title?: string;
  /** Documentation for the component, shown under the title. */
  description?: ReactNode;
  /** The initial props. String, number and boolean props get a control. */
  args?: Partial<TProps>;
  /** Props that can't be changed: they get no control. */
  fixed?: Partial<TProps>;
  /**
   * The controls of the props, over the ones inferred from `args`. A prop
   * listed here gets a control even without an initial value.
   */
  controls?: StoryControls<TProps>;
  /** Presets of args, chosen with a select over the display. */
  variants?: readonly StoryVariant<TProps>[];
  /**
   * Shows the skeleton in place of the display. It also shows while the
   * display suspends, such as a `lazy` component loading.
   */
  loading?: boolean;
  /**
   * The placeholder shown while the display loads, shaped like the
   * component. Defaults to a rounded block.
   */
  skeleton?: ReactNode;
  /**
   * Shows a theme select over the display, which renders the preview in the
   * selected color theme (`base` at first).
   */
  themeSelect?: boolean;
};

type Args = Record<string, unknown>;

type FieldChangeContext = Parameters<NonNullable<FieldProps["onChange"]>>[0];

// The control of an arg without a declared one, by the `typeof` its value.
const inferredControls: Partial<Record<string, StoryControl>> = {
  boolean: { type: "boolean" },
  number: { type: "number" },
  string: { type: "text" }
};

/**
 * The controls of a variant, in the order of the args and then of the
 * declared controls, without fixed props or hidden ones.
 */
const getStoryControls = (
  args: Args,
  fixed: Args,
  controls: Record<string, StoryControl | false | undefined> = {}
): [name: string, control: StoryControl][] => {
  const result: [string, StoryControl][] = [];
  for (const name of new Set([
    ...Object.keys(args),
    ...Object.keys(controls)
  ])) {
    if (name in fixed) continue;

    // `false` hides a prop that would get an inferred control.
    const control = controls[name] ?? inferredControls[typeof args[name]];
    if (control) result.push([name, control]);
  }

  return result;
};

// Inputs hold strings: numbers are edited as text and parsed back.
const toFieldValue = (control: StoryControl, value: unknown) =>
  control.type === "number" || control.type === "text"
    ? String(value ?? "")
    : value;

const fromFieldValue = (control: StoryControl, value: unknown) => {
  if (control.type === "number") {
    if (value === "" || value === undefined || value === null) return undefined;
    const number = Number(value);

    return Number.isNaN(number) ? undefined : number;
  }

  return value;
};

const StoryFrame = styled(YStack, {
  name: "Story",
  width: "100%",
  borderWidth: 1,
  borderColor: "hairline",
  borderRadius: "card",
  overflow: "hidden",
  backgroundColor: "surface"
});

const StoryHeader = styled(XStack, {
  name: "StoryHeader",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "3xl",
  paddingHorizontal: "3xl",
  paddingVertical: "2xl",
  borderBottomWidth: 1,
  borderColor: "hairline"
});

const StoryPreview = styled(View, {
  name: "StoryPreview",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 160,
  padding: "3xl",
  backgroundColor: "canvas"
});

// Sizes the display to its content: a child that grows (such as a Button,
// with `flexGrow: 1`) would otherwise fill the preview.
const StoryCanvas = styled(View, {
  name: "StoryCanvas",
  maxWidth: "100%"
});

const StoryControlsPanel = styled(YStack, {
  name: "StoryControls",
  gap: "2xl",
  paddingHorizontal: "3xl",
  paddingVertical: "2xl",
  borderTopWidth: 1,
  borderColor: "hairline"
});

const defaultSkeleton = <Skeleton width={240} height={40} borderRadius="md" />;

interface StoryErrorBoundaryProps {
  /** Clears a caught error when it changes, so new args can render. */
  resetKey: unknown;
  children: ReactNode;
}

interface StoryErrorBoundaryState {
  error: unknown;
  resetKey: unknown;
}

class StoryErrorBoundary extends Component<
  StoryErrorBoundaryProps,
  StoryErrorBoundaryState
> {
  override state: StoryErrorBoundaryState = {
    error: undefined,
    resetKey: this.props.resetKey
  };

  static getDerivedStateFromError(error: unknown) {
    return { error };
  }

  static getDerivedStateFromProps(
    { resetKey }: StoryErrorBoundaryProps,
    state: StoryErrorBoundaryState
  ): Partial<StoryErrorBoundaryState> | null {
    return resetKey === state.resetKey ? null : { error: undefined, resetKey };
  }

  override render() {
    if (this.state.error === undefined) return this.props.children;

    const { error } = this.state;

    return (
      <XStack role="alert" theme="danger" gap="4xl" alignItems="flex-start">
        <ErrorCircle size="10xl" color="primary" aria-hidden={true} />
        <YStack gap="2xl" flexShrink={1}>
          <BodyText fontWeight="medium" color="primary">
            The component failed to render
          </BodyText>
          <BodyText size="sm" color="subtle" fontFamily="code" fontWeight="normal">
            {error instanceof Error ? error.message : String(error)}
          </BodyText>
        </YStack>
      </XStack>
    );
  }
}

const StoryControlField = ({
  name,
  control
}: {
  name: string;
  control: StoryControl;
}) => {
  const label = (
    <Field.Label variant="above">{control.label ?? name}</Field.Label>
  );
  const details = control.description ? (
    <Field.Details>{control.description}</Field.Details>
  ) : null;

  switch (control.type) {
    case "boolean":
      return (
        <>
          <XStack gap="xl" alignItems="center">
            <Switch size="sm" />
            <Field.Label paddingBottom={0}>{control.label ?? name}</Field.Label>
          </XStack>
          {details}
        </>
      );
    case "number":
      return (
        <>
          {label}
          <NumberInput size="sm">
            <NumberInput.TextBox>
              <NumberInput.TextBox.Value placeholder="Not set" />
            </NumberInput.TextBox>
          </NumberInput>
          {details}
        </>
      );
    case "select":
      return (
        <>
          {label}
          <Select size="sm" searchable={false} />
          {details}
        </>
      );
    case "text":
      return (
        <>
          {label}
          <Input size="sm">
            <Input.TextBox>
              <Input.TextBox.Value placeholder="Not set" />
            </Input.TextBox>
          </Input>
          {details}
        </>
      );
  }
};

/**
 * Displays a component with documentation and controls that update its
 * props. Each string, number and boolean arg gets a control, `controls`
 * declares or overrides them, and `variants` are presets of args.
 */
export function Story<TProps extends object>({
  component: StoryComponent,
  render,
  title,
  description,
  args,
  fixed,
  controls,
  variants,
  loading = false,
  skeleton = defaultSkeleton,
  themeSelect = false,
  ...props
}: StoryProps<TProps>) {
  const id = useId();

  // A snapshot of the selected variant, taken when it is selected or reset.
  // ponytail: later changes to `args`, `fixed` or `controls` show after a
  // Reset; inline objects get a new identity on every render.
  const resolve = (name: string | undefined, revision: number) => {
    const variant = variants?.find(item => item.name === name);
    const initial = { ...args, ...variant?.args } as Args;
    const locked = { ...fixed, ...variant?.fixed } as Args;

    return {
      name,
      variant,
      initial,
      locked,
      entries: getStoryControls(initial, locked, controls),
      // Bumped on each reset, it remounts the controls form.
      revision
    };
  };
  const [snapshot, setSnapshot] = useState(() =>
    resolve(variants?.[0]?.name, 0)
  );
  const { variant, initial, locked, entries, revision } = snapshot;
  const [values, setValues] = useState<Args>({});
  const current = { ...initial, ...values, ...locked } as TProps;
  const hasVariants = (variants?.length ?? 0) > 1;
  const [previewTheme, setPreviewTheme] = useState("base");

  const reset = (name = snapshot.name) => {
    setSnapshot(resolve(name, revision + 1));
    setValues({});
  };

  // A field's `onChange` also runs when its props change, as on every render
  // of the story: these handlers must do nothing for an unchanged value, or
  // each run renders again and the controls form remounts in a loop.
  const selectVariant = (name: string) => {
    if (name !== snapshot.name) reset(name);
  };
  const setValue = (name: string, value: unknown) =>
    setValues(state =>
      name in state && Object.is(state[name], value)
        ? state
        : { ...state, [name]: value }
    );

  return (
    <StoryFrame {...props}>
      {title || description || hasVariants || themeSelect ? (
        <StoryHeader>
          <YStack gap="sm" flex={1} minWidth={0}>
            {title && <HeadingSmallText>{title}</HeadingSmallText>}
            {typeof description === "string" ? (
              <BodyText size="sm" color="subtle">
                {description}
              </BodyText>
            ) : (
              description
            )}
            {variant?.description && (
              <BodyText size="sm" color="subtle">
                {variant.description}
              </BodyText>
            )}
          </YStack>
          {themeSelect && (
            <View width="20xl" flexShrink={0}>
              <Form name={`${id}-theme`} initialValues={{ theme: previewTheme }}>
                <Field
                  name="theme"
                  size="sm"
                  // Idempotent: React skips a state update to the same value.
                  onChange={({ get, atoms }: FieldChangeContext) => {
                    const value = get(atoms.value);
                    if (value) setPreviewTheme(String(value));
                  }}>
                  <Field.Label variant="above">Theme</Field.Label>
                  <ThemeSelect size="sm" searchable={false} />
                </Field>
              </Form>
            </View>
          )}
          {variants && hasVariants && (
            <View width="20xl" flexShrink={0}>
              <Form
                name={`${id}-variant`}
                initialValues={{ variant: snapshot.name }}>
                <Field
                  name="variant"
                  size="sm"
                  items={variants.map((item, index) => ({
                    index,
                    name: item.name,
                    value: item.name
                  }))}
                  onChange={({ get, atoms }: FieldChangeContext) =>
                    selectVariant(get(atoms.value) as string)
                  }>
                  <Field.Label variant="above">Variant</Field.Label>
                  <Select size="sm" searchable={false} />
                </Field>
              </Form>
            </View>
          )}
        </StoryHeader>
      ) : null}

      {/* The theme applies to the whole preview, its canvas included. */}
      <Theme name={themeSelect ? previewTheme : null}>
        <StoryPreview>
          <StoryErrorBoundary resetKey={current}>
            <StoryCanvas aria-busy={loading || undefined}>
              {loading ? (
                skeleton
              ) : (
                <Suspense fallback={skeleton}>
                  {render
                    ? render(current)
                    : StoryComponent && <StoryComponent {...current} />}
                </Suspense>
              )}
            </StoryCanvas>
          </StoryErrorBoundary>
        </StoryPreview>
      </Theme>

      {entries.length > 0 && (
        <StoryControlsPanel>
          <XStack alignItems="center" justifyContent="space-between">
            <BodyText size="sm" fontWeight="600">
              Props
            </BodyText>
            <Button
              size="sm"
              variant="ghost"
              flexGrow={0}
              onPress={() => reset()}>
              <Button.Text>Reset</Button.Text>
            </Button>
          </XStack>
          <Form
            key={revision}
            name={`${id}-controls-${revision}`}
            initialValues={Object.fromEntries(
              entries.map(([name, control]) => [
                name,
                toFieldValue(control, initial[name])
              ])
            )}>
            <YStack gap="2xl">
              {entries.map(([name, control]) => (
                <Field
                  key={name}
                  name={name}
                  size="sm"
                  debounceMs={100}
                  items={
                    control.type === "select"
                      ? control.options.map((value, index) => ({
                          index,
                          name: String(value),
                          value
                        }))
                      : undefined
                  }
                  onChange={({ get, atoms }: FieldChangeContext) =>
                    setValue(name, fromFieldValue(control, get(atoms.value)))
                  }>
                  <StoryControlField name={name} control={control} />
                </Field>
              ))}
            </YStack>
          </Form>
        </StoryControlsPanel>
      )}
    </StoryFrame>
  );
}
