function findSecondLargest(mainArr) {
  const validNumbers = mainArr.filter(
    (item) => typeof item === "number" && !isNaN(item),
  );
  //when main array is only of length 1 then there is no second max so return undefined
  if (validNumbers.length < 2) return undefined;
  function findMax(arr) {
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= max) {
        max = arr[i];
      }
    }
    return max;
  }
  const currentMax = findMax(validNumbers);
  const withoutMax = validNumbers.filter((item) => item !== currentMax);
  // when all items are same then the without max array will be empty so we need to return undefined
  if (withoutMax.length === 0) return undefined;
  return findMax(withoutMax);
}

// Test cases for finding second largest value in an array
const testCases = [
  { input: [10, 5, 8, 12, 3], expected: 10 }, // Normal array
  { input: [1, 2, 3, 4, 5], expected: 4 }, // Ascending order
  { input: [5, 4, 3, 2, 1], expected: 4 }, // Descending order
  { input: [7, 7, 7, 7, 7], expected: undefined }, // All elements equal
  { input: [100], expected: undefined }, // Single element
  { input: [3, 1], expected: 1 }, // Two elements
  { input: [-5, -2, -8, -1, -10], expected: -2 }, // Negative numbers
  { input: [3.5, 2.1, 6.7, 4.2, 5.9], expected: 5.9 }, // Floating point numbers
  { input: [10, 9, 10, 8, 7], expected: 9 }, // Duplicate largest values
  { input: [], expected: undefined }, // Empty array
  { input: [null, 5, 10, null], expected: 5 }, // Null values
  { input: [undefined, 5, 10, undefined], expected: 5 }, // Undefined values

  // Negative numbers and decimals
  { input: [-5, -2, -8, -1, -10], expected: -2 },
  { input: [3.5, 2.1, 6.7, 4.2, 5.9], expected: 5.9 },
  { input: [-1.5, -2.3, -0.5, -1.8], expected: -1.5 },

  // Very large numbers
  {
    input: [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER - 1, 1000],
    expected: Number.MAX_SAFE_INTEGER - 1,
  },
  {
    input: [Number.MAX_VALUE, Number.MAX_VALUE / 2, 1000],
    expected: Number.MAX_VALUE / 2,
  },
  { input: [1e308, 1e307, 1e306], expected: 1e307 }, // Very large scientific notation

  // Very small numbers
  { input: [Number.MIN_VALUE, 0, -1], expected: 0 },
  { input: [1e-308, 1e-309, 1e-310], expected: 1e-309 }, // Very small scientific notation

  // Infinity cases
  { input: [Infinity, 1000, 500], expected: 1000 },
  { input: [Infinity, Infinity, 1000], expected: 1000 },
  { input: [-Infinity, -1000, -500], expected: -500 },
  { input: [Infinity, -Infinity, 0], expected: 0 },

  // Mixed types (should handle or throw appropriately)
  { input: [5, "10", 3, "7"], expected: 7 }, // String numbers
  { input: [5, "abc", 10, true], expected: 5 }, // Mixed with non-numbers
  { input: [true, false, true, false], expected: false }, // Booleans (true=1, false=0)

  // Large arrays (simulated - in real test would be huge)
  { input: Array.from({ length: 10000 }, (_, i) => i), expected: 9998 },
  { input: Array.from({ length: 10000 }, () => 42), expected: undefined },

  // Special number cases
  { input: [NaN, 5, 10, NaN], expected: 5 }, // NaN values
  { input: [0, -0, 5, 10], expected: 5 }, // Zero and negative zero
  {
    input: [1.7976931348623157e308, 1.7976931348623157e308 - 1, 100],
    expected: 1.7976931348623157e308 - 1,
  },
];

let score = 0;
const result = [];
// Test execution
testCases.forEach(({ input, expected }) => {
  const userOut = findSecondLargest(input);
  const pass = userOut === expected;
  if (pass) {
    score++;
  }
  result.push({
    passed: `${pass ? "✅PASSED" : "❌ FAILED"}`,
    input,
    expected,
    got: userOut,
  });
});
result.sort((a, b) => {
  if (a.passed > b.passed) return 1; // +ve if b, a
  if (a.passed < b.passed) return -1; // -ve if a,b
  return 0; // original order (i.e, a.passed === b.passed)
});
console.log(result);
console.log(`score = ${score}/ ${testCases.length}`);
