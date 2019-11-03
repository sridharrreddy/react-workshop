import React from 'react';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import Blogger from './Blogger';
import { GetUsers } from '../service';

jest.mock('../service');

it('should render table', async () => {
  GetUsers.mockResolvedValue([]);
  const { getByTitle } = await render(<Blogger />);
  expect(getByTitle('user list')).toBeTruthy();
});

it('should render table with 1 row', async () => {
  GetUsers.mockResolvedValue([
    {
      id: 1,
      name: 'Leanne Graham',
    },
  ]);
  const { queryAllByRole, queryByRole } = await render(<Blogger />);
  await waitForElementToBeRemoved(() => queryByRole('progressbar'));
  expect(queryAllByRole('listitem').length).toBe(1);
});

it('should render table with 2 rows', async () => {
  GetUsers.mockResolvedValue([
    {
      id: 1,
      name: 'Leanne Graham',
    },
    {
      id: 2,
      name: 'John Appleseed',
    },
  ]);
  const { queryAllByRole, queryByRole } = await render(<Blogger />);
  await waitForElementToBeRemoved(() => queryByRole('progressbar'));
  expect(queryAllByRole('listitem').length).toBe(2);
});
