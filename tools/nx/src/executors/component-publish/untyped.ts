import { defineUntypedSchema } from "untyped";

export default defineUntypedSchema({
  $schema: {
    id: "ComponentsPublishExecutorSchema",
    title: "Components Publish Executor",
    description: "A type definition for the Components Publish executor schema",
    requires: []
  },
  tag: {
    $schema: {
      title: "Tag",
      type: "string",
      description: "The tag to publish with"
    },
    $default: "latest"
  },
  writeMetaJson: {
    $schema: {
      title: "Write Meta JSON",
      type: "boolean",
      description: "Write a `meta.json` file to the upload bucket"
    },
    $default: false
  },
  clean: {
    $schema: {
      title: "Clean",
      type: "boolean",
      description: "Clean the bucket before uploading files"
    },
    $default: false
  },
  verbose: {
    $schema: {
      title: "Verbose",
      type: "boolean",
      description: "Enable verbose logging"
    },
    $default: false
  },
  dryRun: {
    $schema: {
      title: "Dry Run",
      type: "boolean",
      description: "Perform a dry run"
    },
    $default: false
  }
});
