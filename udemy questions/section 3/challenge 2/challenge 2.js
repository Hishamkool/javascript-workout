/* 
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.


*/

const calcTip = function (billAmount) {
    let tip;
    billAmount >= 50 && billAmount <= 300 ? tip = billAmount * 0.15 : tip = billAmount * .20;
    return tip;
}


console.log('tip for bill amount 100 : ', calcTip(100));

const bills = new Array(125, 555, 44);
//  or const bills = [125,55,44]

let tips = [];
//  tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]; or
for (let index = 0; index < bills.length; index++) {
    tips.push(calcTip(bills[index]));
}
console.log('tips array', tips);
console.log('bills', bills);
const totals = [];
for (let index = 0; index < bills.length; index++) {
    totals.push(bills[index] + tips[index]);
}
console.log('totals', totals);


/* 
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15
    } else {
        return bill * 0.20
    }
} console.log(calcTip(100));



const bills = [125, 555, 44]
// array of tips
const tips = [calcTip(bills[0]),
calcTip(bills[1]),
calcTip(bills[2])
]
//  array of total
const total = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
]

// output

console.log(bills)
console.log(tips)
console.log(total)
 */