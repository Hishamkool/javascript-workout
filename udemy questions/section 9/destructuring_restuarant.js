/* [RESTAURANT OBJECT] */
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};
export const restuarant = {
  name: "Hotel Arafa",
  location: "Kakkavayal",
  categories: ["Indian", " Italian", "Chinese", "Vegitarian"],
  starterMenu: ["Fococcia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order(STARTERINDEX, MAININDEX) {
    return [this.starterMenu[STARTERINDEX], this.mainMenu[MAININDEX]];
  },
  /* es6 enhanced object literal */
  //we can pass objects like this
  openingHours,
  //instead of  openingHours: openingHours,
  // funcion need not be mentioned like orderPata  : function (ing1, ...remainingIngredients){//code}
  orderPasta(ing1, ...remaingIngredients) {
    console.log(
      `Here is your delicious pasta! with ${ing1},  and ${remaingIngredients}`
    );
    return "delivered"; // using return beause the nullish operator would execute lhs and rhs of the condition if restaurat.orderpasta ?? 'no method
  },
  orderDelivery({
    items,
    orderDate,
    deliveryDate,
    deliveryTime,
    orderTime,
    starterIndex,
    mainIndex,
  }) {
    !items
      ? console.log(
          `\nOrder Received Successfully ! at ${orderTime}-${orderDate} pm , the items are ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, order will be delivered by ${deliveryTime} pm ${deliveryDate} . \n`
        )
      : console.log(
          `\nOrder Received Successfully ! at ${orderTime}-${orderDate} pm , the items are ${items} , order will be delivered by ${deliveryTime} pm ${deliveryDate} . \n`
        );
  },
};
console.log("------------Exporting variables------------");

// module.exports = restuarant; // for node exports
console.log("------------Optional Chaning (?)------------");

restuarant.openingHours.mon &&
  console.log("monday opening time", restuarant.openingHours.mon.open); // monday dosent exist so undefined , but mon.open is error cause undefined .open

console.log("monday opening time", restuarant.openingHours.mon?.open); // open will only execute open if mon exists

console.log("monday opening time", restuarant.openingHours?.mon?.open); // mon will execute if opening hours exits

// on objects
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restuarant.openingHours[day]?.open ?? "closed"; // nullish operator to prevent undefined , null operator to check if it exists
  console.log(
    `${
      open === "closed"
        ? `on ${day} we are closed`
        : `On ${day} we are open at ${open}`
    }`
  );
}
// on methods
console.log(
  "",
  restuarant.orderPasta?.("mulbery", "chichen") ??
    "order pasta method not defined in restaurant object"
);

console.log("------------For off loop------------");

// [for off loop]
const allMenu = [...restuarant.starterMenu, ...restuarant.mainMenu];
console.log({ allMenu: allMenu });
// for off loop goes through each items in the array and does the operations
// for (const items of allMenu) {
//   console.log("Items :", items);
// }

//to get index of the items we use .entries method - which has an array for each element with its index
console.log("All menu entries:", ...allMenu.entries());

for (const [index, value] of allMenu.entries()) {
  console.log(`We have ${value} at position (${index})`);
}

console.log("------------------------");

// if we want to order garlic bread and pasta
const ordered = restuarant.order(2, 1);
console.log("ordered :", ordered);

console.log("------------Destructuring------------");

// now imagine we want to store these value to a variable we can use destructoring for that
const [starter, mainCourse] = restuarant.order(2, 0);
console.log("starter :", starter);
console.log("main course :", mainCourse);

const { name, openingHours: openingHourss, categories } = restuarant;
console.log(
  "",
  name,
  " is open at",
  openingHours,
  "and has these categories of food items:",
  categories
);

const {
  name: RestuarantName,
  openingHours: OpeningTime,
  categories: Tags,
} = restuarant;

console.log("\nRenaming variables :", "\n", RestuarantName, OpeningTime, Tags);

// default values
console.log("------------Default values------------");

const { menu = [], starterMenu: starters = [] } = restuarant;

console.log(
  "\nmenu items - no items because menu key dosent exist in restuarant:",
  allMenu
);
console.log("startes", starters);

// mutating variables
console.log("------------Mutating variables------------");

let a = 10,
  b = 20;
const numbObj = { a: 20, b: 30 };
({ a, b } = numbObj);
console.log("\n values mutated: ", a, b); // new values set to a and b variables

// accessing object of another object
const {
  fri: { open, close },
} = openingHours; // fri is an object of opening hours
console.log(
  "The restuarant is open on friday at ",
  open,
  " and is closed at ",
  close
);

// destructuring inside the resturant object to log results
restuarant.orderDelivery({
  //   items: ordered,
  starterIndex: 3,
  mainIndex: 2,
  orderTime: "22:30:46",
  orderDate: "2025-11-25",
  deliveryTime: "23:15",
  deliveryDate: "2025-11-25",
});
restuarant.orderDelivery({
  items: ordered,
  //   starterIndex: 3,
  //   mainIndex: 2,
  orderTime: "22:30:46",
  orderDate: "2025-11-25",
  deliveryTime: "23:15",
  deliveryDate: "2025-11-25",
});
console.log("------------Spread Operator------------");

// creating a new menu item using spread operator on a new varriable - wont affect original
const newMenu = [...restuarant.mainMenu, "Gnocci"];

restuarant.orderPasta("macrony cheese", "tomato kechup", "spicy toppings");

const ingredients = [
  // prompt("let's make Pasta , specify ingredients- Name ingredient 1"),
  // prompt("Ingridient 2"),
  // prompt("Ingridient 3"),
  "raika",
  "sabji",
  "meidha",
];

//spread operator extracts individual items form the array and pass them to the function
restuarant.orderPasta(...ingredients);

// rest operator to combine remining items of the list of main menu and starter menu combination
// note left side combines remining foods using REST
// right side speads
//  each items in mainMenu and starterMenu to new array

const wholeList = [...restuarant.starterMenu, ...restuarant.starterMenu];
const [firstItem, , , fourthFood, ...remainingFoods] = wholeList;

console.log(
  "logging first item and third items of the complete list of main menu and starters using destructuring",
  { firstItem, fourthFood, remainingFoods, wholeList },
  "Note remaining food using REST OPERATOR contains elements after the fourth items and we miss pasta and rosotto in remaining  "
);

const { sat, ...timeForWeekDays } = restuarant.openingHours;

console.log({
  "Week end timings - Saturday": sat,
  "opening hours of the week days": timeForWeekDays,
  "all timings": restuarant.openingHours,
});

/* [SHORT CIRCUITING] */
// normal way
let guestCount = restuarant.numGuests ? restuarant.numGuests : 0;

// using shortcircuiting
guestCount = restuarant.numGuests || 0;

console.log("no of guests ", guestCount);
console.log("------------Short Circuting------------");

if (restuarant.mainMenu && restuarant.starterMenu) {
  console.log("Yes restuarent has menu items and statermenu items");
}

// or

// Short-circuit: only run orderPasta() if it's defined.
// If it doesn't exist → do nothing.
restuarant.orderPasta && restuarant.orderPasta("mashrooms", "cheeze");
