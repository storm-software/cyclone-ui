---
title: Components
description: Catalog of the Cyclone UI components, with a link to each component page.
documentType: reference
tags: [design-system, components]
---

# Components

Each folder in `components` is one package. You copy a component into your app with the [CLI](../../packages/cli.md). Icons live in the [icon gallery](../icons/index.md), not in this list.

The pages below describe the public parts and props. Choose a semantic token for color, space, and type. The token catalogs are in [Tokens](../tokens/index.md).

## Layout

| Component | Purpose |
| --- | --- |
| [Page](./page.md) | A Page layout compound component with Banner, TopNav (Start, Middle and End slots), SideNav, SideNavToggle, Main and Panel areas. |
| [Docs Page](./docs-page.md) | A DocsPage layout compound component for documentation and long-form reading, built on Page. |
| [Article Page](./article-page.md) | An ArticlePage layout compound component for blog posts and documentation articles. |
| [Container](./container.md) | A themed surface Container that wraps content in a padded, rounded box. |
| [Card](./card.md) | A themed card container with a gradient background and an optional accent color. |
| [Footer](./footer.md) | A responsive site footer with compound layout parts for an introduction, action, navigation sections, links, a bottom rail with brand, copyright and legal links, and a background logo. |
| [Navigation Header](./navigation-header.md) | A responsive site header made of Logo, Navigation, Actions and MenuButton slots. |
| [Scroll View](./scroll-view.md) | A scroll container built on Tamagui's ScrollView, with a thin themed scrollbar on web that is highlighted on hover. |
| [Divider](./divider.md) | A simple horizontal or vertical line used to separate content. |
| [Glitch Separator](./glitch-separator.md) | A decorative section divider that draws a ragged grid of seeded pseudo-random squares in SVG between a top and bottom color. |
| [Overlay](./overlay.md) | A full-bleed backdrop that partially obscures background content with a blurred, theme-tinted gradient that fades in and out on enter/exit. |

## Actions

| Component | Purpose |
| --- | --- |
| [Button](./button.md) | A pressable button with Button.Text and Button.Icon subcomponents and primary, secondary, tertiary, outlined, ghost, link and cascade hover variants. |
| [Next Button](./next-button.md) | A Button preset labeled "Next" by default, with a right-arrow icon that animates on hover. |
| [Previous Button](./previous-button.md) | A button with an animated left-arrow icon and a default "Previous" label. |
| [Like Button](./like-button.md) | A toggle button with a thumbs-up icon that can be controlled (liked, onLikedChange) or uncontrolled (defaultLiked), and has sm, md and lg sizes. |
| [Toggle](./toggle.md) | A clickable toggle that is either on or off, with several styles and sizes. |
| [Toggle Group](./toggle-group.md) | A clickable group of toggle components that exists in either an "on" or "off" state with various styles and sizes. |

## Forms

| Component | Purpose |
| --- | --- |
| [Form](./form.md) | A form root that renders a native form element and provides Cyclone UI form state through FormProvider. |
| [Field](./field.md) | A form field wrapper that connects a control to Cyclone UI form state and provides Field.Label, Field.Link, Field.Details, Field.Icon and Field.ThemeIcon parts. |
| [Input](./input.md) | A composable text input with Input.TextBox, Input.TextBox.Value, Input.Separator and Input.Trigger (with Icon and Text) subcomponents. |
| [Text Area](./text-area.md) | A multiline text input that renders a textarea with 3 rows by default and uses the same tokens as the Cyclone UI Input. |
| [Checkbox](./checkbox.md) | A themed checkbox built on the Tamagui Checkbox, showing a check or a minus indicator for the indeterminate state. |
| [Radio Group](./radio-group.md) | A RadioGroup compound component (RadioGroup.Item) built on Tamagui's radio group. |
| [Switch](./switch.md) | A toggle switch with an animated thumb, sm, md and lg sizes, and a disabled state. |
| [Select](./select.md) | A dropdown select with Select.TextBox, Select.TextBox.Value and Select.Items subcomponents. |
| [Slider](./slider.md) | A Material-style slider, built on the Tamagui Slider, for choosing a single value or, when given an array, a range. |
| [Number Input](./number-input.md) | A NumberInput built on Input that renders a type=number text box with decrease (minus) and increase (plus) buttons. |
| [Password Input](./password-input.md) | A password input with a show/hide toggle and a caps-lock warning. |
| [Search Input](./search-input.md) | A headless search text input with a magnifying-glass icon. |
| [Otp Input](./otp-input.md) | A one-time passcode input that renders one numeric input per digit (4 by default). |
| [Phone Number Input](./phone-number-input.md) | A headless phone number input built on Input that adds a searchable country-code picker with flags in a menu. |
| [Address Input](./address-input.md) | An address search field: a SearchInput whose suggestions come from an address search API endpoint (GET <endpoint>?q=<text> returning label/latitude/longitude options), with a map of the chosen address. |
| [Credit Card Input](./credit-card-input.md) | Credit card fields (card number, expiry date, security code and name on card) built on Input, with a card preview that follows what is entered. |
| [Date Picker](./date-picker.md) | A date input with a masked text box and a calendar popover that has day, month and year views. |
| [Time Picker](./time-picker.md) | A time input with a masked text box and a clock popover whose hand can be pressed or dragged to pick the hour and minutes. |
| [Calendar](./calendar.md) | A stand-alone calendar with day, month and year views that selects a single date or a start and end date range. |
| [Color Picker](./color-picker.md) | A color input with a swatch trigger that opens a popover to pick the color from an area, sliders, channel fields and preset swatches. |
| [Color Area](./color-area.md) | A 2D color picker, built on the React Stately color model, for selecting two channels of a color from a gradient area by dragging a thumb or using the keyboard. |
| [File Picker](./file-picker.md) | A file and image picker with a dashed drop zone that supports drag and drop on the web and the native document picker on mobile. |
| [Tag Picker](./tag-picker.md) | A TagPicker input that turns typed text into removable tags. |
| [Rating](./rating.md) | A row of icons, stars by default, for displaying or selecting a rating. |

