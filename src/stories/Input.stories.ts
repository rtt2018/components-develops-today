import Input from "@/components/Input/Input";
import type { Meta, StoryObj } from "@storybook/nextjs";
// import { fn } from "storybook/test";

const meta = {
  component: Input,
  title: "Components/Input",
  args: {
    type: "text",
    clearable: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleInput: Story = {
  args: {
    type: "text",
    clearable: false,
  },
};

export const SimpleClearableInput: Story = {
  args: {
    type: "text",
    clearable: true,
  },
};

export const SimplePassword: Story = {
  args: {
    type: "password",
    clearable: false,
  },
};

export const PasswordClearable: Story = {
  args: {
    type: "password",
    clearable: true,
  },
};
