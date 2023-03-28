const inputEl = document.querySelector('input[id="validation-input"]');

inputEl.addEventListener('blur', handleControlInput);

function handleControlInput() {
  if (inputEl.value.length > inputEl.dataset.length) {
    inputEl.classList.add('invalid');
  }
  inputEl.classList.add('valid');
}
