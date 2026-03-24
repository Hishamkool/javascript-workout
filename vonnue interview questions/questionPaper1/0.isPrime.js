function isPrime(n) {
  //a number is divisible by itself and only 1 .
  // a natural number greater than 1 that has exactly two distinct positve divisiors
  //negative numbers are not prime
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false; // except for 2 as its prime

  const sqt = Math.floor(Math.sqrt(n));

  for (let i = 3; i <= sqt; i = i + 2) {
    if (n % i === 0) return false;
  }
  return true;
}

const testCases = [
  { input: -7, expected: false },
  { input: 0, expected: false },
  { input: 1, expected: false },
  { input: 2, expected: true },
  { input: 3, expected: true },
  { input: 4, expected: false },
  { input: 9, expected: false },
  { input: 29, expected: true },
  { input: 49, expected: false },
  { input: 97, expected: true },
  { input: 100, expected: false },
  { input: 999983, expected: true },
  { input: 1000000000, expected: false },
];

testCases.forEach(({ input, expected }) => {
  const result = isPrime(input);

  console.log(
    `input: ${input} | expected:${expected} | got: ${result} | ${expected === result ? "✅PASSED" : "❌FAILED"}`,
  );
});

console.log(`\n------------------------`);
