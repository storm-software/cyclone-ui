import type { GuidelineDocument } from "@razorwind/shell-shock";

export const COMPONENT_PROTECTION_RULE =
  "Do not change installed or added Cyclone UI component files unless the user specifically instructs you to do so.";

export const COMPONENT_PROTECTION_INSTRUCTIONS =
  `${COMPONENT_PROTECTION_RULE} ` +
  "Use components.json to identify the configured component path and installed files; copied source is not permission to edit it. " +
  "This includes fixes, refactors, formatting, renaming, deleting, and registry updates or overwrites (including add --overwrite, update-components, and forced initialization). " +
  "A request to build a feature, style a page, or fix an application does not authorize component changes. " +
  "Prefer supported props, composition, application-owned wrappers, and theme configuration outside the installed components. " +
  "If a component change is necessary, explain why and ask for specific instructions before changing it. " +
  "When the user explicitly requests a component addition or change, keep it scoped and preserve unrelated installed files and local edits.";

export const componentProtectionGuideline = {
  id: "installed-component-protection",
  title: "Protect installed Cyclone UI components",
  keywords: [
    "agent",
    "components",
    "installed",
    "edit",
    "customize",
    "update",
    "overwrite"
  ],
  content: `# Protect installed Cyclone UI components\n\n${COMPONENT_PROTECTION_INSTRUCTIONS}`
} satisfies GuidelineDocument;
