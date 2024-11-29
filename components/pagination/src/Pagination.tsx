import { Button } from "@cyclone-ui/button";
import { NextButton } from "@cyclone-ui/next-button";
import { PreviousButton } from "@cyclone-ui/previous-button";
import { XStack, XStackProps } from "@tamagui/stacks";
import { SizableText } from "@tamagui/text";
import { useCallback } from "react";

type ExtraPaginationProps = {
  hideText?: boolean;
  pageCount: number;
  pageIndex: number;
  setPageIndex: (pageIndex: number) => void;
  onFirst?: () => void;
  onLast?: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
};
export type PaginationProps = XStackProps & ExtraPaginationProps;

export const Pagination = XStack.styleable<ExtraPaginationProps>(
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
    const handleFirst = useCallback(() => {
      setPageIndex(0);
    }, [setPageIndex]);
    const handleLast = useCallback(() => {
      setPageIndex(pageCount - 1);
    }, [setPageIndex, pageIndex]);
    const handlePrevious = useCallback(() => {
      setPageIndex(pageIndex - 1);
    }, [setPageIndex, pageIndex]);
    const handleNext = useCallback(() => {
      setPageIndex(pageIndex + 1);
    }, [setPageIndex, pageIndex]);

    const currentPage = Math.min(pageCount, Math.max(1, pageIndex + 1));
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
      <XStack gap="$3" alignItems="center" flex={1}>
        <PreviousButton
          {...props}
          hideText={hideText}
          variant="tertiary"
          theme={theme}
          size="$3.5"
          paddingHorizontal="$0"
          disabled={currentPage === 1}
          onClick={onPrevious ?? handlePrevious}
        />

        <Button
          variant={currentPage === 1 ? "secondary" : "tertiary"}
          theme={theme}
          size="$3.5"
          paddingHorizontal="$0"
          {...props}
          onClick={onFirst ?? handleFirst}>
          <Button.Text>1</Button.Text>
        </Button>

        {currentPage > 3 && pageCount > 5 && (
          <SizableText color="$secondary" size="$6">
            . . .
          </SizableText>
        )}

        {pageCount > 1 && (
          <Button
            variant={currentPage === 2 ? "secondary" : "tertiary"}
            theme={theme}
            size="$3.5"
            paddingHorizontal="$0"
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
                ? "secondary"
                : "tertiary"
            }
            theme={theme}
            size="$3.5"
            paddingHorizontal="$0"
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
                ? "secondary"
                : "tertiary"
            }
            theme={theme}
            size="$3.5"
            paddingHorizontal="$0"
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
          <SizableText color="$secondary" size="$6">
            . . .
          </SizableText>
        )}

        {pageCount > 4 && (
          <Button
            variant={currentPage === pageCount ? "secondary" : "tertiary"}
            theme={theme}
            {...props}
            size="$3.5"
            paddingHorizontal="$0"
            onClick={onLast ?? handleLast}>
            <Button.Text>{pageCount}</Button.Text>
          </Button>
        )}
        <NextButton
          {...props}
          hideText={hideText}
          variant="tertiary"
          theme={theme}
          size="$3.5"
          paddingHorizontal="$0"
          disabled={currentPage === pageCount}
          onClick={onNext ?? handleNext}
        />
      </XStack>
    );
  },
  { staticConfig: { componentName: "Button" } }
);
