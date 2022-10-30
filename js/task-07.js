const inputEl = document.querySelector("input#font-size-control");
const spanEL = document.querySelector("span#text");

inputEl.addEventListener("change", onInputSlide);

function onInputSlide(event) {
  console.log(event.currentTarget.value);
  spanEL.style.fontSize = String(event.currentTarget.value) + "px";
}
