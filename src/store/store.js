import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counter/counterSlice';

//функция которая возщвращает store с переданным начальным значением
export const createReduxStore = (initialState = {}) => {
  return configureStore({
    reducer: { counter: counterReducer },
    preloadedState: initialState, // начально значение
  });
};
