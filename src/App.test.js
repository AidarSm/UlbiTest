import { render, screen } from '@testing-library/react';
import App from './App';

describe('TEST APP', () => {
  test('renders learn react', async () => {
    render(<App />);
    // const helloWorldElem = screen.queryByText(/Hello2/i);
    // expect(helloWorldElem).toBeNull();
    screen.debug();
    const helloWorldElem = await screen.findByText(/data/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(helloWorldElem).toHaveStyle({ color: 'red' });
    screen.debug();
  });

  test('renders learn react link', () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/Hello World/i);
    const button = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value.../i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});
