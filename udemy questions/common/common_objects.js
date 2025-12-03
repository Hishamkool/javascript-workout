const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

export const restuarant = {
  name: "Hotel Arafa",
  location: "Kakkavayal",
  categories: ["Indian", " Italian", "Chinese", "Vegitarian"],
  starterMenu: ["Fococcia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order(STARTERINDEX, MAININDEX) {
    return [this.starterMenu[STARTERINDEX], this.mainMenu[MAININDEX]];
  },
  /* es6 enhanced object literal */
  //we can pass objects like this
  openingHours,
  //instead of  openingHours: openingHours,
  // funcion need not be mentioned like orderPata  : function (ing1, ...remainingIngredients){//code}
  orderPasta(ing1, ...remaingIngredients) {
    console.log(
      `Here is your delicious pasta! with ${ing1},  and ${remaingIngredients}`
    );
    return "delivered"; // using return beause the nullish operator would execute lhs and rhs of the condition if restaurat.orderpasta ?? 'no method
  },
  orderDelivery({
    items,
    orderDate,
    deliveryDate,
    deliveryTime,
    orderTime,
    starterIndex,
    mainIndex,
  }) {
    !items
      ? console.log(
          `\nOrder Received Successfully ! at ${orderTime}-${orderDate} pm , the items are ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, order will be delivered by ${deliveryTime} pm ${deliveryDate} . \n`
        )
      : console.log(
          `\nOrder Received Successfully ! at ${orderTime}-${orderDate} pm , the items are ${items} , order will be delivered by ${deliveryTime} pm ${deliveryDate} . \n`
        );
  },
};
