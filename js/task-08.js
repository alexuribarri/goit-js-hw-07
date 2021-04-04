const numberEl = document.querySelector("#controls input");
const renderEl = document.querySelector("#controls [data-action='render']");
const destroyEl = document.querySelector("#controls [data-action='destroy']");
const boxContainerEl = document.querySelector("#boxes");

function colorRandomizer() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function resizer(orderNumber) {
  const measure = 30 + orderNumber * 10;
  return measure;
}

function createBoxes(amount) {
  amount = numberEl.value;
  if (amount < 0 || amount > 100) {
    alert("Минимальное значение: 0; Максимальное значение 100");
    return;
  }
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const color = colorRandomizer();
    const box = document.createElement("div");
    box.style.backgroundColor = `${color}`;
    const size = resizer(i);
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    boxes.push(box);
  }
  boxContainerEl.append(...boxes);
}

function destroyBoxes() {
  boxContainerEl.innerHTML = "";
}

renderEl.addEventListener("click", createBoxes);
destroyEl.addEventListener("click", destroyBoxes);

//console.log(renderEl);
//console.log(destroyEl);
