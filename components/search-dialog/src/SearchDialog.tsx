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
import { Button } from "@cyclone-ui/button";
import { Dialog } from "@cyclone-ui/dialog";
import { FileText, Hash, TextAlignLeft, X } from "@cyclone-ui/icons";
import { Input } from "@cyclone-ui/input";
import { ToggleGroup } from "@cyclone-ui/toggle-group";
import { SearchTrigger } from "@cyclone-ui/vectors";
import { VisuallyHidden } from "@cyclone-ui/visually-hidden";
import type { GetProps } from "@tamagui/core";
import { createStyledHOC, styled, Text, View } from "@tamagui/core";
import {
  useEffect,
  useEffectEvent,
  useId,
  useMemo,
  useRef,
  useState
} from "react";

export interface SearchDialogResult {
  /**
   * Unique among the results, and the same each time the result is found:
   * the history tells results apart by it.
   */
  id: string;

  /** Where the result leads. */
  url: string;

  /**
   * A whole page, or a heading or paragraph on one. Headings and text are
   * indented, so list them after their page.
   *
   * @defaultValue "page"
   */
  type?: "page" | "heading" | "text";

  /** The text shown, with the words of the query highlighted. */
  content: string;

  /** Where the page sits, shown above it, such as `["Docs", "Components"]`. */
  breadcrumbs?: string[];
}

export interface SearchDialogFilter {
  /** The key of this filter's value in `SearchDialogSearchOptions.filters`. */
  name: string;

  /** The accessible name of the filter's toggles. */
  label: string;

  /** The values to choose from. At most one is selected at a time. */
  options: { label: string; value: string }[];
}

/** The selected value of each filter, by name. Unset or `null` when none. */
export type SearchDialogFilterValues = Record<string, string | null>;

export interface SearchDialogSearchOptions {
  filters: SearchDialogFilterValues;

  /** Aborted once a newer search replaces this one. */
  signal: AbortSignal;
}

export interface SearchDialogExtraProps {
  /**
   * Finds the results for a query (never empty). Called 100ms after the
   * query or a filter stops changing.
   */
  search: (
    query: string,
    options: SearchDialogSearchOptions
  ) => SearchDialogResult[] | Promise<SearchDialogResult[]>;

  /** Toggles shown under the results, such as a section of the docs. */
  filters?: SearchDialogFilter[];

  /**
   * The results listed before anything is typed, after the "Recent" ones
   * chosen before.
   */
  defaultResults?: SearchDialogResult[];

  /**
   * Called with the chosen result, after the dialog closes.
   *
   * @defaultValue navigates to the result's `url`
   */
  onSelect?: (result: SearchDialogResult) => void;

  /**
   * The accessible name of the trigger, dialog and text box.
   *
   * @defaultValue "Search"
   */
  label?: string;

  /** @defaultValue "Search..." */
  placeholder?: string;

  /**
   * The `localStorage` key the chosen results are saved under. Give each
   * search dialog of a site its own, to keep their histories apart.
   *
   * @defaultValue "cyclone-ui:search-dialog-history"
   */
  historyKey?: string;
}

export type SearchDialogProps = GetProps<typeof Button> &
  SearchDialogExtraProps;

// The same debounce as fumadocs' `useSearch`.
const SEARCH_DELAY = 100;
const EMPTY_RESULTS: SearchDialogResult[] = [];
const resultIcons = { page: FileText, heading: Hash, text: TextAlignLeft };
const HISTORY_SIZE = 5;

/** The results chosen before, newest first, saved in `localStorage`. */
const readHistory = (key: string): SearchDialogResult[] => {
  try {
    const saved: unknown = JSON.parse(
      globalThis.localStorage?.getItem(key) ?? "[]"
    );

    return Array.isArray(saved)
      ? saved.filter(
          (item: SearchDialogResult) =>
            typeof item?.id === "string" && typeof item.content === "string"
        )
      : EMPTY_RESULTS;
  } catch {
    return EMPTY_RESULTS;
  }
};

const saveHistory = (key: string, history: SearchDialogResult[]) => {
  try {
    globalThis.localStorage?.setItem(key, JSON.stringify(history));
  } catch {
    // Storage can be unavailable in private browsing or embedded documents.
  }
};

/** Matches any word of `query`, captured so `split` keeps the matches. */
const getQueryPattern = (query: string) => {
  const source = query
    .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    .replace(/\s+/g, "|");

  return source ? new RegExp(`(${source})`, "gi") : undefined;
};

const SearchDialogIcon = styled(View, {
  displayName: "SearchDialogIcon",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: "4xl",
  paddingRight: "3xl"
});

const SearchDialogList = styled(View, {
  displayName: "SearchDialogList",
  maxHeight: "min(460px, 60dvh)",
  overflowY: "auto",
  padding: "xl"
});

