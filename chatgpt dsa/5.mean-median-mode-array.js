import { runTestCases } from "../testcaseRunner/CommonTestCaseRunner.js";
function findMeanMedianMode(arr) {
  //mean = the sum of all values divided by the count of values
  // median = the middle value in a ordered list - sorted list
  // mode = the most frequent repeating values

  const length = arr.length;
  const sum = arr.reduce((acc, current) => {
    return acc + current;
  }, 0);
  const mean = sum / length;

  const sortedArr = mergeSort(arr);
  const median = findMedian(sortedArr);

  const mode = findMode(arr);

  return { mean, median, mode };
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr; //would be already sorted

  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);
  return merge(sortedLeft, sortedRight);
}

function merge(leftArr, rightArr) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      result.push(leftArr[i]);
      i++;
    } else {
      result.push(rightArr[j]);
      j++;
    }
  }
  while (i < leftArr.length) {
    result.push(leftArr[i]);
    i++;
  }
  while (j < rightArr.length) {
    result.push(rightArr[j]);
    j++;
  }

  return result;
}
function findMedian(arr) {
  const length = arr.length;
  const isLengthEven = length % 2 === 0;
  const midIndex = Math.floor(length / 2);
  if (isLengthEven) {
    return (arr[midIndex - 1] + arr[midIndex]) / 2;
  } else {
    return arr[midIndex];
  }
}

function findMode(arr) {
  if (arr.length === 1) return arr[0];
  if (arr.length === 0) return null;
  const frequencies = new Map();
  for (const num of arr) {
    frequencies.set(num, (frequencies.get(num) || 0) + 1);
  }

  let maxCount = 0;
  for (const [num, count] of frequencies) {
    if (count > maxCount) {
      maxCount = count;
    }
  }
  const mode = [];
  for (const [num, count] of frequencies) {
    if (count === maxCount) {
      mode.push(num);
    }
  }
  //sorting mode in assending order because the testcases expects assending order
  mode.sort((a, b) => a - b);

  if (mode.length === frequencies.size && frequencies.size > 1) {
    //evey item one time , or all items are different so return nulll
    return null;
  } else if (mode.length === 1) {
    //one item return the one item
    return mode[0];
  } else {
    //else return the list of modes
    return mode;
  }
}
const testCases = [
  // Basic test cases - simple arrays
  {
    input: [[1, 2, 3, 4, 5]],
    expected: { mean: 3, median: 3, mode: null }, // No repeating numbers
  },
  {
    input: [[1, 2, 2, 3, 4]],
    expected: { mean: 2.4, median: 2, mode: 2 }, // Single mode
  },
  {
    input: [[5, 2, 8, 2, 5]],
    expected: { mean: 4.4, median: 5, mode: [2, 5] }, // Bimodal (two modes)
  },

  // Even length arrays
  {
    input: [[1, 2, 3, 4]],
    expected: { mean: 2.5, median: 2.5, mode: null }, // Even length, median is average of middle two
  },
  {
    input: [[1, 2, 2, 3]],
    expected: { mean: 2, median: 2, mode: 2 }, // Even length with mode
  },

  // Arrays with negative numbers
  {
    input: [[-5, -1, 0, 2, 4]],
    expected: { mean: 0, median: 0, mode: null },
  },
  {
    input: [[-3, -3, -1, 0, 2]],
    expected: { mean: -1, median: -1, mode: -3 },
  },

  // Arrays with decimals
  {
    input: [[1.5, 2.5, 3.5, 4.5]],
    expected: { mean: 3, median: 3, mode: null },
  },
  {
    input: [[1.2, 1.2, 2.3, 3.4]],
    expected: { mean: 2.025, median: 1.75, mode: 1.2 }, // median = (1.2 + 2.3)/2 = 1.75
  },

  // Single element array
  {
    input: [[42]],
    expected: { mean: 42, median: 42, mode: 42 },
  },

  // Two element array
  {
    input: [[10, 20]],
    expected: { mean: 15, median: 15, mode: null },
  },
  {
    input: [[10, 10]],
    expected: { mean: 10, median: 10, mode: 10 },
  },

  // All elements same
  {
    input: [[7, 7, 7, 7, 7]],
    expected: { mean: 7, median: 7, mode: 7 },
  },

  // Multiple modes (more than 2)
  {
    input: [[1, 1, 2, 2, 3, 3, 4]],
    expected: { mean: 2.2857142857142856, median: 2, mode: [1, 2, 3] }, // Trimodal
  },

  // Large numbers
  {
    input: [[1000, 2000, 3000, 4000]],
    expected: { mean: 2500, median: 2500, mode: null },
  },

  // Mixed positive and negative with zeros
  {
    input: [[-2, -1, 0, 1, 2]],
    expected: { mean: 0, median: 0, mode: null },
  },
  {
    input: [[-1, -1, 0, 0, 1]],
    expected: { mean: -0.2, median: 0, mode: [-1, 0] },
  },

  // Unsorted input (to test if your function sorts properly)
  {
    input: [[9, 1, 5, 3, 7]],
    expected: { mean: 5, median: 5, mode: null },
  },
  {
    input: [[8, 3, 5, 3, 8, 1]],
    expected: { mean: 4.666666666666667, median: 4, mode: [3, 8] }, // Sorted: [1,3,3,5,8,8], median = (3+5)/2 = 4
  },

  // Edge case: Empty array (if you want to handle it)
  // Commented out because it might break your implementation
  // {
  //   input: [[]],
  //   expected: { mean: null, median: null, mode: null }
  // },

  // Large dataset with predictable results
  {
    input: [[1, 1, 1, 2, 2, 3, 4, 5, 5, 5]],
    expected: { mean: 2.9, median: 2.5, mode: [1, 5] }, // Sorted: [1,1,1,2,2,3,4,5,5,5], median = (2+3)/2 = 2.5
  },

  // All negative numbers
  {
    input: [[-10, -8, -6, -4, -2]],
    expected: { mean: -6, median: -6, mode: null },
  },

  // Mode appears more than half the time
  {
    input: [[3, 3, 3, 3, 1, 2]],
    expected: { mean: 2.5, median: 3, mode: 3 }, // Sorted: [1,2,3,3,3,3], median = (3+3)/2 = 3
  },
];
runTestCases(findMeanMedianMode, testCases);
