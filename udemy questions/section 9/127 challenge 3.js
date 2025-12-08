// Coding Challenge #3
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game.
The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

console.log(`\n------------1------------`);

// 1. no duplicate array
//conveting the values of the map to set and then to array
const events = [...new Set(gameEvents.values())];
console.log(events);
console.log(`\n------------2------------`);

// 2 : delete the event at 64
gameEvents.delete(64);
console.log(gameEvents);
console.log(`\n------------3------------`);

// 3. print average time when an event happened
const eventTime = [...gameEvents.keys()];
console.log(eventTime);

// we need to find on an average how many events has occured
// total game time is 90 min plus , and for each event ther is an entry so
// no of entries is games
const average = 90 / gameEvents.size;
// const average = sum / (90 - gameEvents.size);
console.log(`An event happened, on average, every ${average} minutes`);
console.log(`\n------------4------------`);

// 4. mark events each half
const gameEntries = [...gameEvents.entries()];

let firsthalfdone = false;
gameEntries.forEach(([key, value]) => {
  if (key <= 45) {
    console.log(`[FIRST HALF] ${value}`);
  } else {
    !firsthalfdone ? console.log() : null; // first will be true then it will become false to print space only once
    firsthalfdone = true;

    console.log(`[SECOND HALF] ${value}`);
  }
});
