import { fireEvent, render, screen } from '@testing-library/react';
import Users from './Users';
import UsersDetailsPage from '../pages/UsersDetailsPage';
import axios from 'axios';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

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
    render(
      <MemoryRouter initialEntries={['/users']}>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UsersDetailsPage />} />
          <Users />
        </Routes>
      </MemoryRouter>,
    );
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(3);
    //  expect(users[0]).toHaveAttribute('href', '/users/1');
    fireEvent.click(users[0]);
    expect(screen.getByTestId('user-page')).toBeInTheDocument();
    //  expect(window.location.pathname).toBe('/users/1');
  });
});
