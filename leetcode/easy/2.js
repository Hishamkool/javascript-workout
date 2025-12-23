/* Add two numbers 
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

*/

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];
var addTwoNumbers = function (l1, l2) {
  let resultArray = [];
  let num1 = "";
  let num2 = "";

  // extracting the values in reverse order
  for (let i = l1.length - 1; i >= 0; i--) {
    num1 += l1[i];
  }
  for (let i = l2.length - 1; i >= 0; i--) {
    num2 += l2[i];
  }
  console.log({ num1, num2 });

  //calculated sum
  const sum = String(Number(num1) + Number(num2));

  //storing in reverse order
  const digits = sum.split("");
  console.log(digits);

  for (const num of digits) {
    // for of loop iterates over values and for in loop iterates over keys
    resultArray.unshift(Number(num));
  }
  return resultArray;
};

console.log(addTwoNumbers(l1, l2));
