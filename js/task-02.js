const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEL = document.querySelector("#ingredients");

for (const obj of ingredients) {
  const newTag = document.createElement("li");
  newTag.textContent = obj;
  newTag.classList.add("item");
  ingredientsEL.append(newTag);
}

// console.log(ingredientsEL);

// const makeLi = ingredients.forEach((elem) => {
//   const newLi = document.createElement("li");
//   newLi.textContent = "elem";
//   newLi.classList.add("item");
// });

// ingredientsEL.append(makeLi);
