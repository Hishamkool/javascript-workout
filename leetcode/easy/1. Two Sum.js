/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. 

*/

const numbers1 = [2, 7, 11, 15];
const target1 = 9;
const numbers2 = [3, 2, 4];
const target2 = 6;

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] === target) {
      return [i, i + 1];
    }
  }
};

console.log(twoSum(numbers1, target1));
console.log(twoSum(numbers2, target2));
