const inputEl = document.querySelector('input[id = "name-input"]');
const spanEl = document.querySelector('span[id="name-output"]');

inputEl.addEventListener('input', handleInputPlaceholder);
function handleInputPlaceholder(evt) {
  spanEl.textContent = inputEl.value.trim() || 'Anonymous';
}
