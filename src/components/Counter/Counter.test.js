import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../../store/store';
import { renderWithRedux } from '../../tests/helpers/renderWithRedux';
import Counter from './Counter';
import { renderTestApp } from '../../tests/helpers/renderTestApp';

describe('Counter test', () => {
  test('increment button', async () => {
    render(
      // Благодоря функции createReduxStore() передаем начальное состояние
      <Provider store={createReduxStore({ counter: { value: 10 } })}>
        <Counter />
      </Provider>,
    );
    expect(screen.getByText('10')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement button', async () => {
    // рендерим компонент с помощью renderWithRedux (helper)
    renderWithRedux(<Counter />, { counter: { value: 10 } });

    const decrementBtn = screen.getByTestId('decrement-btn');
    expect(decrementBtn).toBeInTheDocument();
    fireEvent.click(decrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
  test('decrement button with redux', async () => {
    // рендерим компонент с помощью renderTestApp (helper) можем уазываеть путь и начальное состояние
    renderTestApp(null, {
      route: '/counter',
      initialState: { counter: { value: 10 } },
    });

    const decrementBtn = screen.getByTestId('decrement-btn');
    expect(decrementBtn).toBeInTheDocument();
    fireEvent.click(decrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
