import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const navigationHeaderSource = readFileSync(
  fileURLToPath(new URL("./NavigationHeader.tsx", import.meta.url)),
  "utf8"
);

describe("NavigationHeader typography", () => {
  it("uses the $xl scale for desktop navigation labels", () => {
    expect(navigationHeaderSource).toMatch(
      /const NavigationHeaderItemLink = styled\(Link, \{[\s\S]*?fontSize: "\$xl"/
    );
  });

  it("uses the $xl scale for desktop dropdown links", () => {
    expect(navigationHeaderSource).toMatch(
      /const NavigationHeaderDropdownLink = styled\(Link, \{[\s\S]*?fontSize: "\$xl"/
    );
  });
});
