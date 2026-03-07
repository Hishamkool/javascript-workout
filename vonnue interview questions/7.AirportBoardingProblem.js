function priorityBoarding(arrOfOperations) {
  const bordingQueue = []; //stacking travellers
  const bordedUsers = []; //result

  arrOfOperations.forEach((operation) => {
    const action = operation.trim().split(" ")[0];
    const user = operation.trim().split(" ")[1];
    const invalid = "Invalid command";

    switch (action) {
      case "ADD_NORMAL":
        if (user) {
          bordingQueue.push(user);
        } else {
          bordedUsers.push(invalid);
        }
        break;
      case "BOARD":
        const boarded = bordingQueue.shift();
        if (boarded === undefined) {
          bordedUsers.push("No passengers in line.");
        } else {
          bordedUsers.push(boarded);
        }
        break;
      case "ADD_PRIORITY":
        if (user) {
          bordingQueue.unshift(user);
        } else {
          bordedUsers.push(invalid);
        }
        break;

      default:
        bordedUsers.push(invalid);
    }
  });
  return bordedUsers;
}

// test cases

const testCases2 = [
  // 1. Example given
  {
    input: [
      "ADD_NORMAL Alice",
      "ADD_NORMAL Bob",
      "ADD_PRIORITY Carol",
      "BOARD",
      "BOARD",
      "ADD_NORMAL Dave",
      "BOARD",
    ],
    expected: ["Carol", "Alice", "Bob"],
  },

  // 2. Multiple priority passengers
  {
    input: [
      "ADD_NORMAL John",
      "ADD_PRIORITY Mary",
      "ADD_PRIORITY Peter",
      "BOARD",
      "BOARD",
      "BOARD",
    ],
    expected: ["Peter", "Mary", "John"],
  },

  // 3. Interleaved normal and priority
  {
    input: [
      "ADD_NORMAL Tom",
      "ADD_PRIORITY Sarah",
      "ADD_NORMAL Mike",
      "ADD_PRIORITY Emma",
      "BOARD",
      "BOARD",
      "ADD_NORMAL Lisa",
      "BOARD",
      "BOARD",
      "BOARD",
    ],
    expected: ["Emma", "Sarah", "Tom", "Mike", "Lisa"],
  },

  // 4. All priority passengers
  {
    input: [
      "ADD_PRIORITY VIP1",
      "ADD_PRIORITY VIP2",
      "ADD_PRIORITY VIP3",
      "BOARD",
      "BOARD",
      "BOARD",
    ],
    expected: ["VIP3", "VIP2", "VIP1"],
  },

  // 5. All normal passengers
  {
    input: [
      "ADD_NORMAL Person1",
      "ADD_NORMAL Person2",
      "ADD_NORMAL Person3",
      "BOARD",
      "BOARD",
      "BOARD",
    ],
    expected: ["Person1", "Person2", "Person3"],
  },

  // 6. Boarding with empty queue
  {
    input: [
      "BOARD",
      "ADD_NORMAL Alice",
      "BOARD",
      "BOARD",
      "ADD_PRIORITY Bob",
      "BOARD",
    ],
    expected: [
      "No passengers in line.",
      "Alice",
      "No passengers in line.",
      "Bob",
    ],
  },

  // 7. Invalid commands (underscore style only)
  {
    input: [
      "INVALID_COMMAND Test",
      "ADD_NORMAL Alice",
      "FLY_AWAY Bob",
      "ADD_PRIORITY Carol",
      "BOARD",
      "REMOVE Bob",
      "BOARD",
      "ADD_NORMAL Dave",
      "JUMP_QUEUE Eve",
      "BOARD",
    ],
    expected: [
      "Invalid command",
      "Invalid command",
      "Carol",
      "Invalid command",
      "Alice",
      "Invalid command",
      "Dave",
    ],
  },

  // 8. Malformed ADD commands
  {
    input: [
      "ADD_NORMAL",
      "ADD_PRIORITY",
      "ADD_NORMAL Alice",
      "ADD_PRIORITY Carol",
      "ADD_NORMAL Bob Extra",
      "BOARD",
      "BOARD",
      "BOARD",
    ],
    expected: [
      "Invalid command",
      "Invalid command",
      "Invalid command",
      "Carol",
      "Alice",
      "Bob",
      "No passengers in line.",
    ],
  },

  // 9. Case sensitivity
  {
    input: [
      "add_normal alice",
      "Add_Priority Bob",
      "ADD_normal Charlie",
      "BOARD",
      "board",
      "BOARD",
      "ADD_PRIORITY David",
      "Board",
      "BOARD",
    ],
    expected: [
      "Invalid command",
      "Invalid command",
      "Invalid command",
      "No passengers in line.",
      "Invalid command",
      "No passengers in line.",
      "Invalid command",
      "David",
    ],
  },

  // 10. Multiple empty BOARDs
  {
    input: [
      "BOARD",
      "BOARD",
      "BOARD",
      "ADD_NORMAL Alice",
      "BOARD",
      "BOARD",
      "BOARD",
      "ADD_PRIORITY Bob",
      "BOARD",
      "BOARD",
    ],
    expected: [
      "No passengers in line.",
      "No passengers in line.",
      "No passengers in line.",
      "Alice",
      "No passengers in line.",
      "No passengers in line.",
      "Bob",
      "No passengers in line.",
    ],
  },

  // 11. Empty input
  {
    input: [],
    expected: [],
  },

  // 12. Only invalid commands
  {
    input: ["INVALID1", "INVALID2", "BAD_COMMAND", "WRONG_ADD", "FLY", "LAND"],
    expected: [
      "Invalid command",
      "Invalid command",
      "Invalid command",
      "Invalid command",
      "Invalid command",
      "Invalid command",
    ],
  },
];

