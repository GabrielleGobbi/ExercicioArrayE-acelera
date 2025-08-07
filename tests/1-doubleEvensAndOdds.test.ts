import { doubleEvensTripleOdds } from '../src/implementacao/1-doubleEvensTripleOdds';
import { originalArray, transformedArray } from './1-evensAndOddsData';

describe('Exercicio 1 : Pares em dobro e Impares triplo', () => {
  test('deve transformar corretamente o vetor conforme o enunciado', () => {
    expect(doubleEvensTripleOdds(originalArray)).toEqual(transformedArray);
  });
});