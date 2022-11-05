const counterValue = document.querySelector("#value");
let count = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const render = () => {
  counterValue.textContent = count;
};
function more() {
  count += 1;
  render();
}

function less() {
  count -= 1;
  render();
}

decrementBtn.addEventListener("click", less);
incrementBtn.addEventListener("click", more);
