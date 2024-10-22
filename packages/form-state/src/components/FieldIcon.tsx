import { Button } from "@cyclone-ui/button";
import { ColorRole } from "@cyclone-ui/colors";
import { Spinner } from "@cyclone-ui/spinner";
import { ThemeIcon } from "@cyclone-ui/themeable-icon";
import { Tooltip } from "@tamagui/tooltip";
import { useFieldActions, useFieldStore } from "../hooks";
import { ValidationMessage } from "./ValidationMessage";

const InnerFieldIcon = Button.styleable((props, forwardedRef) => {
  const { children, color, ...rest } = props;

  const store = useFieldStore();

  const disabled = store.get.disabled();
  const theme = store.get.theme();
  const messages = store.get.messages();

  return (
    <Tooltip groupId="field-icon">
      <Tooltip.Content
        enterStyle={{ x: 0, y: -5, opacity: 0, scale: 0.9 }}
        exitStyle={{ x: 0, y: -5, opacity: 0, scale: 0.9 }}
        animation={[
          "quick",
          {
            opacity: {
              overshootClamping: true
            }
          }
        ]}
        backgroundColor="$background">
        <Tooltip.Arrow />
        <ValidationMessage
          theme={theme}
          messages={messages}
          disabled={disabled}
        />
      </Tooltip.Content>

      <Tooltip.Trigger>
        <Button
          ref={forwardedRef}
          variant="ghost"
          circular={true}
          color={
            color
              ? color
              : disabled
                ? "$disabled"
                : theme.toLowerCase().includes(ColorRole.BASE)
                  ? "$base9"
                  : "$primary"
          }
          padding="$2"
          {...rest}
          disabled={false}>
          <Button.Icon>{children}</Button.Icon>
        </Button>
      </Tooltip.Trigger>
    </Tooltip>
  );
});

export const FieldIcon = Button.styleable((props, forwardedRef) => {
  const { children, color, ...rest } = props;

  const store = useFieldStore();
  if (store.get.disabled()) {
    return null;
  }

  return (
    <InnerFieldIcon ref={forwardedRef} {...rest}>
      {children}
    </InnerFieldIcon>
  );
});

export const FieldThemeIcon = FieldIcon.styleable((props, forwardedRef) => {
  const store = useFieldStore();
  const { focus } = useFieldActions();

  const disabled = store.get.disabled();
  const validating = store.get.validating();
  const theme = store.get.theme();

  if (validating) {
    return <Spinner size="small" theme="$accent" />;
  } else if (
    !theme?.toLowerCase().includes(ColorRole.ERROR) &&
    !theme?.toLowerCase().includes(ColorRole.WARNING) &&
    !theme?.toLowerCase().includes(ColorRole.INFO) &&
    !theme?.toLowerCase().includes(ColorRole.HELP) &&
    !theme?.toLowerCase().includes(ColorRole.SUCCESS) &&
    !disabled
  ) {
    return null;
  }

  return (
    <InnerFieldIcon
      ref={forwardedRef}
      {...props}
      theme={theme}
      disabled={disabled}
      onPress={focus}>
      <ThemeIcon theme={theme} disabled={disabled} validating={validating} />
    </InnerFieldIcon>
  );
});
