const testCases = [[1, 2, 3, 1], [1, 2, 3, 4], [], [5], [0, 0]];
const expected = [true, false, false, false];

if (testCases.length !== expected.length) {
  console.error("Test cases and expected answers dont match length");
} else {
  testCases.forEach((input, index) => {
    const userResult = containsDuplicate(input);

    if (userResult !== expected[index]) {
      console.error(`✖️  Failed at index ${index}`.toUpperCase());
    } else {
      console.log(`✅ passed at index ${index}`);
    }
  });
}

/* 

testCases.forEach(({ input, expected }) => {
  const result = funName(input);

  console.log(
    `input: ${input} | expected:${expected} | got: ${result} | ${expected === result ? "✅PASSED" : "❌FAILED"}`,
  );
});


 */
