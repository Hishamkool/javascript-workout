const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

console.log("does it contain exactly -130:", movements.includes(-130));

// to find if there is any depositis in the arrays - positive
console.log(`\n------------some method------------`);

console.log(
  "Any deposits in the account:",
  movements.some((mov) => mov > 0)
);

console.log(`\n------------------------`);

console.log(`\n------------every method------------`);
console.log(
  "every method returns true only if all the items in the array satisfies the condition:"
);

console.log(movements);

// is all the elements
