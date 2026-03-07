/* 
Given an array of integers and a number k, find the maximum sum of any contiguous subarray of size k.

Example Input:
arr = [2, 1, 5, 1, 3, 2]
k = 3

Output:
9

REASON
[2,1,5] → sum = 8
[1,5,1] → sum = 7
[5,1,3] → sum = 9  ← maximum
[1,3,2] → sum = 6

*/

/* i need to calculate the first k digits sum , then set that as max sum , then form next for loop start with the k+1th element modify sum to reduce one element form left and add one element right  then in each iteration set the max value to a variable and then finaly return the max */

const testCases = [
  { arr: [2, 1, 5, 1, 3, 2], k: 3, expected: 9 },
  { arr: [1, 2, 3, 4, 5], k: 2, expected: 9 },
  { arr: [5, 5, 5, 5], k: 2, expected: 10 },
  { arr: [1], k: 1, expected: 1 },
  { arr: [4, 2], k: 2, expected: 6 },
  { arr: [4, 2], k: 1, expected: 4 },
  { arr: [-1, -2, -3, -4], k: 2, expected: -3 },
  { arr: [2, -1, 3, -2, 4, -1], k: 3, expected: 5 },
  { arr: [10, 5, 2, 7, 8, 7], k: 4, expected: 24 },
];
function maxContigiousSum(arr, k) {
  let windowSum = 0;
  //   sum of first k values
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum; //initial max value

  //now lets do sliding window
  for (let i = k; i < arr.length; i++) {
    // sumOFFirstKValues = sumOFFirstKValues - first value + new value
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
testCases.forEach(({ arr, k, expected }) => {
  //   const result = maxSumContigiousSubarray(arr, k);
  const result = maxContigiousSum(arr, k);

  console.log(
    `arr: [${arr}] , | k:${k} | expected:${expected} | got: ${result} | ${expected === result ? "✅PASSED" : "❌FAILED"}`,
  );
});

/* 
 //So i need to move from left to right and only look for continuos element of the size of k and store it somewhere to compare and return the largest 
 //so i is 0 to  < k add all items and store it in a set , on next iteration i is i+1 to k and sum and store to set, keep doing this till arr.length
//from the set return the item with the maximum value

 // my method high complexity and fails for negative values or edge cases with one item in the array 

function maxSumContigiousSubarray(arr, k) {
  const sumSet = new Set();
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (count !== 0) {
      sumSet.add(count);
    }
    count = 0;
    for (j = i; j < i + k && j < arr.length && i + k <= arr.length; j++) {
      count = count + arr[j];
    }
  }

  let max = 0;
  sumSet.forEach((item) => {
    if (item > max) {
      max = item;
    }
  });

  return max;
}
console.log(`\n------------method by me------------`);

testCases.forEach(({ arr, k, expected }) => {
  const result = maxSumContigiousSubarray(arr, k);
  //   const result = maxContigiousSum(arr, k);

  console.log(
    `arr: [${arr}] , | k:${k} | expected:${expected} | got: ${result} | ${expected === result ? "✅PASSED" : "❌FAILED"}`,
  );
});
*/
