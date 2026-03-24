import { runTestCases } from "../testcaseRunner/CommonTestCaseRunner.js";
function reverseStringConvertingToArray(str) {
  const strArr = str.split("");
  let left = 0;
  let right = strArr.length - 1;
  while (left < right) {
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
    left++;
    right--;
  }

  return strArr.join("");
}

function reverseStringLoopBackwards(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

function reverseStringBuildIn(str) {
  return str.split("").reverse().join("");
}

const testCases = [
  { input: ["hello"], expected: "olleh" },
  { input: ["world"], expected: "dlrow" },
  { input: ["javascript"], expected: "tpircsavaj" },

  // edge cases
  { input: [""], expected: "" },
  { input: ["a"], expected: "a" },
  { input: ["aa"], expected: "aa" },

  // spaces
  { input: ["hello world"], expected: "dlrow olleh" },
  { input: [" a"], expected: "a " },
  { input: ["a "], expected: " a" },

  // numbers in string
  { input: ["12345"], expected: "54321" },
  { input: ["abc123"], expected: "321cba" },

  // special characters
  { input: ["!@#"], expected: "#@!" },
  { input: ["a-b-c"], expected: "c-b-a" },

  // unicode
  { input: ["héllo"], expected: "olléh" },
];

runTestCases(reverseStringConvertingToArray, testCases);
runTestCases(reverseStringLoopBackwards, testCases);
runTestCases(reverseStringBuildIn, testCases);
