import { readFileSync } from "node:fs";

const fieldSource = () =>
  readFileSync(new URL("./Field.tsx", import.meta.url), "utf8");
const fieldIconColorSource = () => {
  const source = fieldSource();
  const start = source.indexOf("export const useFieldIconColor");

  return source.slice(start, source.indexOf("\n};", start));
};
const readComponent = (path: string) =>
  readFileSync(new URL(path, import.meta.url), "utf8");

describe("field focus colors", () => {
  it("uses the active hairline token for an unvalidated base field", () => {
    const source = fieldIconColorSource();

    expect(source).toContain(
      '(!theme || theme === "base") && messages.length === 0'
    );
    expect(source).toMatch(
      /isNeutral\s*\?\s*focused\s*\?\s*"hairlineActive"\s*:\s*"hairline"/
    );
  });

  it("keeps the active accent token for a validation theme", () => {
    expect(fieldIconColorSource()).toMatch(
      /:\s*focused\s*\?\s*"accentActive"\s*:\s*"accent";/
    );
  });

  it("uses the validation accent for non-base separators and icons at rest", () => {
    const source = fieldSource();
    const fieldIcon = source.slice(source.indexOf("const FieldIconButtonImpl"));

    expect(fieldIcon).toContain("useFieldIconColor()");
    expect(fieldIcon).toContain(
      "borderColor={`${iconColor} group-hover/field:${hoverIconColor}`}"
    );

    for (const source of [
      readComponent("../../input/src/Input.tsx"),
      readComponent("../../select/src/Select.tsx")
    ]) {
      expect(source).toContain(
        'hasValidationMessage ? "accent" : "hairline"'
      );
    }
  });

  it("keeps the base hairline border when a field is not focused", () => {
    const fieldFrames = [
      [readComponent("../../input/src/Input.tsx"), "focused"],
      [readComponent("../../select/src/Select.tsx"), "focused"],
      [readComponent("../../text-area/src/TextArea.tsx"), "isFocused"],
      [readComponent("../../checkbox/src/Checkbox.tsx"), "focused"],
      [readComponent("../../switch/src/Switch.tsx"), "focused"]
    ];

    for (const [source, state] of fieldFrames) {
      // Flat-value borders interpolate the rest color into a template literal
      // (or, in Switch, a joined clause list), so match the ternary itself.
      expect(source).toMatch(
        new RegExp(`${state}\\s*\\?\\s*focusColor\\s*:\\s*idleColor`)
      );
      expect(source).not.toMatch(
        new RegExp(`${state}\\s*\\?\\s*focusColor\\s*:\\s*undefined`)
      );
    }
  });

  it("routes every field frame and affordance through the shared focus color", () => {
    const components = [
      readComponent("../../input/src/Input.tsx"),
      readComponent("../../select/src/Select.tsx"),
      readComponent("../../text-area/src/TextArea.tsx"),
      readComponent("../../checkbox/src/Checkbox.tsx"),
      readComponent("../../switch/src/Switch.tsx"),
      readComponent("../../radio-group/src/RadioGroup.tsx")
    ];

    for (const source of components) {
      expect(source).toMatch(
        /hasValidationMessage\s*\?\s*"accentActive"\s*:\s*"hairlineActive"/
      );
    }
  });
});
