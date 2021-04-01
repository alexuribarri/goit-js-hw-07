//отображаем в консоли количество категорий
const categoriesEl = document.querySelector("#categories");
console.log(`В списке ${categoriesEl.children.length} категории.`);

//создаем функцию, отображающую в консоли нужные данные
const showCatData = (catData) => {
  console.log(`Категория: ${catData.querySelector("h2").textContent}`);
  console.log(`Количество элементов: ${catData.querySelectorAll("li").length}`);
};

//перебираем каждую из категорий и вызываем функцию
const listEl = document.querySelectorAll("li.item");
listEl.forEach(showCatData);
