const buttonsEl = {
  plus: document.querySelector('[data-action="increment"]'),
  minus: document.querySelector('[data-action="decrement"]'),
  counter: document.querySelector("#value"),
};

let counterValue = 0;

function increment() {
  counterValue += 1;
  buttonsEl.counter.innerText = `${counterValue}`;
}

function decrement() {
  counterValue -= 1;
  buttonsEl.counter.innerText = `${counterValue}`;
}

buttonsEl.plus.addEventListener("click", increment);
buttonsEl.minus.addEventListener("click", decrement);
