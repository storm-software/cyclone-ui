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

// cspell:ignore Eircode

/**
 * How a country writes its addresses: which lines it has, what they are
 * called, and which are required.
 */
export interface AddressFormat {
  /** The city line's label, or `null` when the country has none (Singapore). */
  cityLabel: string | null;

  /** The state line's label, or `null` when addresses do not include one. */
  stateLabel: string | null;

  /** Whether the state is required. */
  stateRequired: boolean;

  /** The state options (code to name), when the state is picked from a list. */
  states?: Readonly<Record<string, string>>;

  /** The postal code's label, or `null` when the country has no postal codes. */
  postalCodeLabel: string | null;

  /** Whether the postal code is required. */
  postalCodeRequired: boolean;

  /** The postal code's format (letters match either case). */
  postalCodePattern?: RegExp;

  /** A valid postal code, shown in the invalid postal code message. */
  postalCodeExample?: string;

  /** The postal code is written before the city ("10115 Berlin"). */
  postalCodeFirst: boolean;
}

// prettier-ignore
const US_STATES = {
  AL: "Alabama", AK: "Alaska", AS: "American Samoa", AZ: "Arizona", AR: "Arkansas",
  AA: "Armed Forces Americas", AE: "Armed Forces Europe", AP: "Armed Forces Pacific",
  CA: "California", CO: "Colorado", CT: "Connecticut", DE: "Delaware",
  DC: "District of Columbia", FL: "Florida", GA: "Georgia", GU: "Guam", HI: "Hawaii",
  ID: "Idaho", IL: "Illinois", IN: "Indiana", IA: "Iowa", KS: "Kansas", KY: "Kentucky",
  LA: "Louisiana", ME: "Maine", MD: "Maryland", MA: "Massachusetts", MI: "Michigan",
  MN: "Minnesota", MS: "Mississippi", MO: "Missouri", MT: "Montana", NE: "Nebraska",
  NV: "Nevada", NH: "New Hampshire", NJ: "New Jersey", NM: "New Mexico", NY: "New York",
  NC: "North Carolina", ND: "North Dakota", MP: "Northern Mariana Islands", OH: "Ohio",
  OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania", PR: "Puerto Rico", RI: "Rhode Island",
  SC: "South Carolina", SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah",
  VT: "Vermont", VI: "U.S. Virgin Islands", VA: "Virginia", WA: "Washington",
  WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming"
} as const;

// prettier-ignore
const CA_PROVINCES = {
  AB: "Alberta", BC: "British Columbia", MB: "Manitoba", NB: "New Brunswick",
  NL: "Newfoundland and Labrador", NT: "Northwest Territories", NS: "Nova Scotia",
  NU: "Nunavut", ON: "Ontario", PE: "Prince Edward Island", QC: "Quebec",
  SK: "Saskatchewan", YT: "Yukon"
} as const;

// prettier-ignore
const AU_STATES = {
  ACT: "Australian Capital Territory", NSW: "New South Wales", NT: "Northern Territory",
  QLD: "Queensland", SA: "South Australia", TAS: "Tasmania", VIC: "Victoria",
  WA: "Western Australia"
} as const;

/** ISO 3166-1 alpha-2 codes. */
export const COUNTRY_CODES: readonly string[] = (
  "AD AE AF AG AI AL AM AO AQ AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ " +
  "BL BM BN BO BQ BR BS BT BV BW BY BZ CA CC CD CF CG CH CI CK CL CM CN CO CR " +
  "CU CV CW CX CY CZ DE DJ DK DM DO DZ EC EE EG EH ER ES ET FI FJ FK FM FO FR " +
  "GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GS GT GU GW GY HK HM HN HR HT HU " +
  "ID IE IL IM IN IO IQ IR IS IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ " +
  "LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ " +
  "MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF " +
  "PG PH PK PL PM PN PR PS PT PW PY QA RE RO RS RU RW SA SB SC SD SE SG SH SI " +
  "SJ SK SL SM SN SO SR SS ST SV SX SY SZ TC TD TF TG TH TJ TK TL TM TN TO TR " +
  "TT TV TW TZ UA UG UM US UY UZ VA VC VE VG VI VN VU WF WS YE YT ZA ZM ZW"
).split(" ");

// Countries whose addresses carry no postal code (after Google's
// libaddressinput data).
const NO_POSTAL_CODE = new Set(
  (
    "AE AG AO AQ AW BF BI BJ BO BS BV BW BZ CD CF CG CI CK CM DJ DM ER FJ GA " +
    "GD GH GM GQ GY HK HM JM KI KM KN KP LY ML MO MR MS MW NR NU QA RW SB SC " +
    "SL SR SS ST SY TD TF TG TK TL TO TT TV UG VU YE ZW"
  ).split(" ")
);

// Countries whose addresses carry no state, province or region line.
const NO_STATE = new Set(
  (
    "AT BE BG CH CY CZ DE DK EE FI FR GB GR HR HU IL IS LI LT LU LV MC MT NL " +
    "NO NZ PL PT SE SG SI SK SM VA"
  ).split(" ")
);

