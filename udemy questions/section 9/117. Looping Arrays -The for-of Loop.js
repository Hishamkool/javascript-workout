const allMenu = [
  "Fococcia",
  "Bruschetta",
  "Garlic Bread",
  "Caprese Salad",
  "Pizza",
  "Pasta",
  "Risotto",
];

// to loop through items in the list
for (const item of allMenu) console.log("Today's Special", item);

//to also get index use array.entries() which will produce each item as an array with 2 elements index and items name eg [0,':Fococcia']
console.log("Menu entries:", ...allMenu.entries());

for (const [i, item] of allMenu.entries()) console.log(`Sl.${i} :${item}  `);
