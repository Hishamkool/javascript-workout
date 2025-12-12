// slice vs splice

console.log(`\n------------ slice vs splice------------`);

let arr = ["a", "b", "c", "d", "e", "f", "g", "h"];
console.log(arr);

console.log(`\n------------SLICE METHOD------------`);

console.log(
  `\n------------slice creates a new array with syntax slice (first elemnet, last element +1  i.e, last element is not included)------------`
);
console.log(`
syntax : slice(start, end?)

start: index to begin extraction.

end (optional): index before which to stop extraction.

Returns a new array with extracted elements.

Does not change the original array.`);

console.log(arr.slice(1, 3));

console.log(`\n------------from behind------------`);

console.log(arr.slice(-2));

console.log(`\n------------SPLICE METHOD------------`);
console.log(`Splice mutates the original array `);
console.log(`
syntax : splice(start, deleteCount, ...items?)

start: index at which to begin modification.    

deleteCount: number of elements to remove.

items (optional): elements to insert.

Returns an array of deleted elements.

[NOTE] Modifies the original array.
`);

console.log(`to remove the last element`, arr.splice(-1));
console.log(arr);

console.log("removing three items from position one :", arr.splice(1, 3));
console.log("original array is now changed ", arr);

console.log(`\n------------REVERSE METHOD------------`);
// reverse method mutates the original array

arr = ["a", "b", "c", "d", "e", "f", "g", "h"];
console.log("restored array:", arr);
let arr1 = ["m", "l", "k", "j", "i"];
console.log("mutates the original array and reverse it :", arr1.reverse());

console.log(`\n------------CONCATINATION------------`);

// const arrAdd = arr + arr1;
// console.log(arrAdd, typeof arrAdd);

const arrConcat = arr.concat(arr1);
console.log(arrConcat);

console.log(
  `\n------------there are othere methods such as join- arry to string , shift - delete from first  position,  unshift - push from first positon , pop , push ,  etc------------`
);
