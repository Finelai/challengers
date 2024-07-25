import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';

initialize({
  onUnhandledRequest: ({ url, method }) => {
    console.error(`Unhandled ${method} request to ${url}`);
  },
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    html: {
      prettier: {
        tabWidth: 2,
        useTabs: false,
        printWidth: 120,
      },
    },
  },
  tags: ['autodocs'],
  loaders: [mswLoader],
};

export default preview;
