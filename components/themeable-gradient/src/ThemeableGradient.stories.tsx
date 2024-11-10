import type { Meta, StoryObj } from "@storybook/react";
import { ThemeableGradient } from "./ThemeableGradient";

const meta: Meta<typeof ThemeableGradient> = {
  title: "General/ThemeableGradient",
  component: ThemeableGradient,
  tags: ["autodocs"],
  render: ({ ...rest }: any) => (
    <ThemeableGradient {...rest} height="$12" width="100%" />
  )
} satisfies Meta<typeof ThemeableGradient>;

export default meta;

type Story = StoryObj<typeof ThemeableGradient>;

export const Base: Story = {
  args: {}
};

export const Brand: Story = {
  args: {
    theme: "brand"
  }
};

export const Alternate: Story = {
  args: {
    theme: "alternate"
  }
};

export const Help: Story = {
  args: {
    theme: "help"
  }
};

export const Error: Story = {
  args: {
    theme: "danger"
  }
};

export const Warning: Story = {
  args: {
    theme: "warning"
  }
};

export const Info: Story = {
  args: {
    theme: "info"
  }
};

export const Success: Story = {
  args: {
    theme: "success"
  }
};

export const Positive: Story = {
  args: {
    theme: "positive"
  }
};

export const Negative: Story = {
  args: {
    theme: "negative"
  }
};

export const AnalogousBrand: Story = {
  args: {
    theme: "brand",
    variant: "analogous"
  }
};

export const AnalogousAlternate: Story = {
  args: {
    theme: "alternate",
    variant: "analogous"
  }
};

export const AnalogousHelp: Story = {
  args: {
    theme: "help",
    variant: "analogous"
  }
};

export const AnalogousError: Story = {
  args: {
    theme: "danger",
    variant: "analogous"
  }
};

export const AnalogousWarning: Story = {
  args: {
    theme: "warning",
    variant: "analogous"
  }
};

export const AnalogousInfo: Story = {
  args: {
    theme: "info",
    variant: "analogous"
  }
};

export const AnalogousSuccess: Story = {
  args: {
    theme: "success",
    variant: "analogous"
  }
};

export const AnalogousPositive: Story = {
  args: {
    theme: "positive",
    variant: "analogous"
  }
};

export const AnalogousNegative: Story = {
  args: {
    theme: "negative",
    variant: "analogous"
  }
};

// Triadic variant

export const TriadicBrand: Story = {
  args: {
    theme: "brand",
    variant: "triadic"
  }
};

export const TriadicAlternate: Story = {
  args: {
    theme: "alternate",
    variant: "triadic"
  }
};

export const TriadicHelp: Story = {
  args: {
    theme: "help",
    variant: "triadic"
  }
};

export const TriadicError: Story = {
  args: {
    theme: "danger",
    variant: "triadic"
  }
};

export const TriadicWarning: Story = {
  args: {
    theme: "warning",
    variant: "triadic"
  }
};

export const TriadicInfo: Story = {
  args: {
    theme: "info",
    variant: "triadic"
  }
};

export const TriadicSuccess: Story = {
  args: {
    theme: "success",
    variant: "triadic"
  }
};

export const TriadicPositive: Story = {
  args: {
    theme: "positive",
    variant: "triadic"
  }
};

export const TriadicNegative: Story = {
  args: {
    theme: "negative",
    variant: "triadic"
  }
};

// Tetradic variant

export const TetradicBrand: Story = {
  args: {
    theme: "brand",
    variant: "tetradic"
  }
};

export const TetradicAlternate: Story = {
  args: {
    theme: "alternate",
    variant: "tetradic"
  }
};

export const TetradicHelp: Story = {
  args: {
    theme: "help",
    variant: "tetradic"
  }
};

export const TetradicError: Story = {
  args: {
    theme: "danger",
    variant: "tetradic"
  }
};

export const TetradicWarning: Story = {
  args: {
    theme: "warning",
    variant: "tetradic"
  }
};

export const TetradicInfo: Story = {
  args: {
    theme: "info",
    variant: "tetradic"
  }
};

export const TetradicSuccess: Story = {
  args: {
    theme: "success",
    variant: "tetradic"
  }
};

export const TetradicPositive: Story = {
  args: {
    theme: "positive",
    variant: "tetradic"
  }
};

export const TetradicNegative: Story = {
  args: {
    theme: "negative",
    variant: "tetradic"
  }
};

// Complementary variant

export const ComplementaryBrand: Story = {
  args: {
    theme: "brand",
    variant: "complementary"
  }
};

export const ComplementaryAlternate: Story = {
  args: {
    theme: "alternate",
    variant: "complementary"
  }
};

export const ComplementaryHelp: Story = {
  args: {
    theme: "help",
    variant: "complementary"
  }
};

export const ComplementaryError: Story = {
  args: {
    theme: "danger",
    variant: "complementary"
  }
};

export const ComplementaryWarning: Story = {
  args: {
    theme: "warning",
    variant: "complementary"
  }
};

export const ComplementaryInfo: Story = {
  args: {
    theme: "info",
    variant: "complementary"
  }
};

export const ComplementarySuccess: Story = {
  args: {
    theme: "success",
    variant: "complementary"
  }
};

export const ComplementaryPositive: Story = {
  args: {
    theme: "positive",
    variant: "complementary"
  }
};

export const ComplementaryNegative: Story = {
  args: {
    theme: "negative",
    variant: "complementary"
  }
};

// SplitComplementary variant

export const SplitComplementaryBrand: Story = {
  args: {
    theme: "brand",
    variant: "splitComplementary"
  }
};

export const SplitComplementaryAlternate: Story = {
  args: {
    theme: "alternate",
    variant: "splitComplementary"
  }
};

export const SplitComplementaryHelp: Story = {
  args: {
    theme: "help",
    variant: "splitComplementary"
  }
};

export const SplitComplementaryError: Story = {
  args: {
    theme: "danger",
    variant: "splitComplementary"
  }
};

export const SplitComplementaryWarning: Story = {
  args: {
    theme: "warning",
    variant: "splitComplementary"
  }
};

export const SplitComplementaryInfo: Story = {
  args: {
    theme: "info",
    variant: "splitComplementary"
  }
};

export const SplitComplementarySuccess: Story = {
  args: {
    theme: "success",
    variant: "splitComplementary"
  }
};

export const SplitComplementaryPositive: Story = {
  args: {
    theme: "positive",
    variant: "splitComplementary"
  }
};

export const SplitComplementaryNegative: Story = {
  args: {
    theme: "negative",
    variant: "splitComplementary"
  }
};

// "analogous" | "triadic" | "tetradic" | "complementary" | "splitComplementary"
