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
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import type { ComponentProps } from "react";
import { useEffect } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import type { ToastHeldMode } from "./store";
import { toast } from "./store";
import { Toaster } from "./Toast";

// `held` and `sound` are story-only args, passed to `toast.configure`.
type ToastStoryArgs = ComponentProps<typeof Toaster> & {
  held?: ToastHeldMode;
  sound?: boolean;
};

const wait = async (ms: number) =>
  new Promise<void>(resolve => {
    setTimeout(resolve, ms);
  });

// A real photo would be fetched from the network; this stays inline.
const AVATAR = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><rect width="28" height="28" fill="#6d5dfc"/><text x="14" y="19" font-family="sans-serif" font-size="13" font-weight="600" text-anchor="middle" fill="#fff">AK</text></svg>'
)}`;

const Trigger = ({
  label,
  onPress
}: {
  label: string;
  onPress: () => void;
}) => (
  <Button variant="outlined" size="sm" flexGrow={0} onPress={onPress}>
    <Button.Text>{label}</Button.Text>
  </Button>
);

const Demo = ({
  held,
  sound,
  triggers,
  ...props
}: ToastStoryArgs & { triggers: Record<string, () => void> }) => {
  useEffect(() => {
    toast.configure({ held, sound });
  }, [held, sound]);

  // The store is shared: clear it when leaving the story.
  useEffect(
    () => () => {
      toast.dismiss(undefined, { immediate: true });
    },
    []
  );

  return (
    <View
      minHeight={360}
      flexDirection="row"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      gap="lg">
      <Toaster {...props} />
      {Object.entries(triggers).map(([label, onPress]) => (
        <Trigger key={label} label={label} onPress={onPress} />
      ))}
    </View>
  );
};

const meta: Meta<ToastStoryArgs> = {
  title: "Containers/Toast",
  component: Toaster,
  tags: ["autodocs"],
  args: {
    position: "top-center",
    held: "list",
    sound: false
  },
  argTypes: {
    position: {
      control: "select",
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right"
      ]
    },
    held: {
      control: "inline-radio",
      options: ["list", "queue", "replace"]
    }
  },
  render: (args: ToastStoryArgs) => (
    <Demo
      {...args}
      triggers={{
        Success: () => toast.success("Saved"),
        Error: () =>
          toast.error("Payment failed", { description: "Card declined" }),
        Warning: () => toast.warning("Storage almost full"),
        Info: () => toast.info("New version available"),
        Loading: () => toast.loading("Uploading…")
      }}
    />
  )
} satisfies Meta<ToastStoryArgs>;

export default meta;

type Story = StoryObj<ToastStoryArgs>;

export const Base: Story = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Success" }));

    await waitFor(async () =>
      expect(canvas.getByRole("status")).toHaveTextContent("Saved")
    );
    // The round shape opens into a pill wide enough for the title.
    await waitFor(
      async () => {
        const pill = canvasElement.querySelector<HTMLElement>(
          ".cyclone-toast[data-settled]"
        );
        await expect(pill?.getBoundingClientRect().width).toBeGreaterThan(80);
      },
      { timeout: 3000 }
    );
  }
};

export const BottomRight: Story = {
  args: {
    position: "bottom-right"
  }
};

export const Promises: Story = {
  render: (args: ToastStoryArgs) => (
    <Demo
      {...args}
      triggers={{
        Resolve: () => {
          void toast.promise(wait(1800), {
            loading: "Saving…",
            success: "Saved",
            error: "Could not save"
          });
        },
        Reject: () => {
          void toast
            .promise(
              wait(1800).then(() => {
                throw new Error("Network unreachable");
              }),
              {
                loading: "Saving…",
                success: "Saved",
                error: error => `Could not save: ${(error as Error).message}`
              }
            )
            .catch(() => undefined);
        }
      }}
    />
  )
};

export const Progress: Story = {
  render: (args: ToastStoryArgs) => (
    <Demo
      {...args}
      triggers={{
        Upload: () => {
          const id = toast.loading("Uploading photo…", { progress: 0 });
          let progress = 0;
          const timer = setInterval(() => {
            progress = Math.min(1, progress + 0.2);
            toast.update(id, {
              progress,
              description: `${Math.round(progress * 100)}%`
            });
            if (progress === 1) {
              clearInterval(timer);
              setTimeout(
                () =>
                  toast.update(id, {
                    type: "success",
                    title: "Photo uploaded",
                    description: "",
                    progress: null
                  }),
                400
              );
            }
          }, 500);
        }
      }}
    />
  )
};

export const Actions: Story = {
  render: (args: ToastStoryArgs) => (
    <Demo
      {...args}
      triggers={{
        Delete: () =>
          toast.success("Message deleted", {
            duration: 6000,
            action: {
              label: "Undo",
              onClick: () => ({ type: "info", title: "Message restored" })
            }
          }),
        Retry: () =>
          toast.error("Could not send", {
            action: {
              label: "Retry",
              onClick: () => ({
                type: "success",
                title: "Sent",
                duration: 3000
              })
            }
          }),
        Mention: () =>
          toast.info("Ada mentioned you", {
            description: "Can you review the toast motion?",
            image: AVATAR,
            meta: "now",
            action: { label: "Reply", onClick: () => undefined },
            secondary: { label: "Snooze", onClick: () => undefined }
          })
      }}
    />
  )
};

export const Held: Story = {
  args: {
    held: "list"
  },
  render: (args: ToastStoryArgs) => (
    <Demo
      {...args}
      triggers={{
        Error: () => toast.error("Payment failed"),
        Success: () => toast.success("Saved"),
        Info: () => toast.info("Synced 3 files"),
        Repeat: () => toast.info("Copied to clipboard"),
        "Dismiss all": () => toast.dismiss()
      }}
    />
  )
};

export const Sound: Story = {
  args: {
    sound: true
  }
};
