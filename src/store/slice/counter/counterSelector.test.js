import { selectValue } from './counterSelector';

describe('TEST selector', () => {
  test('Проверяем корректность работы селектора при пустом state', () => {
    expect(selectValue({})).toBe(0);
  });
  test('Проверяем корректность работы селектора при заполненном state', () => {
    expect(selectValue({ counter: { value: 10 } })).toBe(10);
  });
});
