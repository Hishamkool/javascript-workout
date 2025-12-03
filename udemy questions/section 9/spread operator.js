// spread operator works on all iterables - arrays , strings , maps , sets but not objects
/* [NOTE] BUT since es 18 spread operator also works with OBJECTS */
// [USES] build new items , pass multiple values to functions, extract elements

//spread operator on strings
const str = "Muhammed hisham";
const letters = [...str, "K", "A"];
console.log("Full name in letters", letters);

// trying destructuring
const [a, b, c, d, e, f, g, h, z, , , , i, j, k] = letters; //in const z we have the space
console.log(a, z, z, z, z, b, c, d, e, f, g, h, i, j, k);

// [NOTE] WE CANNOT USE THIS IN TEMPLATE LITERATLS
// console.log(`the letters are ${...str}`); // expected expression
// but we can log like this
// console.log("Spread String", ...str);

const something = [...str]; // spreads those letters into seperate elements with comas
console.log(`String : ${str}`);
console.log("Spread String", ...str);
console.log(`Spread string array : ${something}`);

/* [NOTE] BUT since es 18 spread operator also works with OBJECTS */
const testObj = {
  name: "Cafe Qatar",
};

let copyTestObj = { ...testObj };

copyTestObj.name = "Wilton";
console.log("resturent obj original", testObj, "New restaurent", copyTestObj);
