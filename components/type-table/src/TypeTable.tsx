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
import { Collapsible } from "@cyclone-ui/collapsible";
import { Container } from "@cyclone-ui/container";
import { InlineCodeText } from "@cyclone-ui/inline-code-text";
import { Link } from "@cyclone-ui/link";
import type { ViewProps } from "@tamagui/core";
import { styled, View } from "@tamagui/core";
import type { ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";
import { TypeTableItemDetails } from "./TypeTableItemDetails";

export interface ParameterNode {
  name: string;
  description: ReactNode;
}

export interface TypeNode {
  description?: ReactNode;
  type: ReactNode;
  typeDescription?: ReactNode;
  typeDescriptionLink?: string;
  default?: ReactNode;
  required?: boolean;
  deprecated?: boolean;
  parameters?: ParameterNode[];
  returns?: ReactNode;
}

export interface TypeTableProps extends ViewProps {
  type: Record<string, TypeNode>;
}

const TypeTableFrame = styled(Container, {
  displayName: "TypeTable",

  width: "100%",
  overflow: "hidden"
});

const TypeTableRow = styled(View, {
  displayName: "TypeTableRow",
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: "3xl",
  paddingVertical: "2xl"
});

const PropertyColumn = styled(InlineCodeText, {
  displayName: "TypeTablePropertyColumn",
  width: "25%",
  minWidth: "fit-content",
  paddingRight: "2xl",
  paddingVertical: 0,
  paddingLeft: 0,
  backgroundColor: "transparent",
  color: "primary",
  variants: {
    deprecated: {
      true: {
        color: "subtle",
        textDecorationLine: "line-through"
      }
    }
  } as const
});

const TypeColumn = styled(BodyText, {
  displayName: "TypeTableTypeColumn",
  color: "subtle",
  fontFamily: "title-md",
  display: "max-sm:none"
});

const TypeLink = styled(Link, {
  displayName: "TypeTableTypeLink",
  color: "emphasis",
  textDecorationLine: "underline",
  display: "max-sm:none"
});

const ColumnLabel = styled(BodyText, {
  displayName: "TypeTableColumnLabel",
  color: "subtle",
  fontFamily: "title-md"
});

const getItemId = (parentId: string | undefined, name: string) =>
  parentId ? `${parentId}-${name}` : undefined;

interface TypeTableWindow {
  history: {
    replaceState: (data: unknown, unused: string, url?: string) => void;
  };
  location: {
    hash: string;
  };
}

const getWindow = () =>
  (globalThis as typeof globalThis & { window?: TypeTableWindow }).window;

const TypeTableItem = ({
  item,
  name,
  parentId,
  open,
  rounded,
  onOpenChange
}: {
  item: TypeNode;
  name: string;
  parentId?: string;
  open: boolean;
  rounded: boolean;
  onOpenChange: (name: string, open: boolean) => void;
}) => {
  const id = getItemId(parentId, name);

  useEffect(() => {
    const currentWindow = getWindow();

    if (id && currentWindow?.location.hash === `#${id}`) {
      const timeoutId = setTimeout(() => onOpenChange(name, true), 0);

      return () => clearTimeout(timeoutId);
    }

    return undefined;
  }, [id, name, onOpenChange]);

  const handleValueChange = useCallback(
    (value: string | string[]) => {
      const nextOpen = Array.isArray(value) ? value.length > 0 : Boolean(value);
      const currentWindow = getWindow();

      if (nextOpen && id && currentWindow) {
        currentWindow.history.replaceState(null, "", `#${id}`);
      }

      onOpenChange(name, nextOpen);
    },
    [id, name, onOpenChange]
  );

  // Only the first row and rows directly below an expanded row round their
  // top corners; bottom corners stay square so stacked rows read as one block.
  return (
    <View
      overflow="hidden"
      borderTopLeftRadius={rounded ? "container" : 0}
      borderTopRightRadius={rounded ? "container" : 0}>
      <Collapsible
        id={id}
        borderRadius={0}
        bordered={false}
        value={open}
        variant="ghost"
        onValueChange={handleValueChange}>
        <Collapsible.Header
          paddingHorizontal="3xl"
          paddingVertical="2xl"
          backgroundColor="elevated hover:elevatedHovered">
          <TypeTableRow padding={0} flex={1}>
            <PropertyColumn deprecated={item.deprecated}>
              {`${name}${item.required ? "" : "?"}`}
            </PropertyColumn>
            {item.typeDescriptionLink ? (
              <TypeLink href={item.typeDescriptionLink}>{item.type}</TypeLink>
            ) : (
              <TypeColumn>{item.type}</TypeColumn>
            )}
          </TypeTableRow>
        </Collapsible.Header>
        <Collapsible.Content padding={0} backgroundColor="surface">
          <TypeTableItemDetails item={item} />
        </Collapsible.Content>
      </Collapsible>
    </View>
  );
};

export const TypeTable = ({ id, type, ...props }: TypeTableProps) => {
  const [openNames, setOpenNames] = useState<string[]>([]);

  const handleOpenChange = useCallback((name: string, open: boolean) => {
    setOpenNames(prev =>
      open
        ? prev.includes(name)
          ? prev
          : [...prev, name]
        : prev.filter(item => item !== name)
    );
  }, []);

  const names = Object.keys(type);

  return (
    <TypeTableFrame id={id} noPadding {...props}>
      <TypeTableRow>
        <ColumnLabel width="25%">Prop</ColumnLabel>
        <TypeColumn>Type</TypeColumn>
      </TypeTableRow>
      {names.map((name, index) => (
        <TypeTableItem
          key={name}
          item={type[name]!}
          name={name}
          parentId={id}
          open={openNames.includes(name)}
          rounded={index === 0 || openNames.includes(names[index - 1]!)}
          onOpenChange={handleOpenChange}
        />
      ))}
    </TypeTableFrame>
  );
};
