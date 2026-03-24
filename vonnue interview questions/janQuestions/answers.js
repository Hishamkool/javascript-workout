// ============================================
// Q1. Invisible Segment Removal
// ============================================
/**
 * Problem: Given an array A of length N. A segment [1, r] is invisible if:
 * max(A[1..r]) - min(A[1..r]) <= r - 1
 * You may remove at most one invisible segment. After removal, the remaining
 * elements join together. Return the maximum possible sum of the remaining array.
 * 
 * Example: [3,1,2,4,6] -> 13
 */
function maxSumAfterRemovingInvisibleSegment(arr) {
    const n = arr.length;
    let maxSum = -Infinity;

    // Check all possible segments [l, r] (0-indexed)
    for (let l = 0; l < n; l++) {
        let minVal = Infinity, maxVal = -Infinity;
        for (let r = l; r < n; r++) {
            minVal = Math.min(minVal, arr[r]);
            maxVal = Math.max(maxVal, arr[r]);
            // Check if segment is invisible
            if (maxVal - minVal <= r - l) {
                // Sum of remaining elements
                let sum = 0;
                for (let i = 0; i < n; i++) {
                    if (i < l || i > r) sum += arr[i];
                }
                maxSum = Math.max(maxSum, sum);
            }
        }
    }

    // Also consider removing no segment
    let totalSum = arr.reduce((a, b) => a + b, 0);
    maxSum = Math.max(maxSum, totalSum);

    return maxSum;
}


// ============================================
// Q2. Binary String with One Flip
// ============================================
/**
 * Problem: Given a binary string S. Process left to right, counter starts at 0.
 * On '1': counter += 1
 * On '0': counter -= 1
 * Counter must never become negative.
 * You may flip at most one bit.
 * Return the maximum number of valid prefixes possible.
 * 
 * Example: "01010" -> 5
 */
function maxValidPrefixesAfterFlip(s) {
    const n = s.length;
    let maxValid = 0;

    // Try flipping each bit and also no flip
    for (let flipPos = -1; flipPos < n; flipPos++) {
        let counter = 0;
        let valid = 0;
        let ok = true;
        for (let i = 0; i < n; i++) {
            let bit = s[i];
            if (i === flipPos) {
                bit = bit === '1' ? '0' : '1';
            }
            if (bit === '1') {
                counter++;
            } else {
                counter--;
            }
            if (counter < 0) {
                ok = false;
            }
            if (ok) {
                valid++;
            }
        }
        maxValid = Math.max(maxValid, valid);
    }
    return maxValid;
}


// ============================================
// Q3. Binary Matrix Parity
// ============================================
/**
 * Problem: Given an N x M binary matrix.
 * Operation: Choose any row or column, flip all bits in it (0->1, 1->0).
 * Goal: Make every row and every column contain an even number of 1s.
 * Return "YES" if possible, "NO" otherwise.
 * 
 * Example: 10x10 matrix of zeros -> YES
 */
function canMakeEvenParity(matrix) {
    if (!matrix || matrix.length === 0) return "YES";
    
    const n = matrix.length;
    const m = matrix[0].length;

    let rowParity = new Array(n).fill(0);
    let colParity = new Array(m).fill(0);

    // Calculate parity for each row and column
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            rowParity[i] ^= matrix[i][j];
            colParity[j] ^= matrix[i][j];
        }
    }

    let rowSum = rowParity.reduce((a, b) => a + b, 0);
    let colSum = colParity.reduce((a, b) => a + b, 0);

    // For a solution to exist, the sum of all row parities must equal
    // the sum of all column parities modulo 2
    return (rowSum % 2) === (colSum % 2) ? "YES" : "NO";
}


// ============================================
// Q4. Stable Skyline
// ============================================
/**
 * Problem: Given array H of heights. A skyline is stable if for every index i
 * (1 ≤ i ≤ N-2): |H[i-1] - H[i]| ≤ 1 OR |H[i+1] - H[i]| ≤ 1
 * (each building must be supported by at least one neighbor within height difference ≤ 1)
 * You may remove any number of buildings (keep order).
 * Return the maximum number of buildings that can remain stable.
 * 
 * Example: [5,3,6,2,5,4] -> 5
 */
function maxStableBuildings(heights) {
    const n = heights.length;
    if (n <= 2) return n;
    
    // DP: dp[i][height] = max length of stable sequence ending at index i with given height
    let dp = Array(n).fill().map(() => new Map());
    let maxLen = 1;

    for (let i = 0; i < n; i++) {
        // Start a new sequence with current building
        dp[i].set(heights[i], 1);
        
        for (let j = 0; j < i; j++) {
            const diff = Math.abs(heights[i] - heights[j]);
            // Can only extend if height difference is <= 1
            if (diff <= 1) {
                // Try to extend from all possible heights at j
                for (let [prevHeight, prevLen] of dp[j]) {
                    // Check if this extension maintains stability
                    // For the new sequence ending at i, we need to ensure the previous building
                    // (at j) was supported. Since we're building incrementally, we just need
                    // to ensure the transition is valid.
                    const newLen = prevLen + 1;
                    const currentBest = dp[i].get(heights[i]) || 0;
                    if (newLen > currentBest) {
                        dp[i].set(heights[i], newLen);
                        maxLen = Math.max(maxLen, newLen);
                    }
                }
            }
        }
    }

    return maxLen;
}


// ============================================
// Test Cases
// ============================================
console.log("========== Q1 Test ==========");
console.log("Input: [3,1,2,4,6]");
console.log("Output:", maxSumAfterRemovingInvisibleSegment([3, 1, 2, 4, 6]));
console.log();

console.log("========== Q2 Test ==========");
console.log("Input: \"01010\"");
console.log("Output:", maxValidPrefixesAfterFlip("01010"));
console.log();

console.log("========== Q3 Test ==========");
// Create a 10x10 matrix of zeros
const testMatrix = Array(10).fill().map(() => Array(10).fill(0));
console.log("Input: 10x10 matrix of zeros");
console.log("Output:", canMakeEvenParity(testMatrix));
// Test with a matrix that might be impossible
const impossibleMatrix = [
    [1, 0],
    [0, 1]
];
console.log("Input: [[1,0],[0,1]]");
console.log("Output:", canMakeEvenParity(impossibleMatrix));
console.log();

console.log("========== Q4 Test ==========");
console.log("Input: [5,3,6,2,5,4]");
console.log("Output:", maxStableBuildings([5, 3, 6, 2, 5, 4]));
console.log();

// Additional test cases
console.log("========== Additional Tests ==========");
console.log("Q1 - Empty array:", maxSumAfterRemovingInvisibleSegment([]));
console.log("Q1 - Single element:", maxSumAfterRemovingInvisibleSegment([10]));
console.log("Q2 - All ones:", maxValidPrefixesAfterFlip("111"));
console.log("Q2 - All zeros:", maxValidPrefixesAfterFlip("000"));
console.log("Q3 - 1x1 matrix with 1:", canMakeEvenParity([[1]]));
console.log("Q3 - 2x2 matrix all ones:", canMakeEvenParity([[1,1],[1,1]]));
console.log("Q4 - Already stable:", maxStableBuildings([1,2,3,2,1]));
console.log("Q4 - All same:", maxStableBuildings([5,5,5,5]));