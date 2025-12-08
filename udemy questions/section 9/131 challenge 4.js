/*
// Coding Challenge #4

Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅


HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

let nameArray = [];
const convertUnderScoreToCamelCase = function (na_me) {
  const name = na_me.toLowerCase().trim();
  //took everthing from the next character of '_' and replced the starting letter to capital letter
  const secondName = name.slice(name.indexOf("_") + 1);
  const makeCapital = secondName.replace(
    secondName[0],
    secondName[0].toUpperCase()
  );

  const firstName = name.split("_")[0];
  const camelName = firstName + makeCapital;
  nameArray.push(camelName);
  console.log("Camed Name :", camelName);
};

convertUnderScoreToCamelCase("underscore_case");
convertUnderScoreToCamelCase(" first_name");
convertUnderScoreToCamelCase(" Some_Variable");
convertUnderScoreToCamelCase("calculate_AGE");
convertUnderScoreToCamelCase("delayed_departure");

console.log("underscoreCase      ✅".length); // to find the padding //21
const addTick = function (nameArray) {
  console.log(nameArray);
  console.log(nameArray.length);

  for (let i = 0; i < nameArray.length; i++) {
    const line = String(nameArray[i]).padEnd(20, " ") + "✅".repeat(i + 1);
    console.log(line);
  }
};

convertUnderScoreToCamelCase("mUhammed_hisham");

addTick(nameArray);
