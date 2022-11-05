function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector("input"),
  createBtnEl: document.querySelector("button[data-create]"),
  destroyBtnEl: document.querySelector("button[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};
// let iterator = 0;
console.log(refs);

refs.inputEl.addEventListener("input", createBoxes);
refs.createBtnEl.addEventListener("click", onCreateBtnElClick);
refs.destroyBtnEl.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let divsQuantity = amount.currentTarget.value;
  console.log(`divsQuantity = ${divsQuantity}`);
}

function onCreateBtnElClick() {
  console.log("Create Btn in work");
}

function destroyBoxes() {
  refs.boxesEl.innerHTML = "";
  console.log("DESTROY ALL");
}
