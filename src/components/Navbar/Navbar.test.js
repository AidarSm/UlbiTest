import { fireEvent } from '@testing-library/dom';
import { renderWithRouter } from '../../tests/helpers/renderWithRouter';
import Navbar from './Navbar';

describe('Test-Navbar', () => {
  test('test main link', () => {
    renderWithRouter(<Navbar />);
    const mainLink = screen.getByTestId('main-link');
    fireEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });
  test('test about link', () => {
    renderWithRouter(<Navbar />);
    const aboutLink = screen.getByTestId('about-link');
    fireEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });
  test('test users link', () => {
    renderWithRouter(<Navbar />);
    const userLink = screen.getByTestId('users-link');
    fireEvent.click(userLink);
    expect(screen.getByTestId('users-page')).toBeInTheDocument();
  });
});
