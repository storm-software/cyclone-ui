/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { Field } from "@cyclone-ui/field";
import { FilePicker } from "@cyclone-ui/file-picker";
import { useFieldActions, useFieldStore } from "@cyclone-ui/form-state";
import { ClientFileResult } from "@cyclone-ui/state";
import { withStaticProperties } from "@tamagui/core";

const FilePickerFieldGroup = Field.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <Field ref={forwardedRef} {...rest}>
      {children}
    </Field>
  );
});

const FilePickerFieldControl = FilePicker.styleable(
  ({ children, ...props }, forwardedRef) => {
    const { change } = useFieldActions();

    const store = useFieldStore<ClientFileResult[]>();

    // const name = store.get.name();
    const disabled = store.get.disabled();
    // const focused = store.get.focused();
    const value = store.get.value();
    // const formattedValue = store.get.formattedValue();
    // const initialValue = store.get.initialValue();

    // const handleChange = useCallback(
    //   (files: FileResult[]) => {
    //     change(files);
    //     blur();
    //   },
    //   [change, blur]
    // );

    return (
      <FilePicker
        ref={forwardedRef}
        {...props}
        disabled={disabled}
        files={value ?? []}
        onChange={change}>
        {!disabled && <Field.ThemeIcon />}

        <FilePicker.Trigger>
          <FilePicker.Trigger.Button />
        </FilePicker.Trigger>

        <FilePicker.Files>
          {value &&
            value?.map(file => (
              <FilePicker.Files.File key={file.id} {...file} />
            ))}
        </FilePicker.Files>

        {children}
      </FilePicker>
    );
  }
);

export const FilePickerField = withStaticProperties(FilePickerFieldGroup, {
  Label: Field.Label,
  Control: FilePickerFieldControl,
  Details: Field.Details,
  Icon: Field.Icon
});
