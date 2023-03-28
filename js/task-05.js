const inputEl = document.querySelector('input[id = "name-input"]');
const spanEl = document.querySelector('span[id="name-output"]');
console.log(spanEl);
console.log(inputEl);

inputEl.addEventListener('input', handleInputPlaceholder);
function handleInputPlaceholder() {
  spanEl.textContent = inputEl.value;
}
