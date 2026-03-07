/* Given a string s, find the length of the longest substring without duplicate characters.
 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const testCases = [
  { input: "abcabcbb", expected: 3 },
  { input: "bbbbb", expected: 1 },
  { input: "pwwkew", expected: 3 },

  { input: "", expected: 0 },
  { input: "a", expected: 1 },
  { input: "aa", expected: 1 },
  { input: "ab", expected: 2 },

  { input: "abba", expected: 2 },
  { input: "dvdf", expected: 3 },
  { input: "tmmzuxt", expected: 5 },
  { input: "anviaj", expected: 5 },
  { input: "abcadef", expected: 6 },

  { input: "abcddefgh", expected: 5 },
  { input: "abbaabc", expected: 3 },
  { input: "aaaaabcde", expected: 5 },
];

/* function longestSubstringWithoutRepeat(input, expected) {
  //i need to find the keys which are 1 and output the count of keys which are 1
  // for that i need the frequency of each keys
  // find the keys which has frequency 1 and add count
  // output the count

  console.log(`INPUT : ${input} , EXPECTED : ${expected}`);
  let count = 0; // count of the single keys
  const map = {};

  for (let key of input) {
    //in returns keys
    map[key] = (map[key] || 0) + 1;
  }
  console.log(map);
  const mapEntries = Object.entries(map);
  console.log("map entries:", mapEntries);

  count = Object.keys(map).length;
  const userOut = count;
  if (expected == userOut) {
    console.log("success:", userOut);
  } else {
    console.log("failed", userOut);
  }
  console.log(`\n------------------------`);

  return count;
}
 */

function longestSubstring(s) {
  // to check if it has the value already
  // iterate throught the string , keep adding maxcount  until there is a duplication. set this as max value
  // if duplication then slide the window , move the left index to the end of the last iteration , set maxCount = Math.max(maxCount , iterations),then do the same till the end of string and finally return maxCount
  let maxCount = 0;
  let left = 0;

  const maxLength = s.length;
  if (maxLength === 1) {
    return 1;
  }
  // if same values return 1
  let set = new Set();
  for (let right = left; right < maxLength; right++) {
    // remove until all the duplicates are removed from left like abb a removed b removed then add b

    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxCount = Math.max(maxCount, right - left + 1);
  }
  return maxCount;
}

testCases.forEach(({ input, expected }) => {
  // const userOut = longestSubstring(input);
  const userOut = longestSubstringUsingMap(input);
  console.log(
    `string: "${input}" | expected: ${expected} | got: ${userOut} | ${userOut === expected ? "✅PASSED" : "❌ FAILED"}`,
  );
});

function longestSubstringUsingMap(string) {
  const map = new Map();
  let left = 0;
  let maxLength = 0;

  const stringLength = string.length;

  for (let right = left; right < stringLength; right++) {
    let char = string[right];
    if (map.has(char) && map.get(char) >= left) {
      const lastSeenIndex = map.get(char);
      left = lastSeenIndex + 1;
    }
    map.set(char, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
