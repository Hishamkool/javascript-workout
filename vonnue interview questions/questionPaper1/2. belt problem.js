function rotatePackages(packages, k) {
  if (!Array.isArray(packages)) {
    return [];
  }
  const packageCount = packages.length;
  if (packageCount === 1) {
    return packages;
  }
  if (packageCount === 0) {
    return [];
  }
  if (packageCount === k) {
    return packages;
  }

  for (let i = 0; i < k; i++) {
    const rotate = packages.pop();
    packages.unshift(rotate);
  }
  return packages;
}

const testcases = [
  { input: [1, 2, 3, 4, 5, 6, 7], k: 3, expected: [5, 6, 7, 1, 2, 3, 4] },
];

testcases.forEach(({ input, k, expected }) => {
  // const resultArr = rotatePackages(input, k);
  const resultArr = rotatePackagesOptimized(input, k);

  const passed = JSON.stringify(resultArr) === JSON.stringify(expected);
  console.log(
    `TEST: 0 ${passed ? "PASS" : "FAIL"} | Input: packages=[${input}] , k=${k} | Expected=[${expected}] | Got:[${resultArr}]  `,
  );
});

const testCase2 = [
  // Basic example
  { packages: [1, 2, 3, 4, 5, 6, 7], k: 3, expected: [5, 6, 7, 1, 2, 3, 4] },

  // No rotation
  { packages: [1, 2, 3, 4, 5], k: 0, expected: [1, 2, 3, 4, 5] },

  // Rotate by full length (should be same as original)
  { packages: [1, 2, 3, 4, 5], k: 5, expected: [1, 2, 3, 4, 5] },

  // Rotate by length multiple
  { packages: [1, 2, 3, 4, 5], k: 10, expected: [1, 2, 3, 4, 5] },

  // Rotate by 1
  { packages: [1, 2, 3, 4, 5], k: 1, expected: [5, 1, 2, 3, 4] },

  // Rotate by 4 (one less than length)
  { packages: [1, 2, 3, 4, 5], k: 4, expected: [2, 3, 4, 5, 1] },

  // Empty list
  { packages: [], k: 3, expected: [] },

  // Single element
  { packages: [42], k: 0, expected: [42] },
  { packages: [42], k: 1, expected: [42] },
  { packages: [42], k: 100, expected: [42] },

  // Two elements
  { packages: [1, 2], k: 1, expected: [2, 1] },
  { packages: [1, 2], k: 2, expected: [1, 2] },
  { packages: [1, 2], k: 3, expected: [2, 1] },

  // Duplicate values
  { packages: [5, 5, 5, 5], k: 2, expected: [5, 5, 5, 5] },
  { packages: [1, 1, 2, 2], k: 2, expected: [2, 2, 1, 1] },

  // Large rotation (k > length)
  { packages: [10, 20, 30, 40], k: 7, expected: [20, 30, 40, 10] }, // because 7 % 4 = 3, rotate by 3

  // Large numbers in list
  {
    packages: [1000000, 2000000, 3000000],
    k: 2,
    expected: [2000000, 3000000, 1000000],
  },

  // Negative numbers (allowed? Problem didn't specify, but could be)
  { packages: [-5, -1, 0, 3], k: 2, expected: [0, 3, -5, -1] },
];

// Example of running tests (if using the function from previous answer)
function runTests() {
  testCase2.forEach((tc, index) => {
    // const result = rotatePackages(tc.packages, tc.k);
    const result = rotatePackagesOptimized(tc.packages, tc.k);
    const passed = JSON.stringify(result) === JSON.stringify(tc.expected);
    console.log(
      `Test ${index + 1}: ${passed ? "PASS" : "FAIL"} | Input: packages=[${tc.packages}], k=${tc.k} | Expected: [${tc.expected}], Got: [${result}]`,
    );
  });
}

runTests();

function rotatePackagesOptimized(packages, k) {
  if (!packages.length) return [];
  k = k % packages.length;
  if (k === 0) return packages.slice();
  return [...packages.slice(-k), ...packages.slice(0, -k)];
}