## Feedback

| Component | Purpose |
| --- | --- |
| [Alert](./alert.md) | An inline alert banner with compound parts (Alert.Icon, Alert.Content.Heading, Alert.Content.Body, Alert.Close). |
| [Alert Dialog](./alert-dialog.md) | A modal alert dialog built on the Cyclone UI Dialog, with an overlay, a theme-based status icon, and compound Trigger, Container, Icon, Content (Heading, Body), Action and Close parts. |
| [Callout](./callout.md) | A highlighted content panel with a theme-colored gradient and diagonal pattern background. |
| [Message](./message.md) | A toast notification container built on Tamagui Toast that renders each queued toast as a dismissible Alert in the bottom-right corner. |
| [Validation Text](./validation-text.md) | A ValidationText component that shows field validation messages in caption text with an enter/exit animation. |
| [Feedback](./feedback.md) | A Feedback control that pairs a like toggle with a dislike toggle. |
| [Progress](./progress.md) | A themed progress bar built on the Tamagui Progress, with an animated indicator. |
| [Circular Progress](./circular-progress.md) | A circular progress indicator drawn with SVG on top of Tamagui's Progress primitive. |
| [Skeleton](./skeleton.md) | A skeleton component for loading states. |
| [Spinner](./spinner.md) | A Spinner component that renders the React Native ActivityIndicator inside a Tamagui YStack. |

## Overlays

| Component | Purpose |
| --- | --- |
| [Dialog](./dialog.md) | A modal Dialog compound component built on Tamagui's dialog, with Trigger, Portal, Overlay, Container, Heading, Body, Close and Action parts. |
| [Drawer](./drawer.md) | A side panel built on the Cyclone UI Sheet that slides in from the right by default and comes in sm, md and lg sizes. |
| [Sheet](./sheet.md) | A modal panel that slides in from the top, right, bottom or left edge. |
| [Popover](./popover.md) | A floating popover built on Tamagui Popover, with Popover.Trigger, Popover.Anchor, Popover.Content (with an optional arrow, a ScrollView and Close) parts. |
| [Tooltip](./tooltip.md) | A tooltip built on the Tamagui Tooltip with Trigger and Content parts. |
| [Context Menu](./context-menu.md) | A ContextMenu that shows a list of actions in a popover on large screens and a bottom sheet on small screens. |
| [Search Dialog](./search-dialog.md) | A search icon Button that opens a Dialog for searching the application, like the fumadocs search dialog. |

## Data display

| Component | Purpose |
| --- | --- |
| [Table](./table.md) | A Table compound component with Header, Body, Row, Cell, HeaderCell and Footer parts that render semantic table elements. |
| [Data Table](./data-table.md) | A data grid built on TanStack Table and the Cyclone UI Table that takes table options (columns and data) and adds sorting, faceted column filtering, client-side pagination with a configurable page size, optional row selection checkboxes and resizable columns. |
| [Badge](./badge.md) | A Badge that wraps an element and pins a small count or dot to one of its corners. |
| [Tag](./tag.md) | A compact label chip with Tag.Text and Tag.Icon subcomponents. |
| [Timeline](./timeline.md) | A Timeline that renders a list of events joined by a line, vertically or horizontally. |
| [Type Table](./type-table.md) | A documentation table that lists properties with their types. |
| [File Tree](./file-tree.md) | A FileTree component that renders a hierarchical file structure using File leaves and expandable Folder branches. |
| [Breadcrumb](./breadcrumb.md) | A breadcrumb trail of Breadcrumb.Item links followed by the current page name. |
| [Pagination](./pagination.md) | A page navigation bar with previous and next buttons, first and last page buttons, and a sliding window of page numbers with ellipses. |
| [Stepper](./stepper.md) | A multi-step wizard built on Tamagui Tabs with a vertical header list that marks completed and current steps with check icons, plus optional step numbers. |
| [Tabs](./tabs.md) | A tabbed interface with Header.Item triggers and Content.Item panels. |
| [Accordion](./accordion.md) | A collapsible Accordion compound component (Accordion.Item, Item.Header, Header.Heading, Item.Content) built on Tamagui's accordion. |
| [Collapsible](./collapsible.md) | A single disclosure panel built on Accordion, with Collapsible.Header and Collapsible.Content subcomponents and a chevron icon. |

