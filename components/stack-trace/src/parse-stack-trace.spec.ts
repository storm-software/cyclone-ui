import { describe, expect, it } from "vitest";
import { parseStackTrace } from "./parse-stack-trace";

const STACK = `TypeError: Cannot read properties of undefined (reading 'email')
    at seedUsers (prisma/seed.ts:27:34)
    at async main (prisma/seed.ts:51:9)
    at Module._compile (node:internal/modules/cjs/loader:1554:14)
    at Object.transformer (node_modules/tsx/dist/register.cjs:3:1104)
    at file:///app/server.mjs:12:5
    at Array.forEach (<anonymous>)`;

describe("parseStackTrace", () => {
  it("splits the error type, message and frames", () => {
    const { errorType, errorMessage, frames } = parseStackTrace(STACK);

    expect(errorType).toBe("TypeError");
    expect(errorMessage).toBe(
      "Cannot read properties of undefined (reading 'email')"
    );
    expect(frames).toHaveLength(6);
    expect(frames[0]).toEqual({
      raw: "at seedUsers (prisma/seed.ts:27:34)",
      functionName: "seedUsers",
      filePath: "prisma/seed.ts",
      lineNumber: 27,
      columnNumber: 34,
      isInternal: false
    });
    expect(frames[1]!.functionName).toBe("async main");
    // A frame without a function, at a URL with its own colons.
    expect(frames[4]).toMatchObject({
      functionName: undefined,
      filePath: "file:///app/server.mjs",
      lineNumber: 12,
      columnNumber: 5,
      isInternal: false
    });
    expect(frames.map(frame => frame.isInternal)).toEqual([
      false,
      false,
      true,
      true,
      false,
      true
    ]);
    // No location: kept as raw text.
    expect(frames[5]).toMatchObject({
      raw: "at Array.forEach (<anonymous>)",
      filePath: undefined
    });
  });

  it("keeps a message without a type, over several lines", () => {
    const { errorType, errorMessage, frames } = parseStackTrace(
      "Expected 2 charge attempts: received 1\n\nsee the retry policy\n  at Object.<anonymous> (src/payment.test.ts:58:22)"
    );

    expect(errorType).toBeUndefined();
    expect(errorMessage).toBe(
      "Expected 2 charge attempts: received 1\nsee the retry policy"
    );
    expect(frames[0]).toMatchObject({
      functionName: "Object.<anonymous>",
      isInternal: false
    });
  });

  it("reads a Node error code and a message without frames", () => {
    expect(
      parseStackTrace("AssertionError [ERR_ASSERTION]: false == true")
    ).toEqual({
      errorType: "AssertionError [ERR_ASSERTION]",
      errorMessage: "false == true",
      frames: []
    });
  });
});
