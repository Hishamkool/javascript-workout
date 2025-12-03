// oposite of the spread operator
//  operator ... used in the left side
// [USES] collect multiple items into an array

/*  [REST OPERATOR] */
console.log("------------[REST OPERATOR]----------------------");
// a more simple example for rest operator would be
/* THe rest operator combined all the players in to one array of remaining players  */
const [friend1, friend2, friend3, ...remainingClassmates] = [
  "Astha",
  "Hisham",
  "Imran",
  "aslam",
  "rajeev",
  "pramejit",
  "sagar",
  "adhith",
  "dineesh",
  "ajay",
  "danush",
  "shobith",
];
console.log(
  "Friend one is",
  friend1,
  "Friend two is",
  friend2,
  "friend three is",
  friend3,
  " and the remaining friends are",
  remainingClassmates
);
console.log(
  `Actually ${friend1} and ${friend2} have a crush on each other which they have confessed through their eyes,
they never spoke about it but both of them knew about it, but the others: ${remainingClassmates} are good friends of ${friend2},
but ${friend3} is the best friend of ${friend2}.`
);

console.log("-------------------------------------------------------");

/* [USING SPREAD AND REST TOGETHER] */
console.log(
  "----------------[USING SPREAD AND REST TOGETHER]--------------------"
);

const logTImes = [
  "1am",
  "2am",
  "3pm",
  "4am",
  "5am",
  "6am",
  "7pm",
  "8am",
  "9am",
  "11am",
  "12pm",
  "14am",
];

// the operator on the left is rest operator and the operator on the right is spread operator
// rest operator combines all items in right to others array
// spread operator extracts all items into individual items in the right
const [thursday, friday, sunday, ...others] = ["6am", ...logTImes];
console.log(
  "thursday",
  thursday,
  "friday:",
  friday,
  "sunday:",
  sunday,
  "others",
  others
);
console.log("-------------------------------------------------------");

// [usage 2] functions
let callbackCount = 0;
const addAnyNumberOfParms = function (funName, ...parameters) {
  let sum = 0;
  callbackCount++;
  for (let index = 0; index < parameters.length; index++) {
    sum += parameters[index];
  }
  console.log(
    `The sum function(${callbackCount}) ${
      typeof funName === "number" ? "" : `=>${funName}`
    }: `,
    sum
  );
};
//   using rest operator to get the values of the parameters

addAnyNumberOfParms("first function", 3, 4, 5);
addAnyNumberOfParms(10, 20, 30);
addAnyNumberOfParms(5, 5, 5);
addAnyNumberOfParms(20, 2);

//
const letNumbers = [12, 31, 6, 5, 7, 448];
addAnyNumberOfParms("From array values", ...letNumbers);

console.log(`USAGE
    Operator	Looks like	Meaning
    REST	    ...x        Collects items → used in function parameters
    SPREAD	    ...x        Expands items → used in function calls, arrays, objects
    `);
