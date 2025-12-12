const transactions = [
  500, -200, 1200, -450, -300, 900, -150, 700, -800, 1600, -600, 300, -1000,
  400, -250, 1100, -350, 750, -900, 200,
];

for (const [index, value] of transactions.entries()) {
  if (value > 0) {
    console.log(`${index}: 🟩 You are credited with ${value} `);
  } else {
    console.log(`${index}: 🟥 You are debitted with ${Math.abs(value)}`); // math .abs removes the negative sign
  }
  console.log();
}

console.log(`\n------------DOING THE SAME USING FOR EACH------------`);

transactions.forEach(function (transaction, index) {
  if (transaction > 0) {
    console.log(`${index}: 🟩 You are credited with ${transaction} `);
  } else {
    console.log(`${index}: 🟥 You are debitted with ${Math.abs(transaction)}`); // math .abs removes the negative sign
  }
  console.log();
});
console.log(`syntax: 
   array.forEach(function(element, index, array) {

   element → current value
   index   → current index
   array   → the original array
});

[NOTE] THE ORDER IS VERY IMPORTANT FOR - FOREACH THE FIRST ITEM IS THE ELEMENT AND SECOND ITEM IS INDEX .
IN THE CASE OF ARRAY.ENTRIES() WE CAN DESTRUCTURE IT USING [i, value] WHERE THE FIRST ELEMENT IS THE INDEX AND NOT VALUE.

`);
