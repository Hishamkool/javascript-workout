// console.log("function declaration:", addDec(4, 3));
// console.log("function expression:", addExp(4, 3)); // reference error cannot access before initialization
// console.log("arrow function:", addArrow(4, 3)); //ReferenceError: Cannot access 'addArrow' before initialization

function addDec(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

/* using var can be dangerous as its hoisted to undefined-=========================*/
// eg

if (!productsCount) deleteAllProducts(); // this will execute becase the value of product count  is undefined but we wanted to execute it when product coutnt is 0

var productsCount = 20;
function deleteAllProducts() {
  // localStorage.clear()
  console.log("everything deleted!!!!!!!!!!!!!!");
}
/* --------------------------- */
