import React from 'react';
import { render } from '@testing-library/react';
import Blogger from './Blogger';
import GetUsers from '../service';

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
  const { queryAllByRole } = await render(<Blogger />);
  expect(queryAllByRole('listitem').length).toBe(1);
});
