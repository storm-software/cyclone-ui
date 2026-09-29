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
import { styled, View } from "@tamagui/core";
import type { ReactNode } from "react";
import type { TypeNode } from "./TypeTable";

const TypeTableDetailsFrame = styled(View, {
  displayName: "TypeTableDetails",
  gap: "4xl",
  padding: "3xl"
});

const DetailRow = styled(View, {
  displayName: "TypeTableDetailRow",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "3xl"
});

const DetailLabel = styled(BodyText, {
  displayName: "TypeTableDetailLabel",
  width: "25%",
  flexShrink: 0,
  color: "inkSubtle",
  fontFamily: "title-lg"
});

const DetailValue = styled(BodyText, {
  displayName: "TypeTableDetailValue",
  flex: 1,
  color: "inkBody"
});

const hasValue = (value: ReactNode) => value !== undefined && value !== null;

const renderValue = (value: ReactNode): ReactNode =>
  typeof value === "boolean" ? String(value) : value;

export const TypeTableItemDetails = ({ item }: { item: TypeNode }) => (
  <TypeTableDetailsFrame>
    {hasValue(item.description) ? (
      <DetailValue>{renderValue(item.description)}</DetailValue>
    ) : null}
    {hasValue(item.typeDescription) ? (
      <DetailRow>
        <DetailLabel>Type</DetailLabel>
        <DetailValue>{renderValue(item.typeDescription)}</DetailValue>
      </DetailRow>
    ) : null}
    {hasValue(item.default) ? (
      <DetailRow>
        <DetailLabel>Default</DetailLabel>
        <DetailValue>{renderValue(item.default)}</DetailValue>
      </DetailRow>
    ) : null}
    {item.parameters && item.parameters.length > 0 ? (
      <DetailRow>
        <DetailLabel>Parameters</DetailLabel>
        <View flex={1} gap="2xl">
          {item.parameters.map(parameter => (
            <DetailRow key={parameter.name} gap="xl">
              <DetailValue flex={0}>{parameter.name}</DetailValue>
              <DetailValue>{renderValue(parameter.description)}</DetailValue>
            </DetailRow>
          ))}
        </View>
      </DetailRow>
    ) : null}
    {hasValue(item.returns) ? (
      <DetailRow>
        <DetailLabel>Returns</DetailLabel>
        <DetailValue>{renderValue(item.returns)}</DetailValue>
      </DetailRow>
    ) : null}
  </TypeTableDetailsFrame>
);
