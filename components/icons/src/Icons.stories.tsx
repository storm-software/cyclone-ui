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
import { Text, View } from "@tamagui/core";
import { allIcons } from "./all";
import { Acorn } from "./icons/Acorn";
import { ArrowRight } from "./icons/ArrowRight";
import { Heart } from "./icons/Heart";
import type { IconProps } from "./types";
import { ICON_WEIGHTS } from "./types";

type GalleryArgs = IconProps & {
  filter?: string;
};

const meta: Meta<GalleryArgs> = {
  title: "Base/Icons",
  component: Acorn,
  tags: ["autodocs"],
  args: {
    weight: "regular",
    size: 32,
    mirrored: false
  },
  argTypes: {
    weight: {
      control: "select",
      options: ICON_WEIGHTS
    },
    color: {
      control: "text"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ filter: _filter, ...args }) => <Acorn {...args} />
};

export const Weights: Story = {
  render: ({ filter: _filter, weight: _weight, ...args }) => (
    <View flexDirection="row" gap="lg" flexWrap="wrap">
      {ICON_WEIGHTS.map(weight => (
        <View key={weight} alignItems="center" gap="sm">
          <Heart {...args} weight={weight} />
          <Text fontSize={12} color="color">
            {weight}
          </Text>
        </View>
      ))}
    </View>
  )
};

export const Colors: Story = {
  render: ({ filter: _filter, ...args }) => (
    <View flexDirection="row" gap="lg">
      <Heart {...args} />
      <Heart {...args} color="red" />
      <Heart {...args} color="#1fb2a6" />
      <Heart {...args} weight="fill" color="red" />
    </View>
  )
};

export const Sizes: Story = {
  render: ({ filter: _filter, size: _size, ...args }) => (
    <View flexDirection="row" gap="lg" alignItems="flex-end">
      {[16, 24, 32, 48, 64].map(size => (
        <Acorn key={size} {...args} size={size} />
      ))}
    </View>
  )
};

export const SizeTokens: Story = {
  render: ({ filter: _filter, size: _size, ...args }) => (
    <View flexDirection="row" gap="lg" alignItems="flex-end">
      {(["2xl", "4xl", "6xl", "8xl", "10xl", "12xl"] as const).map(size => (
        <View key={size} alignItems="center" gap="sm">
          <Acorn {...args} size={size} />
          <Text fontSize={12} color="color">
            {size}
          </Text>
        </View>
      ))}
    </View>
  )
};

export const Mirrored: Story = {
  render: ({ filter: _filter, mirrored: _mirrored, ...args }) => (
    <View flexDirection="row" gap="lg">
      <ArrowRight {...args} />
      <ArrowRight {...args} mirrored />
    </View>
  )
};

export const Gallery: Story = {
  args: {
    size: 24,
    filter: ""
  },
  argTypes: {
    filter: {
      control: "text",
      description: "Only show icons whose name includes this text"
    }
  },
  render: ({ filter = "", ...args }) => {
    const search = filter.trim().toLowerCase();
    const icons = Object.entries(allIcons).filter(([name]) =>
      name.toLowerCase().includes(search)
    );

    return (
      <View gap="md">
        <Text fontSize={12} color="color">
          {icons.length} of {Object.keys(allIcons).length} icons
        </Text>
        <View flexDirection="row" flexWrap="wrap" gap="md">
          {icons.map(([name, Icon]) => (
            <View
              key={name}
              width={96}
              alignItems="center"
              gap="xs"
              paddingVertical="2xl">
              <Icon {...args} />
              <Text fontSize={10} color="color" textAlign="center">
                {name}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
};
