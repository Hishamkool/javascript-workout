function findSmallestMissingId(arr) {
  //boodID array - +ve non zero number
  // bookID can be null or duplicate
  // find smallest bookid that isntin the catalog in order
  if (arr.length < 1) return 1;
  const filterOutNonNumb = arr.map((item) => {
    if (typeof item === "number") {
      return item;
    } else if (typeof item === "string") {
      return Number(item);
    } else if (typeof item === "boolean") {
      return Number(item);
    } else {
      return;
    }
  });
  const uniqueItems = [...new Set(filterOutNonNumb)]; // ignoring duplicates
  // now need to ignore negative and zero numbers

  const sortedArray = uniqueItems.sort((a, b) => a - b);
  const filterPositive = sortedArray.filter((num) => num > 0);
  let initialValue = 1;
  for (let i = 0; i < filterPositive.length; i++) {
    if (filterPositive[i] !== initialValue) {
      return initialValue;
    }
    initialValue++;
  }
  return initialValue;
}

console.log(`\n------------------------`);

const testCases = [
  // Example from problem
  { input: [3, 4, 2, 7, 1], expected: 5 },
  { input: [false, true, true, 3, 4], expected: 2 },

  // Basic cases
  { input: [1, 2, 3, 4, 5], expected: 6 }, // No missing IDs
  { input: [1, 2, 3, 4, 6], expected: 5 }, // Missing middle
  { input: [2, 3, 4, 5, 6], expected: 1 }, // Missing smallest (1)
  { input: [1, 3, 4, 5, 6], expected: 2 }, // Missing 2

  // Duplicate IDs
  { input: [1, 1, 2, 3, 4], expected: 5 }, // With duplicates
  { input: [1, 2, 2, 3, 4, 4], expected: 5 }, // Multiple duplicates
  { input: [1, 1, 1, 1, 1], expected: 2 }, // All same ID

  // Empty and small arrays
  { input: [], expected: 1 }, // Empty catalog
  { input: [1], expected: 2 }, // Single ID
  { input: [2], expected: 1 }, // Single ID missing 1
  { input: [5], expected: 1 }, // Single large ID

  // Unordered arrays
  { input: [5, 3, 1, 4, 2], expected: 6 }, // Perfect sequence unordered
  { input: [7, 5, 3, 1, 9], expected: 2 }, // Random order

  // Negative numbers and zero (should be ignored per problem: "positive non zero number")
  { input: [-1, 0, 1, 2, 3], expected: 4 }, // Ignore negatives and zero
  { input: [-5, -3, -1, 0, 2], expected: 1 }, // Only positive matter
  { input: [-10, -5, 0, 5, 10], expected: 1 }, // Mixed with positives
  { input: [0, 0, 0, 0, 0], expected: 1 }, // All zeros
  { input: [-1, -2, -3, -4, -5], expected: 1 }, // All negatives
  // Large numbers
  { input: [1000, 2000, 3000], expected: 1 }, // Large numbers, missing 1
  { input: [1, 1000, 1001, 1002], expected: 2 }, // Missing small number
  { input: [Number.MAX_SAFE_INTEGER], expected: 1 }, // Extremely large ID

  // Unsorted with gaps
  { input: [10, 1, 8, 3, 6], expected: 2 }, // Multiple gaps, smallest is 2
  { input: [4, 1, 3, 8, 2], expected: 5 }, // Has 1-4, missing 5
  { input: [6, 4, 3, 7, 2], expected: 1 }, // Missing 1

  // Performance test case (commented out - large array)
  // { input: Array.from({ length: 1000000 }, (_, i) => i + 1), expected: 1000001 },  // Perfect sequence

  // Edge cases with duplicates and gaps
  { input: [1, 1, 2, 2, 4, 4], expected: 3 }, // Duplicates with gap
  { input: [1, 3, 3, 3, 5, 5], expected: 2 }, // Multiple duplicates, missing 2
  { input: [2, 2, 2, 2, 2, 2], expected: 1 }, // All same, missing 1

  // Mixed with invalid entries (if function should handle)
  { input: [1, "2", 3, null, 4], expected: 5 }, // Mixed types (if handling)
  { input: [1, NaN, 2, undefined, 3], expected: 4 }, // With invalid values
  { input: [true, false, 1, 2, 3], expected: 4 }, // With booleans

  // Sparse sequences
  { input: [1, 2, 3, 50, 51, 52], expected: 4 }, // Big gap, but smallest missing is 4
  { input: [1, 3, 5, 7, 9], expected: 2 }, // Odd numbers only
  { input: [2, 4, 6, 8, 10], expected: 1 }, // Even numbers only

  // Boundary cases
  { input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expected: 11 }, // First 10 present
  { input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11], expected: 10 }, // Missing 10
  { input: [100, 101, 102, 103, 104], expected: 1 }, // All large

  // Random sequences
  { input: [3, 5, 7, 9, 11, 13], expected: 1 }, // All odd, large
  { input: [1, 4, 6, 8, 10, 12], expected: 2 }, // Mixed pattern
  { input: [2, 5, 8, 11, 14, 17], expected: 1 }, // Arithmetic progression

  // With maximum possible values
  { input: [1, 2, 3, 4, 5, 1000000], expected: 6 }, // One huge number
  { input: [1, 999999, 1000000, 1000001], expected: 2 }, // Missing small number
];

let score = 0;
const result = [];
testCases.forEach(({ input, expected }) => {
  const userOut = findSmallestMissingId(input);
  const isCorrect = expected === userOut;
  if (isCorrect) score++;
  result.push({
    passed: isCorrect,
    status: isCorrect ? "✅ Pass" : "❌ Fail",
    input,
    expected,
    result: userOut,
  });
});

result.sort((a, b) => b.passed - a.passed);
console.log(result);
console.log(
  `📊 Final score : ${score}/${testCases.length} ${score === testCases.length && "💯 congrats"}`,
);
