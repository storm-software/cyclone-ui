import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const readComponent = (path: string) =>
  readFileSync(new URL(path, import.meta.url), "utf8");

const getDeclaration = (source: string, name: string) => {
  const start = source.indexOf(`const ${name}`);
  const nextDeclaration = source.indexOf("\nconst ", start + 1);

  return source.slice(
    start,
    nextDeclaration === -1 ? undefined : nextDeclaration
  );
};

describe("field affordance color states", () => {
  it("uses the hairline token family for shared icons and separators", () => {
    const inputSeparator = getDeclaration(
      readComponent("../../input/src/Input.tsx"),
      "InputSeparator"
    );
    const selectSeparator = getDeclaration(
      readComponent("../../select/src/Select.tsx"),
      "SelectSeparator"
    );
    const fieldIcon = getDeclaration(
      readComponent("./Field.tsx"),
      "FieldIconButtonImpl"
    );

    for (const affordance of [inputSeparator, selectSeparator, fieldIcon]) {
      expect(affordance).toContain("$hairline");
      expect(affordance).toContain("$hairlineHover");
      expect(affordance).toContain("$hairlineActive");
      expect(affordance).toContain("$hairlineInactive");
    }
  });
});

describe("floating optional field labels", () => {
  it("uses the floating label typography when the field is focused or populated", () => {
    const label = getDeclaration(
      readComponent("./Field.tsx"),
      "FieldLabelTextImpl"
    );

    const optionalLabel = label.slice(label.indexOf("<FieldOptionalLabelText"));

    expect(optionalLabel).toContain("floating={floating}");
    expect(optionalLabel).toContain('size={floating ? "$true" : "sm"}');
  });
});
