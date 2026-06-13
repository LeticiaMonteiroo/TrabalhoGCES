const fc = require('fast-check');
const { GameCollection } = require('../games');

describe('Fuzzing GameCollection', () => {
  test('createGame não deve lançar exceção para entradas aleatórias', () => {
    fc.assert(
      fc.property(fc.anything(), (value) => {
        const collection = new GameCollection();

        expect(() => {
          collection.createGame(String(value));
        }).not.toThrow();
      })
    );
  });
});