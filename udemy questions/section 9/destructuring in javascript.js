/* DESTUCTORING ARRAYS */

/*
Destructuring in JavaScript is a feature that allows you to unpack 
values from arrays or objects into individual variables in a clean, easy way. */

/* 
Destructuring is a JavaScript expression that allows you to unpack values
from arrays or extract properties from objects into distinct variables.
It provides a concise syntax for assigning elements or fields from data structures
directly to named variables.

In simple terms: destructuring lets you break complex structures into smaller parts easily.
*/

"use strict";

const arr = [2, 3, 4];
let [a, b, v] = arr;
// console.log("destructured ", a, b, v);
console.log("a: ", a, "b: ", b);

/* [SWITCHING VARIABLES]--------- for changing the values between varaibles (a and b interchange values) */
//normaly
// const temp = a;
// a = b;
// b = temp;
// console.log(`values interchanged  a: ${a}, b ${b}`);

/* but with destructuring we can interchange like this */
[a, b] = [b, a];
console.log(`values interchanged  a: ${a}, b ${b}`);
//no need for temporaray variables -----------------

/* [NESTED DESTRUCTURING]  */
console.log(
  "----------------[NESTED DESTRUCTURING]------------------------------"
);

const nested = [2, 4, [5, 6]];
const [firstnum, , numArray] = nested;
console.log("first num", firstnum, ",num array", numArray);
console.log(
  "Note that we did a empty value between first and num array that skips the 4 in the array"
);
const [, skippedValue] = nested;
console.log("skipped value", skippedValue);

// Now imagine we want to destructure the nested items individually then,
const [first, , [nestedi, nestedj]] = nested;
console.log(
  "first",
  firstnum,
  " ,nested first:",
  nestedi,
  " ,nested second value:",
  nestedj
);

/* [ASSIGNING DEFAULT VALUES] */
console.log(
  "---------------------[ASSIGNING DEFAULT VALUES]-------------------------"
);

// imagine if we dont know a certain value exisits in an array like an api call

const hishamAddress = {
  house_name: "Kunduvayil",
  street: "cheeral",
  pin: 673595,
};

/* const { house, street, pin, district, state } = hishamAddress;
console.log("", house, street, pin, district, state);
console.log(
  "here house is undefined because for objects we need to use the correct key for destructuting , the district and state are not defined hence they are undefined"
); */

/*
const { house_name, street, pin, district, state } = hishamAddress;
console.log("", house_name, street, pin, district, state);
// commenting this out as we cannot reassing const and let variables again for default values , however we can [RENAME ] those values like this
const {house_name : huuuse = 'pallakal house'} = hishamAddress
now console.log(huuuse) works buts that looks complicated so lets just comment this out

*/

/* const {
  house_name = "no house name",
  street = "gandhi street",
  pin = 100,
  district = "Ahmadabad",
  state = "gujarat",
} = hishamAddress;

console.log(' "after assigning default value in case values are not present"');

console.log(house_name, street, pin, district, state); */

/* ----------------------------------------- */

/* NOTE IF YOU WANT TO REASSIGN THEN USE LET BUT MAKE SURE TO WRAP IT WITH BRACKETS IN CASE OF OBJECTS LIKE THIS */
let { house_name, street, pin, district, state } = hishamAddress;

({
  house_name = "no house name",
  street = "gandhi street",
  pin = 100,
  district = "Wayand", //district and state not present in hisham address
  state = "Kerala",
} = hishamAddress); //wrap it with brackets

console.log(house_name, street, pin, district, state);

/* ----------------------------------------- */

/* [RENAMING VALUES IN DESTRUCTURING FOR OBJECTS] */
console.log(
  "--------------[RENAMING VALUES IN DESTRUCTURING FOR OBJECTS] ----------------------------"
);

// this is used in case of objects if required
//syntax: const { originalKey: newVariableName } = object;

// example
const scoreCard = {
  sub: "Maths",
  merk: 97,
};
/* let { subjectName, marksObtained } = scoreCard;
console.log("", subjectName, marksObtained); // here we get undefined because the key names are not as the one defined in object so

({ sub: subjectName, merk: marksObtained } = scoreCard);
console.log("", subjectName, marksObtained); */

// simplifying the above
const { subb, merkk } = scoreCard;
console.log("", subb, merkk); //we get undefined because key names dont match
// imagine if we need to specify a different variable name differnt from key name then we use

const { sub: subjectName, merk: marksObtained } = scoreCard;
console.log("", subjectName, marksObtained);
/* [NOTE]: IN ARRAYS, THE POSITION OF EACH VARIABLE IS IMPORTANT,
   BUT IN OBJECTS, SINCE THEY USE EXACT KEY NAMES, 
   YOU CAN DESTRUCTURE THEM IN ANY ORDER. */
