import { interleaveArrays } from '../src/implementacao/2-interleaveArrays';
import data from '../src/db/2-interleaveArraysData.json';

describe('Exercise 2: interleaveArrays', () => {
  test('deve intercalar corretamente os dois vetores', () => {
    expect(interleaveArrays(data.vector1, data.vector2)).toEqual(data.interleavedVector);
  });
});
