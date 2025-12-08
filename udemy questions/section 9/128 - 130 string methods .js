console.log(`\n------------Working with strings------------`);

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(`\n------------element at using [] ------------`);
console.log("second element of plane", plane[1]);

console.log(`\n------------length------------`);
// length including white spaces
console.log("airline length with spaces", airline.length);

console.log(`\n------------index of------------`);

/* 
T  A  P     A  i  r     P  o  r  t  u  g  a  l
0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
 */
console.log(`T  A  P     A  i  r     P  o  r  t  u  g  a  l
0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
`);

console.log("index of r in airline", airline.indexOf("r")); // not 7 6 becauses index starts at 0
console.log("index of first character -T", airline.indexOf("T")); // [NOTE] ITS CASE SENSITIVE
console.log("index of t", airline.indexOf("t"));

console.log("first occurance of r", airline.indexOf("r"));
console.log("last occurance of r", airline.lastIndexOf("r"));

console.log(
  "index of word - Air\n it gives the starting index of the word",
  airline.indexOf("Air")
);

console.log(`\n------------to extract string form starting index------------`);
console.log("", airline.slice(4)); // prints form air
console.log(
  "[Note] this does not mutate the original string ariline, because strings are primitive"
);

console.log(
  "extract string from starting index to ending index:\n",
  airline.slice(4, 7)
);
console.log(
  "Note here the ending index is excluded always(its space here and its not used)"
);

console.log(`\n------------------------`);

// extracting the first word
console.log(
  "extrating first word with knowing index :",
  airline.slice(0, airline.indexOf(" "))
);
console.log("extracting last word", airline.slice(airline.lastIndexOf(" "))); //everthing from the last occurance of space is printed
console.log(`Every item from last index is printed 
but the problem is the space is also take so we use +1 for the index :${airline.slice(
  airline.lastIndexOf(" ") + 1 // note that plus one is outside the brackets else it will become a string space character plus 1
)}`);

console.log(
  `\n------------negative index slices from the opposite side------------`
);
console.log("extracts last two charactors", airline.slice(-2));
console.log(
  "starts form 0 and ends to before 7 the element from the right :",
  airline.slice(0, -7)
);

console.log(
  `\n------------Checking if the seat number received is a middle seat------------`
);
console.log(
  `\n------------in normal planes there is 6 seats A B C D E F in a row------------`
);
console.log(
  "so B and E are the middle seats\n We need to check if it contains b or e"
);

const checkMiddleSeat = function (seatNo) {
  seatNo.includes("B") || seatNo.includes("E")
    ? console.log("Your on a middle seat", seatNo)
    : console.log("your NOT on a middle seat", seatNo);
};

checkMiddleSeat("11B");
checkMiddleSeat("22A");

const firstPassenger = "hIshAM";
// we will fix this name
const lowerCase = firstPassenger.toLowerCase();
const firstLetterCaptital =
  lowerCase.slice(0, 1).toUpperCase() + lowerCase.slice(1); //first char to upper the add the remaing characters
console.log(firstLetterCaptital);

//  function to correct pasenger name to correct format
const correctAllPasengerName = function (passengerName) {
  const toLowerCase = passengerName.toLowerCase();
  const correctedName =
    toLowerCase[0].toUpperCase() /* to capitalize fist index */ +
    toLowerCase.slice(1); /* to print from 1st index*/

  return correctedName;
};

const testName = "shUbhAM";
console.log(correctAllPasengerName(testName));

//comparing emails
console.log(`\n------------comparing emails------------`);

const originalMailID = "linkedin.hisham@gmail.com";

const userEnteredEmail = "   LInkedin.Hisham@Gmail.com       \n";
console.log({ originalMailID, userEnteredEmail });

console.log(
  "NOTE, the trim operator clear the white spaces at the starting and end and also   removes the new line character "
);

const fixEmail = function (userEnteredEmail) {
  const fixedEmail = userEnteredEmail.toLowerCase().trim();
  return fixedEmail;
};

const fixedEmail = fixEmail(userEnteredEmail);
console.log("fixed email:", fixedEmail);

// testing if the mail ids are the same
console.log(
  `\n------------testing if emails are the same after fixing------------`
);

originalMailID === fixedEmail && console.log("Both the mail are the same");

console.log(`\n------------Replacing parts of string------------`);

// replace creates new string

// const price_Delhi_Kochi = "₹28,000";
// const price_change_due_to_demand = "90000";

const priceIND = "₹28,000";
const priceToUsd = function (price) {
  // 1usd is 90.18 inr

  let result = Number(price.slice(1).replace(",", "")) / 90.18;
  const priceUSD = result.toFixed(2) + " $";

  console.log({ priceIND: price, priceUSD });
  return priceUSD;
};
priceToUsd(priceIND);
priceToUsd("57400");
priceToUsd("3400");

const anouncement = ` All passengers come to boarding door 23. Bording door 23!`;

console.log(anouncement.trim().replaceAll("door", "gate"));
// old method using regualr expressions for replace all
console.log(anouncement.trim().replace(/door/g, "gate")); // g means global or all ocuurances // represents the string

console.log(`\n------------all booleans methods for strings------------`);
console.log(`includes
startsWith
endsWith`);

