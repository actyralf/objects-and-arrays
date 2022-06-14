//                        0          1            2
let shoppingList = ["Apples", "Sausages", "Toilet Paper"];

// Accessing array elements by index

console.log(shoppingList[1]);
console.log(shoppingList.length);
shoppingList[1] = "Pasta";
console.log(shoppingList);
shoppingList[3] = "Pizza";
console.log(shoppingList);
shoppingList[10] = "Milk";
console.log(shoppingList);
console.log(shoppingList[12]);

let lottoNumbers = [1, 4, 23, 31, 33, 45];
console.log(lottoNumbers[1]);

// mixed types are ok, but unusual

let mixedArray = [1, true, "Test", undefined, NaN, Infinity];

// Use nested arrays to store data in "Matrix" format
let familyShoppingLists = [
  ["Apples", "Bananas"], // 0
  //    0          1
  ["Chocolate", "Milk"], // 1
  ["Pasta"], // 2
];

familyShoppingLists[1].unshift("Butter");
familyShoppingLists.unshift(["Salt", "Pepper"]);
console.log(familyShoppingLists);

// access nested arrays
console.log(familyShoppingLists[2][0]);

// Modify arrays with push, pop, shift & unshift

shoppingList = ["Apples", "Sausages", "Toilet Paper"];
shoppingList.push("Pizza");
console.log(shoppingList);
let value = shoppingList.pop();
console.log(value);
console.log(shoppingList);
value = shoppingList.shift();
console.log(value);
console.log(shoppingList);
// shoppingList.unshift("Milk");
// console.log(shoppingList);
