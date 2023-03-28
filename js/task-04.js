const valueEl = document.querySelector('span[id="value"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

btnDecrement.addEventListener('click', handleClickDecrement);
function handleClickDecrement() {
  valueEl.textContent = counterValue -= 1;
}

btnIncrement.addEventListener('click', handleClickIncrement);
function handleClickIncrement() {
  valueEl.textContent = counterValue += 1;
}
