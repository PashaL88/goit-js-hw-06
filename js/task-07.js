const inputEL = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEL.addEventListener("input", (event) => {
  textEl.style.fontSize = inputEL.value + "px";
});
