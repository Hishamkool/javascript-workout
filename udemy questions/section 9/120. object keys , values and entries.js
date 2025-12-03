import { restuarant } from "../common/common_objects.js";
// constants
const objectKeys = Object.keys(restuarant.openingHours);
const objectValues = Object.values(restuarant.openingHours);
const objectEntries = Object.entries(restuarant.openingHours);
console.log({ objectEntries });

let logString = `We are open on ${objectKeys.length} days `;
let ie = `that is `;

console.log({ objectKeys, objectValues });
// adding each day to sentence
// for (const string of objectKeys) {
//   ie += string + ", ";
// }
// console.log(logString + ie);

console.log("------------------------");
let onString = "";
for (const [index, [key, { open, close }]] of objectEntries.entries()) {
  // here we use entries method AGAIN to get the index also
  const isLast = index === objectEntries.length - 1;
  if (isLast) {
    onString += `and on ${key} we open at ${open} and close at ${close}.`;
  } else {
    onString += `on ${key} we open at ${open} and close at ${close} ,`;
  }
}
console.log(logString + ie + onString);

/*
 array.entries()
→ Returns an iterator of [index, value] pairs for each element in the array.
- index: position of the item in the array
- value: the element at that index
Useful when you need both index and value in a loop.
*/

/* 
Object.entries(obj)
→ Returns an array of [key, value] pairs from the object.
The key is the object's property name.
The value is the property's value.
Commonly used with for...of to loop through objects.
*/
for (const [key, { open, close }] of objectEntries) {
  // opening hours is an object which has a multiple keys for each day and each key has values as object which contain open and close keys and values
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
