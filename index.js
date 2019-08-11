/**
 * Find the largest combination of 3 contiguous numbers
 * with maximum sum in an array
 */

module.exports.findMinSumSubArray = (arr) => {
  function sum(a) {
    return a.reduce((s, n) => s + n, 0);
  }

  let minSum;
  let minSubArr;

  for (let i = 1; i < arr.length - 1; i += 1) {
    const subArr = [arr[i - 1], arr[i], arr[i + 1]];
    const total = sum(subArr);

    if (!(total > minSum)) {
      minSum = total;
      minSubArr = subArr;
    }
  }

  return minSubArr;
};

module.exports.findMaxSumSubArray = (arr) => {
  function sum(a) {
    return a.reduce((s, n) => s + n, 0);
  }

  let maxSum;
  let maxSubArr;

  for (let i = 1; i < arr.length - 1; i += 1) {
    const subArr = [arr[i - 1], arr[i], arr[i + 1]];
    const total = sum(subArr);

    if (!(total < maxSum)) {
      maxSum = total;
      maxSubArr = subArr;
    }
  }

  return maxSubArr;
};
