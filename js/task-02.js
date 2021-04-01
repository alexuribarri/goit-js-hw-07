const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
//пременная где будет храниться массив всех элементов списка
const allListEl = document.querySelector("#ingredients");

//функция, которая создаёт элемент и передает его в массив
const createListEl = (element) => {
  const listEl = document.createElement("li");
  listEl.innerText = element;
  allListEl.appendChild(listEl);
};
//перебор массива
ingredients.map(createListEl);
