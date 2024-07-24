import type { Meta, StoryObj } from '@storybook/react';

import { expect, within } from '@storybook/test';

import { Header } from './Header';

const meta = {
  component: Header,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderStory: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Should render a link to the home page', async () => {
      const linkElement = await canvas.findByText(/Home/i);

      await expect(linkElement).toBeInTheDocument();
    });

    await step('Logo should be visible', async () => {
      const logo = await canvas.getByAltText('Challengers Logo');

      await expect(logo).toBeVisible();
    });
  },
};
