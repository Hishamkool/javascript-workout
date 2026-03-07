// Given an array of integers, return true if any value appears at least twice.

// const containsDuplicate = (arr) => {
//   const map = {};

//   for (let i = 0; i < arr.length; i++) {
//     const key = arr[i];
//     if (map.hasOwnProperty(key)) {
//       return true;
//     }
//     map[key] = i;
//   }
//   return false;
// };
// // contains duplicate test cases
// const testCases = [[1, 2, 3, 1], [1, 2, 3, 4], [], [5], [0, 0]];
// const expected = [true, false, false, false, true];

console.log(`\n------------------------`);

// 2. Given two string s and t return true if t is an anagram of s . Otherwise return false.

const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  s = s.toLowerCase();
  t = t.toLowerCase();

  const frequencyS = {};
  const frequencyT = {};

  for (let letter of s) {
    frequencyS[letter] = (frequencyS[letter] || 0) + 1;
  }
  for (let letter of t) {
    frequencyT[letter] = (frequencyT[letter] || 0) + 1;
  }

  for (let key in frequencyS) {
    if (frequencyS[key] !== frequencyT[key]) {
      return false;
    }
  }
  return true; // after checking all keys in both
};

// anagram test cases
const testCases = [
  ["anagram", "nagaram"],
  ["rat", "car"],
  ["", ""],
  ["a", "a"],
  ["a", "ab"],
  ["listen", "silent"],
  ["triangle", "integral"],
];

const expected = [true, false, true, true, false, true, true];

if (testCases.length !== expected.length) {
  console.error("Test cases and expected answers dont match length");
} else {
  testCases.forEach((input, index) => {
    // const userResult = containsDuplicate(input);
    const userResult = isAnagram(...input);

    if (userResult !== expected[index]) {
      console.error(
        `✖️ ${index} Failed at input:( ${input[0]}, ${input[1]} ), `,
      );
    } else {
      console.log(
        `✅ ${index} passed | Input: (${input[0]}, ${input[1]}) \t| Result: ${userResult}`,
      );
    }
  });
}
