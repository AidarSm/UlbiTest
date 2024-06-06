import { fireEvent, render, screen } from '@testing-library/react';
import Users from './Users';
import axios from 'axios';
import { renderWithRouter } from '../tests/helpers/renderWithRouter';

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
  afterEach(() => {
    jest.clearAllMocks();
  });

  test.skip('check users', async () => {
    axios.get.mockResolvedValue(response);
    render(<Users />);
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
  });
  test('check redirect to details page', async () => {
    axios.get.mockResolvedValue(response);
    // renderWithRouter(null, '/users');
    renderWithRouter(<Users />);
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(3);
   //  expect(users[0]).toHaveAttribute('href', '/users/1');
    fireEvent.click(users[0]);
    expect(screen.getByTestId('user-page')).toBeInTheDocument();
   //  expect(window.location.pathname).toBe('/users/1');
  });
});
