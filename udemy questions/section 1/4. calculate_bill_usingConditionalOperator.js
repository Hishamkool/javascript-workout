const bill = 275;
let tipPercentage;
(bill >= 50 && bill <= 300) ? tipPercentage = 15 / 100 : tipPercentage = 20 / 100;
const tip = tipPercentage * bill;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);