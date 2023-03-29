const inputEl = document.querySelector('input[id="validation-input"]');

inputEl.addEventListener('blur', handleControlInput);

function handleControlInput() {
  if (inputEl.value.length > inputEl.dataset.length) {
    inputEl.classList.remove('valid');
    return inputEl.classList.add('invalid');
  }
  inputEl.classList.remove('invalid');
  return inputEl.classList.add('valid');
}
