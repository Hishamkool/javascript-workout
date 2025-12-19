// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (dogsAges) {
  const humanAge = dogsAges.map((dog) => {
    if (dog <= 2) {
      return dog * 2;
    } else {
      return 16 + dog * 4;
    }
  });
  console.log("human age array:", humanAge);

  const adultDogs = humanAge.filter((age) => age >= 18);
  console.log("adult dogs:", adultDogs);

  const averageOfAdult = adultDogs.reduce(
    (acc, cur, i, arr) => acc + cur / arr.length,
    0
  ); // this only works because accumulators starts at 0 and also instead of diving the whole sum with the length we are diving each item with length and adding which is the same
  console.log("Average of adult dogs is :", Math.floor(averageOfAdult));
};
console.log(`\n------------test data 1------------`);

calcAverageHumanAge(testData1);
console.log(`\n------------test data 2------------`);

calcAverageHumanAge(testData2);
/*
 const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

const filterAdultDogs = function (humanAge) {
  const dogsAbove18 = humanAge.filter(function (human) {
    return human >= 18;
  });
  console.log("dogs above 18:", dogsAbove18);
  return dogsAbove18;
};
const calcAvgDogs = function (dogs) {
  const sum = dogs.reduce((acc, cur) => (acc += cur));
  const dogsCount = dogs.length;
  return (average = sum / dogsCount);
};
const calcAverageHumanAge = function (dogsAges) {
  const humanAge = dogsAges.map((dog) => {
    if (dog <= 2) {
      return dog * 2;
    } else {
      return 16 + dog * 4;
    }
  });
  console.log("human age array:", humanAge);

  const adultDogs = filterAdultDogs(humanAge);
  const averageOfAdult = calcAvgDogs(adultDogs);
  console.log("Average of adult dogs is :", Math.floor(averageOfAdult));
};
console.log(`\n------------test data 1------------`);

calcAverageHumanAge(testData1);
console.log(`\n------------test data 2------------`);

calcAverageHumanAge(testData2); 
*/
