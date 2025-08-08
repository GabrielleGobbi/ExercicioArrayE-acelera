import { doubleEvensTripleOdds } from '../src/implementacao/1-doubleEvensTripleOdds';
import data from '../src/db/1-evensAndOddsData.json';

describe('Exercicio 1 : Pares em dobro e Ímpares triplo', () => {
  test('deve transformar corretamente o vetor conforme o enunciado', () => {
    expect(doubleEvensTripleOdds(data.originalArray)).toEqual(data.transformedArray);
  });
});
