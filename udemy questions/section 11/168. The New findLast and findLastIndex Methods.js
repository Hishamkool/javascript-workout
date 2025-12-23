const movements = [200, 450, -400, 3000, -650, -130, 70, 1300, 5000];

console.log("Movements:", movements);

const lastWithdrawal = movements.findLast((mov) => mov < 0);
console.log("last withdrawal:", lastWithdrawal);

console.log(`\n------------using index of value------------`);

const indexOfLastWithdrawal = movements.indexOf(lastWithdrawal);
console.log("last withdrawalIndex:", indexOfLastWithdrawal);

console.log(`\n------------using find last index of ------------`);
const lastWithDrawalIndex = movements.findLastIndex((mov) => mov < 0);
console.log("Last withdrawal index :", lastWithDrawalIndex);
console.log(
  `Your last withdrawal was ${
    movements.length - lastWithDrawalIndex - 1
  } movements ago
  `
);

// find latest large movement was x movements ago lets say the amount was abouve 2000

const largetstMovementIndexFirst = movements.findIndex((mov) => mov > 2000);
const largetstMovementIndexLast = movements.findLastIndex((mov) => mov > 2000);
console.log(movements);

console.log(largetstMovementIndexFirst + 1, largetstMovementIndexLast + 1);
