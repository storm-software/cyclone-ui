---
title: Onboarding
description: A step-by-step block that walks new users through an application, with a step indicator, a feature carousel, numbered tips, and Back and Next buttons.
documentType: reference
tags: [component, onboarding, wizard, steps, block]
component:
  name: onboarding
  package: "@cyclone-ui/onboarding"
  stories:
    - title: Blocks/Onboarding
      file: components/onboarding/src/Onboarding.stories.tsx
---

# Onboarding

`Onboarding` walks new users through an application in a few steps: a welcome tour of its features, a question or two to personalize it, and some tips to get started. It keeps track of the current step, shows each step's content in turn, and ends with a call to action. You can use it on a page or inside a [Dialog](./dialog.md).

The package also exports `FeatureCarousel`, a list of features that shows one at a time, and `TipsList`, a numbered list of tips. To ask a question, use a [Radio Group](./radio-group.md) in a step.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add onboarding
pnpm install
```

- **File:** `Onboarding.tsx`. The CLI writes it to `<path>/onboarding/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Eyebrow Text](./eyebrow-text.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Next Button](./next-button.md), [Previous Button](./previous-button.md), [Ripple Animation](./ripple-animation.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core` and `@tamagui/use-controllable-state`.

## Import

```tsx
import {
  FeatureCarousel,
  Onboarding,
  TipsList,
  useOnboarding
} from "@cyclone-ui/onboarding";
```

## Usage

```tsx
const [role, setRole] = useState<string>();

<Onboarding
  totalSteps={3}
  // Step 1 has three sub-steps: Next pages through the features first.
  subSteps={{ 1: 3 }}
  // Step 2 waits for an answer.
  canGoNext={step => step !== 2 || role !== undefined}
  onComplete={() => router.push("/dashboard")}>
  <Onboarding.Header
    title="Welcome to Acme"
    description="Everything you need to get started."
  />
  <Onboarding.StepIndicator />

  <Onboarding.Step step={1}>
    <FeatureCarousel>
      <FeatureCarousel.Item index={0} icon={<Code />} description="…">
        Write code
      </FeatureCarousel.Item>
      <FeatureCarousel.Item index={1} icon={<Palette />} description="…">
        Pick a theme
      </FeatureCarousel.Item>
      <FeatureCarousel.Item index={2} icon={<Rocket />} description="…">
        Ship it
      </FeatureCarousel.Item>
    </FeatureCarousel>
  </Onboarding.Step>

  <Onboarding.Step step={2}>
    <RadioGroup aria-label="What best describes you?" onValueChange={setRole}>
      <RadioGroup.Item value="designer">Designer</RadioGroup.Item>
      <RadioGroup.Item value="developer">Developer</RadioGroup.Item>
    </RadioGroup>
  </Onboarding.Step>

  <Onboarding.Step step={3}>
    <TipsList title="Tips">
      <TipsList.Item number={1}>
        Browse the components by category.
      </TipsList.Item>
      <TipsList.Item number={2}>Copy one with the CLI.</TipsList.Item>
    </TipsList>
  </Onboarding.Step>

  <Onboarding.Navigation completeLabel="Go to the dashboard" />
</Onboarding>;
```

To change the header with the step, read the step with `useOnboarding()` in a component inside `Onboarding`:

```tsx
const StepHeader = () => {
  const { currentStep } = useOnboarding();

  return <Onboarding.Header {...STEPS[currentStep - 1]} />;
};
```

To show the selected feature beside the carousel (for example, a screenshot or an [illustration](../illustrations/index.md)), read `stepValue`, the current sub-step.

## Anatomy

```tsx
<Onboarding>
  <Onboarding.Header />
  <Onboarding.StepIndicator />
  <Onboarding.Step>
    <FeatureCarousel>
      <FeatureCarousel.Item />
    </FeatureCarousel>
  </Onboarding.Step>
  <Onboarding.Step>
    <TipsList>
      <TipsList.Item />
    </TipsList>
  </Onboarding.Step>
  <Onboarding.Navigation />
</Onboarding>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Onboarding` | A [`Container`](./container.md) (`elevated` by default) with padding and a gap between its children | Holds the state and the parts. |
| `Onboarding.Header` | A centered editorial (serif) `HeadingLargeText` (`<h2>`) and `BodyText`, or its `children` | The title and description of a step. |
| `Onboarding.StepIndicator` | A `View` with `role="progressbar"` and one dot (or bar) per step | Shows how far along the user is. |
| `Onboarding.Step` | A `View` that renders only on its `step` and fades in | The content of one step. |
| `Onboarding.Navigation` | A row of an `outlined` [`PreviousButton`](./previous-button.md) and a `primary` [`NextButton`](./next-button.md) | Moves between sub-steps and steps. On the last one, `Next` shows `completeLabel` and calls `onComplete`. |
| `FeatureCarousel` | A `View` with `role="tablist"` | A list of features, one selected at a time. |
| `FeatureCarousel.Item` | A `View` with `role="tab"`: an optional icon, the title, and the description while selected | One feature. |
| `TipsList` | An optional `EyebrowText` title over an `<ol>` | A numbered list of tips. |
| `TipsList.Item` | An `<li>` with an optional number badge | One tip. |

## Examples

The examples are the stories in [`Onboarding.stories.tsx`](../../../components/onboarding/src/Onboarding.stories.tsx). Each one shows three steps: a feature carousel beside an illustration of the selected feature, a role question in a [Radio Group](./radio-group.md), and a list of tips.

| Stories | What they show |
| --- | --- |
| `Base` | The play function pages through the features with `Next`, checks that the role step blocks `Next` until a role is picked, goes `Back` to the last feature, and finishes with `Get started`, which calls `onComplete`. |
| `Pills` | The step indicator with `variant="pills"`. |
| `Keyboard` | The play function moves through the features with the arrow, `Home`, and `End` keys, then presses `Next` with `Enter` onto the role step and checks that focus stays in the onboarding. |
| `InDialog` | A "Take the tour" button that opens the onboarding in a [Dialog](./dialog.md). Each step's title is the `Dialog.Heading`, which names the dialog. `onComplete` closes it. |

## Props

### Onboarding

`Onboarding` accepts the [`Container`](./container.md) props, such as `variant` and `shadowStyle`, and adds these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `totalSteps` | `number` | Required | The number of steps. |
| `value` | `number` | None | The current step, from 1. Setting it makes the onboarding controlled. |
| `defaultValue` | `number` | `1` | The initial step when uncontrolled. |
| `onValueChange` | `(step: number) => void` | None | Called with the new step when it changes. |
| `subSteps` | `Record<number, number>` | `{}` | The number of sub-steps of each step, by step. `Next` and `Back` page through a step's sub-steps before they move to another step. Steps not listed have one sub-step. |
| `canGoNext` | `(step: number, stepValue: number) => boolean` | Always `true` | Whether the user can move on from a step and sub-step. When it returns `false`, `Next` is disabled. |
| `onComplete` | `() => void` | None | Called when `Next` is pressed on the last sub-step of the last step. |

### Onboarding.Step

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `step` | `number` | Required | The step, from 1, that shows this content. |

### Onboarding.StepIndicator

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"dots" \| "pills"` | `"dots"` | `dots` draws a round dot per step and stretches the current one. `pills` draws bars of equal width, up to 32 px each. |

### Onboarding.Header

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `ReactNode` | None | The title. |
| `description` | `ReactNode` | None | The text under the title. |
| `children` | `ReactNode` | None | Custom content in place of the title and description. |

### Onboarding.Navigation

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `backLabel` | `string` | `"Back"` | The label of the back button. |
| `nextLabel` | `string` | `"Next"` | The label of the next button. |
| `completeLabel` | `string` | `"Get started"` | The label of the next button on the last sub-step of the last step. |

### FeatureCarousel

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `number` | None | The selected item, from 0. Setting it makes the carousel controlled. Inside an `Onboarding`, the carousel follows the onboarding's sub-step unless you set it. |
| `defaultValue` | `number` | `0` | The initial item when uncontrolled outside an `Onboarding`. |
| `onValueChange` | `(value: number) => void` | None | Called with the new item when it changes. |

### FeatureCarousel.Item

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `index` | `number` | Required | The item's place in the carousel, from 0. |
| `icon` | `ReactNode` | None | An icon before the title. It is colored `primary` while selected and `ink` otherwise; pass `color="currentColor"` to a Cyclone icon. |
| `description` | `ReactNode` | None | Shown under the title while the item is selected. |
| `children` | `ReactNode` | None | The title. |

### TipsList

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | None | A label above the tips, which also names the list. Without it, the list is named "Tips". |

### TipsList.Item

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `number` | `number` | None | The number in the badge beside the tip. Screen readers announce the list's own numbering instead. |

### useOnboarding

`useOnboarding()` returns the state of the nearest `Onboarding`. It throws outside one.

| Field | Type | Description |
| --- | --- | --- |
| `currentStep` | `number` | The current step, from 1. |
| `totalSteps` | `number` | The number of steps. |
| `stepValue` | `number` | The current sub-step, from 0. |
| `setStep` | `(step: number) => void` | Goes to a step, at its first sub-step. |
| `setStepValue` | `(value: number) => void` | Goes to a sub-step of the current step. |
| `canGoNext` | `boolean` | The result of the `canGoNext` prop. |
| `canGoBack` | `boolean` | Whether there is a sub-step or step to go back to. |
| `isLastStep` | `boolean` | Whether this is the last sub-step of the last step. |
| `handleNext` | `() => void` | What `Next` does. |
| `handleBack` | `() => void` | What `Back` does. |

The exported types are `OnboardingProps`, `OnboardingStepProps`, `OnboardingStepIndicatorProps`, `OnboardingStepIndicatorVariant`, `OnboardingHeaderProps`, `OnboardingNavigationProps`, `OnboardingContextValue`, `FeatureCarouselProps`, `FeatureCarouselItemProps`, `TipsListProps`, and `TipsListItemProps`. For React Server Components, the parts are also exported as `OnboardingStep`, `OnboardingStepIndicator`, `OnboardingHeader`, `OnboardingNavigation`, `FeatureCarouselItem`, and `TipsListItem`.

## Behavior

- `Next` moves to the next sub-step of the current step. On the last sub-step, it moves to the first sub-step of the next step. On the last sub-step of the last step, its label changes to `completeLabel` and it calls `onComplete`.
- `Back` moves to the previous sub-step. On the first sub-step, it moves to the **last** sub-step of the previous step, so going back into a feature carousel shows its last feature.
- `Back` is disabled on the first sub-step of the first step. `Next` is disabled while `canGoNext` returns `false`.
- When the onboarding is controlled and `value` changes to a step with fewer sub-steps, the sub-step is clamped to the step's last one.
- Inside an `Onboarding`, a `FeatureCarousel` follows the onboarding's sub-step, so `Next`, `Back`, and selecting a feature all move the same state. Set `subSteps` for the carousel's step to its number of items.
- A new step fades in. The current dot of the `dots` indicator stretches into a pill, and the completed steps' dots are dimmer than the current one.
- The navigation buttons share the row. When their labels don't fit side by side, they wrap onto two rows.

## Variants and states

- **Surface:** `Onboarding` takes the [Container](./container.md) `variant` (default `elevated`), `shadowStyle`, `glass`, `noise`, and `accented` props. In a dialog, the `InDialog` story uses `variant="surface"` for an inset panel.
- **Step indicator:** `dots` or `pills`.
- **Small screens:** below the `sm` breakpoint, the padding and gaps get smaller.

## Accessibility

- The step indicator has `role="progressbar"` with `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, and the label "Step 2 of 3".
- The navigation row has `role="group"` and the label "Onboarding navigation". The buttons are named by their labels (`Back`, `Next`, and `completeLabel`), without tooltips.
- One `Next` button is used for every step, so focus stays on it when its label changes to `completeLabel`.
- A step change can disable or remove the focused button, for example `Next` on a step that waits for an answer, or `Back` on the first step. Focus then moves to the new step's content instead of the page.
- `FeatureCarousel` is a vertical `tablist`. Only the selected item is in the Tab order. The arrow keys move to the next or previous item and wrap around, `Home` and `End` move to the first and last items, and moving selects the item.
- `TipsList` renders an `<ol>`, named by its `title` or "Tips". The number badges are hidden from screen readers, which announce the list's own numbering.
- In a [Dialog](./dialog.md), make the step's title a `Dialog.Heading` (pass it as `Onboarding.Header` children), so that the dialog has a name.

## Related

- [Stepper](./stepper.md)
- [Radio Group](./radio-group.md)
- [Dialog](./dialog.md)
- [Next Button](./next-button.md)
- [Previous Button](./previous-button.md)
- [Illustrations](../illustrations/index.md)

## Source

- [`components/onboarding/src/Onboarding.tsx`](../../../components/onboarding/src/Onboarding.tsx)
- [`components/onboarding/src/Onboarding.stories.tsx`](../../../components/onboarding/src/Onboarding.stories.tsx)
