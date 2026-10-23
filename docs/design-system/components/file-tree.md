---
title: File Tree
description: A hierarchical file structure built from File leaves and expandable Folder branches, with ARIA tree roles and keyboard toggling.
documentType: reference
tags: [component, file-tree, docs, navigation]
---

# File Tree

`FileTree` shows a directory or project structure. You build it from `File` leaves and `Folder` branches. Folders open and close with an animation.

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

## Props

### `FileTree`

`FileTree` is a styled `YStack`. The exported type `FileTreeProps` has the stack props. It has `role="tree"`, a full width, a 1px `hairline` border, the `container` radius, and a `surface` background.

### `File`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `ReactNode` | Required | The file name. |
| `icon` | `ReactNode` | `File` icon | Replaces the default icon. |

### `Folder`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `ReactNode` | Required | The folder name. |
| `children` | `ReactNode` | Required | The folder contents: `File` and `Folder` elements. |
| `defaultOpen` | `boolean` | `false` | Starts the folder open. |
| `icon` | `ReactNode` | `Folder` icon | Replaces the closed folder icon. |
| `openIcon` | `ReactNode` | `FolderOpen` icon | Replaces the icon shown while the folder is open. |

Icons come from `@cyclone-ui/icons`. The component sets the icon color.

## Variants and states

- **Label:** The name uses the `code` font at size `lg`.
- **Color:** A row uses the `subtle` color. It uses `primary` while hovered, while its folder is open, and for all descendants of an open folder. Tests check these rules.
- **Hover:** A row background changes to `secondary-hovered`.
- **Open folder:** The caret rotates 90 degrees over 400ms. The children show in a group with a `hairline` left border.
- **Focus:** A folder row shows a 2px `primary-active` outline on `focus-visible`.

## Accessibility

- `FileTree` has `role="tree"`. Files and folder rows have `role="treeitem"`. The folder children are in a `role="group"` container.
- A folder row has `tabIndex={0}` and `aria-expanded`.
- **Enter** and **Space** toggle a folder. The pointer also toggles it.
- Icons have `aria-hidden`.
- Files are not focusable. The source has no arrow-key navigation.

## Related

- [Design tokens](../tokens/index.md)

## Source

- [`components/file-tree/src/FileTree.tsx`](../../../components/file-tree/src/FileTree.tsx)
- [`components/file-tree/src/FileTree.spec.ts`](../../../components/file-tree/src/FileTree.spec.ts)
- [`components/file-tree/src/FileTree.stories.tsx`](../../../components/file-tree/src/FileTree.stories.tsx)
