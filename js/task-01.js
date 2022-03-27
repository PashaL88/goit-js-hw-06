const itemEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${itemEl.length}`);
for (const item of itemEl) {
  const titleEl = item.querySelector("h2");
  console.log(`Category: ${titleEl.textContent}`);
  const el = item.querySelectorAll("li");
  console.log(`Elements: ${el.length}`);
}
