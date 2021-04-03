const symbolLimit = document.querySelector("#validation-input").dataset.length;
const validationInputEl = document.querySelector("#validation-input");

function onInputBlur() {
  if (validationInputEl.value.length === Number(symbolLimit)) {
    validationInputEl.classList.remove("invalid");
    validationInputEl.classList.add("valid");
  }

  if (validationInputEl.value.length !== Number(symbolLimit)) {
    validationInputEl.classList.remove("valid");
    validationInputEl.classList.add("invalid");
  }
}

validationInputEl.addEventListener("blur", onInputBlur);
