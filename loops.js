const fruits = ["Apples", "Bananas", "Cherries"];

function doSomethingWithAFruit(fruit, index) {
  console.log(`The fruit on index ${index} is: ${fruit}`);
}

// Calling forEach with an explicit function

fruits.forEach(doSomethingWithAFruit);

// Calling forEach with an anonymous function

fruits.forEach((fruit, index) => {
  console.log(`The fruit on index ${index} is: ${fruit}`);
});

for (let i = 0; i < fruits.length; i++) {
  console.log(`The fruit on index ${i} is: ${fruits[i]}`);
}

// außerdem: do Loops, while Loops

// Das funktioniert NICHT:
// const a = "Test";
// a = "Ralf";

fruits[1] = "Kiwis";
console.log(fruits);

const fruits2 = fruits;
console.log(fruits2);
fruits2.push("Pear");
console.log(fruits2);
console.log(fruits);
