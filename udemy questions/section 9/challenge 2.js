// challenge 2
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

console.log("------------1------------");

// 1 : printing goals

for (const [index, playerName] of Object.entries(game.scored)) {
  //here game.scored is actually an array so we can use game.scored.entries() instead of Object.entreis
  const goalNumber = Number(index) + 1;
  console.log(`Goal ${goalNumber} : ${playerName}, `);
}

console.log("\n------------------------");
for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1} : ${player}`);
}

console.log("------------2------------");

// 2 : calculating average and printing
// we need to print  'The average of odd is value'
let sum = 0;
let average;
const numberOfItems = Object.values(game.odds).length;
for (const value of Object.values(game.odds)) {
  //  average = value / Object.length;
  sum += Number(value);
}
average = sum / numberOfItems;
console.log(`the average of the odds is ${average}`);

console.log("------------------------");
const oddsArray = Object.values(game.odds);
let average1 = 0;
for (const odd of oddsArray) {
  average1 += odd;
}
average1 /= oddsArray.length;
console.log("Average of odds :", average1);

console.log("------------3------------");

// 3
// for (let [key, value] of Object.entries(game.odds)) {
//   for (const [gameKey, gameValue] of Object.entries(game)) {
//     if (key === gameKey) {
//       key = gameValue;
//       console.log(`The odds of victory ${key} : ${value}`);
//     } else if (key === "x") {
//       console.log(`The odds of draw : ${value}`);
//     }
//   }
// }

for (const [key, value] of Object.entries(game.odds)) {
  let label =
    key === "x" ? `draw : ${value}` : `victory of ${game[key]} : ${value}`;
  console.log(`The odds of ${label}`);
}

console.log("------------Bonus------------");

let scored = {};
for (const scoredPlayer of Object.values(game.scored)) {
  scored[scoredPlayer] = (scored[scoredPlayer] || 0) + 1;
  //   console.log("scored now..", scored);
}
console.log("scored final", scored);
