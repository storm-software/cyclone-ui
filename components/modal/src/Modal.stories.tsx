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
import { Input } from "@cyclone-ui/input";
import { Select } from "@cyclone-ui/select";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack } from "@tamagui/stacks";
import { useState } from "react";
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
            <Button
              onPress={() => setOpen(false)}
              variant="outlined"
              size="sm"
              flexGrow={0}>
              <Button.Text>Cancel</Button.Text>
            </Button>
            <Button
              onPress={() => setOpen(false)}
              variant="primary"
              size="sm"
              flexGrow={0}>
              <Button.Text>Send invite</Button.Text>
            </Button>
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
            <Button
              onPress={() => setOpen(false)}
              variant="outlined"
              size="sm"
              flexGrow={0}>
              <Button.Text>Cancel</Button.Text>
            </Button>
            <Button
              onPress={() => setOpen(false)}
              variant="primary"
              size="sm"
              flexGrow={0}>
              <Button.Text>Save</Button.Text>
            </Button>
          </Modal.Footer>
        </Modal.Frame>
      </Modal>
    );
  }
};