//check baggage is allowed or not
const checkBage = function (items) {
  const baggage = items.toLowerCase();
  baggage.includes("knife") || baggage.includes("gun")
    ? console.log("You are not allowed onboard")
    : console.log("You are welcome!🙂");
};

checkBage("i have a laptop, some food and a pocket knife");
checkBage("Socks and Camera");
checkBage("Socks and Camera and KNIFE");
checkBage("Got some snacks and a gun for protection");

// 130 video
console.log(`\n------------SPLIT------------`);
const myName = "muhammed hisham ka";
const [firstname, lastname, ...remaining] = myName.split(" "); //splititng with words
console.log({ firstname, lastname, remaining });
const inititals = String(remaining);
console.log({ inititals });

const newName = [
  "Mr.",
  [
    firstname[0].toUpperCase() + firstname.slice(1),
    lastname,
    inititals.toUpperCase().replaceAll("", ".").slice(1, -1),
  ].join(" "),
].join("");

console.log(newName);

//fucntion to format the string and give out nicely formated name
const formatNameString = function (name, gender, married) {
  console.log({ married });

  name = name.toLowerCase();
  gender = gender.toLowerCase();
  let [firstName, lastName, ...rest] = name.split(" ");
  const initials = String(rest)
    .trim()
    .toUpperCase()
    .replaceAll("", ".")
    .replaceAll(" ", "")
    .slice(1, -1);

  const newFirstName = firstName[0].toUpperCase() + firstName.slice(1);
  const newLastName = lastName[0].toUpperCase() + lastName.slice(1);

  const formatedName = [
    (gender === "male" && "Mr.") ||
      (married && gender === "female" ? "Mrs." : "Miss."),
    [newFirstName, newLastName, initials].join(" "),
  ].join("");
  return formatedName;
};

console.log(formatNameString("diNESH kumar c", "male"));
console.log(formatNameString("anuragh sebastian", "male"));
console.log(formatNameString("marry macdonals", "female", true));

const capitalizeName = function (name) {
  const names = name.toLowerCase().split(" "); // array of names
  console.log({ names });
  let newName = [];
  let eachPart;
  for (const n of names) {
    //for each element in names
    // eachPart = n[0].toUpperCase() + n.slice(1); //or we can use to capitalize the first character
    eachPart = n.replace(n[0], n[0].toUpperCase());
    newName.push(eachPart);
  }
  const stringNewName = newName.join(" ");
  console.log("formatted name is :", stringNewName);

  return stringNewName;
};

capitalizeName("diNESH kumar c");

console.log(`\n------------PADDING------------`);
const message = `Go to gate 23!`;
console.log("Length of string: ", message.length);

let paddedMessage = message.padStart(25, "-").padEnd(25 + 14, "-");
console.log(`padded message:'${paddedMessage}'`);

console.log("NOTING CHANGES IF THERE IS NO ENOUGH SPACE FOR PADDING EG:");
console.log(message.padStart(12, "--"));
// here we dont see padding at the start because the required length is only 12 and we already have 14 characters
console.log(message.padEnd(14, "--"));

//generates a random number with these many no of digits

const generateRandomNumber = function (digits) {
  const min = 10 ** (digits - 1);
  const max = 10 ** digits - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(`\n------------MASKING DEBIT CARD NUMBER------------`);

console.log(`\n------------my method------------`);

// challenge marsk a creadit card number only show last 4 digits
const maskDebitCard = function (debitCardNo) {
  console.log({ debitCardNo });

  const stringDebitCardNo = debitCardNo.toString();
  const last4Digits = stringDebitCardNo.slice(-4);

  let resultArray = [];
  for (let n = 0; n < stringDebitCardNo.length - 4; n++) {
    resultArray.push("*");
  }
  for (const n of last4Digits) {
    resultArray.push(n);
  }
  const maskedNum = resultArray.join(" ");
  console.log({ last4Digits, resultArray, maskedNum });
};

maskDebitCard(generateRandomNumber(16));

console.log(`\n------------masking using padding------------`);

//simplest method use pad start
const maskDebitCardPadding = function (num) {
  console.log("debit card number", num);

  const str = num + ""; // makes the num string
  console.log("no of digits", str.length);

  const last = str.slice(-4);

  const masked = last.padStart(str.length, "*");
  //   const spaced = masked.split("").join(" ");
  //   console.log(spaced);
  const formated = masked.replace(/(.{4})/g, "$1 ");
  /* 
    ()      → Capturing group: remembers the matched substring
    .       → Matches any single character
    {4}     → Exactly 4 of the preceding token (here 4 characters)
    g       → Global flag: apply the regex to the whole string, not just the first match
    
    "$1 "   → Replacement string
    $1      → Refers to the content of the first capturing group (the 4 characters matched)
    " "     → Adds a space after each group
  */
  console.log({ formated });
};

console.log(maskDebitCardPadding(generateRandomNumber(16)));

console.log(`\n------------REPEAT------------`);
const message2 = "Bad weather! there are many planes delayed.............. \t";

console.log(message2.repeat(10));

const planesInLine = function (noOfPlanes) {
  console.log(
    `There are ${noOfPlanes} planes waiting in line ${"✈️  ".repeat(
      noOfPlanes
    )}`
  );
};
planesInLine(10);
planesInLine(1);
planesInLine(3);
