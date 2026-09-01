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

import type { InputValueProps } from "@cyclone-ui/input";
import { InputField } from "@cyclone-ui/input-field";
import { Popover } from "@cyclone-ui/popover";
import { FieldApi, useFieldActions } from "@cyclone-ui/state/form";
import { Text, View, withStaticProperties } from "@tamagui/core";
import { Search } from "@tamagui/lucide-icons-2";
import type { JSX, KeyboardEvent, MouseEvent } from "react";
import {
  createContext,
  use,
  useCallback,
  useId,
  useMemo,
  useState
} from "react";

const EMPTY_SUGGESTIONS: readonly string[] = [];
const SearchInputFieldContext =
  createContext<readonly string[]>(EMPTY_SUGGESTIONS);

export interface SearchInputFieldExtraProps {
  /** Values offered while the user types. Matching is case-insensitive. */
  suggestions?: readonly string[];
}

type Styleable = <TProps>(
  component: (props: TProps, forwardedRef: any) => JSX.Element
) => any;

interface SearchInputFieldGroupProps extends SearchInputFieldExtraProps {
  children?: React.ReactNode;
  [key: string]: any;
}

const styleableInputField = InputField.styleable as Styleable;

const SearchInputFieldGroup = styleableInputField<SearchInputFieldExtraProps>(
  (
    {
      children,
      clearable = true,
      suggestions = EMPTY_SUGGESTIONS,
      ...props
    }: SearchInputFieldGroupProps,
    forwardedRef: any
  ) => {
    return (
      <SearchInputFieldContext.Provider value={suggestions}>
        <InputField ref={forwardedRef} {...props} clearable={clearable}>
          {children}
        </InputField>
      </SearchInputFieldContext.Provider>
    );
  }
);

interface SearchInputFieldLabelProps {
  children?: React.ReactNode;
  hideOptional?: boolean;
  [key: string]: any;
}

const styleableInputFieldLabel = InputField.Label.styleable as Styleable;

const SearchInputFieldLabel =
  styleableInputFieldLabel<SearchInputFieldLabelProps>(
    ({ children, hideOptional = true, ...props }, forwardedRef: any) => {
      return (
        <InputField.Label
          ref={forwardedRef}
          hideOptional={hideOptional}
          {...props}>
          {children}
        </InputField.Label>
      );
    }
  );

interface SearchInputFieldControlProps {
  children?: React.ReactNode;
  [key: string]: any;
}

const styleableInputFieldControl = InputField.Control.styleable as Styleable;

const SearchInputFieldControl =
  styleableInputFieldControl<SearchInputFieldControlProps>(
    ({ children, ...props }, forwardedRef: any) => {
      return (
        <InputField.Control ref={forwardedRef} {...props}>
          {children}
        </InputField.Control>
      );
    }
  );

const styleableInputFieldTextBox = InputField.Control.TextBox
  .styleable as Styleable;

interface SearchInputFieldControlTextBoxProps extends Partial<
  Pick<InputValueProps, "placeholder">
> {
  children?: React.ReactNode;
  [key: string]: any;
}

const SearchInputFieldControlTextBox =
  styleableInputFieldTextBox<SearchInputFieldControlTextBoxProps>(
    (
      { children, placeholder = "Search...", ...props },
      forwardedRef: any
    ): JSX.Element => {
      const field = FieldApi.use();
      const disabled = field.disabled.get();
      const value = field.formattedValue.get();
      const suggestions = use(SearchInputFieldContext);
      const { change } = useFieldActions<string>();
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
                  normalizedSuggestion.includes(normalizedValue) &&
                  normalizedSuggestion !== normalizedValue
                );
              })
            : EMPTY_SUGGESTIONS,
        [normalizedValue, suggestions]
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
          void change(suggestion);
          setOpen(false);
          setActiveIndex(-1);
        },
        [change]
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
      const preserveInputFocus = useCallback(
        (event: MouseEvent<HTMLElement>) => event.preventDefault(),
        []
      );

      return (
        <Popover
          open={isOpen}
          onOpenChange={handleOpenChange}
          placement="bottom-start"
          shouldAdapt={false}>
          <Popover.Anchor asChild={true}>
            <InputField.Control.TextBox ref={forwardedRef} {...props}>
              <InputField.Icon position="start">
                <Search />
              </InputField.Icon>

              <InputField.Control.TextBox.Value
                role="combobox"
                aria-autocomplete="list"
                aria-controls={isOpen ? listBoxId : undefined}
                aria-expanded={isOpen}
                aria-activedescendant={
                  activeSuggestion
                    ? `${listBoxId}-option-${activeIndex}`
                    : undefined
                }
                placeholder={placeholder}
                onInput={handleInput}
                onKeyDown={handleKeyDown as InputValueProps["onKeyDown"]}
              />

              {children}
            </InputField.Control.TextBox>
          </Popover.Anchor>

          <Popover.Content
            hasArrow={false}
            disableFocusScope={true}
            minWidth="$20xl"
            paddingHorizontal="$4xl">
            <Popover.Content.ScrollView maxHeight="$36xl">
              <View asChild={true} gap="$xxs" width="100%">
                <div id={listBoxId} role="listbox">
                  {filteredSuggestions.map((suggestion, index) => (
                    <View
                      key={suggestion}
                      id={`${listBoxId}-option-${index}`}
                      role="option"
                      aria-selected={index === activeIndex}
                      cursor="pointer"
                      width="100%"
                      minHeight="$8xl"
                      padding="$xs"
                      paddingHorizontal="$2xl"
                      borderWidth={1}
                      borderColor={
                        index === activeIndex ? "$border" : "transparent"
                      }
                      borderRadius="$button"
                      backgroundColor={
                        index === activeIndex
                          ? "$backgroundFloatingPressed"
                          : "transparent"
                      }
                      hoverStyle={{
                        backgroundColor: "$backgroundFloatingHover"
                      }}
                      alignItems="center"
                      justifyContent="center"
                      onMouseDown={preserveInputFocus}
                      onPress={() => handleSelect(suggestion)}>
                      <Text textTransform="none">{suggestion}</Text>
                    </View>
                  ))}
                </div>
              </View>
            </Popover.Content.ScrollView>
          </Popover.Content>
        </Popover>
      );
    }
  );

export const SearchInputField = withStaticProperties(SearchInputFieldGroup, {
  Label: SearchInputFieldLabel,
  Control: withStaticProperties(SearchInputFieldControl, {
    TextBox: SearchInputFieldControlTextBox,
    Trigger: InputField.Control.Trigger
  }),
  Details: InputField.Details,
  Icon: InputField.Icon
});
