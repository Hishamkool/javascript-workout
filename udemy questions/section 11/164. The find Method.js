import { accounts, account1 } from "../common/bank app constats.js";

console.log(`\n------------find method------------`);
console.log(`find method returns the first item that satisfies the condition`);

// find the first withdrawal
const firstWithdrawal = account1.movements.find((item) => item < 0);
console.log("movements :", account1.movements);

console.log("first withdrawal:", firstWithdrawal);
console.log(`\n------------------------`);

// find the account details of jessica
const jessicaAccount = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log("jessicas account details:", jessicaAccount);
