/* let rep = 1;
while (rep <= 10) {
    console.log(`lifting wheights ${rep}`)
    rep++;

} */

//
/* let dice = Math.round(Math.random() * 6) + 1;
console.log(dice); // this will give result 7 because math.round can give highervalues */

// math .round rounds to the nearest value can be higher or lower
// math .floor always rounds to smalled value , math.celi.always rounds to highest value
// math.trunk just removes the decimal part and keep the part before the decimal it does not do any rounding off

/* WHILE LOOP IS USED WHEN WE DONT KNOW HOW MANY ITERATIONS ARE NEEDED */
let dice = Math.trunc(Math.random() * 6 + 1);

while (dice != 6) {
  console.log(`You rolled a ${dice}`);
  //assingning new value because we need to change the value of the dice else it will be only assigned once and this loop will execute infinitely
  dice = Math.trunc(Math.random() * 6 + 1);
  dice === 6 ? console.log("loop is about to end ......") : "";
}
