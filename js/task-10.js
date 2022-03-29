function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Завдання 2
// let num1 = Number(prompt("Введіть число"));
// let num2 = Number(prompt("Введіть число"));
// let operation = prompt("Введіть знак операції");
// let message = "";

// switch (operation) {
//   case "+":
//     message = `Сума чисел ${num1} і ${num2} = ${num1 + num2}`;
//     console.log(message);
//     break;

//   case "-":
//     message = `Різниця чисел ${num1} і ${num2} = ${num1 - num2}`;
//     console.log(message);
//     break;
//   case "*":
//     message = `Добуток чисел ${num1} і ${num2} = ${num1 * num2}`;
//     console.log(message);
//     break;
//   case "/":
//     message = `Частка чисел ${num1} і ${num2} = ${num1 / num2}`;
//     console.log(message);
//     break;
//   default:
//     console.log("Не може бути здійснена опарація");
// }

// Завдання 3

// let num = Number(prompt("Введіть число"));
// let message = "";
// if (num > 55 && num <= 99) {
//   message = "Введене число потрапляє в діапазон від 55 до 99 (включно)";
//   console.log(message);
// } else {
//   message = "Введене число не потрапляє в діапазон від 55 до 99 (включно)";
//   console.log(message);
// }

// Завдання 1

// function getRandomArbitrary(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }
// const numberRandom = getRandomArbitrary(1, 10);

// const number = Number(prompt("Введіть число від 1 до 10"));
// let message = "";

// if (numberRandom === number) {
//   message = `Вітаю ви вгадали число ${numberRandom}`;
//   console.log(message);
// } else {
//   message = `Ви програли, комп'ютер загадав ${numberRandom}`;
//   console.log(message);
// }

// Завдання 4
// let num1 = Number(prompt("Введіть число"));
// let num2 = Number(prompt("Введіть число"));
// let num3 = Number(prompt("Введіть число"));

// let message = "";
// if (num1 > num2 && num1 > num3) {
//   message = `Найбільше число ${num1}`;
//   console.log(message);
// } else if (num2 > num1 && num2 > num3) {
//   message = `Найбільше число ${num2}`;
//   console.log(message);
// } else if (num3 > num1 && num3 > num2) {
//   message = `Найбільше число ${num3}`;
//   console.log(message);
// } else {
//   message = `Нема найбільшого числа`;
//   console.log(message);
// }

// Завдання 5
// let rating = Number(prompt("Введіть оцінку студента"));
// let message = "";
// if (rating >= 89 && rating <= 100) {
//   message = "Ваша оцінка A";
//   console.log(message);
// } else if (rating >= 75 && rating <= 88) {
//   message = "Ваша оцінка B";
//   console.log(message);
// } else if (rating >= 60 && rating <= 74) {
//   message = "Ваша оцінка C";
//   console.log(message);
// } else if (rating >= 45 && rating <= 59) {
//   message = "Ваша оцінка D";
//   console.log(message);
// } else if (rating >= 20 && rating <= 44) {
//   message = "Ваша оцінка E";
//   console.log(message);
// } else if (rating >= 0 && rating <= 19) {
//   message = "Ваша оцінка F";
//   console.log(message);
// } else {
//   message = "Нема такої оцінки";
//   console.log(message);
// }

// Завдання 6
// let minutes = Number(prompt("Введіть кількість хвилин"));

// console.log(`Вы ввели ${Number.parseInt(minutes / 60)}:${minutes % 60}`);

// Завдання 7
// function capitalize(string) {
//   const words = string.split(" ");
//   const newString = words
//     .map((word) => word[0].toUpperCase() + word.substring(1))
//     .join(" ");
//   console.log(newString);
//   return newString;
// }

// capitalize("the quick brown fox");
// capitalize("Привет! Как дела?");
