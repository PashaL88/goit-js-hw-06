const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const array = images.map((image) => {
  // const galleryEl = document.createElement("li");
  // const img = document.createElement("img");
  // img.setAttribute("src", image.url);
  // img.setAttribute("alt", image.alt);
  // galleryEl.append(img);
  // return galleryEl;
  const imageEl = `<li class = "gallery-item"><img class = "image" src="${image.url}" alt="${image.alt}" width = '300' height = '200' ></li>`;

  return imageEl;
});
// console.log(array);

const gallery = document.querySelector(".gallery");
// gallery.append(...array);
// const string = array.join("");
// console.log(string);
gallery.insertAdjacentHTML("beforeend", array.join(""));

// CSS styles
gallery.style.display = "flex";
gallery.style.listStyle = "none";
const galleryItem = gallery.querySelectorAll(".gallery-item");
galleryItem.forEach((el) => {
  el.style.marginLeft = "10px";
});
