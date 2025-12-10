console.log(`\n------------CALL METHOD------------`);

console.log(`\n------------AIR INDIA------------`);
export const airIndia = {
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

export const generateFlightNo = function () {
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
export const qatarAirways = {
  airline: "QATAR AIRWAYS",
  iataCode: "QTA",
  bookings: [],
};

//storing the ariindia booking function to a variable
export const book = airIndia.bookFlight;

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
export const indigoAirways = {
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

console.log(`\n------------BIND METHOD------------`);

// NOW THIS VARIABLE IS ALWAYS BINDED TO QATAR AIRWAYS
const bookFromQATAR_AIRWAYS = book.bind(qatarAirways);
bookFromQATAR_AIRWAYS(generateFlightNo(), "Abdul Razak");
//                    flight number ,     name

console.log(`\n------------binding parameters------------`);

const bookqat123 = book.bind(qatarAirways, "123");
// this binds the quatar airways with flight number always being 123
console.log("all in same flight");

bookqat123("muhammed hisham");
bookqat123("Sabira");
bookqat123("muhammed shameem");

//partial application of bind
console.log(`\n------------APPLICATION OF BIND------------`);
console.log(`Using the same method to perform different task`);

const compnayOne = {
  company: "Hisham Pvt LMT",
};

const compnayTwo = {
  company: "Adani Group",
};
const commonMultiplier = function (name, rate, value) {
  const greetings = "Good Morning";
  const result = value + value * rate;
  console.log(
    `${greetings}, the ${name} is ${result} for the value ${value} of the company ${this.company}`
  );
  return result;
};
/*
 when the common multiplier function didnt have a this.company value 

// here we are passing null because there is not this value in the common multiplier
const addGST = commonMultiplier.bind(null, "GST", 0.18);
addGST(399);
addGST(187);
addGST(88);
addGST(788);

*/

// here we are passing null because there is not this value
console.log(`\n------------hisham group------------`);

const addGST = commonMultiplier.bind(compnayOne, "GST", 0.18);
addGST(187);
addGST(88);
addGST(788);
addGST(399);

console.log(`\n------------adani group------------`);

const addGSTADANI = commonMultiplier.bind(compnayTwo, "GST", 300);
addGSTADANI(399);

console.log(
  `\n------------add vat using same method for gst for hisham group------------`
);

// we need a new function called add vat which has the same format as addGst except that its rate is 0.23 always
const addVat = commonMultiplier.bind(compnayOne, "VAT", 0.23);
addVat(50);
addVat(150);
addVat(230);
addVat(23);

console.log(
  `\n------------function that returns a function that does the same------------`
);

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const gst = addTaxRate(0.18)(399);
console.log(`Gst is ${gst} for the value 399`);

const vat = addTaxRate(0.23)(399);
console.log(`Vat is ${vat} for the value 50`);
