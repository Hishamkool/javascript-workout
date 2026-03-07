function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
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

const mergeSortTestCases = [
  // Edge Cases
  { input: [], expected: [] },
  { input: [5], expected: [5] },

  // Two Elements
  { input: [1, 2], expected: [1, 2] },
  { input: [2, 1], expected: [1, 2] },

  // Small Arrays
  { input: [3, 1, 2], expected: [1, 2, 3] },
  { input: [4, 2, 1, 3], expected: [1, 2, 3, 4] },

  // Random Order
  {
    input: [38, 27, 43, 3, 9, 82, 10],
    expected: [3, 9, 10, 27, 38, 43, 82],
  },

  // Already Sorted
  { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },

  // Reverse Sorted
  { input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5] },

  // Duplicates
  { input: [7, 7, 7, 7], expected: [7, 7, 7, 7] },
  { input: [4, 1, 3, 4, 2, 1], expected: [1, 1, 2, 3, 4, 4] },
  { input: [5, 3, 5, 2, 5, 1], expected: [1, 2, 3, 5, 5, 5] },

  // Negative Numbers
  { input: [-3, -1, -7, -4], expected: [-7, -4, -3, -1] },
  { input: [3, -2, -5, 1, 0], expected: [-5, -2, 0, 1, 3] },

  // Floating Point Numbers
  { input: [3.2, 1.5, 4.8, 2.1], expected: [1.5, 2.1, 3.2, 4.8] },

  // Large Values
  {
    input: [1000000, -1000000, 500000, 0],
    expected: [-1000000, 0, 500000, 1000000],
  },
];

function runTestCases(mergeSortTestCases) {
  for (let i = 0; i < mergeSortTestCases.length; i++) {
    const userResult = mergeSort(mergeSortTestCases[i]["input"]);
    const pass =
      JSON.stringify(userResult) ===
      JSON.stringify(mergeSortTestCases[i]["expected"]);
    console.log(
      `${pass ? "✅" : "❌"} | input:[${mergeSortTestCases[i]["input"]}] | expected: [${mergeSortTestCases[i].expected}] | got: [${userResult}] `,
    );
  }
}
runTestCases(mergeSortTestCases);

/*
gpt version
function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  // Compare elements from both arrays
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add remaining elements
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}
 */
