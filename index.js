const heading = document.createElement("p");
heading.textContent = "Hallo!";
document.body.append(heading);

const starwarsCharacters = [
  {
    name: "Luke",
    type: "human",
    color: "red",
  },
  {
    name: "R2D2",
    type: "android",
    color: "blue",
  },
  {
    name: "C3PO",
    type: "android",
    color: "yellow",
  },
];

starwarsCharacters.forEach((character) => {
  const characterDiv = document.createElement("div");
  characterDiv.textContent = character.name;
  characterDiv.style.background = character.color;
  document.body.append(characterDiv);
});
