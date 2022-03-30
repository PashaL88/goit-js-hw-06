function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector('[type = "number"]');
const createBtnEL = document.querySelector("[data-create]");
const destroyBtnEL = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

function createBoxes(amount) {
  destroyBoxes();

  amount = inputEl.value;
  let string = "";
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    string += `<div style='width:${boxSize}px; height:${boxSize}px; margin:10px; background-color:${getRandomHexColor()}'></div>`;
    boxSize += 5;
  }
  boxesEl.insertAdjacentHTML("beforeend", string);
}

createBtnEL.addEventListener("click", createBoxes);
destroyBtnEL.addEventListener("click", destroyBoxes);

function destroyBoxes(event) {
  boxesEl.innerHTML = "";
}
