"use strict";
// console.log("global declaration this:  ", this);

// function addDec(a, b) {
//   // console.log("function declaration this:  ", this); //In normal functions without strict mode, this will pojnt to global object which is window but in strict mode it will be undefined

//   return a + b;
// }

// const addArrow = (a, b) => {
//   // console.log("arrow this:  ", this);
//   return a + b;
// };

// addDec(2, 3);
// addArrow(4, 2);
/* 
const hishamObject = {
  firstName: "Muhammed",
  secondName: "Hisham",
  birthYear: 1998,
  job: "Developer",
  77: "yes 77 is my favorite number",
  friends: ["Imran", "Aslam"],
  hasDrivingLicence: true,
  // calcAge: function (birthYear = hishamObject.birthYear) {
  calcAge: function () {
    console.log(`Lets see what is 'this':`, this);
    this.age = 2025 - this.birthYear; // here this points to the object which has calcAge function which is hishamObject
    return this.age;
  },
};

console.log("objects this", hishamObject.calcAge());

// method borrowwing 
let sampleObj = {
  birthYear: 2020,
};

sampleObj.calcAge = hishamObject.calcAge;
console.log("sample object ", sampleObj);
console.log("calculate age from sampleObj", sampleObj.calcAge());
//  in here the this is taken form the sample obj so the    this.age = 2025 - this.birthYear; operation take birthyear form sampleobj and not the hisham Object
//  if there is no birthyear in sampleobj then the result will be undefined

console.log("sample obj", sampleObj);

// [this] from simple function call
const letsCall = hishamObject.calcAge;
// letsCall(); // [this] will be undefined because its calling from a simple function call
console.log("lets call ", letsCall());
 */
var firstName = "shubam";

const hishamObject = {
  firstName: "Muhammed",
  secondName: "Hisham",
  birthYear: 1998,
  job: "Developer",

  hasDrivingLicence: true,

  calcAge: function () {
    this.age = 2025 - this.birthYear; // here this points to the object which has calcAge function which is hishamObject
    // function isMillenial() {
    //   let age = this.age; // this is not passed here because a standard function call dosent have a this of its own
    //   // so type error
    //   // we can use arrow function since it dosent have a [this] of its own it used the [this] from parent object
    //   // or we can use old school method and store [this] in a variable like eg self
    //   console.log("Age is ", age);
    //   console.log("This is an error as age is undefined");
    // }

    // const self = this; // this is still accessable here
    // function isMillenial() {
    //   let age = self.age;
    //   console.log("Age is ", age);
    //   console.log("this passed through storing variable");
    // }

    const isMillenial = () => {
      console.log("Age is ", this.age);
      console.log(
        "Since isMillenial is an arrow function takes [this] form the parent fucntion calc age"
      );
      if (this.birthYear <= 1996 && this.birthYear >= 1981) {
        console.log("is Millenial");

        return true;
      }

      console.log("is not a millenial");
      return false;
    };

    isMillenial();
    return this.age;
  },

  greet: () => {
    console.log(
      "this greet",
      this
    ); /* arrow function doesnt have [this] ,it borrows from parent scope  */

    console.log(`Hey ${this.firstName} have a great day !`);
    // here the first name is shubham as var first name exists in parent score [NOTE : if it was let it wont be taken it will still be undefined]

    return;
  },
};

// hishamObject.greet();

hishamObject.calcAge();

/* Arguments in regular and arrow functions */
//anonymous function expression
const addExp = function (a, b) {
  console.log("arguments addExp", arguments); // arguments keyword prints in the arguments and we can pass more thant the defined arguments
  return a + b;
};

// arrow function
const addArrow = (a, b) => {
  console.log("arguments addArrow", arguments);

  return a + b;
};

let result;
result = addExp(4, 3, 2, 12, 44); // we can pass more than the defined parameters
console.log("result of function expression", result);

result = addArrow(3, 2, 4, 5, 5); // arguments is not defined for arrow function
console.log("result of arrow function", result);
