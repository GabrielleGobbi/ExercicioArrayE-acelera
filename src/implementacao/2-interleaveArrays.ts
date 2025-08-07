export function interleaveArrays(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (i < arr1.length) result.push(arr1[i]);
    if (i < arr2.length) result.push(arr2[i]);
  }

  return result;
}
