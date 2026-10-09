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
      "useFieldIconColor"
    );

    for (const affordance of [inputSeparator, selectSeparator, fieldIcon]) {
      expect(affordance).toContain("hairline");
      expect(affordance).toContain("hairlineHover");
      expect(affordance).toContain("hairlineActive");
      expect(affordance).toContain("hairlineInactive");
    }
  });

  it("fades every textbox divider in over 200ms on mount", () => {
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

    for (const separator of [inputSeparator, selectSeparator]) {
      expect(separator).toContain(
        'transition: { duration: "200ms", enter: "200ms" }'
      );
      expect(separator).toContain('opacity: "enter:0"');
    }

    const iconDivider = fieldIcon.slice(
      fieldIcon.indexOf('position="absolute"'),
      fieldIcon.indexOf("<Button")
    );
    expect(iconDivider).toContain('opacity="enter:0"');
    expect(iconDivider).toContain(
      'transition={{ duration: "200ms", enter: "200ms" }}'
    );
  });

  it("colors field icons accent when themed or validated, otherwise hairline", () => {
    const field = readComponent("./Field.tsx");
    const iconColor = getDeclaration(field, "useFieldIconColor");
    const fieldIcon = getDeclaration(field, "FieldIconButtonImpl");
    const selectTrigger = getDeclaration(
      readComponent("../../select/src/Select.tsx"),
      "SelectTrigger"
    );

    expect(iconColor).toContain(
      '(!theme || theme === "base") && messages.length === 0'
    );
    expect(iconColor).toContain('"accent"');
    expect(fieldIcon).toContain("color: iconColor");
    expect(fieldIcon).not.toContain('color: "currentColor"');
    expect(selectTrigger).toContain("color={iconColor}");
  });

  it("themes the validation tooltip border to match the field icon", () => {
    const themeIcon = getDeclaration(
      readComponent("./Field.tsx"),
      "InnerFieldThemeIcon"
    );

    expect(themeIcon).toContain("theme={theme}");
    expect(themeIcon).toContain('"hairline focus-visible:hairlineActive"');
    expect(themeIcon).toContain('"accent focus-visible:accentActive"');
    expect(themeIcon).toContain(
      'arrowBorderColor={isNeutral ? "hairline" : "accent"}'
    );
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
    expect(optionalLabel).toContain('size={floating ? true : "sm"}');
  });
});

describe("floating field placeholder visibility", () => {
  it("only exposes empty floating placeholders when the focused label is elevated or no floating label exists", () => {
    const field = readComponent("./Field.tsx");

    expect(field).toContain("labelVariant: FieldLabelVariant | undefined");
    expect(field).toContain("export const useFieldShouldShowPlaceholder");
    expect(field).toContain(
      'labelVariant !== "floating" || (!hasValue && Boolean(focused))'
    );
    expect(field).toContain("setLabelVariant(variant)");
  });

  it("applies the shared visibility decision in every floating field control", () => {
    const controls = [
      readComponent("../../input-field/src/InputField.tsx"),
      readComponent("../../select-field/src/SelectField.tsx"),
      readComponent("../../date-picker-field/src/DatePickerField.tsx"),
      readComponent("../../text-area-field/src/TextAreaField.tsx")
    ];

    for (const control of controls) {
      expect(control).toContain("useFieldShouldShowPlaceholder");
    }

    expect(controls[1]).toContain(
      "displayValue || (shouldShowPlaceholder ? placeholder : undefined)"
    );
  });
});

describe("floating field label visibility", () => {
  it("returns empty blurred labels to their inline position even when a placeholder exists", () => {
    const field = readComponent("./Field.tsx");
    const floated = getDeclaration(field, "useFieldLabelFloated");

    expect(floated).toContain("(hasValue || Boolean(focused))");
  });
});

describe("floating required field labels", () => {
  it("reserves the required marker width so the border mask covers the asterisk", () => {
    const label = getDeclaration(
      readComponent("./Field.tsx"),
      "FieldLabelTextImpl"
    );

    expect(label).toContain('width={`${floating ? "md" : "xl"}`}');
  });
});

describe("floating field label masks", () => {
  it("keeps the border mask content-sized instead of stretching it across the control", () => {
    const field = readComponent("./Field.tsx");
    const labelStack = getDeclaration(field, "LabelXStack");
    const labelContent = getDeclaration(field, "FieldLabelContent");
    const label = getDeclaration(field, "FieldLabelTextImpl");

    expect(labelStack).not.toContain("flex: 1");
    expect(labelContent).not.toContain("flex: 1");
    expect(label).not.toContain('width="100%"');
  });
});
