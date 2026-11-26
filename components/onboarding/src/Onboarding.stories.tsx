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

import { Button } from "@cyclone-ui/button";
import { Dialog } from "@cyclone-ui/dialog";
import {
  Briefcase,
  CellphoneCheck,
  DocumentCode,
  Lightbulb,
  PaletteSwatchVariant
} from "@cyclone-ui/icons";
import {
  LaptopIllustration,
  PhoneIllustration,
  StackIllustration,
  TerminalIllustration
} from "@cyclone-ui/illustrations";
import { RadioGroup } from "@cyclone-ui/radio-group";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import type { ReactNode } from "react";
import { useState } from "react";
import { expect, fn, screen, userEvent, waitFor, within } from "storybook/test";
import type {
  OnboardingProps,
  OnboardingStepIndicatorVariant
} from "./Onboarding";
import {
  FeatureCarousel,
  Onboarding,
  TipsList,
  useOnboarding
} from "./Onboarding";

const STEPS = [
  {
    title: "Welcome to Cyclone UI",
    description: "Everything you need to ship a consistent interface."
  },
  {
    title: "Personalize your experience",
    description: "Tell us about yourself so we can tailor what you see."
  },
  {
    title: "You're ready to go!",
    description: "A few tips to get the most out of Cyclone UI."
  }
];

const FEATURES = [
  {
    title: "Copy components into your app",
    description:
      "The Cyclone CLI copies a component's source into your repository, so you own every line of it.",
    icon: DocumentCode,
    Illustration: TerminalIllustration
  },
  {
    title: "Theme everything with tokens",
    description:
      "Colors, type and spacing come from design tokens, and every component follows the light and dark themes.",
    icon: PaletteSwatchVariant,
    Illustration: StackIllustration
  },
  {
    title: "Ship to web and native",
    description:
      "Components are built on Tamagui, so the same code renders in the browser and in React Native.",
    icon: CellphoneCheck,
    Illustration: PhoneIllustration
  }
];

const ROLES = [
  {
    value: "designer",
    label: "Designer",
    description: "I design interfaces and maintain the design system.",
    icon: PaletteSwatchVariant
  },
  {
    value: "developer",
    label: "Developer",
    description: "I build the application with the components.",
    icon: DocumentCode
  },
  {
    value: "manager",
    label: "Product manager",
    description: "I plan what we build and track how it ships.",
    icon: Briefcase
  },
  {
    value: "other",
    label: "Something else",
    description: "I'm just looking around.",
    icon: Lightbulb
  }
];

const TIPS = [
  "Browse the components by category to find the right building block.",
  "Run the CLI's add command to copy a component and everything it depends on.",
  "Switch themes in the toolbar to check your screens in light and dark."
];

type OnboardingStoryArgs = OnboardingProps & {
  indicator?: OnboardingStepIndicatorVariant;
};

const StepHeader = ({
  indicator,
  dialog
}: {
  indicator?: OnboardingStepIndicatorVariant;
  /** Title the dialog with the step's title. */
  dialog?: boolean;
}) => {
  const { currentStep } = useOnboarding();
  const { title, description } = STEPS[currentStep - 1]!;

  return (
    <View gap="5xl">
      {dialog ? (
        <Onboarding.Header>
          <Dialog.Heading variant="editorial" textAlign="center">
            {title}
          </Dialog.Heading>
          <Dialog.Body textAlign="center">{description}</Dialog.Body>
        </Onboarding.Header>
      ) : (
        <Onboarding.Header title={title} description={description} />
      )}
      <Onboarding.StepIndicator variant={indicator} />
    </View>
  );
};

// Side by side, or stacked (at their own height) on small screens.
const column = { flexGrow: 1, flexBasis: "0 max-sm:auto" } as const;

// Shows the selected feature beside the carousel.
const FeatureStep = () => {
  const { stepValue } = useOnboarding();
  const { Illustration } = FEATURES[stepValue] ?? FEATURES[0]!;

  return (
    <View flexDirection="row max-sm:column" gap="7xl max-sm:5xl">
      <FeatureCarousel {...column}>
        {FEATURES.map(({ title, description, icon: Icon }, index) => (
          <FeatureCarousel.Item
            key={title}
            index={index}
            icon={<Icon size={20} color="currentColor" />}
            description={description}>
            {title}
          </FeatureCarousel.Item>
        ))}
      </FeatureCarousel>
      <Preview>
        <Illustration
          key={stepValue}
          play={true}
          palette={{ plate: "surface" }}
          width="100%"
          height="100%"
        />
      </Preview>
    </View>
  );
};

const Preview = ({ children }: { children: ReactNode }) => (
  <View
    {...column}
    minHeight={240}
    borderRadius="control"
    borderWidth={1}
    borderColor="hairline"
    backgroundColor="surface"
    overflow="hidden"
    alignItems="center"
    justifyContent="center">
    {children}
  </View>
);

