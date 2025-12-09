console.log(
  `\n------------FUNCTION BORROWING OR FUNCTION INNVOCATION METHODS TO CONTROL THE 'this' KEYWORD------------`
);
console.log("they are call, bind and apply");
console.log(
  `They are used to explicitly set the 'this' keyword when calling a function.`
);

//
const hishamDetails = {
  name: "hisham",
  age: 27,
  address: "Abcd at Hollywood",
};

const printDetails = function (state, country) {
  console.log(
    `Hey ${this.name} , you are now ${this.age} years old and your address is ${this.address} you are from ${state} and your country is ${country}`
  );
};

// call method
console.log(`\n------------CALL METHOD WITH THIS ARGUMENT------------`);

printDetails.call(hishamDetails, "Kerala", "India");
// here hisham details is the this argument

console.log(`\n------------APPLY METHOD ------------`);
console.log(
  "Apply method works the same except that the arguments are passed as array of items"
);

printDetails.apply(hishamDetails, ["Tamil Nadu", "INDIA"]);

console.log(
  `\n------------In CALL AND APPLY THE FUNCION IS IMMEDIATELY CALLED FOR BIND IT RETURNS A FUNCTION------------`
);

const detailsBind = printDetails.bind(hishamDetails, "goa", "india");
console.log(detailsBind, "[NOTE] HERE THE FUNCTION IS NOT IMMEDIATELY CALLED");
detailsBind();
