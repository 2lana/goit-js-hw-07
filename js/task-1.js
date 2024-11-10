// Для кожної категорії виводимо заголовок та кількість елементів
const items = categoriesList.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
  const item = items[i];

  // Заголовок категорії
  const categoryTitle = item.querySelector("h2").textContent;

  // Кількість елементів у категорії
  const categoryItemsCount = item.querySelectorAll("ul > li").length;

  console.log(`Категорія: ${categoryTitle}`);
  console.log(`Кількість елементів: ${categoryItemsCount}`);
}
