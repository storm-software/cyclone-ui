import { Button } from "@cyclone-ui/button";
import { ColorRole } from "@cyclone-ui/colors";
import { Spinner } from "@cyclone-ui/spinner";
import { ThemeIcon } from "@cyclone-ui/themeable-icon";
import { useFieldActions, useFieldStore } from "../hooks";

const InnerFieldIcon = Button.styleable((props, forwardedRef) => {
  const { children, color, ...rest } = props;

  const store = useFieldStore();
  const disabled = store.get.disabled();
  const theme = store.get.theme();

  return (
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
