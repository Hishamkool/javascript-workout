console.log(`\n------------CLOSURE------------`);

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log("Passenger count ", passengerCount);
  };
};
const book = secureBooking();
// event though securebooking function is executed and is removed from the exeution context the book variable which contains the return function still holds all the variable that the parent function had as a closure, thats why we are able to increase the counter

book();
book();
book();
book();

console.log(
  `\n------------closure need not work always on return function it can work like ------------`
);

let f;

const g = function () {
  const a = 12;
  console.log(a);

  f = function () {
    console.log(a * 2);
  };
};
console.log(`\n------------f remembers value of a as a closure------------`);
g();
f();

console.log(`\n------------closures also works in setimeout------------`);
