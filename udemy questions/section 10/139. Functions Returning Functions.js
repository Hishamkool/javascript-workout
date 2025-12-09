console.log(`\n------------FUNCTION RETURNING ANOTHER FUNCTION------------`);

const greet = function (greeting) {
  return function print(personName) {
    console.log(`${greeting}! ${personName}, Have a wonderful day ahead.😄`);
  };
};

const greetResult = greet("Good Morning");
console.log({ greetResult }, "function name:", greetResult.name); // this returns a function
// so if we pass in the argument - person mae to greetResult we get the console.log output

greetResult("Muhammed Hisham");
greetResult("Abubakar");
greetResult("Muhammed Shameem");

console.log(`\n------------------------`);

//passing parameters to inner functions
greet("Hey handsome")("Muhammed Hisham");

console.log(`\n------------doing the same using arrow functions------------`);

const greet2 = (greetings) => (personName) =>
  console.log(
    `${greetings} Mr.${personName} you have successfully used arrow functions in higher order functions!`
  );

greet2("Congradulations 🥳!")("Muhammed Hisham");

console.log(`\n------------------------`);
