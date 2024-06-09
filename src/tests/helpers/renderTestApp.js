import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../../store/store';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../../router/AppRouter';

export const renderTestApp = (component, options) => {
  return render(
    <Provider store={createReduxStore(options?.initialState)}>
      <MemoryRouter initialEntries={[options?.route]}>
        <AppRouter />
        {component}
      </MemoryRouter>
      ,
    </Provider>,
  );
};
