const getData = require('../getdata/getData');
const axios = require('axios');
// замоковаем данные которые нам возвращает мето get у axios, все сторонние модули мы мокаем таким образом
//После вызова jest.mock('axios'), Jest автоматически заменяет все импорты axios в тестах на мок-модуль.
//Поведение мока: По умолчанию, после мокирования модуля, все его экспортируемые функции становятся "мокируемыми",
// то есть они не выполняют никаких действий, кроме возврата значения, которое было задано разработчиком теста.
//Например, можно сделать так, чтобы запрос axios.get() всегда возвращал фиктивный ответ, например, объект с данными о пользователе.

jest.mock('axios');

describe('getData', () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenough',
            zipcode: '92998-3874',
            geo: {
              lat: '-37.3159',
              lng: '81.1496',
            },
          },
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
          company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
          },
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
              lat: '-43.9509',
              lng: '-34.4618',
            },
          },
          phone: '010-692-6593 x09125',
          website: 'anastasia.net',
          company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains',
          },
        },
        {
          id: 3,
          name: 'Clementine Bauch',
          username: 'Samantha',
          email: 'Nathan@yesenia.net',
          address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
              lat: '-68.6102',
              lng: '-47.0653',
            },
          },
          phone: '1-463-123-4447',
          website: 'ramiro.info',
          company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications',
          },
        },
      ],
    };
  });

  test('Корректное значение', async () => {
    axios.get.mockResolvedValue(response);
    const data = await getData();
    expect(axios.get).toBeCalledTimes(1); //проверяем что axios вызовися один раз
    expect(data).toEqual(['1', '2', '3']); // проверяем что получим массив
    expect(data).toMatchSnapshot(); //фиксация результата
  });
});
