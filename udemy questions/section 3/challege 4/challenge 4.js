/* CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.



👋 OPTIONAL: You can watch my solution in video format in the next lecture
 */

/* function calcTip() {
    for (let eachbill = 0; eachbill <= bills.length - 1; eachbill++) {
        let tip = bills[eachbill] <= 300 && bills[eachbill] >= 50 ? bills[eachbill] * 0.15 : bills[eachbill] * 0.20;
        tips.push(tip);
        };
        for (let eachTotal = 0; eachTotal <= bills.length - 1; eachTotal++) {
            let total = tips[eachTotal] + bills[eachTotal];
            totals.push(total)
            
            };
            console.log(`TIPS:`, tips);
            console.log(`TOTALS:`, totals);
            }
            calcTip();
            */
"use strict";
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

console.log(`BILLS:`, bills);
let tips = [];
let totals = [];
const calcTip = function (billAmount) {
  return billAmount >= 50 && billAmount <= 300
    ? billAmount * 0.15
    : billAmount * 0.2;
};

for (let index = 0; index < bills.length; index++) {
  const tip = calcTip(bills[index]);
  tips.push(tip);
  totals.push(bills[index] + tip);
}

console.log(`TIPS:`, tips);
console.log(`TOTALS:`, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum = sum + arr[index];
  }
  const average = sum / arr.length;
  return average;
};
console.log(`average bills : `, calcAverage(bills));
console.log(`average tips : `, calcAverage(tips));
console.log(`average totals : `, calcAverage(totals));
