import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync(new URL("./FileTree.tsx", import.meta.url), "utf8");
const storiesSource = readFileSync(
  new URL("./FileTree.stories.tsx", import.meta.url),
  "utf8"
);

describe("FileTree color states", () => {
  it("colors every part of an expanded folder as active", () => {
    expect(source).toContain(
      'const color = open || hovered || parentOpen ? "$accent" : "$inkSubtle";'
    );
    expect(source).toContain(
      "getTreeIcon(\n            open ? (openIcon ?? defaultFolderOpenIcon) : icon,\n            color"
    );
    expect(source).toContain("<TreeLabel color={color}>{name}</TreeLabel>");
  });

  it("colors each file tree row and its contents as active on hover", () => {
    expect(source).toContain(
      'const color = hovered || parentOpen ? "$accent" : "$inkSubtle";'
    );
    expect(source).toContain(
      "const getTreeIcon = (icon: ReactNode, color: string): ReactNode =>"
    );
    expect(source).toContain("onMouseEnter={() => setHovered(true)}");
    expect(source).toContain("onMouseLeave={() => setHovered(false)}");
  });

  it("colors rendered descendants as active while their folder is expanded", () => {
    expect(source).toContain(
      "const FileTreeOpenContext = createContext(false);"
    );
    expect(source).toContain(
      "const parentOpen = useContext(FileTreeOpenContext);"
    );
    expect(source).toContain(
      'const color = hovered || parentOpen ? "$accent" : "$inkSubtle";'
    );
    expect(source).toContain(
      "<FileTreeOpenContext.Provider value={open || parentOpen}>"
    );
  });
});

describe("FileTree Storybook validation", () => {
  it("uses a role query compatible with the configured native type environment", () => {
    expect(storiesSource).toContain(
      'canvas.getByRole("treeitem", { name: "components" })'
    );
    expect(storiesSource).not.toContain(".closest(");
  });

  it("adapts the browser keyboard handler at the Tamagui boundary", () => {
    expect(source).toContain(
      "onKeyDown(event as unknown as KeyboardEvent<HTMLElement>)"
    );
  });
});
