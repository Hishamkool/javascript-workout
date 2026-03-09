import { runTestCases } from "../testcaseRunner/CommonTestCaseRunner.js";

function findTopThree(arr) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  for (let num of arr) {
    // make sure u use 'of' other wise if you use 'in'  you will be comparing with the indexes not the values which will be n-1 , n-2, n-3
    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second) {
      third = second;
      second = num;
    } else if (num > third) {
      third = num;
    }
  }
  return { first, second, third };
}

export const testCases = [
  {
    input: [[4, 1, 7, 3, 9, 2]],
    expected: { first: 9, second: 7, third: 4 },
  },
  {
    input: [[10, 5, 8, 20, 15]],
    expected: { first: 20, second: 15, third: 10 },
  },
  {
    input: [[3, 3, 3, 3, 3]],
    expected: { first: 3, second: 3, third: 3 },
  },
  {
    input: [[-10, -5, -2, -8]],
    expected: { first: -2, second: -5, third: -8 },
  },
  {
    input: [[100, 50]],
    expected: { first: 100, second: 50, third: -Infinity },
  },
];

runTestCases(findTopThree, testCases);
