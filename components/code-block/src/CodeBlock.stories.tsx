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

import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileCode2, Terminal } from "@tamagui/lucide-icons-2";
import { expect, userEvent, within } from "storybook/test";
import {
  CodeBlock,
  CodeBlockTab,
  CodeBlockTabs,
  CodeBlockTabsList,
  CodeBlockTabsTrigger,
  Pre
} from "./CodeBlock";

const TypeScriptCode = () => (
  <Pre>
    <code>
      <span data-line>
        <span style={{ color: "#7c3aed" }}>const</span>{" "}
        <span data-highlighted-chars>message</span> ={" "}
        <span style={{ color: "#059669" }}>&quot;Hello, Cyclone!&quot;</span>;
        {"\n"}
      </span>
      <span data-line data-highlighted-line>
        console.log(message);{"\n"}
      </span>
      <span data-line>
        <span className="nd-copy-ignore">$ </span>export {"{ message }"};
      </span>
    </code>
  </Pre>
);

const meta = {
  title: "Documentation/CodeBlock",
  component: CodeBlock,
  tags: ["autodocs"],
  parameters: {
    layout: "padded"
  },
  args: {
    width: 640
  }
} satisfies Meta<typeof CodeBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: args => (
    <CodeBlock {...args} title="example.ts" icon={<FileCode2 />}>
      <TypeScriptCode />
    </CodeBlock>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const copy = canvas.getByRole("button", { name: "Copy text" });
    await userEvent.click(copy);
    await expect(
      canvas.getByRole("button", { name: "Copied text" })
    ).toBeInTheDocument();
  }
};

export const WithoutTitle: Story = {
  render: args => (
    <CodeBlock {...args}>
      <TypeScriptCode />
    </CodeBlock>
  )
};

export const WithoutCopy: Story = {
  render: args => (
    <CodeBlock {...args} title="read-only.ts" allowCopy={false}>
      <TypeScriptCode />
    </CodeBlock>
  )
};

export const LineNumbers: Story = {
  render: args => (
    <CodeBlock
      {...args}
      title="line-numbers.ts"
      data-line-numbers={true}
      data-line-numbers-start={4}>
      <TypeScriptCode />
    </CodeBlock>
  )
};

export const KeepShikiBackground: Story = {
  render: args => (
    <CodeBlock
      {...args}
      title="shiki.ts"
      keepBackground={true}
      style={
        {
          "--shiki-light-bg": "#f6f8fa",
          "--shiki-dark-bg": "#0d1117"
        } as any
      }>
      <TypeScriptCode />
    </CodeBlock>
  )
};

export const Tabs: Story = {
  render: args => (
    <CodeBlockTabs defaultValue="pnpm" width={args.width}>
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="pnpm">pnpm</CodeBlockTabsTrigger>
        <CodeBlockTabsTrigger value="npm">npm</CodeBlockTabsTrigger>
      </CodeBlockTabsList>
      <CodeBlockTab value="pnpm">
        <CodeBlock allowCopy={true}>
          <Pre>
            <code>pnpm add @cyclone-ui/code-block</code>
          </Pre>
        </CodeBlock>
      </CodeBlockTab>
      <CodeBlockTab value="npm">
        <CodeBlock allowCopy={true}>
          <Pre>
            <code>npm install @cyclone-ui/code-block</code>
          </Pre>
        </CodeBlock>
      </CodeBlockTab>
    </CodeBlockTabs>
  )
};

export const CompoundCompatibility: Story = {
  render: args => (
    <CodeBlock {...args} allowCopy={false}>
      <CodeBlock.Header>
        <CodeBlock.Header.Icon>
          <Terminal />
        </CodeBlock.Header.Icon>
        <CodeBlock.Header.Heading>terminal</CodeBlock.Header.Heading>
      </CodeBlock.Header>
      <CodeBlock.Body>pnpm exec nx build code-block</CodeBlock.Body>
    </CodeBlock>
  )
};
