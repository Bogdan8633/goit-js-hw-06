const inputEl = document.querySelector("input#font-size-control");
const spanEL = document.querySelector("span#text");

inputEl.addEventListener("change", onInputSlide);

function onInputSlide(event) {
  spanEL.style.fontSize = String(event.currentTarget.value) + "px";
}