const SearchDialogOption = styled(View, {
  displayName: "SearchDialogOption",
  role: "option",
  cursor: "pointer",
  flexDirection: "row",
  alignItems: "center",
  gap: "2xl",
  paddingHorizontal: "2xl",
  paddingVertical: "xl",
  borderRadius: "button",
  variants: {
    active: {
      true: {
        backgroundColor: "floating-active"
      }
    },

    // Headings and text hang off their page behind a guide line.
    nested: {
      true: {
        marginLeft: "4xl",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderLeftWidth: 1,
        borderLeftColor: "hairline"
      }
    }
  } as const
});

const SearchDialogMatch = styled(Text, {
  displayName: "SearchDialogMatch",
  render: "mark",
  color: "link",
  backgroundColor: "transparent",
  fontWeight: "bold"
});

const SearchDialogMessage = styled(BodyText, {
  displayName: "SearchDialogMessage",
  color: "subtle",
  textAlign: "center",
  padding: "7xl"
});

const SearchDialogFooter = styled(View, {
  displayName: "SearchDialogFooter",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "2xl",
  padding: "2xl",
  borderTopWidth: 1,
  borderTopColor: "hairline"
});

interface SearchState {
  /** The query and filters `results` were found for. */
  key?: string;
  /** The trimmed query `results` were found for. */
  term?: string;
  results: SearchDialogResult[];
  failed: boolean;
}

/**
 * A search icon button that opens a dialog for searching the application,
 * like the fumadocs search dialog. ⌘K / Ctrl+K opens it too.
 *
 * @remarks
 * `search` finds the results (from a static index or an API), narrowed by
 * the selected `filters`. The arrow keys move through the results and Enter
 * opens one; other props style the trigger button. The last results chosen
 * are saved in `localStorage` and listed as "Recent" before anything is typed.
 */
