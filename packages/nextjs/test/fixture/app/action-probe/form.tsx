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

import { useActionState } from "react";
import { Field } from "../../../../../../components/field/src";
import { Form } from "../../../../../../components/form/src";
import { Input } from "../../../../../../components/input/src";
import { RadioGroup } from "../../../../../../components/radio-group/src";
import { Select } from "../../../../../../components/select/src";
import { signup } from "./action";

const PLANS = [
  { name: "Free", value: "free" },
  { name: "Pro", value: "pro" }
];

const CONTACTS = [
  { name: "By email", value: "email" },
  { name: "By phone", value: "phone" }
];

export function SignupForm() {
  const [state, formAction] = useActionState(signup, {});

  return (
    <>
      <Form
        name="signup"
        action={formAction}
        errors={state.errors}
        initialValues={{
          email: state.values?.email ?? "",
          plan: state.values?.plan ?? "",
          contact: state.values?.contact ?? ""
        }}>
        <Field name="email" required>
          <Field.Label>Email</Field.Label>
          <Input>
            <Input.TextBox>
              <Input.TextBox.Value type="email" />
            </Input.TextBox>
          </Input>
        </Field>
        <Field name="plan" required items={PLANS}>
          <Field.Label>Plan</Field.Label>
          <Select />
        </Field>
        <Field name="contact" required items={CONTACTS}>
          <Field.Label>Contact method</Field.Label>
          <RadioGroup />
        </Field>
        <Form.Submit>Sign up</Form.Submit>
      </Form>
      {state.message && <p role="status">{state.message}</p>}
    </>
  );
}
