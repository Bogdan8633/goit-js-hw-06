const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Всі поля мають бути заповнені");
  } else {
    const newObj = {};
    newObj.email = email.value;
    newObj.password = password.value;
    console.log(newObj);
    event.currentTarget.reset();
  }
}
