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


import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  title: "Containers/Container",
  component: Container,
  tags: ["autodocs"],
  args: {
    children: "Container Text"
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "outlined",
        "sunken",
        "canvas",
        "surface",
        "elevated",
        "floating"
      ]
    },
    shadowStyle: {
      control: "select",
      options: ["none", "raised", "elevated", "flat"]
    },
    children: { control: "text" }
  },
  render: ({ children, ...rest }) => (
    <Container {...rest} height="300px">
      {children}
    </Container>
  )
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof Container>;

// Default theme

export const Base: Story = {};

export const Primary: Story = {
  args: {
    variant: "primary"
  }
};

export const Secondary: Story = {
  args: {
    variant: "secondary"
  }
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary"
  }
};

export const Outlined: Story = {
  args: {
    variant: "outlined"
  }
};

// Shapes behind the container, so the frosted glass has something to blur.
const renderOverShapes: Story["render"] = ({ children, ...rest }) => (
  <View position="relative" padding="6xl" backgroundColor="canvas">
    <View
      theme="info"
      position="absolute"
      top={0}
      right="10%"
      width={240}
      height={240}
      borderRadius={1000}
      backgroundColor="primary"
    />
    <View
      theme="discovery"
      position="absolute"
      bottom={0}
      left="5%"
      width={180}
      height={180}
      borderRadius={1000}
      backgroundColor="primary"
    />
    <Container {...rest} height="300px">
      {children}
    </Container>
  </View>
);

export const Glass: Story = {
  args: {
    glass: true
  },
  render: renderOverShapes
};

export const GlassNoise: Story = {
  args: {
    glass: true,
    noise: true
  },
  render: renderOverShapes
};

export const Sunken: Story = {
  args: {
    variant: "sunken"
  }
};

export const Canvas: Story = {
  args: {
    variant: "canvas"
  }
};

export const Surface: Story = {
  args: {
    variant: "surface"
  }
};

export const Elevated: Story = {
  args: {
    variant: "elevated"
  }
};

export const Floating: Story = {
  args: {
    variant: "floating"
  }
};

export const Circular: Story = {
  args: {
    variant: "secondary",
    circular: true
  }
};

export const Tight: Story = {
  args: {
    variant: "secondary",
    tight: true
  }
};

export const Accented: Story = {
  args: {
    variant: "surface",
    accented: true
  }
};

export const Hovered: Story = {
  args: {
    variant: "primary",
    hovered: true
  }
};

export const ShadowRaised: Story = {
  args: {
    variant: "elevated",
    shadowStyle: "raised"
  }
};

export const ShadowElevated: Story = {
  args: {
    variant: "elevated",
    shadowStyle: "elevated"
  }
};

export const ShadowFlat: Story = {
  args: {
    variant: "elevated",
    shadowStyle: "flat"
  }
};

export const Noise: Story = {
  args: {
    variant: "elevated",
    noise: true
  }
};

export const PrimaryNoise: Story = {
  args: {
    variant: "primary",
    noise: true
  }
};

export const Sized: Story = {
  args: {
    variant: "surface",
    size: "6xl"
  }
};

export const NumericSize: Story = {
  args: {
    variant: "surface",
    size: 8
  }
};

const SIZE_STEPS = ["xs", "sm", "md", "lg", "2xl", "6xl"] as const;

export const Sizes: Story = {
  render: () => (
    <View flexDirection="row" gap="lg" flexWrap="wrap" alignItems="flex-start">
      {SIZE_STEPS.map(size => (
        <Container key={size} variant="surface" size={size} width="auto">
          {size}
        </Container>
      ))}
    </View>
  )
};

const THEME_VARIANTS = [
  "primary",
  "secondary",
  "tertiary",
  "outlined",
  "sunken",
  "canvas",
  "surface",
  "elevated",
  "floating"
] as const;

export const Themes: Story = {
  render: () => (
    <View gap="xl">
      {(
        [
          ["discovery", "discovery"],
          ["success", "success"],
          ["info", "info"],
          ["danger", "danger"],
          ["warning", "warning"]
        ] as const
      ).map(([label, theme]) => (
        <View flexDirection="row" key={theme} gap="lg" flexWrap="wrap">
          {THEME_VARIANTS.map(variant => (
            <Container
              key={variant}
              theme={theme}
              variant={variant}
              width="180px"
              height="120px">
              {`${label} ${variant}`}
            </Container>
          ))}
        </View>
      ))}
    </View>
  )
};
