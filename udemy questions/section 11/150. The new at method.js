const arr = [23, 11, 64];
console.log(arr[0]);
console.log(`\n------------this can be done using AT METHOD------------`);
//@at
console.log(arr.at(0));

console.log(`\n------------to get the last element------------`);
console.log(arr[arr.length - 1]); //64
arr.slice(); // gives copy of the ccomplete array
console.log(arr.slice(-1)); //[64]
console.log(arr.slice(-1)[0]); //64
console.log(arr.at(-1));

console.log(`\n------------at method works on string as well------------`);
console.log("hisham".at(0));
