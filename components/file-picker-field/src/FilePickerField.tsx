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
import { FieldApi, useFieldActions } from "@cyclone-ui/form-state";
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

    const field = FieldApi.use();
    const disabled = field.disabled.get();
    const options = field.options.get();
    const value = field.value.get();

    return (
      <FilePicker
        ref={forwardedRef}
        {...props}
        max={options.max}
        disabled={disabled}
        files={value ?? []}
        onChange={change}>
        <FilePicker.Files>
          {value &&
            value?.map((file: ClientFileResult) => (
              <FilePicker.Files.File key={file.id} {...file} />
            ))}
        </FilePicker.Files>

        <FilePicker.Trigger>
          <FilePicker.Trigger.Button />
        </FilePicker.Trigger>

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
