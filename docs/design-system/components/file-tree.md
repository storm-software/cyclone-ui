---
title: File Tree
description: A hierarchical file structure built from File leaves and expandable Folder branches, with ARIA tree roles and keyboard toggling.
documentType: reference
tags: [component, file-tree, docs, navigation]
component:
  name: file-tree
  package: "@cyclone-ui/file-tree"
  stories:
    - title: Docs/FileTree
      file: components/file-tree/src/FileTree.stories.tsx
    - title: Docs/FileTree/Tailwind
      file: components/file-tree/src/FileTree.tailwind.stories.tsx
      style: tailwind
---

# File Tree

`FileTree` shows a directory or project structure. You build it from `File` leaves and `Folder` branches. The user presses a folder to open or close it, and its caret rotates to show the state.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add file-tree
pnpm install
```

- **File:** `FileTree.tsx`. The CLI writes it to `<path>/file-tree/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Icons](../icons/index.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/animate-presence`, `@tamagui/core`, `@tamagui/stacks`, and `@tamagui/text`.
- **Tailwind:** with `style: "tailwind"` in `components.json`, the CLI copies the Tailwind CSS version of this component. See the [CLI configuration](../../packages/cli.md).

## Import

```tsx
import { File, FileTree, Folder } from "@cyclone-ui/file-tree";
```

## Usage

```tsx
<FileTree>
  <Folder name="app" defaultOpen>
    <File name="layout.tsx" />
    <File name="page.tsx" />
  </Folder>
  <Folder name="components">
    <File name="button.tsx" />
  </Folder>
  <File name="package.json" />
</FileTree>
```

## Anatomy

```tsx
<FileTree>
  <Folder name="app" defaultOpen>
    <File name="page.tsx" />
  </Folder>
  <File name="package.json" />
</FileTree>
```

| Part       | Renders                                                                                                                         | Purpose                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `FileTree` | A Tamagui `YStack` with `role="tree"`                                                                                           | The frame. It has a full width, `5xl` padding, a 1px `hairline` border, the `container` radius, and a `surface` background. |
| `Folder`   | A `YStack` with `role="none"` that holds a row with `role="treeitem"`, `aria-expanded`, and `tabIndex={0}`. The row shows a `ChevronRight` caret, the folder icon, and the name. While the folder is open, a `YStack` with `role="group"` holds the children | An expandable branch.                                                                       |
| `File`     | An `XStack` row with `role="treeitem"` that shows the file icon and the name                                                    | A leaf.                                                                                     |
| Name       | A Tamagui `SizableText` in the `code` font, size `md`, weight 200                                                               | The file or folder name.                                                                    |

The default icons are `File`, `Folder`, and `FolderOpen` from `@cyclone-ui/icons`, at size `2xl`, with animation off.

## Examples

The examples are the stories in [`FileTree.stories.tsx`](../../../components/file-tree/src/FileTree.stories.tsx). Both stories render an open `app` folder with three files, a closed `components` folder with two files, and a `package.json` file.

| Stories         | What they show                                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `Base`          | The tree.                                                                                                                       |
| `TogglesFolder` | The play function presses `components`. It checks that `aria-expanded` changes to `true`, the open folder icon shows, and `button.tsx` is visible. |

[`FileTree.tailwind.stories.tsx`](../../../components/file-tree/src/FileTree.tailwind.stories.tsx) (title: `Docs/FileTree/Tailwind`) has the same `Base` and `TogglesFolder` stories for the Tailwind CSS version.

## Props

### `FileTree`

`FileTree` is a styled `YStack`. The exported type `FileTreeProps` has the stack props. It has `role="tree"`, a full width, `5xl` padding, an `lg` gap, a 1px `hairline` border, the `container` radius, and a `surface` background.

### `File`

The exported type is `FileProps`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `ReactNode` | Required | The file name. |
| `icon` | `ReactNode` | `File` icon | Replaces the default icon. |

### `Folder`

The exported type is `FolderProps`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `ReactNode` | Required | The folder name. |
| `children` | `ReactNode` | Required | The folder contents: `File` and `Folder` elements. |
| `defaultOpen` | `boolean` | `false` | Starts the folder open. |
| `icon` | `ReactNode` | `Folder` icon | Replaces the closed folder icon. |
| `openIcon` | `ReactNode` | `FolderOpen` icon | Replaces the icon shown while the folder is open. |

Icons come from `@cyclone-ui/icons`. The component sets the color of an icon element.

## Variants and states

- **Label:** The name uses the `code` font at size `md` and weight 200.
- **Color:** A row uses the `subtle` color. It uses `primary` while hovered, while its folder is open, and for all descendants of an open folder. Tests check these rules.
- **Hover:** A row background changes to `secondary-hovered`.
- **Open folder:** The caret rotates 90 degrees over 400ms. The children show in a group with a `hairline` left border.
- **Focus:** A folder row shows a 2px `primary-active` outline on `focus-visible`.

## Accessibility

- `FileTree` has `role="tree"`. Files and folder rows have `role="treeitem"`. The folder children are in a `role="group"` container. The wrapper around a folder has `role="none"`.
- A folder row has `tabIndex={0}` and `aria-expanded`.
- **Enter** and **Space** toggle a folder. The pointer also toggles it.
- The default icons and the caret have `aria-hidden`. The folder icon sits in an `aria-hidden` wrapper, so a custom folder icon is hidden too. A custom file `icon` is not wrapped, so set `aria-hidden` on it yourself.
- Files are not focusable. The source has no arrow-key navigation.

## Related

- [Icons](../icons/index.md)
- [Collapsible](./collapsible.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/file-tree/src/FileTree.tsx`](../../../components/file-tree/src/FileTree.tsx)
- [`components/file-tree/src/FileTree.spec.ts`](../../../components/file-tree/src/FileTree.spec.ts)
- [`components/file-tree/src/FileTree.stories.tsx`](../../../components/file-tree/src/FileTree.stories.tsx) (title: `Docs/FileTree`)
- [`components/file-tree/src/FileTree.tailwind.tsx`](../../../components/file-tree/src/FileTree.tailwind.tsx)
- [`components/file-tree/src/FileTree.tailwind.stories.tsx`](../../../components/file-tree/src/FileTree.tailwind.stories.tsx) (title: `Docs/FileTree/Tailwind`)
