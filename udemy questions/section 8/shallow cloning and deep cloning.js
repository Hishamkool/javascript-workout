// /* object reference in practice */
// const jessica = {
//   firstName: "Jessica",
//   lastName: "Williams",
// };

// const marriedJessica = jessica; // here a reference to original jessica is created

// marriedJessica.lastName = "Davis";

// console.log("Before", jessica);
// //here we see that the last name is changed in the original object jessica because objects are stored in heep and a reference is stored in the variables
// console.log("After", marriedJessica);

// USE /* SPREAD OPERATOR */ TO CREATE A NEW OBJECT TO NOT MODIFY THE ORIGINAL
console.log("SHALLOW CLONING------------------------------");

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  family: ["Aron", "athul", "marry", "charlie"],
  favColors: ["Red", "Light Blue"],
};

const marriedJessica = { ...jessica };
function marryPerson(newLastName) {
  marriedJessica.lastName = newLastName;
  return marriedJessica;
}
const result = marryPerson("Davis");

console.log("unMarried jessica", jessica);
console.log("married jessica", result);

// NOTE : all objects or functions of arrays inside an object is also stored as reference only so
// changing the family in married jessica affects the original object jessica

marriedJessica.family.push("Suresh", "Ramesh");

console.log("family members in original jessica", jessica);

// here suresh and ramesh also got added to original list

// SO HERE spread operator does shallow cloning thats why this happens only primitives are copied , nested objects are only stored as reference

console.log(
  "to solve the issue of shallow cloning we use deep cloning using structuredClone so that even nested objects are also cloned instead of keeping references"
);

console.log("DEEP CLONING---------------");
const deepCloneJessica = structuredClone(jessica);

deepCloneJessica.favColors.push("Brown");

console.log(" jessica", jessica);
console.log(
  "Here jessica is not affected when we push color brown due to deep cloning"
);

console.log("deep clone jessica", deepCloneJessica);
console.log("-----------------------------------------------");
