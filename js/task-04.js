const buttonsEl = document.querySelectorAll("button");
const decrementBtn = buttonsEl[0];
const incrementBtn = buttonsEl[1];
const counterValueEl = document.querySelector("#value");

let counterValue = 0;

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
});
