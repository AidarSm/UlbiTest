import { fireEvent, render, screen } from '@testing-library/react';
import axios from 'axios';
import Users from './Users';

jest.mock('axios');

describe('TEST USERS', () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
        },
        {
          id: 2,
          name: 'Ervin Howell',
        },
        {
          id: 3,
          name: 'Clementine Bauch',
        },
      ],
    };
  });
  test('check users', async () => {
    axios.get.mockResolvedValue(response);
    render(<Users />);
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
    screen.debug();
  });
});
