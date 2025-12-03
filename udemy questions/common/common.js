'use strict';
const calcAge = function (birthYear) {
    const now = new Date();
    const year = now.getFullYear();


    return year - birthYear;
}

const bithYearsOfPeople = { 'hisham': 1998, 'razak': 1974, 'sabira': 1976, 'someone': 1980, 'saleema': 1991 };

// for each only works on array not objects
// bithYearsOfPeople.forEach(([name, birthyear]) => {

// for it to wokr use Object .entries

Object.entries(bithYearsOfPeople).forEach(([name, birthyear]) => {
    const age = calcAge(birthyear);
    let indexInWords;
    /*   switch (index) {
          case 0:
              indexInWords = 'first';
              break;
          case 1:
              indexInWords = 'second';
              break;
          case 2:
              indexInWords = 'third';
              break;
          case 3:
              indexInWords = 'foutth';
              break;
          case 4:
              indexInWords = 'fifth';
              break;
          default:
              indexInWords = String(index + 1 + 'th');
              break;
      } */
    console.log(`Age of ${name} is ${age}`);
});

const namesArray = ['hisham', 'shameem'];

// add elements to end
const newLenght = namesArray.push('Abdul Razak');
console.log(newLenght, namesArray);

// add to first
namesArray.unshift('Sabira');
logNames();
function logNames() {
    console.log(namesArray);
}

//  REMOVE ITEMS FORM AN ARRAY 
// remove the last elemet
const whoLeft = namesArray.pop();
logNames();

console.log(`the element removed is '${whoLeft}'`);

// note the push, unshift statments returns the length of the arrray after pushing items to it
//  the pop method returns the element which was poped not the length of the array 


// this removes the first element   - NOTE its shift for REMOVING , and unshift for ADDING first element
namesArray.shift();
logNames();

namesArray.unshift('sabira', 'abdul rasak', 'farhana');
logNames();

// index of returns the index of the element in the array 
// if element is not found it returns -1

// eg
console.log(namesArray.indexOf('farhana')); //2

/* to check if a value exists in an array use incluedes*/
console.log(`includes shyam`, namesArray.includes('shyam'));



/* TO REMOVE AN ITEM AT A PARTICULA INDEX USE SPLICE */

/* NOTE: SPLICE IS ALSO USED TO ADD ELEMENT AT A PARTICULAR INDEX USE DELETE COUNT AS 0
    eg namesArray.splice(5, 0 , 'anima');
    anima will be added to 5th position

*/
/* 
✅ splice() Syntax
array.splice(startIndex, deleteCount, item1, item2, ...)

Parameters:

startIndex → the index where you want to begin changing the array

deleteCount → how many items to remove

(optional) items to insert at that index */
// namesArray.pop(namesArray[2]); THIS IS WRONG WONT WORK- it will only pop the last item

namesArray.splice(2, 1);
logNames();

// if you want to add a location to ur future wife whos name is now known add
namesArray.push(undefined);
logNames();
console.log(`length of array `, namesArray.length);

/* this only removes undefined */
delete namesArray[4];
logNames();

namesArray.push(23
);
logNames();

/* includes returns a bool its just like index of -1 when false  */
let result;
result = namesArray.includes('23'); // it does not do type coerision
console.log(result);
// false because 23 string

result = namesArray.includes(23);
console.log(result); //true

namesArray.includes('shameem') ? console.log('your brothers name is already present in the names array') : '';





const hishamObject = {
    firstName: 'Muhammed',
    secondName: 'Hisham',
    birthYear: 1998,
    job: 'Developer',
    77: 'yes 77 is my favorite number',
    friends: ['Imran', 'Aslam'],
    hasDrivingLicence: true,
    // calcAge: function (birthYear = hishamObject.birthYear) {
    calcAge: function () {
        console.log(`Lets see what is 'this':`, this);
        this.age = 2025 - this.birthYear; // here this points to the object which has calcAge function which is hishamObject
        return this.age;
    },
}
// convert the values of this object into an arrray
let hishamArray = [];
Object.values(hishamObject).forEach(value => {
    hishamArray.push(value);
})
console.log(hishamArray);