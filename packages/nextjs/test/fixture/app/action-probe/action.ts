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

"use server";

export interface SignupState {
  values?: { email: string; plan: string; contact: string };
  errors?: Record<string, string>;
  message?: string;
}

export async function signup(
  _previous: SignupState,
  formData: FormData
): Promise<SignupState> {
  const values = {
    email: String(formData.get("email") ?? ""),
    plan: String(formData.get("plan") ?? ""),
    contact: String(formData.get("contact") ?? "")
  };

  if (values.email === "taken@example.com") {
    return { values, errors: { email: "This email is already registered" } };
  }

  return {
    values,
    message: `Signed up ${values.email} for ${values.plan} by ${values.contact}`
  };
}
