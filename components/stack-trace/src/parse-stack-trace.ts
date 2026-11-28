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

/** One `at …` line of a stack trace. */
export interface StackFrame {
  /** The line as written, trimmed. */
  raw: string;
  /** The function, such as `seedUsers` or `Object.<anonymous>`. */
  functionName?: string;
  filePath?: string;
  lineNumber?: number;
  columnNumber?: number;
  /** A frame from `node_modules`, Node's own modules or native code. */
  isInternal: boolean;
}

export interface ParsedStackTrace {
  /** The error's class, such as `TypeError`. */
  errorType?: string;
  /** The message after the type, which can span several lines. */
  errorMessage: string;
  frames: StackFrame[];
}

// `TypeError: …`, `AssertionError [ERR_ASSERTION]: …`. A message without a
// type keeps its colon.
const ERROR_TYPE = /^[\w$.]*(?:Error|Exception)(?: \[[\w-]+\])?(?=:)/;
// `at fn (file:1:2)` and `at file:1:2`.
const FRAME = /^at (?:(.+?) \()?(.+?):(\d+):(\d+)\)?$/;
const INTERNAL = /node_modules[\\/]|\bnode:|<anonymous>\)?$|\(native\)$/;

/**
 * Parses a V8 (Node, Chrome) stack string, such as `error.stack`, into the
 * error type and message and its frames.
 */
// ponytail: V8 `at …` frames only; Firefox and Safari `fn@file:1:2` lines
// stay unparsed (`raw` only). Add a second pattern if browser stacks matter.
export const parseStackTrace = (trace: string): ParsedStackTrace => {
  const lines = trace
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean);
  const first = lines.findIndex(line => line.startsWith("at "));
  const head = (first < 0 ? lines : lines.slice(0, first)).join("\n");
  const errorType = ERROR_TYPE.exec(head)?.[0];

  return {
    errorType,
    errorMessage: errorType ? head.slice(errorType.length + 1).trim() : head,
    frames: (first < 0 ? [] : lines.slice(first)).map(raw => {
      const match = FRAME.exec(raw);

      return {
        raw,
        functionName: match?.[1],
        filePath: match?.[2],
        lineNumber: match ? Number(match[3]) : undefined,
        columnNumber: match ? Number(match[4]) : undefined,
        isInternal: INTERNAL.test(raw)
      };
    })
  };
};
