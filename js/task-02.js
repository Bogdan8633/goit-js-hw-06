const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEL = document.querySelector("#ingredients");

const itemsArray = ingredients.map((item) => {
  const newTag = document.createElement("li");
  newTag.textContent = item;
  newTag.classList.add("item");
  return newTag;
});

ingredientsEL.append(...itemsArray);
