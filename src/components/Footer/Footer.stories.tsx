import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta = {
  component: Footer,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterStory: Story = {};
