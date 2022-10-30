const counterValue = document.querySelector("#value");
counterValue.textContent = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

function more() {
  counterValue.textContent = Number.parseInt(`${counterValue.textContent}`) + 1;
}

function less() {
  counterValue.textContent = Number.parseInt(`${counterValue.textContent}`) - 1;
}

decrementBtn.addEventListener("click", less);
incrementBtn.addEventListener("click", more);
