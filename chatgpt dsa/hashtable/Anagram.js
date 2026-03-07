function checkIsAnagram(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") return false;
  if (str1.length !== str2.length) return false;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const map = new Map();
  for (let ch of str1) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }
  for (let ch of str2) {
    if (!map.has(ch))
      return false; /* freq[ch] === 0 OR freq[ch] === undefined */
    map.set(ch, map.get(ch) - 1);
    if (map.get(ch) < 0) return false;
  }
  return true;
}
const testCases = [
  // Basic anagrams
  { str1: "listen", str2: "silent", expected: true },
  { str1: "hello", str2: "olleh", expected: true },
  { str1: "debit card", str2: "bad credit", expected: true },

  // Case sensitivity
  { str1: "Listen", str2: "Silent", expected: true }, // Case-insensitive?
  { str1: "LISTEN", str2: "silent", expected: true }, // All caps vs lowercase
  { str1: "Hello", str2: "hello", expected: true }, // Mixed case

  // With spaces and punctuation
  { str1: "a decimal point", str2: "im a dot in place", expected: true },
  { str1: "the morse code", str2: "here come dots", expected: true },
  { str1: "conversation", str2: "voices rant on", expected: true },

  // Empty strings
  { str1: "", str2: "", expected: true },
  { str1: "", str2: "a", expected: false },

  // Single characters
  { str1: "a", str2: "a", expected: true },
  { str1: "a", str2: "b", expected: false },

  // Different lengths (cannot be anagrams)
  { str1: "hello", str2: "helloo", expected: false },
  { str1: "abc", str2: "abcd", expected: false },

  // Same letters but different counts
  { str1: "aabbcc", str2: "abc", expected: false },
  { str1: "aaabbb", str2: "aabbbb", expected: false },

  // With numbers
  { str1: "123", str2: "321", expected: true },
  { str1: "abc123", str2: "123abc", expected: true },
  { str1: "abc123", str2: "abc124", expected: false },

  // With special characters
  { str1: "a!b@c#", str2: "c#b@a!", expected: true },
  { str1: "hello!", str2: "!hello", expected: true },
  { str1: "hello!", str2: "hello", expected: false }, // Missing special char

  // Unicode characters
  { str1: "café", str2: "écaf", expected: false }, // Note: é vs e + combining
  { str1: "こんにちは", str2: "はちにんこ", expected: true }, // Japanese

  // With repeated characters
  { str1: "aaaaaaaaaa", str2: "aaaaaaaaaa", expected: true },
  { str1: "aaaaaaaaab", str2: "baaaaaaaaa", expected: true },
  { str1: "aaaaaaaaaa", str2: "aaaaaaaaab", expected: false },

  // Strings with null characters (if applicable)
  { str1: "hello\0world", str2: "world\0hello", expected: true },

  // Very long strings
  {
    str1: "a".repeat(10000) + "b".repeat(10000),
    str2: "b".repeat(10000) + "a".repeat(10000),
    expected: true,
  },

  // Whitespace variations
  { str1: "hello world", str2: "world hello", expected: true },
  { str1: "hello  world", str2: "hello world", expected: false }, // Extra space
  { str1: "\thello\t", str2: "hello", expected: false }, // Tabs

  // Mixed whitespace and punctuation
  { str1: "a b c", str2: "abc", expected: false },
  { str1: "a,b,c", str2: "abc", expected: false },

  // Anagrams with same characters but different meaning
  { str1: "astronomer", str2: "moon starer", expected: true },
  { str1: "the eyes", str2: "they see", expected: true },

  // Edge cases with undefined/null (if your function handles these)
  { str1: null, str2: null, expected: false }, // Handle null appropriately
  { str1: undefined, str2: undefined, expected: false },

  // Numbers passed as strings
  { str1: "12345", str2: 12345, expected: true }, // Type coercion?
];

let score = 0;
const resultArray = [];
testCases.forEach(({ str1, str2, expected }) => {
  const result = checkIsAnagram(str1, str2);
  const pass = result === expected;
  if (pass) score++;
  resultArray.push({
    log: `${pass ? "✅ Pass" : "❌ Fail"} str1: ${str1} => ${typeof str1} | str2: ${str2} => ${typeof str2} | expected: ${expected} | got: ${result}`,
    pass,
  });
});
resultArray.sort((a, b) => b.pass - a.pass);

for (let result of resultArray) {
  console.log(result.log);
}

console.log(
  `Result : ${score}/${testCases.length} ${score === testCases.length ? " 💯 Congrats " : ""}`,
);