export const SearchDialog = createStyledHOC(
  Button,
  (
    {
      search,
      filters,
      defaultResults = EMPTY_RESULTS,
      onSelect,
      label = "Search",
      placeholder = "Search...",
      historyKey = "cyclone-ui:search-dialog-history",
      size = "9xl",
      ...props
    }: SearchDialogProps,
    forwardedRef
  ) => {
    const listId = `${useId()}-results`;
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [filterValues, setFilterValues] = useState<SearchDialogFilterValues>(
      {}
    );
    const [state, setState] = useState<SearchState>({
      results: EMPTY_RESULTS,
      failed: false
    });
    const [activeId, setActiveId] = useState<string>();
    // Only listed once the dialog opens, so reading it here can't mismatch
    // the server render.
    const [history, setHistory] = useState(() => readHistory(historyKey));
    const inputRef = useRef<HTMLInputElement>(null);
    // Set by choosing a result, so the dialog reopens on the history.
    const nextHistoryRef = useRef<SearchDialogResult[]>(undefined);

    const term = query.trim();
    const key = JSON.stringify([term, filterValues]);
    const loading = term !== "" && state.key !== key;
    const idleResults = useMemo(
      () => [
        ...history,
        ...defaultResults.filter(
          result => !history.some(item => item.id === result.id)
        )
      ],
      [history, defaultResults]
    );
    // While a search runs, the previous results stay up instead of flashing.
    const results = term ? state.results : idleResults;
    const recentCount = term ? 0 : history.length;
    const activeIndex = Math.max(
      0,
      results.findIndex(result => result.id === activeId)
    );
    const active = results[activeIndex];
    const pattern = getQueryPattern(term);

    // An effect event, so an inline `search` doesn't search on every render.
    const runSearch = useEffectEvent(search);
    useEffect(() => {
      if (!term) {
        return;
      }

      const controller = new AbortController();
      const run = async () => {
        try {
          const found = await runSearch(term, {
            filters: filterValues,
            signal: controller.signal
          });
          if (!controller.signal.aborted) {
            setState({ key, term, results: found, failed: false });
          }
        } catch {
          if (!controller.signal.aborted) {
            setState({ key, term, results: EMPTY_RESULTS, failed: true });
          }
        }
      };
      const timer = setTimeout(() => void run(), SEARCH_DELAY);

      return () => {
        clearTimeout(timer);
        controller.abort();
      };
    }, [term, filterValues, key]);

    // ⌘K / Ctrl+K toggles the dialog from anywhere on the page.
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          (event.metaKey || event.ctrlKey) &&
          event.key.toLowerCase() === "k"
        ) {
          event.preventDefault();
          setOpen(current => !current);
        }
      };

      globalThis.document?.addEventListener("keydown", handleKeyDown);
      return () =>
        globalThis.document?.removeEventListener("keydown", handleKeyDown);
    }, []);

    // `autoFocus` runs before the portal shows the `<dialog>`, whose `show()`
    // then focuses the content frame; this effect runs after both.
    useEffect(() => {
      if (open) {
        // Applied here rather than on choosing, which would change the list
        // while the dialog fades out.
        if (nextHistoryRef.current) {
          setHistory(nextHistoryRef.current);
          nextHistoryRef.current = undefined;
          setQuery("");
        }
        inputRef.current?.focus();
      }
    }, [open]);

    useEffect(() => {
      if (open) {
        globalThis.document
          ?.getElementById(`${listId}-${activeIndex}`)
          ?.scrollIntoView({ block: "nearest" });
      }
    }, [activeIndex, listId, open, results]);

    const select = (result: SearchDialogResult) => {
      setOpen(false);
      nextHistoryRef.current = [
        result,
        ...history.filter(item => item.id !== result.id)
      ].slice(0, HISTORY_SIZE);
      saveHistory(historyKey, nextHistoryRef.current);
      if (onSelect) {
        onSelect(result);
      } else {
        globalThis.location?.assign(result.url);
      }
    };

    const updateHistory = (next: SearchDialogResult[]) => {
      setHistory(next);
      saveHistory(historyKey, next);
      // The clicked button may have taken focus, or be gone.
      inputRef.current?.focus();
    };

    const removeFromHistory = (index: number) => {
      updateHistory(history.filter((_, i) => i !== index));
      // The next result takes the removed one's place.
      setActiveId((results[index + 1] ?? results[index - 1])?.id);
    };

    // Focus stays in the text box; the arrow keys move the active result.
    const handleKeyDown = (event: unknown) => {
      const keyEvent = event as KeyboardEvent;
      if (keyEvent.key === "Enter" && active) {
        keyEvent.preventDefault();
        select(active);
      } else if (
        keyEvent.key === "Delete" &&
        keyEvent.shiftKey &&
        activeIndex < recentCount
      ) {
        // Like the browser's address bar, Shift+Delete forgets a recent one.
        keyEvent.preventDefault();
        removeFromHistory(activeIndex);
      } else if (
        (keyEvent.key === "ArrowDown" || keyEvent.key === "ArrowUp") &&
        results.length > 0
      ) {
        keyEvent.preventDefault();
        const step = keyEvent.key === "ArrowDown" ? 1 : results.length - 1;
        setActiveId(results[(activeIndex + step) % results.length]?.id);
      }
    };

    // Like `results`, the last search's message stays up while the next runs,
    // so it doesn't blank out on every keystroke.
    const message =
      !term || state.term === undefined
        ? undefined
        : state.failed
          ? "The search failed, please try again."
          : results.length === 0
            ? `No results for "${state.term}"`
            : undefined;

    const renderOption = (result: SearchDialogResult, index: number) => {
      const type = result.type ?? "page";
      const Icon = resultIcons[type];

      return (
        <SearchDialogOption
          key={result.id}
          id={`${listId}-${index}`}
          aria-selected={index === activeIndex}
          active={index === activeIndex}
          nested={type !== "page" && index >= recentCount}
          onPointerMove={() => setActiveId(result.id)}
          onPress={() => select(result)}>
          <Icon size={16} color="subtle" aria-hidden={true} />
          <View flex={1} minWidth={0}>
            {result.breadcrumbs?.length ? (
              <BodyText
                render="span"
                size="sm"
                color="subtle"
                numberOfLines={1}>
                {result.breadcrumbs.join(" › ")}
              </BodyText>
            ) : null}
            <BodyText
              render="span"
              color={type === "page" ? "emphasis" : "ink"}
              numberOfLines={type === "page" ? 1 : 2}>
              {pattern
                ? result.content
                    .split(pattern)
                    .map((part, i) =>
                      i % 2 ? (
                        <SearchDialogMatch key={i}>{part}</SearchDialogMatch>
                      ) : (
                        part
                      )
                    )
                : result.content}
            </BodyText>
          </View>
          {index < recentCount && (
            // Shown with the highlight (the Button would fade it in slowly),
            // and always on touch screens, which can't hover to reveal it.
            // Overhangs the row's padding, so one-line rows keep their height.
            <View
              marginVertical={-2}
              opacity={index === activeIndex ? 1 : "0 touchable:1"}>
              {/* Pointer only: an option's content is flattened for assistive
                  tech, so Shift+Delete does the same from the keyboard. */}
              <Button
                variant="ghost"
                circular={true}
                noPadding={true}
                size="6xl"
                tabIndex={-1}
                aria-hidden={true}
                onPress={event => {
                  // Or the option's `onPress` opens the result too.
                  event.stopPropagation();
                  removeFromHistory(index);
                }}>
                {/* A size up, or the glyph scales down to a few px. */}
                <Button.Icon size="7xl">
                  <X />
                </Button.Icon>
              </Button>
            </View>
          )}
        </SearchDialogOption>
      );
    };

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild={true}>
          <Button
            ref={forwardedRef}
            aria-label={label}
            aria-keyshortcuts="Meta+K Control+K"
            variant="ghost"
            circular={true}
            flexGrow={0}
            size={size}
            {...props}>
            {/* Sized like the button, or the glyph shrinks to a few px. */}
            <Button.Icon size={size}>
              <SearchTrigger />
            </Button.Icon>
          </Button>
        </Dialog.Trigger>

        {/* Pinned near the top, so the dialog doesn't jump as results change. */}
        <Dialog.Portal justifyContent="flex-start">
          <Dialog.Overlay key="overlay" />
          <Dialog.Container
            key="content"
            maxWidth={640}
            flexGrow={1}
            padding={0}
            borderColor="hairline"
            style={{ color: "var(--primary)" }}>
            <VisuallyHidden>
              <Dialog.Heading>{label}</Dialog.Heading>
            </VisuallyHidden>

            <Input
              variant="underlined"
              size="lg"
              onChange={event => setQuery(event.detail)}>
              <Input.TextBox>
                <SearchDialogIcon>
                  <SearchTrigger size={20} color="subtle" isLoading={loading} />
                </SearchDialogIcon>
                <Input.TextBox.Value
                  role="combobox"
                  aria-label={label}
                  aria-autocomplete="list"
                  aria-expanded={results.length > 0}
                  aria-controls={results.length > 0 ? listId : undefined}
                  aria-activedescendant={
                    active ? `${listId}-${activeIndex}` : undefined
                  }
                  placeholder={placeholder}
                  ref={inputRef}
                  value={query}
                  onKeyDown={handleKeyDown}
                />
              </Input.TextBox>
              <Input.Trigger aria-label="Close" onPress={() => setOpen(false)}>
                <Input.Trigger.Icon>
                  <Text
                    display="flex"
                    transition="200ms"
                    color="subtle group-hover/button:subtle-hovered">
                    <X color="currentColor" />
                  </Text>
                </Input.Trigger.Icon>
              </Input.Trigger>
            </Input>

            {results.length > 0 && (
              <SearchDialogList>
                {/* Before the listbox, which can only hold options. */}
                {recentCount > 0 && (
                  <View
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    paddingLeft="2xl">
                    <BodyText id={`${listId}-recent`} size="sm" color="subtle">
                      Recent
                    </BodyText>
                    <Button
                      variant="link"
                      size="sm"
                      flexGrow={0}
                      noPadding={true}
                      paddingHorizontal="2xl"
                      aria-label="Clear recent results"
                      onPress={() => updateHistory(EMPTY_RESULTS)}>
                      <Button.Text>Clear</Button.Text>
                    </Button>
                  </View>
                )}
                <View
                  id={listId}
                  {...({ role: "listbox" } as object)}
                  aria-label={`${label} results`}>
                  {recentCount > 0 && (
                    <View
                      role="group"
                      aria-labelledby={`${listId}-recent`}
                      // Set apart from the default results that follow.
                      {...(results.length > recentCount && {
                        paddingBottom: "xl",
                        marginBottom: "xl",
                        borderBottomWidth: 1,
                        borderBottomColor: "hairline"
                      })}>
                      {results.slice(0, recentCount).map(renderOption)}
                    </View>
                  )}
                  {results
                    .slice(recentCount)
                    .map((result, index) =>
                      renderOption(result, recentCount + index)
                    )}
                </View>
              </SearchDialogList>
            )}

            {!results.length || message ? (
              <SearchDialogMessage role="status" minHeight={75}>
                {message || ""}
              </SearchDialogMessage>
            ) : null}

            {filters?.length ? (
              <SearchDialogFooter>
                {filters.map(filter => (
                  <ToggleGroup
                    key={filter.name}
                    aria-label={filter.label}
                    size="sm"
                    rounded={true}
                    flexWrap="wrap"
                    value={filterValues[filter.name] ?? null}
                    onValueChange={value =>
                      setFilterValues(current => ({
                        ...current,
                        [filter.name]: value as string | null
                      }))
                    }>
                    {filter.options.map(option => (
                      <ToggleGroup.Item key={option.value} value={option.value}>
                        {option.label}
                      </ToggleGroup.Item>
                    ))}
                  </ToggleGroup>
                ))}
              </SearchDialogFooter>
            ) : null}
          </Dialog.Container>
        </Dialog.Portal>
      </Dialog>
    );
  },
  { displayName: "SearchDialog" }
);
