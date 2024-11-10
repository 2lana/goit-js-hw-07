function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Функція для генерації випадкового кольору в hex-форматі
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримуємо посилання на кнопку та span
const button = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

// Додаємо обробник події на кнопку
button.addEventListener("click", function () {
  // Генеруємо випадковий колір
  const randomColor = getRandomHexColor();

  // Задаємо цей колір як фон для body
  document.body.style.backgroundColor = `rgb(${parseInt(
    randomColor.slice(1, 3),
    16
  )}, ${parseInt(randomColor.slice(3, 5), 16)}, ${parseInt(
    randomColor.slice(5, 7),
    16
  )})`;

  // Виводимо цей колір у span
  colorSpan.textContent = randomColor;
});