// Countries that write the postal code before the city.
const POSTAL_CODE_FIRST = new Set(
  (
    "AT BE CH CZ DE DK ES FI FR GR HR HU IS IT LI LU MC NL NO PL PT SE SI " +
    "SK SM"
  ).split(" ")
);

const digits = (count: number) => new RegExp(`^\\d{${count}}$`);

type PostalCode = [pattern: RegExp, example: string];

const POSTAL_CODES: Record<string, PostalCode> = {
  AR: [/^(?:[A-Z]\d{4}[A-Z]{3}|\d{4})$/i, "C1070AAM"],
  AT: [digits(4), "1010"],
  AU: [digits(4), "2000"],
  BE: [digits(4), "1000"],
  BR: [/^\d{5}-?\d{3}$/, "01310-100"],
  CA: [
    /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z] ?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
    "K1A 0B1"
  ],
  CH: [digits(4), "8001"],
  CN: [digits(6), "100000"],
  CZ: [/^\d{3} ?\d{2}$/, "110 00"],
  DE: [digits(5), "10115"],
  DK: [digits(4), "1050"],
  ES: [digits(5), "28013"],
  FI: [digits(5), "00100"],
  FR: [/^\d{2} ?\d{3}$/, "75008"],
  GB: [/^(?:GIR ?0AA|[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2})$/i, "SW1A 1AA"],
  IE: [/^(?:[AC-FHKNPRTV-Y]\d{2}|D6W) ?[\dAC-FHKNPRTV-Y]{4}$/i, "D02 X285"],
  IN: [/^[1-9]\d{5}$/, "110001"],
  IT: [digits(5), "00144"],
  JP: [/^\d{3}-?\d{4}$/, "100-0001"],
  KR: [digits(5), "03187"],
  MX: [digits(5), "06600"],
  MY: [digits(5), "50000"],
  NL: [/^\d{4} ?[A-Z]{2}$/i, "1012 JS"],
  NO: [digits(4), "0150"],
  NZ: [digits(4), "6011"],
  PH: [digits(4), "1000"],
  PL: [/^\d{2}-\d{3}$/, "00-950"],
  PT: [/^\d{4}-\d{3}$/, "1000-001"],
  RU: [digits(6), "101000"],
  SE: [/^\d{3} ?\d{2}$/, "114 55"],
  SG: [digits(6), "238880"],
  SK: [/^\d{3} ?\d{2}$/, "811 01"],
  TH: [digits(5), "10200"],
  US: [/^\d{5}(?:-\d{4})?$/, "94103"],
  ZA: [digits(4), "0001"]
};

// Ireland's Eircode is not required on every address.
const POSTAL_CODE_OPTIONAL = new Set(["IE"]);

const OVERRIDES: Record<string, Partial<AddressFormat>> = {
  AR: { stateRequired: true },
  AU: {
    cityLabel: "Suburb",
    stateLabel: "State",
    stateRequired: true,
    states: AU_STATES,
    postalCodeLabel: "Postcode"
  },
  BR: { stateLabel: "State", stateRequired: true },
  CA: { stateRequired: true, states: CA_PROVINCES },
  CN: { stateRequired: true },
  ES: { stateRequired: true },
  GB: { cityLabel: "Town/City", postalCodeLabel: "Postcode" },
  IE: {
    cityLabel: "Town/City",
    stateLabel: "County",
    postalCodeLabel: "Eircode"
  },
  IN: { stateLabel: "State", stateRequired: true, postalCodeLabel: "PIN Code" },
  IT: { stateRequired: true },
  JP: { stateLabel: "Prefecture", stateRequired: true },
  MX: { stateLabel: "State", stateRequired: true },
  MY: { stateLabel: "State", stateRequired: true },
  NZ: { cityLabel: "Town/City", postalCodeLabel: "Postcode" },
  RU: { stateLabel: "Region" },
  SG: { cityLabel: null },
  US: {
    stateLabel: "State",
    stateRequired: true,
    states: US_STATES,
    postalCodeLabel: "ZIP Code"
  }
};

/**
 * Get how a country (ISO 3166-1 alpha-2 code) writes its addresses. Countries
 * without specific rules get an optional "Province" and "Postal Code".
 */
export const getAddressFormat = (country?: string | null): AddressFormat => {
  const code = country?.toUpperCase() ?? "";
  const postalCode = POSTAL_CODES[code];
  const hasPostalCode = !NO_POSTAL_CODE.has(code);

  return {
    cityLabel: "City",
    stateLabel: NO_STATE.has(code) ? null : "Province",
    stateRequired: false,
    postalCodeLabel: hasPostalCode ? "Postal Code" : null,
    postalCodeRequired:
      hasPostalCode && !!postalCode && !POSTAL_CODE_OPTIONAL.has(code),
    postalCodePattern: postalCode?.[0],
    postalCodeExample: postalCode?.[1],
    postalCodeFirst: POSTAL_CODE_FIRST.has(code),
    ...OVERRIDES[code]
  };
};

/**
 * Check a postal code against a country's format. Empty values and countries
 * without a known format pass (whether it is required is checked separately).
 */
export const isValidPostalCode = (
  value: string,
  country?: string | null
): boolean => {
  const pattern = getAddressFormat(country).postalCodePattern;

  return !value.trim() || !pattern || pattern.test(value.trim());
};
