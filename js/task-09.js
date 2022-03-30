function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorEL = document.querySelector(".color");
const bodyEl = document.querySelector("body");

changeColorBtn.addEventListener("click", onchangeColorBtnClick);

function onchangeColorBtnClick(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorEL.textContent = bodyEl.style.background;
  colorEL.textContent = getRandomHexColor();
}
