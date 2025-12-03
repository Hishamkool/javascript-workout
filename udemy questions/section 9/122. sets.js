// sets and maps were introduced in es6
// sets are iterable

/* sets methods
1.has
2.delete
4.add
3.size

*/
const debug = false;

const orders = ["pasta", "burger", "pasta", "pasta"];
let orderSet = new Set(orders);

/* 
STRING IS ALSO AN ITERABLE
// const sampleString = "hisham";
// const stringSet = new Set(sampleString);
// debug && console.log("string set ", stringSet); // duplicate h is removed
*/

// working with sets
debug &&
  console.log("How many types of items should be prepared", orderSet.size);
debug && console.log("They are ", orderSet); // order 9s irrelevant

// CHECHING IF ORDER HAS PIZZA
debug && console.log("Does order have pizza init:", orderSet.has("pizza"));
debug && console.log("Does order have Pasta init:", orderSet.has("Pasta")); // case sensitive
debug && console.log("Does order have pasta init:", orderSet.has("pasta")); // case sensitive

orderSet.add("pizza", "donut", "shawarma", "shawarma"); // [CANNOT TAKE IN MUTIPLE VALUES] only first value

// [ADDING] items to a set
// orderSet.add("donut");
// orderSet.add("shawarma");
// orderSet.add("shawarma");
// orderSet.add("shawarma");
// orderSet.add("shawarma");
// lets modify the array instead of adding items to the sets so that we get duplicate items in the arrrray when we give the report to the shef
orders.push("donut"); // these methods are for ARRAYS not sets for SETS use orderSets.add()
orders.push("shawarma");
orders.push("shawarma");
orders.push("shawarma");
orders.push("shawarma");
orderSet = new Set(orders); // refreshing the set
debug && console.log("new order set", orderSet);
// [DELETING] items from the set
orderSet.delete("shawarma");
debug && console.log("order set modified", orderSet); //deleted shawarma

//giving total order to shef including the duplicate items also
let ordersForShef = {};
for (const order of orders) {
  ordersForShef[order] = (ordersForShef[order] || 0) + 1;
}
debug && console.log("Orders for shef:", ordersForShef);

// [TO DELETE ALL ELEMENST]
// orderSet.clear(); // deletes all items

//[NOTE] we can NOT use sets to access elements like orderSet[0] // it will be undefined
// so we can convert the set object literal to array
// sets are like objects without keys

const stafs = [
  "waiter",
  "cheff",
  "main cheff",
  "cheff",
  "cheff",
  "manager",
  "waiter",
  "main manager",
  "cleaner",
  "cleaner",
  "cleaner",
  "waiter",
];

const uniqueStafs = new Set(stafs);
debug && console.log("stafs set", uniqueStafs);

// CONVERTING SETS TO ARRAY TO ACCESS ITEMS
const uniqueStafsArray = [...uniqueStafs];
debug && console.log({ uniqueStafsArray });
debug && console.log("accessing items: ", uniqueStafsArray[3]);

// UNIQUE LETTERS COUNT IN A STRING  -------- .size
let sampleString = "aaaaaaaajsjsjs";
debug && console.log("sample string", sampleString);

debug && console.log("no of letters:", sampleString.length);

debug && console.log("No of unique letters:", new Set(sampleString).size);
debug && console.log("unique letters are:", new Set(sampleString));

const italianFoods = new Set([
  "Pizza",
  "Lasagna",
  "Tiramisu",
  "Bruschetta",
  "Garlic Bread",
  "Risotto",
]);
const mexicanFoods = new Set([
  "Tacos",
  "Burrito",
  "Nachos",
  "Garlic Bread", // common
  "Pizza", // common
  "Churros",
]);

// [COMBINING TWO SETS] - UNION
console.log("\n------------[COMBINING TWO SETS] - UNION------------");

const italianAndMexianFoods = [...italianFoods.union(mexicanFoods)];
console.log({ italianAndMexianFoods });

// we can also do this using spread operator
console.log(
  "Using spread operator for union of all items which are unique sets",
  new Set([...italianFoods, ...mexicanFoods])
);
// we can put the new Set inside an array with spread operator to make it an array instead of set
console.log("Array of unique items sets using spread operator", [
  ...new Set([...italianFoods, ...mexicanFoods]),
]);

console.log("\n------------[DIFFERENCE] - UNIQUE ITEMS------------");

const uniqueMexicoFoods = [...mexicanFoods.difference(italianFoods)];
console.log(
  "Unique mexican foods not there in italian foods",
  uniqueMexicoFoods
);

// unique italian foods
const uniqueItalianFoods = [...italianFoods.difference(mexicanFoods)];
console.log("Unique italian foods", uniqueItalianFoods);

// [INTERSECTION]
// to get commmon elements in two sets
console.log("\n------------[INTERSECTION]-common-elements------------");

const commonFoodsSet = italianFoods.intersection(mexicanFoods);
console.log({ commonFoodsSet });
const commonFoodsArray = [...commonFoodsSet];
console.log({ commonFoodsArray });

// [SYMMETRIC DIFFERENCE]
console.log(
  "\n------------[SYMMETRIC DIFFERENCE] Everything except the common items.------------"
);
//Everything except the common items.
//(A ∪ B) − (A ∩ B)
//join a and b sets then remove the common elements

const uniqueItalianAndMexican = [
  ...italianFoods.symmetricDifference(mexicanFoods),
];
console.log("italian plus mexican minus common :", uniqueItalianAndMexican);

//[isDisjointFrom]
console.log(
  `\n------------[isDisjointFrom] Are these two sets completely separate?------------`
);
//Are these two sets completely separate?

// setA.isDisjointFrom(setB) returns:
// true → if the two sets have NO common elements
// false → if the sets share at least one element

// we expect false as piza and garlic bread exists in both

const isUnique = italianFoods.isDisjointFrom(mexicanFoods);
console.log("Are the sets unique? ", isUnique);
