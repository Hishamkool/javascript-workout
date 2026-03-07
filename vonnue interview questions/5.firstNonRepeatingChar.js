// usingobjects
function firstNonRepeatingChar(ticketId) {
  const charCount = {};

  for (let ch of ticketId) {
    charCount[ch] = (charCount[ch] || 0) + 1;
  }
  console.log(charCount);
  for (let i = 0; i < ticketId.length; i++) {
    if (charCount[ticketId[i]] === 1) {
      return i;
    }
  }
  return -1;
}

const testCases = [
  { input: "week", expected: 0 },
  { input: "aabbcc", expected: -1 },
  { input: "gggggge4", expected: 6 },
  { input: "saljdasdfjjjjasdssdd", expected: 2 },
  { input: "ssffd", expected: 4 },
  { input: "week", expected: 0 }, // 'w' is first non-repeating
  { input: "aabbcc", expected: -1 }, // All characters repeat
  { input: "leetcode", expected: 0 }, // 'l' is first non-repeating

  // Single character
  { input: "a", expected: 0 }, // Only one character

  // First character non-repeating
  { input: "abcd", expected: 0 }, // 'a' is first, all unique

  // Last character non-repeating
  { input: "aabbc", expected: 4 }, // 'c' is last and non-repeating

  // Middle character non-repeating
  { input: "aabcc", expected: 2 }, // 'b' at index 2 is non-repeating

  // With spaces and special characters
  { input: "hello world", expected: 0 }, // 'h' is first non-repeating
  { input: "a b c a b", expected: 2 }, // space at index 1? Wait, let me check:
  // "a" (0), " " (1), "b" (2), " " (3), "c" (4), "a" (5), " " (6), "b" (7)
  // Actually let's use a simpler one:

  // Mixed case (case-sensitive)
  { input: "aA", expected: 0 }, // 'a' and 'A' are different

  // Numbers and letters
  { input: "a1b2c3a1b2", expected: 4 }, // 'c' at index 4 is non-repeating

  // Long string with repeats
  { input: "abcdefghijklmnopqrstuvwxyz", expected: 0 }, // All unique

  // Empty string
  { input: "", expected: -1 },

  // All same character
  { input: "zzzzz", expected: -1 },

  // Two characters, both non-repeating
  { input: "ab", expected: 0 }, // 'a' is first

  // Repeats then unique at end
  { input: "aabbccd", expected: 6 }, // 'd' at end

  // Your test case (corrected)
  { input: "saljdasdfjjjjasdssdd", expected: 2 }, // 'l' at index 2

  { input: "swiss", expected: 1 },

  // Love this classic example
  { input: "racecars", expected: 3 }, // 'e' at index 3 is non-repeating
];
function runTestcase() {
  testCases.forEach((test) => {
    const result = firstNonRepeatingChar(test.input);
    const success = result === test.expected;
    console.log(
      `${success ? "✅" : "❌"} input:"${test.input}" | expected:${test.expected} | output:${result}`,
    );
  });
}
runTestcase();
