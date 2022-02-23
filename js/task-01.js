const itemEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${itemEl.length}`);

const arrayEl = document.querySelectorAll("li.item");
console.log(arrayEl);
for (const item of arrayEl) {
  const titleEl = item.querySelector("h2");
  console.log(`Category: ${titleEl.textContent}`);
  const el = item.querySelectorAll("li");
  console.log(`Elements: ${el.length}`);
}
