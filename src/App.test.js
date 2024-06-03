import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const helloWorldElem = screen.getByText(/Hello World/i);
  expect(helloWorldElem).toBeInTheDocument();
});
