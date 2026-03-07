function bubbleSort(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const length = array.length;
  let internalIteration = 0;
  let externalIteration = 0;

  for (let i = 0; i < length - 1; i++) {
    let swapped = false;
    externalIteration++;
    for (let j = 0; j < length - 1 - i; j++) {
      internalIteration++;

      if (array[j] > array[j + 1]) {
        let temp = 0;
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break; // if already sorted then exits
  }
  console.log("external:", externalIteration, "internal:", internalIteration);
  console.log(`\n------------------------`);

  return array;
  //go through each element and swap the largest
}

bubbleSort([5, 56, 8, 97, 15, 16, 77, 11, 55, 78, 3, 2, 0, 8, -7, 5]);

const testCases = [
  { input: [], expected: [] }, // empty array

  { input: [1], expected: [1] }, // single element

  { input: [5, 2, 9, 1, 5, 6], expected: [1, 2, 5, 5, 6, 9] }, // normal case

  { input: [3, 3, 3], expected: [3, 3, 3] }, // all duplicates

  { input: [10, -1, 2, -5, 0], expected: [-5, -1, 0, 2, 10] }, // negative numbers

  { input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5] }, // reverse sorted

  { input: [1, 2, 3, 4], expected: [1, 2, 3, 4] }, // already sorted

  { input: [1000000, 2, 999999], expected: [2, 999999, 1000000] }, // large numbers

  { input: [0, -0, 5, -5], expected: [-5, 0, 0, 5] }, // zero and negative zero

  {
    input: [Number.MAX_SAFE_INTEGER, 1, Number.MIN_SAFE_INTEGER],
    expected: [Number.MIN_SAFE_INTEGER, 1, Number.MAX_SAFE_INTEGER],
  }, // extreme values
  { input: [1, 2, 3], expected: [1, 2, 3] }, // single element
];
testCases.forEach(({ input, expected }) => {
  const answer = bubbleSort(input);
  const stringExpected = JSON.stringify(expected);
  const stringAnswer = JSON.stringify(answer);
  console.log(stringExpected, stringAnswer);

  const result = stringExpected === stringAnswer;
  console.log(
    `input: "${input}" | expected: ${expected} | got: ${answer} | ${
      result ? "✅PASSED" : "❌FAILED"
    }`,
  );
  console.log(`\n------------------------`);
});
