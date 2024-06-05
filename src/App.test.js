import React, { act } from 'react'; // Импортируйте act из react
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('TEST APP', () => {
  test.skip('renders learn react', async () => {
    render(<App />);
    // const helloWorldElem = screen.queryByText(/Hello2/i);
    // expect(helloWorldElem).toBeNull();

    const helloWorldElem = await screen.findByText(/data/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(helloWorldElem).toBeInTheDocument();
    expect(helloWorldElem).toHaveStyle({ color: 'red' });
  });

  test.skip('renders learn react link', () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/Hello World/i);
    const button = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value.../i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test.skip('click button', () => {
    render(<App />);
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-element')).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-element')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-element')).toBeNull();
  });
  test.skip('change input', async () => {
    render(<App />);
    const input = screen.getByTestId('inputElement');
    expect(screen.getByTestId('div-element')).toContainHTML('');
    //  fireEvent.change(input, { target: { value: '2' } });
    await userEvent.type(input, '2');
    expect(input).toHaveValue('2');
    expect(screen.getByTestId('div-element')).toHaveTextContent('2');
  });
});
