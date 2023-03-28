const inputSize = document.querySelector('input[id="font-size-control"]');
const spanText = document.querySelector('span[id="text"]');

inputSize.addEventListener('input', handleTextSize);
function handleTextSize() {
  spanText.style.fontSize = inputSize.value + 'px';
}
