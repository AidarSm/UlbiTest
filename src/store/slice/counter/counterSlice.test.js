import counterSlice, { increment, decrement } from './counterSlice';

describe('TEST slice', () => {
  test('increment', () => {
    expect(counterSlice({ value: 0 }, increment())).toEqual({ value: 1 });
  });
  test('decrement', () => {
    expect(counterSlice({ value: 1 }, decrement())).toEqual({ value: 0 });
  });
  test('не передаем state', () => {
    expect(counterSlice(undefined, decrement())).toEqual({ value: -1 });
    expect(counterSlice(undefined, increment())).toEqual({ value: 1 });
  });
});
