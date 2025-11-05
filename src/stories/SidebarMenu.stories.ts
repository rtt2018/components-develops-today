import SidebarMenu from '@/components/SidebarMenu/SidebarMenu';
import type { Meta, StoryObj } from '@storybook/nextjs';
// import { fn } from "storybook/test";
import { menuRenderData } from '@/data/menu.js';

const meta: Meta<typeof SidebarMenu> = {
  component: SidebarMenu,
  title: 'Components/Sidebar',
  args: { menuElements: menuRenderData },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SidebarMenuStory: Story = {
  args: { menuElements: menuRenderData },
};
