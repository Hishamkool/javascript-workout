// logical assignment operators in javascript

const rest1 = {
  name: "Arafa",
  owner: "Mujeeb",
  numSeats: 20,
};
const rest2 = {
  name: "wilton",
  owner: "Hilferdo",
};
const rest3 = {
  name: "ruchi pura",
  owner: "unkown",
  numSeats: 0,
};

// we want to assing a min 10 seats to restuarents if numSeats are not defined
// rest1.numSeats = rest1.numSeats || 10;
// rest2.numSeats = rest2.numSeats || 10;

// 10 seats added to rest 2
console.log({ rest1, rest2, rest3 });

//  doing the same using [logical assignment] or operator
rest1.numSeats ||= 10;
rest2.numSeats ||= 10;

console.log({ rest1, rest2 });

// rest3.numSeats ||= 10;
//actually we needed only 0 as its defined , but since itsa flasy value it get replaced to 10

// to fix this we use [logical nullish] coalesing operator
rest3.numSeats ??= 10;
console.log("rest3 ", rest3); // we get 0 not 10 as expects cause 0 is not a nullish value

// setting encrypted if value exist for first restuarant
const anon = "ANONYMOUS";
rest1.owner = rest1.owner && anon; //returns the first falsy value or last truthy
console.log({ rest1 });

// delete rest1.owner;
// rest1.owner = rest1.owner && anon; //returns the first falsy value or last truthy
// console.log({ rest1 }); // UNDEFINED IS RETURNED

/* [LOGICAL AND ASSIGNMENT OPERATOR] (&&=) */
// it will assign value only if it exists not push first falsy value which is undefined

rest1.owner &&= anon;
console.log({ rest1 }); // UNDEFINED is NOT returned

/* [PRACTICAL EXAMPLE] */

let settings = { theme: "" };
// OR assignment: only if falsy
settings.theme ||= "light";
console.log(settings.theme); // "light"

// AND assignment: only if truthy
let isAdmin = true;
isAdmin &&= "Full Access";
console.log(isAdmin); // "Full Access"

// Nullish assignment: only if null/undefined
let age = null;
age ??= 18;
console.log(age); // 18
