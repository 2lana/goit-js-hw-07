// Отримуємо посилання на інпут та спан
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// Додаємо обробник події 'input' для інпута
nameInput.addEventListener("input", function () {
  // Очищаємо значення інпута від пробілів на краях
  const trimmedValue = nameInput.value.trim();

  // Якщо інпут порожній, виводимо "Anonymous"
  if (trimmedValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    // Інакше виводимо значення з інпута
    nameOutput.textContent = trimmedValue;
  }
});
