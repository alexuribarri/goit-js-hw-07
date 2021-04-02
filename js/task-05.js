const form = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

//console.log(form.nameInput);
function onNameInput() {
  form.nameOutput.innerHTML = `${form.nameInput.value}`;
  if (form.nameInput.value === "") {
    form.nameOutput.innerHTML = `незнакомец`;
  }
}

form.nameInput.addEventListener("input", onNameInput);
