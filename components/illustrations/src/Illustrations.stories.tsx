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
import { Text, Theme, View } from "@tamagui/core";
import { useState } from "react";
import { BasketIllustration } from "./BasketIllustration";
import { BranchesIllustration } from "./BranchesIllustration";
import { BreakersIllustration } from "./BreakersIllustration";
import { CabinetIllustration } from "./CabinetIllustration";
import type { IllustrationProps } from "./create-illustration";
import { DishIllustration } from "./DishIllustration";
import { DrawerIllustration } from "./DrawerIllustration";
import { ElevatorIllustration } from "./ElevatorIllustration";
import { ExplodedIllustration } from "./ExplodedIllustration";
import { FormatIllustration } from "./FormatIllustration";
import { HubIllustration } from "./HubIllustration";
import { KeyboardIllustration } from "./KeyboardIllustration";
import { KeypadIllustration } from "./KeypadIllustration";
import { LaptopIllustration } from "./LaptopIllustration";
import { LockersIllustration } from "./LockersIllustration";
import { LoupeIllustration } from "./LoupeIllustration";
import { PadlockIllustration } from "./PadlockIllustration";
import { PatchIllustration } from "./PatchIllustration";
import { PhoneIllustration } from "./PhoneIllustration";
import { PhosphorIllustration } from "./PhosphorIllustration";
import { PlotIllustration } from "./PlotIllustration";
import { PlugIllustration } from "./PlugIllustration";
import { QueryIllustration } from "./QueryIllustration";
import { RailIllustration } from "./RailIllustration";
import { RebuildIllustration } from "./RebuildIllustration";
import { RelayIllustration } from "./RelayIllustration";
import { RiffleIllustration } from "./RiffleIllustration";
import { RouterIllustration } from "./RouterIllustration";
import { SettleIllustration } from "./SettleIllustration";
import { SieveIllustration } from "./SieveIllustration";
import { SlowIllustration } from "./SlowIllustration";
import { StackIllustration } from "./StackIllustration";
import { TerminalIllustration } from "./TerminalIllustration";
import { TerrainIllustration } from "./TerrainIllustration";
import { TurntableIllustration } from "./TurntableIllustration";
import { VaultIllustration } from "./VaultIllustration";

const ILLUSTRATIONS = {
  basket: BasketIllustration,
  branches: BranchesIllustration,
  breakers: BreakersIllustration,
  cabinet: CabinetIllustration,
  dish: DishIllustration,
  drawer: DrawerIllustration,
  elevator: ElevatorIllustration,
  exploded: ExplodedIllustration,
  format: FormatIllustration,
  hub: HubIllustration,
  keyboard: KeyboardIllustration,
  keypad: KeypadIllustration,
  laptop: LaptopIllustration,
  lockers: LockersIllustration,
  loupe: LoupeIllustration,
  padlock: PadlockIllustration,
  patch: PatchIllustration,
  phone: PhoneIllustration,
  phosphor: PhosphorIllustration,
  plot: PlotIllustration,
  plug: PlugIllustration,
  query: QueryIllustration,
  rail: RailIllustration,
  rebuild: RebuildIllustration,
  relay: RelayIllustration,
  riffle: RiffleIllustration,
  router: RouterIllustration,
  settle: SettleIllustration,
  sieve: SieveIllustration,
  slow: SlowIllustration,
  stack: StackIllustration,
  terminal: TerminalIllustration,
  terrain: TerrainIllustration,
  turntable: TurntableIllustration,
  vault: VaultIllustration
};

type Args = IllustrationProps & { illustration: keyof typeof ILLUSTRATIONS };

const meta: Meta<Args> = {
  title: "Display/Illustrations",
  tags: ["autodocs"],
  argTypes: {
    illustration: { control: "select", options: Object.keys(ILLUSTRATIONS) },
    intensity: { control: { type: "range", min: 0, max: 1, step: 0.01 } }
  },
  render: ({ illustration, ...args }: Args) => {
    const Illustration = ILLUSTRATIONS[illustration];
    const [read, setRead] = useState("rest");

    return (
      <View
        width="100%"
        maxWidth={560}
        gap={8}
        padding={16}
        backgroundColor="canvas">
        <Illustration {...args} onRead={setRead} />
        <Text
          role="status"
          color="subtle"
          fontFamily="code"
          fontSize={12}
          alignSelf="flex-end">
          {read}
        </Text>
      </View>
    );
  }
};

export default meta;

type Story = StoryObj<Args>;

export const Terrain: Story = {
  args: { illustration: "terrain", intensity: 0.5 }
};

export const Riffle: Story = {
  args: { illustration: "riffle", intensity: 0.5 }
};

export const Keypad: Story = {
  args: { illustration: "keypad", intensity: 0.5 }
};

/** An error state: one breaker tripped, its outline the theme's `primary`, here `danger`. */
export const Breakers: Story = {
  args: { illustration: "breakers", intensity: 0.5 },
  render: ({ illustration, ...args }: Args) => {
    const Illustration = ILLUSTRATIONS[illustration];

    return (
      <Theme name="danger">
        <View width="100%" maxWidth={560} padding={16} backgroundColor="canvas">
          <Illustration {...args} />
        </View>
      </Theme>
    );
  }
};

/** The unseen pointer walks the tour until a real one arrives. */
export const Playing: Story = {
  args: { illustration: "riffle", play: true }
};

/** The rest pose, still: no pointer, no motion. */
export const Still: Story = {
  args: { illustration: "terrain", animated: false }
};

/** The highlight is the theme's `primary`, so a sub-theme colours it. */
export const SuccessTheme: Story = {
  args: { illustration: "terrain" },
  render: ({ illustration, ...args }: Args) => {
    const Illustration = ILLUSTRATIONS[illustration];

    return (
      <Theme name="success">
        <View width="100%" maxWidth={560} padding={16} backgroundColor="canvas">
          <Illustration {...args} />
        </View>
      </Theme>
    );
  }
};

function GalleryItem({ illustration, ...args }: Args) {
  const Illustration = ILLUSTRATIONS[illustration];
  const [read, setRead] = useState("");

  return (
    <View width={240} gap={4}>
      <Illustration {...args} onRead={setRead} />
      <View flexDirection="row" justifyContent="space-between" gap={8}>
        <Text color="primary" fontFamily="code" fontSize={12}>
          {illustration}
        </Text>
        <Text
          role="status"
          color="subtle"
          fontFamily="code"
          fontSize={12}
          numberOfLines={1}
          flexShrink={1}>
          {read}
        </Text>
      </View>
    </View>
  );
}

/** Every illustration in the package, the thirty-three figures of Hairline and the ones drawn here since. */
export const Gallery: Story = {
  args: { intensity: 0.5 },
  render: ({ illustration: _, ...args }: Args) => (
    <View
      flexDirection="row"
      flexWrap="wrap"
      gap={24}
      padding={16}
      backgroundColor="canvas">
      {(Object.keys(ILLUSTRATIONS) as (keyof typeof ILLUSTRATIONS)[]).map(
        name => (
          <GalleryItem key={name} {...args} illustration={name} />
        )
      )}
    </View>
  )
};
