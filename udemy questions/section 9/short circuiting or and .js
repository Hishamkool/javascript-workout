/* [SHORT CIRCUIT EVALUATION] */
// it evaluates result based on truthy and false value
console.log(`\n✅ Rule of OR operator (||):
    👉OR returns the first truthy value,
    👉or the last value if all are falsy.\n`);

console.log(3 || "hisham"); // even though both are true it takes first truthy value =3
console.log("" || "hisham"); //=hisham
console.log(undefined || null); // both are falsy values but takes the second =null
console.log(null || "helow"); // second is truthy =helow
console.log(true || 3); // even though both are true it takes first truthy value =true
console.log(0 || 7); // second true =7

console.log(undefined || "" || 0 || "helow world" || 23 || null);
// here the truthy values are hellow world and 23 first truthy gets printed

/* [AND] */
console.log("---[AND]-----------");
console.log(`\n✅ Rule of AND Operator(&&):
👉 AND returns the first falsy value.
👉 If all values are truthy → it returns the last value.\n`);

console.log(
  "Returrns the first falsy value if there are falsy values in the comparison",
  "hello" && 7 && 0 && "helow world"
);
// returns 0 , the first falsy value then it doesnt check the remaing valeus as the result is gona be false anyways

console.log(
  "returns the last truthy value if everthing is true",
  "hello" && 7 && "helow world"
);
// returns the last truthy value if everthing is true
