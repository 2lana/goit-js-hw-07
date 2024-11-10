// Отримуємо посилання на форму
const loginForm = document.querySelector(".login-form");

// Додаємо обробник події 'submit'
loginForm.addEventListener("submit", function (event) {
  // Перешкоджаємо стандартному перезавантаженню сторінки
  event.preventDefault();

  // Отримуємо значення полів форми
  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();

  // Перевіряємо, чи є незаповнені поля
  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }

  // Якщо всі поля заповнені, створюємо об'єкт з даними форми
  const formData = {
    email: email,
    password: password,
  };

  // Виводимо об'єкт з введеними даними в консоль
  console.log(formData);

  // Очищаємо форму
  loginForm.reset();
});
