---
title: "@cyclone-ui/state"
description: Reference for the state package. It provides theme mode, toast messages, form and field state, and Jotai atom helpers.
documentType: reference
tags: [state, jotai, forms, theme, messages]
---

# @cyclone-ui/state

`@cyclone-ui/state` manages state for Cyclone UI applications. It is built on [Jotai](https://jotai.org) atoms and bunshi molecules.

Source: [`packages/state`](https://github.com/storm-software/cyclone-ui/tree/main/packages/state)

## Install

```bash
pnpm add @cyclone-ui/state
```

Peer dependencies: `jotai`, `react`, `react-dom`, and `react-native`. The package depends on `@cyclone-ui/helpers`, `@tamagui/core`, `@tamagui/toast`, `@maskito/core`, and `@maskito/react`.

The [CLI](./cli.md) adds `@cyclone-ui/state` to your `package.json` when you copy components that use it.

## Entry points

| Import path | Contents |
| --- | --- |
| `@cyclone-ui/state` | Atom helpers, molecule utilities, hooks, and the form API |
| `@cyclone-ui/state/theme` | Theme provider and hooks |
| `@cyclone-ui/state/client` | Re-exports `@cyclone-ui/state/theme` |
| `@cyclone-ui/state/message` | Toast messages |
| `@cyclone-ui/state/form` | Form and field providers, hooks, and validators |
| `@cyclone-ui/state/types` | Shared atom types |

## Theme

`ThemeProvider` keeps the color mode in state and passes it to Tamagui as `defaultTheme`.

```tsx
import { ThemeProvider, useThemeActions } from "@cyclone-ui/state/theme";
import config from "./tamagui.config";

export function Root({ children }: { children: React.ReactNode }) {
  return <ThemeProvider config={config}>{children}</ThemeProvider>;
}

export function ModeButton() {
  const { toggleMode } = useThemeActions();
  return <button onClick={() => toggleMode()}>Toggle theme</button>;
}
```

### `ThemeProvider` props

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `config` | Tamagui config | Required | The Tamagui configuration |
| `defaultMode` | `"light" \| "dark"` | `"dark"` | The mode used when the browser sets no preference |
| `items` | `ColorThemeMode[]` | `["light", "dark"]` | The available modes |
| `disableInjectCSS` | `boolean` | `true` | Passed to `TamaguiProvider` |

`ThemeProvider` also accepts the other `TamaguiProviderProps`, except `defaultTheme`. On the web, it reads the `prefers-color-scheme` media query first.

### Theme hooks and helpers

| Export | Purpose |
| --- | --- |
| `useThemeActions(options?)` | Returns `changeMode(mode)`, `toggleMode()`, and `reset()`. |
| `useThemeMode(options?)` | Returns the current mode. |
| `useColorThemeName()` | Returns the color theme name of the current Tamagui theme, or `undefined`. |
| `useColorThemeNameExists()` | `true` when the current theme has a color theme name. |
| `getThemeColorThemeName(theme)` | Returns the color theme name for a theme name. |
| `themeColorThemeNameExists(theme)` | `true` when the theme name has a color theme. |
| `ThemeApi` | The theme molecule API. |

Types: `ColorThemeMode` (`"light" | "dark"`), `ColorThemeName` (`base`, `brand`, `discovery`, `info`, `warning`, `danger`, `success`, `positive`, `negative`), `ThemeOptions`, `ThemeBaseState`, `ThemeProviderProps`.

## Messages

Messages use `@tamagui/toast`. Mount `MessageViewport` once. Then call `useMessageActions` from any component.

```tsx
import {
  MessageProvider,
  MessageViewport,
  useMessageActions
} from "@cyclone-ui/state/message";

function SaveButton() {
  const { showSuccess } = useMessageActions();
  return <button onClick={() => showSuccess("Saved")}>Save</button>;
}

export const App = () => (
  <MessageProvider>
    <SaveButton />
    <MessageViewport />
  </MessageProvider>
);
```

`MessageProvider` is a compatibility wrapper. Toasts use a global store, so `useMessageActions` does not need it.

### `useMessageActions()`

| Method | Purpose |
| --- | --- |
| `show(message, options?)` | Shows a toast. `options.type` selects the toast kind. |
| `showInfo`, `showSuccess`, `showWarning`, `showError`, `showHelp` | Show a toast of one kind. |
| `hide()` | Dismisses the toast. |

Options (`MessageOptions`): the `MessageDetails` fields from `@stryke/types/messages`, plus `heading` and `eyebrow`. With a `heading`, the heading is the title and the message is the description.

### `MessageViewport` props

It accepts the Tamagui `ToastRootProps`, plus `label`.

| Prop | Default |
| --- | --- |
| `label` | `"Storm Messages"` |
| `duration` | `30000` ms |
| `position` | `"top-right"` |
| `swipeDirection` | `"horizontal"` |
| `swipeThreshold` | `50` |

The module also re-exports `Toast`, `toast`, `ExternalToast`, and `ToastRootProps` from `@tamagui/toast`. Helper functions `getDefaultEyebrowByType` and `getThemeByType` map a message type to a label and a color theme.

## Forms

The form API has two layers. A `FormProvider` holds form state. A `FieldProvider` inside it holds the state of one field. Controls read field state through [`@cyclone-ui/helpers`](./helpers.md).

```tsx
import { FieldProvider, FormProvider, requiredValidator } from "@cyclone-ui/state/form";

export const SignUp = ({ children }: { children: React.ReactNode }) => (
  <FormProvider
    name="sign-up"
    initialValues={{ email: "" }}
    onSubmit={({ get }) => {
      // Read atoms with get(...) and send the values.
    }}>
    <FieldProvider name="email" validate={{ onBlur: [requiredValidator] }}>
      {children}
    </FieldProvider>
  </FormProvider>
);
```

### `FormProvider` options

| Option | Type | Default | Purpose |
| --- | --- | --- | --- |
| `name` | `string` | Required | The form scope name |
| `theme` | `string` | Current Tamagui theme | The form theme |
| `disabled` | `boolean` | `false` | Disables the form |
| `initialValues` | object | | The initial values |
| `validate` | `onInitialize`, `onChange`, `onBlur`, `onSubmit`, `onServer` lists of `Validator` | | Validators for each cause |
| `debounceMs` | `number` | `250` | Debounce for change events and validation |
| `isEqual` | function | Deep equality | Compares two sets of values |
| `defaultFieldOptions` | `FieldOptions` | | Defaults for all fields |
| `onInitialize`, `onChange`, `onSubmit` | callback | | Receive `{ get, set, atoms }` |

### `FieldProvider` options

| Option | Type | Default | Purpose |
| --- | --- | --- | --- |
| `name` | `string` | Required | The field name |
| `theme` | `string` | | The field theme |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | The control size |
| `required`, `disabled`, `clearable` | `boolean` | `false` | Field flags |
| `items` | `{ name, value, ... }[]` | | Options for select-like fields |
| `validate` | lists of `Validator` | | Validators for each cause |
| `showErrorsBeforeBlur` | `boolean` | `false` | Show errors while the user types |
| `debounceMs` | `number` | `250` | Debounce for change events and validation |
| `isEqual` | function | Deep equality | Compares two values |
| `mask` | `MaskitoOptions` | | Input mask from Maskito |
| `format`, `parse` | function | | Convert the value to and from display text |
| `onInitialize`, `onFocus`, `onBlur`, `onChange`, `onSubmit` | callback | | Receive `{ get, set, atoms }` |

### Validation

A `Validator` receives `(value, previousValue, cause, get, set)` and returns a list of message details (it can return a promise). A cause is `"initialize"`, `"change"`, `"blur"`, `"submit"`, or `"server"`. The `ValidationCause` constant lists them. `"server"` is for server-side rendering and static generation. It must not run side effects.

`requiredValidator` returns an error `"This field is required"` for an empty value or an empty array.

### Form exports

| Export | Purpose |
| --- | --- |
| `FormApi`, `FieldApi` | Molecule APIs. Use `FormApi.use()` and `FieldApi.use()` to read atoms. |
| `DEFAULT_FORM_OPTIONS`, `DEFAULT_FIELD_OPTIONS` | Default option values |
| `useFormActions()` | Returns `initializeField`, `uninitializeField`, `validate`, `change`, `submit`, and `reset` |
| `useFieldActions()` | Returns `mount`, `initialize`, `change`, `focus`, `blur`, `setFocused`, `toggleFocused`, `validate`, and `reset` |
| `useFieldRef(forwardedRef?)` | Returns an input ref that applies the field mask and merges your ref |
| `atomWithFieldStatus`, `atomWithFieldItems` | Field atoms |
| `getMessageType`, `atomWithMessages`, `atomWithMessageTypes`, `atomWithFieldsMessageList`, `atomWithFieldsMessageTypes`, `getFieldsMessageList`, `getFieldsMessageTypes`, `atomWithTheme` | Message atoms for forms |
| `AbortError`, `isValidationResults` | Utilities |

> [!NOTE]
> In `useFormActions`, `reset` and the field registration functions are not fully implemented in the source. Check the source before you rely on them.

## Atom helpers

The root entry point exports Jotai atom factories.

| Helper | Purpose |
| --- | --- |
| `atomWithBroadcast` | An atom that shares its value with other tabs through the BroadcastChannel API |
| `atomWithWebStorage`, `createWebStorage`, `getWebStorage` | An atom that persists to web storage |
| `atomWithCompare(initial, areEqual)` | An atom that keeps the previous value when `areEqual` returns `true` |
| `atomWithDebounce(initial, debounceMs = 500, shouldDebounceOnReset = false)` | Returns `currentValueAtom`, `debouncedValueAtom`, `isDebouncingAtom`, and `clearTimeoutAtom` |
| `atomWithEffect`, `useAtomEffect` | Run a side effect from an atom or a hook |
| `atomWithListeners` | Returns `[atom, useListener]`. `useListener(callback)` runs the callback after each write. |
| `atomWithPending` | An atom that always returns a pending promise |
| `atomWithRefresh`, `atomWithRefreshAndDefault` | Refreshable derived atoms |
| `atomWithToggle(initial?)` | A boolean atom. Write `undefined` to flip it. |
| `atomWithWrapper`, `atomWithPassThrough` | Atoms that allow functions as values |
| `setAtomDebugLabel`, `setAtomDebugPrivate` | Debug helpers |
| `isAtom`, `isWritableAtom`, `isResetAtom`, `debounce` | Type guards and a debounce function |

Molecule utilities: `createMoleculeApi`, `createScope`, `DEFAULT_SCOPE`, `useSyncMolecule`, `useHydrateMolecule`, `usePrepareAtoms`. `createMoleculeApi(constructFn, options)` returns a `Provider`, `useMolecule`, and a `use` hook that gives `get`, `set`, and `reset` accessors for each atom.

## Tests

This package has no test files.

## Related pages

- [Package map](./index.md)
- [@cyclone-ui/helpers](./helpers.md)
