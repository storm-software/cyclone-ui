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
import type { ReactNode } from "react";
import { useState } from "react";
import { allIcons } from "./all";
import { ArrowRight } from "./icons/ArrowRight";
import { Bell } from "./icons/Bell";
import { Heart } from "./icons/Heart";
import { Loading } from "./icons/Loading";
import type { IconProps } from "./types";
import { ICON_VARIANTS } from "./types";

type GalleryArgs = IconProps & {
  filter?: string;
};

const meta: Meta<GalleryArgs> = {
  title: "Display/Icons",
  component: Bell,
  tags: ["autodocs"],
  args: {
    variant: "regular",
    animated: true,
    size: 32,
    mirrored: false,
    color: "primary"
  },
  argTypes: {
    variant: {
      control: "select",
      options: ICON_VARIANTS
    },
    color: {
      control: "text"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Remounts its children when the button is pressed, so the drawing animations play again.
 */
const Replay = ({ children }: { children: () => ReactNode }) => {
  const [count, setCount] = useState(0);

  return (
    <View gap="lg" alignItems="flex-start">
      <View key={count}>{children()}</View>
      <Text
        role="button"
        fontSize={12}
        color="color"
        cursor="pointer"
        textDecorationLine="underline"
        onPress={() => setCount(value => value + 1)}>
        Replay
      </Text>
    </View>
  );
};

export const Default: Story = {
  render: ({ filter: _filter, ...args }) => (
    <Replay>{() => <Bell {...args} />}</Replay>
  )
};

export const Variants: Story = {
  render: ({ filter: _filter, variant: _variant, ...args }) => (
    <Replay>
      {() => (
        <View flexDirection="row" gap="lg" flexWrap="wrap">
          {ICON_VARIANTS.map(variant => (
            <View key={variant} alignItems="center" gap="sm">
              <Bell {...args} variant={variant} />
              <Text fontSize={12} color="color">
                {variant}
              </Text>
            </View>
          ))}
        </View>
      )}
    </Replay>
  )
};

export const Spinner: Story = {
  render: ({ filter: _filter, ...args }) => <Loading {...args} variant="loop" />
};

export const Static: Story = {
  args: {
    animated: false
  },
  render: ({ filter: _filter, ...args }) => (
    <View flexDirection="row" gap="lg">
      <Bell {...args} />
      <Bell {...args} variant="filled" />
    </View>
  )
};

export const Colors: Story = {
  render: ({ filter: _filter, ...args }) => (
    <View flexDirection="row" gap="lg">
      <Heart {...args} />
      <Heart {...args} color="red" />
      <Heart {...args} color="#1fb2a6" />
      <Heart {...args} variant="filled" color="red" />
    </View>
  )
};

export const Sizes: Story = {
  render: ({ filter: _filter, size: _size, ...args }) => (
    <View flexDirection="row" gap="lg" alignItems="flex-end">
      {[16, 24, 32, 48, 64].map(size => (
        <Bell key={size} {...args} size={size} />
      ))}
    </View>
  )
};

export const SizeTokens: Story = {
  render: ({ filter: _filter, size: _size, ...args }) => (
    <View flexDirection="row" gap="lg" alignItems="flex-end">
      {(["2xl", "4xl", "6xl", "8xl", "10xl", "12xl"] as const).map(size => (
        <View key={size} alignItems="center" gap="sm">
          <Bell {...args} size={size} />
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
  render: ({ filter = "", variant: _variant, ...args }) => {
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
          {icons.flatMap(([name, Icon]) =>
            Icon.variants.map(variant => (
              <View
                key={`${name}-${variant}`}
                width={96}
                alignItems="center"
                gap="xs"
                paddingVertical="2xl">
                <Icon {...args} variant={variant} />
                <Text fontSize={10} color="color" textAlign="center">
                  {name}
                </Text>
                <Text fontSize={10} color="color" opacity={0.6}>
                  {variant}
                </Text>
              </View>
            ))
          )}
        </View>
      </View>
    );
  }
};
