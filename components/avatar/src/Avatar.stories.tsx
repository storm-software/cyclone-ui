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
import { useState } from "react";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import type { AvatarProps, AvatarSize } from "./Avatar";
import { Avatar } from "./Avatar";

const PHOTO = "https://i.pravatar.cc/300?img=47";
const SIZES: AvatarSize[] = ["xs", "sm", "md", "lg", "xl", "2xl"];

const Row = ({ children }: { children: React.ReactNode }) => (
  <View flexDirection="row" flexWrap="wrap" alignItems="center" gap="6xl">
    {children}
  </View>
);

const meta: Meta<typeof Avatar> = {
  title: "Display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    src: PHOTO,
    name: "Ada Lovelace",
    size: "lg"
  }
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Base: Story = {};

export const Initials: Story = {
  args: { src: undefined },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      await canvas.findByRole("img", { name: "Ada Lovelace" })
    ).toHaveTextContent("AL");
  }
};

export const Icon: Story = {
  args: { src: undefined, name: undefined }
};

export const BrokenImage: Story = {
  args: { src: "https://example.invalid/missing.png" }
};

export const Sizes: Story = {
  render: (args: AvatarProps) => (
    <View gap="6xl">
      <Row>
        {SIZES.map(size => (
          <Avatar key={size} {...args} size={size} />
        ))}
      </Row>
      <Row>
        {SIZES.map(size => (
          <Avatar key={size} {...args} src={undefined} size={size} />
        ))}
      </Row>
    </View>
  )
};

export const Rounded: Story = {
  args: { circular: false },
  render: Sizes.render
};

const STATUSES = [
  { status: "success", statusLabel: "Online" },
  { status: "warning", statusLabel: "Away" },
  { status: "error", statusLabel: "Busy" },
  { status: "default", statusLabel: "Offline" }
] as const;

/**
 * A status dot on the bottom-right edge, cut out of the avatar by a
 * transparent ring (the striped backdrop shows through it).
 */
export const Status: Story = {
  args: { status: "success", statusLabel: "Online" },
  render: (args: AvatarProps) => (
    <View
      gap="6xl"
      padding="6xl"
      backgroundImage="repeating-linear-gradient(45deg, var(--subtle) 0 6px, transparent 6px 12px)">
      <Row>
        {SIZES.map(size => (
          <Avatar key={size} {...args} size={size} />
        ))}
      </Row>
      <Row>
        {STATUSES.map(status => (
          <Avatar key={status.status} {...args} {...status} src={undefined} />
        ))}
        {STATUSES.map(status => (
          <Avatar
            key={status.status}
            {...args}
            {...status}
            circular={false}
            editable={true}
          />
        ))}
      </Row>
    </View>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      (await canvas.findAllByRole("img", { name: "Ada Lovelace, Away" }))[0]
    ).toHaveTextContent("AL");
    const image = canvas.getAllByRole("img", {
      name: "Ada Lovelace, Online"
    })[0]!;
    await expect(getComputedStyle(image).maskImage).toContain(
      "radial-gradient"
    );
  }
};

/** Creates a 400×200 PNG: blue on the left half, orange on the right. */
const createTestImage = async () => {
  const canvas = document.createElement("canvas");
  canvas.width = 400;
  canvas.height = 200;
  const context = canvas.getContext("2d")!;
  context.fillStyle = "#2563eb";
  context.fillRect(0, 0, 200, 200);
  context.fillStyle = "#f97316";
  context.fillRect(200, 0, 200, 200);
  const blob = await new Promise<Blob | null>(resolve => {
    canvas.toBlob(resolve, "image/png");
  });

  return new File([blob!], "landscape.png", { type: "image/png" });
};

const EditableAvatar = ({ onUpload, ...args }: AvatarProps) => {
  const [src, setSrc] = useState(args.src);

  return (
    <Avatar
      {...args}
      src={src}
      editable={true}
      onUpload={async file => {
        await onUpload?.(file);
        // Stands in for a real upload.
        await new Promise(resolve => {
          setTimeout(resolve, 1000);
        });
        setSrc(URL.createObjectURL(file));
      }}
    />
  );
};

/** Hover the avatar and press the camera button to pick, crop and upload an image. */
export const Editable: Story = {
  args: { size: "2xl", onUpload: fn() },
  render: (args: AvatarProps) => <EditableAvatar {...args} />,
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await expect(
      canvas.getByRole("button", { name: "Upload image" })
    ).toBeInTheDocument();

    await userEvent.upload(
      canvasElement.querySelector<HTMLInputElement>('input[type="file"]')!,
      await createTestImage()
    );
    const save = await body.findByRole("button", { name: "Save" });
    await waitFor(async () => expect(save).toBeEnabled());
    await userEvent.click(save);

    await waitFor(async () => expect(args.onUpload).toHaveBeenCalledTimes(1));
    const cropped = (args.onUpload as ReturnType<typeof fn>).mock
      .calls[0]![0] as File;
    await expect(cropped.name).toBe("landscape.png");
    // The default crop is the centered square, which straddles both halves.
    const bitmap = await createImageBitmap(cropped);
    await expect([bitmap.width, bitmap.height]).toEqual([200, 200]);
    await waitFor(async () =>
      expect(
        canvas.getByRole("button", { name: "Upload image" })
      ).not.toHaveAttribute("aria-busy", "true")
    );
  }
};

export const EditableRounded: Story = {
  args: { size: "2xl", circular: false, src: undefined },
  render: (args: AvatarProps) => <EditableAvatar {...args} />
};
