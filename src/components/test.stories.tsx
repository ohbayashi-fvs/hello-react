import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Test } from "./test";

export default {
  component: Test,
} as ComponentMeta<typeof Test>;

export const Default: ComponentStoryObj<typeof Test> = {
  args: {},
  parameters: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
