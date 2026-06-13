const { GameCollection } = require('../games');

describe('GameCollection', () => {
  test('deve criar um jogo', () => {
    const collection = new GameCollection();

    const result = collection.createGame('teste');

    expect(result).toBe(true);
    expect(collection.getGame('teste')).toBeDefined();
  });

  test('não deve criar jogo duplicado', () => {
    const collection = new GameCollection();

    collection.createGame('teste');

    const result = collection.createGame('teste');

    expect(result).toBe(false);
  });

  test('deve remover um jogo existente', () => {
    const collection = new GameCollection();

    collection.createGame('teste');

    const result = collection.removeGame('teste');

    expect(result).toBe(true);
    expect(collection.getGame('teste')).toBeUndefined();
  });

  test('deve retornar false ao remover jogo inexistente', () => {
    const collection = new GameCollection();

    const result = collection.removeGame('inexistente');

    expect(result).toBe(true);
  });
});