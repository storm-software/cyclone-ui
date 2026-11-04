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

export type PasswordStrength = 0 | 1 | 2 | 3 | 4;

const MINIMUM_PASSWORD_LENGTH = 8;

const passwordCriteria = [
  {
    code: "minimum-length",
    message: `Use at least ${MINIMUM_PASSWORD_LENGTH} characters`,
    test: (password: string) => password.length >= MINIMUM_PASSWORD_LENGTH
  },
  {
    code: "uppercase",
    message: "Include an uppercase letter",
    test: (password: string) => /[A-Z]/.test(password)
  },
  {
    code: "lowercase",
    message: "Include a lowercase letter",
    test: (password: string) => /[a-z]/.test(password)
  },
  {
    code: "number-or-symbol",
    message: "Include a number or special character",
    test: (password: string) => /\d|[^\p{L}\p{N}\s]/u.test(password)
  }
] as const;

const passwordCharacterClasses = [
  /[a-z]/,
  /[A-Z]/,
  /\d/,
  /[^\p{L}\p{N}\s]/u
] as const;

export const getMissingPasswordCriteria = (password: string) =>
  passwordCriteria
    .filter(criterion => !criterion.test(password))
    .map(({ code, message }) => ({ code, message }));

export const getPasswordStrength = (password: string): PasswordStrength => {
  if (!password) {
    return 0;
  }

  if (password.length < MINIMUM_PASSWORD_LENGTH) {
    return 1;
  }

  const characterClassCount = passwordCharacterClasses.filter(pattern =>
    pattern.test(password)
  ).length;

  return Math.min(4, 1 + characterClassCount) as PasswordStrength;
};

export const isStrongPassword = (password: string): boolean =>
  getPasswordStrength(password) === 4;
