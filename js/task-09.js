function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
buttonEl.addEventListener("click", SetBackgroundColor);
function sayJojo() {
  console.log("Jojo");
  console.log(getRandomHexColor());
}

function SetBackgroundColor() {
  document.body.style.background = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}
