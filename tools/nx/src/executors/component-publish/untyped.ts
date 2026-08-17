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
