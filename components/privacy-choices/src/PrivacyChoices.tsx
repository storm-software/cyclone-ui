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

"use client";

import { BodyText } from "@cyclone-ui/body-text";
import { Button } from "@cyclone-ui/button";
import { Dialog } from "@cyclone-ui/dialog";
import { HeadingSmallText } from "@cyclone-ui/heading-text";
import { Close } from "@cyclone-ui/icons";
import { ScrollView } from "@cyclone-ui/scroll-view";
import { Switch } from "@cyclone-ui/switch";
import { Tabs } from "@cyclone-ui/tabs";
import type { GetProps, TamaguiWebElement } from "@tamagui/core";
import { createStyledHOC, styled, View } from "@tamagui/core";
import { useControllableState } from "@tamagui/use-controllable-state";
import type { ReactNode } from "react";
import { useCallback, useId, useRef, useState } from "react";
import { Path, Svg } from "react-native-svg";

export interface PrivacyChoicesCategory {
  /** The key of this category in the choices. */
  id: string;

  /** The name shown in the list of categories, such as "Functional Cookies". */
  label: string;

  /** What the category is used for. */
  description: ReactNode;

  /**
   * The category can't be turned off (such as strictly necessary cookies),
   * so it is shown as "Always Active" instead of with a switch.
   */
  required?: boolean;
}

/**
 * Whether each category is allowed, by `id`. A category left out is allowed,
 * since these choices opt out of sharing.
 */
export type PrivacyChoicesValue = Record<string, boolean>;

export interface PrivacyChoicesExtraProps {
  /** The categories that can be turned on or off, in the order listed. */
  categories: PrivacyChoicesCategory[];

  /** The overview shown before the categories, such as the user's rights. */
  description: ReactNode;

  /** The confirmed choices. */
  value?: PrivacyChoicesValue;

  /** The choices before the user confirms any. */
  defaultValue?: PrivacyChoicesValue;

  /**
   * Called with every category's choice when the user confirms their choices
   * or rejects all but the required categories. Save them here.
   */
  onValueChange?: (value: PrivacyChoicesValue) => void;

  /**
   * The text of the trigger, and the heading of the dialog and overview.
   *
   * @defaultValue "Privacy Choices"
   */
  headerLabel?: string;

  /**
   * The text of the trigger button. If `null`, the trigger button text is not shown.
   *
   * @defaultValue `headerLabel`
   */
  triggerLabel?: string | null;

  /** @defaultValue "Confirm My Choices" */
  confirmLabel?: string;

  /** @defaultValue "Reject All But Necessary" */
  rejectLabel?: string;

  /** @defaultValue "Always Active" */
  requiredLabel?: string;
}

export type PrivacyChoicesProps = GetProps<typeof Button> &
  PrivacyChoicesExtraProps;

const OVERVIEW = "privacy-choices-overview";
const EMPTY_VALUE: PrivacyChoicesValue = {};

/** Every category's choice, with required ones always on. */
const resolveChoices = (
  categories: PrivacyChoicesCategory[],
  value: PrivacyChoicesValue,
  allowed = (category: PrivacyChoicesCategory) => value[category.id] ?? true
): PrivacyChoicesValue =>
  Object.fromEntries(
    categories.map(category => [
      category.id,
      Boolean(category.required) || allowed(category)
    ])
  );

/**
 * The California "Privacy Options" icon that marks opt-out links. Its blue is
 * part of the standard icon, so it isn't themed.
 */
const privacyOptionsIcon = (
  <Svg width={34} height={16} viewBox="0 0 30 14">
    <Path
      fill="#fff"
      d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z"
    />
    <Path
      fill="#06f"
      d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z"
    />
    <Path
      fill="#fff"
      d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z"
    />
    <Path
      fill="#06f"
      d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z"
    />
  </Svg>
);

const PrivacyChoicesHeader = styled(View, {
  displayName: "PrivacyChoicesHeader",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "3xl",
  paddingVertical: "2xl",
  paddingLeft: "5xl max-sm:3xl",
  paddingRight: "2xl",
  borderBottomWidth: 1,
  borderBottomColor: "hairline"
});

const PrivacyChoicesPanel = styled(View, {
  displayName: "PrivacyChoicesPanel",
  // Fades and rises in when its tab is selected, since only the active tab is
  // mounted. The `enter` key keeps a restyle during the fade from snapping it.
  transition: { duration: "250ms", enter: "250ms" },
  opacity: "enter:0",
  y: "enter:12px",
  gap: "3xl",
  padding: "5xl max-sm:3xl"
});

const PrivacyChoicesActions = styled(View, {
  displayName: "PrivacyChoicesActions",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "3xl",
  padding: "5xl max-sm:3xl",
  borderTopWidth: 1,
  borderTopColor: "hairline"
});

