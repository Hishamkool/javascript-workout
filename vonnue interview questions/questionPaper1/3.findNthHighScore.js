function findNthHighScore(scores, n) {
  // n is rank required
  /*
  //using sort method
  const sorted = [...scores].sort((a, b) => b - a);
  return sorted[n - 1];
  */
  /* 
  //complex unnecessary checks
  const length = scores.length;
    const isSorted = (array) => {
    for (let i = 0; i < length - 1; i++) {
      if (array[i] < array[i + 1]) {
        return false;
      }
    }
    return true;
  };

  const sort = (array) => {
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (array[j] < array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  };

  if (isSorted(scores)) {
    return scores[n - 1];
  } else {
    const sortedArray = sort(scores);
    return sortedArray[n - 1];
  } */
  // optimized bubble sort
  const array = [...scores];
  const length = array.length;

  for (let i = 0; i < length - 1; i++) {
    // traversing once through the array , no need of last element as we swap , if no swap its already big
    let swapped = false;
    for (let j = 0; j < length - 1 - i; j++) {
      // traversion multiple time each time one large item at the end so we -1 for every iteration, also we need to check only for non sorted items so -i .

      if (array[j] < array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return array[n - 1];
}

const testCases = [
  // Basic cases
  { scores: [1, 4, 2, 5, 3], n: 1, expected: 5 },
  { scores: [1, 4, 2, 5, 3], n: 2, expected: 4 },
  { scores: [1, 4, 2, 5, 3], n: 3, expected: 3 },
  { scores: [1, 4, 2, 5, 3], n: 4, expected: 2 },
  { scores: [1, 4, 2, 5, 3], n: 5, expected: 1 },

  // Duplicates
  { scores: [5, 5, 4, 3, 2], n: 1, expected: 5 },
  { scores: [5, 5, 4, 3, 2], n: 2, expected: 5 }, // 2nd highest is still 5
  { scores: [5, 5, 4, 3, 2], n: 3, expected: 4 },
  { scores: [5, 5, 4, 3, 2], n: 4, expected: 3 },
  { scores: [5, 5, 4, 3, 2], n: 5, expected: 2 },

  // All same
  { scores: [7, 7, 7], n: 1, expected: 7 },
  { scores: [7, 7, 7], n: 2, expected: 7 },
  { scores: [7, 7, 7], n: 3, expected: 7 },

  // Negative numbers
  { scores: [-5, -1, -10, 0, 3], n: 1, expected: 3 },
  { scores: [-5, -1, -10, 0, 3], n: 2, expected: 0 },
  { scores: [-5, -1, -10, 0, 3], n: 3, expected: -1 },
  { scores: [-5, -1, -10, 0, 3], n: 4, expected: -5 },
  { scores: [-5, -1, -10, 0, 3], n: 5, expected: -10 },

  // Large numbers
  { scores: [1000000, 999999, 1000000], n: 1, expected: 1000000 },
  { scores: [1000000, 999999, 1000000], n: 2, expected: 1000000 },
  { scores: [1000000, 999999, 1000000], n: 3, expected: 999999 },

  // Single element
  { scores: [42], n: 1, expected: 42 },

  // Many duplicates
  { scores: Array(1000).fill(1), n: 500, expected: 1 },
  { scores: Array(1000).fill(1), n: 1000, expected: 1 },

  // Mixed distinct and duplicates
  { scores: [3, 1, 4, 1, 5, 9, 2, 6, 5], n: 1, expected: 9 },
  { scores: [3, 1, 4, 1, 5, 9, 2, 6, 5], n: 2, expected: 6 },
  { scores: [3, 1, 4, 1, 5, 9, 2, 6, 5], n: 3, expected: 5 },
  { scores: [3, 1, 4, 1, 5, 9, 2, 6, 5], n: 4, expected: 5 },
  { scores: [3, 1, 4, 1, 5, 9, 2, 6, 5], n: 5, expected: 4 },

  // Edge: n equals length
  { scores: [10, 20, 30], n: 3, expected: 10 },

  // Edge: n = 1 with all negatives
  { scores: [-10, -20, -30], n: 1, expected: -10 },

  // Edge: large range
  { scores: [100, 200, 300, 400, 500], n: 5, expected: 100 },

  // Edge: zeros
  { scores: [0, 0, 0, 1], n: 1, expected: 1 },
  { scores: [0, 0, 0, 1], n: 2, expected: 0 },
  { scores: [0, 0, 0, 1], n: 3, expected: 0 },
  { scores: [0, 0, 0, 1], n: 4, expected: 0 },

  // Random unsorted
  { scores: [9, 2, 5, 1, 7, 6, 8, 3, 4], n: 3, expected: 7 }, // sorted: [9,8,7,6,5,4,3,2,1]
  { scores: [9, 2, 5, 1, 7, 6, 8, 3, 4], n: 6, expected: 4 },

  // Negative and positive mix
  { scores: [-10, -5, 0, 5, 10, 15], n: 2, expected: 10 },
  { scores: [-10, -5, 0, 5, 10, 15], n: 4, expected: 0 },

  // Large k but valid
  // (No invalid n as per problem constraints, but we assume n ≤ length)
];

// Example test runner (using function from previous answer)
function runTests() {
  testCases.forEach((tc, index) => {
    const result = findNthHighScore(tc.scores, tc.n);
    const passed = result === tc.expected;
    console.log(
      `Test ${index + 1}: ${passed ? "✅PASS" : "❌FAIL"} | scores=[${tc.scores}], n=${tc.n} | Expected: ${tc.expected}, Got: ${result}`,
    );
  });
}

// Uncomment to run:
runTests();