function runTestCases() {
  let score = 0;
  const result = [];

  testCases2.forEach(({ input, expected }) => {
    const got = priorityBoarding(input);
    const isCorrect = JSON.stringify(expected) === JSON.stringify(got);
    if (isCorrect) {
      score++;
    }
    result.push({
      passed: isCorrect,
      status: isCorrect ? `✅ Pass` : `❌ Fail`,
      input,
      expected,
      got,
    });
  });

  result.sort((a, b) => b.passed - a.passed);

  console.log(result);

  console.log(
    `📊 Final score : ${score}/${testCases2.length} ${
      score === testCases2.length ? "💯 congrats" : ""
    }`,
  );
}

runTestCases();

/* 

const testCases = [
  // 1. Example given
  {
    input: [
      "ADD_NORMAL Alice",
      "ADD_NORMAL Bob",
      "ADD_PRIORITY Carol",
      "BOARD",
      "BOARD",
      "ADD_NORMAL Dave",
      "BOARD",
    ],
    expected: ["Carol", "Alice", "Bob"],
  },

  // 2. Only normal
  {
    input: [
      "ADD_NORMAL Alice",
      "ADD_NORMAL Bob",
      "ADD_NORMAL Carol",
      "BOARD",
      "BOARD",
      "BOARD",
    ],
    expected: ["Alice", "Bob", "Carol"],
  },

  // 3. Only priority
  {
    input: [
      "ADD_PRIORITY Alice",
      "ADD_PRIORITY Bob",
      "ADD_PRIORITY Carol",
      "BOARD",
      "BOARD",
      "BOARD",
    ],
    expected: ["Carol", "Bob", "Alice"],
  },

  // 4. Alternating
  {
    input: [
      "ADD_NORMAL A",
      "ADD_PRIORITY B",
      "ADD_NORMAL C",
      "ADD_PRIORITY D",
      "BOARD",
      "BOARD",
      "BOARD",
      "BOARD",
    ],
    expected: ["D", "B", "A", "C"],
  },

  // 5. BOARD on empty
  {
    input: ["BOARD", "BOARD", "ADD_NORMAL Alice", "BOARD"],
    expected: ["Alice"],
  },

  // 6. Multiple BOARD beyond size
  {
    input: [
      "ADD_NORMAL A",
      "ADD_NORMAL B",
      "ADD_NORMAL C",
      "BOARD",
      "BOARD",
      "BOARD",
      "BOARD",
    ],
    expected: ["A", "B", "C"],
  },

  // 7. Complex mixed
  {
    input: [
      "ADD_NORMAL A",
      "ADD_NORMAL B",
      "ADD_PRIORITY C",
      "ADD_PRIORITY D",
      "ADD_NORMAL E",
      "BOARD",
      "ADD_PRIORITY F",
      "BOARD",
      "BOARD",
      "BOARD",
      "BOARD",
    ],
    expected: ["D", "F", "C", "A", "B"],
  },

  // 8. Single passenger
  {
    input: ["ADD_NORMAL X", "BOARD", "BOARD"],
    expected: ["X"],
  },

  // 9. Name length 20
  {
    input: ["ADD_NORMAL ABCDEFGHIJKLMNOPQRST", "BOARD"],
    expected: ["ABCDEFGHIJKLMNOPQRST"],
  },

  // 10. No BOARD at all
  {
    input: ["ADD_NORMAL A", "ADD_PRIORITY B", "ADD_NORMAL C"],
    expected: [],
  },

  // 11. Priority after some boarding
  {
    input: [
      "ADD_NORMAL A",
      "ADD_NORMAL B",
      "BOARD",
      "ADD_PRIORITY C",
      "ADD_PRIORITY D",
      "BOARD",
      "BOARD",
      "BOARD",
    ],
    expected: ["A", "D", "C", "B"],
  },
];
*/
