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
    id: "FontPublishExecutorSchema",
    title: "Font Publish Executor",
    description: "Options for publishing generated font files to the Storm CDN",
    requires: []
  },
  registry: {
    $schema: {
      title: "Registry",
      type: "string",
      description: "An optional S3-compatible registry URL"
    },
    $default: undefined
  },
  tag: {
    $schema: {
      title: "Tag",
      type: "string",
      description: "The release tag associated with the upload"
    },
    $default: "latest"
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
      description: "Report the upload without changing the bucket"
    },
    $default: false
  }
});
