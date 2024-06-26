import { validateValue } from './validateValue';

describe('validateValue', () => {
  test('Корректное значение', () => {
    expect(validateValue(50)).toBe(true);
  });
  test('Меньше корректного значения', () => {
    expect(validateValue(-1)).toBe(false);
  });
  test('Больше корректного значения', () => {
    expect(validateValue(101)).toBe(false);
  });
  test('Пограничное значения снизу', () => {
    expect(validateValue(0)).toBe(true);
  });
  test('Пограничное значения сверху', () => {
    expect(validateValue(100)).toBe(true);
  });
  test('Некорректное значение', () => {});
});
