const categoriesEl = document.querySelector("#categories");
const liItemsEl = categoriesEl.children;
console.log(`Number of categories: ${liItemsEl.length}`);

const itemEl = document.querySelectorAll(".item");

itemEl.forEach((elem) => {
  console.log("Category:", elem.firstElementChild.textContent);
  console.log("Elements:", elem.lastElementChild.children.length);
});
