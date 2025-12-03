// ??
// introduced in es 2020

/* nullish values are null and undefined not all falsy values  */

let result = null || 0 || "second truthy value" || "";
console.log("result :", `'${result}'`);

result = null ?? 0 ?? "second truthy value" ?? ""; // first non null value
console.log("result using nullish operator:", result);

const test = "" ?? "hisham"; // [NOTE] '' (empty string) => IS NOT A NULLISH VALUE ITS FALSY BUT NOT NULL
console.log("test:", test);

console.log(
  " [NOTE] '' (empty string) => IS NOT A NULLISH VALUE ITS FALSY BUT NOT NULL , so it will be returned as truth"
);
