import GameSavingLoader from '../src/js/GameSavingLoader';

jest.setTimeout(10000);

test('should return the same string', () => {
  const initialData = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';
  return GameSavingLoader.load().then(value => {
    expect(value).toBe(initialData);
  });
});

test('mocking rejection of readGameSaving()', () => {
  // ToDo
});