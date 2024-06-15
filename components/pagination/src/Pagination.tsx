import { useCallback } from "react";
import { Button, type ButtonProps } from "@cyclone-ui/button";
import { NextButton } from "@cyclone-ui/next-button";
import { PreviousButton } from "@cyclone-ui/previous-button";
import { XStack, XStackProps } from "@tamagui/stacks";
import { SizableText } from "@tamagui/text";

type ExtraPaginationProps = {
  count: number;
  current: number;
  onChange: (page: number) => void;
  onFirst?: () => void;
  onLast?: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
};
export type PaginationProps = XStackProps & ExtraPaginationProps;

export const Pagination = XStack.styleable<ExtraPaginationProps>(
  ({
    children,
    count,
    current: _current,
    theme,
    onChange,
    onFirst,
    onLast,
    onPrevious,
    onNext,
    ...props
  }: PaginationProps) => {
    const current = Math.min(count, Math.max(1, _current));

    const handleFirst = useCallback(() => {
      onChange(1);
    }, [onChange]);
    const handleLast = useCallback(() => {
      onChange(count);
    }, [onChange, count]);
    const handlePrevious = useCallback(() => {
      onChange(current - 1);
    }, [onChange, current]);
    const handleNext = useCallback(() => {
      onChange(current + 1);
    }, [onChange, current]);

    const handleSecond = useCallback(() => {
      onChange(
        current < 4
          ? 2
          : current < count - 1 && count > 5
            ? current - 1
            : count - 3
      );
    }, [onChange, current, count]);
    const handleThird = useCallback(() => {
      onChange(
        current < 4 ? 3 : current < count - 1 && count > 5 ? current : count - 2
      );
    }, [onChange, current, count]);
    const handleFourth = useCallback(() => {
      onChange(
        current < 4
          ? 4
          : current < count - 1 && count > 5
            ? current + 1
            : count - 1
      );
    }, [onChange, current, count]);

    return (
      <XStack gap="$3" alignItems="center">
        <PreviousButton
          {...props}
          theme={theme}
          disabled={current === 1}
          onClick={onPrevious ?? handlePrevious}
        />
        <Button
          variant="secondary"
          theme={current === 1 ? "accent" : theme}
          {...props}
          onClick={onFirst ?? handleFirst}>
          <Button.Text>1</Button.Text>
        </Button>
        {current > 3 && count > 5 && (
          <SizableText color="$primary" size="$6">
            . . .
          </SizableText>
        )}

        <Button
          variant="secondary"
          theme={current === 2 ? "accent" : theme}
          {...props}
          onClick={handleSecond}>
          <Button.Text>
            {current < 4
              ? 2
              : current < count - 1 && count > 5
                ? current - 1
                : count - 3}
          </Button.Text>
        </Button>

        <Button
          variant="secondary"
          theme={
            current === 3 || (current > 3 && current < count - 1 && count > 5)
              ? "accent"
              : theme
          }
          {...props}
          onClick={handleThird}>
          <Button.Text>
            {current < 4
              ? 3
              : current < count - 1 && count > 5
                ? current
                : count - 2}
          </Button.Text>
        </Button>

        <Button
          variant="secondary"
          theme={
            (current === 4 && count < 5) || current === count - 1
              ? "accent"
              : theme
          }
          {...props}
          onClick={handleFourth}>
          <Button.Text>
            {current < 4
              ? 4
              : current < count - 1 && count > 5
                ? current + 1
                : count - 1}
          </Button.Text>
        </Button>

        {current < count - 2 && count > 5 && (
          <SizableText color="$primary" size="$6">
            . . .
          </SizableText>
        )}
        <Button
          variant="secondary"
          theme={current === count ? "accent" : theme}
          {...props}
          onClick={onLast ?? handleLast}>
          <Button.Text>{count}</Button.Text>
        </Button>
        <NextButton
          {...props}
          theme={theme}
          disabled={current === count}
          onClick={onNext ?? handleNext}
        />
      </XStack>
    );
  },
  { staticConfig: { componentName: "Button" } }
);
