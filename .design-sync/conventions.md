# Cyclone UI — conventions for building with this library

Cyclone UI is a Tamagui v3 (react-native-web) design system. Every component and layout primitive is on `window.CycloneUI`.

## 1. Wrap the app in the provider chain

Components read the Tamagui config and theme from context. Without `TamaguiProvider` nothing styles: you get `Can't find Tamagui configuration` or unstyled native elements. Without `PortalProvider`, `Dialog`, `Tooltip` and `Select` have nowhere to open. `SafeAreaProvider` goes outermost: `Page` and `NavigationHeader` read safe-area insets from it.

```jsx
const { SafeAreaProvider, TamaguiProvider, Theme, PortalProvider, tamaguiConfig } = window.CycloneUI;

<SafeAreaProvider>
  <TamaguiProvider config={tamaguiConfig} defaultTheme="dark">
    <Theme name="dark_base">
      <PortalProvider>{app}</PortalProvider>
    </Theme>
  </TamaguiProvider>
</SafeAreaProvider>
```

- Themes: `dark` / `light`, each with sub-themes `_base`, `_brand`, `_danger`, `_warning`, `_success`, `_info`, `_discovery`, `_positive`, `_negative` (e.g. `dark_brand`). Dark is the reference look.
- The page itself has no background. Put a surface behind content (`backgroundColor="surfaceCanvas"`), or text in the dark theme renders near-white on white.

## 2. Style with props, never CSS classes

There are no utility classes. Style through Tamagui props on components and on the layout primitives `YStack` (column), `XStack` (row) and `ZStack` (overlay). Token values are bare names, **without `$`** (Tamagui v3).

| Prop family | Real values |
| --- | --- |
| Color (`backgroundColor`, `color`, `borderColor`) | `surfaceCanvas`, `surfaceElevated`, `surfaceFloating`, `surfaceSunken`, `surfaceOverlay`, `inkBody`, `inkEmphasis`, `inkSubtle`, `inkSubtlest`, `accent`, `onAccent`, `muted`, `onMuted`, `hairline`, `link`, `background`, `color`, `borderColor` |
| Space (`padding`, `margin`, `gap`) | `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl` … `22xl`, `zero` |
| Radius (`borderRadius`) | `xs`, `sm`, `md`, `lg`, `xl`, `full`, `button`, `card`, `control`, `dialog`, `popover`, `tooltip` |

Component intent goes through two props:

- `theme`: `"brand" | "danger" | "warning" | "success" | "info" | "discovery" | "positive" | "negative"`.
- `variant`: Button takes `"primary" | "secondary" | "tertiary" | "outlined" | "ghost" | "link"`; Callout and Card take `"outlined" | "elevated" | "floating" | "sunken" | "glass"`, and more.

Typography: use `HeadingText` (and `HeadingHeroText`, `HeadingTitleText`, `HeadingLargeText`, `HeadingMediumText`, `HeadingSmallText`), `BodyText`, `LabelText`, `LinkText`. Don't set fonts by hand; the families are Storm Sans and Storm Serif.

## 3. Where the truth lives

- `components/<group>/<Name>/<Name>.d.ts`: the props contract. `<Name>.prompt.md`: the story examples, the best guide to composition.
- Compound components use dot sub-parts. Rules that change the render:
  - **Button labels go in `<Button.Text>`** and icons in `<Button.Icon>`. A bare string child renders in the browser default font, not Storm Sans.
  - Card: `Card.Header` holds `Card.Header.Icon` plus a `YStack gap="md"` of `Card.Header.Eyebrow` and `Card.Header.Heading`. Then `Card.Body` (pass plain text; it already renders a paragraph, so don't nest `BodyText`), then `Card.Footer` with `Card.Footer.Link`.
- `styles.css` carries only fonts and a CSS reset. All component styling is runtime Tamagui, driven by the props above.

## 4. Example

```jsx
const { YStack, XStack, Card, Button } = window.CycloneUI;

<YStack backgroundColor="surfaceCanvas" padding="xl" gap="lg">
  <Card width={480}>
    <Card.Header>
      <YStack gap="md">
        <Card.Header.Eyebrow>Billing</Card.Header.Eyebrow>
        <Card.Header.Heading>Upgrade your plan</Card.Header.Heading>
      </YStack>
    </Card.Header>
    <Card.Body>Unlock unlimited projects and priority support.</Card.Body>
  </Card>
  <XStack gap="sm">
    <Button theme="brand" variant="tertiary">
      <Button.Text>Upgrade</Button.Text>
    </Button>
    <Button variant="outlined">
      <Button.Text>Not now</Button.Text>
    </Button>
  </XStack>
</YStack>
```
