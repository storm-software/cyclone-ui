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

"use client";

import NextLink from "next/link";
import { useState } from "react";
import { Drawer } from "../../../../../../components/drawer/src";
import { Field } from "../../../../../../components/field/src";
import { Footer, FooterLink } from "../../../../../../components/footer/src";
import { Form } from "../../../../../../components/form/src";
import { Input } from "../../../../../../components/input/src";
import { PasswordInput } from "../../../../../../components/password-input/src";
import { TextArea } from "../../../../../../components/text-area/src";

export function ControlsProbe() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h1>Prerendered controls</h1>
      <Form
        name="probe"
        initialValues={{ email: "", password: "", name: "", message: "" }}>
        <Field name="email">
          <Field.Label>Email</Field.Label>
          <Input>
            <Input.TextBox>
              <Input.TextBox.Value type="email" />
            </Input.TextBox>
          </Input>
        </Field>
        <Field name="password">
          <Field.Label>Password</Field.Label>
          <PasswordInput>
            <PasswordInput.TextBox>
              <PasswordInput.TextBox.Value />
            </PasswordInput.TextBox>
            <PasswordInput.Trigger />
          </PasswordInput>
        </Field>
        <Field name="name">
          <Field.Label>Name</Field.Label>
          <Input>
            <Input.TextBox>
              <Input.TextBox.Value />
            </Input.TextBox>
          </Input>
        </Field>
        <Field name="message">
          <Field.Label>Message</Field.Label>
          <TextArea />
        </Field>
      </Form>
      <button onClick={() => setOpen(true)}>Open drawer</button>
      <Drawer direction="right" open={open} onOpenChange={setOpen}>
        <Drawer.Overlay />
        <Drawer.Frame>
          <Drawer.Content>
            <Drawer.Header closable>
              <Drawer.Title>Contact team</Drawer.Title>
              <Drawer.Description>
                Send a message to the team
              </Drawer.Description>
            </Drawer.Header>
            <p>Drawer content</p>
          </Drawer.Content>
        </Drawer.Frame>
      </Drawer>
      <Footer>
        <FooterLink href="/second" render={<NextLink href="/second" />}>
          Footer destination
        </FooterLink>
      </Footer>
    </>
  );
}
