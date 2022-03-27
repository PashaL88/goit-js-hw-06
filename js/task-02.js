const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const array = ingredients.map((ingredient) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("ingridient-item");
  return ingredientEl;
});
console.log(array);

const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...array);
console.log(ingredientsEl);
