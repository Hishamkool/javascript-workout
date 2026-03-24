function validateBrackets(code) {
  // return false when 1. closing braces without opening braces
  // 2. last opening braces not maching with the closing braces
  // 3. after removing all brackets there are still brackets

  const stack = [];
  // one loop so push opening brackets , and pop closing brackets when last item matches with the closing
  // create a object pair of key and value
  //

  const bracketPair = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < code.length; i++) {
    const ch = code[i];
    console.log(ch);
    //we need to check if their is value for the key then push key , thats opening brackets
    if (bracketPair[ch]) {
      stack.push(ch);
    } else if (ch === "}" || ch === ")" || ch === "]") {
      if (stack.length === 0) {
        //closing ch before opening
        return false;
      }

      const popedOpenBracket = stack.pop(); // opening item
      if (bracketPair[popedOpenBracket] !== ch) {
        // brackets dont match last item
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
}
// console.log(validateBrackets("for (let item of user) {}"));
const testCases = [
  { input: "", expected: true }, // empty string
  { input: "[function(x) {return [x+1];}]", expected: true },
  { input: "if (x>0) {arr[x]= (x+2];}", expected: false },
  { input: "()", expected: true },
  { input: "()[]{}", expected: true },
  { input: "(]", expected: false },
  { input: "([)]", expected: false },
  { input: "{[]}", expected: true },
  { input: "(((", expected: false }, // unclosed
  { input: ")))", expected: false }, // no opening
  { input: "({[]})", expected: true },
  { input: "({[}])", expected: false },
  { input: "}){}", expected: false },
];

testCases.forEach(({ input, expected }) => {
  const result = validateBrackets(input);
  console.log(
    `input: "${input}" | expected: ${expected} | got: ${result} | ${
      result === expected ? "✅PASSED" : "❌FAILED"
    }`,
  );
  console.log(`\n------------------------`);
});
