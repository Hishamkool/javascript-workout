export function runTestCases(fn, testCases) {
  let score = 0;

  testCases.forEach(({ input, expected }, index) => {
    const got = fn(...input);

    const passed = JSON.stringify(got) === JSON.stringify(expected);

    if (passed) score++;

    console.log(`Test ${index + 1}: ${passed ? "✅ Pass" : "❌ Fail"}`, input);

    if (!passed) {
      console.log("Input:", input);
      console.log("Expected:", expected);
      console.log("Got:", got);
    }
  });

  console.log(
    `\nFinal Score: ${score}/${testCases.length} ${score === testCases.length ? "💯 CONGRATS 🫡" : ""}`,
  );
}
