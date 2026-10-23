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

import { ContextMenu } from "@cyclone-ui/context-menu";
import { Field } from "@cyclone-ui/field";
import { useFieldOptions, useFormControl } from "@cyclone-ui/helpers";
import { MagnifyingGlass } from "@cyclone-ui/icons";
import type {
  InputChangeEventHandler,
  InputValueProps
} from "@cyclone-ui/input";
import { Input, InputContext } from "@cyclone-ui/input";
import type { GetProps } from "@tamagui/core";
import { createStyledHOC, Theme, withStaticProperties } from "@tamagui/core";
import type { KeyboardEvent, MouseEvent, ReactNode } from "react";
import {
  createContext,
  use,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState
} from "react";
const EMPTY_SUGGESTIONS: readonly string[] = [];
const renderSuggestionText = (suggestion: string) => (
  <ContextMenu.Item.Text whiteSpace="nowrap">{suggestion}</ContextMenu.Item.Text>
);
// Inside a `Field`, a search input is clearable unless the field says otherwise.
const CLEARABLE_BY_DEFAULT = { defaults: { clearable: true } };

interface SearchInputContextValue {
  suggestions: readonly string[];
  filterSuggestions: boolean;
  renderSuggestion: (suggestion: string) => ReactNode;
  value: string;
}

const SearchInputContext = createContext<SearchInputContextValue>({
  suggestions: EMPTY_SUGGESTIONS,
  filterSuggestions: true,
  renderSuggestion: renderSuggestionText,
  value: ""
});

// Keeps focus in the text input when a suggestion is clicked.
const preventFocusLoss = (event: MouseEvent<HTMLElement>) =>
  event.preventDefault();

export interface SearchInputExtraProps {
  /** Values offered while the user types. Matching is case-insensitive. */
  suggestions?: readonly string[];

  /**
   * Only offer suggestions that contain the typed text. Turn it off when the
   * suggestions are already matched elsewhere, such as by a search API.
   *
   * @defaultValue true
   */
  filterSuggestions?: boolean;

  /**
   * Draws a suggestion's row in the popover, such as a title over details.
   *
   * @defaultValue the suggestion on one line
   */
  renderSuggestion?: (suggestion: string) => ReactNode;

  /** The controlled value. Inside a `Field`, the field's value is used. */
  value?: string;

  /** The initial value when uncontrolled and outside a `Field`. */
  defaultValue?: string;
}

type SearchInputGroupProps = Omit<
  GetProps<typeof Input>,
  "value" | "defaultValue"
> &
  SearchInputExtraProps;

const SearchInputGroup = createStyledHOC(
  Input,
  (
    {
      children,
      suggestions = EMPTY_SUGGESTIONS,
      filterSuggestions = true,
      renderSuggestion = renderSuggestionText,
      value: valueProp,
      defaultValue,
      onChange: onChangeProp,
      ...props
    }: SearchInputGroupProps,
    forwardedRef
  ) => {
    useFieldOptions(CLEARABLE_BY_DEFAULT);

    const formControl = useFormControl();
    const [localValue, setLocalValue] = useState(defaultValue ?? "");
    const value = valueProp ?? formControl?.formattedValue ?? localValue;

    // Same resolution as `Input`: an explicit `onChange` wins, otherwise the
    // enclosing field's. Uncontrolled outside a field, track the value here.
    const formOnChange = formControl?.onChange;
    const onChange = useCallback<InputChangeEventHandler>(
      event => {
        setLocalValue(event.detail);
        if (onChangeProp) {
          return onChangeProp(event);
        }

        formOnChange?.(event.detail);
      },
      [formOnChange, onChangeProp]
    );

    const contextValue = useMemo(
      () => ({ suggestions, filterSuggestions, renderSuggestion, value }),
      [suggestions, filterSuggestions, renderSuggestion, value]
    );

    return (
      <SearchInputContext value={contextValue}>
        <Input ref={forwardedRef} {...props} onChange={onChange}>
          {children}
        </Input>
      </SearchInputContext>
    );
  },
  { displayName: "SearchInput" }
);

type SearchInputTextBoxProps = GetProps<typeof Input.TextBox> &
  Partial<Pick<InputValueProps, "aria-label" | "placeholder">> & {
    /**
     * The icon shown at the start of the text box. Pass `null` to hide it.
     *
     * @defaultValue `<MagnifyingGlass />`
     */
    icon?: ReactNode;
  };

