const symbolLimit = document.querySelector("#validation-input").dataset.length;
const validationInputEl = document.querySelector("#validation-input");

function onInputBlur() {
  if (validationInputEl.value.length === Number(symbolLimit)) {
    classToggle("valid", "invalid");

    // validationInputEl.classList.remove("invalid");
    // validationInputEl.classList.add("valid");
  }

  if (validationInputEl.value.length !== Number(symbolLimit)) {
    classToggle("invalid", "valid");

    // validationInputEl.classList.remove("valid");
    // validationInputEl.classList.add("invalid");
  }
}

function classToggle(addClass, removeClass) {
  validationInputEl.classList.remove(removeClass);
  validationInputEl.classList.add(addClass);
}

validationInputEl.addEventListener("blur", onInputBlur);
