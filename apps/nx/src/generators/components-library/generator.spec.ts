import { createTreeWithEmptyWorkspace } from "@nx/devkit/testing";
import { Tree, readProjectConfiguration } from "@nx/devkit";

import { componentsLibraryGenerator } from "./generator";
import { ComponentsLibraryGeneratorSchema } from "./schema";

describe("components-library generator", () => {
  let tree: Tree;
  const options: ComponentsLibraryGeneratorSchema = { name: "test" };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it("should run successfully", async () => {
    await componentsLibraryGenerator(tree, options);
    const config = readProjectConfiguration(tree, "test");
    expect(config).toBeDefined();
  });
});