export const PrivacyChoices = createStyledHOC(
  Button,
  (
    {
      categories,
      description,
      value,
      defaultValue = EMPTY_VALUE,
      onValueChange,
      headerLabel = "Privacy Choices",
      triggerLabel = headerLabel,
      confirmLabel = "Confirm My Choices",
      rejectLabel = "Reject All But Necessary",
      requiredLabel = "Always Active",
      ...props
    }: PrivacyChoicesProps,
    forwardedRef
  ) => {
    const id = useId();
    const [choices, setChoices] = useControllableState({
      prop: value,
      defaultProp: defaultValue,
      onChange: onValueChange
    });

    // Changes stay a draft until confirmed, and are dropped when the dialog
    // closes any other way.
    const [open, setOpen] = useState(false);
    const [draft, setDraft] = useState(() =>
      resolveChoices(categories, choices)
    );
    const handleOpenChange = (next: boolean) => {
      if (next) {
        setDraft(resolveChoices(categories, choices));
      }
      setOpen(next);
    };

    // Animates the dialog's height as tabs change: the frame follows the tabs'
    // height, written straight to the DOM in the observer callback (after
    // layout, before paint) so it never chases a Tamagui tween. Its overflow
    // also clips the panels' rise, which would otherwise flash a scroll bar.
    const contentRef = useRef<TamaguiWebElement>(null);
    const followContentHeight = useCallback(
      (frame: TamaguiWebElement | null) => {
        const content = contentRef.current;
        if (!frame || !content || typeof ResizeObserver === "undefined") {
          return;
        }

        const updateHeight = () => {
          frame.style.height = `${content.offsetHeight}px`;
        };
        updateHeight();
        // Set after the first height, so the dialog never animates in on open.
        frame.style.transition = "height 250ms ease-out";

        const resizeObserver = new ResizeObserver(updateHeight);
        resizeObserver.observe(content);

        return () => resizeObserver.disconnect();
      },
      []
    );

    return (
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <Dialog.Trigger asChild={true}>
          <Button
            ref={forwardedRef}
            variant="link"
            flexGrow={0}
            tight={true}
            gap="xl"
            {...props}>
            {privacyOptionsIcon}
            <Button.Text>{triggerLabel}</Button.Text>
          </Button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay key="overlay" />
          <Dialog.Container
            key="content"
            maxWidth={880}
            maxHeight="85vh"
            flexGrow={1}
            padding={0}
            borderColor="hairline"
            style={{ color: "var(--primary)" }}>
            <PrivacyChoicesHeader>
              <Dialog.Heading fontSize="xl" lineHeight="xl" flexShrink={1}>
                {headerLabel}
              </Dialog.Heading>
              <Button
                aria-label="Close"
                tooltip="Close"
                variant="ghost"
                circular={true}
                flexGrow={0}
                onPress={() => setOpen(false)}>
                <Button.Icon>
                  <Close color="currentColor" />
                </Button.Icon>
              </Button>
            </PrivacyChoicesHeader>

            {/* The header and actions stay in view while the categories and
                panels scroll, so the dialog fits on small screens. Sized to
                its content; `flex={1}` would collapse it to zero because the
                dialog only has a `maxHeight`. */}
            <ScrollView
              flexShrink={1}
              size="lg"
              style={{ scrollbarGutter: "auto" }}>
              <View ref={followContentHeight} overflow="hidden">
                <View ref={contentRef}>
                  <Tabs
                    orientation="vertical"
                    tabStyle="tabbed"
                    bordered={false}
                    height="auto"
                    // The category list sits above the panel on small screens.
                    flexDirection="row max-sm:column">
                    <Tabs.Header flexBasis="280px max-sm:auto" flexShrink={0}>
                      <Tabs.Header.Item value={OVERVIEW}>
                        {headerLabel}
                      </Tabs.Header.Item>
                      {categories.map(category => (
                        <Tabs.Header.Item key={category.id} value={category.id}>
                          {category.label}
                        </Tabs.Header.Item>
                      ))}
                    </Tabs.Header>

                    <Tabs.Content
                      flexGrow={1}
                      flexShrink={1}
                      // A zero basis collapses the panel once the tabs stack.
                      flexBasis="0px max-sm:auto"
                      minWidth={0}>
                      <Tabs.Content.Item value={OVERVIEW}>
                        <PrivacyChoicesPanel>
                          <BodyText color="ink">{description}</BodyText>
                        </PrivacyChoicesPanel>
                      </Tabs.Content.Item>

                      {categories.map(category => {
                        const switchId = `${id}-${category.id}`;

                        return (
                          <Tabs.Content.Item
                            key={category.id}
                            value={category.id}>
                            <PrivacyChoicesPanel>
                              <View
                                flexDirection="row"
                                alignItems="center"
                                justifyContent="space-between"
                                gap="3xl">
                                <HeadingSmallText
                                  id={`${switchId}-label`}
                                  color="primary">
                                  {category.label}
                                </HeadingSmallText>
                                {category.required ? (
                                  <BodyText
                                    color="emphasis"
                                    fontWeight="semibold">
                                    {requiredLabel}
                                  </BodyText>
                                ) : (
                                  <Switch
                                    name={switchId}
                                    aria-labelledby={`${switchId}-label`}
                                    checked={draft[category.id]}
                                    onCheckedChange={checked =>
                                      setDraft(current => ({
                                        ...current,
                                        [category.id]: checked
                                      }))
                                    }
                                  />
                                )}
                              </View>
                              <BodyText color="ink">
                                {category.description}
                              </BodyText>
                            </PrivacyChoicesPanel>
                          </Tabs.Content.Item>
                        );
                      })}
                    </Tabs.Content>
                  </Tabs>
                </View>
              </View>
            </ScrollView>

            <PrivacyChoicesActions>
              <Dialog.Action
                // Tamagui's close button otherwise names itself "Dialog Close".
                aria-label={confirmLabel}
                flexGrow={1}
                onPress={() => setChoices(draft)}>
                <Dialog.Action.Text>{confirmLabel}</Dialog.Action.Text>
              </Dialog.Action>
              <Dialog.Close
                aria-label={rejectLabel}
                flexGrow={1}
                onPress={() =>
                  setChoices(resolveChoices(categories, choices, () => false))
                }>
                <Dialog.Close.Text>{rejectLabel}</Dialog.Close.Text>
              </Dialog.Close>
            </PrivacyChoicesActions>
          </Dialog.Container>
        </Dialog.Portal>
      </Dialog>
    );
  },
  {
    displayName: "PrivacyChoices"
  }
);
