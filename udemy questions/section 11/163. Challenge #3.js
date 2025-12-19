// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge1 = (dogsAges) =>
  dogsAges
    .map((dog) => (dog <= 2 ? dog * 2 : 16 + dog * 4))
    .filter((adults) => adults >= 18)
    .reduce(
      (acc, age, _, array) => (acc += age / array.length),
      0
    ); /* [NOTE] starting from 0 is very important otherwise the first item would not be divided by the length of the array */

console.log(calcAverageHumanAge1(testData1));
console.log(calcAverageHumanAge1(testData2));
