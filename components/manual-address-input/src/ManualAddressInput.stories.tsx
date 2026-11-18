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

import { Form } from "@cyclone-ui/form";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, waitFor, within } from "storybook/test";
import type { ManualAddressInputProps } from "./ManualAddressInput";
import { ManualAddressInput } from "./ManualAddressInput";

/** Story-only `initialValues` go to the wrapping `Form`. */
type ManualAddressInputStoryArgs = ManualAddressInputProps & {
  initialValues?: Record<string, string>;
};

const meta: Meta<ManualAddressInputStoryArgs> = {
  title: "Form/ManualAddressInput",
  component: ManualAddressInput,
  tags: ["autodocs"],
  render: (
    { initialValues, ...args }: ManualAddressInputStoryArgs,
    { id }: { id: string }
  ) => (
    <Form name={`formName-${id}`} initialValues={initialValues ?? {}}>
      <ManualAddressInput maxWidth={560} {...args} />
    </Form>
  )
} satisfies Meta<ManualAddressInputStoryArgs>;

export default meta;

type Story = StoryObj<ManualAddressInputStoryArgs>;

const getTextBox = (canvasElement: HTMLElement, name: string) =>
  canvasElement.querySelector<HTMLInputElement>(`input[id="${name}"]`)!;

// A field can draw more than one `label`; the one with the field's label id
// names it.
const getLabels = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll('[id$="-label"]')).map(label =>
    label.textContent?.replace("*", "").trim()
  );

const selectCountry = async (canvasElement: HTMLElement, country: string) => {
  const document = within(canvasElement.ownerDocument.body);

  await userEvent.click(
    canvasElement.querySelector<HTMLElement>("[data-select-trigger]")!
  );
  await userEvent.click(await document.findByRole("option", { name: country }));
  // On small screens the menu unmounts after the sheet slides out.
  await waitFor(
    async () => expect(document.queryByRole("listbox")).not.toBeInTheDocument(),
    { timeout: 3000 }
  );
};

export const Base: Story = {
  play: async ({ canvasElement }) => {
    const line1 = getTextBox(canvasElement, "addressLine1");
    const line2 = getTextBox(canvasElement, "addressLine2");
    const line3 = getTextBox(canvasElement, "addressLine3");

    // US layout by default: ZIP Code and a State picked from a list. Not
    // required, so no country is chosen for the user.
    await waitFor(async () =>
      expect(getLabels(canvasElement)).toEqual([
        "Country",
        "Address Line 1",
        "Address Line 2",
        "Address Line 3",
        "City",
        "State",
        "ZIP Code"
      ])
    );
    await expect(
      canvasElement.querySelector("[data-select-trigger]")
    ).not.toHaveTextContent("United States");

    // Each line opens once the one before it is filled in.
    await expect(line2).toBeDisabled();
    await expect(line3).toBeDisabled();
    await userEvent.type(line1, "1600 Amphitheatre Pkwy");
    await waitFor(async () => expect(line2).toBeEnabled());
    await expect(line3).toBeDisabled();
    await userEvent.type(line2, "Building 40");
    await waitFor(async () => expect(line3).toBeEnabled());

    // Clearing a line closes the ones after it again.
    await userEvent.clear(line1);
    await waitFor(async () => expect(line2).toBeDisabled());
    await expect(line3).toBeDisabled();
  }
};

export const Required: Story = {
  args: { required: true },
  play: async ({ canvasElement }) => {
    const zipCode = getTextBox(canvasElement, "zipCode");

    await userEvent.type(zipCode, "9410");
    await userEvent.tab();
    await expect(
      await within(canvasElement).findByText(
        "Enter a valid ZIP Code, such as 94103"
      )
    ).toBeInTheDocument();

    await userEvent.type(zipCode, "3");
    await waitFor(async () =>
      expect(
        within(canvasElement).queryByText(/Enter a valid ZIP Code/)
      ).not.toBeInTheDocument()
    );
  }
};

