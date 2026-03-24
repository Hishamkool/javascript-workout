/* function minAliensToRemove(aliens, explorers, energy) {
  const totalEnergyOfExplorers = explorers * energy;

  const totalEnergyOfAliens = aliens.reduce((curr, acc) => (acc += curr));

  const energyOfAliens2Remove = totalEnergyOfExplorers - totalEnergyOfAliens; // if exp > we get positive , exp < we get negative , exp = aliens we get 0 if +ve retun 0 , -Ve find position, = return 0

  if (energyOfAliens2Remove >= 0) return 0;
  const extraAlienEnergy = totalEnergyOfAliens - totalEnergyOfExplorers;
  const noOFAliens = aliens.length;
  let minAliensToRemove = 0;
  for (let alienPosition = 0; alienPosition < noOFAliens; alienPosition++) {
    let sumEnergy = 0;
    sumEnergy = aliens[alienPosition] + sumEnergy;

    if (extraAlienEnergy <= sumEnergy) {
      minAliensToRemove = alienPosition;
    } else {
      break;
    }
  }
  return minAliensToRemove + 1;
} */

/* function minAliensToRemove(aliens, explorers, energy) {
  let exp = new Array(explorers).fill(energy);

  const battle = () => {
    let alnIndex = 0;
    let expIndex = 0;
    while (alnIndex < aliens.length && expIndex < exp.length) {
      if (exp[expIndex] > aliens[alnIndex]) {
        exp[expIndex] -= aliens[alnIndex];
        aliens.shift();
      } else if (exp[expIndex] === aliens[alnIndex]) {
        exp.shift();
        aliens.shift();
      } else {
        aliens[alnIndex] -= exp[expIndex];
        exp.shift();
      }
      console.log(
        { aliens },
        { explorers: exp },
        { aliens: aliens.length },
        { explorers: exp.length },
      );
    }
    return aliens.length;

    // let numberOfAliensToRemove = 0;
    //  for (let alienPosition = 0; alienPosition < noOfAliens; alienPosition++) {
    //   for (
    //     let explorerPosition = 0;
    //     explorerPosition < noOfExplorers;
    //     explorerPosition++
    //   ) {
    //     if (expArr[explorerPosition] > aliens[alienPosition]) {
    //       const diff = expArr[explorerPosition] - aliens[alienPosition];
    //       expArr[explorerPosition] = diff;
    //       aliens.shift();
    //     } else if (expArr[explorerPosition] === aliens[alienPosition]) {
    //       expArr.shift();
    //       aliens.shift();
    //     } else if (expArr[explorerPosition] < aliens[alienPosition]) {
    //       const diff = expArr[explorerPosition] - aliens[alienPosition];
    //       expArr.shift();
    //       expArr[explorerPosition] += diff; //difference is negative so it will decrease
    //     }

    //     if (aliens.length > expArr.length) {
    //       numberOfAliensToRemove = aliens.length; // need to remove all aliens
    //     } else {
    //       numberOfAliensToRemove += 1;
    //     }
    //     console.log(
    //       { aliens },
    //       { explorersArray: expArr },
    //       { numberOfAliensToRemove },
    //       { aliens: aliens.length },
    //       { explorers: expArr.length },
    //     );
    //   }
    // }
  };
  return battle();
} */

function minAliensToRemove(aliens, explorers, energy) {
  const n = aliens.length;

  function canDefeatAllAliens(startingIndex) {
    //objectivie is to go thorugh all the aliens from the given index and return true if it can defeal all aliends form the index
    // else return false if it cant defeat , in thta case starting index should be incremented which is done by outer for loop

    let currentEnergy = energy;
    // once a exp is defeated remaining energy = energy, exp is fought remaing is exp - alien , alin is greater , exp ++ and remaining = energy
    let remainingExplorers = explorers;

    for (let i = startingIndex; i < n; i++) {
      const strength = aliens[i];
      while (true) {
        if (currentEnergy > strength) {
          currentEnergy -= strength;
          break;
        } else if (currentEnergy === strength) {
          remainingExplorers--;
          if (remainingExplorers < 0) {
            return false;
          }
          if (remainingExplorers === 0 && i < n - 1) {
            return false;
          }
          currentEnergy = energy;
          break;
        } else {
          remainingExplorers--;
          if (remainingExplorers < 0) return false;
          if (remainingExplorers === 0) return false;
          currentEnergy = energy;
        }
      }
    }
    return true;
  }

  for (let startIndex = 0; startIndex < n; startIndex++) {
    if (canDefeatAllAliens(startIndex)) {
      return startIndex;
    }
  }
  return n;
}
// minAliensToRemove([3, 1, 3, 3], 4, 3);
/* input format */
const testCases = [
  // Sample
  { aliens: [3, 1, 3, 3], explorers: 4, energy: 3, expected: 0 },

  // Remove 1 because first alien too strong
  { aliens: [4, 3, 2, 1], explorers: 2, energy: 3, expected: 1 },

  // Remove all because all too strong
  { aliens: [5, 5, 5], explorers: 2, energy: 4, expected: 3 },

  // M=1, need to skip first two
  { aliens: [2, 3, 4], explorers: 1, energy: 5, expected: 2 },

  // M=2, need to remove first
  { aliens: [2, 4, 3, 1], explorers: 2, energy: 5, expected: 1 },

  // Already possible
  { aliens: [2, 3, 4, 1], explorers: 2, energy: 5, expected: 0 },

  // All equals with enough explorers
  { aliens: [5, 5, 5], explorers: 3, energy: 5, expected: 0 },

  // All equals but not enough explorers
  { aliens: [5, 5, 5], explorers: 2, energy: 5, expected: 1 },

  // Edge: single alien, can defeat
  { aliens: [7], explorers: 1, energy: 8, expected: 0 },
  { aliens: [7], explorers: 1, energy: 7, expected: 0 }, // equal -> both die, but alien defeated, ok
  { aliens: [7], explorers: 1, energy: 6, expected: 1 },
];

testCases.forEach(({ aliens, explorers, energy, expected }) => {
  const aliensToRemove = minAliensToRemove(aliens, explorers, energy);

  const result = expected === aliensToRemove ? true : false;

  console.log(
    `${result ? "✅PASS" : "❌FAIL"} aliens:[${aliens}] | explorersCount:${explorers} | explorerEnergy:${energy} | expected:${expected} | got:${aliensToRemove} `,
  );
});
