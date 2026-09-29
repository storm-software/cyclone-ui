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

import type { ButtonProps } from "@cyclone-ui/button";
import { Button } from "@cyclone-ui/button";
import { NextButton } from "@cyclone-ui/next-button";
import { PreviousButton } from "@cyclone-ui/previous-button";
import type { FontSizeTokens, SizeTokens } from "@tamagui/core";
import { createStyledHOC } from "@tamagui/core";
import type { XStackProps } from "@tamagui/stacks";
import { XStack } from "@tamagui/stacks";
import { SizableText } from "@tamagui/text";
import { useCallback } from "react";

interface ExtraPaginationProps {
  hideText?: boolean;
  pageCount: number;
  pageIndex: number;
  setPageIndex: (pageIndex: number) => void;
  onFirst?: () => void;
  onLast?: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  buttonWidth?: SizeTokens;
}

// `color` is forwarded to the page buttons, so it takes the buttons' value type
// rather than the flat-clause `XStack` style value.
export type PaginationProps = Omit<XStackProps, "color"> &
  Pick<ButtonProps, "color"> &
  ExtraPaginationProps;

export const Pagination = createStyledHOC(
  XStack,
  ({
    children,
    pageCount,
    pageIndex,
    theme,
    hideText = false,
    setPageIndex,
    onFirst,
    onLast,
    onPrevious,
    onNext,
    ...props
  }: PaginationProps) => {
    const currentPage = Math.min(pageCount, Math.max(1, pageIndex + 1));

    const handleFirst = useCallback(() => {
      setPageIndex(0);
    }, [setPageIndex]);
    const handleLast = useCallback(() => {
      setPageIndex(pageCount - 1);
    }, [setPageIndex, pageCount]);
    const handlePrevious = useCallback(() => {
      setPageIndex(pageIndex - 1);
    }, [setPageIndex, pageIndex]);
    const handleNext = useCallback(() => {
      setPageIndex(pageIndex + 1);
    }, [setPageIndex, pageIndex]);

    const handleSecond = useCallback(() => {
      setPageIndex(
        currentPage < 4
          ? 1
          : currentPage < pageCount - 1 && pageCount > 5
            ? currentPage - 2
            : pageCount - 4
      );
    }, [setPageIndex, currentPage, pageCount]);
    const handleThird = useCallback(() => {
      setPageIndex(
        currentPage < 4
          ? 2
          : currentPage < pageCount - 1 && pageCount > 5
            ? currentPage - 1
            : pageCount - 3
      );
    }, [setPageIndex, currentPage, pageCount]);
    const handleFourth = useCallback(() => {
      setPageIndex(
        currentPage < 4
          ? 3
          : currentPage < pageCount - 1 && pageCount > 5
            ? currentPage
            : pageCount - 2
      );
    }, [setPageIndex, currentPage, pageCount]);

    return (
      <XStack gap="lg" alignItems="center">
        <PreviousButton
          {...props}
          hideText={hideText}
          variant="ghost"
          theme={theme}
          size="9xl"
          paddingHorizontal="zero"
          disabled={currentPage === 1}
          onClick={onPrevious ?? handlePrevious}
        />

        <Button
          variant={currentPage === 1 ? "outlined" : "ghost"}
          theme={theme}
          size="9xl"
          paddingHorizontal="zero"
          {...props}
          onClick={onFirst ?? handleFirst}>
          <Button.Text>1</Button.Text>
        </Button>

        {currentPage > 3 && pageCount > 5 && (
          <SizableText
            color="accent"
            fontFamily="body"
            size={"true" as FontSizeTokens}
            paddingHorizontal="md">
            . . .
          </SizableText>
        )}

        {pageCount > 1 && (
          <Button
            variant={currentPage === 2 ? "outlined" : "ghost"}
            theme={theme}
            size="9xl"
            paddingHorizontal="zero"
            {...props}
            onClick={handleSecond}>
            <Button.Text>
              {currentPage < 4
                ? 2
                : currentPage < pageCount - 1 && pageCount > 5
                  ? currentPage - 1
                  : pageCount - 3}
            </Button.Text>
          </Button>
        )}

        {pageCount > 2 && (
          <Button
            variant={
              currentPage === 3 ||
              (currentPage > 3 && currentPage < pageCount - 1 && pageCount > 5)
                ? "outlined"
                : "ghost"
            }
            theme={theme}
            size="9xl"
            paddingHorizontal="zero"
            {...props}
            onClick={handleThird}>
            <Button.Text>
              {currentPage < 4
                ? 3
                : currentPage < pageCount - 1 && pageCount > 5
                  ? currentPage
                  : pageCount - 2}
            </Button.Text>
          </Button>
        )}

        {pageCount > 3 && (
          <Button
            variant={
              (currentPage === 4 && pageCount < 5) ||
              currentPage === pageCount - 1
                ? "outlined"
                : "ghost"
            }
            theme={theme}
            size="9xl"
            paddingHorizontal="zero"
            {...props}
            onClick={handleFourth}>
            <Button.Text>
              {currentPage < 4
                ? 4
                : currentPage < pageCount - 1 && pageCount > 5
                  ? currentPage + 1
                  : pageCount - 1}
            </Button.Text>
          </Button>
        )}

        {currentPage < pageCount - 2 && pageCount > 5 && (
          <SizableText
            color="accent"
            fontFamily="body"
            size={"true" as FontSizeTokens}
            paddingHorizontal="md">
            . . .
          </SizableText>
        )}

        {pageCount > 4 && (
          <Button
            variant={currentPage === pageCount ? "outlined" : "ghost"}
            theme={theme}
            {...props}
            size="9xl"
            paddingHorizontal="zero"
            onClick={onLast ?? handleLast}>
            <Button.Text>{pageCount}</Button.Text>
          </Button>
        )}
        <NextButton
          {...props}
          hideText={hideText}
          variant="ghost"
          theme={theme}
          size="9xl"
          paddingHorizontal="zero"
          disabled={currentPage === pageCount}
          onClick={onNext ?? handleNext}
        />
      </XStack>
    );
  },
  { displayName: "Button" }
);