export const International: Story = {
  args: { defaultCountry: "CA", required: true },
  play: async ({ canvasElement }) => {
    await waitFor(async () =>
      expect(getLabels(canvasElement)).toContain("Postal Code")
    );
    await expect(getLabels(canvasElement)).toContain("Province");
    await expect(getLabels(canvasElement)).not.toContain("ZIP Code");
  }
};

export const ChangeCountry: Story = {
  args: {
    initialValues: {
      country: "US",
      addressLine1: "10 Downing Street",
      city: "London",
      state: "NY",
      zipCode: "SW1A 2AA"
    }
  },
  play: async ({ canvasElement }) => {
    const document = within(canvasElement.ownerDocument.body);
    const canvas = within(canvasElement);

    // A UK postcode isn't a valid ZIP code.
    await userEvent.click(getTextBox(canvasElement, "zipCode"));
    await userEvent.tab();
    await expect(
      await canvas.findByText(/Enter a valid ZIP Code/)
    ).toBeInTheDocument();

    await selectCountry(canvasElement, "United Kingdom");

    // The UK has a Postcode and a Town/City, and no state line.
    await waitFor(async () =>
      expect(getLabels(canvasElement)).toEqual([
        "Country",
        "Address Line 1",
        "Address Line 2",
        "Address Line 3",
        "Town/City",
        "Postcode"
      ])
    );
    // Checked again against the UK format.
    await waitFor(async () =>
      expect(canvas.queryByText(/Enter a valid/)).not.toBeInTheDocument()
    );
    await expect(getTextBox(canvasElement, "zipCode")).toHaveValue("SW1A 2AA");

    // Back in the US, the old state is gone.
    await selectCountry(canvasElement, "United States");
    await waitFor(async () =>
      expect(
        canvasElement.querySelectorAll("[data-select-trigger]")[1]
      ).not.toHaveTextContent("New York")
    );
    await expect(document.queryByText("New York")).not.toBeInTheDocument();
  }
};

export const PostalCodeFirst: Story = {
  args: { defaultCountry: "DE" },
  play: async ({ canvasElement }) => {
    // "10115 Berlin": the postal code comes before the city, with no state.
    await waitFor(async () =>
      expect(getLabels(canvasElement).slice(4)).toEqual(["Postal Code", "City"])
    );
  }
};

export const NoPostalCode: Story = {
  args: { defaultCountry: "HK" },
  play: async ({ canvasElement }) => {
    await waitFor(async () =>
      expect(getLabels(canvasElement)).toContain("Province")
    );
    await expect(getLabels(canvasElement)).not.toContain("Postal Code");
  }
};

export const SavedAddress: Story = {
  args: {
    initialValues: {
      country: "US",
      addressLine1: "200 N Spring St",
      addressLine2: "Room 300",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90012"
    }
  },
  play: async ({ canvasElement }) => {
    await expect(getTextBox(canvasElement, "addressLine2")).toBeEnabled();
    await expect(getTextBox(canvasElement, "addressLine3")).toBeEnabled();
    await expect(
      canvasElement.querySelectorAll("[data-select-trigger]")[1]
    ).toHaveTextContent("California");
  }
};

export const NamePrefix: Story = {
  args: { name: "shipping" },
  play: async ({ canvasElement }) => {
    await expect(
      getTextBox(canvasElement, "shippingAddressLine1")
    ).toHaveAttribute("autocomplete", "section-shipping address-line1");
  }
};

export const LimitedCountries: Story = {
  args: { countries: ["US", "CA", "MX"] }
};

export const LabelAbove: Story = { args: { labelVariant: "above" } };

export const Underlined: Story = { args: { variant: "underlined" } };

export const Disabled: Story = { args: { disabled: true } };

export const SmallSize: Story = { args: { size: "sm" } };

export const LargeSize: Story = { args: { size: "lg" } };
