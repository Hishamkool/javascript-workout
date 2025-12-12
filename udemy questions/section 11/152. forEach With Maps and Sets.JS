console.log(`\n------------WORKING WITH FOREACH ON MAPS------------`);

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(key, "------------", value);
});

/* 
value is the current element 
key is the key of the element eg (USD)
map is the whole map

*/

console.log(`\n------------FOR EACH ON SETS------------`);

const currenciesUnique = new Set([
  "GBP",
  "GBP",
  "GBP",
  "EUR",
  "EUR",
  "EUR",
  "USD",
  "USD",
  "INR",
]);

console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, set) {
  console.log(value, "------------", key);
});

console.log(
  `In the case of sets the value and key are the same since sets dont have keys or indexes`
);