const SearchInputTextBox = createStyledHOC(
  Input.TextBox,
  (
    {
      children,
      "aria-label": ariaLabel,
      placeholder = "Search...",
      icon = <MagnifyingGlass />,
      ...props
    }: SearchInputTextBoxProps,
    forwardedRef
  ) => {
    const { disabled, size, onChange } = InputContext.useStyledContext();
    const { suggestions, filterSuggestions, renderSuggestion, value } =
      use(SearchInputContext);

    const listBoxId = `${useId()}-suggestions`;
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const normalizedValue = value.trim().toLocaleLowerCase();

    const filteredSuggestions = useMemo(
      () =>
        normalizedValue
          ? Array.from(new Set(suggestions)).filter(suggestion => {
              const normalizedSuggestion = suggestion.toLocaleLowerCase();

              return (
                (!filterSuggestions ||
                  normalizedSuggestion.includes(normalizedValue)) &&
                normalizedSuggestion !== normalizedValue
              );
            })
          : EMPTY_SUGGESTIONS,
      [filterSuggestions, normalizedValue, suggestions]
    );
    const isOpen = open && !disabled && filteredSuggestions.length > 0;
    const activeSuggestion = filteredSuggestions[activeIndex];

    const handleInput = useCallback((event: CustomEvent<string>) => {
      setOpen(Boolean(event.detail.trim()));
      setActiveIndex(-1);
    }, []);
    const handleOpenChange = useCallback((nextOpen: boolean) => {
      setOpen(nextOpen);
      if (!nextOpen) {
        setActiveIndex(-1);
      }
    }, []);
    const handleSelect = useCallback(
      (suggestion: string) => {
        onChange?.(new CustomEvent("change", { detail: suggestion }));
        setOpen(false);
        setActiveIndex(-1);
      },
      [onChange]
    );
    const handleKeyDown = useCallback(
      (event: unknown) => {
        const ke = event as KeyboardEvent<HTMLInputElement>;
        if (ke.key === "Escape") {
          setOpen(false);
          setActiveIndex(-1);
          return;
        }

        if (filteredSuggestions.length === 0) {
          return;
        }

        if (ke.key === "ArrowDown") {
          ke.preventDefault();
          setOpen(true);
          setActiveIndex(current =>
            current >= filteredSuggestions.length - 1 ? 0 : current + 1
          );
        } else if (ke.key === "ArrowUp") {
          ke.preventDefault();
          setOpen(true);
          setActiveIndex(current =>
            current <= 0 ? filteredSuggestions.length - 1 : current - 1
          );
        } else if (ke.key === "Enter" && isOpen && activeSuggestion) {
          ke.preventDefault();
          handleSelect(activeSuggestion);
        }
      },
      [activeSuggestion, filteredSuggestions.length, handleSelect, isOpen]
    );
    useEffect(() => {
      if (activeIndex >= 0) {
        globalThis.document
          ?.getElementById(`${listBoxId}-option-${activeIndex}`)
          ?.scrollIntoView({ block: "nearest" });
      }
    }, [activeIndex, listBoxId]);

    // The same menu as `Select.Items`, anchored to the text box. Focus stays
    // in the input, so the menu never adapts to a sheet.
    return (
      <ContextMenu
        size={size}
        placement="bottom"
        open={isOpen}
        onOpenChange={handleOpenChange}
        onValueChange={handleSelect}
        shouldAdapt={false}>
        <ContextMenu.Anchor asChild={true}>
          <Input.TextBox ref={forwardedRef} {...props}>
            {icon != null && (
              <Field.Icon position="start" controlSize={size}>
                {icon}
              </Field.Icon>
            )}

            <Input.TextBox.Value
              role="combobox"
              aria-autocomplete="list"
              aria-controls={isOpen ? listBoxId : undefined}
              aria-expanded={isOpen}
              aria-activedescendant={
                activeSuggestion
                  ? `${listBoxId}-option-${activeIndex}`
                  : undefined
              }
              aria-label={ariaLabel}
              placeholder={placeholder}
              value={value}
              onInput={handleInput}
              onKeyDown={handleKeyDown}
            />

            {children}
          </Input.TextBox>
        </ContextMenu.Anchor>

        {/* Keeps a validation theme on the field from tinting the options. */}
        <Theme name="base">
          <ContextMenu.Content
            disableFocusScope={true}
            // At least the text box's width, plus 4px on each side.
            minWidth="calc(var(--tamagui-popper-anchor-width) + 8px)">
            <ContextMenu.Content.ScrollView id={listBoxId} role="listbox">
              {filteredSuggestions.map((suggestion, index) => (
                <ContextMenu.Item
                  key={suggestion}
                  id={`${listBoxId}-option-${index}`}
                  role="option"
                  aria-selected={index === activeIndex}
                  tabIndex={-1}
                  value={suggestion}
                  highlighted={index === activeIndex}
                  onMouseDown={preventFocusLoss}>
                  {renderSuggestion(suggestion)}
                </ContextMenu.Item>
              ))}
            </ContextMenu.Content.ScrollView>
          </ContextMenu.Content>
        </Theme>
      </ContextMenu>
    );
  },
  { displayName: "SearchInput" }
);

/**
 * A search text input with an icon (a magnifying glass unless `icon` is set
 * on `SearchInput.TextBox`) and a popover of
 * suggestions (arrow keys to highlight, Enter to choose, Escape to dismiss).
 *
 * @remarks
 * Uncontrolled on its own (or controlled with `value`/`onChange`); wrap it in
 * a `Field` to connect it to a form, where it is clearable by default.
 */
export const SearchInput = withStaticProperties(SearchInputGroup, {
  TextBox: SearchInputTextBox,
  Trigger: Input.Trigger
});

export type SearchInputProps = GetProps<typeof SearchInput>;
