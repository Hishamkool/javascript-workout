console.log(`\n------------Running mutiple promises together------------`);

const resolvingProblemOne = new Promise((resolve, reject) => {
  resolve("#Solved question one");
});

const resolvingProblemTwo = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "#Solved question two");
});

const resolvingProblemThree = new Promise((resolve, reject) => {
  reject("#Couldnt solve question three completly");
  resolve("#solved parts of question three");
});

Promise.all([resolvingProblemTwo, resolvingProblemOne, resolvingProblemThree])
  .then((messages) => console.log(messages))
  .catch((error) => console.log(error));

/* [NOTE] Promises should either have a resolve or reject not both without conditions, 
      in promise .all if any of the one promises is rejected the the whole promise is rejected or the catch statement executees
      promise.all executes all promises simultaneously so any one promise that takes a long time like 5 seconds here would affect all the other promises
      promice.race only returns the first fullfiled promise
    */

//------------promice.race------------

// const p1 = new Promise((resolve, reject) =>
//   reject("#Operation failed successfully 🥲")
// );
// const p2 = new Promise((resolve, reject) =>
//   resolve("#Patient 2 had a successful operation😇")
// );

console.log(`\n------------Promise.race() started------------`);

Promise.race([resolvingProblemOne, resolvingProblemThree, resolvingProblemTwo])
  .then((string) => console.log(string))
  .catch((error) => console.log(error))
  .finally(() => console.log("✔️ Promise.race() finished"));
/* [NOTE] : PROMISE .RACE RETURNS THE FIRST COMPUTED / FULLFILED PROMISE IT CAN BE EITHER A RESOLVE OR A REJECT */

//------------Promise - all settled------------

console.log(`\n------------Promise.allSettled() started------------`);

Promise.allSettled([
  resolvingProblemOne,
  resolvingProblemTwo,
  resolvingProblemThree,
])
  .then((messages) => console.log(messages))
  .catch((error) => console.log(error))
  .finally(() => console.log("✔️ promise.allSettled() finished"));
