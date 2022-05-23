import GameSavingLoader from '../GameSavingLoader';

test('load method in GameSavingLoader class must return an object', () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  return expect(GameSavingLoader.load()).resolves.toEqual(expected);
});
