import { runTestCases } from "../testcaseRunner/CommonTestCaseRunner.js";

function FibonacciSeriesTill(max) {
  const fibonacci = [];
  let first = 0;
  let second = 1;
  fibonacci.push(first, second);
  for (let i = 3; i < max; i++) {
    let next = first + second;
    fibonacci.push(next);
    first = second;
    second = next;
  }
  return fibonacci;
}
console.log(FibonacciSeriesTill(100));

function printNthFibonacciAt(nth) {
  if (nth < 0) return null;
  if (nth === 0) return 0;
  if (nth === 1) return 1;
  let prev = 0;
  let current = 1;
  for (let i = 2; i <= nth; i++) {
    [prev, current] = [current, prev + current];
  }
  return current;
}

// function printNthFibonacciAt(nth) {
//   if (nth < 0) return null;
//   const fibonacci = [];
//   let first = 0;
//   let second = 1;
//   fibonacci.push(first, second);
//   for (let i = 3; i <= nth + 1; i++) {
//     const next = first + second;
//     fibonacci.push(next);
//     first = second;
//     second = next;
//   }

//   return fibonacci[nth];
// }

const nthFibonacciTestCases = [
  // Basic test cases - 0-indexed (standard: F(0)=0, F(1)=1)
  {
    input: [0],
    expected: 0,
  },
  {
    input: [1],
    expected: 1,
  },
  {
    input: [2],
    expected: 1,
  },
  {
    input: [3],
    expected: 2,
  },
  {
    input: [4],
    expected: 3,
  },
  {
    input: [5],
    expected: 5,
  },
  {
    input: [6],
    expected: 8,
  },
  {
    input: [7],
    expected: 13,
  },
  {
    input: [8],
    expected: 21,
  },
  {
    input: [9],
    expected: 34,
  },
  {
    input: [10],
    expected: 55,
  },

  // Edge cases
  {
    input: [-1],
    expected: null, // or undefined, depending on your handling
  },
  {
    input: [-5],
    expected: null,
  },

  // Larger numbers
  {
    input: [15],
    expected: 610,
  },
  {
    input: [20],
    expected: 6765,
  },
  {
    input: [25],
    expected: 75025,
  },
  {
    input: [30],
    expected: 832040,
  },

  // Very large (if using BigInt, otherwise these might overflow)
  {
    input: [40],
    expected: 102334155,
  },
  {
    input: [45],
    expected: 1134903170,
  },
  {
    input: [50],
    expected: 12586269025,
  },
];
runTestCases(printNthFibonacciAt, nthFibonacciTestCases);
