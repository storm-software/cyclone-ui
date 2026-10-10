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

import { BodyText } from "@cyclone-ui/body-text";
import { Field } from "@cyclone-ui/field";
import type { FormControlSize } from "@cyclone-ui/helpers";
import {
  formSizeVariants,
  useFieldOptions,
  useFormControl
} from "@cyclone-ui/helpers";
import { CaretDown, CaretUp, MagnifyingGlass } from "@cyclone-ui/icons";
import type {
  InputChangeEventHandler,
  InputValueProps
} from "@cyclone-ui/input";
import { Input, InputContext } from "@cyclone-ui/input";
import { Popover } from "@cyclone-ui/popover";
import { getSelectContentSize } from "@cyclone-ui/select";
import type { GetProps } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  Theme,
  View,
  withStaticProperties
} from "@tamagui/core";
import { LinearGradient } from "@tamagui/linear-gradient";
import type { KeyboardEvent, MouseEvent } from "react";
import {
  createContext,
  use,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";
const EMPTY_SUGGESTIONS: readonly string[] = [];
// Inside a `Field`, a search input is clearable unless the field says otherwise.
const CLEARABLE_BY_DEFAULT = { defaults: { clearable: true } };

interface SearchInputContextValue {
  suggestions: readonly string[];
  value: string;
}

const SearchInputContext = createContext<SearchInputContextValue>({
  suggestions: EMPTY_SUGGESTIONS,
  value: ""
});

// The suggestions popover mirrors `Select.Items` (see `SelectItems.tsx` in
// `@cyclone-ui/select`) and shares its size metrics, so both menus look the
// same. Tamagui's `Select` parts need a `Select` root, so they can't be reused
// for a combobox that keeps focus in its text input.
const SUGGESTIONS_VIEWPORT_PADDING = 10;
const SUGGESTIONS_ATTRIBUTE = "data-search-input-field-suggestions";
const SUGGESTIONS_STYLES = `
[${SUGGESTIONS_ATTRIBUTE}] {
  scrollbar-width: none;
  overscroll-behavior: contain;
}

[${SUGGESTIONS_ATTRIBUTE}]::-webkit-scrollbar {
  display: none;
}
`;

const SuggestionFrame = styled(View, {
  displayName: "SearchInput",
  transition: "200ms",
  cursor: "pointer",
  position: "relative",
  justifyContent: "center",
  width: "100%",
  borderRadius: "button",
  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((val: FormControlSize) => {
        const { itemFramePaddingHorizontal, itemPaddingVertical } =
          getSelectContentSize(val);

        return {
          paddingHorizontal: itemFramePaddingHorizontal,
          paddingVertical: itemPaddingVertical
        };
      })
    )
  } as const,
  defaultVariants: {
    size: "md"
  }
});

const SuggestionBackground = styled(View, {
  displayName: "SearchInput",
  transition: "200ms",
  position: "absolute",
  left: 0,
  right: 0,
  borderRadius: "button",
  backgroundColor: "transparent group-hover/item:surfaceOverlayHover",
  pointerEvents: "none",
  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((val: FormControlSize) => {
        const inset = getSelectContentSize(val).itemPaddingVertical;

        return { top: inset, bottom: inset };
      })
    ),

    // The keyboard-highlighted option, matching a focused `Select` item.
    active: {
      true: {
        backgroundColor: "surfaceOverlayHover"
      }
    }
  } as const,
  defaultVariants: {
    size: "md",
    active: false
  }
});

const SuggestionDivider = styled(View, {
  displayName: "SearchInput",
  position: "absolute",
  bottom: 0,
  pointerEvents: "none",
  borderBottomWidth: 1,
  borderBottomColor: "hairline",
  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((val: FormControlSize) => {
        const inset = getSelectContentSize(val).dividerInset;

        return { left: inset, right: inset };
      })
    )
  } as const,
  defaultVariants: {
    size: "md"
  }
});

const SuggestionGroup = styled(View, {
  displayName: "SearchInput",
  position: "relative",
  flexDirection: "row",
  alignItems: "center",
  cursor: "inherit",
  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((val: FormControlSize) => {
        const { lineHeight, itemPaddingHorizontal } = getSelectContentSize(val);

        return {
          minHeight: lineHeight,
          paddingHorizontal: itemPaddingHorizontal
        };
      })
    )
  } as const,
  defaultVariants: {
    size: "md"
  }
});

