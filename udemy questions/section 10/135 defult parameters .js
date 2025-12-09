"use strict";
const createBooking = function (
  flightno,
  noOfPassengers = 1,
  price = 199 * noOfPassengers
) {
  const booking = { flightno, noOfPassengers, price };
  console.log(booking);
};

createBooking("HAHA");
createBooking("HAHA", 2);
createBooking("HAHA", 3);
createBooking("HAHA", null, 1500);
createBooking("HAHA", undefined, 1500);
