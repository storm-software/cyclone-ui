# CopyButton

A reusable clipboard button with feedback after a successful copy.

## Quick Features

- Copies a string or text supplied at press time, including fetched text.
- Replaces the clipboard icon with a check for `copiedDuration` (2000ms by default).
- Shows “Copied to clipboard” in a Tooltip on non-touch screens and a Toast on touch screens.
- Supports Button styling, refs, custom content, accessible labels and disabled state.
- Keeps the initial state when copying fails and cleans up its reset timer on unmount.

## Installation

This package lives at `components/copy-button` in the Cyclone UI workspace. It uses the existing Cyclone UI theme configuration. Release availability is not verified here.

## Usage

```tsx
import { CopyButton } from "@cyclone-ui/copy-button"
import { Toaster } from "@cyclone-ui/toast"

export function Example() {
  return (
    <>
      <CopyButton value="Text to copy" />
      <Toaster />
    </>
  )
}
```

Mount one `Toaster` at the application root to render touch feedback. Use `value={() => fetch(url).then(response => response.text())}` for fetched text. The clipboard write starts during the press to preserve Safari's user activation. A synchronous supplier can return `null` when there is no text to copy.

Use `children={copied => ...}` for a custom label or icon. Other Button props customize the appearance; the default is a circular ghost button. Empty strings are copied, and rejected writes never show success feedback.

## Development

From the repository root, inside its development environment:

```sh
devenv shell -- pnpm nx run copy-button:build-base
devenv shell -- node node_modules/vitest/vitest.mjs run --config components/copy-button/vitest.config.mts
devenv shell -- node_modules/.bin/storybook dev --config-dir apps/storybook/.storybook --port 6006
```

The CopyButton stories cover success feedback, disabled buttons, rejected copies, lazy text and repeated clicks. Verify the base story with both fine and coarse primary pointers to check Tooltip and Toast feedback.
