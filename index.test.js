const { findMinSumSubArray, findMaxSumSubArray } = require('./index');

describe('findMinSumPair', () => {
  test('Should result in the min subarray', () => {
    const actual = findMinSumSubArray([4, 2, 2, 7, 8, 1, 2, 8, 10]);
    const expected = [4, 2, 2];
    expect(actual).toEqual(expected);
  });
});

describe('findMaxSumSubArray', () => {
  test('Should result in the max subarray', () => {
    const actual = findMaxSumSubArray([4, 2, 2, 7, 8, 1, 2, 8, 10]);
    const expected = [2, 8, 10];
    expect(actual).toEqual(expected);
  });
});
