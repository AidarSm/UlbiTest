const delay = require('./delay');

describe('delay', () => {
  // каллбек делаем асинхронным
  test('Корректное значение', async () => {
    const sum = await delay(() => 3 + 3, 1000);
    expect(sum).toBe(6);
  });
});
