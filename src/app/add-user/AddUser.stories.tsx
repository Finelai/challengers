import type { Meta, StoryObj } from '@storybook/react';

import { http, HttpResponse, delay } from 'msw';

import AddUserPage from './page';

const meta = {
  title: 'pages/AddUser',
  component: AddUserPage,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AddUserPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddUserSuccess = {
  parameters: {
    msw: {
      handlers: [
        http.post('http://localhost:6006/add-user/api', async () => {
          await delay(500);
          return HttpResponse.json({ name: 'Jim' }, { status: 200 });
        }),
      ],
    },
  },
} satisfies Story;

export const AddUserFail = {
  parameters: {
    msw: {
      handlers: [
        http.post('http://localhost:6006/add-user/api', async () => {
          await delay(500);
          return HttpResponse.json(
            { error: 'provide all data to create new user: name, email, password' },
            { status: 500 },
          );
        }),
      ],
    },
  },
} satisfies Story;
