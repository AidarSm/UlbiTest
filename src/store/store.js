import counterReducer from './slice/counterSlice';

const store = createStore({ counter: counterReducer });
