import { readFileSync } from "node:fs";

const fieldSource = () =>
  readFileSync(new URL("./Field.tsx", import.meta.url), "utf8");
const readComponent = (path: string) =>
  readFileSync(new URL(path, import.meta.url), "utf8");

describe("field focus colors", () => {
  it("uses the active hairline token for an unvalidated base field", () => {
    expect(fieldSource()).toContain(
      'field.theme.get() === "base" ? "$hairlineActive" : "$accentActive"'
    );
  });

  it("keeps the active accent token for a validation theme", () => {
    expect(fieldSource()).toContain(
      'field.theme.get() === "base" ? "$hairlineActive" : "$accentActive"'
    );
  });

  it("uses the validation accent for non-base separators and icons at rest", () => {
    expect(fieldSource()).toContain(
      'field.theme.get() === "base" ? "$hairline" : "$accent"'
    );

    for (const source of [
      readComponent("../../input/src/Input.tsx"),
      readComponent("../../select/src/Select.tsx")
    ]) {
      expect(source).toContain(
        'hasValidationMessage ? "$accent" : "$hairline"'
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
      expect(source).toContain(
        `borderColor={${state} ? focusColor : idleColor}`
      );
      expect(source).not.toContain(
        `borderColor={${state} ? focusColor : undefined}`
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
        /hasValidationMessage\s*\?\s*"\$accentActive"\s*:\s*"\$hairlineActive"/
      );
    }
  });
});
