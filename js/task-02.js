const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const allListEl = [];
//функция, которая создаёт элемент и передает его в массив
const createListEl = (element) => {
  const listEl = document.createElement("li");
  listEl.innerText = element;
  allListEl.push(listEl);
};
//перебор массива
ingredients.map(createListEl);

//передача массива в HTML документ
const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...allListEl);
