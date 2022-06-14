const person = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 35,
  movies: ["Starwars 1", "Starwars 2", "Starwars 3"],
  address: {
    city: "Bonn",
    street: "abc",
  },
  "http://google.de": true,
  "first-name": "Ralf",
};

// access via dot notation:
console.log(person.lastName);
console.log(person.age);
console.log(person.movies[1]);
console.log(person.address);
console.log(person.address.city);

person.address.city = "Stuttgart";
console.log(person.address);

person.haircolor = "blond";
console.log(person);

// access via bracket notation
console.log(person["age"]);
console.log(person["http://google.de"]);

let abc = "Tatoine";

person.planet = abc;
console.log(person);
abc = "Test";
console.log(person);

const starwarsCharacters = [
  {
    name: "Luke",
    type: "human",
  },
  {
    name: "R2D2",
    type: "android",
  },
];

console.log(starwarsCharacters);
console.log(starwarsCharacters[0]);
console.log(starwarsCharacters[0].type);
