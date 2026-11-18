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
    id: "ComponentPublishExecutorSchema",
    title: "Component Publish Executor",
    description: "A type definition for the Component Publish executor schema",
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
  all: {
    $schema: {
      title: "All Components",
      type: "boolean",
      description:
        "Bootstrap the public registry or tag channel by publishing every component before its catalog"
    },
    $default: false
  },
  writeMetaJson: {
    $schema: {
      title: "Write Meta JSON",
      type: "boolean",
      description:
        "Deprecated and ignored; registry items contain embedded metadata"
    },
    $default: false
  },
  clean: {
    $schema: {
      title: "Clean",
      type: "boolean",
      description:
        "Deprecated and ignored; component publishing always preserves shared bucket objects"
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
