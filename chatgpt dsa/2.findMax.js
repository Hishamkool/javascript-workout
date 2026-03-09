import { runTestCases } from "../testcaseRunner/CommonTestCaseRunner.js";

function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

// inbuild method
function maxInbuild(arr) {
  return Math.max(...arr);
  return arr.reduce((acc, curr) => (curr > acc ? curr : acc));
}
export const testCases = [
  {
    input: [[3, 7, 2, 9, 5]],
    expected: 9,
  },
  {
    input: [[10, 4, 8, 1]],
    expected: 10,
  },
  {
    input: [[-5, -1, -10]],
    expected: -1,
  },
  {
    input: [[7]],
    expected: 7,
  },
  {
    input: [[0, 0, 0]],
    expected: 0,
  },
];
runTestCases(findMax, testCases);
runTestCases(maxInbuild, testCases);
