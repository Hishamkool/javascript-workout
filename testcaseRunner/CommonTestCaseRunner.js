export function runTestCases(fn, testCases) {
  console.log("\nsolution to ", fn.name, ":");
  let score = 0;
  const results = testCases.map(({ input, expected }, index) => {
    const got = fn(...input);

    const passed = JSON.stringify(got) === JSON.stringify(expected);

    if (passed) score++;

    return {
      index,
      input,
      expected,
      got,
      passed,
    };
  });

  // sorting results
  results.sort((a, b) => b.passed - a.passed);

  //disiplaying results
  results.forEach(({ index, passed, got, expected, input }) => {
    console.log(`\n------------------------`);
    console.log(`Test ${index + 1}: ${passed ? "✅ Pass" : "❌ Fail"}`);
    console.log("input :", ...input);
    console.log("expected :", expected);
    console.log(`got:`, got);
    console.log(`\n------------------------`);
  });

  console.log(
    `\nFinal Score: ${score}/${testCases.length} ${score === testCases.length ? "💯 CONGRATS 🫡" : ""}`,
  );
}
