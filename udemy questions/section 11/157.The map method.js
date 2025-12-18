console.log(`\n------------map method------------`);
console.log(
  `The map method creates a new array and therefore needs a return statement unlike forEach which always returns undefined even if we use return statement`
);
console.log(
  `Use for each when you need to either mutate the original array or do something with each element`
);

// const createUserNames = function (accounts) {
//   const userNames = Object.values(accounts).map(val => val.owner);
//   console.log(userNames);

//   const username = userNames.map(function (val) {
//     return val
//       .split(' ')
//       .map(value => value[0])
//       .join('')
//       .toLowerCase();
//   });
//   console.log(username);
// };
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
const createUserNames = function (accounts) {
  accounts.forEach((acc) => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUserNames(accounts);

console.log(accounts);
