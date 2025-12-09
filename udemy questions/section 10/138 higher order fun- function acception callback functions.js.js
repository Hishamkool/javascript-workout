"use strict";

const oneword = (str) => str.replace(/ /g, "").toLowerCase();

const uppeFirstWord = function (str) {
  const [first, ...rest] = str.split(" ");
  //   console.log({ first, rest });

  return [first.toUpperCase(), ...rest].join(" ");
};

console.log(`\n------------PASSING FUNCTION AS AN ARGUMENT------------`);

// passign funcion as a parameter - HIGHER ORDER FUNCTION
const transformer = function (str, fn) {
  console.log(`original stirng :${str}`);
  console.log(`transformed string: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};

transformer("Javascript is the best language!", uppeFirstWord);
console.log(`\n------------------------`);
//here the upperfirstword and one word are called callback function
transformer("Javascript is the best language!", oneword);

console.log(`\n------------------------`);

const highFy = (person) => console.log("👋  highfy ", person);

//here foreach doesnt work because foreach dosent accept any return statement
const result = ["hisham", "shameem", "sabira"].map(uppeFirstWord);
console.log({ result });
result.forEach(highFy);

console.log(`\n------------------------`);

["shubam", "swapnesh", "hari"].forEach((name) => highFy(uppeFirstWord(name)));
