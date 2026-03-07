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
    for (let k = 1; k < nums.length; k++) {
      if (nums[i] + nums[k] === target) {
        return [i, k];
      }
    }
  }
};

console.log(twoSum(numbers1, target1));
console.log(twoSum(numbers2, target2));

// two sums using hash table
var twoSum = function (nums, target) {
  const map = {}; // hash map
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];

    //if the complement value already exists in the map then return their indexes as their sum is target
    if (map.hasOwnProperty(compliment)) {
      return [map[compliment], i];
    }
    // else map of that number is the index of that number example say 2 the index is 0 as first iteration if complement dont exist
    map[nums[i]] = i;
    return [];
  }
};