const OnboardingDemo = ({
  indicator,
  dialog,
  onComplete,
  ...args
}: OnboardingStoryArgs & { dialog?: boolean }) => {
  const [role, setRole] = useState<string | null>(null);

  return (
    <Onboarding
      {...args}
      totalSteps={STEPS.length}
      subSteps={{ 1: FEATURES.length }}
      // Choosing a role unlocks the second step.
      canGoNext={step => step !== 2 || role !== null}
      onComplete={onComplete}>
      <StepHeader indicator={indicator} dialog={dialog} />

      <View minHeight={280}>
        <Onboarding.Step step={1}>
          <FeatureStep />
        </Onboarding.Step>

        <Onboarding.Step step={2}>
          <RadioGroup
            name="role"
            aria-label="What best describes you?"
            indicatorStyle="none"
            defaultValue={role ?? undefined}
            onValueChange={setRole}>
            {ROLES.map(({ value, label, description, icon: Icon }) => (
              <RadioGroup.Item
                key={value}
                value={value}
                description={description}
                icon={<Icon size={24} color="currentColor" />}>
                {label}
              </RadioGroup.Item>
            ))}
          </RadioGroup>
        </Onboarding.Step>

        <Onboarding.Step step={3}>
          <View flexDirection="row max-sm:column" gap="7xl max-sm:5xl">
            <TipsList title="Tips" {...column}>
              {TIPS.map((tip, index) => (
                <TipsList.Item key={tip} number={index + 1}>
                  {tip}
                </TipsList.Item>
              ))}
            </TipsList>
            <Preview>
              <LaptopIllustration
                play={true}
                palette={{ plate: "surface" }}
                width="100%"
                height="100%"
              />
            </Preview>
          </View>
        </Onboarding.Step>
      </View>

      <Onboarding.Navigation />
    </Onboarding>
  );
};

const meta: Meta<OnboardingStoryArgs> = {
  title: "Blocks/Onboarding",
  component: Onboarding,
  tags: ["autodocs"],
  args: {
    totalSteps: STEPS.length,
    indicator: "dots",
    onComplete: fn(),
    onValueChange: fn()
  },
  argTypes: {
    indicator: {
      control: "inline-radio",
      options: ["dots", "pills"]
    }
  },
  render: args => <OnboardingDemo {...args} />,
  decorators: [
    Story => (
      <View padding="xl" maxWidth={800} width="100%" alignSelf="center">
        <Story />
      </View>
    )
  ]
} satisfies Meta<OnboardingStoryArgs>;

export default meta;
type Story = StoryObj<OnboardingStoryArgs>;

export const Base: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const next = () => canvas.getByRole("button", { name: /^(Next|Get started)$/ });
    const progress = canvas.getByRole("progressbar");

    // `Next` pages through the features before leaving the first step.
    await expect(progress).toHaveAttribute("aria-valuenow", "1");
    for (const { title } of FEATURES.slice(1)) {
      await userEvent.click(next());
      await expect(
        canvas.getByRole("tab", { name: new RegExp(title) })
      ).toHaveAttribute("aria-selected", "true");
    }
    await userEvent.click(next());
    await expect(progress).toHaveAttribute("aria-valuenow", "2");
    await expect(args.onValueChange).toHaveBeenLastCalledWith(2);

    // The second step waits for a role.
    await expect(next()).toBeDisabled();
    await userEvent.click(canvas.getByText("Developer"));
    await waitFor(async () => expect(next()).toBeEnabled());

    // `Back` returns to the last feature.
    await userEvent.click(canvas.getByRole("button", { name: "Back" }));
    await expect(progress).toHaveAttribute("aria-valuenow", "1");
    await expect(
      canvas.getByRole("tab", { name: new RegExp(FEATURES[2]!.title) })
    ).toHaveAttribute("aria-selected", "true");

    await userEvent.click(next());
    await userEvent.click(next());
    await expect(progress).toHaveAttribute("aria-valuenow", "3");
    // Steps fade in (`opacity: enter:0`).
    await waitFor(async () =>
      expect(canvas.getByRole("list", { name: "Tips" })).toBeVisible()
    );

    await expect(next()).toHaveAccessibleName("Get started");
    await userEvent.click(next());
    await expect(args.onComplete).toHaveBeenCalledOnce();
  }
};

export const Pills: Story = {
  args: {
    indicator: "pills"
  }
};

export const Keyboard: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tabs = canvas.getAllByRole("tab");

    // Arrows move focus and selection together, and wrap around.
    await userEvent.tab();
    await expect(tabs[0]).toHaveFocus();
    await userEvent.keyboard("{ArrowDown}");
    await expect(tabs[1]).toHaveFocus();
    await expect(tabs[1]).toHaveAttribute("aria-selected", "true");
    await userEvent.keyboard("{ArrowUp}{ArrowUp}");
    await expect(tabs[2]).toHaveFocus();
    await userEvent.keyboard("{Home}");
    await expect(tabs[0]).toHaveFocus();

    // Pressing `Next` onto the gated step disables it: focus moves to the
    // new step rather than dropping to the page.
    await userEvent.keyboard("{End}");
    await userEvent.tab();
    await userEvent.tab();
    const next = canvas.getByRole("button", { name: "Next" });
    await expect(next).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await waitFor(async () =>
      expect(canvas.getByRole("progressbar")).toHaveAttribute(
        "aria-valuenow",
        "2"
      )
    );
    await waitFor(async () =>
      expect(canvasElement.ownerDocument.activeElement).not.toBe(
        canvasElement.ownerDocument.body
      )
    );
  }
};

const OnboardingDialog = (args: OnboardingStoryArgs) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild={true}>
        <Button alignSelf="center" flexGrow={0}>
          <Button.Text>Take the tour</Button.Text>
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay key="overlay" />
        <Dialog.Container
          key="content"
          maxWidth={800}
          width="100%"
          maxHeight="90vh"
          padding="xl">
          <OnboardingDemo
            {...args}
            dialog={true}
            variant="surface"
            onComplete={() => {
              args.onComplete?.();
              setOpen(false);
            }}
          />
        </Dialog.Container>
      </Dialog.Portal>
    </Dialog>
  );
};

export const InDialog: Story = {
  render: args => <OnboardingDialog {...args} />,
  play: async ({ canvasElement }) => {
    await userEvent.click(
      within(canvasElement).getByRole("button", { name: "Take the tour" })
    );
    // The dialog is portalled outside the canvas, and fades in.
    const progress = await screen.findByRole("progressbar", {
      name: "Step 1 of 3"
    });
    await waitFor(async () => expect(progress).toBeVisible());
  }
};
