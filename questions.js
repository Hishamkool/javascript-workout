// const a = [1, 2, 5, 7, 8, , 9, 8];
// a.forEach(function (b) {
//     console.log(b);
// });
// console.log("break");
// a.forEach(item => console.log(item));


/* for each function */
// const names = ["anu", "sijo", "shinu", "munu", "shanu ", "chinu ", "richu "];
// sayHello("shubam");
/* normal function - can be called anywhere even before declaration , but anonymous function can be called only once we declare it*/
/* function sayHello(name) {
    console.log("Hellow ", name);
} */
// names.forEach(sayHello);

/* anonymous function inside a forEach */
/* names.forEach(function (name) {
    console.log("hello ", name);
}); */

/* anonymous function  */
/* const varname = function (val) {
    console.log("hwllo world", val);
}

varname(100); */

/* anaon functions cant be called before declaration */


/* Questions
1. What is hoisting ?
    Hoisting is javascripts behaviour of moving declararions (such as functions, variables var are hoisted) to the top of their scope during compilation before code 
    execution.
    let and const are also hoisted but they are in temporal dead zone TDZ until their actual declaration line

*/

/* arrow functions */
/* arrow functions dosent have the keyword function at the start */
/* const mul = function (a, b) {
    return a * b;
}
console.log(mul(5, 6)); */

/* single line arrow functions */
/* const mulSIngleLineArrow = (a, b) => a * b;
console.log(mulSIngleLineArrow(2, 3)); */

/* return string */
// const rtstring = function (val) {
//     return val;
// }

// console.log(rtstring("hisham"));


/* arrow functions with one line */
/* const rtstring = (name) => ("hellow", name);

console.log(rtstring("shubam")); */


/* arrays in js */
// const rtAr = [1, 2, 1, 2, 1, "amongus", 21, 21, 44, 1, 2, 2, 12, 333, 21, 2, 12, 1];
/* const val = rtAr();
console.log(val); */

/* adding values in an array */
/* const addVal = (val) => {

    rtAr.push(val);
    return rtAr;
}
const val = addVal("hey new member");
console.log(val); */

/*  to get the length of the array  */
/* console.log("length of an array =" ,val.length);
console.log("length of an array =" ,val.push()); 
 */

/* let arr = [];
arr[2] = "hellow";
console.log(arr); */

/* objects */
const obj = {
    a: 1,
    name: "Anu",
    roll: 36
}

const fn = function () {
    return obj;
}


/* console.log simpliplified plus creating named parameters */
function cl({ text, value } = {}) {
    if (text != null && value != null) {

        return console.log("message:", text, ", value:", value);
    } else if (value != null) {
        return console.log("value:", value);

    } else if (text != null) {
        return console.log("message:", text);
    }else{
        return console.log("use this format : ' cl({ text: 'message you want to print', value: 1 }); ' ");
    } 
}

// cl({ text: "history", value: 1 });
// cl({ value: 36400 });
cl();
cl({ text:"hey there "}); 