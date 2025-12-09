console.log(`\n------------CALL METHOD------------`);

console.log(`\n------------AIR INDIA------------`);
const airIndia = {
  airline: "AirIndia",
  iataCode: "AI",
  bookings: [],
  bookFlight(flightNumber, passengerName) {
    // printing success message on booking
    console.log(
      `\nHi ${passengerName} you have successfully booked your ticked for the
flight ${this.airline}-${this.iataCode} with a flight number ${flightNumber}, Happy Journey!😀 \n`
        .padStart(200, "-")
        .padEnd(200, "-")
    );
    //adding the booking to the boorkings array
    this.bookings.push({
      flight: `${this.airline}-${this.iataCode}`,
      flightNo: `${flightNumber}`,
      passengerName,
    });
  },
};

const generateFlightNo = function () {
  //converts the random number to base 36 which includes numbers 0-9 and a-z like 0.572398465 → "0.x9b3q" now we use substring to cut the 0 and the decimal and start from the 2nd index to 5th index to include only 3 numbers
  const letters = Math.random().toString(36).substring(2, 5).toUpperCase();
  const random = Math.floor(1000 + Math.random() * 999);
  return String(letters + random);
};

airIndia.bookFlight("23FTY123", "Muhammed hisham");
airIndia.bookFlight(generateFlightNo(), "Muhammed Shameem");
console.log(airIndia.bookings);

console.log(`\n------------QATAR AIRWAYS------------`);

//ANOTHER FLIGHT COMPANY NEEDS THE SAME BOOKING FORMAT
const qatarAirways = {
  airline: "QATAR AIRWAYS",
  iataCode: "QTA",
  bookings: [],
};

//storing the ariindia booking function to a variable
const book = airIndia.bookFlight;

// now we will pass [this] keyword to qatar airways to book QATAIRWAYS FLIGHT
book.call(qatarAirways, generateFlightNo(), "Sahul hameed");
book.call(qatarAirways, generateFlightNo(), "Swapna Suresh");
book.call(qatarAirways, generateFlightNo(), "Girish Kumar");
book.call(qatarAirways, generateFlightNo(), "Aamina Abdullah");
book.call(qatarAirways, generateFlightNo(), "Fathima fida");
console.log("Bookings qta", qatarAirways.bookings);

// since bookFligh function is binded to qatar airways it usess the this. from qatarairline method

console.log(`\n------------INDIGO FLIGHT------------`);

// indigo flight
const indigoAirways = {
  airline: "Indigo Airlines",
  iataCode: "IA",
  bookings: [],
};

book.call(indigoAirways, generateFlightNo(), "Divakar");
book.call(indigoAirways, generateFlightNo(), "Tamil Arasan");
console.log(
  `Bookings indigo flight:${JSON.stringify(indigoAirways.bookings)}`,
  indigoAirways.bookings
);

console.log(`\n------------APPLY METHOD------------`);

book.apply(airIndia, [generateFlightNo(), "Dumakoor"]);

const bookingArray = [generateFlightNo(), "Suresh Raina"];
book.apply(qatarAirways, bookingArray);

//same thing can be done in call method using the spread operator
console.log("same thing can be done by spread operator in call method");
book.call(airIndia, ...bookingArray);
