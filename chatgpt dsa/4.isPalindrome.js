import { runTestCases } from "../testcaseRunner/CommonTestCaseRunner.js";

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

export const testCases = [
  {
    input: ["madam"],
    expected: true,
  },
  {
    input: ["racecar"],
    expected: true,
  },
  {
    input: ["hello"],
    expected: false,
  },
  {
    input: ["a"],
    expected: true,
  },
  {
    input: ["abba"],
    expected: true,
  },
  {
    input: ["harmonium"],
    expected: false,
  },
];
runTestCases(isPalindrome, testCases);
