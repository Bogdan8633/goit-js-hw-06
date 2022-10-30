const inputEl = document.querySelector("input#name-input");
const nameEl = document.querySelector("span#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.trim() !== "") {
    nameEl.textContent = event.currentTarget.value;
  } else {
    nameEl.textContent = "Anonymous";
  }
}