## Charts

| Component | Purpose |
| --- | --- |
| [Chart](./chart.md) | Shared building blocks for the Cyclone UI chart packages, built on Recharts. |
| [Area Chart](./area-chart.md) | A composable area chart built on Recharts and the shared Cyclone chart parts. |
| [Bar Chart](./bar-chart.md) | A composable bar chart built on Recharts and the shared Cyclone chart parts. |
| [Line Chart](./line-chart.md) | A composable line chart built on Recharts and the shared Cyclone chart parts. |
| [Composed Chart](./composed-chart.md) | A composable chart that draws bars and lines on the same axes, built on Recharts and the shared Cyclone chart parts. |
| [Pie Chart](./pie-chart.md) | A composable pie and donut chart built on Recharts and the shared Cyclone chart parts. |
| [Radar Chart](./radar-chart.md) | A composable radar chart built on Recharts and the shared Cyclone chart parts. |
| [Radial Chart](./radial-chart.md) | A composable radial bar chart built on Recharts and the shared Cyclone chart parts. |
| [Sankey Chart](./sankey-chart.md) | A composable Sankey diagram built on Recharts and the shared Cyclone chart parts. |

## Text

| Component | Purpose |
| --- | --- |
| [Body Text](./body-text.md) | A themed paragraph text component built on Tamagui's SizableText that renders a p element using the body typography tokens. |
| [Heading Text](./heading-text.md) | Themed heading text components: HeadingHeroText, HeadingTitleText, HeadingLargeText, HeadingMediumText, HeadingSmallText and HeadingExtraSmallText. |
| [Eyebrow Text](./eyebrow-text.md) | An uppercase, muted heading (rendered as h5) that uses the eyebrow font. |
| [Link](./link.md) | A themed text link that renders an anchor with href and target on web and opens the URL with Linking on native. |
| [Link Text](./link-text.md) | A LinkText component that renders styled, interactive link text. |
| [Anchor](./anchor.md) | A heading wrapper that renders its children next to a permalink icon. |
| [Inline Code Text](./inline-code-text.md) | An inline span styled for short code snippets, using the code font with a subtle background, padding and rounded corners. |
| [Bytes Text](./bytes-text.md) | A BodyText-based text component that renders a numeric byte count as a human-readable size (such as 1.5 kB) using pretty-bytes. |
| [Number Text](./number-text.md) | A label-styled text component that renders its numeric children with NumberFlow, so changes in value are animated. |
| [Preview Link](./preview-link.md) | A Link with a dotted underline that shows a Tooltip with more details when hovered or focused. |

## Media and motion

| Component | Purpose |
| --- | --- |
| [Code Block](./code-block.md) | A figure that displays Shiki-highlighted code, with an optional title and icon, a copy-to-clipboard button, line numbers and a scrollable viewport. |
| [Package Command Code Block](./package-command-code-block.md) | A tabbed code block that shows the equivalent npm, pnpm, yarn and bun command for an ni-style command (install, run, exec, uninstall and others), each with a copy button. |
| [Pdf Document Display](./pdf-document-display.md) | Renders one page of a PDF from a URL or FileResult using react-pdf, with a spinner and PDF icon placeholder while loading or after an error. |
| [Themeable Icon](./themeable-icon.md) | An icon wrapper that applies size and color tokens to its child icon and animates when it enters or exits. |
| [Themeable Gradient](./themeable-gradient.md) | A ThemeableGradient component that renders a diagonal LinearGradient. |
| [Vectors](./vectors.md) | A set of custom themed SVG graphics for Tamagui, including status circles (alert, check, error, info, discovery), arrows in four directions, check, accordion toggle and binary on/off indicators, background patterns (noise, checkerboard, diagonal), a PDF icon and Storm logos. |
| [Confetti Burst](./confetti-burst.md) | An invisible anchor that bursts a ring of accent-colored confetti squares out of its position when its burst() handle is called. |
| [Redacted Animation](./redacted-animation.md) | A RedactedAnimation wrapper that briefly covers its children with an accent-colored mask, then slides the mask away to the left or right to reveal the content. |
| [Ripple Animation](./ripple-animation.md) | A RippleAnimation layer that fills its positioned parent and, when its ripple() handle is called with a press event, grows a fading circle out of the press point (or the center, for a keyboard press). |
| [Color Compositions](./color-compositions.md) | An animated display component reproducing Ellsworth Kelly's "Colors for a Large Wall" as a grid of colored panels. |

## Utilities

| Component | Purpose |
| --- | --- |
| [Visually Hidden](./visually-hidden.md) | A wrapper that hides its content visually but keeps it available to screen readers. |
| [Table Of Contents](./table-of-contents.md) | A page navigation list built from an array of heading items, each with a title, a hash URL and a depth. |

## Related pages

- [Design system overview](../index.md)
- [Icons](../icons/index.md)
- [Tokens](../tokens/index.md)