const SuggestionText = styled(BodyText, {
  displayName: "SearchInput",
  flex: 1,
  cursor: "inherit",
  // `Select` items inherit their text color rather than using `inkBody`.
  color: "currentColor",
  fontWeight: 300,
  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((val: FormControlSize) => {
        const {
          fontSize,
          lineHeight,
          itemTextPaddingVertical,
          itemTextPaddingHorizontal
        } = getSelectContentSize(val);

        return {
          fontSize,
          lineHeight: `${lineHeight}px`,
          paddingVertical: itemTextPaddingVertical,
          paddingHorizontal: itemTextPaddingHorizontal
        };
      })
    )
  } as const,
  defaultVariants: {
    size: "md"
  }
});

const preventFocusLoss = (event: MouseEvent<HTMLElement>) =>
  event.preventDefault();

interface SuggestionsScrollButtonProps {
  direction: "up" | "down";
  scrollElement: HTMLElement | null;
  size: FormControlSize;
}

/**
 * The caret and fade shown while the list can scroll further, matching
 * `Select.ScrollUpButton` / `Select.ScrollDownButton`. Hovering it scrolls the
 * list at the same speed.
 */
const SuggestionsScrollButton = ({
  direction,
  scrollElement,
  size
}: SuggestionsScrollButtonProps) => {
  const frameRef = useRef<number | undefined>(undefined);
  const { scrollButtonHeight, scrollIconSize, gradientMargin } =
    getSelectContentSize(size);
  const isUp = direction === "up";

  const stop = useCallback(() => {
    if (frameRef.current !== undefined) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = undefined;
    }
  }, []);
  useEffect(() => stop, [stop]);

  const start = useCallback(() => {
    if (!scrollElement) {
      return;
    }

    stop();
    let previous = Date.now();

    const step = () => {
      const now = Date.now();
      const distance = (now - previous) / 2;
      previous = now;

      scrollElement.scrollTop += isUp ? -distance : distance;
      const remaining = isUp
        ? scrollElement.scrollTop
        : scrollElement.scrollHeight -
          scrollElement.clientHeight -
          scrollElement.scrollTop;

      frameRef.current =
        remaining > 0 ? requestAnimationFrame(step) : undefined;
    };

    frameRef.current = requestAnimationFrame(step);
  }, [isUp, scrollElement, stop]);

  return (
    <View
      aria-hidden={true}
      position="absolute"
      left={0}
      right={0}
      {...(isUp ? { top: 0 } : { bottom: 0 })}
      zIndex={1}
      height={scrollButtonHeight}
      alignItems="center"
      justifyContent="center"
      transition={{ duration: "200ms", properties: "scale, opacity" }}
      opacity="enter:0.2"
      scale="enter:0.5"
      onMouseDown={preventFocusLoss}
      onMouseEnter={start}
      onMouseLeave={stop}>
      <View zIndex={10}>
        {isUp ? (
          <CaretUp size={scrollIconSize} color="accent" />
        ) : (
          <CaretDown size={scrollIconSize} color="accent" />
        )}
      </View>
      <LinearGradient
        start={[0, 0]}
        end={[0, 1]}
        borderRadius="popover"
        {...(isUp
          ? { marginTop: gradientMargin }
          : { marginBottom: gradientMargin })}
        position="absolute"
        inset={0}
        colors={
          isUp
            ? ["surfaceFloating", "transparent"]
            : ["transparent", "surfaceFloating"]
        }
      />
    </View>
  );
};
export interface SearchInputExtraProps {
  /** Values offered while the user types. Matching is case-insensitive. */
  suggestions?: readonly string[];

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
      () => ({ suggestions, value }),
      [suggestions, value]
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
  Partial<Pick<InputValueProps, "aria-label" | "placeholder">>;

const SearchInputTextBox = createStyledHOC(
  Input.TextBox,
  (
    {
      children,
      "aria-label": ariaLabel,
      placeholder = "Search...",
      ...props
    }: SearchInputTextBoxProps,
    forwardedRef
  ) => {
    const { disabled, size, onChange } = InputContext.useStyledContext();
    const { suggestions, value } = use(SearchInputContext);

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
    const { viewportPadding, scrollButtonHeight } = getSelectContentSize(size);
    const [listBox, setListBox] = useState<HTMLElement | null>(null);
    const [canScroll, setCanScroll] = useState({ up: false, down: false });
    const updateCanScroll = useCallback(() => {
      if (!listBox) {
        return;
      }

      const up = listBox.scrollTop > 0;
      const down =
        Math.ceil(listBox.scrollTop + listBox.clientHeight) <
        listBox.scrollHeight;

      setCanScroll(current =>
        current.up === up && current.down === down ? current : { up, down }
      );
    }, [listBox]);

    useLayoutEffect(() => {
      if (!listBox) {
        return;
      }

      updateCanScroll();
      const resizeObserver = new ResizeObserver(updateCanScroll);
      resizeObserver.observe(listBox);

      return () => resizeObserver.disconnect();
    }, [filteredSuggestions, listBox, updateCanScroll]);

    useEffect(() => {
      if (activeIndex >= 0 && listBox) {
        listBox.ownerDocument
          .getElementById(`${listBoxId}-option-${activeIndex}`)
          ?.scrollIntoView({ block: "nearest" });
      }
    }, [activeIndex, listBox, listBoxId]);

    return (
      <Popover
        open={isOpen}
        onOpenChange={handleOpenChange}
        placement="bottom"
        shouldAdapt={false}>
        <Popover.Anchor asChild={true}>
          <Input.TextBox ref={forwardedRef} {...props}>
            <Field.Icon position="start" controlSize={size}>
              <MagnifyingGlass />
            </Field.Icon>

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
              onKeyDown={handleKeyDown as InputValueProps["onKeyDown"]}
            />

            {children}
          </Input.TextBox>
        </Popover.Anchor>

        <Theme name="base">
          <Popover.Content
            hasArrow={false}
            disableFocusScope={true}
            // Like `Select.Items`: the trigger's width plus 4px on each side,
            // and no taller than the space left below it.
            width="calc(var(--tamagui-popper-anchor-width) + 8px)"
            maxHeight={`calc(var(--tamagui-popper-available-height) - ${SUGGESTIONS_VIEWPORT_PADDING}px)`}
            padding={0}
            borderWidth={1}
            borderColor="hairline"
            overflow="hidden">
            <style>{SUGGESTIONS_STYLES}</style>
            {canScroll.up && (
              <SuggestionsScrollButton
                direction="up"
                scrollElement={listBox}
                size={size}
              />
            )}
            <View
              asChild={true}
              flexShrink={1}
              minHeight={0}
              overflowY="auto"
              padding={viewportPadding}>
              <div
                ref={setListBox}
                id={listBoxId}
                role="listbox"
                {...{ [SUGGESTIONS_ATTRIBUTE]: "" }}
                // Keeps keyboard-highlighted options clear of the scroll
                // buttons when they are scrolled into view.
                style={{ scrollPaddingBlock: scrollButtonHeight }}
                onScroll={updateCanScroll}>
                {filteredSuggestions.map((suggestion, index) => (
                  <SuggestionFrame
                    key={suggestion}
                    id={`${listBoxId}-option-${index}`}
                    role="option"
                    aria-selected={index === activeIndex}
                    group="item"
                    size={size}
                    onMouseDown={preventFocusLoss}
                    onPress={() => handleSelect(suggestion)}>
                    <SuggestionBackground
                      size={size}
                      active={index === activeIndex}
                    />
                    <SuggestionGroup size={size}>
                      <SuggestionText size={size} numberOfLines={1}>
                        {suggestion}
                      </SuggestionText>
                    </SuggestionGroup>
                    {index < filteredSuggestions.length - 1 && (
                      <SuggestionDivider size={size} />
                    )}
                  </SuggestionFrame>
                ))}
              </div>
            </View>
            {canScroll.down && (
              <SuggestionsScrollButton
                direction="down"
                scrollElement={listBox}
                size={size}
              />
            )}
          </Popover.Content>
        </Theme>
      </Popover>
    );
  },
  { displayName: "SearchInput" }
);

/**
 * A search text input with a magnifying-glass icon and a popover of
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
