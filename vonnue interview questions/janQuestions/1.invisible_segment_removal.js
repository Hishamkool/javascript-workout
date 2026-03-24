//condition is that we need to remove exactly one inivisible segment and return the max possible sum of values of the input array
// a segment is called invisible if the max elemne - min element of the segment is less than or equal to the length of the array -1
//max(A[1..r]) - min(A[1..r]) ≤ r - 1
function invisibleSegmentRemoval(arr) {
  const totalSum = arr.reduce((sum, curr) => sum + curr, 0);
  const length = arr.length;
  let maxRemaining = -Infinity;
  function checkIfInvisible(segment) {
    return Math.max(...segment) - Math.min(...segment) <= segment.length - 1;
  }

  for (let i = 1; i <= length; i++) {
    const shortArr = arr.slice(0, i);
    if (checkIfInvisible(shortArr)) {
      const removedSum = shortArr.reduce((sum, curr) => {
        return sum + curr;
      }, 0);
      const remaining = totalSum - removedSum;
      maxRemaining = Math.max(maxRemaining, remaining);
    }
  }

  return maxRemaining;
}

console.log(invisibleSegmentRemoval());

function invisibleSegRem() {}
