function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Отримуємо елементи
const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

// Функція для генерації випадкового кольору в hex-форматі
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Функція для створення коробок
function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10; // Розмір збільшується на 10px для кожного наступного елементу
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = "10px";
    boxes.push(box);
  }

  // Додаємо всі коробки в DOM за одну операцію
  boxesContainer.append(...boxes);
}

// Функція для очищення всіх коробок
function destroyBoxes() {
  boxesContainer.innerHTML = ""; // Очищаємо вміст контейнера
}

// Обробка події для кнопки "Create"
createButton.addEventListener("click", () => {
  const amount = parseInt(input.value);

  // Перевірка на валідність введеного значення
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount); // Створюємо коробки
    input.value = ""; // Очищаємо інпут
  } else {
    alert("Please enter a number between 1 and 100");
  }
});

// Обробка події для кнопки "Destroy"
destroyButton.addEventListener("click", destroyBoxes);
