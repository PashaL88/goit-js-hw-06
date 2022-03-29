const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    alert("Все поля должны быть заполнены!");
  } else {
    const values = {
      email: email,
      password: password,
    };
    event.currentTarget.reset();
    return console.log(values);
  }
}
