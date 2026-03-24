function browerHistoryStack(arrOperation) {
  const navigationStack = [];
  const output = [];
  arrOperation.forEach((operation) => {
    const fixed = operation.trim().split(" ");
    const action = fixed[0];
    const website = fixed[1];
    switch (action) {
      case "VISIT":
        if (!website) break;
        navigationStack.push(website);
        break;
      case "PEEK":
        if (navigationStack.length > 0) {
          output.push(navigationStack[navigationStack.length - 1]);
        } else {
          output.push(`No pages in history.`);
        }
        break;
      case "BACK":
        if (navigationStack.length > 0) {
          output.push(navigationStack.pop());
        } else {
          output.push(`No pages in history.`);
        }
        break;

      default:
        console.log("check operation");
        break;
    }
  });
  return output;
}
/* const input = ["PEEK", "BACK", "PEEK", "VISIT github.com", "PEEK"];
browerHistoryStack(input); */

/* const testCases = [
  // Test Case 1: Basic Operations (from example)
  {
    input: [
      "VISIT google.com",
      "VISIT facebook.com",
      "PEEK",
      "BACK",
      "PEEK",
      "VISIT twitter.com",
      "PEEK",
    ],
    expected: ["facebook.com", "facebook.com", "google.com", "twitter.com"],
  },

  // Test Case 2: Empty History Operations
  {
    input: ["PEEK", "BACK", "PEEK", "VISIT github.com", "PEEK"],
    expected: ["No pages in history", "No pages in history", "github.com"],
  },

  // Test Case 3: Multiple Back Operations
  {
    input: [
      "VISIT google.com",
      "VISIT facebook.com",
      "VISIT twitter.com",
      "BACK",
      "PEEK",
      "BACK",
      "PEEK",
      "BACK",
      "PEEK",
    ],
    expected: [
      "twitter.com",
      "facebook.com",
      "google.com",
      "No pages in history",
    ],
  },

  // Test Case 4: Visit After Back
  {
    input: [
      "VISIT google.com",
      "VISIT facebook.com",
      "BACK",
      "VISIT twitter.com",
      "PEEK",
      "BACK",
      "PEEK",
    ],
    expected: ["facebook.com", "twitter.com", "google.com"],
  },

  // Test Case 5: Single Page Operations
  {
    input: ["VISIT google.com", "PEEK", "BACK", "PEEK", "BACK"],
    expected: [
      "google.com",
      "google.com",
      "No pages in history",
      "No pages in history",
    ],
  },

  // Test Case 6: Multiple Visits Without Back
  {
    input: [
      "VISIT google.com",
      "PEEK",
      "VISIT facebook.com",
      "PEEK",
      "VISIT twitter.com",
      "PEEK",
      "VISIT stackoverflow.com",
      "PEEK",
    ],
    expected: [
      "google.com",
      "facebook.com",
      "twitter.com",
      "stackoverflow.com",
    ],
  },

  // Test Case 7: Long URL Testing (50 chars)
  {
    input: [
      "VISIT abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr",
      "PEEK",
      "BACK",
      "PEEK",
    ],
    expected: [
      "abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr",
      "abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr",
      "No pages in history",
    ],
  },

  // Test Case 8: Mixed Commands Sequence
  {
    input: [
      "BACK",
      "PEEK",
      "VISIT amazon.com",
      "VISIT ebay.com",
      "PEEK",
      "BACK",
      "PEEK",
      "VISIT netflix.com",
      "BACK",
      "PEEK",
      "BACK",
      "PEEK",
    ],
    expected: [
      "No pages in history",
      "No pages in history",
      "ebay.com",
      "ebay.com",
      "amazon.com",
      "netflix.com",
      "amazon.com",
      "No pages in history",
    ],
  },

  // Test Case 9: Consecutive Back Operations
  {
    input: [
      "VISIT google.com",
      "VISIT facebook.com",
      "VISIT twitter.com",
      "VISIT linkedin.com",
      "BACK",
      "BACK",
      "PEEK",
      "BACK",
      "PEEK",
      "BACK",
      "PEEK",
    ],
    expected: [
      "linkedin.com",
      "twitter.com",
      "facebook.com",
      "google.com",
      "No pages in history",
    ],
  },

  // Test Case 10: Empty History Then Visit Then Back
  {
    input: [
      "PEEK",
      "BACK",
      "VISIT google.com",
      "PEEK",
      "BACK",
      "PEEK",
      "BACK",
      "PEEK",
    ],
    expected: [
      "No pages in history",
      "No pages in history",
      "google.com",
      "google.com",
      "No pages in history",
      "No pages in history",
    ],
  },

  // Test Case 11: URLs with Special Characters
  {
    input: [
      "VISIT my-site.com",
      "VISIT sub.domain.co.uk",
      "PEEK",
      "BACK",
      "PEEK",
      "VISIT site-123.com",
      "PEEK",
    ],
    expected: [
      "sub.domain.co.uk",
      "sub.domain.co.uk",
      "my-site.com",
      "site-123.com",
    ],
  },

  // Test Case 12: Maximum Operations
  {
    input: [
      "VISIT page1.com",
      "VISIT page2.com",
      "VISIT page3.com",
      "VISIT page4.com",
      "VISIT page5.com",
      "PEEK",
      "BACK",
      "PEEK",
      "BACK",
      "PEEK",
      "BACK",
      "PEEK",
      "BACK",
      "PEEK",
      "BACK",
      "PEEK",
    ],
    expected: [
      "page5.com",
      "page5.com",
      "page4.com",
      "page3.com",
      "page2.com",
      "page1.com",
      "No pages in history",
    ],
  },
]; */
const testCases = [
  // 1️⃣ Example from problem
  {
    commands: [
      "VISIT google.com",
      "VISIT facebook.com",
      "PEEK",
      "BACK",
      "PEEK",
      "VISIT twitter.com",
      "PEEK",
    ],
    expected: ["facebook.com", "facebook.com", "google.com", "twitter.com"],
  },

  // 2️⃣ Single visit + peek
  {
    commands: ["VISIT youtube.com", "PEEK"],
    expected: ["youtube.com"],
  },

  // 3️⃣ Back after single visit
  {
    commands: ["VISIT amazon.com", "BACK"],
    expected: ["amazon.com"],
  },

  // 4️⃣ Back on empty stack
  {
    commands: ["BACK"],
    expected: ["No pages in history."],
  },

  // 5️⃣ Peek on empty stack
  {
    commands: ["PEEK"],
    expected: ["No pages in history."],
  },

  // 6️⃣ Multiple backs until empty
  {
    commands: [
      "VISIT a.com",
      "VISIT b.com",
      "VISIT c.com",
      "BACK",
      "BACK",
      "BACK",
      "BACK",
    ],
    expected: ["c.com", "b.com", "a.com", "No pages in history."],
  },

  // 7️⃣ Peek after emptying stack
  {
    commands: ["VISIT x.com", "BACK", "PEEK"],
    expected: ["x.com", "No pages in history."],
  },

  // 8️⃣ Continuous peek (should not remove)
  {
    commands: ["VISIT first.com", "VISIT second.com", "PEEK", "PEEK", "PEEK"],
    expected: ["second.com", "second.com", "second.com"],
  },

  // 9️⃣ Visit after back (normal stack behavior)
  {
    commands: [
      "VISIT google.com",
      "VISIT gmail.com",
      "BACK",
      "VISIT drive.com",
      "PEEK",
    ],
    expected: ["gmail.com", "drive.com"],
  },

  // 🔟 Only visits (no output expected)
  {
    commands: ["VISIT a.com", "VISIT b.com", "VISIT c.com"],
    expected: [],
  },

  // 1️⃣1️⃣ Interleaved operations
  {
    commands: [
      "VISIT one.com",
      "PEEK",
      "VISIT two.com",
      "PEEK",
      "BACK",
      "BACK",
      "PEEK",
    ],
    expected: [
      "one.com",
      "two.com",
      "two.com",
      "one.com",
      "No pages in history.",
    ],
  },

  // 1️⃣2️⃣ Long sequence stress test
  {
    commands: [
      "VISIT a.com",
      "VISIT b.com",
      "VISIT c.com",
      "PEEK",
      "BACK",
      "PEEK",
      "VISIT d.com",
      "BACK",
      "BACK",
      "PEEK",
    ],
    expected: ["c.com", "c.com", "b.com", "d.com", "b.com", "a.com"],
  },
];
function runTestCases() {
  let score = 0;
  const result = [];

  testCases.forEach(({ commands, expected }) => {
    const got = browerHistoryStack(commands);
    const isCorrect = JSON.stringify(expected) === JSON.stringify(got);
    if (isCorrect) {
      score++;
    }
    result.push({
      passed: isCorrect,
      status: isCorrect ? `✅ Pass` : `❌ Fail`,
      input: commands,
      expected,
      got,
    });
  });

  result.sort((a, b) => b.passed - a.passed);

  console.log(result);

  console.log(
    `📊 Final score : ${score}/${testCases.length} ${
      score === testCases.length ? "💯 congrats" : ""
    }`,
  );
}

runTestCases();
