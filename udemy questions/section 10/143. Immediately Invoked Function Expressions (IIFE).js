const runOnce = function () {
  console.log("This functions should not be called again ");
};

runOnce();
runOnce();

console.log(
  `\n------------IMMEDIATELY INVOKED FUNCTION CALL - IIFC------------`
);

//IIFC
(function () {
  console.log("This function will be executed only once");
})();

(() => console.log("This arrow function also will be exeecuted only once"))();
