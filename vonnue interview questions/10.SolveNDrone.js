import { runTestCases } from "../testcaseRunner/CommonTestCaseRunner.js";
function solveNDrones(n) {
  const output = [];
  //initilaizing the empty grid
  const grid = [];
  for (let r = 0; r < n; r++) {
    const row = [];
    for (let c = 0; c < n; c++) {
      row.push(".");
    }
    grid.push(row);
  }
  // sets to tract conflits
  const columsSet = new Set();
  const mainDiagonal = new Set();
  const secondDiagonal = new Set();

  // placing drones in every new row function
  function placeDrone(row) {
    if (row === n) {
      output.push(grid.map((row) => row.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      // checking if there is conflit
      if (columsSet.has(col)) continue;
      if (mainDiagonal.has(row - col)) continue;
      if (secondDiagonal.has(row + col)) continue; //if all these conditions fails i need to remove the items and reposition the previous item

      // if no conflit then place the item
      grid[row][col] = "D";
      // adding items to set
      columsSet.add(col);
      mainDiagonal.add(row - col);
      secondDiagonal.add(row + col);

      // go to next row
      placeDrone(row + 1);
      grid[row][col] = "."; //"D"  replaced;
      columsSet.delete(col);
      mainDiagonal.delete(row - col);
      secondDiagonal.delete(row + col);
    }
  }
  placeDrone(0);

  return output;
}

// console.log("Result:", solveNDrones(6));

export const testCases = [
  {
    input: [1],
    expected: [["D"]],
  },
  {
    input: [2],
    expected: [],
  },
  {
    input: [3],
    expected: [],
  },
  {
    input: [4],
    expected: [
      [".D..", "...D", "D...", "..D."],
      ["..D.", "D...", "...D", ".D.."],
    ],
  },
];

runTestCases(solveNDrones, testCases);
