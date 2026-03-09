import { runTestCases } from "../testcaseRunner/CommonTestCaseRunner.js";
function reverseArray(arr) {
  const reverse = [...arr];
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [reverse[left], reverse[right]] = [reverse[right], reverse[left]];
    left++;
    right--;
  }

  return reverse;
}

// using build in  methods
function reverseArrayUsingMehods(arr) {
  return arr.reduce((acc, currentValue) => [currentValue, ...acc], []);
  /* 
| Step | acc   | curr | result  |
| ---- | ----- | --- | ------- |
| 1    | []    | 1   | [1]     |
| 2    | [1]   | 2   | [2,1]   |
| 3    | [2,1] | 3   | [3,2,1] |

*/

  return arr.slice().reverse(); //slice is shallow coppy
  return [...arr].reverse();
}
export const testCases = [
  {
    input: [[1, 2, 3, 4]],
    expected: [4, 3, 2, 1],
  },
  {
    input: [[1, 2, 3, 4, 5, 6]],
    expected: [6, 5, 4, 3, 2, 1],
  },
  {
    input: [[5, 10, 15]],
    expected: [15, 10, 5],
  },
  {
    input: [[1]],
    expected: [1],
  },
  {
    input: [[9, 8, 7, 6, 5]],
    expected: [5, 6, 7, 8, 9],
  },
  {
    input: [[]],
    expected: [],
  },
];

runTestCases(reverseArray, testCases);
runTestCases(reverseArrayUsingMehods, testCases);
