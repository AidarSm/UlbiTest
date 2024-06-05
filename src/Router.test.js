import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import { MemoryRouter } from 'react-router-dom';

describe('Router', () => {
  test('Router test', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const mainLink = screen.getByTestId('main-link');
    expect(mainLink).toBeInTheDocument();
    const aboutLink = screen.getByTestId('about-link');
    fireEvent.click(aboutLink);
    expect(aboutLink).toBeInTheDocument();
  });

  test('Error page', () => {
    render(
      <MemoryRouter initialEntries={['/0890890']}>
        <NotFoundPage />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('notFound-page')).toBeInTheDocument();
  });
});
