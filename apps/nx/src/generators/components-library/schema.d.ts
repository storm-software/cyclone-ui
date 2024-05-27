import type { TypeScriptLibraryGeneratorSchema } from "@storm-software/workspace-tools";

export type ComponentsLibraryGeneratorSchema = Omit<
  TypeScriptLibraryGeneratorSchema,
  "bundler" | "buildable" | "hasUnitTestRunner" | "publishable"
>;
