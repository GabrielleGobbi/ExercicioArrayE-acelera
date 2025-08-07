import { interleaveArrays } from '../src/implementacao/2-interleaveArrays';
import { vector1, vector2, interleavedVector } from './2-arraySumData';

describe('Exercise 2: interleaveArrays', () => {
  test('deve intercalar corretamente os dois vetores', () => {
    expect(interleaveArrays(vector1, vector2)).toEqual(interleavedVector);
  });
});
