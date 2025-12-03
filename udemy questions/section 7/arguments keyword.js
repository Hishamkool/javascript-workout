//anonymous function expression
const addExp = function (a, b) {
  console.log("arguments addExp", arguments); // arguments keyword prints in the arguments and we can pass more thant the defined arguments
  return a + b;
};

// arrow function
const addArrow = (a, b) => {
  console.log("arguments addArrow", arguments);

  a + b;
};

let result;
result = addExp(4, 3, 2, 12, 44); // we can pass more than the defined parameters
console.log("result of function expression", result);

result = addArrow(3, 2, 4, 5, 5);
console.log("result of arrow function", result);
