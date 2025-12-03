'use strict';
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

    // complex task
    complexFunction: function (a, b, c) {
        // this.complexAnswer = (a ** a * a * a * a * a) ** b * b ** c ** c; // infinity
        this.complexAnswer = a + b + c;
        return this.complexAnswer;
    },
    getSummary: function () {
        //  if you wnat you can save the summary to the object or execute it evertime a value changes
        return `${this.firstName} ${this.secondName}  is ${this.calcAge()} years old and ${this.hasDrivingLicence ? `he has a driving licence` : `dosent have driving licence`}`;
    }
}
console.log(hishamObject[77]);
console.log(hishamObject[80 - 3]);

// brackets helps to do operations instead of just static values
console.log(hishamObject.firstName)
// eg
const nameKey = 'Name';
console.log(`using brackets:`, hishamObject['first' + nameKey]);
console.log(`using brackets:`, hishamObject['second' + nameKey]);

// brackets can be useful when the value is passed later on for example

// NOTE : PROMPT ALWAYS RETURNS STRINGS
/* let promptResult = prompt("What do u want to know about hisham, enter number : 1.firstname 2. lastname 3. friends");
let value;
switch (promptResult) {
    case '1':
        value = 'firstName';
        break;
    case '2':
        value = 'secondName';
        break;
    case '3':
        value = 'friends';
        break;
    default:
        alert('choose a valid option');
        break;
}
console.log(`answer`, hishamObject[value]); // here we use the value received from the promptResult of the user
 */

console.log(`${hishamObject.secondName} has ${hishamObject.friends.length} friends and his best friend is ${hishamObject.friends[0]}`);



const result = hishamObject.calcAge();
console.log(result);

// instead of performing the function multiple times we can execute the task once and store it in the object itslef using the keyworkd this


console.log(`complex result`, hishamObject.complexFunction(154, 55, 66));
console.log(`complex result`, hishamObject.complexAnswer); // since we saved it using this keyword we just have to access the value using the object
console.log(`complex result`, hishamObject.complexAnswer); // we dont have to do the operations over and over again.
console.log(`complex result`, hishamObject.complexAnswer);
console.log(`complex result`, hishamObject.complexAnswer);


/* function getSummary() {
    const value = `${hishamObject.firstName + " " + hishamObject.secondName} is ${hishamObject.age} years old and ${hishamObject.hasDrivingLicence ? `he has a driving licence` : `he dosent have a driving licence`}`;
    console.log(value);
}
getSummary(); */
console.log('Summary of hisham:', hishamObject.getSummary());