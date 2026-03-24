// ========================== Sample: Prime Checker ==========================
function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    const limit = Math.floor(Math.sqrt(n));
    for (let i = 3; i <= limit; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

// ========================== Question 1: Bracket Validation =================
function validateBrackets(code) {
    const stack = [];
    const pairs = { '(': ')', '{': '}', '[': ']' };
    for (let ch of code) {
        if (pairs[ch]) {
            stack.push(ch);
        } else if (ch === ')' || ch === '}' || ch === ']') {
            const last = stack.pop();
            if (pairs[last] !== ch) return false;
        }
    }
    return stack.length === 0;
}

// ========================== Question 2: Rotate Packages ====================
function rotatePackages(packages, k) {
    if (!packages.length) return packages;
    k = k % packages.length;
    if (k === 0) return packages.slice();
    return [...packages.slice(-k), ...packages.slice(0, -k)];
}

// ========================== Question 3: Nth Highest Score ==================
function findNthHighestScore(scores, n) {
    // Sort descending and return the nth (1-indexed) element
    const sorted = [...scores].sort((a, b) => b - a);
    return sorted[n - 1];
}

// ========================== Question 4: Minimum Aliens to Remove ===========
function minAliensToRemove(aliens, explorers, energy) {
    const n = aliens.length;

    // Helper to check if starting from index `start` we can defeat all aliens
    function canDefeat(start) {
        let remainingExplorers = explorers;
        let currentEnergy = energy;
        for (let i = start; i < n; i++) {
            const strength = aliens[i];
            while (true) {
                if (currentEnergy > strength) {
                    currentEnergy -= strength;
                    break; // alien defeated
                } else if (currentEnergy === strength) {
                    // both defeated
                    remainingExplorers--;
                    if (remainingExplorers < 0) return false;
                    currentEnergy = energy;
                    break; // alien gone
                } else {
                    // current explorer dies
                    remainingExplorers--;
                    if (remainingExplorers < 0) return false;
                    currentEnergy = energy;
                    // try same alien again with new explorer
                }
            }
        }
        return true;
    }

    // Binary search for the smallest start index that works
    let left = 0, right = n;
    let answer = n; // assume we need to remove all
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (canDefeat(mid)) {
            answer = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return answer; // number to remove = start index
}

// ========================== Question 5: First Non-Repeating Character ======
function firstNonRepeatingChar(ticketId) {
    const count = {};
    for (let ch of ticketId) {
        count[ch] = (count[ch] || 0) + 1;
    }
    for (let i = 0; i < ticketId.length; i++) {
        if (count[ticketId[i]] === 1) return i;
    }
    return -1;
}

// ========================== Question 6: Smallest Missing Book ID ===========
function findSmallestMissingId(bookIds) {
    const set = new Set(bookIds);
    let id = 1;
    while (set.has(id)) id++;
    return id;
}

// ========================== Question 7: Boarding Line (Queue with priority)
class BoardingLine {
    constructor() {
        this.line = [];
    }
    addToEnd(passenger) {
        this.line.push(passenger);
    }
    addToFront(passenger) {
        this.line.unshift(passenger);
    }
    removeFront() {
        return this.line.shift();
    }
    // Optional: peek front
    peekFront() {
        return this.line[0];
    }
}

// ========================== Question 8: Browser History ====================
function processBrowserCommands(commands) {
    const history = []; // stack of visited pages
    let currentIndex = -1;
    const output = [];

    for (let cmd of commands) {
        const parts = cmd.split(' ');
        const action = parts[0];
        if (action === 'VISIT') {
            const url = parts[1];
            // If we are not at the end, discard forward history
            if (currentIndex < history.length - 1) {
                history.length = currentIndex + 1;
            }
            history.push(url);
            currentIndex++;
        } else if (action === 'BACK') {
            if (currentIndex > 0) {
                currentIndex--;
            }
            // In this problem, BACK also outputs the current page
            output.push(history[currentIndex]);
        } else if (action === 'PEEK') {
            output.push(history[currentIndex]);
        }
    }
    return output;
}

// ========================== Question 9: Playlist Manager ===================
function processPlaylistCommands(commands) {
    const playlist = [];
    const output = [];

    for (let cmd of commands) {
        const parts = cmd.split(' ');
        const action = parts[0];
        if (action === 'ADD') {
            const song = parts[1];
            playlist.push(song);
        } else if (action === 'REMOVE') {
            const song = parts[1];
            const index = playlist.indexOf(song);
            if (index !== -1) {
                playlist.splice(index, 1);
                output.push(`Removed ${song}`);
            } else {
                output.push(`Song ${song} not found`);
            }
        } else if (action === 'PLAYLIST') {
            output.push([...playlist]);
        } else if (action === 'SHUFFLE') {
            // Fisher-Yates shuffle
            const shuffled = [...playlist];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            output.push(shuffled);
        }
    }
    return output;
}

// ========================== Question 10: N-Queens (Drone Placement) ========
function solveNQueens(n) {
    const results = [];
    const board = Array.from({ length: n }, () => '.'.repeat(n).split(''));

    function isSafe(row, col) {
        // Check column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'D') return false;
        }
        // Check upper left diagonal
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'D') return false;
        }
        // Check upper right diagonal
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'D') return false;
        }
        return true;
    }

    function backtrack(row) {
        if (row === n) {
            results.push(board.map(r => r.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'D';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    }

    backtrack(0);
    return results;
}

// ========================== Test Cases =====================================
// Sample prime tests
console.log("=== Prime Tests ===");
const primeTests = [
    [7, true],
    [10, false],
    [1, false],
    [2, true],
    [99991, true],
    [100000, false],
    [17, true],
    [25, false],
    [7919, true],
    [0, false]
];
primeTests.forEach(([n, expected], i) => {
    const result = isPrime(n);
    console.log(`Test ${i+1}: ${n} => ${result} (expected ${expected}) ${result === expected ? 'PASS' : 'FAIL'}`);
});

// Additional test for bracket validation
console.log("\n=== Bracket Validation ===");
console.log(validateBrackets("[function(x) { return [x + 1]; }]") ? "PASS" : "FAIL"); // true
console.log(!validateBrackets("if (x > 0) { arr[x] = (x + 2); }") ? "PASS" : "FAIL"); // false

// Rotate packages
console.log("\n=== Rotate Packages ===");
console.log(rotatePackages([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]

// Nth highest score
console.log("\n=== Nth Highest Score ===");
console.log(findNthHighestScore([1,4,2,5,3], 1)); // 5
console.log(findNthHighestScore([1,4,2,5,3], 2)); // 4

// Aliens removal
console.log("\n=== Min Aliens to Remove ===");
console.log(minAliensToRemove([3,1,3,3], 4, 3)); // 0

// First non-repeating char
console.log("\n=== First Non-Repeating Char ===");
console.log(firstNonRepeatingChar("week")); // 0
console.log(firstNonRepeatingChar("aabbcc")); // -1

// Smallest missing ID
console.log("\n=== Smallest Missing ID ===");
console.log(findSmallestMissingId([3,4,2,7,1])); // 5

// Browser history
console.log("\n=== Browser History ===");
const browserCommands = [
    "VISIT google.com",
    "VISIT facebook.com",
    "PEEK",
    "BACK",
    "PEEK",
    "VISIT twitter.com",
    "PEEK"
];
console.log(processBrowserCommands(browserCommands)); // [ 'facebook.com', 'google.com', 'google.com', 'twitter.com' ]

// Playlist manager
console.log("\n=== Playlist Manager ===");
const playlistCommands = [
    "ADD ShapeOfYou",
    "ADD BlindingLights",
    "ADD Levitating",
    "ADD Peaches",
    "REMOVE BlindingLights",
    "REMOVE SomeoneYouLoved",
    "PLAYLIST",
    "SHUFFLE",
    "REMOVE Peaches",
    "PLAYLIST"
];
const results = processPlaylistCommands(playlistCommands);
results.forEach(r => console.log(r));

// N-Queens
console.log("\n=== N-Queens (N=4) ===");
const solutions = solveNQueens(4);
solutions.forEach((sol, i) => {
    console.log(`Solution ${i+1}:`);
    sol.forEach(row => console.log(row));
});