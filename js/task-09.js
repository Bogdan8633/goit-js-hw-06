function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
buttonEl.addEventListener("click", SetBackgroundColor);

function SetBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.background = randomColor;
  spanEl.textContent = randomColor;
}
