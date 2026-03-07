const array = ["Vyshnavi", "Divya", "Astha", "Shivangi"];
console.log(`\n------------for ARRAY------------`);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
console.log(`\n------------for of ARRAY------------`);

for (let crush of array) {
  console.log(crush);
}
console.log(`\n------------for in ARRAY------------`);

for (let crush in array) {
  console.log(crush);
}
console.log(`\n------------------------`);

const obj = { name: "vyshnavi", age: 25, city: "banglore" };

console.log(`\n------------for in OBJ------------`);
for (let key in obj) {
  console.log(key, obj[key]);
}

console.log(`\n------------for of OBJ using object.entreis()------------`);
for (let [key, value] of Object.entries(obj)) {
  console.log(key, value);
}

console.log(
  `objects are not itrables so we CANNOT use FOR OF until we convert it to array using OBject.Entries`,
);
