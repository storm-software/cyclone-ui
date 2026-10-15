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

import type { FieldProps } from "@cyclone-ui/field";
import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import type { AddressInputProps, AddressOption } from "./AddressInput";
import { AddressInput } from "./AddressInput";

const ADDRESSES: AddressOption[] = [
  {
    label: "200 N Spring St, Los Angeles, CA 90012, USA",
    latitude: 34.0537,
    longitude: -118.2428
  },
  {
    label: "111 S Grand Ave, Los Angeles, CA 90012, USA",
    latitude: 34.0553,
    longitude: -118.2498
  },
  {
    label: "1111 S Figueroa St, Los Angeles, CA 90015, USA",
    latitude: 34.043,
    longitude: -118.2673
  },
  {
    label: "200 Santa Monica Pier, Santa Monica, CA 90401, USA",
    latitude: 34.0092,
    longitude: -118.4974
  }
];

/**
 * Story-only args consumed by the custom `render`: Field options plus the
 * AddressInput's own props.
 */
type AddressInputStoryArgs = Pick<
  FieldProps,
  "size" | "disabled" | "required"
> &
  Pick<AddressInputProps, "endpoint" | "defaultAddress" | "onAddressChange">;

const meta: Meta<AddressInputStoryArgs> = {
  title: "Form/AddressInput",
  component: AddressInput,
  tags: ["autodocs"],
  args: {
    endpoint: "/api/addresses",
    onAddressChange: fn()
  },
  // Stands in for an address search API: like a geocoder, every word of the
  // query has to match, but not as one run of text.
  beforeEach: () => {
    const realFetch = globalThis.fetch;
    globalThis.fetch = async (...[input, init]: Parameters<typeof fetch>) => {
      const url = new URL(String(input), (globalThis as any).location.href);
      if (url.pathname === "/api/unavailable") {
        return new Response(null, { status: 503 });
      }
      if (url.pathname !== "/api/addresses") {
        return realFetch(input, init);
      }

      const words = (url.searchParams.get("q") ?? "")
        .toLocaleLowerCase()
        .split(/\s+/);

      return Response.json(
        ADDRESSES.filter(address =>
          words.every(word => address.label.toLocaleLowerCase().includes(word))
        )
      );
    };

    return () => {
      globalThis.fetch = realFetch;
    };
  },
  render: (
    {
      endpoint,
      defaultAddress,
      onAddressChange,
      ...props
    }: AddressInputStoryArgs,
    { id }: { id: string }
  ) => (
    <Form
      name={`formName-${id}`}
      initialValues={{ addressFieldName: defaultAddress?.label ?? "" }}>
      <AddressInput
        endpoint={endpoint}
        defaultAddress={defaultAddress}
        onAddressChange={onAddressChange}
        maxWidth={480}>
        <AddressInput.Map />
        <Field name="addressFieldName" {...props}>
          <Field.Label>Address Details</Field.Label>
          <AddressInput.Search>
            <AddressInput.TextBox placeholder="Search for an address" />
          </AddressInput.Search>
        </Field>
      </AddressInput>
    </Form>
  )
} satisfies Meta<AddressInputStoryArgs>;

export default meta;

type Story = StoryObj<AddressInputStoryArgs>;

export const Base: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const document = within(canvasElement.ownerDocument.body);
    const input = canvas.getByRole("combobox");
    const [cityHall] = ADDRESSES;

    // "200 spring" isn't a run of text in any address, so the suggestion
    // only shows because the endpoint's own matching is kept.
    await userEvent.type(input, "200 spring");
    await userEvent.click(
      await document.findByRole("option", { name: cityHall!.label })
    );
    await expect(input).toHaveValue(cityHall!.label);
    await expect(args.onAddressChange).toHaveBeenLastCalledWith(cityHall);

    // The map is centered on the address's tile.
    const map = await canvas.findByRole("img", {
      name: `Map of ${cityHall!.label}`
    });
    await expect(
      map.querySelector('img[src$="/15/5621/13083.png"]')
    ).not.toBeNull();

    // Editing the text drops the chosen address.
    await userEvent.type(input, "x");
    await waitFor(async () =>
      expect(args.onAddressChange).toHaveBeenLastCalledWith(undefined)
    );
    await expect(canvas.queryByRole("img")).not.toBeInTheDocument();
  }
};

export const SavedAddress: Story = {
  args: {
    defaultAddress: ADDRESSES[3]
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByRole("img", { name: `Map of ${ADDRESSES[3]!.label}` })
    ).toBeVisible();
    await expect(canvas.getByRole("combobox")).toHaveValue(ADDRESSES[3]!.label);
    await expect(args.onAddressChange).not.toHaveBeenCalled();
  }
};

export const Unavailable: Story = {
  args: {
    endpoint: "/api/unavailable"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByRole("combobox"), "spring");
    await expect(
      await canvas.findByText("Address suggestions are unavailable")
    ).toBeVisible();
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const SmallSize: Story = { args: { size: "sm" } };

export const LargeSize: Story = { args: { size: "lg" } };
