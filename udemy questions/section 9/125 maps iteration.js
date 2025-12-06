import { restaurant } from "../common/common_objects.js";
console.log(
  `\n------------USING ARRAYS AS KEY VALUE PAIRS INSTEAD OF USING SET METHOD------------`
);
const question = new Map([
  ["question", "What is the best programing language in the world ?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  [4, "Dart"],
  ["correct", 3],
  [true, "Congratulations You won 🥳🥳🙌"],
  [false, "Better luck next time🙂"],
]);
console.log("", question);

/* 
 Map(8) {
  'question' => 'What is the best programing language in the world ?',
  1 => 'C',
  2 => 'Java',
  3 => 'JavaScript',
  4 => 'Dart',
  'correct' => 3,
  true => 'Congratulations You won 🥳🥳🙌',
  false => 'Better luck next time🙂'
} */
console.log("", Object.entries(restaurant.openingHours));

console.log(`\n------------Converting object literals to map------------`);

const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log("", hoursMap);

console.log(`\n------------to set an object to exsisting map------------`);

// to set the object -opening hours to an exising map
Object.entries(restaurant.openingHours).forEach(([day, hour]) => {
  question.set(day, hour);
});
console.log("", question);

console.log(`\n------------to set an object to a key of map------------`);
question.set("opening hours", restaurant.openingHours);
console.log("", question);
console.log(`\n------------------------`);
// removing opening hours
question.delete("opening hours");
console.log("removed key opening hours :", question);
// removing thu, fri, sat also added using for each

// for (const [key, value] of question) {
//   if (key == Object.keys(restaurant.openingHours)) {
//     question.delete(key);
//   }
// }❌

for (const key of question.keys()) {
  if (restaurant.openingHours.hasOwnProperty(key)) {
    question.delete(key);
  }
}

console.log("removed keys : thu, fri ,sat :", question);

console.log(`\n------------QUIZ APP------------`);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Option ${key} : ${value}`);
  }
}
// const userInput = Number(prompt("Enter the answer:"));
const userInput = 3;

// const correct = question.get("correct");
// if (userInput === correct) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }
//simplifying

console.log(question.get(userInput === question.get("correct"))); // bool true returns the value congrats

console.log(`\n------------CONVERTING MAPS BACK TO ARRAYS------------`);
console.log(question);
console.log([...question]);

// keys
console.log([...question.keys()]);
console.log([...question.values()]);
