//" maps can have keys of any data type , this is the difference between object literal and maps"
console.log(
  `\n------------ maps can have keys of any data type , this is the difference between object literal and maps------------`
);

// setitng values in map
console.log(`\n------------Set method------------`);

const restaurant = new Map();
restaurant.set("name", "Classicoo Italiano");
restaurant.set(1, "seat number one");
restaurant
  .set(0, false)
  .set(true, "we are open")
  .set(false, "we are closed")
  .set(9, "open")
  .set(false, "we are closed");
// [NOTE] setting a element also returns the complete map
console.log(
  `\n-----------setting a element also returns the complete map-------------`
);

console.log("setting opening time", restaurant.set("openAt", "9am"));

console.log(`\n------------get method------------`);

// getting values from map
console.log(restaurant.get("name")); // Classicoo Italiano
console.log(`${restaurant.get(true)} `); // we are open

console.log(`\n------------has method returns bool------------`);

console.log("does it have key 9 ?", restaurant.has(9));

console.log(`\n------------Delete method------------`);
restaurant.delete(0);
console.log("delted key 0", restaurant);

console.log(`\n------------clear method------------`);
// clear method clears all the items in the map
// restaurant.clear();
// console.log("", restaurant);

console.log(`\n------------size property------------`);
console.log("map size", restaurant.size);

console.log(`\n------------arrays/obj as keys------------`);

restaurant.set([1, 2], "test array");
console.log("", restaurant);

//even though the key exists its has a differnt memory in heep so we get false
console.log("Does it have the key [1,2] ?", restaurant.has([1, 2]));
console.log("get the value for [1,2]", restaurant.get([1, 2]));

console.log(`\n------------------------`);

// so we do it by storing the array in a variable
const testArray = [2, 3];

console.log(
  "setting [2,3] ",
  restaurant.set(testArray, "new array using variable")
);

console.log("Does it have the key [2,3] ?", restaurant.has(testArray));
console.log("get the value for [2,3]: ", restaurant.get(testArray));
console.log(`\n------------------------`);

console.log(`\n------------using DOM ELEMENTS AS KEYS------------`);

// restaurant.set(document.querySelector("h1"), "main heading of the webpage"); //works on browser note node
// console.log("we can hover over the key 'h1' to actually select the element in debug", restaurant);

console.log(
  'restaurant.set(document.querySelector("h1"), "main heading of the webpage") \n h1=>"main heading of the webpage"'
);
