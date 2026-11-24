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
import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import { ChevronLeft, ChevronRight } from "@cyclone-ui/icons";
import { Input } from "@cyclone-ui/input";
import { Select } from "@cyclone-ui/select";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack } from "@tamagui/stacks";
import type { ReactNode } from "react";
import { useState } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import type { ModalProps } from "./Modal";
import { Modal } from "./Modal";

const roles = ["Viewer", "Editor", "Admin"];

const meta: Meta<typeof Modal> = {
  title: "Containers/Modal",
  component: Modal,
  tags: ["autodocs"],
  render: (props: ModalProps, { id }: { id: string }) => {
    const [open, setOpen] = useState(false);

    return (
      <Modal {...props} open={open} onOpenChange={setOpen}>
        <Modal.Trigger asChild={true}>
          <Button>
            <Button.Text>Invite a member</Button.Text>
          </Button>
        </Modal.Trigger>
        <Modal.Frame>
          <Modal.Content>
            <Modal.Header closable={true}>
              <Modal.Title>Invite a member</Modal.Title>
              <Modal.Description>
                They'll get an email invite to join the Northwind workspace.
              </Modal.Description>
            </Modal.Header>
            <Form name={`formName-${id}`} initialValues={{ role: "Editor" }}>
              <YStack gap="6xl">
                <Field name="fullName">
                  <Field.Label variant="above">Full name</Field.Label>
                  <Input>
                    <Input.TextBox>
                      <Input.TextBox.Value placeholder="Jordan Ellis" />
                    </Input.TextBox>
                  </Input>
                </Field>
                <Field name="email">
                  <Field.Label variant="above">Work email</Field.Label>
                  <Input>
                    <Input.TextBox>
                      <Input.TextBox.Value placeholder="name@northwind.io" />
                    </Input.TextBox>
                  </Input>
                  <Field.Details>Invites expire after 7 days.</Field.Details>
                </Field>
                <Field name="role">
                  <Field.Label variant="above">Role</Field.Label>
                  <Select>
                    <Select.TextBox>
                      <Select.TextBox.Value />
                    </Select.TextBox>
                    <Select.Items>
                      {roles.map((role, index) => (
                        <Select.Items.Item
                          key={role}
                          index={index}
                          value={role}
                          selected={false}>
                          {role}
                        </Select.Items.Item>
                      ))}
                    </Select.Items>
                  </Select>
                  <Field.Details>
                    Editors can change content but not billing.
                  </Field.Details>
                </Field>
              </YStack>
            </Form>
          </Modal.Content>
          <Modal.Footer>
            <Modal.Footer.Actions.Secondary>
              <Button
                onPress={() => setOpen(false)}
                variant="outlined"
                size="sm">
                <Button.Text>Cancel</Button.Text>
              </Button>
            </Modal.Footer.Actions.Secondary>
            <Modal.Footer.Actions.Primary>
              <Button
                onPress={() => setOpen(false)}
                variant="primary"
                size="sm">
                <Button.Text>Send invite</Button.Text>
              </Button>
            </Modal.Footer.Actions.Primary>
          </Modal.Footer>
        </Modal.Frame>
      </Modal>
    );
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Uncontrolled: Story = {
  render: (props: ModalProps) => (
    <Modal {...props} defaultOpen={true}>
      <Modal.Trigger asChild={true}>
        <Button>
          <Button.Text>Open Modal</Button.Text>
        </Button>
      </Modal.Trigger>
      <Modal.Frame>
        <Modal.Content>
          <Modal.Header closable={true}>
            <Modal.Title>Uncontrolled modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            A modal keeps focus within its contents and can be dismissed using
            the overlay, the close button, or the Escape key.
          </Modal.Body>
        </Modal.Content>
      </Modal.Frame>
    </Modal>
  )
};

export const Scrollable: Story = {
  render: (props: ModalProps) => {
    const [open, setOpen] = useState(false);

    return (
      <Modal {...props} open={open} onOpenChange={setOpen}>
        <Modal.Trigger asChild={true}>
          <Button>
            <Button.Text>Open Modal</Button.Text>
          </Button>
        </Modal.Trigger>
        <Modal.Frame>
          <Modal.Content>
            <Modal.Header closable={true} onBack={() => setOpen(false)}>
              <Modal.Title>Scrollable modal</Modal.Title>
              <Modal.Description>
                The header and footer stay visible while the content scrolls.
              </Modal.Description>
            </Modal.Header>
            <YStack gap="3xl">
              {Array.from({ length: 32 }, (_, index) => (
                <Modal.Body key={index}>
                  Modal.Content keeps long content reachable without changing
                  the modal's focus behavior.
                </Modal.Body>
              ))}
            </YStack>
          </Modal.Content>
          <Modal.Footer>
            <Modal.Footer.Actions.Secondary>
              <Button
                onPress={() => setOpen(false)}
                variant="outlined"
                size="sm">
                <Button.Text>Cancel</Button.Text>
              </Button>
            </Modal.Footer.Actions.Secondary>
            <Modal.Footer.Actions.Primary>
              <Button
                onPress={() => setOpen(false)}
                variant="primary"
                size="sm">
                <Button.Text>Save</Button.Text>
              </Button>
            </Modal.Footer.Actions.Primary>
          </Modal.Footer>
        </Modal.Frame>
      </Modal>
    );
  }
};

const FooterActionsModal = ({
  props,
  secondary,
  primary
}: {
  props: ModalProps;
  secondary: ReactNode;
  primary: ReactNode;
}) => (
  <Modal {...props}>
    <Modal.Trigger asChild={true}>
      <Button>
        <Button.Text>Open Modal</Button.Text>
      </Button>
    </Modal.Trigger>
    <Modal.Frame>
      <Modal.Content>
        <Modal.Header closable={true}>
          <Modal.Title>Contact details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Footer buttons are grouped into secondary and primary actions.
        </Modal.Body>
      </Modal.Content>
      <Modal.Footer>
        <Modal.Footer.Actions.Secondary>
          {secondary}
        </Modal.Footer.Actions.Secondary>
        <Modal.Footer.Actions.Primary>{primary}</Modal.Footer.Actions.Primary>
      </Modal.Footer>
    </Modal.Frame>
  </Modal>
);

// Opens the modal, then checks that the footer buttons share one width and
// passes their boxes (in `names` order) to `check`. Retried until the open
// animation and the first measurement settle.
const openAndCheck = async (
  canvasElement: HTMLElement,
  names: string[],
  check: (rects: DOMRect[]) => Promise<void>
) => {
  await userEvent.click(
    within(canvasElement).getByRole("button", { name: "Open Modal" })
  );
  const body = within(document.body);
  const buttons = await Promise.all(
    names.map(name => body.findByRole("button", { name }))
  );
  await waitFor(
    async () => {
      const rects = buttons.map(button => button.getBoundingClientRect());
      for (const rect of rects) {
        await expect(Math.abs(rect.width - rects[0]!.width)).toBeLessThan(1);
      }
      await check(rects);
    },
    { timeout: 3000 }
  );
};

// Secondary buttons start the row and primary buttons end it, all as wide as
// the widest. Below `sm` they stack at full width with the primary on top.
export const FooterActions: Story = {
  render: (props: ModalProps) => (
    <FooterActionsModal
      props={props}
      secondary={
        <>
          <Button variant="outlined" size="sm">
            <Button.Icon>
              <ChevronLeft />
            </Button.Icon>
            <Button.Text>Previous</Button.Text>
          </Button>
          <Button theme="danger" variant="outlined" size="sm">
            <Button.Text>Clear</Button.Text>
          </Button>
        </>
      }
      primary={
        <Button variant="primary" size="sm">
          <Button.Text>Next</Button.Text>
          <Button.Icon>
            <ChevronRight />
          </Button.Icon>
        </Button>
      }
    />
  ),
  play: async ({ canvasElement }) =>
    openAndCheck(
      canvasElement,
      ["Previous", "Clear", "Next"],
      async ([previous, clear, next]) => {
        if (window.matchMedia("(max-width: 639px)").matches) {
          await expect(next!.top).toBeLessThan(previous!.top);
          await expect(previous!.top).toBeLessThan(clear!.top);
        } else {
          await expect(previous!.right).toBeLessThan(clear!.left);
          await expect(next!.left - clear!.right).toBeGreaterThan(
            clear!.left - previous!.right
          );
        }
      }
    )
};

// Labels too long to share one row in the 480px modal: the buttons stack at
// full width, primary first, on any screen size.
export const FooterActionsStacked: Story = {
  render: (props: ModalProps) => (
    <FooterActionsModal
      props={props}
      secondary={
        <>
          <Button variant="outlined" size="sm">
            <Button.Text>Back to account settings</Button.Text>
          </Button>
          <Button theme="danger" variant="outlined" size="sm">
            <Button.Text>Discard all changes</Button.Text>
          </Button>
        </>
      }
      primary={
        <Button variant="primary" size="sm">
          <Button.Text>Save and continue to billing</Button.Text>
        </Button>
      }
    />
  ),
  play: async ({ canvasElement }) =>
    openAndCheck(
      canvasElement,
      [
        "Back to account settings",
        "Discard all changes",
        "Save and continue to billing"
      ],
      async ([back, discard, save]) => {
        await expect(Math.abs(save!.left - back!.left)).toBeLessThan(1);
        await expect(save!.top).toBeLessThan(back!.top);
        await expect(back!.top).toBeLessThan(discard!.top);
      }
    )
};

// One `padding` spaces the panel from the frame, the panel from the footer, and
// the footer buttons from each other and the frame.
export const Padding: Story = {
  ...FooterActionsStacked,
  args: {
    padding: "4xl"
  }
};
