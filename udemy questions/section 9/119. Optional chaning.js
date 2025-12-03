// importing restuarant
// const restuarant = require("./restuarant"); // for node
import { restuarant } from "./destructuring_restuarant";
console.log("------------Optional Chaining------------");
/* restuarant.openingHours.mon &&
  console.log("monday opening time", restuarant.openingHours.mon.open); // monday dosent exist so undefined , but mon.open is error cause undefined .open */

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

//on arrays
const sampleData = [{ name: "shubam", age: 23 }, "kendriya vidhvayala"];
console.log(
  sampleData[0]?.name ?? "student objects dosent exists",
  sampleData[0]?.height ?? "student height not specified 404 error"
);
