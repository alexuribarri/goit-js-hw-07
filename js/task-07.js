const textRange = {
  rangeEl: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};

function onRangeChange() {
  let fontSizeRange = Number(textRange.rangeEl.value) * (16 / 50);
  textRange.textEl.style.fontSize = `${fontSizeRange}px`;
}

textRange.rangeEl.addEventListener("input", onRangeChange);
