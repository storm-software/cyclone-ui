import { describe, expect, it } from "vitest";
import {
  getMissingPasswordCriteria,
  getPasswordStrength,
  isStrongPassword
} from "./password-strength";

describe("getPasswordStrength", () => {
  it.each([
    ["", 0],
    ["abc", 1],
    ["password", 2],
    ["passwordTree", 3],
    ["password!", 3],
    ["OrangeBoatTree1234", 4],
    ["abcdefghijklmnopqrstuvwxyz", 2]
  ] as const)("rates %j as %i", (password, expectedStrength) => {
    expect(getPasswordStrength(password)).toBe(expectedStrength);
  });

  it("accepts only strong passwords", () => {
    expect(isStrongPassword("passwordTree")).toBe(false);
    expect(isStrongPassword("OrangeBoatTree1234")).toBe(true);
  });

  it("returns only missing password criteria", () => {
    expect(getMissingPasswordCriteria("pass!")).toEqual([
      {
        code: "minimum-length",
        message: "Use at least 8 characters"
      },
      {
        code: "uppercase",
        message: "Include an uppercase letter"
      }
    ]);
  });

  it("accepts either a number or special character for the final criterion", () => {
    expect(getMissingPasswordCriteria("Password!")).toEqual([]);
    expect(getMissingPasswordCriteria("Password1")).toEqual([]);
    expect(getMissingPasswordCriteria("Password")).toEqual([
      {
        code: "number-or-symbol",
        message: "Include a number or special character"
      }
    ]);
  });
});
