/* const years = [1932, 'among us', 1445, 1054, 1000, 2000];
let ages = [];
for (let i = 0; i < years.length; i++) {

    if (typeof years[i] === 'string') continue;
    ages.push(2037 - years[i]); // if the continue statement is not used then the 'among us '  will also go throught the operation and we get NaN
    //[ 105, NaN, 592, 983, 1037, 37 ]


}
    console.log(ages);
     */


const hishamObject = {
    firstName: 'Muhammed',
    secondName: 'Hisham',
    birthYear: 1998,
    job: 'Developer',
    [77]: 'yes 77 is my favorite number',
    friends: ['Imran', 'Aslam'],
    hasDrivingLicence: true,
    // calcAge: function (birthYear = hishamObject.birthYear) {
    calcAge: function () {
        console.log(`Lets see what is 'this':`, this);
        this.age = 2025 - this.birthYear; // here this points to the object which has calcAge function which is hishamObject
        return this.age;
    },
    this: function () {

        console.log(this)
    }
}

/* NOTE:  Javascript automatically converts all the keys into strings */
console.log(`the tupe of key 77 is `, typeof Object.keys(hishamObject)[4]);
Object.keys(hishamObject).forEach(key => console.log(`the key is ${key}  and its type is ${typeof key}`)
);

// to log the array
hishamObject.this();



let hishamArray = [];
Object.values(hishamObject).forEach(value => {
    hishamArray.push(value);
});

console.log(`generated hishamm array: `, hishamArray);

console.log('----------------------------------------');
console.log('LOGGING NON STRINGS VALUES--------');

for (let i = 0; i < hishamArray.length; i++) {
    if (typeof hishamArray[i] === 'string') continue; // continue STOPS the execution
    console.log(hishamArray[i]);
}
console.log('----------------------------------------');
console.log('LOGGING ONLY STRINGS --------');

for (let i = 0; i < hishamArray.length; i++) {
    if (typeof hishamArray[i] !== 'string') continue;
    console.log(hishamArray[i]);
}
console.log('----------------------------------------');
console.log('LOGGING ONLY NUMBERS --------');

for (let i = 0; i < hishamArray.length; i++) {
    if (typeof hishamArray[i] !== 'number') continue;
    console.log(hishamArray[i]);
}
console.log('----------------------------------------');

// CONTINUE STOP THE EXECUTION OF THE FOLLOWING LINES AND GOES TO THE NEXT ITERATION
// continue skips the rest of the current iteration and moves to the next iteration. 


console.log('BREAK........');
console.log('STOP WHEN A NUMBER IS FOUND-----------');
for (let i = 0; i < hishamArray.length; i++) {
    if (typeof hishamArray[i] === 'number') break;
    console.log(hishamArray[i]);
}

console.log('----------------------------------------');
