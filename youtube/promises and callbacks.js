console.log(`

[NOTES]

1. Callbacks:
   - Functions can be passed as arguments to other functions.
   - The function that executes the callback decides when and what data to pass.
   - successCallback and errorCallback are normal functions called based on conditions.

2. Promises:
   - new Promise() takes one executor function as an argument.
   - The executor receives two functions: resolve and reject.
   - resolve(value) → fulfills the Promise with a value.
   - reject(error) → rejects the Promise with a reason.
   - Important: A Promise settles only once; calling both resolve and reject in the same executor without conditions is incorrect.

3. Consuming Promises:
   - .then() handles fulfilled values (success).
   - .catch() handles rejected values (errors).
   - .finally() executes code regardless of fulfilled or rejected status.

4. Execution order:
   - Synchronous code runs immediately.
   - Promise .then() / .catch() handlers are always deferred in the microtask queue.
   - Therefore, logs or code after a Promise but outside .then() / .catch() run before the Promise handlers.

5. Multiple Promises:
   - Promise.all([p1, p2, p3]) executes all Promises in parallel.
   - If any Promise rejects, the whole Promise.all rejects immediately, skipping .then().
   - If all Promises fulfill, .then() receives an array of all results.
   - Promise.allSettled([p1, p2, p3]) can be used to get all results, whether fulfilled or rejected.
   - Long-running Promises (like setTimeout) affect the final resolution time of Promise.all.

6. Promise.race([p1, p2]):
   - Returns the value of the first settled Promise, whether fulfilled or rejected.
   - Other Promises are ignored for the result.

`);

const userLeft = false;
const userWatchingMems = true;

console.log(
  `\n------------Cheking if user waching tutorials using callbacks------------`
);

function watchingTutotials(successCallback, errorCallback) {
  if (userLeft) {
    errorCallback({ name: "User left", message: "Unfortunately user left" });
  } else if (userWatchingMems) {
    errorCallback({
      name: "User watching Cat memes",
      message: "USer watching cat videos",
    });
  } else {
    successCallback("You are doing a great job!😄");
  }
}

watchingTutotials(
  function (message) {
    console.log("Success: ", message);
  },
  function (error) {
    console.log(`Error: ${error.name} - ${error.message}`);
  }
);

console.log(
  `\n------------ doing the same callback functionality using promises------------`
);

function watchingTutorialsPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) reject({ name: "user left", message: ":-(" });
    else if (userWatchingMems)
      reject({
        name: "watching memes",
        message: "User is watching cat videos",
      });
    else
      resolve(
        "You are doing a great job buddy keeep going , you are the best 😄"
      );
  });
}

watchingTutorialsPromise()
  .then((message) => console.log("Success: " + message))
  .catch((error) => console.log("Error:", error.name + " - " + error.message));

/* 
    [NOTE] .then is for succes callbacks and .catch is for errors  in promises 
    new promise requires two parametere one is resolve call back and one is reject call back 

  */

// console.log(`\n------------------------`);

// console.log("end of function");

// console.log(`\n------------[NOTE] here the end of function runs before promise because:
//    Promise .then() / .catch() handlers never run immediately; they always wait until the current synchronous code completes.
//    and end of function log is a syncronour task------------`);
