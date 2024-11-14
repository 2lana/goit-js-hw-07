// Отримуємо список категорій (ul з id 'categories')
const categoriesList = document.querySelector('#categories');

// Порахувати кількість категорій (кількість елементів li з класом 'item')
const categoriesCount = categoriesList.querySelectorAll('.item').length;
console.log(`Кількість категорій: ${categoriesCount}`);

// Для кожного елемента li.item
categoriesList.querySelectorAll('.item').forEach(item => {
  // Отримуємо заголовок категорії (тег <h2>)
  const categoryTitle = item.querySelector('h2').textContent;

  // Отримуємо кількість елементів у категорії (всі <li>, вкладені в <ul>)
  const categoryItemsCount = item.querySelectorAll('ul > li').length;

  // Виводимо в консоль
  console.log(`Категорія: ${categoryTitle}, Кількість елементів: ${categoryItemsCount}`);
});
