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

import { describe, expect, it } from "vitest";
import {
  COUNTRY_CODES,
  getAddressFormat,
  isValidPostalCode
} from "./address-format";

describe("getAddressFormat", () => {
  it("uses ZIP Code and State in the US", () => {
    const format = getAddressFormat("US");

    expect(format.postalCodeLabel).toBe("ZIP Code");
    expect(format.stateLabel).toBe("State");
    expect(format.stateRequired).toBe(true);
    expect(format.postalCodeRequired).toBe(true);
    expect(format.states?.CA).toBe("California");
  });

  it("uses Postal Code and Province elsewhere", () => {
    const canada = getAddressFormat("ca");
    expect(canada.postalCodeLabel).toBe("Postal Code");
    expect(canada.stateLabel).toBe("Province");
    expect(canada.states?.QC).toBe("Quebec");

    // No specific rules: both optional.
    const other = getAddressFormat("EG");
    expect(other).toMatchObject({
      cityLabel: "City",
      stateLabel: "Province",
      stateRequired: false,
      postalCodeLabel: "Postal Code",
      postalCodeRequired: false,
      postalCodeFirst: false
    });
    expect(getAddressFormat(undefined).stateLabel).toBe("Province");
  });

  it("drops the lines a country's addresses do not have", () => {
    expect(getAddressFormat("DE").stateLabel).toBeNull();
    expect(getAddressFormat("HK").postalCodeLabel).toBeNull();
    expect(getAddressFormat("HK").postalCodeRequired).toBe(false);
    expect(getAddressFormat("SG").cityLabel).toBeNull();
  });

  it("puts the postal code first where it is written first", () => {
    expect(getAddressFormat("DE").postalCodeFirst).toBe(true);
    expect(getAddressFormat("US").postalCodeFirst).toBe(false);
  });

  it("names lines the local way", () => {
    expect(getAddressFormat("GB").postalCodeLabel).toBe("Postcode");
    expect(getAddressFormat("IN").postalCodeLabel).toBe("PIN Code");
    expect(getAddressFormat("JP").stateLabel).toBe("Prefecture");
    expect(getAddressFormat("IE").postalCodeRequired).toBe(false);
  });

  it("has an example that matches each postal code format", () => {
    for (const code of COUNTRY_CODES) {
      const format = getAddressFormat(code);
      if (format.postalCodePattern) {
        expect(format.postalCodeExample, code).toMatch(
          format.postalCodePattern
        );
      }
    }
  });
});

describe("isValidPostalCode", () => {
  it("checks the country's format", () => {
    expect(isValidPostalCode("94103", "US")).toBe(true);
    expect(isValidPostalCode("94103-1234", "US")).toBe(true);
    expect(isValidPostalCode("9410", "US")).toBe(false);
    expect(isValidPostalCode("k1a 0b1", "CA")).toBe(true);
    expect(isValidPostalCode("94103", "CA")).toBe(false);
    expect(isValidPostalCode("SW1A 1AA", "GB")).toBe(true);
    expect(isValidPostalCode("SW1A 1AA", "US")).toBe(false);
  });

  it("passes empty values and unknown formats", () => {
    expect(isValidPostalCode("", "US")).toBe(true);
    expect(isValidPostalCode("  ", "US")).toBe(true);
    expect(isValidPostalCode("anything", "EG")).toBe(true);
  });
});
